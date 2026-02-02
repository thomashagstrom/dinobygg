#!/usr/bin/env node
/* eslint-disable no-console */
import { execSync } from 'node:child_process';
import { readFileSync, existsSync } from 'node:fs';

/**
 * Unified release bump script.
 *
 * Usage:
 *   CU_ID=CU-123abc node scripts/release-bump.mjs patch
 *   CU_ID=CU-123abc node scripts/release-bump.mjs minor
 *   CU_ID=CU-123abc node scripts/release-bump.mjs major
 *
 * Behaviour:
 *  - Ensures git working tree is clean.
 *  - Requires CU_ID (unless ALLOW_PLACEHOLDER=1).
 *  - Runs `npm version <type> --no-git-tag-version`.
 *  - Regenerates the changelog (conventional-changelog).
 *  - Commits staged artifacts with conventional message `chore(release): <version> <CU_ID>`.
 *  - Tags the release and pushes commits + tags.
 */

function run(cmd, inherit = true) {
  return execSync(cmd, { stdio: inherit ? 'inherit' : 'pipe' });
}

function get(cmd) {
  return execSync(cmd, { stdio: 'pipe' }).toString().trim();
}

const type = process.argv[2];
if (!['patch', 'minor', 'major'].includes(type)) {
  console.error('Usage: release-bump.mjs <patch|minor|major>');
  process.exit(1);
}

// const cuId = process.env.CU_ID || '';
// if (!cuId && !process.env.ALLOW_PLACEHOLDER) {
//   console.error(
//     '✖ CU_ID env var required (e.g. CU_ID=CU-123abc). Set ALLOW_PLACEHOLDER=1 to bypass (discouraged).',
//   );
//   process.exit(1);
// }

// if (cuId && !/^CU-[A-Za-z0-9]+$/.test(cuId)) {
//   console.error('✖ CU_ID must match pattern CU-<alphanum>.');
//   process.exit(1);
// }

const status = get('git status --porcelain');
if (status) {
  console.error('✖ Working tree not clean. Commit or stash changes first.');
  process.exit(1);
}

console.log(`🔢 Bumping ${type} version...`);
run(`npm version ${type} --no-git-tag-version`);

console.log('📝 Generating changelog...');
if (!existsSync('CHANGELOG.md')) {
  console.log('ℹ️  CHANGELOG.md missing; generator will initialise content.');
}
run('npm run changelog:generate');

if (!existsSync('CHANGELOG.md')) {
  console.warn('⚠️ CHANGELOG.md missing after generation; verify conventional-changelog setup.');
}

console.log('📦 Staging artifacts...');
run('npm run lint');
run('git add package.json package-lock.json CHANGELOG.md');

const newVersion = JSON.parse(readFileSync('package.json', 'utf8')).version;
const commitMsg = `chore(release): ${newVersion}`;
console.log(`✅ Committing: ${commitMsg}`);
try {
  run(`git commit -m "${commitMsg}"`);
} catch {
  console.error('Commit failed (possibly hook rejection). Amend manually if needed.');
  process.exit(1);
}

const tag = `v${newVersion}`;
run(`git tag ${tag}`);
console.log(`🏷  Tag created: ${tag}`);

console.log('🚀 Pushing commits and tags...');
run('git push');
run('git push --tags');

console.log('\nNext steps:');
console.log('  (Optional) Create GitHub Release from tag.');

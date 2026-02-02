"use client";

import { useState } from "react";
import { BeforeAfter } from "./BeforeAfter";

const projects = [
  {
    title: "Restaurang • Bar",
    before: "/projects/bar-before.jpg",
    after: "/projects/bar-after.jpg",
  },
  {
    title: "Lägenhet • Kök & vardagsrum",
    before: "/projects/apartment-before.jpg",
    after: "/projects/apartment-after.jpg",
  },
  {
    title: "Restaurangkök • Back of house",
    before: "/projects/kitchen-before.jpg",
    after: "/projects/kitchen-after.jpg",
  },
];

export function ProjectCarousel() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? projects.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === projects.length - 1 ? 0 : i + 1));

  const project = projects[index];

  return (
    <div className="relative">
      <div className="mb-4 text-center">
        <h3 className="text-lg font-semibold">{project.title}</h3>
      </div>

      <BeforeAfter
        before={project.before}
        after={project.after}
        alt={project.title}
      />

      {/* Controls */}
      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={prev}
          className="rounded-xl border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-100"
        >
          ← Föregående
        </button>

        <div className="flex gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full ${
                i === index ? "bg-neutral-900" : "bg-neutral-300"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="rounded-xl border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-100"
        >
          Nästa →
        </button>
      </div>
    </div>
  );
}

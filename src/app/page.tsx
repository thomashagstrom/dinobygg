import type { ReactNode } from "react";
import { ProjectCarousel } from "@/components/ProjectCarousel";

function Container({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4">{children}</div>;
}

function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/30 bg-gradient-to-r from-white/20 to-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white">
      {children}
    </span>
  );
}

function SectionTitle({
  eyebrow,
  title,
  subtitle,
  eyebrowClass = "text-sm font-medium text-neutral-500",
  titleClass = "mt-2 text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl",
  subtitleClass = "mt-3 text-neutral-600",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  eyebrowClass?: string;
  titleClass?: string;
  subtitleClass?: string;
}) {
  return (
    <div className="max-w-2xl">
      <div className={eyebrowClass}>{eyebrow}</div>
      <h2 className={titleClass}>{title}</h2>
      {subtitle ? <p className={subtitleClass}>{subtitle}</p> : null}
    </div>
  );
}

function Card({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: ReactNode;
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/0 p-6 text-white shadow-[0_20px_45px_rgba(15,23,42,0.65)] transition duration-200 ease-out hover:-translate-y-1 hover:border-[#ff8b00]/70 hover:shadow-[0_25px_60px_rgba(244,63,94,0.45)]">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-xl border border-white/20 bg-white/10 p-2 text-white">
          {icon}
        </div>
        <div>
          <div className="font-semibold">{title}</div>
          <p className="mt-1 text-sm text-white/70">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function Icon({ name }: { name: "hammer" | "spark" | "check" | "clock" }) {
  const base = "h-5 w-5 text-white";
  if (name === "hammer")
    return (
      <svg
        className={base}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M14 7l3 3" />
        <path d="M13 8l-9 9a2 2 0 0 0 0 3 2 2 0 0 0 3 0l9-9" />
        <path d="M15 5l4 4 1-1a2 2 0 0 0 0-3l-1-1a2 2 0 0 0-3 0z" />
      </svg>
    );
  if (name === "spark")
    return (
      <svg
        className={base}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 2l1.2 4.2L17 7.4l-3.8 1.2L12 13l-1.2-4.4L7 7.4l3.8-1.2L12 2z" />
        <path d="M19 11l.8 2.8L22 14l-2.2.8L19 18l-.8-3.2L16 14l2.2-.2L19 11z" />
      </svg>
    );
  if (name === "check")
    return (
      <svg
        className={base}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M20 6L9 17l-5-5" />
      </svg>
    );
  return (
    <svg
      className={base}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 8v4l3 3" />
      <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
    </svg>
  );
}

const heroStats = [
  {
    label: "Nyckelfärdiga projekt",
    value: "42",
    detail: "levererade hittills i år",
  },
  {
    label: "Planeringsmöten",
    value: "3",
    detail: "veckans uppföljningar på plats",
  },
  {
    label: "Genomsnittlig tid",
    value: "14 v",
    detail: "för totalrenoveringar av lägenheter",
  },
];

const digitalHighlights = [
  {
    title: "Transparent arbetsplan",
    desc: "Dagliga rapporter och visuell tidslinje håller kunder och leverantörer synkade.",
    tag: "plan",
  },
  {
    title: "Noggrant materialval",
    desc: "Vi säkerställer provsamling, ansvar för hållbarhetskrav och tydliga alternativ.",
    tag: "material",
  },
  {
    title: "Personlig projektledning",
    desc: "En erfaren byggmästare följer varje detalj från rivning till sista finish.",
    tag: "ledning",
  },
];

const projectSummaries = [
  {
    title: "Restaurang • Södermalm",
    location: "Totalrenovering med nytt kök och bar",
    result: "Nyckelfärdigt i 8 veckor, fokus på hygien och workflow.",
  },
  {
    title: "Lägenhet • Vasastan",
    location: "Öppen planlösning, skräddarsydd snickeri",
    result: "Badrum, kök och skjutdörrar levererade med passform.",
  },
  {
    title: "Kontorsyta • Hammarby",
    location: "Wi-fi, el, och miljöcertifiering",
    result: "Minskad energiförbrukning och framdrift i tid.",
  },
];

function SpotlightCard({
  title,
  desc,
  tag,
}: {
  title: string;
  desc: string;
  tag: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 text-white shadow-[0_20px_55px_rgba(15,23,42,0.65)] transition duration-200 ease-out hover:-translate-y-1 hover:border-[#ff8b00]/60">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,139,0,0.35),_transparent_55%)] opacity-70 blur-3xl" />
      <div className="relative space-y-3">
        <div className="text-xs font-semibold uppercase tracking-[0.4em] text-orange-200">
          {tag}
        </div>
        <p className="text-xl font-semibold leading-tight">{title}</p>
        <p className="text-sm text-white/70">{desc}</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-white/5 backdrop-blur-xl">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[#f97316] to-[#c026d3] text-white shadow-[0_10px_30px_rgba(249,115,22,0.35)]">
                <span className="text-sm font-semibold">DB</span>
              </div>
              <div className="leading-tight">
                <div className="font-semibold text-white">Din Byggmästare</div>
                <div className="text-xs text-white/70">Renovering • Lägenheter • Restauranger</div>
              </div>
            </div>

            <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
              <a className="hover:text-white" href="#tjanster">
                Tjänster
              </a>
              <a className="hover:text-white" href="#process">
                Process
              </a>
              <a className="hover:text-white" href="#projekt">
                Projekt
              </a>
              <a className="hover:text-white" href="#kontakt">
                Kontakt
              </a>
              <a
                className="rounded-xl border border-white/30 bg-white/10 px-4 py-2 text-white hover:border-[#ff8b00]"
                href="#kontakt"
              >
                Offert
              </a>
            </nav>

            <a
              className="md:hidden rounded-xl border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white"
              href="#kontakt"
            >
              Offert
            </a>
          </div>
        </Container>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-neutral-950 to-neutral-900 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="animate-blob-slow absolute -top-28 left-10 h-72 w-72 rounded-full bg-[#ff8b00]/40 blur-[120px]" />
          <div className="animate-blob-slow absolute -bottom-24 right-16 h-72 w-72 rounded-full bg-[#9333ea]/40 blur-[130px]" />
          <div className="animate-float-slow absolute bottom-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-white/5 blur-[40px]" />
        </div>

        <Container>
          <div className="relative py-14 sm:py-20">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.9fr] lg:items-center">
              <div className="space-y-6">
                <Badge>Totalentreprenad</Badge>
                <Badge>Stockholm & omnejd</Badge>
                <p className="text-xs uppercase tracking-[0.5em] text-orange-200">
                  dinbyggmastare.se
                </p>

                <h1 className="text-4xl font-bold leading-snug text-white sm:text-5xl lg:text-6xl">
                  Din Byggmästare levererar moderna bygg- och renoveringsprojekt med tydlig plan och stark finish.
                </h1>
                <p className="text-lg text-white/70">
                  Vi kombinerar gedigen byggkompetens med digitala processer för att hålla tidplanen, minimera avvikelser och säkerställa en premiumfinish varje gång. Projektledaren från oss synkar dagligen med era team och rapporterar till beslutsfattare i realtid.
                </p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="#kontakt"
                    className="rounded-full bg-gradient-to-r from-[#ff8b00] to-[#f43f5e] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_25px_60px_rgba(244,63,94,0.45)] transition hover:shadow-[0_30px_70px_rgba(244,63,94,0.55)]"
                  >
                    Boka kostnadsfri offert
                  </a>
                  <a
                    href="#projekt"
                    className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white/90 transition hover:border-[#ff8b00]"
                  >
                    Se animationer
                  </a>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {heroStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white/80 backdrop-blur"
                    >
                      <div className="text-xs uppercase tracking-[0.3em] text-white/40">
                        {stat.label}
                      </div>
                      <div className="mt-2 text-2xl font-semibold">{stat.value}</div>
                      <p className="text-[0.8rem] text-white/60">{stat.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative w-full max-w-[520px]">
                <div className="relative rounded-[32px] border border-white/20 bg-black/70 p-4 shadow-[0_45px_90px_rgba(15,23,42,0.75)]">
                  <div className="pointer-events-none absolute inset-x-4 top-4 h-20 rounded-[28px] bg-[radial-gradient(circle,_rgba(244,63,94,0.35),_transparent_65%)] blur-3xl opacity-80" />
                  <div className="relative">
                    <ProjectCarousel />
                  </div>
                </div>
                <div className="mt-3 text-center text-xs uppercase tracking-[0.4em] text-orange-200">
                  Före & efter – hero showcase
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-gradient-to-br from-neutral-950 via-slate-950 to-[#0f172a] text-white">
        <Container>
          <div className="py-16">
          <SectionTitle
            eyebrow="Planering & bygg"
            title="Aggressiva färgspråk och levande animationer"
            subtitle="Ny layout som visar styrkan i Din Byggmästare - på skärmen och i verkliga projekt."
              eyebrowClass="text-sm font-semibold uppercase tracking-[0.3em] text-orange-200"
              titleClass="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
              subtitleClass="mt-3 text-white/70"
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {digitalHighlights.map((item) => (
                <SpotlightCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="tjanster" className="border-y border-white/10 bg-slate-950 py-14 sm:py-20">
        <Container>
          <SectionTitle
            eyebrow="Tjänster"
            title="Helhetslösning för renovering"
            subtitle="Vi kan ta totalentreprenad eller hjälpa till med delar - alltid med tydlig plan och kvalitet i varje steg."
            eyebrowClass="text-sm font-semibold uppercase tracking-[0.3em] text-white/70"
            titleClass="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
            subtitleClass="mt-3 text-white/70"
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card
              title="Lägenhetsrenovering"
              desc="Kök, badrum, ytskikt, planlösning. Från idé till färdigt hem."
              icon={<Icon name="hammer" />}
            />
            <Card
              title="Restaurangrenovering"
              desc="Kök & servering med fokus på flöde, hygienkrav och slitstyrka."
              icon={<Icon name="spark" />}
            />
            <Card
              title="Snickeri & ytskikt"
              desc="Golv, väggar, tak, lister, speciallösningar och finsnickeri."
              icon={<Icon name="check" />}
            />
            <Card
              title="Koordinering av el/VVS"
              desc="Vi samordnar behöriga aktörer och håller ihop tidsplanen."
              icon={<Icon name="clock" />}
            />
            <Card
              title="Riv & återuppbyggnad"
              desc="Kontrollerad rivning, avfallshantering och trygg återuppbyggnad."
              icon={<Icon name="hammer" />}
            />
            <Card
              title="Offert & rådgivning"
              desc="Vi hjälper er räkna, prioritera och få ett smart upplägg."
              icon={<Icon name="spark" />}
            />
          </div>
        </Container>
      </section>

      <section id="process" className="border-y border-white/10 bg-neutral-900 py-14 sm:py-20">
        <Container>
          <SectionTitle
            eyebrow="Så jobbar vi"
            title="Förutsägbart - från start till klart"
            subtitle="Ni vet alltid vad som händer, när det händer, och vad som ingår."
            eyebrowClass="text-sm font-semibold uppercase tracking-[0.3em] text-white/70"
            titleClass="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
            subtitleClass="mt-3 text-white/70"
          />

          <ol className="mt-8 grid gap-4 lg:grid-cols-4">
            {[
              ["1. Behov & platsbesök", "Vi lyssnar, mäter och fångar förutsättningarna."],
              ["2. Offert & plan", "Tydlig omfattning, materialval och tidsplan."],
              ["3. Genomförande", "Daglig struktur, avstämningar och ordning på plats."],
              ["4. Slutkontroll", "Genomgång, fixlista, städ och överlämning."],
            ].map(([t, d]) => (
              <li
                key={t}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <div className="font-semibold text-white">{t}</div>
                <p className="mt-2 text-sm text-white/70">{d}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section
        id="projekt"
        className="py-14 sm:py-20 bg-slate-950 border-y border-white/10"
      >
        <Container>
          <SectionTitle
            eyebrow="Referenser"
            title="Hero-showcase & fler case"
            subtitle="Före/efter-övergångarna ovan speglar verkliga projekt. Här är ett urval av våra leveranser."
            eyebrowClass="text-sm font-semibold uppercase tracking-[0.3em] text-white/70"
            titleClass="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
            subtitleClass="mt-3 text-white/70"
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {projectSummaries.map((project) => (
              <div
                key={project.title}
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-transparent p-6 text-white shadow-[0_25px_55px_rgba(15,23,42,0.6)] transition hover:-translate-y-1"
              >
                <div className="text-xs uppercase tracking-[0.3em] text-orange-200">
                  {project.location}
                </div>
                <h3 className="mt-3 text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm text-white/70">{project.result}</p>
                <div className="mt-4 text-[0.75rem] text-white/50">
                  Offert inom 48 timmar • hållbar finish • tidssäker kommunikation
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section
        id="kontakt"
        className="border-t border-white/10 bg-gradient-to-br from-slate-950 via-neutral-950 to-neutral-900 py-14 sm:py-20"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <SectionTitle
                eyebrow="Kontakt"
                title="Berätta om projektet"
                subtitle="Skicka några rader så återkommer vi med nästa steg. Inga konstigheter."
                eyebrowClass="text-sm font-semibold uppercase tracking-[0.3em] text-white/70"
                titleClass="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
                subtitleClass="mt-3 text-white/70"
              />

              <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 text-white shadow-[0_25px_60px_rgba(15,23,42,0.65)]">
                <div className="text-sm text-white/70">
                    <div className="font-semibold text-white">Din Byggmästare</div>
                  <div className="mt-2">
                    Telefon: <span className="font-medium text-white">070-XXX XX XX</span>
                  </div>
                  <div>
                    E-post: <span className="font-medium text-white">info@dinobygg.se</span>
                  </div>
                  <div className="mt-2 text-white/70">Område: Stockholm med omnejd</div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2 text-xs text-white/60">
                  <span className="rounded-full border border-white/30 bg-white/5 px-3 py-1">
                    Totalentreprenad
                  </span>
                  <span className="rounded-full border border-white/30 bg-white/5 px-3 py-1">
                    Tydlig offert
                  </span>
                  <span className="rounded-full border border-white/30 bg-white/5 px-3 py-1">
                    Kvalitet
                  </span>
                </div>
              </div>
            </div>

            <form
              className="rounded-3xl border border-white/10 bg-white p-6 shadow-[0_25px_45px_rgba(15,23,42,0.3)]"
              action="mailto:info@dinobygg.se"
              method="post"
              encType="text/plain"
            >
              <div className="grid gap-4">
                <div>
                  <label className="text-sm font-medium text-neutral-900">Namn</label>
                  <input
                    name="namn"
                    className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none ring-neutral-950/10 focus:ring-4"
                    placeholder="För- och efternamn"
                    required
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-neutral-900">Telefon</label>
                    <input
                      name="telefon"
                      className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none ring-neutral-950/10 focus:ring-4"
                      placeholder="070..."
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-neutral-900">E-post</label>
                    <input
                      type="email"
                      name="epost"
                      className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none ring-neutral-950/10 focus:ring-4"
                      placeholder="du@foretag.se"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-neutral-900">Projektbeskrivning</label>
                  <textarea
                    name="projekt"
                    className="mt-2 min-h-[140px] w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none ring-neutral-950/10 focus:ring-4"
                    placeholder="Vad ska göras? Var? När vill ni starta? Budget/ram?"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="rounded-xl bg-neutral-950 px-5 py-3 text-sm font-semibold text-white hover:bg-neutral-900"
                >
                  Skicka förfrågan
                </button>

                <p className="text-xs text-neutral-500">
                  (Just nu använder formuläret mailto för enkel test. Vill ni ha &ldquo;riktig&rdquo; form med API/CRM kan jag lägga in det.)
                </p>
              </div>
            </form>
          </div>
        </Container>
      </section>

      <footer className="border-t border-white/10 bg-neutral-900 py-10 text-sm text-white/70">
        <Container>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>© {new Date().getFullYear()} Din Byggmästare. Alla rättigheter förbehållna.</div>
            <div>
              <a className="hover:text-white" href="#tjanster">
                Tjänster
              </a>{" "}·{" "}
              <a className="hover:text-white" href="#projekt">
                Projekt
              </a>{" "}·{" "}
              <a className="hover:text-white" href="#kontakt">
                Kontakt
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}

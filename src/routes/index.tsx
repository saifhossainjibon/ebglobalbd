import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Globe2,
  Handshake,
  ShieldCheck,
  Sparkles,
  Award,
  Calendar,
  Factory,
  Ship,
  Mail,
  MapPin,
  Building2,
  Phone,
  ArrowUpRight,
  Layers,
  Users,
  Quote,
  type LucideIcon,
} from "lucide-react";
import marketing from "@/assets/marketing.png";
import heroCotton from "@/assets/bg.png";
import cottonRight from "@/assets/cotton-right.png";
import bgliner from "@/assets/bg-3.png";
import { BUYERS, COMPANY, MEMBERSHIPS, SOLUTIONS } from "@/lib/site-data";
import { Reveal } from "@/components/reveal";
import { LogoTile } from "@/components/logo-tile";
import portContainers from "@/assets/port-containers.jpg";
import portContainer from "@/assets/icon.png";
import { EXCELLENCE } from "@/lib/site-data";

const ORIGINS = [
  { label: "Americas", icon: Globe2 },
  { label: "Africa", icon: Globe2 },
  { label: "Central Asia", icon: Globe2 },
  { label: "Indian subcontinent", icon: Globe2 },
];
const GLASS =
  "relative border border-white/60 bg-white/50 backdrop-blur-2xl ring-1 ring-inset ring-white/50 " +
  "shadow-[0_12px_40px_-14px_color-mix(in_oklab,var(--primary)_35%,transparent)]";

const NODE =
  "relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full " +
  "bg-gradient-to-br from-[var(--royal-deep)] via-[var(--primary)] to-[var(--royal-glow)] " +
  "shadow-lg shadow-primary/30 ring-4 ring-white/80";
const ICONS: LucideIcon[] = [Sparkles, Layers, Globe2, Users, ShieldCheck, Handshake, Building2];
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "EB Global — The Cotton Deplomat",
        description:
          "EB Global connects the world's most reputable cotton merchants with Bangladesh's leading spinning mills. A Trusted Bridge Between Continents.",
      },
      {
        property: "og:title",
        content: "EB Global — The Cotton Deplomat",
      },
      {
        property: "og:description",
        content:
          "A Trusted Bridge Between Continents — premium cotton sourcing for Bangladesh's spinning mills.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const STATS = [
  { icon: Calendar, value: "10+", label: "Years Of Experience" },
  { icon: Ship, value: "20+", label: "Global Cotton Suppliers" },
  { icon: Factory, value: "20+", label: "Reputed Spinning Mills" },
  { icon: Handshake, value: "1000+", label: "Contracts Served" },
];

const SOLUTION_ICONS = [Globe2, Handshake, ShieldCheck, Sparkles];

const CONTACT_ITEMS = [
  {
    icon: Phone,
    label: "Phone",
    lines: COMPANY.phones,
    hrefs: COMPANY.phoneLinks.map((p) => `tel:${p}`),
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["Info@ebglobalbd.com"],
    hrefs: ["mailto:Info@ebglobalbd.com"],
  },
  {
    icon: Building2,
    label: "Registered Office",
    lines: ["1138/A, JCX Business Tower, Block I, Bashundhara, Dhaka-1229"],
    hrefs: [],
  },
  {
    icon: MapPin,
    label: "Corporate Office",
    lines: ["House-581, Road-20, Block-J, Bashundhara, Dhaka-1229"],
    hrefs: [],
  },
];

function Boll({ x, y, s = 1, rot = 0 }: { x: number; y: number; s?: number; rot?: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${s})`}>
      <path
        d="M0,24 C-32,22 -46,-6 -38,-32 C-24,-14 -9,-10 0,2 C9,-10 24,-14 38,-32 C46,-6 32,22 0,24 Z"
        fill="url(#cf-burr)"
      />
      <g fill="url(#cf-puff)" stroke="white" strokeOpacity="0.9" strokeWidth="1.5">
        <circle cx="-22" cy="-16" r="21" />
        <circle cx="22" cy="-16" r="21" />
        <circle cx="-11" cy="-44" r="19" />
        <circle cx="13" cy="-42" r="19" />
        <circle cx="0" cy="-26" r="25" />
      </g>
    </g>
  );
}

function CottonPlant({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 420 500" className={className} fill="none">
      <defs>
        <radialGradient id="cf-puff" cx="40%" cy="35%" r="75%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop
            offset="70%"
            style={{ stopColor: "color-mix(in oklab, var(--royal-glow) 22%, white)" }}
          />
          <stop
            offset="100%"
            style={{ stopColor: "color-mix(in oklab, var(--primary) 38%, white)" }}
          />
        </radialGradient>
        <linearGradient id="cf-burr" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" style={{ stopColor: "var(--primary)", stopOpacity: 0.85 }} />
          <stop offset="100%" style={{ stopColor: "var(--royal-deep)", stopOpacity: 0.95 }} />
        </linearGradient>
        <linearGradient id="cf-stem" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" style={{ stopColor: "var(--royal-deep)" }} />
          <stop offset="100%" style={{ stopColor: "var(--primary)" }} />
        </linearGradient>
        <linearGradient id="cf-leaf" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" style={{ stopColor: "var(--royal-glow)", stopOpacity: 0.55 }} />
          <stop offset="100%" style={{ stopColor: "var(--primary)", stopOpacity: 0.5 }} />
        </linearGradient>
      </defs>

      {/* stems */}
      <g stroke="url(#cf-stem)" strokeWidth="6" strokeLinecap="round">
        <path d="M70,500 C78,420 96,345 150,270" />
        <path d="M150,270 C180,220 210,180 254,140" />
        <path d="M104,372 C70,340 50,305 44,262" />
        <path d="M96,404 C150,380 200,372 262,318" />
      </g>

      {/* leaves */}
      <g fill="url(#cf-leaf)">
        <path d="M120,330 C84,322 64,296 66,268 C98,272 122,296 120,330 Z" />
        <path d="M186,236 C214,222 242,226 258,246 C230,262 200,258 186,236 Z" />
        <path d="M84,440 C118,434 146,452 152,480 C118,484 90,468 84,440 Z" />
        <path d="M204,360 C230,364 250,384 250,408 C224,404 206,386 204,360 Z" />
      </g>

      {/* bolls */}
      <Boll x={254} y={150} s={1} rot={14} />
      <Boll x={46} y={276} s={0.85} rot={-18} />
      <Boll x={264} y={326} s={0.9} rot={22} />
      <Boll x={150} y={282} s={0.8} rot={-6} />
    </svg>
  );
}

function Index() {
  return (
    <div>
      {/* ---------- Hero ---------- */}
      <section
        id="home"
        className="relative z-10 flex min-h-screen items-center overflow-hidden px-6 pt-22 pb-20"
      >
        <style>{`
    @keyframes ebKenBurns { from { transform: scale(1); } to { transform: scale(1.08); } }
    .eb-kenburns { animation: ebKenBurns 24s ease-in-out infinite alternate; }
    @keyframes ebScrollDot { 0% { transform: translateY(0); opacity: 1; } 100% { transform: translateY(10px); opacity: 0; } }
    .eb-scrolldot { animation: ebScrollDot 1.6s ease-in-out infinite; }
    @media (prefers-reduced-motion: reduce) { .eb-kenburns, .eb-scrolldot { animation: none; } }
  `}</style>
        {/* Background image (slow zoom) */}
        <img
          src={heroCotton}
          alt="Cotton bolls in a sunlit cotton field at golden hour"
          width={1920}
          height={1088}
          className="eb-kenburns absolute inset-0 h-full w-full object-cover"
        />
        {/* Overlay: dark for the text, tinted royal toward the bottom to match the site */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-[var(--royal-deep)]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-transparent" />

        {/* Glows */}
        <div className="pointer-events-none absolute right-0 bottom-0 h-[32rem] w-[32rem] rounded-full bg-amber-400/20 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-[var(--royal-glow)]/30 blur-[120px]" />

        {/* Content */}
        <div className="animate-in fade-in slide-in-from-bottom-6 relative mx-auto w-full max-w-5xl duration-700">
          <div className="mx-auto max-w-5xl text-center">
            {/* Eyebrow */}
            <span className="mt-4 inline-flex items-center gap-2.5 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-[10px] font-semibold tracking-[0.3em] text-white/90 uppercase shadow-lg shadow-black/20 backdrop-blur-xl">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              Cotton Indenting &amp; Sourcing
            </span>

            {/* Headline */}
            <h1 className="mt-8 font-latic text-[2.75rem] leading-[1.02] font-semibold tracking-[-0.02em] text-white [text-shadow:0_4px_30px_rgba(0,0,0,0.35)] sm:text-6xl lg:text-[5.25rem]">
              A Trusted Bridge
              <br />
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent italic [text-shadow:none]">
                Between Continents
              </span>
            </h1>

            {/* Gradient divider */}
            <div className="mx-auto mt-7 h-1 w-24 rounded-full bg-linear-to-r from-transparent via-amber-300 to-transparent" />

            {/* Subtext */}
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-white/95 [text-shadow:0_1px_8px_rgba(0,0,0,0.6)] sm:text-xl">
              Connecting the world's most reputable cotton merchants with Bangladesh's leading
              spinning mills built on trust, precision and discretion.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#buyers"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-neutral-900 shadow-xl shadow-black/25 ring-4 ring-white/20 transition-all hover:-translate-y-0.5 hover:bg-amber-300 hover:shadow-2xl"
              >
                Explore Our Buyers
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/20 backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:bg-white/20"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Stats: dark glass cards with gradient borders */}
          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="group rounded-3xl bg-linear-to-br from-white/80 via-[var(--royal-glow)] to-[var(--primary)] p-[1.5px] shadow-xl shadow-black/30 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <div className="relative h-full overflow-hidden rounded-[calc(1.5rem-1.5px)] bg-[var(--royal-deep)]/75 px-4 py-6 text-center backdrop-blur-2xl">
                  <div className="aurora-blob -top-12 -right-12 size-28 bg-[var(--royal-glow)]/30" />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-5 top-0 h-px bg-linear-to-r from-transparent via-white/60 to-transparent"
                  />

                  <div className="relative">
                    <span className="mx-auto mb-3 inline-flex size-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                      <stat.icon className="h-5 w-5 text-white" aria-hidden />
                    </span>
                    <p className="font-display text-3xl font-semibold text-white sm:text-4xl">
                      {stat.value}
                    </p>
                    <p className="mt-1.5 text-[10px] font-medium tracking-[0.2em] text-white/65 uppercase">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll cue */}
        <a
          href="#about"
          aria-label="Scroll to next section"
          className="absolute bottom-6 left-1/2 hidden h-10 w-6 -translate-x-1/2 justify-center rounded-full border border-white/50 pt-2 backdrop-blur-sm sm:flex"
        >
          <span className="eb-scrolldot h-1.5 w-1 rounded-full bg-white" />
        </a>
      </section>

      {/* ---------- Who we are ---------- */}
      <section id="about" className="backdrop-blur-2xl">
        <div className="relative isolate overflow-hidden">
          {/* Background image, untouched */}
          <img
            src={bgliner}
            alt="Cotton sourcing background"
            className="absolute inset-0 -z-10 h-full w-full object-contain object-center"
          />
          <div
            aria-hidden
            className="absolute top-40 left-0 -z-10 size-72 rounded-full bg-[var(--royal-glow)]/25 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute right-0 bottom-40 -z-10 size-80 rounded-full bg-[var(--primary)]/20 blur-3xl"
          />
          <div className="relative overflow-hidden  bg-white/10 backdrop-blur-3xl px-4 py-16 sm:px-8 sm:py-24">
            {/* Main glass card */}
            <div
              className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/10 p-6 shadow-2xl shadow-[var(--royal-deep)]/25 backdrop-blur-2xl sm:p-10 lg:p-14"
              style={{
                backgroundImage: `url(${cottonRight})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom right",
                backgroundSize: "400px", // or "contain" / "40%"
              }}
            >
              {/* Glass highlights */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-10 top-0 h-px bg-linear-to-r from-transparent via-white to-transparent"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -top-24 -left-24 size-72 rounded-full bg-white/60 blur-3xl"
              />
              <div className="relative grid items-center gap-12 lg:grid-cols-3">
                <Reveal className="lg:col-span-2">
                  <span className="mb-6 inline-flex rounded-full bg-linear-to-r from-[var(--royal-deep)] via-[var(--primary)] to-[var(--royal-glow)] p-[1.5px] shadow-lg shadow-primary/15">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.24em] text-sky-pop">
                      Who We Are
                    </span>
                  </span>
                  <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                    Trust, precision and <span className="text-gradient-royal">discretion</span> in
                    every consignment
                  </h2>

                  <div className="mt-6 h-1 w-24 rounded-full bg-linear-to-r from-[var(--royal-deep)] via-[var(--primary)] to-[var(--royal-glow)]" />

                  <p className="relative mt-6 pl-6 text-base leading-relaxed text-foreground/90 sm:text-[17px]">
                    <span
                      aria-hidden
                      className="absolute top-1 bottom-1 left-0 w-[3px] rounded-full bg-linear-to-b from-[var(--royal-deep)] via-[var(--primary)] to-gold/70"
                    />
                    EB Global is a cotton indenting and sourcing company. We connect some of the
                    world’s leading cotton merchants with spinning mills across Bangladesh. We know
                    the international cotton trade and the textile industry well, so we can offer
                    sourcing that’s reliable, transparent, and shaped around what each partner
                    actually needs, even as those needs change. <br /> <br />
                    Over the years, we’ve put a lot of effort into building strong international
                    networks and long-term relationships. We care about doing good work at every
                    step of the cotton supply chain. Honesty, professionalism, and efficiency guide
                    how we work, which helps us keep international trade simple and keep suppliers
                    and buyers in step with each other.
                    <br />
                    <br />
                    We believe good business comes down to trust, consistency, and partnerships that
                    last. For us, being a sourcing partner is only part of the job. We want to be
                    the reliable link between global opportunities and Bangladesh’s growing textile
                    industry.
                  </p>
                </Reveal>

                <Reveal delay={0.15} className="lg:col-span-1">
                  {/* Gradient border */}
                  <div className="rounded-4xl bg-linear-to-br from-white/80 via-[var(--royal-glow)] to-[var(--primary)] p-[1.5px] shadow-2xl shadow-[var(--royal-deep)]/30">
                    {/* Dark glass card */}
                    <div className="relative overflow-hidden rounded-[calc(2rem-1.5px)] bg-[var(--royal-deep)]/80 p-8 backdrop-blur-2xl">
                      <div className="aurora-blob -right-16 -top-16 size-56 bg-[var(--royal-glow)]/40" />
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-white/60 to-transparent"
                      />
                      <div className="relative">
                        <span className="text-[13px] font-extrabold tracking-[0.28em] text-white uppercase">
                          Our Mission
                        </span>
                        <div className="mt-4 h-[3px] w-12 rounded-full bg-linear-to-r from-white to-white/10" />
                        <p className="font-latic mt-5 text-2xl leading-snug font-medium text-white">
                          "To be recognized as a premier cotton sourcing partner synonymous with
                          trust, excellence, and enduring global relationships."
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
            <div className="relative isolate mx-auto mt-28 max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/70 shadow-2xl shadow-[var(--royal-deep)]/25">
              {/* Layer 0: cotton plant sits BEHIND the glass */}
              <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
                <div className="absolute -bottom-10 -left-10 size-[26rem] rounded-full bg-[var(--royal-glow)]/35 blur-3xl" />
                <CottonPlant className="absolute -bottom-16 -left-10 w-[22rem] sm:w-[28rem] lg:w-[34rem]" />
              </div>

              {/* Layer 1: frosted glass that blurs the plant */}
              <div aria-hidden className="absolute inset-0 z-[1] bg-white/55 backdrop-blur-2xl" />

              {/* Layer 2: content */}
              <div className="relative z-[2] p-6 sm:p-10 lg:p-14">
                <Reveal className="text-center">
                  <div className="relative mb-14">
                    <span className="inline-flex rounded-full bg-linear-to-r from-[var(--royal-deep)] via-[var(--primary)] to-[var(--royal-glow)] p-[1.5px] shadow-lg shadow-primary/15">
                      <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.24em] text-sky-pop">
                        What We Do
                      </span>
                    </span>
                    <h2 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                      Tailored solutions for{" "}
                      <span className="text-gradient-royal">a global industry</span>
                    </h2>
                    <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-linear-to-r from-[var(--royal-deep)] via-[var(--primary)] to-[var(--royal-glow)]" />
                  </div>
                </Reveal>

                <div className="mx-auto grid max-w-7xl gap-6 pb-10 sm:grid-cols-2 lg:grid-cols-4">
                  {SOLUTIONS.map((solution, i) => {
                    const Icon = SOLUTION_ICONS[i]!;
                    return (
                      <Reveal key={solution.title} delay={i * 0.08}>
                        {/* Gradient border wrapper */}
                        <div className="group h-full rounded-3xl bg-linear-to-br from-white/80 via-[var(--royal-glow)] to-[var(--primary)] p-[1.5px] shadow-lg shadow-[var(--royal-deep)]/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[var(--royal-deep)]/40">
                          {/* Dark glass card */}
                          <div className="relative h-full overflow-hidden rounded-[calc(1.5rem-1.5px)] bg-[var(--royal-deep)]/80 p-7 backdrop-blur-2xl">
                            <div className="aurora-blob -right-16 -top-16 size-40 bg-[var(--royal-glow)]/30" />

                            <div
                              aria-hidden
                              className="pointer-events-none absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent"
                            />

                            <div className="relative">
                              <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                                <Icon className="h-7 w-7 text-white" />
                              </span>

                              <h3 className="font-display text-xl font-semibold tracking-tight text-white">
                                {solution.title}
                              </h3>

                              <p className="mt-2 text-[15px] leading-relaxed text-white/70">
                                {solution.desc}
                              </p>

                              <div className="mt-6 h-[3px] w-10 rounded-full bg-linear-to-r from-white to-white/10 transition-all duration-500 group-hover:w-full" />
                            </div>
                          </div>
                        </div>
                      </Reveal>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- define ---------- */}
      <section className="relative isolate overflow-x-clip px-4 pt-10 sm:px-6">
        {/* Soft linear gradient panel */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-16 -bottom-10 -z-10 rounded-[2.5rem]"
          style={{
            backgroundImage:
              "linear-gradient(180deg, transparent 0%, color-mix(in oklab, var(--royal-glow) 14%, white) 45%, transparent 100%)",
          }}
        />
        {/* Blobs for the glass to blur */}
        <div
          aria-hidden
          className="absolute top-100 right-30 -z-10 size-80 rounded-full bg-[var(--royal-glow)]/25 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute top-00 left-10 -z-10 size-80 rounded-full bg-[var(--royal-glow)]/25 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute bottom-00 left-0 -z-10 size-72 rounded-full bg-[var(--primary)]/20 blur-3xl"
        />

        {/* NEW: wrapper so the plant can sit behind the glass box */}
        <div className="relative isolate mx-auto max-w-7xl">
          <div aria-hidden className="pointer-events-none absolute inset-0 z-11 hidden sm:block">
            <div className="absolute -bottom-8 -left-6 size-[20rem] rounded-full bg-[var(--royal-glow)]/35 blur-3xl sm:size-[26rem]" />
            <CottonPlant className="absolute -bottom-0 -left-4 w-[16rem] sm:-left-4 sm:w-[22rem] lg:w-[28rem]" />
          </div>

          {/* CHANGED: z-10 so the glass sits above the plant; mx-auto/max-w-7xl moved to the wrapper */}
          <div className="relative z-10 rounded-[2.5rem] border border-white/70 bg-white/10 p-4 shadow-2xl shadow-[var(--royal-deep)]/25 backdrop-blur-2xl sm:p-10 lg:p-14">
            {/* Reduced padding on mobile (px-2 py-8) */}
            <div className="mx-auto grid max-w-7xl gap-10 px-2 py-8 sm:px-8 sm:py-14 lg:grid-cols-5 lg:gap-16 lg:px-12">
              {/* Left: sticky heading */}
              <Reveal className="lg:col-span-2">
                <div className=" lg:top-28">
                  <span className="inline-flex rounded-full bg-linear-to-r from-[var(--royal-deep)] via-[var(--primary)] to-[var(--royal-glow)] p-[1.5px] shadow-lg shadow-primary/15">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.24em] text-sky-pop">
                      Why EB Global
                    </span>
                  </span>
                  <h2 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                    Defined by <span className="text-gradient-royal">excellence</span>
                  </h2>
                  <div className="mt-6 h-1 w-24 rounded-full bg-linear-to-r from-[var(--royal-deep)] via-[var(--primary)] to-[var(--royal-glow)]" />
                </div>
              </Reveal>

              {/* Right: timeline */}
              <ol className="relative lg:col-span-3">
                {/* Gradient spine - Moved to left-5 on mobile to align with smaller icons */}
                <span
                  aria-hidden
                  className="absolute top-4 bottom-4 left-5 w-[2px] -translate-x-1/2 rounded-full bg-linear-to-b from-[var(--royal-deep)] via-[var(--primary)] to-[var(--royal-glow)]/20 lg:left-7"
                />

                {EXCELLENCE.map((text, i) => {
                  const Icon = ICONS[i] || Sparkles;
                  return (
                    <Reveal key={text} delay={i * 0.06}>
                      {/* Reduced gap from 5 to 3.5 on mobile */}
                      <li className="group relative flex items-stretch gap-3.5 pb-5 last:pb-0 sm:gap-5">
                        {/* Node - Smaller on mobile (size-10), normal on sm+ (size-14) */}
                        <span className="relative z-10 mt-2 flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-royal-deep via-primary to-[var(--royal-glow)] shadow-lg shadow-primary/30 ring-2 ring-white/80 transition-transform duration-300 group-hover:scale-110 sm:size-14 sm:ring-4">
                          <Icon className="h-5 w-5 text-cotton sm:h-6 sm:w-6" />
                        </span>

                        {/* Gradient Border Wrapper */}
                        <div className="relative mb-2 flex-1 rounded-2xl bg-linear-to-br from-white/80 via-[var(--royal-glow)] to-[var(--primary)] p-[1.5px] shadow-lg shadow-[var(--royal-deep)]/20 transition-all duration-300 group-hover:translate-x-1.5 group-hover:shadow-2xl group-hover:shadow-[var(--royal-deep)]/40">
                          {/* Dark Glass Card - Reduced inner padding on mobile */}
                          <div className="relative h-full overflow-hidden rounded-[calc(1rem-1.5px)] bg-[var(--royal-deep)]/80 p-4 backdrop-blur-2xl sm:p-5 sm:pr-6">
                            {/* Aurora blob */}
                            <div className="aurora-blob -right-16 -top-16 size-32 bg-[var(--royal-glow)]/30 opacity-50 transition-opacity duration-300 group-hover:opacity-100" />

                            {/* Left gradient edge accent */}
                            <span
                              aria-hidden
                              className="absolute top-0 bottom-0 left-0 w-[3px] bg-linear-to-b from-white/80 via-white/20 to-transparent opacity-40 transition-opacity duration-300 group-hover:opacity-100"
                            />

                            {/* Top highlight line */}
                            <div
                              aria-hidden
                              className="pointer-events-none absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent"
                            />

                            {/* Text - Removed pr-12 on mobile so it uses full width */}
                            <p className="relative text-[15px] leading-relaxed font-medium text-white/90 transition-colors duration-300 group-hover:text-white sm:text-[16.5px] sm:pr-12">
                              {text}
                            </p>
                          </div>
                        </div>
                      </li>
                    </Reveal>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Buyers ---------- */}
      <div id="buyers">
        {/* ═════════ Buyer network ═════════ */}
        <section className="relative isolate px-6 pt-28" aria-labelledby="buyers-heading">
          {/* Backdrop for the glass */}
          <div aria-hidden className="absolute inset-0 -z-10">
            <div
              className="absolute inset-x-0 top-16 -bottom-10 rounded-[2.5rem]"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, transparent 0%, color-mix(in oklab, var(--royal-glow) 14%, white) 45%, transparent 100%)",
              }}
            />
            <div className="absolute left-[8%] top-40 size-72 rounded-full bg-[var(--royal-glow)]/30 blur-3xl" />
            <div className="absolute bottom-10 right-[8%] size-80 rounded-full bg-[var(--primary)]/25 blur-3xl" />
          </div>

          <div className="mx-auto max-w-7xl">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="inline-flex rounded-full bg-linear-to-r from-[var(--royal-deep)] via-[var(--primary)] to-[var(--royal-glow)] p-[1.5px] shadow-lg shadow-primary/15">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.24em] text-sky-pop">
                  Buyer Network
                </span>
              </span>
              <h2
                id="buyers-heading"
                className="mt-6 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl"
              >
                Mills we <span className="text-gradient-royal">proudly serve</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                EB Global maintains strong working relationships with a wide range of leading
                spinning mills across Bangladesh.
              </p>
            </Reveal>

            {/* One clean glass panel, uniform grid */}
            <Reveal delay={0.05}>
              <div className={`${GLASS} mt-14 rounded-[2rem] p-4 sm:p-6`}>
                <span
                  aria-hidden
                  className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"
                />
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
                  {BUYERS.map((buyer) => (
                    <div
                      key={buyer.name}
                      className="group rounded-[1.25rem] bg-linear-to-br from-[var(--royal-deep)] via-[var(--royal-glow)] to-[var(--primary)] p-[1.5px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/15 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                    >
                      <div className="h-27 w-full rounded-[calc(1.25rem-1.5px)] bg-white">
                        <LogoTile
                          name={buyer.name}
                          logo={buyer.logo}
                          className="h-full w-full border-0 bg-transparent"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </div>
      {/* ═════════ Logistics ═════════ */}
      <section className="relative isolate mb-6 px-6 pt-28" aria-labelledby="logistics-heading">
        {/* Soft linear gradient panel */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-16 -bottom-10 -z-10 rounded-[2.5rem]"
          style={{
            backgroundImage:
              "linear-gradient(180deg, transparent 0%, color-mix(in oklab, var(--royal-glow) 14%, white) 45%, transparent 100%)",
          }}
        />
        {/* Blobs for the glass to blur */}
        <div
          aria-hidden
          className="absolute top-32 right-[8%] -z-10 size-72 rounded-full bg-[var(--royal-glow)]/30 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute bottom-10 left-[8%] -z-10 size-80 rounded-full bg-[var(--primary)]/25 blur-3xl"
        />

        <div className="mx-auto max-w-7xl">
          <Reveal>
            {/* Photo on top */}
            <div className="group relative h-64 overflow-hidden rounded-[2.5rem] border border-border shadow-xl shadow-primary/10 sm:h-96">
              <img
                src={portContainers}
                alt="Container ship loading at an international port"
                className="h-full w-full object-cover object-center transition-transform duration-[900ms] ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                loading="lazy"
                width={1600}
                height={1008}
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-[var(--royal-deep)]/60 via-[var(--primary)]/15 to-transparent"
              />
            </div>

            {/* Glass container overlapping the photo */}
            <div className="relative isolate z-10 -mt-24 overflow-hidden rounded-[2.5rem] border border-white/70 shadow-2xl shadow-[var(--royal-deep)]/25 ring-1 ring-inset ring-white/50 sm:-mt-32 sm:mx-10">
              {/* Layer 1: frosted glass */}
              <div aria-hidden className="absolute inset-0 z-[1] bg-white/65 backdrop-blur-xl" />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-16 top-0 z-[2] h-px bg-gradient-to-r from-transparent via-white to-transparent"
              />

              {/* Layer 2: content */}
              <div className="relative z-[3] p-6 sm:p-10 lg:p-14">
                {/* Heading */}
                <div className="mb-12 text-center sm:mb-14">
                  <span className="inline-flex rounded-full bg-linear-to-r from-[var(--royal-deep)] via-[var(--primary)] to-[var(--royal-glow)] p-[1.5px] shadow-lg shadow-primary/15">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.24em] text-sky-pop">
                      Global Logistics
                    </span>
                  </span>
                  <h2
                    id="logistics-heading"
                    className="mt-6 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
                  >
                    From origin to
                    <br />
                    <span className="text-gradient-royal">spinning mill</span>
                  </h2>
                  <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-linear-to-r from-[var(--royal-deep)] via-[var(--primary)] to-[var(--royal-glow)]" />
                </div>

                {/* Dark glass card with gradient border */}
                <div className="group mx-auto max-w-5xl rounded-[2rem] bg-linear-to-br from-white/80 via-[var(--royal-glow)] to-[var(--primary)] p-[1.5px] shadow-2xl shadow-[var(--royal-deep)]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--royal-deep)]/40 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                  <div className="relative overflow-hidden rounded-[calc(2rem-1.5px)] bg-[var(--royal-deep)]/80 p-8 backdrop-blur-2xl sm:p-10 lg:p-12">
                    <div className="aurora-blob -right-16 -top-16 size-64 bg-[var(--royal-glow)]/35" />
                    <div className="aurora-blob -bottom-24 -left-16 size-56 bg-[var(--primary)]/30" />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-white/60 to-transparent"
                    />

                    <div className="relative grid items-start gap-6 lg:grid-cols-[auto_1fr] lg:gap-10">
                      <span className="inline-flex size-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 lg:size-16">
                        <Ship className="h-7 w-7 text-white lg:h-8 lg:w-8" aria-hidden />
                      </span>

                      <div>
                        <p className="text-base leading-relaxed text-white/90 sm:text-lg lg:text-[19px] lg:leading-relaxed">
                          We make international cotton trade run smoothly, and we keep everything
                          open and transparent along the way. Whether the cotton comes from the
                          Americas, Africa, Central Asia, or the Indian subcontinent, we handle it
                          all the way through to the mills in Bangladesh.
                        </p>
                        <div className="mt-8 h-[3px] w-12 rounded-full bg-linear-to-r from-white to-white/10 transition-all duration-500 group-hover:w-full" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Route: origins converge into Mills in Bangladesh */}
                {/* Route: every origin connects to Mills in Bangladesh (vertical on mobile, horizontal on desktop) */}
                <div
                  className="relative mx-auto mt-14 max-w-5xl"
                  role="group"
                  aria-label="Cotton route to Bangladesh"
                >
                  <style>{`
    @keyframes ebFlow { to { stroke-dashoffset: -28; } }
    .eb-flow { animation: ebFlow 1.4s linear infinite; }
    @media (prefers-reduced-motion: reduce) { .eb-flow { animation: none; } }
  `}</style>

                  {/* MOBILE: one separate line from each card into the destination (fixed heights keep it aligned) */}
                  <svg
                    aria-hidden
                    viewBox="0 0 48 452"
                    className="absolute top-0 left-0 h-[452px] w-12 md:hidden"
                  >
                    <defs>
                      <linearGradient
                        id="m-grad"
                        gradientUnits="userSpaceOnUse"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="420"
                      >
                        <stop offset="0%" style={{ stopColor: "var(--royal-glow)" }} />
                        <stop offset="100%" style={{ stopColor: "var(--royal-deep)" }} />
                      </linearGradient>
                    </defs>

                    {ORIGINS.map((_, i) => {
                      const x = [6, 16, 26, 36][i] ?? 36; // outer card = outer lane, so lines never cross
                      const y = 40 + i * 96; // card centre
                      const destY = 420; // destination centre
                      const r = 8;
                      const d = `M48 ${y} H${x + r} Q${x} ${y} ${x} ${y + r} V${destY - r} Q${x} ${destY} ${x + r} ${destY} H44`;
                      return (
                        <g key={i}>
                          <path
                            d={d}
                            fill="none"
                            stroke="url(#m-grad)"
                            strokeWidth="2"
                            strokeOpacity="0.55"
                            strokeLinecap="round"
                          />
                          <path
                            d={d}
                            fill="none"
                            stroke="var(--royal-deep)"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeDasharray="1 11"
                            className="eb-flow"
                          />
                          <circle cx="47" cy={y} r="3.5" fill="var(--primary)" />
                        </g>
                      );
                    })}
                    {/* Arrow into the destination */}
                    <path
                      d="M39 414 L45 420 L39 426"
                      fill="none"
                      stroke="var(--royal-deep)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  {/* Origin cards */}
                  <ol className="grid grid-cols-1 gap-4 pl-12 md:grid-cols-4 md:pl-0">
                    {ORIGINS.map(({ label, icon: Icon }) => (
                      <li key={label} className="group relative h-20 md:h-auto">
                        <div className="h-full rounded-lg  bg-linear-to-br from-primary/90 via-[var(--royal-glow)] to-[var(--primary)] p-[1.5px] shadow-lg shadow-[var(--royal-deep)]/15 transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-xl group-hover:shadow-[var(--royal-deep)]/30 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0">
                          <div className="relative flex h-full flex-row items-center gap-4 overflow-hidden rounded-[calc(1rem-1.5px)] bg-white/80 px-4 backdrop-blur-xl md:flex-col md:gap-3 md:py-5 md:text-center">
                            <div
                              aria-hidden
                              className="pointer-events-none absolute inset-x-5 top-0 h-px bg-linear-to-r from-transparent via-white to-transparent"
                            />
                            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--royal-deep)] via-[var(--primary)] to-[var(--royal-glow)] shadow-lg shadow-primary/30 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                              <Icon className="h-5 w-5 text-cotton" aria-hidden />
                            </span>
                            <span className="text-gradient-royal font-display text-base leading-tight font-extrabold sm:text-lg">
                              {label}
                            </span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ol>

                  {/* DESKTOP: curved lines converging into the destination */}
                  <div className="relative hidden h-32 md:block" aria-hidden>
                    <svg
                      viewBox="0 0 1000 128"
                      preserveAspectRatio="none"
                      className="absolute inset-0 h-full w-full overflow-visible"
                    >
                      <defs>
                        <linearGradient id="route-grad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" style={{ stopColor: "var(--royal-glow)" }} />
                          <stop offset="100%" style={{ stopColor: "var(--royal-deep)" }} />
                        </linearGradient>
                      </defs>

                      {[
                        "M125 0 C125 90 400 40 400 128",
                        "M375 0 C375 90 470 40 470 128",
                        "M625 0 C625 90 530 40 530 128",
                        "M875 0 C875 90 600 40 600 128",
                      ].map((d) => (
                        <g key={d}>
                          <path
                            d={d}
                            fill="none"
                            stroke="url(#route-grad)"
                            strokeWidth="2"
                            strokeOpacity="0.45"
                            strokeLinecap="round"
                            vectorEffect="non-scaling-stroke"
                          />
                          <path
                            d={d}
                            fill="none"
                            stroke="var(--royal-deep)"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeDasharray="1 13"
                            vectorEffect="non-scaling-stroke"
                            className="eb-flow"
                          />
                        </g>
                      ))}
                    </svg>

                    {["left-[40%]", "left-[47%]", "left-[53%]", "left-[60%]"].map((pos) => (
                      <span
                        key={pos}
                        className={`absolute bottom-0.5 ${pos} size-2.5 -translate-x-1/2 rounded-full bg-[var(--primary)] shadow-md shadow-primary/40 ring-4 ring-white/80`}
                      />
                    ))}
                  </div>

                  {/* Destination */}
                  <div className="relative mt-5 pl-12 md:mt-0 md:pl-0">
                    <div className="relative mx-auto flex w-full items-center justify-center md:w-fit">
                      <span
                        aria-hidden
                        className="absolute inset-0 rounded-full bg-[var(--royal-glow)]/50 blur-xl"
                      />
                      <span
                        aria-hidden
                        className="absolute -inset-1 animate-ping rounded-full border border-[var(--royal-glow)]/40 [animation-duration:3s] motion-reduce:animate-none"
                      />
                      <div className="relative flex h-16 w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[var(--royal-deep)] via-[var(--primary)] to-[var(--royal-glow)] px-6 shadow-2xl shadow-[var(--royal-deep)]/40 ring-4 ring-white/70 sm:px-8 md:h-auto md:w-auto md:py-4">
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/20 backdrop-blur-md">
                          <Factory className="h-5 w-5 text-white" aria-hidden />
                        </span>
                        <span className="font-display text-base font-extrabold tracking-tight text-white sm:text-lg">
                          Mills in Bangladesh
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Marketing Team ---------- */}
      <section className="relative isolate mb-18 px-6 pt-28" aria-labelledby="marketing-heading">
        {/* Soft linear gradient panel */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-16 -bottom-10 -z-10 rounded-[2.5rem]"
          style={{
            backgroundImage:
              "linear-gradient(180deg, transparent 0%, color-mix(in oklab, var(--royal-glow) 14%, white) 45%, transparent 100%)",
          }}
        />
        {/* Blobs for the glass to blur */}
        <div
          aria-hidden
          className="absolute top-32 left-[8%] -z-10 size-72 rounded-full bg-[var(--royal-glow)]/30 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute right-[8%] bottom-10 -z-10 size-80 rounded-full bg-[var(--primary)]/25 blur-3xl"
        />

        <div className="mx-auto max-w-7xl">
          <Reveal>
            {/* Photo on top */}
            <div className="group relative h-64 overflow-hidden rounded-[2.5rem] border border-border shadow-xl shadow-primary/10 sm:h-96">
              <img
                src={marketing}
                alt="EB Global marketing and business development team"
                className="h-full w-full object-cover object-buttom transition-transform duration-[900ms] ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                loading="lazy"
                width={1600}
                height={1008}
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-[var(--royal-deep)]/60 via-[var(--primary)]/15 to-transparent"
              />
            </div>

            {/* Glass container overlapping the photo */}
            <div className="relative isolate z-10 -mt-24 overflow-hidden rounded-[2.5rem] border border-white/70 shadow-2xl shadow-[var(--royal-deep)]/25 ring-1 ring-inset ring-white/50 sm:-mt-32 sm:mx-10">
              {/* Layer 1: frosted glass */}
              <div aria-hidden className="absolute inset-0 z-[1] bg-white/65 backdrop-blur-xl" />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-16 top-0 z-[2] h-px bg-gradient-to-r from-transparent via-white to-transparent"
              />

              {/* Layer 2: content */}
              <div className="relative z-[3] p-6 sm:p-10 lg:p-14">
                {/* Heading */}
                <div className="mb-12 text-center sm:mb-14">
                  <span className="inline-flex rounded-full bg-linear-to-r from-[var(--royal-deep)] via-[var(--primary)] to-[var(--royal-glow)] p-[1.5px] shadow-lg shadow-primary/15">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.24em] text-sky-pop">
                      Marketing Team
                    </span>
                  </span>
                  <h2
                    id="marketing-heading"
                    className="mt-6 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
                  >
                    Driven by Expertise.
                    <br />
                    <span className="text-gradient-royal">Defined by Results.</span>
                  </h2>
                  <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-linear-to-r from-[var(--royal-deep)] via-[var(--primary)] to-[var(--royal-glow)]" />
                </div>

                {/* Dark glass card with gradient border */}
                <div className="group mx-auto max-w-5xl rounded-[2rem] bg-linear-to-br from-white/80 via-[var(--royal-glow)] to-[var(--primary)] p-[1.5px] shadow-2xl shadow-[var(--royal-deep)]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--royal-deep)]/40 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                  <div className="relative overflow-hidden rounded-[calc(2rem-1.5px)] bg-[var(--royal-deep)]/80 p-8 backdrop-blur-2xl sm:p-10 lg:p-12">
                    <div className="aurora-blob -right-16 -top-16 size-64 bg-[var(--royal-glow)]/35" />
                    <div className="aurora-blob -bottom-24 -left-16 size-56 bg-[var(--primary)]/30" />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-white/60 to-transparent"
                    />

                    <div className="relative grid items-start gap-6 lg:grid-cols-[auto_1fr] lg:gap-10">
                      <span className="inline-flex size-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 lg:size-16">
                        <Quote className="h-7 w-7 text-white lg:h-8 lg:w-8" aria-hidden />
                      </span>

                      <div>
                        <p className="text-base leading-relaxed text-white/90 sm:text-lg lg:text-[19px] lg:leading-relaxed">
                          At EB Global, our Marketing and Business Development Team brings together
                          extensive industry experience, market intelligence, and exceptional
                          negotiation skills. With a deep understanding of international cotton
                          markets, we excel at identifying opportunities, building lasting
                          partnerships, and closing deals with confidence, precision, and
                          professionalism.
                        </p>
                        <div className="mt-8 h-[3px] w-12 rounded-full bg-linear-to-r from-white to-white/10 transition-all duration-500 group-hover:w-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      {/* ---------- Memberships ---------- */}
      <section id="memberships" className="relative isolate" aria-labelledby="memberships-heading">
        <img
          src={bgliner}
          alt="Cotton sourcing background"
          className="absolute inset-0 -z-10 h-full w-full object-contain object-center  rotate-180 -scale-x-100"
        />
        <div className="relative mx-auto bg-white/10 p-6  backdrop-blur-2xl sm:p-10 lg:p-14">
          <div
            aria-hidden
            className="absolute inset-x-0 top-16 -bottom-10 -z-10 rounded-[2.5rem]"
            style={{
              backgroundImage:
                "linear-gradient(180deg, transparent 0%, color-mix(in oklab, var(--royal-glow) 20%, white) 45%, transparent 100%)",
            }}
          />
          {/* Blobs for the glass to blur */}
          <div
            aria-hidden
            className="absolute top-32 right-[8%] -z-10 size-72 rounded-full bg-[var(--royal-glow)]/30 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute bottom-10 left-[8%] -z-10 size-80 rounded-full bg-[var(--primary)]/25 blur-3xl"
          />
          {/* membership  */}
          <div className="mb-30 relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/70 p-6 shadow-2xl shadow-[var(--royal-deep)]/25 ring-1 ring-inset ring-white/50 backdrop-blur-2xl sm:p-8 lg:p-12">
            <Reveal className="text-center">
              <div className="mb-14">
                <span className="inline-flex rounded-full bg-linear-to-r from-[var(--royal-deep)] via-[var(--primary)] to-[var(--royal-glow)] p-[1.5px] shadow-lg shadow-primary/15">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.24em] text-sky-pop">
                    Industry Associations
                  </span>
                </span>
                <h2
                  id="memberships-heading"
                  className="mt-6 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl"
                >
                  Proud <span className="text-gradient-royal">member of</span>
                </h2>
                <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                  EB Global stands within the industry's most respected associations.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              {/* Gradient Border Wrapper */}
              <div className="overflow-hidden rounded-[2rem] bg-linear-to-br from-white/80 via-[var(--royal-glow)] to-[var(--primary)] p-[1.5px] shadow-2xl shadow-[var(--royal-deep)]/30">
                {/* Dark Glass Container */}
                <ul className="relative grid divide-y divide-white/10 overflow-hidden rounded-[calc(2rem-1.5px)] bg-[var(--royal-deep)]/80 backdrop-blur-2xl md:grid-cols-3 md:divide-x md:divide-y-0">
                  {/* Aurora blob spanning the container */}
                  <div className="aurora-blob absolute left-1/2 top-0 size-96 -translate-x-1/2 bg-[var(--royal-glow)]/20 blur-3xl pointer-events-none" />

                  {MEMBERSHIPS.map((m) => (
                    <li
                      key={m.abbr}
                      className="group relative flex flex-col items-center p-8 transition-colors duration-300 hover:bg-white/5 sm:p-10"
                    >
                      {/* Logo Container: Kept white to match the image's background, added a subtle glow */}
                      <div className="relative w-fit">
                        <div className="absolute inset-0 rounded-full bg-white/30 blur-md transition-opacity duration-300 group-hover:bg-white/50" />
                        <img
                          src={m.logo}
                          alt={`${m.name} (${m.abbr}) logo`}
                          className="relative size-26 rounded-full bg-white object-contain p-1 "
                          loading="lazy"
                          width={600}
                          height={600}
                        />
                      </div>

                      {/* Accent: Changed to white/sky for contrast on dark bg */}
                      <p className=" mt-8 font-display text-3xl font-extrabold tracking-tight text-white transition-colors duration-300 group-hover:text-sky-200">
                        {m.abbr}
                      </p>

                      {/* Name: Changed to white */}
                      <p className="mt-1 text-sm font-semibold text-white/90">{m.name}</p>

                      {/* Description: Changed to white/60 */}
                      <p className="text-center mt-4 text-sm leading-relaxed text-white/60">
                        {m.desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
          {/* contact us  */}
          <div
            id="contact"
            className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/70 p-6 shadow-2xl shadow-[var(--royal-deep)]/25 ring-1 ring-inset ring-white/50 backdrop-blur-2xl sm:p-8 lg:p-12"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/50 to-transparent"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"
            />
            <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
              <div className="absolute -bottom-10 -left-10 size-[26rem] rounded-full bg-[var(--royal-glow)]/35 blur-3xl" />
              <CottonPlant className="absolute -bottom-6 -left-12 w-[22rem] sm:w-[28rem] lg:w-[34rem]" />
            </div>
            {/* Heading */}
            <Reveal className="relative text-center">
              <div className="mb-12 sm:mb-14">
                <span className="inline-flex rounded-full bg-linear-to-r from-[var(--royal-deep)] via-[var(--primary)] to-[var(--royal-glow)] p-[1.5px] shadow-lg shadow-primary/15">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.24em] text-sky-pop">
                    Get In Touch
                  </span>
                </span>
                <h2
                  id="contact-heading"
                  className="mt-6 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl"
                >
                  Let's start a <span className="text-gradient-royal">conversation</span>
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-foreground/70">
                  Our team is ready to build a lasting partnership with you, whether you are a
                  global merchant or a leading spinning mill.
                </p>
              </div>
            </Reveal>

            {/* Four cards */}
            <ul className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
              {CONTACT_ITEMS.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07, ease: "easeOut" }}
                  // Applied gradient border wrapper
                  className="group relative rounded-3xl bg-linear-to-br from-white/80 via-[var(--royal-glow)] to-[var(--primary)] p-[1.5px] shadow-lg shadow-[var(--royal-deep)]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[var(--royal-deep)]/40 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  {/* Dark Glass Card */}
                  <div className="relative h-full overflow-hidden rounded-[calc(1.5rem-1.5px)] bg-[var(--royal-deep)]/80 p-6 backdrop-blur-2xl">
                    {/* Aurora blob */}
                    <div className="aurora-blob -right-16 -top-16 size-32 bg-[var(--royal-glow)]/30 opacity-50 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* Top sheen (adapted for dark mode) */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/10 to-transparent"
                    />

                    {/* Gradient line grows in on hover */}
                    <span
                      aria-hidden
                      className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-linear-to-r from-white via-sky-200 to-white transition-transform duration-500 group-hover:scale-x-100 motion-reduce:transition-none"
                    />

                    <div className="relative">
                      {/* Icon tile: Changed to white glass so it pops on the dark background */}
                      <span className="relative flex size-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 shadow-lg transition-transform duration-300 group-hover:scale-105">
                        <item.icon className="h-5 w-5 text-white" aria-hidden />
                        <span
                          aria-hidden
                          className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/20"
                        />
                      </span>

                      {/* Label: Changed to white/60 */}
                      <h3 className="mt-6 text-[10px] font-bold uppercase tracking-[0.22em] text-white/60">
                        {item.label}
                      </h3>

                      {item.lines.map((line, j) =>
                        item.hrefs[j] ? (
                          <a
                            key={line}
                            href={item.hrefs[j]}
                            className="mt-1.5 flex items-center gap-1 break-words text-[15px] font-semibold text-white transition-colors hover:text-sky-200"
                          >
                            {line}
                            <ArrowUpRight className="h-3.5 w-3.5 shrink-0 opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                          </a>
                        ) : (
                          <p
                            key={line}
                            className="mt-1.5 break-words text-[15px] font-semibold text-white"
                          >
                            {line}
                          </p>
                        ),
                      )}
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

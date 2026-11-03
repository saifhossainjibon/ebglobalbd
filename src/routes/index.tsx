import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
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
  Navigation,
  Layers,
  Users,
  type LucideIcon,
} from "lucide-react";

import heroCotton from "@/assets/hero-bg.jfif";
// import heroCotton from "@/assets/bg.png";
import globalNetwork from "@/assets/global-network.jpg";
import seal from "@/assets/membership-seal.png";
import { BUYERS, COMPANY, MEMBERSHIPS, SOLUTIONS, SUPPLIERS } from "@/lib/site-data";
import { Marquee } from "@/components/marquee";
import { Reveal } from "@/components/reveal";
import { LogoTile } from "@/components/logo-tile";
import portContainers from "@/assets/port-containers.jpg";
import { EXCELLENCE } from "@/lib/site-data";
import { cn } from "@/lib/utils";
const ICONS: LucideIcon[] = [Sparkles, Layers, Globe2, Users, ShieldCheck, Handshake, Building2];
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "EB Global — Cotton Indenting & Sourcing",
        description:
          "EB Global connects the world's most reputable cotton merchants with Bangladesh's leading spinning mills. A Trusted Bridge Between Continents.",
      },
      {
        property: "og:title",
        content: "EB Global — Cotton Indenting & Sourcing",
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
  { icon: Calendar, value: String(COMPANY.founded), label: "Founded" },
  { icon: Ship, value: "10+", label: "Global Cotton Suppliers" },
  { icon: Factory, value: "10+", label: "Leading Spinning Mills" },
  { icon: Award, value: "3", label: "Industry Memberships" },
];

const SOLUTION_ICONS = [Globe2, Handshake, ShieldCheck, Sparkles];

const CHIPS = [
  { text: "ICA Member", className: "right-[4%] top-[22%] hidden lg:flex", delay: "0s" },
  { text: "Since 2022", className: "right-[14%] top-[46%] hidden lg:flex", delay: "1.4s" },
  { text: "Global Sourcing", className: "right-[6%] top-[68%] hidden lg:flex", delay: "2.6s" },
];

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
    lines: ["1138/A, JCX Business Tower, 12th floor,", "Block I, Bashundhara, Dhaka-1229"],
    hrefs: [],
  },
  {
    icon: MapPin,
    label: "Corporate Office",
    lines: ["House - 581, Road - 20, Block - J,", "Bashundhara, Dhaka - 1229"],
    hrefs: [],
  },
];

function Index() {
  return (
    <div>
      {/* ---------- Hero ---------- */}
      {/* <section
        id="home"
        className="relative flex min-h-[92vh] items-center overflow-hidden px-6 pb-16 pt-36 z-10"
      >
        <img
          src={heroCotton}
          alt="Cotton bolls in a sunlit cotton field at golden hour"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/30 to-transparent" />
        <div className="aurora-blob bottom-[-30%] right-[-10%] size-[30rem] bg-gold/50" />

        <div className="animate-in fade-in slide-in-from-bottom-6 relative mx-auto w-full max-w-4xl duration-700">
          <div className="glass rounded-4xl p-8 text-center shadow-glow sm:p-14">
            <span className="bg-gradient-gold inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.28em] text-black">
              Cotton Indenting &amp; Sourcing · Est. 2022
            </span>
            <h1 className="mt-7 font-latic text-4xl font-semibold leading-[1.1] text-foreground sm:text-6xl">
              A Trusted Bridge <span className="text-gold-gradient">Between Continents</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              EB Global is a distinguished cotton indenting and sourcing firm, connecting the
              world's most reputable cotton merchants with Bangladesh's leading spinning mills —
              built on a foundation of trust, precision and discretion.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#suppliers"
                className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-transform hover:scale-[1.03]"
              >
                Explore Our Network
              </a>
              <a
                href="#contact"
                className="rounded-full border border-border bg-background/60 px-7 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="glass rounded-2xl px-4 py-5 text-center">
                <p className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-22 z-10"
      >
        {/* Background image */}
        <img
          src={heroCotton}
          alt="Cotton bolls in a sunlit cotton field at golden hour"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Layered overlay — richer, directional */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

        {/* Warm glow — softer, more contained */}
        <div className="pointer-events-none absolute bottom-0 right-0 h-[32rem] w-[32rem] rounded-full bg-amber-400/20 blur-[120px]" />

        {/* Content */}
        <div className="animate-in fade-in slide-in-from-bottom-6 relative mx-auto w-full max-w-5xl duration-700">
          <div className="mx-auto max-w-5xl text-center">
            {/* Eyebrow — clean, minimal */}
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/[0.08] px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/80 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              Cotton Indenting &amp; Sourcing
              <span className="text-white/30">·</span>
              Est. 2022
            </span>

            {/* Headline — tighter, editorial */}
            <h1 className="mt-8 font-latic text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.02em] text-white sm:text-6xl lg:text-[5.25rem]">
              A Trusted Bridge
              <br />
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text italic text-transparent">
                Between Continents
              </span>
            </h1>

            {/* Subtext — calmer, shorter */}
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.6)]">
              Connecting the world's most reputable cotton merchants with Bangladesh's leading
              spinning mills — built on trust, precision and discretion.
            </p>
            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#suppliers"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-neutral-900 shadow-lg shadow-black/20 transition-all hover:bg-amber-300 hover:shadow-xl"
              >
                Explore Our Network
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
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
                className="inline-flex items-center rounded-full border border-white/25 bg-white/[0.06] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/[0.12]"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Stats bar — clean, readable, works on mobile */}
          <div className="mx-auto mt-14 max-w-3xl">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur-md sm:grid-cols-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/[0.02] px-4 py-6 text-center transition-colors hover:bg-white/[0.06]"
                >
                  <p className="font-display text-3xl font-semibold text-white sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-white/55">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* ---------- Who we are ---------- */}
      <section id="about" className="mx-auto max-w-7xl px-6 pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-white px-4 py-1.5 text-[11px] font-bold tracking-[0.22em] text-sky-pop uppercase">
              Who We Are
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Trust, precision and <span className="text-gradient-royal">discretion</span> in every
              consignment
            </h2>
            <p className="mt-4 border-l-2 border-gold/60 pl-4 text-base leading-relaxed text-foreground/90">
              EB Global is a trusted cotton indenting and sourcing company dedicated to connecting
              leading global cotton merchants with Bangladesh's prominent spinning mills. With a
              strong understanding of the international cotton trade and textile industry, we
              provide reliable, transparent, and tailored sourcing solutions that meet the evolving
              needs of our partners. <br /> <br />
              Since our establishment in 2022, we have focused on building strong international
              networks, fostering long-term business relationships, and delivering excellence
              throughout the cotton supply chain.
              <br />
              Our commitment to integrity, professionalism, and operational efficiency enables us to
              simplify international trade while ensuring seamless coordination between suppliers
              and buyers. <br />
              <br /> At EB Global, we believe successful business is built on trust, consistency,
              and lasting partnerships. We strive to be more than just a sourcing partner — we aim
              to be a reliable bridge connecting global opportunities with Bangladesh's thriving
              textile industry.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-1">
            <div className="glass relative overflow-hidden rounded-4xl p-8">
              <div className="aurora-blob -right-16 -top-16 size-56 bg-blue-500/25" />
              <div className="relative">
                <span className="text-[13px] font-extrabold uppercase tracking-[0.28em] text-blue-900">
                  Our Mission
                </span>
                <p className="font-latic mt-5 text-2xl font-medium leading-snug">
                  "To be recognized as a premier cotton sourcing partner — synonymous with trust,
                  excellence, and enduring global relationships."
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Solutions ---------- */}
      <section className="mx-auto max-w-7xl px-6 pt-28">
        <Reveal className="text-center">
          <div className="relative mb-14 ">
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-extrabold tracking-[0.24em] text-sky-pop uppercase">
              What We Do
            </span>
            <h2 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Tailored solutions for <span className="text-gradient-royal">a global industry</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SOLUTIONS.map((solution, i) => {
            const Icon = SOLUTION_ICONS[i]!;
            return (
              <Reveal key={solution.title} delay={i * 0.08}>
                <div className="glass glow-card group h-full rounded-3xl p-7">
                  <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-br from-royal-deep to-primary ">
                    <Icon className="h-7 w-7 text-cotton" />
                  </span>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
                    {solution.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                    {solution.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
      {/* ---------- define ---------- */}
      <section className="relative overflow-hidden bg-slate-50/50 py-16 dark:bg-[#0a0a0a]">
        {/* Background Ambient Glow */}
        <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
          <div className="absolute left-1/4 top-0 h-96 w-96 animate-pulse rounded-full bg-royal/10 blur-[120px] duration-1000" />
          <div className="absolute bottom-0 right-1/4 h-96 w-96 animate-pulse rounded-full bg-gold/10 blur-[120px] delay-500" />
        </div>

        <div className="mx-auto max-w-7xl px-6">
          {/* Header */}
          <Reveal className="text-center">
            <div className="relative mb-14 ">
              <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-extrabold tracking-[0.24em] text-sky-pop uppercase">
                Why EB Global
              </span>
              <h2 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                Defined by <span className="text-gradient-royal">excellence</span>
              </h2>
            </div>
          </Reveal>

          {/* Bento Grid - PERFECT RECTANGLE, NO BLANK SPACE */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[minmax(130px,auto)]">
            {EXCELLENCE.map((text, i) => {
              const Icon = ICONS[i] || Sparkles;

              // Flawless 3-col math for 7 items:
              // i=3 (4th card) -> Wide (spans 2 cols, placed on left of row 2)
              // i=5 (6th card) -> Wide (spans 2 cols, placed on left of row 3)
              const isWide = i === 3 || i === 5;

              return (
                <div
                  key={text}
                  className={cn(
                    "group relative flex flex-col overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-royal/10",
                    // GLASSMORPHISM BASE
                    "border border-white/40 bg-white/30 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5",
                    // GRID SPANS
                    isWide && "sm:col-span-2",
                  )}
                >
                  {/* SMOOTH GLOWING BORDER (Always on, rotates smoothly) */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent [background:linear-gradient(45deg,rgba(255,255,255,0.6),transparent,rgba(255,255,255,0.6))_border-box] [-webkit-mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)] [-webkit-mask-composite:xor] [mask-composite:exclude] opacity-50 transition-opacity duration-500 group-hover:opacity-100 dark:[background:linear-gradient(45deg,rgba(255,255,255,0.2),transparent,rgba(255,255,255,0.2))_border-box]" />

                  {/* INNER GLOW (Smoothly appears and stays on hover) */}
                  <div className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                    <div className="absolute -left-10 -top-10 h-40 w-40 animate-pulse rounded-full bg-royal/20 blur-3xl" />
                    <div className="absolute -bottom-10 -right-10 h-40 w-40 animate-pulse rounded-full bg-gold/20 blur-3xl delay-300" />
                  </div>

                  {/* Top Area (Icon + Index) */}
                  <div className="relative z-10 flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/50 bg-white/50 text-royal shadow-sm backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:bg-royal group-hover:text-white dark:border-white/10 dark:bg-white/10">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-foreground/20 transition-colors group-hover:text-royal/50">
                      0{i + 1}
                    </span>
                  </div>

                  {/* Bottom Area (Text) */}
                  <div className="relative z-10 mt-4 pt-0">
                    <p className=" text-[16.5px] font-medium leading-relaxed text-foreground/85 transition-colors duration-300 group-hover:text-foreground">
                      {text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* ---------- Global network band ---------- */}
      <section className="mx-auto max-w-7xl px-6 pt-28">
        <Reveal>
          <div className="group relative overflow-hidden rounded-3xl border border-border/60 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.4)]">
            <img
              src={globalNetwork}
              alt="Global trade routes across the world"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
              width={1280}
              height={1024}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-transparent" />
            <div className="pointer-events-none absolute -left-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-royal-glow/20 blur-[100px]" />

            <div className="relative px-8 py-14 sm:px-12 sm:py-16">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-royal-glow/30 bg-background/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-royal-glow backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-royal-glow" />
                Global Reach
              </div>

              <h2 className="max-w-lg font-display text-3xl font-bold tracking-tight sm:text-4xl">
                A network spanning <span className="text-gradient-royal">four continents</span>
              </h2>

              <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                Direct, trusted relationships with top-tier global suppliers — reinforcing EB
                Global's credibility within a short period of time.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/suppliers"
                  className="group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-md shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-royal-glow hover:shadow-lg hover:shadow-primary/30"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
                  Our Suppliers
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>

                <Link
                  to="/buyers"
                  className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-royal-glow/40"
                >
                  Our Buyers
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ---------- Supplier ---------- */}
      <div id="suppliers" className="mx-auto max-w-7xl px-6">
        <section className="pt-16">
          <Reveal className="text-center">
            <div className="relative mb-14 ">
              <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-extrabold tracking-[0.24em] text-sky-pop uppercase">
                Global Network
              </span>
              <h2 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                Our Supplier <span className="text-gradient-royal">Network</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                EB Global has rapidly established direct and trusted relationships with top-tier
                global suppliers — reinforcing its credibility within a short period of time.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
            {SUPPLIERS.map((supplier, i) => (
              <Reveal key={supplier.name} delay={(i % 3) * 0.07}>
                <LogoTile name={supplier.name} logo={supplier.logo} className="w-full" />
              </Reveal>
            ))}
          </div>
        </section>
        {/* Logistics band */}
        <section className="pt-20">
          <Reveal>
            <div className="group relative overflow-hidden rounded-3xl border border-border">
              <img
                src={portContainers}
                alt="Container ship loading at an international port"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
                width={1600}
                height={1008}
              />

              {/* Stronger overlay for readable text */}
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />

              <div className="relative px-8 py-14 sm:px-12 sm:py-16">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-royal-glow">
                  Global Logistics
                </p>

                <h2 className="max-w-lg font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  From origin to <span className="text-gradient-royal">spinning mill</span>
                </h2>

                <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                  Seamless trade facilitation with full transparency — from global origins across
                  the Americas, Africa, Central Asia and the Indian subcontinent to the mills of
                  Bangladesh.
                </p>
              </div>
            </div>
          </Reveal>
        </section>
      </div>
      {/* ---------- Buyers ---------- */}
      <div id="buyers" className="mx-auto max-w-7xl px-6 pt-20">
        <section className="pt-16">
          <Reveal className="text-center">
            <div className="relative mb-14 ">
              <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-extrabold tracking-[0.24em] text-sky-pop uppercase">
                Buyer Network
              </span>
              <h2 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                Mills We <span className="text-gradient-royal">Proudly Serve</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                EB Global maintains strong working relationships with a wide range of leading
                spinning mills across Bangladesh.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
            {BUYERS.map((buyer, i) => (
              <Reveal key={buyer.name} delay={(i % 3) * 0.07}>
                <LogoTile name={buyer.name} logo={buyer.logo} className="w-full" />
              </Reveal>
            ))}
          </div>
        </section>
      </div>
      {/* ---------- Memberships ---------- */}
      <section id="memberships" className="mx-auto max-w-7xl px-6 pt-38">
        <Reveal className="text-center">
          <div className="relative mb-14 ">
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-extrabold tracking-[0.24em] text-sky-pop uppercase">
              Industry Associations
            </span>
            <h2 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Proud <span className="text-gradient-royal">Member Of</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              EB Global stands within the industry's most respected associations
            </p>
          </div>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {MEMBERSHIPS.map((membership, i) => (
            <Reveal key={membership.abbr} delay={i * 0.1}>
              <Link
                to="/membership"
                className="glass glow-card flex h-full flex-col items-center rounded-3xl p-8 text-center"
              >
                <img
                  src={seal}
                  alt={`${membership.abbr} membership seal (demo)`}
                  className="h-24 w-24 rounded-full"
                  loading="lazy"
                  width={512}
                  height={512}
                />
                <span className="mt-5 font-display text-2xl font-extrabold text-gradient-gold">
                  {membership.abbr}
                </span>
                <span className="mt-1 text-sm font-semibold text-foreground">
                  {membership.name}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {membership.desc}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      {/* ---------- Contact ---------- */}
      <section id="contact" className="relative mx-auto max-w-7xl px-6 py-20 mt-20">
        {/* Ambient glows behind the panels so the glass has something to refract */}
        {/* <div className="pointer-events-none absolute -top-16 left-1/4 h-72 w-72 rounded-full bg-royal/20 blur-3xl animate-aurora" />
        <div className="pointer-events-none absolute bottom-10 right-1/4 h-64 w-64 rounded-full bg-gold/15 blur-3xl animate-aurora" /> */}

        {/* Section heading */}
        <Reveal className="text-center">
          <div className="relative mb-14 ">
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-extrabold tracking-[0.24em] text-sky-pop uppercase">
              Get In Touch
            </span>
            <h2 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Let's start a <span className="text-gradient-royal">conversation</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Our team is ready to build a lasting partnership with you — whether you are a global
              merchant or a leading spinning mill.
            </p>
          </div>
        </Reveal>

        {/* Split panel */}
        <Reveal>
          <div className="relative grid gap-6 lg:grid-cols-12">
            {/* LEFT: glassmorphic contact box */}
            <div className="lg:col-span-5">
              <div className="group/box relative h-full">
                {/* Outer soft shadow + gradient edge */}
                <div className="absolute -inset-px rounded-4xl bg-gradient-to-br from-white/25 via-white/5 to-royal/30 opacity-70 blur-[1px]" />
                <div className="relative h-full overflow-hidden rounded-4xl shadow-[0_24px_60px_-24px_oklch(0.35_0.08_265/0.55),0_8px_24px_-12px_oklch(0.35_0.08_265/0.35)]">
                  {/* Frosted backdrop */}
                  <div className="absolute inset-0 bg-white/[0.06] backdrop-blur-2xl" />
                  {/* Top sheen */}
                  <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/15 to-transparent" />
                  {/* Diagonal light streak */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rotate-45 bg-gradient-to-br from-white/20 to-transparent blur-2xl" />
                  {/* Inner ring highlight */}
                  <div className="absolute inset-0 rounded-4xl ring-1 ring-inset ring-white/15" />

                  {/* Content */}
                  <div className="relative flex h-full flex-col justify-between p-8 sm:p-10">
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground">
                        Contact details
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Reach the right desk directly.
                      </p>

                      <ul className="mt-8 space-y-1">
                        {CONTACT_ITEMS.map((item, i) => (
                          <motion.li
                            key={item.label}
                            initial={{ opacity: 0, x: -12 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: i * 0.07, ease: "easeOut" }}
                          >
                            <div className="group flex items-start gap-4 rounded-2xl border border-transparent px-3 py-4 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.06] hover:shadow-[0_12px_32px_-16px_oklch(0.35_0.08_265/0.6)]">
                              <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-royal-deep to-primary shadow-[0_8px_20px_-8px_oklch(0.45_0.13_265/0.6)] transition-transform duration-300 group-hover:scale-105">
                                <item.icon className="h-4.5 w-4.5 text-cotton" />
                                {/* Icon glass highlight */}
                                <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/20" />
                              </span>
                              <div className="min-w-0 flex-1">
                                <h4 className="text-[10px] font-bold tracking-[0.22em] text-muted-foreground uppercase">
                                  {item.label}
                                </h4>
                                {item.lines.map((line, j) =>
                                  item.hrefs[j] ? (
                                    <a
                                      key={line}
                                      href={item.hrefs[j]}
                                      className="mt-1 flex items-center gap-1 break-words text-sm font-semibold text-foreground transition-colors hover:text-sky-pop"
                                    >
                                      {line}
                                      <ArrowUpRight className="h-3.5 w-3.5 shrink-0 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                                    </a>
                                  ) : (
                                    <p
                                      key={line}
                                      className="mt-1 break-words text-sm font-semibold text-foreground"
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

                    {/* CTA */}
                    <div className="mt-8 border-t border-white/10 pt-6">
                      <a
                        href="mailto:Info@ebglobalbd.com"
                        className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-all hover:bg-royal-glow hover:shadow-[0_16px_45px_-12px_color-mix(in_oklab,var(--royal)_75%,transparent)]"
                      >
                        Send an Email
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: map panel (matching glass frame) */}
            <div className="lg:col-span-7">
              <div className="relative h-full min-h-[480px]">
                <div className="absolute -inset-px rounded-4xl bg-gradient-to-br from-white/25 via-white/5 to-royal/30 opacity-70 blur-[1px]" />
                <div className="relative h-full overflow-hidden rounded-4xl p-2 shadow-[0_24px_60px_-24px_oklch(0.35_0.08_265/0.55),0_8px_24px_-12px_oklch(0.35_0.08_265/0.35)]">
                  <div className="absolute inset-0 bg-white/[0.06] backdrop-blur-2xl" />
                  <div className="absolute inset-0 rounded-4xl ring-1 ring-inset ring-white/15" />
                  <div className="relative h-full w-full overflow-hidden rounded-3xl">
                    <iframe
                      src={COMPANY.mapEmbed}
                      title="EB Global office — JCX Business Tower, Bashundhara, Dhaka"
                      className="h-full w-full border-0 grayscale-[35%] contrast-[1.05]"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                    {/* Floating address chip — same glass language with shadow */}
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                      className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-sm"
                    >
                      <div className="relative overflow-hidden rounded-2xl shadow-[0_16px_40px_-16px_oklch(0.3_0.06_265/0.6)]">
                        <div className="absolute inset-0 bg-white/[0.08] backdrop-blur-xl" />
                        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/20" />
                        <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white/15 to-transparent" />
                        <div className="relative flex items-start gap-3 p-4">
                          <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-royal-deep to-primary shadow-[0_8px_20px_-8px_oklch(0.45_0.13_265/0.6)]">
                            <Navigation className="h-4.5 w-4.5 text-cotton" />
                            <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/20" />
                          </span>
                          <div className="min-w-0">
                            <h4 className="text-[10px] font-bold tracking-[0.22em] text-muted-foreground uppercase">
                              Find us here
                            </h4>
                            <p className="mt-1 text-sm font-semibold text-foreground">
                              JCX Business Tower, Bashundhara, Dhaka
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
      {/* ---------- Final CTA ---------- */}
      <section className="mx-auto max-w-7xl px-6 pt-28">
        <Reveal>
          <div className="hero-gradient relative overflow-hidden rounded-4xl border border-royal/25 px-8 py-16 text-center sm:px-14">
            <div className="pointer-events-none absolute -top-24 left-1/4 h-64 w-64 rounded-full bg-royal/40 blur-3xl animate-aurora" />
            <div className="pointer-events-none absolute -right-16 -bottom-24 h-72 w-72 rounded-full bg-sky-pop/15 blur-3xl" />
            <h2 className="relative font-display text-3xl font-bold tracking-tight text-cotton sm:text-4xl">
              Let's source the world's finest <span className="text-gradient-gold">cotton</span>{" "}
              together
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-base text-cotton/75">
              Whether you are a global merchant or a leading spinning mill, our team is ready to
              build a lasting partnership with you.
            </p>
            <div className="relative mt-9 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-cotton px-7 py-3.5 text-sm font-bold text-royal-deep transition-all hover:shadow-[0_16px_45px_-12px_oklch(0.97_0.008_250/0.4)]"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`tel:${COMPANY.phoneLinks[0]}`}
                className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-royal-deep transition-colors hover:border-royal-glow/40"
              >
                {COMPANY.phones[0]}
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

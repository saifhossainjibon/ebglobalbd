import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Ship } from "lucide-react";

import globalNetwork from "@/assets/global-network.jpg";
import portContainers from "@/assets/port-containers.jpg";
import { SUPPLIERS } from "@/lib/site-data";
import { LogoTile } from "@/components/logo-tile";
import { Marquee } from "@/components/marquee";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/suppliers")({
  head: () => ({
    meta: [
      {
        title: "Our Suppliers — EB Global",
        description:
          "Direct, trusted relationships with top-tier global cotton merchants: Paul Reinhart, Olam Agri, Cargill, LDC, StoneX/CDI and more.",
      },
      { property: "og:title", content: "Our Suppliers — EB Global" },
      {
        property: "og:description",
        content:
          "Direct and trusted relationships with top-tier global cotton suppliers across four continents.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Suppliers,
});

function Suppliers() {
  return (
    <div className="mx-auto max-w-7xl px-6">
      {/* Page hero */}
      <section className="relative overflow-hidden rounded-4xl border border-border">
        <img
          src={globalNetwork}
          alt="Global trade routes across the world"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          width={1280}
          height={1024}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative px-8 py-20 sm:px-14 sm:py-24"
        >
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-bold tracking-[0.24em] text-sky-pop uppercase">
            <Ship className="h-3.5 w-3.5" />
            Our Suppliers
          </span>
          <h1 className="mt-6 max-w-2xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Top-tier <span className="text-gradient-royal">global merchants</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            EB Global has rapidly established direct and trusted relationships with top-tier global
            suppliers — reinforcing its credibility within a short period of time.
          </p>
        </motion.div>
      </section>

      {/* Marquee */}
      <section className="group pt-14">
        <Marquee
          items={SUPPLIERS}
          renderItem={(supplier) => (
            <img
              src={supplier.logo}
              alt={supplier.name}
              className="h-10 w-auto object-contain opacity-80 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
            />
          )}
        />
      </section>

      {/* Grid */}
      <section className="pt-16">
        <SectionHeading
          eyebrow="Global Network"
          title="Our supplier network"
          description="Demo logos shown — official partner logos and marks will be added once supplied."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
          <div className="relative overflow-hidden rounded-4xl border border-border">
            <img
              src={portContainers}
              alt="Container ship loading at an international port"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              width={1600}
              height={1008}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/92 via-background/70 to-transparent" />
            <div className="relative px-8 py-16 sm:px-14">
              <h2 className="max-w-lg font-display text-3xl font-bold tracking-tight sm:text-4xl">
                From origin to <span className="text-gradient-royal">spinning mill</span>
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                Seamless trade facilitation with full transparency — from global origins across the
                Americas, Africa, Central Asia and the Indian subcontinent to the mills of
                Bangladesh.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="pt-20">
        <Reveal>
          <div className="hero-gradient relative overflow-hidden rounded-4xl border border-royal/25 px-8 py-14 text-center sm:px-14">
            <div className="pointer-events-none absolute -bottom-20 left-1/3 h-56 w-56 rounded-full bg-cotton/15 blur-3xl animate-aurora" />
            <h2 className="relative font-display text-2xl font-bold text-cotton sm:text-3xl">
              A global merchant looking for a trusted partner in{" "}
              <span className="text-gradient-gold">Bangladesh</span>?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-base text-cotton/75">
              We represent world-class cotton merchants with transparency and precision — reaching
              the country's leading spinning mills.
            </p>
            <a
              href="#contact"
              className="group relative mt-8 inline-flex items-center gap-2 rounded-full bg-cotton px-7 py-3.5 text-sm font-bold text-royal-deep transition-all hover:shadow-[0_16px_45px_-12px_oklch(0.97_0.008_250/0.4)]"
            >
              Partner With Us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

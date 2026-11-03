import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Sparkles,
  Layers,
  Globe2,
  Users,
  ShieldCheck,
  Handshake,
  Building2,
  type LucideIcon,
} from "lucide-react";
import fabricRolls from "@/assets/fabric-rolls.jpg";
import { BUYERS } from "@/lib/site-data";
import { Marquee } from "@/components/marquee";
import { Reveal } from "@/components/reveal";
import { EXCELLENCE } from "@/lib/site-data";
import { cn } from "@/lib/utils";
const ICONS: LucideIcon[] = [Sparkles, Layers, Globe2, Users, ShieldCheck, Handshake, Building2];
export const Route = createFileRoute("/buyers")({
  head: () => ({
    meta: [
      {
        title: "Our Buyers — EB Global",
        description:
          "EB Global maintains strong working relationships with Bangladesh's leading spinning mills: Badsha, Purbani, Chaity, MSA, Fakir and more.",
      },
      { property: "og:title", content: "Our Buyers — EB Global" },
      {
        property: "og:description",
        content:
          "Strong working relationships with a wide range of Bangladesh's leading spinning mills.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Buyers,
});

function Buyers() {
  return (
    <div className="mx-auto max-w-7xl px-6">
      {/* Fabric band */}
      <section className="pt-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl border border-border">
            <img
              src={fabricRolls}
              alt="Cotton fabric rolls and yarn cones in a textile warehouse"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              width={1600}
              height={1008}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/92 via-background/70 to-transparent" />
            <div className="relative px-8 py-16 sm:px-14">
              <h2 className="max-w-lg font-display text-3xl font-bold tracking-tight sm:text-4xl">
                The right cotton for <span className="text-gradient-royal">every count</span>
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                From staple to premium origins, we match the right cotton to the right mill —
                supporting consistent yarn quality and smooth production planning.
              </p>
            </div>
          </div>
        </Reveal>
      </section>
      {/* Marquee */}
      <section className="group pt-14">
        <Marquee
          items={BUYERS}
          renderItem={(buyer) => (
            <img
              src={buyer.logo}
              alt={buyer.name}
              className="h-10 w-auto object-contain opacity-80 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
            />
          )}
        />
      </section>

    </div>
  );
}

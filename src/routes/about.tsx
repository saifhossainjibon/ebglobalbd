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
import { EXCELLENCE } from "@/lib/site-data";
import { cn } from "@/lib/utils";
const ICONS: LucideIcon[] = [Sparkles, Layers, Globe2, Users, ShieldCheck, Handshake, Building2];

export function About() {
  return (
    <section className="relative bg-[#0a0a0a] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-blue-500">
            Why EB Global
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Defined by <span className="text-white/60">excellence</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[minmax(220px,auto)]">
          {EXCELLENCE.map((text, i) => {
            // Grab the correct icon for this card
            const Icon = ICONS[i] || Sparkles;

            // Bento Layout Logic:
            // Index 1 (2nd card) -> Tall (spans 2 rows)
            // Index 3 (4th card) -> Wide (spans 2 columns)
            // Index 6 (7th card) -> Wide (spans 2 columns)
            const isTall = i === 1;
            const isWide = i === 3 || i === 6;

            return (
              <div
                key={text}
                className={cn(
                  "group relative flex flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] p-6 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.04]",
                  isTall && "sm:row-span-2",
                  isWide && "sm:col-span-2",
                )}
              >
                {/* Glowing Effect behind the icon */}
                <div className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute left-6 top-6 h-24 w-24 rounded-full bg-blue-500/20 blur-2xl" />
                </div>

                {/* Top Area (Icon + Index) */}
                <div className="relative z-10 flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/70 transition-colors group-hover:border-white/20 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-xs font-medium text-white/20 transition-colors group-hover:text-white/40">
                    0{i + 1}
                  </span>
                </div>

                {/* Bottom Area (Text) */}
                <div className="relative z-10 mt-auto pt-10">
                  <p className="text-[15px] leading-relaxed text-white/70 transition-colors group-hover:text-white/90">
                    {text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

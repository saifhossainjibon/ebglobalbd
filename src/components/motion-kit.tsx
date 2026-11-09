/**
 * components/motion-kit.tsx
 * Animation + shared UI building blocks for the EB Global landing page.
 * Visual design (colours, text, layout) is unchanged: this file only adds motion
 * and removes repeated markup.
 */
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useId, useRef, useState, type PointerEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

/* -------------------------------------------------------------------------- */
/*  Hooks                                                                      */
/* -------------------------------------------------------------------------- */

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const update = () => setMatches(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [query]);
  return matches;
}

/* -------------------------------------------------------------------------- */
/*  Global styles (rendered once)                                              */
/* -------------------------------------------------------------------------- */

export function MotionStyles() {
  return (
    <style>{`
      @keyframes ebDrift {
        0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
        50% { transform: translate3d(28px, -22px, 0) scale(1.08); }
      }
      .eb-drift { animation: ebDrift 16s ease-in-out infinite; }
      @keyframes ebFlow { to { stroke-dashoffset: -28; } }
      .eb-flow { animation: ebFlow 1.4s linear infinite; }
      @media (prefers-reduced-motion: reduce) { .eb-drift, .eb-flow { animation: none; } }
    `}</style>
  );
}

/* -------------------------------------------------------------------------- */
/*  Scroll progress bar                                                        */
/* -------------------------------------------------------------------------- */

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[100] h-[3px] origin-left bg-linear-to-r from-[var(--royal-deep)] via-[var(--primary)] to-[var(--royal-glow)]"
    />
  );
}

/* -------------------------------------------------------------------------- */
/*  Reveal: fade + slide + soft scale when scrolled into view                  */
/*  (no CSS filter: it would break the backdrop-blur of the glass cards)       */
/* -------------------------------------------------------------------------- */

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  x?: number;
  y?: number;
  scale?: number;
  duration?: number;
  as?: "div" | "li";
};

export function Reveal({
  children,
  className,
  delay = 0,
  x = 0,
  y = 28,
  scale = 0.98,
  duration = 0.8,
  as = "div",
}: RevealProps) {
  const Tag = as === "li" ? motion.li : motion.div;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, x, y, scale }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </Tag>
  );
}

/* -------------------------------------------------------------------------- */
/*  FanIn: "card stack" entrance. On desktop every card starts stacked in the  */
/*  centre of its row (slightly rotated) and fans out to its grid slot.        */
/* -------------------------------------------------------------------------- */

export function FanIn({
  index,
  cols,
  children,
  className,
}: {
  index: number;
  cols: number;
  children: ReactNode;
  className?: string;
}) {
  const wide = useMediaQuery("(min-width: 1024px)");
  const mid = (cols - 1) / 2;
  const col = index % cols;

  return (
    <motion.div
      key={String(wide)} // re-mount once the breakpoint is known so `initial` is correct
      className={className}
      initial={
        wide
          ? { opacity: 0, x: `${(mid - col) * 100}%`, y: 36, rotate: (col - mid) * 8, scale: 0.88 }
          : { opacity: 0, y: 40 }
      }
      whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ type: "spring", stiffness: 110, damping: 17, mass: 0.9, delay: index * 0.09 }}
    >
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Tilt: subtle 3D tilt that follows the pointer (desktop / mouse only)       */
/* -------------------------------------------------------------------------- */

export function Tilt({
  children,
  className,
  max = 7,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const canHover = useMediaQuery("(hover: hover) and (pointer: fine)");
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), { stiffness: 220, damping: 22 });
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), { stiffness: 220, damping: 22 });

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!canHover) return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  };
  const reset = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      className={className}
      style={canHover ? { rotateX, rotateY, transformPerspective: 900 } : {}}
      onPointerMove={onMove}
      onPointerLeave={reset}
    >
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Magnetic: element gently follows the cursor (used on the hero buttons)     */
/* -------------------------------------------------------------------------- */

export function Magnetic({
  children,
  strength = 0.3,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const canHover = useMediaQuery("(hover: hover) and (pointer: fine)");
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 200, damping: 15, mass: 0.4 });
  const y = useSpring(my, { stiffness: 200, damping: 15, mass: 0.4 });

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!canHover) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - (r.left + r.width / 2)) * strength);
    my.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      className={cn("inline-block", className)}
      style={{ x, y }}
      onPointerMove={onMove}
      onPointerLeave={reset}
    >
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  MaskLine: headline line that slides up from behind a mask                  */
/* -------------------------------------------------------------------------- */

export function MaskLine({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <span className="-mx-[0.1em] -my-[0.3em] block overflow-hidden px-[0.1em] py-[0.3em]">
      <motion.span
        className={cn("block", className)}
        initial={{ y: "150%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.95, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/*  CountUp                                                                    */
/* -------------------------------------------------------------------------- */

export function CountUp({
  value,
  duration = 1800,
  delay = 0,
}: {
  value: string; // e.g. "10+", "1000+"
  duration?: number;
  delay?: number;
}) {
  const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
  const [, prefix = "", digits = "", suffix = ""] = match ?? [];
  const isNumber = digits !== "";
  const target = isNumber ? parseFloat(digits) : 0;
  const decimals = digits.split(".")[1]?.length ?? 0;

  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!isNumber || !ref.current) return;
    let raf = 0;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();

        const start = performance.now() + delay;
        const tick = (now: number) => {
          const p = Math.min(Math.max((now - start) / duration, 0), 1);
          setN(target * (1 - Math.pow(1 - p, 3))); // easeOutCubic
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(ref.current);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, duration, delay]);

  if (!isNumber) return <>{value}</>;

  return (
    <span ref={ref} aria-label={value} className="tabular-nums">
      <span aria-hidden>
        {prefix}
        {n.toFixed(decimals)}
        {suffix}
      </span>
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/*  Shared UI (identical classes to the original markup)                       */
/* -------------------------------------------------------------------------- */

/** Gradient border + dark glass card pieces used by most cards */
export const GC_WRAP = "bg-linear-to-br from-white/80 via-[var(--royal-glow)] to-[var(--primary)]";

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full bg-linear-to-r from-[var(--royal-deep)] via-[var(--primary)] to-[var(--royal-glow)] p-[1.5px] shadow-lg shadow-primary/15",
        className,
      )}
    >
      <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[11px] font-extrabold tracking-[0.24em] text-sky-pop uppercase">
        {children}
      </span>
    </span>
  );
}

export function Bar({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "h-1 w-24 rounded-full bg-linear-to-r from-[var(--royal-deep)] via-[var(--primary)] to-[var(--royal-glow)]",
        className,
      )}
    />
  );
}

/** Light glass used by every content box (sits on the black page, tinted blue at the corner) */
export const GLASS_BOX =
  "bg-linear-to-br from-white/95 via-white/90 to-[color-mix(in_oklab,var(--royal-glow)_35%,white)] backdrop-blur-xl";

/**
 * Blue haze band + big glowing blue blobs behind a section (the page base is black).
 * `blobs` only needs position + size; the colour/intensity is set here for the whole site.
 */
const BLOB_COLORS = ["bg-[var(--primary)]/55", "bg-[var(--royal-glow)]/45"];

export function Backdrop({
  blobs,
  strength = 14,
  panel = true,
}: {
  blobs: string[];
  strength?: number;
  panel?: boolean;
}) {
  return (
    <>
      {panel && (
        <div
          aria-hidden
          className="absolute inset-x-0 top-16 -bottom-10 -z-10 rounded-[2.5rem]"
          style={{
            backgroundImage: `linear-gradient(180deg, transparent 0%, color-mix(in oklab, var(--primary) ${Math.round(strength * 1.5)}%, transparent) 45%, transparent 100%)`,
          }}
        />
      )}
      {blobs.map((b, i) => (
        <div
          key={b}
          aria-hidden
          className={cn(
            "eb-drift absolute -z-10 scale-[1.7] rounded-full blur-3xl",
            BLOB_COLORS[i % BLOB_COLORS.length],
            b,
          )}
          style={{ animationDelay: `${-i * 5}s` }}
        />
      ))}
    </>
  );
}

export type Line = { d: string; o: number };

export const LINES_BOTTOM: Line[] = [
  { d: "M-50 660 C250 740 520 540 800 640 S1100 760 1260 680", o: 0.5 },
  { d: "M-50 710 C250 790 520 590 800 690 S1100 810 1260 730", o: 0.3 },
  { d: "M-50 760 C250 840 520 640 800 740 S1100 860 1260 780", o: 0.18 },
];
export const LINES_TOP: Line[] = [
  { d: "M-50 120 C250 40 450 240 750 130 S1100 0 1260 90", o: 0.5 },
  { d: "M-50 170 C250 90 450 290 750 180 S1100 50 1260 140", o: 0.3 },
  { d: "M-50 220 C250 140 450 340 750 230 S1100 100 1260 190", o: 0.18 },
];
export const LINES_ALL: Line[] = [...LINES_TOP, ...LINES_BOTTOM];
export const LINES_TEAM: Line[] = LINES_ALL.slice(1);

/** Flowing curved gradient lines: fade in on view and drift slowly */
export function FlowingLines({ lines, className }: { lines: Line[]; className?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <motion.svg
      aria-hidden
      viewBox="0 0 1200 800"
      preserveAspectRatio="none"
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.6 }}
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" style={{ stopColor: "var(--royal-deep)" }} stopOpacity="0" />
          <stop offset="50%" style={{ stopColor: "var(--primary)" }} />
          <stop offset="100%" style={{ stopColor: "var(--royal-glow)" }} stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.g
        animate={{ x: [-14, 14] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      >
        {lines.map((l) => (
          <path
            key={l.d}
            d={l.d}
            fill="none"
            stroke={`url(#${id})`}
            strokeWidth="1.5"
            strokeOpacity={l.o}
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </motion.g>
    </motion.svg>
  );
}

/** Gradient-border box with top bar + flowing lines (the "glass box" used by every section) */
export function GradientFrame({
  id,
  className,
  innerClassName,
  lines,
  decoZ = "-z-10",
  highlight = false,
  children,
}: {
  id?: string;
  className?: string;
  innerClassName?: string;
  lines?: Line[];
  decoZ?: string;
  highlight?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      id={id}
      className={cn(
        "relative rounded-[2.5rem] bg-linear-to-br from-white via-[var(--royal-glow)] to-[var(--primary)]/0 p-[1.5px] shadow-2xl shadow-[var(--royal-deep)]/25",
        className,
      )}
    >
      <div
        className={cn(
          "relative isolate overflow-hidden rounded-[calc(2.5rem-1.5px)]",
          innerClassName,
        )}
      >
        <div
          aria-hidden
          className={cn(
            "absolute inset-x-0 top-0 h-1.5 bg-linear-to-r from-[var(--royal-deep)] via-[var(--primary)] to-[var(--royal-glow)]",
            decoZ,
          )}
        />
        {lines && <FlowingLines lines={lines} className={decoZ} />}
        {highlight && (
          <div
            aria-hidden
            className={cn(
              "pointer-events-none absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent",
              decoZ,
            )}
          />
        )}
        {children}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  SVG art                                                                    */
/* -------------------------------------------------------------------------- */

/** Render ONCE at the top of the page. Every cotton plant / avatar references these gradients. */
export function SharedDefs() {
  return (
    <svg aria-hidden width="0" height="0" className="pointer-events-none absolute">
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
        <linearGradient id="avatar-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" style={{ stopColor: "var(--royal-glow)" }} />
          <stop offset="100%" style={{ stopColor: "var(--primary)" }} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function UserAvatar({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 120 120" className={`overflow-hidden rounded-full ${className}`}>
      <rect width="120" height="120" fill="url(#avatar-bg)" />
      <circle cx="60" cy="46" r="20" fill="#ffffff" fillOpacity="0.95" />
      <path d="M18 112c0-23 19-38 42-38s42 15 42 38z" fill="#ffffff" fillOpacity="0.95" />
    </svg>
  );
}

const BOLLS = [
  { x: 254, y: 150, s: 1, rot: 14 },
  { x: 46, y: 276, s: 0.85, rot: -18 },
  { x: 264, y: 326, s: 0.9, rot: 22 },
  { x: 150, y: 282, s: 0.8, rot: -6 },
];

function Boll({ x, y, s, rot }: { x: number; y: number; s: number; rot: number }) {
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

/** Cotton plant that sways gently (disabled automatically for reduced-motion users) */
export function CottonPlant({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      aria-hidden
      viewBox="0 0 420 500"
      className={className}
      fill="none"
      style={{ transformOrigin: "15% 100%" }}
      animate={{ rotate: [0, 1.6, 0, -1.1, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    >
      <g stroke="url(#cf-stem)" strokeWidth="6" strokeLinecap="round">
        <path d="M70,500 C78,420 96,345 150,270" />
        <path d="M150,270 C180,220 210,180 254,140" />
        <path d="M104,372 C70,340 50,305 44,262" />
        <path d="M96,404 C150,380 200,372 262,318" />
      </g>
      <g fill="url(#cf-leaf)">
        <path d="M120,330 C84,322 64,296 66,268 C98,272 122,296 120,330 Z" />
        <path d="M186,236 C214,222 242,226 258,246 C230,262 200,258 186,236 Z" />
        <path d="M84,440 C118,434 146,452 152,480 C118,484 90,468 84,440 Z" />
        <path d="M204,360 C230,364 250,384 250,408 C224,404 206,386 204,360 Z" />
      </g>
      {BOLLS.map((b) => (
        <Boll key={`${b.x}-${b.y}`} {...b} />
      ))}
    </motion.svg>
  );
}

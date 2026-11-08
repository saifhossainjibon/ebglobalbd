import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  useLocation,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Toaster } from "sonner";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
} from "lucide-react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { COMPANY } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";
const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "#about", label: "About Us" },
  { to: "#buyers", label: "Our Buyers" },
  { to: "#memberships", label: "Membership" },
  { to: "#contact", label: "Contact Us" },
] as const;

function BrandMark({ className }: { className?: string }) {
  return (
    <Link to="/">
      <img
        src={logo}
        alt="EB Global"
        className="h-18 w-auto object-contain transition-transform group-hover:scale-105"
      />
    </Link>
  );
}
const SOCIALS = [
  { label: "Facebook", href: "https://www.facebook.com/", icon: Facebook },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/", icon: Instagram },
  { label: "X (Twitter)", href: "https://x.com/", icon: Twitter },
];
const MEMBERSHIPS = ["ICA", "BCA", "BIAA"];
function SiteHeader() {
  const { pathname, hash } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname, hash]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4">
        <div className="glass flex items-center justify-between rounded-full pr-4 pl-2 py-1 sm:px-6">
          <BrandMark />

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const active = link.to === "/" ? pathname === "/" && !hash : hash === link.to;

              return (
                <a
                  key={link.to}
                  href={link.to}
                  className={cn(
                    "rounded-full px-4 py-2 text-md font-bold transition-colors",
                    active
                      ? "bg-primary/15 text-royal-deep shadow-[inset_0_0_0_1px_oklch(0.62_0.19_255/0.25)]"
                      : "text-foreground hover:bg-royal/8 hover:text-foreground",
                  )}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-all hover:bg-royal-glow hover:shadow-[0_10px_30px_-10px_color-mix(in_oklab,var(--royal)_70%,transparent)]"
            >
              Get in Touch
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-royal/5 text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open ? (
          <div className="glass-strong mt-2 rounded-2xl p-3 lg:hidden">
            <nav className="flex flex-col">
              {NAV_LINKS.map((link) => {
                const active = link.to === "/" ? pathname === "/" && !hash : hash === link.to;

                return (
                  <a
                    key={link.to}
                    href={link.to}
                    className={cn(
                      "rounded-xl px-4 py-3 text-sm font-semibold transition-colors",
                      active
                        ? "bg-primary/15 text-royal-deep"
                        : "text-muted-foreground hover:bg-royal/8 hover:text-foreground",
                    )}
                  >
                    {link.label}
                  </a>
                );
              })}
              <a
                href="#contact"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-bold text-primary-foreground"
              >
                Get in Touch <ArrowUpRight className="h-4 w-4" />
              </a>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
import { ArrowRight, ArrowUp } from "lucide-react";
function ColumnTitleFooter({ children }: { children: ReactNode }) {
  return (
    <div className="mb-6">
      <h3 className="text-xs font-extrabold tracking-[0.26em] text-white uppercase">{children}</h3>
      <div className="mt-3 h-[3px] w-10 rounded-full bg-linear-to-r from-amber-300 to-white/10" />
    </div>
  );
}
function SiteFooter() {
  return (
    <footer className="relative isolate mt-24">
      {/* ───────── CTA band (overlaps the dark footer) ───────── */}
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="rounded-[2rem] bg-linear-to-br from-white/80 via-[var(--royal-glow)] to-[var(--primary)] p-[1.5px] shadow-2xl shadow-[var(--royal-deep)]/40">
          <div className="relative overflow-hidden rounded-[calc(2rem-1.5px)] bg-gradient-to-br from-[var(--primary)] via-[var(--royal-deep)] to-[var(--royal-deep)] px-6 py-10 sm:px-12 sm:py-12">
            <div className="aurora-blob -top-20 -right-20 size-72 bg-[var(--royal-glow)]/40" />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-white/60 to-transparent"
            />

            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1 text-[10px] font-semibold tracking-[0.28em] text-white/90 uppercase backdrop-blur-xl">
                  <span className="size-1.5 rounded-full bg-amber-400" />
                  Let&apos;s work together
                </span>
                <h2 className="font-latic mt-5 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  Ready to source the world&apos;s{" "}
                  <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                    finest cotton?
                  </span>
                </h2>
                <p className="mt-3 text-[17px] leading-relaxed text-white">
                  Whether you are a global merchant or a leading spinning mill, our team is ready to
                  build a lasting partnership with you.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="/#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-neutral-900 shadow-xl shadow-black/25 ring-4 ring-white/20 transition-all hover:-translate-y-0.5 hover:bg-amber-300 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  Get In Touch
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href={`tel:${COMPANY.phoneLinks[0]}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:bg-white/20 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ───────── Main footer ───────── */}
      <div className="relative -mt-16 overflow-hidden rounded-t-[2.5rem] bg-[var(--royal-deep)] pt-32">
        {/* Backdrop layers */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-b from-[var(--royal-deep)] via-[var(--royal-deep)] to-black/50"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />
        <div className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-80 w-[44rem] max-w-full -translate-x-1/2 rounded-full bg-[var(--royal-glow)]/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 -z-10 size-96 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 -z-10 size-96 rounded-full bg-[var(--primary)]/30 blur-3xl" />

        {/* Gradient hairline */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/60 to-transparent"
        />

        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-4">
              {/* White pill so the logo stays readable on the dark background */}
              <div className="inline-flex rounded-2xl bg-white/95 px-4 py-2.5 shadow-lg shadow-black/20 ring-1 ring-white/40">
                <BrandMark />
              </div>

              <p className="mt-6 max-w-sm text-base leading-relaxed text-white/75">
                {COMPANY.tagline}. Connecting the world&apos;s most reputable cotton merchants with
                Bangladesh&apos;s leading spinning mills.
              </p>

              <div className="mt-7">
                <p className="mb-3 text-[10px] font-bold tracking-[0.24em] text-white/50 uppercase">
                  Proud member of
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  {MEMBERSHIPS.map((m) => (
                    <span
                      key={m}
                      className="rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-extrabold tracking-wider text-white backdrop-blur-xl transition-colors duration-300 hover:bg-white/20"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Explore */}
            <nav aria-label="Footer" className="lg:col-span-2">
              <ColumnTitleFooter>Explore</ColumnTitleFooter>
              <ul className="space-y-3.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.to}>
                    <a
                      href={link.to}
                      className="group inline-flex items-center gap-0 text-base text-white/75 transition-all duration-300 hover:gap-2.5 hover:text-white"
                    >
                      <span
                        aria-hidden
                        className="h-px w-0 bg-gradient-to-r from-amber-300 to-white/40 transition-all duration-300 group-hover:w-4"
                      />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Follow */}
            <div className="lg:col-span-3">
              <ColumnTitleFooter>Follow Us</ColumnTitleFooter>
              <p className="mb-6 max-w-xs text-base leading-relaxed text-white/75">
                Stay connected with EB Global for the latest updates on cotton sourcing, market
                insights, and industry news.
              </p>
              <div className="flex flex-wrap items-center gap-2.5">
                {SOCIALS.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="group flex size-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white/80 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-gradient-to-br hover:from-amber-300 hover:to-amber-500 hover:text-neutral-900 hover:shadow-lg hover:shadow-amber-400/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                  >
                    <Icon className="h-4 w-4" aria-hidden />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="lg:col-span-3">
              <ColumnTitleFooter>Contact</ColumnTitleFooter>
              <ul className="space-y-4 text-base text-white/80">
                {COMPANY.phones.map((phone, i) => (
                  <li key={phone}>
                    <a
                      href={`tel:${COMPANY.phoneLinks[i]}`}
                      className="group flex items-center gap-3 transition-colors hover:text-white"
                    >
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 transition-colors duration-300 group-hover:border-amber-300/50 group-hover:bg-white/15">
                        <Phone className="h-4 w-4 text-amber-300" aria-hidden />
                      </span>
                      {phone}
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="group flex items-center gap-3 break-all transition-colors hover:text-white"
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 transition-colors duration-300 group-hover:border-amber-300/50 group-hover:bg-white/15">
                      <Mail className="h-4 w-4 text-amber-300" aria-hidden />
                    </span>
                    {COMPANY.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10">
                    <MapPin className="h-4 w-4 text-amber-300" aria-hidden />
                  </span>
                  <span className="pt-1.5 text-[15px] leading-relaxed">
                    {COMPANY.addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 border-t border-white/10 py-7">
            <div className="flex flex-col items-center justify-between gap-4 text-sm text-white/65 sm:flex-row">
              <p>
                © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
              </p>

              <p>
                Designed &amp; developed by{" "}
                <a
                  href="https://techmindscreativesolutions.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-amber-300 underline-offset-4 transition-colors hover:text-amber-200 hover:underline"
                >
                  Techminds Creative Solutions
                </a>
              </p>

              <a
                href="#home"
                aria-label="Back to top"
                className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold tracking-wider text-white uppercase backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:bg-white/20 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                Back to top
                <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "EB Global — Cotton Indenting & Sourcing" },
      {
        name: "description",
        content:
          "EB Global is a distinguished cotton indenting and sourcing firm connecting the world's most reputable cotton merchants with Bangladesh's leading spinning mills.",
      },
      { name: "author", content: "EB Global" },
      { property: "og:title", content: "EB Global — Cotton Indenting & Sourcing" },
      {
        property: "og:description",
        content:
          "A Trusted Bridge Between Continents — premium cotton sourcing for Bangladesh's spinning mills.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@EBGlobal" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..800;1,9..144,400..800&family=Sora:wght@400;600;700;800&family=Manrope:wght@400;500;600;700;800&display=swap",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative min-h-screen bg-background text-foreground">
        {/* Ambient background glows */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-royal/10 blur-3xl" />
          <div className="absolute top-1/3 -right-40 h-[30rem] w-[30rem] rounded-full bg-sky-pop/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 h-[24rem] w-[24rem] rounded-full bg-royal-glow/10 blur-3xl" />
        </div>

        <SiteHeader />
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <main>
          <Outlet />
        </main>
        <SiteFooter />
        <Toaster position="top-right" richColors />
      </div>
    </QueryClientProvider>
  );
}

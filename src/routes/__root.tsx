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
function ColumnTitle({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5">
      <h3 className="font-display text-xs font-extrabold uppercase tracking-[0.2em] text-foreground">
        {children}
      </h3>
      <span
        aria-hidden
        className="mt-2.5 block h-[3px] w-8 rounded-full bg-gradient-to-r from-[var(--royal-deep)] via-[var(--primary)] to-[var(--royal-glow)]"
      />
    </div>
  );
}

function SiteHeader() {
  const { pathname, hash } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname, hash]);

  return (
    // <header className="fixed inset-x-0 top-0 z-50">
    //   <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6">
    //     <div className="glass flex items-center justify-between rounded-full px-4 py-3 sm:px-6">
    //       <BrandMark />

    //       <nav className="hidden items-center gap-1 lg:flex">
    //         {NAV_LINKS.map((link) => {
    //           const active = link.to === "/" ? pathname === "/" : pathname.startsWith(link.to);
    //           return (
    //             <a
    //               key={link.to}
    //               href={link.to}
    //               className={cn(
    //                 "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
    //                 active
    //                   ? "bg-primary/15 text-royal-deep shadow-[inset_0_0_0_1px_oklch(0.62_0.19_255/0.25)]"
    //                   : "text-muted-foreground hover:bg-royal/8 hover:text-foreground",
    //               )}
    //             >
    //               {link.label}
    //             </a>
    //           );
    //         })}
    //       </nav>

    //       <div className="hidden lg:block">
    //         <a
    //           href="#contact"
    //           className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-all hover:bg-royal-glow hover:shadow-[0_10px_30px_-10px_color-mix(in_oklab,var(--royal)_70%,transparent)]"
    //         >
    //           Get in Touch
    //           <ArrowUpRight className="h-4 w-4" />
    //         </a>
    //       </div>

    //       <button
    //         type="button"
    //         aria-label={open ? "Close menu" : "Open menu"}
    //         onClick={() => setOpen((v) => !v)}
    //         className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-royal/5 text-foreground lg:hidden"
    //       >
    //         {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
    //       </button>
    //     </div>

    //     {open ? (
    //       <div className="glass-strong mt-2 rounded-2xl p-3 lg:hidden">
    //         <nav className="flex flex-col">
    //           {NAV_LINKS.map((link) => {
    //             const active = link.to === "/" ? pathname === "/" : pathname.startsWith(link.to);
    //             return (
    //               <a
    //                 key={link.to}
    //                 href={link.to}
    //                 className={cn(
    //                   "rounded-xl px-4 py-3 text-sm font-semibold transition-colors",
    //                   active
    //                     ? "bg-primary/15 text-royal-deep"
    //                     : "text-muted-foreground hover:bg-royal/8 hover:text-foreground",
    //                 )}
    //               >
    //                 {link.label}
    //               </a>
    //             );
    //           })}
    //           <a
    //             href="#contact"
    //             className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-bold text-primary-foreground"
    //           >
    //             Get in Touch <ArrowUpRight className="h-4 w-4" />
    //           </a>
    //         </nav>
    //       </div>
    //     ) : null}
    //   </div>
    // </header>
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6">
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

function SiteFooter() {
  return (
    // <footer className="relative mt-24 overflow-hidden border-t border-border">
    //   <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-royal/15 blur-3xl" />
    //   <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
    //     <div className="sm:col-span-2 lg:col-span-1">
    //       <BrandMark />
    //       <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
    //         {COMPANY.tagline}. Connecting the world's most reputable cotton merchants with
    //         Bangladesh's leading spinning mills.
    //       </p>
    //       <p className="mt-4 text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
    //         Member · ICA · BCA · BIAA
    //       </p>
    //     </div>

    //     <div>
    //       <h3 className="mb-4 font-display text-sm font-bold tracking-[0.18em] text-foreground uppercase">
    //         Explore
    //       </h3>
    //       <ul className="space-y-2.5">
    //         {NAV_LINKS.map((link) => (
    //           <li key={link.to}>
    //             <a
    //               href={link.to}
    //               className="text-sm text-muted-foreground transition-colors hover:text-foreground"
    //             >
    //               {link.label}
    //             </a>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //     <div>
    //       <h3 className="mb-4 font-display text-sm font-bold tracking-[0.18em] text-foreground uppercase">
    //         Follow Us
    //       </h3>
    //       <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
    //         Stay connected with EB Global for the latest updates on cotton sourcing, market
    //         insights, and industry news.
    //       </p>
    //       <div className="flex items-center gap-3">
    //         <a
    //           href="https://www.facebook.com/"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           aria-label="Facebook"
    //           className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-royal/5 text-muted-foreground transition-all hover:border-royal/30 hover:bg-primary/15 hover:text-royal-deep"
    //         >
    //           <Facebook className="h-4 w-4" />
    //         </a>
    //         <a
    //           href="https://www.linkedin.com/"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           aria-label="LinkedIn"
    //           className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-royal/5 text-muted-foreground transition-all hover:border-royal/30 hover:bg-primary/15 hover:text-royal-deep"
    //         >
    //           <Linkedin className="h-4 w-4" />
    //         </a>
    //         <a
    //           href="https://www.instagram.com/"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           aria-label="Instagram"
    //           className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-royal/5 text-muted-foreground transition-all hover:border-royal/30 hover:bg-primary/15 hover:text-royal-deep"
    //         >
    //           <Instagram className="h-4 w-4" />
    //         </a>
    //         <a
    //           href="https://x.com/"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           aria-label="X (Twitter)"
    //           className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-royal/5 text-muted-foreground transition-all hover:border-royal/30 hover:bg-primary/15 hover:text-royal-deep"
    //         >
    //           <Twitter className="h-4 w-4" />
    //         </a>
    //       </div>
    //     </div>
    //     <div>
    //       <h3 className="mb-4 font-display text-sm font-bold tracking-[0.18em] text-foreground uppercase">
    //         Contact
    //       </h3>
    //       <ul className="space-y-3 text-sm text-muted-foreground">
    //         {COMPANY.phones.map((phone, i) => (
    //           <li key={phone}>
    //             <a
    //               href={`tel:${COMPANY.phoneLinks[i]}`}
    //               className="flex items-center gap-2.5 transition-colors hover:text-foreground"
    //             >
    //               <Phone className="h-4 w-4 text-sky-pop" /> {phone}
    //             </a>
    //           </li>
    //         ))}
    //         <li>
    //           <a
    //             href={`mailto:${COMPANY.email}`}
    //             className="flex items-center gap-2.5 transition-colors hover:text-foreground"
    //           >
    //             <Mail className="h-4 w-4 text-sky-pop" /> {COMPANY.email}
    //           </a>
    //         </li>
    //         <li className="flex items-start gap-2.5">
    //           <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky-pop" />
    //           <span>
    //             {COMPANY.addressLines.map((line) => (
    //               <span key={line} className="block">
    //                 {line}
    //               </span>
    //             ))}
    //           </span>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    //   <div className="relative border-t border-border py-6 text-center text-sm text-muted-foreground">
    //     <p>
    //       © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
    //     </p>
    //     <p className="mt-1.5">
    //       Designed &amp; Developed by{" "}
    //       <a
    //         href="https://techmindscreativesolutions.com/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         className="font-semibold text-royal-deep underline-offset-4 transition-colors hover:text-royal hover:underline"
    //       >
    //         Techminds Creative Solutions
    //       </a>
    //     </p>
    //   </div>
    // </footer>
    <footer className="relative isolate mt-24 overflow-hidden">
      {/* Backdrop: soft royal tint rising from the bottom + one glow */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(180deg, transparent 0%, color-mix(in oklab, var(--royal-glow) 12%, white) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-80 w-[42rem] max-w-full -translate-x-1/2 rounded-full bg-[var(--royal-glow)]/20 blur-3xl"
      />
      {/* Gradient hairline */}
      <div
        aria-hidden
        className="h-px w-full bg-gradient-to-r from-transparent via-[var(--primary)]/40 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-6 pt-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-4">
            <BrandMark />
            <p className="mt-5 max-w-sm text-md leading-relaxed  text-foreground">
              {COMPANY.tagline}. Connecting the world's most reputable cotton merchants with
              Bangladesh's leading spinning mills.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="mr-1 text-md font-semibold text-foreground">Member of</span>
              {MEMBERSHIPS.map((m) => (
                <span
                  key={m}
                  className="glass rounded-full px-3 py-1 text-xs font-extrabold tracking-wider text-foreground"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2">
            <ColumnTitle>Explore</ColumnTitle>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <a
                    href={link.to}
                    className="group inline-flex items-center gap-0 text-md text-foreground transition-all duration-300 hover:gap-2 hover:text-foreground"
                  >
                    <span
                      aria-hidden
                      className="h-px w-0 bg-gradient-to-r from-[var(--primary)] to-[var(--royal-glow)] transition-all duration-300 group-hover:w-3"
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow */}
          <div className="lg:col-span-3">
            <ColumnTitle>Follow Us</ColumnTitle>
            <p className="mb-5 max-w-xs text-md leading-relaxed text-foreground">
              Stay connected with EB Global for the latest updates on cotton sourcing, market
              insights, and industry news.
            </p>
            <div className="flex items-center gap-2.5">
              {SOCIALS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="glass group flex size-10 items-center justify-center rounded-full text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:bg-gradient-to-br hover:from-[var(--royal-deep)] hover:to-[var(--primary)] hover:text-white hover:shadow-lg hover:shadow-primary/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <ColumnTitle>Contact</ColumnTitle>
            <ul className="space-y-3.5 text-md text-foreground">
              {COMPANY.phones.map((phone, i) => (
                <li key={phone}>
                  <a
                    href={`tel:${COMPANY.phoneLinks[i]}`}
                    className="group flex items-center gap-3 transition-colors text-foreground"
                  >
                    <span className="glass flex size-8 shrink-0 items-center justify-center rounded-lg">
                      <Phone className="h-3.5 w-3.5 text-primary" aria-hidden />
                    </span>
                    {phone}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="group flex items-center gap-3 break-all transition-colors text-foreground"
                >
                  <span className="glass flex size-8 shrink-0 items-center justify-center rounded-lg">
                    <Mail className="h-3.5 w-3.5 text-primary" aria-hidden />
                  </span>
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="glass flex size-8 shrink-0 items-center justify-center rounded-lg">
                  <MapPin className="h-3.5 w-3.5 text-primary" aria-hidden />
                </span>
                <span className="pt-1 leading-relaxed">
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
        <div className="glass mb-8 mt-14 flex flex-col items-center justify-between gap-4 rounded-2xl px-6 py-4 text-md text-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <p>
              Designed &amp; developed by{" "}
              <a
                href="https://techmindscreativesolutions.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gradient-royal font-semibold underline-offset-4 hover:underline"
              >
                Techminds Creative Solutions
              </a>
            </p>
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
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Manrope:wght@400;500;600;700;800&display=swap",
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
      </div>
    </QueryClientProvider>
  );
}

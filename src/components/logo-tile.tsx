// import { cn } from "@/lib/utils";

// function initialsOf(name: string) {
//   const words = name.split(/\s+/).filter((w) => /^[A-Za-z]/.test(w));
//   const letters = words
//     .slice(0, 2)
//     .map((w) => w[0]!.toUpperCase())
//     .join("");
//   return letters || "EB";
// }

// /**
//  * Demo partner tile — the monogram placeholder stands in until the real
//  * supplier / buyer logos are supplied.
//  */
// export function LogoTile({
//   name,
//   className,
// }: {
//   name: string;
//   className?: string;
// }) {
//   return (
//     <div
//       className={cn(
//         "glass glow-card flex items-center gap-3 rounded-2xl px-5 py-4",
//         className,
//       )}
//     >
//       <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/15 font-display text-sm font-bold text-gradient-royal">
//         {initialsOf(name)}
//       </span>
//       <span className="min-w-0">
//         <span className="block truncate text-sm font-semibold text-foreground">
//           {name}
//         </span>
//         <span className="block text-[10px] font-medium tracking-[0.16em] text-muted-foreground uppercase">
//           Demo logo
//         </span>
//       </span>
//     </div>
//   );
// }
import { cn } from "@/lib/utils";

export function LogoTile({
  name,
  logo,
  className,
}: {
  name: string;
  logo?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group flex h-28 items-center justify-center overflow-hidden rounded-2xl border border-border bg-card p-6 transition-colors hover:border-royal/40",
        className,
      )}
    >
      {logo ? (
        <img
          src={logo}
          alt={`${name} logo`}
          loading="lazy"
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      ) : (
        <span className="font-display text-lg font-semibold text-foreground">{name}</span>
      )}
    </div>
  );
}

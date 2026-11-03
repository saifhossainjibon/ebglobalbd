// import { cn } from "@/lib/utils";
// import { LogoTile } from "@/components/logo-tile";

// export function Marquee({
//   items,
//   reverse = false,
//   className,
// }: {
//   items: string[];
//   reverse?: boolean;
//   className?: string;
// }) {
//   const doubled = [...items, ...items];
//   return (
//     <div className={cn("relative overflow-hidden py-1", className)}>
//       <div
//         className={cn(
//           "flex w-max gap-4 animate-marquee group-hover:[animation-play-state:paused]",
//           reverse && "[animation-direction:reverse]",
//         )}
//       >
//         {doubled.map((name, i) => (
//           <LogoTile key={`${name}-${i}`} name={name} className="w-64 shrink-0" />
//         ))}
//       </div>
//       <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent" />
//       <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent" />
//     </div>
//   );
// }
import type { ReactNode } from "react";

export function Marquee<T>({
  items,
  renderItem = (item: T) => String(item),
}: {
  items: T[];
  renderItem?: (item: T) => ReactNode;
}) {
  return (
    <div className="relative overflow-hidden">
      <div className="flex w-max animate-marquee gap-12 group-hover:[animation-play-state:paused]">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center">
            {renderItem(item)}
          </div>
        ))}
      </div>
    </div>
  );
}
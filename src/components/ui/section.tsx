import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function PillButton({
  href,
  children,
  variant = "default",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "default" | "primary" | "secondary" | "outline";
  className?: string;
}) {
  const styles = {
    default: "bg-[#1F2A2E] text-white",
    primary: "bg-gradient-to-r from-[#a13ddf] to-[#2BB2FC] text-white",
    secondary: "bg-white text-[#1F2A2E] border border-[#1F2A2E]/15",
    outline: "bg-transparent text-white border border-white/25",
  }[variant];
  const circle = variant === "primary" ? "bg-[#1F2A2E] text-[#a13ddf]" : variant === "outline" ? "bg-white text-[#1F2A2E]" : "bg-gradient-to-r from-[#a13ddf] to-[#2BB2FC] text-white";
  return (
    <Link href={href} className={cn("inline-flex items-center gap-4 rounded-full pl-7 pr-2 py-2 text-[15px] font-bold hover:brightness-95 transition min-h-[64px]", styles, className)}>
      <span>{children}</span>
      <span className={cn("w-[52px] h-[52px] rounded-full grid place-items-center shrink-0", circle)}>
        <ArrowUpRight className="h-5 w-5" />
      </span>
    </Link>
  );
}

export function SectionHead({
  no,
  label,
  title,
  desc,
  dark = false,
}: {
  no: string;
  label: string;
  title: string;
  desc?: string;
  dark?: boolean;
}) {
  return (
    <div className="grid md:grid-cols-12 gap-6 md:gap-8">
      <div className="md:col-span-4">
        <div className="flex items-center gap-4">
          <span className="w-9 h-9 shrink-0 rounded-full bg-gradient-to-r from-[#a13ddf] to-[#2BB2FC] text-white grid place-items-center text-sm font-bold">{no}</span>
          <hr className={cn("w-12 h-px border-0", dark ? "bg-white/20" : "bg-[#1F2A2E]/15")} />
          <span className={cn("rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wide", dark ? "bg-white text-[#1F2A2E]" : "bg-[#1F2A2E] text-white")}>{label}</span>
        </div>
      </div>
      <div className="md:col-span-8">
        <h2 className={cn("text-4xl md:text-5xl font-bold tracking-tight text-balance", dark ? "text-white" : "text-[#1F2A2E]")}>{title}</h2>
        {desc && <p className={cn("mt-4 text-lg leading-relaxed max-w-2xl", dark ? "text-white/70" : "text-[#626a6d]")}>{desc}</p>}
      </div>
    </div>
  );
}

// Back-compat for inner pages still importing these
export function Badge({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <span className={cn("inline-flex items-center gap-2 rounded-full bg-[#1F2A2E] text-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em]", className)}>
      <span className="h-1.5 w-1.5 rounded-full bg-[#a13ddf]" />
      {children}
    </span>
  );
}

export function SectionHeading({ eyebrow, title, desc, align = "center" }: { eyebrow: string; title: string; desc?: string; align?: "center" | "left" }) {
  return (
    <div className={cn("max-w-3xl", align === "center" ? "mx-auto text-center" : "text-left")}>
      <Badge>{eyebrow}</Badge>
      <h2 className="mt-5 text-3xl md:text-5xl font-bold tracking-tight text-[#1F2A2E] text-balance">{title}</h2>
      {desc && <p className="mt-4 text-lg text-[#626a6d] leading-relaxed">{desc}</p>}
    </div>
  );
}

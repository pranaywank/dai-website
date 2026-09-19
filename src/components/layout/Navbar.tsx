"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/layout/Logo";
import { serviceGroups, capabilities, industries, techSolutions } from "@/lib/site";

const topLinks = [
  { label: "Services", columns: serviceGroups },
  { label: "Capabilities", columns: [{ label: "XR Capabilities", children: capabilities.map((c) => ({ label: c.title, href: `/capabilities/${c.slug}`, desc: c.tagline })) }] },
  { label: "Industries", columns: [{ label: "Industries", children: industries.map((c) => ({ label: c.title, href: `/industries/${c.slug}` })) }] },
  { label: "Solutions", columns: [{ label: "XR Solutions", children: techSolutions.map((c) => ({ label: c.title, href: `/technology-solutions/${c.slug}` })) }] },
  {
    label: "Company",
    columns: [{ label: "Company", children: [
      { label: "About Us", href: "/about-us" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Blogs", href: "/blogs" },
      { label: "XR Centre of Excellence", href: "/xr-centre-of-excellence-xr-coe" },
      { label: "Pankh UAV Simulator", href: "/pankh-uav-simulator" },
    ] }],
  },
];

export function Navbar() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="border-t-4 border-[#a13ddf] bg-white/90 backdrop-blur-xl border-b border-[#1F2A2E]/10">
        <div className="wrap">
          <nav onMouseLeave={() => setOpen(null)} className="relative">
            <div className="flex items-center justify-between h-[72px]">
              <Logo />
              <div className="hidden lg:flex items-center gap-1">
                {topLinks.map((l) => (
                  <button key={l.label} onMouseEnter={() => setOpen(l.label)} onClick={() => setOpen(open === l.label ? null : l.label)}
                    className={cn("flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-bold text-[#1F2A2E] hover:bg-[#F4F8FA] transition", open === l.label && "bg-[#F4F8FA]")}>
                    {l.label}
                    <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", open === l.label && "rotate-180")} />
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <Link href="/contact-us" className="hidden sm:inline-flex items-center gap-3 rounded-full bg-[#1F2A2E] text-white pl-6 pr-1.5 py-1.5 text-sm font-bold hover:bg-black min-h-[52px]">
                  Contact Us
                  <span className="w-10 h-10 rounded-full bg-gradient-to-r from-[#a13ddf] to-[#2BB2FC] text-white grid place-items-center"><ArrowUpRight className="h-4 w-4" /></span>
                </Link>
                <button onClick={() => setMobile(!mobile)} className="lg:hidden w-11 h-11 rounded-full bg-[#F4F8FA] grid place-items-center text-[#1F2A2E]">
                  {mobile ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
              </div>
            </div>
            <AnimatePresence>
              {open && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.18 }}
                  className="hidden lg:block absolute top-full left-1/2 -translate-x-1/2 w-[720px] rounded-[24px] border border-[#1F2A2E]/10 bg-white shadow-xl p-6">
                  {topLinks.filter((l) => l.label === open).map((l) => (
                    <div key={l.label} className={cn("grid gap-8", l.columns.length > 1 ? "grid-cols-3" : "grid-cols-2")}>
                      {l.columns.map((col) => (
                        <div key={col.label}>
                          <p className="text-[11px] uppercase tracking-[0.18em] text-[#626a6d] font-bold mb-3">{col.label}</p>
                          <div className="space-y-1">
                            {col.children.map((c) => (
                              <Link key={c.href + c.label} href={c.href} onClick={() => setOpen(null)} className="group flex items-start justify-between gap-3 rounded-2xl px-3 py-2.5 hover:bg-[#F4F8FA] transition">
                                <span>
                                  <span className="block text-sm font-bold text-[#1F2A2E]">{c.label}</span>
                                  {"desc" in c && c.desc && <span className="block text-xs text-[#626a6d] mt-0.5">{c.desc}</span>}
                                </span>
                                <ArrowUpRight className="h-4 w-4 text-[#1F2A2E]/30 group-hover:text-[#1F2A2E] mt-0.5" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
            {mobile && (
              <div className="lg:hidden border-t border-[#1F2A2E]/10 max-h-[70vh] overflow-auto py-4 space-y-4">
                {topLinks.map((l) => (
                  <div key={l.label}>
                    <p className="text-xs uppercase tracking-widest text-[#626a6d] font-bold">{l.label}</p>
                    <div className="mt-2 grid gap-1">
                      {l.columns.flatMap((c) => c.children).map((ch) => (
                        <Link key={ch.href + ch.label} href={ch.href} onClick={() => setMobile(false)} className="font-bold text-[#1F2A2E] py-2 border-b border-[#1F2A2E]/5 text-[15px]">{ch.label}</Link>
                      ))}
                    </div>
                  </div>
                ))}
                <Link href="/contact-us" onClick={() => setMobile(false)} className="flex items-center justify-center rounded-full bg-[#a13ddf] py-4 font-bold text-[#1F2A2E]">Contact Us</Link>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}

"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { caseStudies } from "@/lib/site";
import { csImage } from "@/lib/images";

export function CaseGrid() {
  const industries = useMemo(() => [...new Set(caseStudies.map((c) => c.industry))].sort(), []);
  const techs = useMemo(() => [...new Set(caseStudies.map((c) => c.tags).flat())].sort(), []);
  const [ind, setInd] = useState<string | null>(null);
  const [tech, setTech] = useState<string | null>(null);
  const list = caseStudies.filter((c) => (!ind || c.industry === ind) && (!tech || c.tags.includes(tech)));

  const pill = (active: boolean) =>
    cn(
      "rounded-full px-4 py-2 text-sm font-bold border transition whitespace-nowrap",
      active ? "bg-[#1F2A2E] text-white border-[#1F2A2E]" : "bg-white text-[#1F2A2E] border-[#1F2A2E]/15 hover:border-[#1F2A2E]/40"
    );

  return (
    <div>
      <div className="rounded-[24px] border border-[#1F2A2E]/10 bg-[#F4F8FA] p-6 md:p-8 space-y-5">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#626a6d]">Filters — Industries</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button onClick={() => setInd(null)} className={pill(ind === null)}>All</button>
            {industries.map((i) => (
              <button key={i} onClick={() => setInd(ind === i ? null : i)} className={pill(ind === i)}>{i}</button>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#626a6d]">Filters — Technologies</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button onClick={() => setTech(null)} className={pill(tech === null)}>All</button>
            {techs.map((t) => (
              <button key={t} onClick={() => setTech(tech === t ? null : t)} className={pill(tech === t)}>{t}</button>
            ))}
          </div>
        </div>
        {(ind || tech) && (
          <button onClick={() => { setInd(null); setTech(null); }} className="text-sm font-extrabold text-[#a13ddf] hover:underline">
            Clear filters ({list.length} of {caseStudies.length} shown)
          </button>
        )}
      </div>

      <p className="mt-8 text-sm font-bold text-[#626a6d]">Showing {list.length} of {caseStudies.length} case studies</p>
      <div className="mt-4 grid md:grid-cols-3 gap-5">
        {list.map((c) => (
          <Link key={c.slug} href={`/case-study/${c.slug}`} className="group rounded-[20px] border border-[#1F2A2E]/10 bg-white overflow-hidden hover:border-[#a13ddf] hover:shadow-xl transition flex flex-col">
            <div className="relative h-48 overflow-hidden shrink-0">
              <Image src={csImage(c.slug)} alt={c.title} fill className="object-cover group-hover:scale-105 transition duration-500" sizes="(max-width:768px) 100vw, 33vw" />
              <span className="absolute top-3 left-3 rounded-full bg-[#1F2A2E]/85 backdrop-blur text-white text-[11px] font-extrabold uppercase tracking-widest px-3 py-1.5">{c.industry}</span>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-extrabold text-lg leading-snug group-hover:underline">{c.title}</h3>
              <p className="mt-2 text-sm text-[#626a6d] leading-relaxed line-clamp-2">{c.desc}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {c.tags.map((t) => (
                  <span key={t} className="rounded-full bg-[#F4F8FA] border border-[#1F2A2E]/10 px-2.5 py-1 text-[11px] font-bold text-[#1F2A2E]">{t}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
      {list.length === 0 && (
        <div className="mt-8 rounded-[24px] border border-dashed border-[#1F2A2E]/20 p-12 text-center text-[#626a6d] font-bold">
          No studies match this combination — clear a filter to browse again.
        </div>
      )}
    </div>
  );
}

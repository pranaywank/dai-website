"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { caseStudies, industries, type ContentPage } from "@/lib/site";
import { INDUSTRY_SOLUTIONS, INDUSTRY_WHY_US } from "@/lib/industrySolutions";
import { XR_IMAGES as X, csImage } from "@/lib/images";
import { PageHero } from "@/components/content/PageTemplate";

const BLOCK_IMGS = [X.vrHero, X.engineerTwin, X.arLab, X.training];

function SolutionsTabs({ page, solutions }: { page: ContentPage; solutions: { title: string; desc: string; bullets: string[] }[] }) {
  const [active, setActive] = useState(0);
  const s = solutions[active];
  return (
    <div className="mt-10 grid lg:grid-cols-12 gap-6">
      {/* selector list */}
      <div className="lg:col-span-5 flex flex-col gap-3">
        {solutions.map((sol, i) => (
          <button
            key={sol.title}
            onClick={() => setActive(i)}
            className={cn(
              "text-left rounded-[20px] border p-5 md:p-6 transition-all flex items-center gap-4",
              i === active
                ? "border-transparent bg-[#1F2A2E] text-white shadow-xl"
                : "border-[#1F2A2E]/10 bg-[#F4F8FA] hover:border-[#1F2A2E]/30"
            )}
          >
            <span className={cn(
              "w-10 h-10 rounded-xl grid place-items-center text-sm font-extrabold shrink-0",
              i === active ? "bg-gradient-to-r from-[#a13ddf] to-[#2BB2FC] text-white" : "bg-white border border-[#1F2A2E]/10 text-[#1F2A2E]"
            )}>
              0{i + 1}
            </span>
            <span>
              <span className="block font-extrabold text-base md:text-lg leading-snug">{sol.title}</span>
              <span className={cn("block text-[13px] mt-0.5 line-clamp-1", i === active ? "text-white/60" : "text-[#626a6d]")}>
                {sol.bullets.length} capabilities included
              </span>
            </span>
          </button>
        ))}
        <Link href="/contact-us" className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#a13ddf] to-[#2BB2FC] text-white pl-6 pr-1.5 py-1.5 text-sm font-bold min-h-[52px] mt-1 w-fit">
          Scope my pilot
          <span className="w-10 h-10 rounded-full bg-white text-[#1F2A2E] grid place-items-center"><ArrowUpRight className="h-4 w-4" /></span>
        </Link>
      </div>
      {/* detail card */}
      <div className="lg:col-span-7">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="rounded-[24px] overflow-hidden border border-[#1F2A2E]/10 bg-white h-full flex flex-col"
          >
            <div className="relative h-56 md:h-72 shrink-0">
              <Image
                src={active === 0 ? page.image : BLOCK_IMGS[active % BLOCK_IMGS.length]}
                alt={`${s.title} for ${page.title}`}
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 58vw"
              />
              <span className="absolute top-4 left-4 rounded-full bg-[#1F2A2E]/85 backdrop-blur text-white text-xs font-extrabold px-3.5 py-1.5">
                {s.title}
              </span>
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-2xl md:text-[28px] font-extrabold tracking-tight">{s.title}</h3>
              <p className="mt-2.5 text-[#626a6d] leading-relaxed">{s.desc}</p>
              <ul className="mt-5 grid sm:grid-cols-2 gap-2.5">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-2.5 text-sm font-bold rounded-xl bg-[#F4F8FA] border border-[#1F2A2E]/5 px-3.5 py-3">
                    <span className="mt-0.5 h-5 w-5 rounded-full bg-gradient-to-r from-[#a13ddf] to-[#2BB2FC] grid place-items-center shrink-0"><Check className="h-3 w-3 text-white" /></span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export function IndustryDetail({ page }: { page: ContentPage }) {
  const solutions = INDUSTRY_SOLUTIONS[page.slug] ?? page.useCases.map((u) => ({ title: u.title, desc: u.desc, bullets: [u.desc] }));
  const work = caseStudies.filter((c) => c.industry.toLowerCase().split(" ")[0] === page.title.toLowerCase().split(" ")[0]).slice(0, 3);
  const fallbackWork = work.length > 0 ? work : caseStudies.slice(0, 3);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PageHero
        eyebrow={page.title}
        title={page.title}
        tagline={page.tagline}
        description={page.overview[0] ?? page.description}
        image={page.image}
        imageAlt={page.imageAlt}
        crumbs={[{ label: "Industries", href: "/case-studies" }]}
      />

      {page.stats && (
        <div className="border-b border-[#1F2A2E]/10 bg-white">
          <div className="mx-auto max-w-[1320px] px-4 md:px-6 py-8 grid grid-cols-3 gap-3">
            {page.stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl md:text-5xl font-extrabold grad-text">{s.value}</p>
                <p className="text-xs md:text-sm text-[#626a6d] font-bold mt-2 max-w-[260px] mx-auto">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Solutions we provide */}
      <section className="py-14 md:py-20 bg-white">
        <div className="mx-auto max-w-[1320px] px-4 md:px-6">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#626a6d]">Capabilities in {page.title}</p>
          <h2 className="mt-2 text-3xl md:text-5xl font-extrabold tracking-tight">Solutions We Provide</h2>
          <p className="mt-4 text-lg text-[#626a6d] max-w-2xl">What our XR studio delivers for {page.title.toLowerCase()} teams — across training, operations and planning.</p>

          <SolutionsTabs page={page} solutions={solutions} />
        </div>
      </section>

      {/* Why Us */}
      <section className="py-14 md:py-20 bg-[#F4F8FA]">
        <div className="mx-auto max-w-[1320px] px-4 md:px-6">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#626a6d]">Why Us</p>
          <h2 className="mt-2 text-3xl md:text-5xl font-extrabold tracking-tight">Why teams choose us</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {INDUSTRY_WHY_US.map((w, i) => (
              <div key={w.title} className={`rounded-[20px] p-6 flex flex-col justify-between min-h-[240px] ${i === 0 ? "bg-gradient-to-br from-[#a13ddf] to-[#2BB2FC] text-white" : "bg-white border border-[#1F2A2E]/10"}`}>
                <span className={`w-10 h-10 rounded-xl grid place-items-center font-extrabold ${i === 0 ? "bg-white/20 text-white" : "bg-[#1F2A2E] text-white"}`}>{i + 1}</span>
                <div>
                  <p className="font-extrabold">{w.title}</p>
                  <p className={`mt-1.5 text-sm ${i === 0 ? "text-white/85" : "text-[#626a6d]"}`}>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-14 md:py-20 bg-white">
        <div className="mx-auto max-w-[1320px] px-4 md:px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#626a6d]">Proof</p>
              <h2 className="mt-2 text-3xl md:text-5xl font-extrabold tracking-tight">Case Studies</h2>
            </div>
            <Link href="/case-studies" className="hidden sm:inline-flex items-center gap-3 rounded-full bg-[#1F2A2E] text-white pl-6 pr-1.5 py-1.5 text-sm font-bold min-h-[52px] shrink-0">View all<span className="w-10 h-10 rounded-full bg-gradient-to-r from-[#a13ddf] to-[#2BB2FC] grid place-items-center"><ArrowUpRight className="h-4 w-4" /></span></Link>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {fallbackWork.map((c) => (
              <Link key={c.slug} href={`/case-study/${c.slug}`} className="group rounded-[20px] border border-[#1F2A2E]/10 bg-[#F4F8FA] overflow-hidden hover:border-[#a13ddf] hover:shadow-lg transition">
                <div className="relative h-44 overflow-hidden">
                  <Image src={csImage(c.slug)} alt={`XR case study in ${c.industry}`} fill className="object-cover group-hover:scale-105 transition duration-500" sizes="(max-width:768px) 100vw, 33vw" />
                  <span className="absolute top-3 left-3 rounded-full bg-[#1F2A2E]/85 backdrop-blur text-white text-[11px] font-extrabold uppercase tracking-widest px-3 py-1.5">{c.industry}</span>
                </div>
                <div className="p-5">
                  <p className="font-extrabold text-[15px] leading-snug capitalize group-hover:underline">{c.title.replace(/-/g, " ")}</p>
                  <p className="mt-2 text-xs font-bold text-[#626a6d]">{c.tags.join(" • ")}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 md:py-20 bg-[#F4F8FA]">
        <div className="mx-auto max-w-[1320px] px-4 md:px-6 grid lg:grid-cols-[1fr_1.5fr] gap-8">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#626a6d]">FAQ</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">{page.title} questions</h2>
            <p className="mt-3 text-[#626a6d]">Everything buyers ask before piloting XR in {page.title.toLowerCase()}.</p>
            <Link href="/contact-us" className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#1F2A2E] text-white pl-6 pr-1.5 py-1.5 text-sm font-bold min-h-[52px]">Ask us directly<span className="w-10 h-10 rounded-full bg-gradient-to-r from-[#a13ddf] to-[#2BB2FC] grid place-items-center"><ArrowUpRight className="h-4 w-4" /></span></Link>
          </div>
          <div className="space-y-3">
            {page.faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-[#1F2A2E]/10 bg-white open:border-[#1F2A2E]">
                <summary className="cursor-pointer list-none px-6 py-4 font-extrabold flex justify-between items-center gap-4 [&::-webkit-details-marker]:hidden">{f.q}<span className="w-8 h-8 rounded-full bg-gradient-to-r from-[#a13ddf] to-[#2BB2FC] text-white grid place-items-center shrink-0 group-open:rotate-45 transition">+</span></summary>
                <p className="px-6 pb-5 text-[#626a6d]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Explore industries */}
      <section className="py-14 md:py-20 bg-white">
        <div className="mx-auto max-w-[1320px] px-4 md:px-6">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#626a6d]">Keep exploring</p>
          <h2 className="mt-2 text-3xl md:text-5xl font-extrabold tracking-tight">Explore Industries</h2>
          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.filter((c) => c.slug !== page.slug).map((c) => (
              <Link key={c.slug} href={`/industries/${c.slug}`} className="group rounded-[20px] border border-[#1F2A2E]/10 p-5 hover:border-[#a13ddf] hover:shadow-lg transition bg-white">
                <div className="text-[#a13ddf]">{c.icon && <c.icon className="h-5 w-5" />}</div>
                <h3 className="mt-3 font-extrabold text-[15px] leading-snug">{c.title}</h3>
                <p className="mt-1 text-[13px] text-[#626a6d] line-clamp-2">{c.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-14 md:pb-20 px-4 md:px-6 bg-white">
        <div className="mx-auto max-w-[1320px] rounded-[24px] overflow-hidden relative bg-[#1F2A2E]">
          <Image src={page.image} alt="" fill className="object-cover opacity-25" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#a13ddf]/60 to-[#2BB2FC]/40" />
          <div className="relative p-8 md:p-12 flex flex-col md:flex-row md:items-center gap-6 justify-between">
            <div>
              <h2 className="text-2xl md:text-4xl font-extrabold text-white max-w-xl">Empowering {page.title} teams to scale</h2>
              <p className="mt-2 text-white/80 max-w-lg">Unlock growth with XR pilots tailored to your assets, SOPs and sites.</p>
            </div>
            <Link href="/contact-us" className="inline-flex items-center gap-3 rounded-full bg-white text-[#1F2A2E] pl-7 pr-2 py-2 text-[15px] font-bold min-h-[64px] shrink-0 hover:brightness-95">Get In Touch<span className="w-[52px] h-[52px] rounded-full bg-gradient-to-r from-[#a13ddf] to-[#2BB2FC] text-white grid place-items-center"><ArrowUpRight className="h-5 w-5" /></span></Link>
          </div>
        </div>
      </section>
    </>
  );
}

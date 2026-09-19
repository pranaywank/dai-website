import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/site";
import { CASE_DETAILS } from "@/lib/caseDetails";
import { PageHero } from "@/components/content/PageTemplate";
import { csImage } from "@/lib/images";

export function generateStaticParams() {
  return caseStudies.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((s) => s.slug === slug);
  if (!cs) return {};
  return {
    title: `${cs.title} — Case Study | Digital Agents XR Studio`,
    description: cs.desc,
    keywords: [...cs.tags, cs.industry, "XR case study", "case study"],
  };
}

const FALLBACK = {
  challenge: ["Fragmented tools and inconsistent delivery", "Long ramp-up with unmeasured outcomes", "No audit-ready records"],
  objective: ["A working pilot in weeks", "Measurable baseline-vs-new comparison", "A templated path to scale"],
  solution: [{ t: "Discovery", d: "Mapped pains, users and success metrics." }, { t: "MVP build", d: "Working slice with integrations and analytics." }, { t: "Pilot & scale", d: "Cohort rollout with enablement and handover." }],
  impact: [{ v: "+40%", d: "Efficiency gain" }, { v: "2x", d: "Engagement" }, { v: "100%", d: "Delivery on scope" }],
};

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const idx = caseStudies.findIndex((s) => s.slug === slug);
  if (idx === -1) return notFound();
  const cs = caseStudies[idx];
  const d = CASE_DETAILS[slug] ?? FALLBACK;
  const img = csImage(slug);
  const others = [caseStudies[(idx + 1) % caseStudies.length], caseStudies[(idx + 2) % caseStudies.length], caseStudies[(idx + 3) % caseStudies.length]];

  return (
    <main className="bg-white">
      <PageHero
        eyebrow={`Case Study — ${cs.industry}`}
        title={cs.title}
        tagline={cs.tags.join(" • ")}
        description={cs.desc}
        image={img}
        imageAlt={cs.title}
        crumbs={[{ label: "Case Studies", href: "/case-studies" }]}
      />

      {/* Challenge */}
      <section className="py-14 bg-white">
        <div className="wrap grid lg:grid-cols-2 gap-8">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#626a6d]">01 — Context</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">The Challenge</h2>
            <ul className="mt-6 space-y-3.5">
              {d.challenge.map((c) => (
                <li key={c} className="flex gap-3 text-[16px] font-bold rounded-2xl border border-[#1F2A2E]/10 bg-[#F4F8FA] p-5">
                  <span className="mt-0.5 h-6 w-6 rounded-full bg-[#1F2A2E] text-white grid place-items-center shrink-0 text-xs font-extrabold">!</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#626a6d]">02 — Brief</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">The Objective</h2>
            <ul className="mt-6 space-y-3.5">
              {d.objective.map((o) => (
                <li key={o} className="flex gap-3 text-[16px] font-bold rounded-2xl bg-[#1F2A2E] text-white p-5">
                  <span className="mt-0.5 h-6 w-6 rounded-full bg-gradient-to-r from-[#a13ddf] to-[#2BB2FC] grid place-items-center shrink-0"><Check className="h-3.5 w-3.5 text-white" strokeWidth={3.5} /></span>
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Key value */}
      <section className="py-14 bg-[#F4F8FA]">
        <div className="wrap">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Key Value to Business</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {d.impact.map((m, i) => (
              <div key={m.d} className={`rounded-[24px] p-8 ${i === 0 ? "bg-gradient-to-br from-[#a13ddf] to-[#2BB2FC] text-white" : "bg-white border border-[#1F2A2E]/10"}`}>
                <p className={`text-5xl font-extrabold ${i === 0 ? "text-white" : "grad-text"}`}>{m.v}</p>
                <p className={`mt-3 font-bold ${i === 0 ? "text-white/85" : "text-[#1F2A2E]/80"}`}>{m.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-14 md:py-20 bg-white">
        <div className="wrap">
          <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#626a6d]">03 — Delivery</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">The Solution</h2>
          <div className="mt-10 grid lg:grid-cols-[1.4fr_1fr] gap-6 items-start">
            <div className="space-y-4">
              {d.solution.map((s, i) => (
                <div key={s.t} className="rounded-[20px] border border-[#1F2A2E]/10 bg-white p-6 flex gap-4 hover:border-[#a13ddf]/40 hover:shadow-lg transition">
                  <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#a13ddf] to-[#2BB2FC] text-white grid place-items-center font-extrabold shrink-0">0{i + 1}</span>
                  <div>
                    <p className="font-extrabold text-lg">{s.t}</p>
                    <p className="mt-1 text-[#626a6d]">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative overflow-hidden rounded-[24px] aspect-[4/5] lg:sticky lg:top-28">
              <Image src={img} alt={cs.title} fill className="object-cover" sizes="(max-width:1024px) 100vw, 40vw" />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-[#1F2A2E]/85 backdrop-blur p-4 text-white">
                <p className="text-[11px] font-extrabold uppercase tracking-widest text-[#2BB2FC]">{cs.industry}</p>
                <p className="text-sm font-bold mt-0.5">{cs.tags.join(" • ")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-14 bg-[#1F2A2E]">
        <div className="wrap">
          <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-white/50">04 — Results</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight text-white">The Impact</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {d.impact.map((m) => (
              <div key={m.v + m.d} className="rounded-[24px] border border-white/10 bg-white/5 p-7">
                <p className="text-4xl font-extrabold text-[#2BB2FC]">{m.v}</p>
                <p className="mt-2 text-white/75 font-bold">{m.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More work */}
      <section className="py-14 md:py-20 bg-white">
        <div className="wrap">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Examples Of Our Expertise</h2>
            <Link href="/case-studies" className="hidden sm:inline-flex items-center gap-3 rounded-full bg-[#1F2A2E] text-white pl-6 pr-1.5 py-1.5 text-sm font-bold min-h-[52px] shrink-0">View all<span className="w-10 h-10 rounded-full bg-gradient-to-r from-[#a13ddf] to-[#2BB2FC] grid place-items-center"><ArrowUpRight className="h-4 w-4" /></span></Link>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {others.map((o) => (
              <Link key={o.slug} href={`/case-study/${o.slug}`} className="group rounded-[20px] border border-[#1F2A2E]/10 bg-[#F4F8FA] overflow-hidden hover:border-[#a13ddf] hover:shadow-lg transition">
                <div className="relative h-44 overflow-hidden">
                  <Image src={csImage(o.slug)} alt={o.title} fill className="object-cover group-hover:scale-105 transition duration-500" sizes="(max-width:768px) 100vw, 33vw" />
                  <span className="absolute top-3 left-3 rounded-full bg-[#1F2A2E]/85 backdrop-blur text-white text-[11px] font-extrabold uppercase tracking-widest px-3 py-1.5">{o.industry}</span>
                </div>
                <div className="p-5">
                  <p className="font-extrabold text-[15px] leading-snug group-hover:underline">{o.title}</p>
                  <p className="mt-2 text-sm text-[#626a6d] line-clamp-2">{o.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-14 md:pb-20 px-4 md:px-6 bg-white">
        <div className="wrap rounded-[24px] overflow-hidden relative bg-[#1F2A2E]">
          <Image src={img} alt="" fill className="object-cover opacity-25" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#a13ddf]/60 to-[#2BB2FC]/40" />
          <div className="relative p-8 md:p-12 flex flex-col md:flex-row md:items-center gap-6 justify-between">
            <div>
              <h2 className="text-2xl md:text-4xl font-extrabold text-white max-w-xl">Empowering Enterprises to Scale & Succeed</h2>
              <p className="mt-2 text-white/80 max-w-lg">Your project could be our next story — start with a scoped pilot.</p>
            </div>
            <Link href="/contact-us" className="inline-flex items-center gap-3 rounded-full bg-white text-[#1F2A2E] pl-7 pr-2 py-2 text-[15px] font-bold min-h-[64px] shrink-0 hover:brightness-95">Get In Touch<span className="w-[52px] h-[52px] rounded-full bg-gradient-to-r from-[#a13ddf] to-[#2BB2FC] text-white grid place-items-center"><ArrowUpRight className="h-5 w-5" /></span></Link>
          </div>
        </div>
      </section>
    </main>
  );
}

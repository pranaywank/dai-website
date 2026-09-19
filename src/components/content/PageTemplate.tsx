import Image from "next/image";
import Link from "next/link";
import { Check, ArrowUpRight, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/section";
import { caseStudies, type ContentPage } from "@/lib/site";
import { csImage } from "@/lib/images";

export function PageHero({ eyebrow, title, tagline, description, image, imageAlt, crumbs }: { eyebrow: string; title: string; tagline: string; description: string; image?: string; imageAlt?: string; crumbs?: { label: string; href: string }[] }) {
  return (
    <section className="relative overflow-hidden bg-[#1F2A2E] pt-32 pb-14 md:pt-40">
      {image && <Image src={image} alt={imageAlt ?? title} fill priority className="object-cover opacity-30" sizes="100vw" />}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1F2A2E] via-[#1F2A2E]/70 to-[#1F2A2E]/40" />
      <div className="relative wrap">
        {crumbs && (
          <nav aria-label="Breadcrumb" className="mb-5 flex items-center gap-1.5 text-xs font-bold text-white/60">
            <Link href="/" className="hover:text-white">Home</Link>
            {crumbs.map((c) => (
              <span key={c.href} className="flex items-center gap-1.5">
                <ChevronRight className="h-3 w-3" />
                <Link href={c.href} className="hover:text-white">{c.label}</Link>
              </span>
            ))}
            <ChevronRight className="h-3 w-3" />
            <span className="text-white">{title}</span>
          </nav>
        )}
        <Badge className="bg-gradient-to-r from-[#a13ddf] to-[#2BB2FC] text-white border-0">{eyebrow}</Badge>
        <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight text-white max-w-3xl text-balance">{title}</h1>
        <p className="mt-4 text-lg md:text-xl font-bold max-w-2xl grad-text">{tagline}</p>
        <p className="mt-4 text-white/70 max-w-2xl leading-relaxed">{description}</p>
        <div className="mt-7 flex gap-3 flex-wrap">
          <Link href="/contact-us" className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#a13ddf] to-[#2BB2FC] text-white pl-7 pr-2 py-2 text-[15px] font-bold min-h-[64px] hover:brightness-110">Discuss this XR solution<span className="w-[52px] h-[52px] rounded-full bg-white text-[#1F2A2E] grid place-items-center"><ArrowUpRight className="h-5 w-5" /></span></Link>
          <Link href="/case-studies" className="inline-flex items-center rounded-full border border-white/25 px-7 min-h-[64px] font-bold text-white hover:bg-white/10">See XR proof</Link>
        </div>
      </div>
    </section>
  );
}

const PROCESS: Record<string, { t: string; d: string }[]> = {
  Services: [
    { t: "Discover & scope", d: "Workshops, site walkthroughs and success metrics. Fixed-scope MVP proposal in days." },
    { t: "Design & prototype", d: "UX flows, 3D art direction and a clickable prototype validated with end users." },
    { t: "Build & integrate", d: "Agile sprints with device testing, backend bindings and analytics instrumentation." },
    { t: "Pilot & harden", d: "On-site pilot, instructor enablement, offline/MDM packaging and security review." },
    { t: "Scale & support", d: "Fleet rollout, content CMS handover and SLA-backed support with quarterly reviews." },
  ],
  Capabilities: [
    { t: "Assess", d: "Map skills, assets and data to the highest-ROI XR capability." },
    { t: "Prototype", d: "Working slice on real devices within 3–4 weeks." },
    { t: "Pilot", d: "Cohort deployment with baseline-vs-XR measurement." },
    { t: "Scale", d: "Roll out across sites with governance and enablement." },
  ],
  Industries: [
    { t: "Discover", d: "Role shadowing and pain-point mapping with your ops and HSE teams." },
    { t: "Pilot", d: "Single-line or single-site deployment with clear KPIs." },
    { t: "Rollout", d: "Multi-site deployment with train-the-trainer and MDM." },
    { t: "Support", d: "Content updates, fleet care and outcome reporting." },
  ],
  "Technology Solutions": [
    { t: "Audit", d: "Assets, data sources and network readiness review." },
    { t: "MVP", d: "Single-asset or single-line working solution in weeks." },
    { t: "Integrate", d: "Historian, MES, LMS and identity bindings." },
    { t: "Scale", d: "Template rollout with monitoring and retraining loops." },
  ],
};

const STACK: Record<string, string[]> = {
  Services: ["Unity", "Unreal Engine 5", "OpenUSD / Omniverse", "Meta Quest", "HTC Vive", "Vision Pro", "WebXR", "C# / C++", "Python", "MQTT / OPC-UA"],
  Capabilities: ["Unity", "Unreal", "ARKit / ARCore", "WebXR", "PyTorch", "ONNX / Edge", "Node.js", "xAPI / SCORM"],
  Industries: ["Meta Quest", "HTC Vive", "Vision Pro", "WebXR", "Unity / Unreal", "IoT / SCADA", "LMS / xAPI", "MDM Fleet"],
  "Technology Solutions": ["Unity / Unreal", "OpenUSD", "IoT / MQTT", "OPC-UA", "NVIDIA Isaac Sim", "PyTorch", "Edge (Jetson)", "WebGL"],
};

function relatedWork(page: ContentPage) {
  const hay = (page.title + " " + page.keywords.join(" ") + " " + page.tagline).toLowerCase();
  const scored = caseStudies.map((c) => {
    const text = (c.title + " " + c.tags.join(" ") + " " + c.industry).toLowerCase();
    let score = 0;
    if (c.industry.toLowerCase().split(" ").some((w) => w.length > 3 && hay.includes(w))) score += 3;
    for (const t of c.tags) if (hay.includes(t.toLowerCase())) score += 2;
    for (const w of page.keywords.flatMap((k) => k.split(" "))) {
      if (w.length > 4 && text.includes(w)) score += 1;
    }
    return { c, score };
  });
  return scored.sort((a, b) => b.score - a.score).slice(0, 3).map((s) => s.c);
}

export function ContentDetail({ page, relatedLabel, related, crumbBase }: { page: ContentPage; relatedLabel: string; related: { title: string; href: string }[]; crumbBase?: { label: string; href: string } }) {
  const Icon = page.icon;
  const steps = PROCESS[relatedLabel] ?? PROCESS.Services;
  const stack = STACK[relatedLabel] ?? STACK.Services;
  const work = relatedWork(page);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PageHero
        eyebrow={relatedLabel}
        title={page.title}
        tagline={page.tagline}
        description={page.description}
        image={page.image}
        imageAlt={page.imageAlt}
        crumbs={crumbBase ? [crumbBase] : undefined}
      />
      {/* stat band */}
      {page.stats && (
        <div className="border-b border-[#1F2A2E]/10 bg-white">
          <div className="wrap py-6 grid grid-cols-3 gap-3">
            {page.stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl md:text-4xl font-extrabold grad-text">{s.value}</p>
                <p className="text-xs md:text-sm text-[#626a6d] font-bold mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      <section className="py-14 bg-white">
        <div className="wrap">
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-6 items-start">
            <div className="space-y-6 min-w-0">
              <div className="relative overflow-hidden rounded-[24px] aspect-[16/8]">
                <Image src={page.image} alt={page.imageAlt} fill className="object-cover" sizes="(max-width:1024px) 100vw, 66vw" />
              </div>

              <div className="rounded-[24px] border border-[#1F2A2E]/10 bg-[#F4F8FA] p-8">
                <div className="flex items-center gap-3">
                  {Icon && <div className="h-11 w-11 rounded-2xl bg-gradient-to-r from-[#a13ddf] to-[#2BB2FC] text-white grid place-items-center"><Icon className="h-5 w-5" /></div>}
                  <h2 className="text-2xl font-extrabold">Overview</h2>
                </div>
                {page.overview.map((p) => (
                  <p key={p.slice(0, 24)} className="mt-4 text-[#1F2A2E]/80 leading-relaxed">{p}</p>
                ))}
              </div>

              <div className="rounded-[24px] border border-[#1F2A2E]/10 bg-white p-8">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#626a6d]">Deliverables</p>
                <h2 className="mt-2 text-2xl font-extrabold">What&apos;s included</h2>
                <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                  {page.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-[15px] font-bold text-[#1F2A2E] rounded-2xl border border-[#1F2A2E]/10 bg-[#F4F8FA] p-4">
                      <span className="mt-0.5 h-6 w-6 rounded-full bg-gradient-to-r from-[#a13ddf] to-[#2BB2FC] grid place-items-center shrink-0"><Check className="h-3.5 w-3.5 text-white" /></span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[24px] bg-[#1F2A2E] text-white p-8">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-white/50">How we deliver</p>
                <h2 className="mt-2 text-2xl font-extrabold">Delivery process</h2>
                <ol className="mt-6 space-y-0">
                  {steps.map((s, i) => (
                    <li key={s.t} className="relative flex gap-4 pb-6 last:pb-0">
                      <div className="flex flex-col items-center">
                        <span className="w-9 h-9 rounded-full bg-gradient-to-r from-[#a13ddf] to-[#2BB2FC] grid place-items-center text-sm font-extrabold shrink-0">{i + 1}</span>
                        {i < steps.length - 1 && <span className="w-px flex-1 bg-white/15 mt-1" />}
                      </div>
                      <div className="pb-1">
                        <p className="font-extrabold">{s.t}</p>
                        <p className="mt-1 text-sm text-white/70">{s.d}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="rounded-[24px] border border-[#1F2A2E]/10 bg-white p-8">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#626a6d]">Stack</p>
                <h2 className="mt-2 text-2xl font-extrabold">Technologies we use</h2>
                <div className="mt-5 flex flex-wrap gap-2">
                  {stack.map((t) => (
                    <span key={t} className="rounded-full border border-[#1F2A2E]/15 bg-[#F4F8FA] px-4 py-2 text-sm font-bold">{t}</span>
                  ))}
                </div>
              </div>

              <div className="rounded-[24px] border border-[#1F2A2E]/10 bg-gradient-to-br from-[#a13ddf]/5 via-white to-[#2BB2FC]/10 p-8">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#626a6d]">Applications</p>
                <h2 className="mt-2 text-2xl font-extrabold">XR use cases</h2>
                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  {page.useCases.map((u) => (
                    <div key={u.title} className="rounded-2xl border border-[#1F2A2E]/10 bg-white p-5">
                      <p className="font-extrabold">{u.title}</p>
                      <p className="mt-1.5 text-sm text-[#626a6d]">{u.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[24px] border border-[#1F2A2E]/10 bg-white p-8">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#626a6d]">Outcomes</p>
                <h2 className="mt-2 text-2xl font-extrabold">Results clients measure</h2>
                <div className="mt-5 grid sm:grid-cols-3 gap-3">
                  {[
                    ["Faster competency", "Time-to-skill cut 40–60% vs classroom baselines."],
                    ["Fewer errors", "Assessed practice reduces first-attempt failure rates."],
                    ["Audit-ready proof", "Every session logged with scores and evidence."],
                  ].map(([t, d]) => (
                    <div key={t} className="rounded-2xl bg-[#1F2A2E] text-white p-5">
                      <p className="font-extrabold text-[#2BB2FC]">{t}</p>
                      <p className="mt-1.5 text-sm text-white/70">{d}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[24px] border border-[#1F2A2E]/10 bg-white p-8">
                <h2 className="text-2xl font-extrabold">Frequently asked questions</h2>
                <div className="mt-4 space-y-3">
                  {page.faqs.map((f) => (
                    <details key={f.q} className="group rounded-2xl border border-[#1F2A2E]/10 bg-[#F4F8FA] open:border-[#1F2A2E]">
                      <summary className="cursor-pointer list-none px-6 py-4 font-extrabold flex justify-between items-center gap-4 [&::-webkit-details-marker]:hidden">{f.q}<span className="w-8 h-8 rounded-full bg-gradient-to-r from-[#a13ddf] to-[#2BB2FC] text-white grid place-items-center shrink-0 group-open:rotate-45 transition">+</span></summary>
                      <p className="px-6 pb-5 text-[#626a6d]">{f.a}</p>
                    </details>
                  ))}
                </div>
              </div>

              <div className="rounded-[24px] bg-white border border-[#1F2A2E]/10 p-8">
                <div className="flex items-end justify-between gap-4">
                  <h2 className="text-2xl font-extrabold">Related XR work</h2>
                  <Link href="/case-studies" className="text-sm font-extrabold text-[#a13ddf] hover:underline shrink-0">All case studies →</Link>
                </div>
                <div className="mt-5 grid sm:grid-cols-3 gap-4">
                  {work.map((c) => (
                    <Link key={c.slug} href={`/case-study/${c.slug}`} className="group rounded-2xl border border-[#1F2A2E]/10 bg-[#F4F8FA] overflow-hidden hover:border-[#a13ddf] transition">
                      <div className="relative h-28 overflow-hidden">
                        <Image src={csImage(c.slug)} alt={`XR case study in ${c.industry}`} fill className="object-cover group-hover:scale-105 transition duration-500" sizes="(max-width:768px) 100vw, 33vw" />
                      </div>
                      <div className="p-4">
                        <p className="text-[11px] font-extrabold uppercase tracking-widest text-[#a13ddf]">{c.industry}</p>
                        <p className="mt-1.5 text-sm font-extrabold leading-snug capitalize group-hover:underline">{c.title.replace(/-/g, " ")}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <aside className="rounded-[24px] bg-[#1F2A2E] text-white p-8 lg:sticky lg:top-28">
              <h3 className="text-xs uppercase tracking-[0.18em] text-white/50 font-bold">{relatedLabel} — explore more</h3>
              <div className="mt-4 space-y-2">
                {related.slice(0, 6).map((r) => (
                  <Link key={r.href} href={r.href} className="block rounded-2xl px-4 py-3 text-[15px] font-bold text-white/85 hover:bg-white/5 hover:text-[#2BB2FC]">{r.title}</Link>
                ))}
              </div>
              <Link href="/contact-us" className="mt-6 flex items-center justify-center rounded-full bg-gradient-to-r from-[#a13ddf] to-[#2BB2FC] py-4 text-sm font-extrabold text-white hover:brightness-110">Get an XR quote</Link>
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-extrabold">Not sure where to start?</p>
                <p className="mt-1 text-sm text-white/70">A 30-minute XR discovery call maps your highest-ROI pilot.</p>
                <Link href="/contact-us" className="mt-3 inline-block text-sm font-extrabold text-[#2BB2FC] hover:underline">Book discovery →</Link>
              </div>
              <p className="mt-4 text-xs text-white/50">Keywords: {page.keywords.slice(0, 4).join(" • ")}</p>
            </aside>
          </div>

          {/* bottom CTA */}
          <div className="mt-6 rounded-[24px] overflow-hidden relative bg-[#1F2A2E]">
            {page.image && <Image src={page.image} alt="" fill className="object-cover opacity-25" sizes="100vw" />}
            <div className="absolute inset-0 bg-gradient-to-r from-[#a13ddf]/60 to-[#2BB2FC]/40" />
            <div className="relative p-8 md:p-12 flex flex-col md:flex-row md:items-center gap-6 justify-between">
              <div>
                <h2 className="text-2xl md:text-4xl font-extrabold text-white max-w-xl">Ready to scope your {page.title} pilot?</h2>
                <p className="mt-2 text-white/80 max-w-lg">Fixed-scope MVP proposal in days — devices, content, integrations and rollout plan included.</p>
              </div>
              <Link href="/contact-us" className="inline-flex items-center gap-3 rounded-full bg-white text-[#1F2A2E] pl-7 pr-2 py-2 text-[15px] font-bold min-h-[64px] shrink-0 hover:brightness-95">Talk to the XR studio<span className="w-[52px] h-[52px] rounded-full bg-gradient-to-r from-[#a13ddf] to-[#2BB2FC] text-white grid place-items-center"><ArrowUpRight className="h-5 w-5" /></span></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

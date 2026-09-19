import Image from "next/image";
import Link from "next/link";
import { Check, ArrowUpRight } from "lucide-react";
import { industries, techSolutions, type ContentPage } from "@/lib/site";
import { TECH_EYEBROW, TECH_VALUE, TECH_EXPERTISE } from "@/lib/techDetail";
import { SERVICE_HOW, SERVICE_WHY } from "@/lib/serviceDetail";
import { PageHero } from "@/components/content/PageTemplate";
import { EnquiryForm } from "@/components/content/EnquiryForm";

export function TechDetail({ page }: { page: Omit<ContentPage, "icon"> }) {
  const value = TECH_VALUE[page.slug] ?? [];
  const expertise = TECH_EXPERTISE[page.slug] ?? [];
  const eyebrow = TECH_EYEBROW[page.slug] ?? "XR TECHNOLOGY SOLUTIONS";
  const siblings = techSolutions.filter((s) => s.slug !== page.slug);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PageHero
        eyebrow={eyebrow}
        title={page.title}
        tagline={page.tagline}
        description={page.description}
        image={page.image}
        imageAlt={page.imageAlt}
        crumbs={[{ label: "Technology Solutions", href: "/#services" }]}
      />

      {page.stats && (
        <div className="border-b border-[#1F2A2E]/10 bg-white">
          <div className="wrap py-8 grid grid-cols-3 gap-3">
            {page.stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl md:text-5xl font-extrabold grad-text">{s.value}</p>
                <p className="text-xs md:text-sm text-[#626a6d] font-bold mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* overview */}
      <section className="py-14 bg-white">
        <div className="wrap grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#626a6d]">{eyebrow}</p>
            {page.overview.map((p) => (
              <p key={p.slice(0, 24)} className="mt-4 text-lg text-[#1F2A2E]/80 leading-relaxed">{p}</p>
            ))}
            <Link href="/contact-us" className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#1F2A2E] text-white pl-6 pr-1.5 py-1.5 text-sm font-bold min-h-[52px]">Get In Touch<span className="w-10 h-10 rounded-full bg-gradient-to-r from-[#a13ddf] to-[#2BB2FC] grid place-items-center"><ArrowUpRight className="h-4 w-4" /></span></Link>
          </div>
          <div className="relative overflow-hidden rounded-[28px] aspect-[4/3] shadow-xl shadow-[#1F2A2E]/10">
            <Image src={page.image} alt={page.imageAlt} fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="py-14 md:py-20 bg-[#F4F8FA]">
        <div className="wrap">
          <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#626a6d]">Enterprise value</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">Why {page.title} Matters</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
            {value.map((v, i) => (
              <div key={v.title} className={`rounded-[28px] p-8 flex flex-col transition-all duration-300 hover:-translate-y-1.5 ${i === 0 ? "bg-[#1F2A2E] text-white shadow-2xl shadow-[#1F2A2E]/25" : "bg-white border border-[#1F2A2E]/10 shadow-sm hover:shadow-xl hover:border-[#a13ddf]/40"}`}>
                <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#a13ddf] to-[#2BB2FC] text-white grid place-items-center font-extrabold shadow-lg shadow-[#a13ddf]/30">0{i + 1}</span>
                <h3 className="mt-6 text-[22px] leading-tight font-extrabold tracking-tight">{v.title}</h3>
                <p className={`mt-3 text-[15px] leading-relaxed ${i === 0 ? "text-white/70" : "text-[#626a6d]"}`}>{v.desc}</p>
                <Link href="/contact-us" className={`mt-auto pt-6 inline-flex items-center gap-1.5 text-sm font-extrabold ${i === 0 ? "text-[#2BB2FC]" : "text-[#a13ddf]"} hover:underline`}>Get In Touch <ArrowUpRight className="h-4 w-4" /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-14 md:py-20 bg-[#1F2A2E]">
        <div className="wrap">
          <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-white/50">What we deliver</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight text-white">Our {page.title} Expertise</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {expertise.map((e) => (
              <div key={e.title} className="rounded-[24px] border border-white/10 bg-white/5 p-7 hover:bg-white/10 hover:border-[#2BB2FC]/40 transition">
                <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#a13ddf] to-[#2BB2FC] grid place-items-center text-white font-extrabold">✓</span>
                <h3 className="mt-4 text-xl font-extrabold text-white">{e.title}</h3>
                <p className="mt-2 text-white/70 leading-relaxed text-[15px]">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-14 md:py-20 bg-white">
        <div className="wrap grid lg:grid-cols-[1fr_1.5fr] gap-10">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#626a6d]">Process</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">How We Work</h2>
            <p className="mt-4 text-lg text-[#626a6d]">From audit to scaled rollout — the same delivery spine as every XR program.</p>
            <Link href="/contact-us" className="mt-6 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#a13ddf] to-[#2BB2FC] text-white pl-6 pr-1.5 py-1.5 text-sm font-bold min-h-[52px]">Start discovery<span className="w-10 h-10 rounded-full bg-white text-[#1F2A2E] grid place-items-center"><ArrowUpRight className="h-4 w-4" /></span></Link>
          </div>
          <ol className="space-y-0">
            {SERVICE_HOW.map((s, i) => (
              <li key={s.title} className="relative flex gap-4 pb-6 last:pb-0">
                <div className="flex flex-col items-center">
                  <span className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#a13ddf] to-[#2BB2FC] text-white grid place-items-center font-extrabold shrink-0">{i + 1}</span>
                  {i < SERVICE_HOW.length - 1 && <span className="w-px flex-1 bg-[#1F2A2E]/10 mt-1" />}
                </div>
                <div className="rounded-[20px] border border-[#1F2A2E]/10 bg-[#F4F8FA] px-6 py-5 flex-1">
                  <p className="font-extrabold text-lg">{s.title}</p>
                  <p className="mt-1 text-[#626a6d]">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why choose */}
      <section className="py-14 md:py-20 bg-[#F4F8FA]">
        <div className="wrap">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Why Choose Digital Agents</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {SERVICE_WHY.map((w, i) => (
              <div key={w.title} className={`rounded-[20px] p-6 flex flex-col justify-between min-h-[250px] ${i === 0 ? "bg-gradient-to-br from-[#a13ddf] to-[#2BB2FC] text-white" : "bg-white border border-[#1F2A2E]/10"}`}>
                <span className={`w-10 h-10 rounded-xl grid place-items-center font-extrabold ${i === 0 ? "bg-white/20 text-white" : "bg-[#1F2A2E] text-white"}`}>{i + 1}</span>
                <div>
                  <p className="font-extrabold capitalize">{w.title}</p>
                  <p className={`mt-1.5 text-sm ${i === 0 ? "text-white/85" : "text-[#626a6d]"}`}>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-[20px] border border-[#1F2A2E]/10 bg-white p-6">
            <p className="text-sm font-bold text-[#626a6d]">More technology solutions:</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {siblings.map((s) => (
                <Link key={s.slug} href={`/technology-solutions/${s.slug}`} className="rounded-full border border-[#1F2A2E]/15 px-4 py-2 text-sm font-bold hover:bg-[#1F2A2E] hover:text-white transition">{s.title}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-14 md:py-20 bg-white">
        <div className="wrap">
          <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#626a6d]">Reach</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">Industries We Support</h2>
          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((c) => (
              <Link key={c.slug} href={`/industries/${c.slug}`} className="group rounded-[20px] border border-[#1F2A2E]/10 p-5 hover:border-[#a13ddf] hover:shadow-lg transition bg-white">
                <div className="text-[#a13ddf]">{c.icon && <c.icon className="h-5 w-5" />}</div>
                <h3 className="mt-3 font-extrabold text-[15px] leading-snug">{c.title}</h3>
                <p className="mt-1 text-[13px] text-[#626a6d] line-clamp-2">{c.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 md:py-20 bg-[#F4F8FA]">
        <div className="wrap grid lg:grid-cols-[1fr_1.5fr] gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Frequently Asked Questions</h2>
            <p className="mt-3 text-[#626a6d]">Everything buyers ask before piloting {page.title.toLowerCase()}.</p>
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

      {/* form */}
      <section className="pb-14 md:pb-20 bg-[#F4F8FA]">
        <div className="wrap grid lg:grid-cols-[1fr_1.4fr] gap-8 items-start">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#626a6d]">Contact</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">Get In Touch</h2>
            <p className="mt-4 text-lg text-[#626a6d]">Tell us your {page.title.toLowerCase()} goals — we reply with a scoped next step.</p>
            <ul className="mt-5 space-y-2.5">
              {page.bullets.slice(0, 4).map((b) => (
                <li key={b} className="flex gap-2.5 text-[15px] font-bold">
                  <span className="mt-0.5 h-5 w-5 rounded-full bg-gradient-to-r from-[#a13ddf] to-[#2BB2FC] grid place-items-center shrink-0"><Check className="h-3 w-3 text-white" strokeWidth={3.5} /></span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <EnquiryForm subject={page.title} />
        </div>
      </section>

      {/* CTA */}
      <section className="pb-14 md:pb-20 px-4 md:px-6 bg-[#F4F8FA]">
        <div className="wrap rounded-[24px] overflow-hidden relative bg-[#1F2A2E]">
          <Image src={page.image} alt="" fill className="object-cover opacity-25" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#a13ddf]/60 to-[#2BB2FC]/40" />
          <div className="relative p-8 md:p-12">
            <h2 className="text-2xl md:text-4xl font-extrabold text-white max-w-xl">Empowering Enterprises to Scale & Succeed</h2>
            <p className="mt-2 text-white/80 max-w-lg">Cutting-edge {page.title.toLowerCase()} tailored for your business.</p>
            <Link href="/contact-us" className="mt-6 inline-flex items-center gap-3 rounded-full bg-white text-[#1F2A2E] pl-7 pr-2 py-2 text-[15px] font-bold min-h-[64px] hover:brightness-95">Get In Touch<span className="w-[52px] h-[52px] rounded-full bg-gradient-to-r from-[#a13ddf] to-[#2BB2FC] text-white grid place-items-center"><ArrowUpRight className="h-5 w-5" /></span></Link>
          </div>
        </div>
      </section>
    </>
  );
}

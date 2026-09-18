"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, ArrowUpRight } from "lucide-react";
import { caseStudies, industries, type ContentPage } from "@/lib/site";
import { CAPABILITY_SERVICES } from "@/lib/capabilityServices";
import { XR_IMAGES as X, CAP_GALLERIES, csImage } from "@/lib/images";
import { PageHero } from "@/components/content/PageTemplate";
import { EnquiryForm } from "@/components/content/EnquiryForm";

const GALLERY_POOL = [X.vrHero, X.arLab, X.headset, X.vrMan, X.metaverse, X.training];

const galleryFor = (slug: string, hero: string) => {
  const local = CAP_GALLERIES[slug] ?? GALLERY_POOL;
  const rest = [hero, ...local.filter((g) => g !== hero)];
  return rest.slice(0, 3);
};

export function CapabilityDetail({ page }: { page: Omit<ContentPage, "icon"> }) {
  const blocks = CAPABILITY_SERVICES[page.slug] ?? [];
  const work = caseStudies
    .map((c) => ({ c, hit: c.tags.some((t) => (page.title + " " + page.keywords.join(" ")).toLowerCase().includes(t.toLowerCase())) }))
    .filter((x) => x.hit)
    .map((x) => x.c)
    .concat(caseStudies)
    .filter((c, i, a) => a.findIndex((x) => x.slug === c.slug) === i)
    .slice(0, 3);
  const gallery = galleryFor(page.slug, page.image);
  const overviewImg = gallery[1] ?? page.image;
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PageHero
        eyebrow="Capabilities"
        title={page.title}
        tagline={page.tagline}
        description={page.description}
        image={page.image}
        imageAlt={page.imageAlt}
        crumbs={[{ label: "Capabilities", href: "/#services" }]}
      />

      {page.stats && (
        <div className="border-b border-[#1F2A2E]/10 bg-white">
          <div className="mx-auto max-w-[1320px] px-4 md:px-6 py-8 grid grid-cols-3 gap-3">
            {page.stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl md:text-5xl font-extrabold grad-text">{s.value}</p>
                <p className="text-xs md:text-sm text-[#626a6d] font-bold mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* gallery strip */}
      <section className="py-10 bg-white overflow-hidden">
        <div className="mx-auto max-w-[1320px] px-4 md:px-6 grid grid-cols-3 gap-4">
          {gallery.map((g, i) => (
            <div key={g + i} className="relative overflow-hidden rounded-[24px] h-48 md:h-80 group">
              <Image src={g} alt={`${page.title} work sample ${i + 1}`} fill className="object-cover group-hover:scale-105 transition duration-700" sizes="(max-width:768px) 33vw, 25vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F2A2E]/25 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      </section>

      {/* overview */}
      <section className="pb-14 bg-white">
        <div className="mx-auto max-w-[1320px] px-4 md:px-6 grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#626a6d]">{page.title} at Digital Agents</p>
            {page.overview.map((p) => (
              <p key={p.slice(0, 24)} className="mt-4 text-lg text-[#1F2A2E]/80 leading-relaxed">{p}</p>
            ))}
            <Link href="/contact-us" className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#1F2A2E] text-white pl-6 pr-1.5 py-1.5 text-sm font-bold min-h-[52px]">Speak with our consultant<span className="w-10 h-10 rounded-full bg-gradient-to-r from-[#a13ddf] to-[#2BB2FC] grid place-items-center"><ArrowUpRight className="h-4 w-4" /></span></Link>
          </div>
          <div className="relative overflow-hidden rounded-[28px] aspect-[4/3] shadow-xl shadow-[#1F2A2E]/10">
            <Image src={overviewImg} alt={page.imageAlt} fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-14 md:py-20 bg-[#F4F8FA]">
        <div className="mx-auto max-w-[1320px] px-4 md:px-6">
          <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#626a6d]">{page.title}</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">Our Services</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-5 items-stretch">
            {blocks.map((b, i) => (
              <div key={b.title} className={`rounded-[28px] p-8 md:p-9 flex flex-col transition-all duration-300 hover:-translate-y-1.5 ${i === 0 ? "bg-[#1F2A2E] text-white shadow-2xl shadow-[#1F2A2E]/25 hover:shadow-[#a13ddf]/25" : "bg-white border border-[#1F2A2E]/10 shadow-sm hover:shadow-xl hover:shadow-[#1F2A2E]/10 hover:border-[#a13ddf]/40"}`}>
                <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#a13ddf] to-[#2BB2FC] text-white grid place-items-center font-extrabold shadow-lg shadow-[#a13ddf]/30">0{i + 1}</span>
                <h3 className="mt-6 text-[26px] leading-tight font-extrabold tracking-tight">{b.title}</h3>
                <p className={`mt-3 leading-relaxed text-[15px] ${i === 0 ? "text-white/70" : "text-[#626a6d]"}`}>{b.desc}</p>
                <ul className="mt-6 space-y-3.5">
                  {b.bullets.map((x) => (
                    <li key={x} className="flex gap-3 text-[15px] font-bold leading-snug">
                      <span className="mt-0.5 h-[22px] w-[22px] rounded-full bg-gradient-to-br from-[#a13ddf] to-[#2BB2FC] grid place-items-center shrink-0 shadow shadow-[#a13ddf]/30"><Check className="h-3 w-3 text-white" strokeWidth={3.5} /></span>
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries we serve */}
      <section className="py-14 md:py-20 bg-white">
        <div className="mx-auto max-w-[1320px] px-4 md:px-6">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#626a6d]">Reach</p>
          <h2 className="mt-2 text-3xl md:text-5xl font-extrabold tracking-tight">Industries We Serve</h2>
          <p className="mt-4 text-lg text-[#626a6d] max-w-2xl">This capability ships across our industry programs — from manufacturing and defence to retail and education.</p>
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

      {/* Case studies */}
      <section className="py-14 md:py-20 bg-[#F4F8FA]">
        <div className="mx-auto max-w-[1320px] px-4 md:px-6">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Case Studies</h2>
            <Link href="/case-studies" className="hidden sm:inline-flex items-center gap-3 rounded-full bg-[#1F2A2E] text-white pl-6 pr-1.5 py-1.5 text-sm font-bold min-h-[52px] shrink-0">View all<span className="w-10 h-10 rounded-full bg-gradient-to-r from-[#a13ddf] to-[#2BB2FC] grid place-items-center"><ArrowUpRight className="h-4 w-4" /></span></Link>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {work.map((c) => (
              <Link key={c.slug} href={`/case-study/${c.slug}`} className="group rounded-[20px] bg-white border border-[#1F2A2E]/10 overflow-hidden hover:border-[#a13ddf] hover:shadow-lg transition">
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
      <section className="py-14 md:py-20 bg-white">
        <div className="mx-auto max-w-[1320px] px-4 md:px-6 grid lg:grid-cols-[1fr_1.5fr] gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">{page.title} FAQs</h2>
            <p className="mt-3 text-[#626a6d]">Common questions before starting a {page.title.toLowerCase()} engagement.</p>
          </div>
          <div className="space-y-3">
            {page.faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-[#1F2A2E]/10 bg-[#F4F8FA] open:border-[#1F2A2E]">
                <summary className="cursor-pointer list-none px-6 py-4 font-extrabold flex justify-between items-center gap-4 [&::-webkit-details-marker]:hidden">{f.q}<span className="w-8 h-8 rounded-full bg-gradient-to-r from-[#a13ddf] to-[#2BB2FC] text-white grid place-items-center shrink-0 group-open:rotate-45 transition">+</span></summary>
                <p className="px-6 pb-5 text-[#626a6d]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Get in touch form */}
      <section className="pb-14 md:pb-20 bg-white">
        <div className="mx-auto max-w-[1320px] px-4 md:px-6 grid lg:grid-cols-[1fr_1.4fr] gap-8 items-start">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#626a6d]">Contact</p>
            <h2 className="mt-2 text-3xl md:text-5xl font-extrabold tracking-tight">Get In Touch</h2>
            <p className="mt-4 text-lg text-[#626a6d]">Tell us about your {page.title.toLowerCase()} goals — a consultant replies with a scoped next step.</p>
          </div>
          <EnquiryForm subject={page.title} />
        </div>
      </section>

      {/* CTA */}
      <section className="pb-14 md:pb-20 px-4 md:px-6 bg-white">
        <div className="mx-auto max-w-[1320px] rounded-[24px] overflow-hidden relative bg-[#1F2A2E]">
          <Image src={page.image} alt="" fill className="object-cover opacity-25" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#a13ddf]/60 to-[#2BB2FC]/40" />
          <div className="relative p-8 md:p-12">
            <h2 className="text-2xl md:text-4xl font-extrabold text-white max-w-xl">Empowering Enterprises to Scale & Succeed</h2>
            <p className="mt-2 text-white/80 max-w-lg">Cutting-edge {page.title.toLowerCase()} solutions tailored for your business.</p>
            <Link href="/contact-us" className="mt-6 inline-flex items-center gap-3 rounded-full bg-white text-[#1F2A2E] pl-7 pr-2 py-2 text-[15px] font-bold min-h-[64px] hover:brightness-95">Get In Touch<span className="w-[52px] h-[52px] rounded-full bg-gradient-to-r from-[#a13ddf] to-[#2BB2FC] text-white grid place-items-center"><ArrowUpRight className="h-5 w-5" /></span></Link>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHead, PillButton } from "@/components/ui/section";
import { capabilities, industries, techSolutions, services, caseStudies, blogPosts } from "@/lib/site";
import { XR_IMAGES as X, HERO_SLIDES } from "@/lib/images";

const XR = {
  hero1: HERO_SLIDES[0],
  hero2: X.vrMan,
  hero3: X.neonGame,
  lab: X.arLab,
  industrial: X.engineerTwin,
  training: X.training,
  headset: X.headset,
};

function Pill({ href, children, dark = false }: { href: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <Link href={href} className={`inline-flex items-center gap-4 rounded-full pl-7 pr-2 py-2 text-[15px] font-bold min-h-[64px] transition ${dark ? "bg-transparent text-white border border-white/25 hover:bg-white/10" : "bg-[#1F2A2E] text-white hover:bg-black"}`}>
      <span>{children}</span>
      <span className="w-[52px] h-[52px] rounded-full bg-gradient-to-r from-[#a13ddf] to-[#2BB2FC] text-white grid place-items-center shrink-0"><ArrowUpRight className="h-5 w-5" /></span>
    </Link>
  );
}

export function Hero() {
  const slides = [
    { badge: "XR Studio — AR / VR / MR", img: XR.hero1, h: "We build XR training that transfers to the floor", p: "VR simulators, AR guidance and digital twins for manufacturing, defence, healthcare and energy. Original XR-SEO copy in the same structure as the reference site." },
    { badge: "VR Simulators", img: XR.hero2, h: "Practice dangerous work safely in VR", p: "UAV, medical, plant and tactical simulators with scoring, debrief and LMS analytics — built in Unity & Unreal." },
    { badge: "Digital Twins + AR", img: XR.hero3, h: "See every asset live in 3D", p: "IoT-bound twins, 360 tours, vision QA and remote AR assistance that cut downtime and travel." },
  ];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, [slides.length]);
  const s = slides[idx];
  return (
    <section className="relative flex items-end min-h-[100svh] overflow-hidden bg-[#1F2A2E]">
      <AnimatePresence mode="sync">
        <motion.div key={idx} initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="absolute inset-0">
          <Image src={s.img} alt="XR headset in industrial training" fill priority className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F2A2E] via-[#1F2A2E]/55 to-[#1F2A2E]/25" />
        </motion.div>
      </AnimatePresence>
      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-4 md:px-6 pb-10 pt-36">
        <div className="flex items-center gap-4">
          <span className="h-2 w-2 rounded-full bg-[#a13ddf] animate-pulse" />
          <p className="text-white/80 text-[15px] md:text-lg max-w-xl">XR studio crafting <span className="text-[#a13ddf] font-bold">high-performing immersive solutions</span> {s.badge.toLowerCase()} that elevate training and conversions.</p>
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={idx} initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.5 }}>
            <h1 className="mt-4 text-white font-extrabold leading-[0.95] tracking-tight text-[17vw] md:text-[9rem]">{s.h.split(" ").slice(0, 2).join(" ")}<br />{s.h.split(" ").slice(2, 4).join(" ")}</h1>
            <p className="mt-4 max-w-2xl text-white/70 text-base md:text-lg">{s.p}</p>
          </motion.div>
        </AnimatePresence>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Pill href="/contact-us">Start an XR project</Pill>
          <Pill href="/case-studies" dark>See XR work</Pill>
          <div className="ml-2 flex items-center gap-2">
            <button aria-label="Previous" onClick={() => setIdx((idx + slides.length - 1) % slides.length)} className="w-11 h-11 rounded-full bg-white text-[#1F2A2E] grid place-items-center font-bold">‹</button>
            <div className="flex gap-1.5">{slides.map((_, i) => <button key={i} aria-label={`Slide ${i+1}`} onClick={() => setIdx(i)} className={`h-2 rounded-full transition-all ${i===idx ? "w-8 bg-[#a13ddf]" : "w-2 bg-white/30"}`} />)}</div>
            <button aria-label="Next" onClick={() => setIdx((idx + 1) % slides.length)} className="w-11 h-11 rounded-full bg-white text-[#1F2A2E] grid place-items-center font-bold">›</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function StatsFacts() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-[1320px] px-4 md:px-6">
        <SectionHead no="01" label="Stats & facts" title="An XR studio you can trust with mission-critical training" desc="Original XR-focused copy: we ship VR simulators, AR workflows and digital twins — measured by retention, uptime and audit readiness." />
        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {[["10+", "Years building XR simulators & twins"], ["300+", "XR modules, twins & 3D apps shipped"], ["120+", "Industrial clients onboarded to XR"]].map(([v, l]) => (
            <div key={l} className="border-t border-[#1F2A2E]/15 pt-8">
              <p className="text-5xl md:text-6xl font-extrabold text-[#1F2A2E]">{v}</p>
              <p className="mt-3 text-[#626a6d]">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturedProjects() {
  const items = caseStudies.slice(0, 6);
  const imgs = [XR.hero1, XR.lab, XR.industrial, XR.training, XR.headset, XR.hero3];
  return (
    <section className="py-16 md:py-24 bg-[#F4F8FA]">
      <div className="mx-auto max-w-[1320px] px-4 md:px-6">
        <SectionHead no="02" label="Portfolio" title="Featured XR projects" desc="VR training, AR assistance and twin deployments — original placeholder summaries in the reference sitemap's structure." />
      </div>
      <div className="mt-10 grid md:grid-cols-3 gap-6 mx-auto max-w-[1320px] px-4 md:px-6">
        {items.map((c, i) => (
          <Link key={c.slug} href={`/case-study/${c.slug}`} className="group">
            <div className="relative overflow-hidden rounded-[20px] aspect-[4/3]">
              <Image src={imgs[i % imgs.length]} alt={`XR project — ${c.industry}`} fill className="object-cover group-hover:scale-105 transition duration-500" sizes="(max-width:768px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition" />
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-r from-[#a13ddf] to-[#2BB2FC] text-white grid place-items-center opacity-0 group-hover:opacity-100 transition"><ArrowUpRight className="h-6 w-6" /></span>
            </div>
            <h3 className="mt-4 text-2xl font-bold text-[#1F2A2E] capitalize leading-snug">{c.title.replace(/-/g, " ").slice(0, 48)}</h3>
            <div className="mt-2 flex gap-2 flex-wrap">{c.tags.map((t) => <span key={t} className="rounded-full border border-[#1F2A2E]/15 px-3 py-1 text-xs font-bold text-[#1F2A2E]">{t}</span>)}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function ServicesDark() {
  const rows = [
    { t: "VR Training Simulators", d: "Quest, Vive & Vision Pro sims with scoring and xAPI analytics.", img: XR.training },
    { t: "AR Guidance & Remote Assist", d: "CAD-anchored steps and expert calls on phones & glasses.", img: XR.lab },
    { t: "Digital Twins & 3D", d: "IoT-bound twins, 360 tours, configurators and vision QA.", img: XR.industrial },
    { t: "Unity / Unreal / Omniverse", d: "Real-time pipelines from MVP to plant-scale rollout.", img: XR.headset },
  ];
  const [active, setActive] = useState(0);
  return (
    <section className="py-16 md:py-24 bg-[#1F2A2E]" id="services">
      <div className="mx-auto max-w-[1320px] px-4 md:px-6">
        <SectionHead dark no="03" label="Services" title="What We Do" desc="Four XR service lines covering the reference site's services, capabilities and technology solutions." />
        <div className="mt-10 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <div className="relative overflow-hidden rounded-[20px] aspect-[4/5] sticky top-28">
              <AnimatePresence mode="wait">
                <motion.div key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="absolute inset-0">
                  <Image src={rows[active].img} alt={rows[active].t} fill className="object-cover" sizes="(max-width:1024px) 100vw, 33vw" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          <div className="lg:col-span-8">
            {rows.map((r, i) => (
              <button key={r.t} onClick={() => setActive(i)} className={`w-full text-left py-6 lg:py-8 border-t border-white/10 grid md:grid-cols-2 gap-3 items-center ${i === rows.length - 1 ? "border-b" : ""}`}>
                <span className={`text-2xl md:text-4xl font-extrabold ${i === active ? "text-[#a13ddf]" : "text-white"}`}>{r.t}</span>
                <span className="text-white/70">{r.d}</span>
              </button>
            ))}
            <div className="mt-8"><PillButton href="/digital-product-engineering" variant="outline">See XR work</PillButton></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhyUs() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-[1320px] px-4 md:px-6 grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-3">
          <div className="flex items-center gap-4">
            <span className="w-9 h-9 rounded-full bg-[#a13ddf] grid place-items-center text-sm font-bold">04</span>
            <hr className="w-12 h-px bg-[#1F2A2E]/15 border-0" />
            <span className="rounded-full bg-[#1F2A2E] text-white px-3 py-1.5 text-xs font-bold uppercase">About us</span>
          </div>
          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight">Why Choose Us</h2>
          <p className="mt-4 text-lg text-[#626a6d]">Game-engine craft plus industrial delivery — devices, MDM, offline builds and audit trails included.</p>
        </div>
        <div className="lg:col-span-9 grid md:grid-cols-3 gap-6">
          <div className="rounded-[20px] bg-gradient-to-r from-[#a13ddf] to-[#2BB2FC] text-white p-7 flex flex-col justify-between min-h-[320px]">
            <p className="font-bold">★★★★☆ — Pilots love the realism and debrief quality.</p>
            <div><p className="text-5xl font-extrabold">98.6%</p><p className="font-bold">Pilot satisfaction</p><p className="mt-4 text-sm font-bold">XR Training Lead — Manufacturing</p></div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="relative rounded-[20px] overflow-hidden aspect-[16/10]">
              <Image src={XR.lab} alt="Technician wearing AR headset in lab" fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
            </div>
            <div className="rounded-[20px] bg-[#1F2A2E] text-white p-7">
              <p className="text-4xl font-extrabold">500+</p>
              <p className="text-white/70">XR sessions & deployments supported</p>
            </div>
          </div>
          <div className="rounded-[20px] border border-[#1F2A2E]/12 p-7 flex flex-col justify-between min-h-[320px]">
            <div><p className="text-4xl font-extrabold">238+</p><p className="text-[#626a6d] font-bold">Plants & campuses served</p></div>
            <p className="text-[#626a6d]">Offline, on-prem and rugged-device XR delivery for regulated sites.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const items = [
    { q: "Immersive modules our operators actually enjoy — rollout was seamless.", who: "XR Training Lead", org: "Manufacturing", img: XR.training },
    { q: "The twin cut our troubleshooting time across three lines.", who: "Plant Head", org: "Energy", img: XR.industrial },
    { q: "Seven years of v-lab partnership — students worldwide benefit.", who: "University Partner", org: "Education", img: XR.headset },
  ];
  return (
    <section className="py-16 md:py-24 bg-[#F4F8FA]">
      <div className="mx-auto max-w-[1320px] px-4 md:px-6">
        <SectionHead no="05" label="Testimonial" title="Stories from XR clients" desc="Original placeholder testimonials — replace with your licensed quotes and logos." />
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <div key={t.who} className={`rounded-[20px] p-7 flex flex-col justify-between min-h-[300px] ${i === 1 ? "bg-[#1F2A2E] text-white" : i === 0 ? "bg-gradient-to-r from-[#a13ddf] to-[#2BB2FC] text-white" : "bg-white border border-[#1F2A2E]/10"}`}>
              <div><p className="text-sm font-bold opacity-70">Hear from them</p><h4 className="mt-3 text-2xl font-bold leading-snug">{t.q}</h4></div>
              <div className="mt-6 flex items-center gap-3">
                <div className="relative w-[60px] h-[60px] rounded-full overflow-hidden shrink-0"><Image src={t.img} alt={t.who} fill className="object-cover" sizes="60px" /></div>
                <div><p className="font-bold">{t.who}</p><p className={`text-sm ${i === 1 ? "text-white/70" : "opacity-70"}`}>{t.org}</p></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function IndustriesXR() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-[1320px] px-4 md:px-6">
        <SectionHead no="06" label="Industries" title="XR where it pays back fastest" desc="Same industry sitemap as the reference — each page rewritten with XR use-cases for SEO." />
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((c) => (
            <Link key={c.slug} href={`/industries/${c.slug}`} className="group rounded-[20px] border border-[#1F2A2E]/10 p-5 hover:border-[#1F2A2E] hover:shadow-lg transition bg-white">
              <div className="text-[#1F2A2E]">{c.icon && <c.icon className="h-5 w-5" />}</div>
              <h3 className="mt-3 font-extrabold text-[15px] leading-snug">{c.title}</h3>
              <p className="mt-1 text-[13px] text-[#626a6d] line-clamp-2">{c.tagline}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Engagement() {
  const tiers = [
    { n: "XR Pilot", p: "$9k", u: "one-time", d: "One headset-ready MVP in 4 weeks.", f: ["1 XR scenario", "Quest + Web build", "Basic analytics", "On-site pilot support"] },
    { n: "XR Scale", p: "$4.5k", u: "/month", d: "Roll out across lines & sites.", f: ["Everything in Pilot", "Multi-user + LMS", "Twin / IoT bindings", "MDM & offline"], hot: true },
    { n: "XR Enterprise", p: "Custom", u: "", d: "CoE, fleet & governance.", f: ["XR CoE setup", "Device fleet + MDM", "Content roadmap", "Priority SLAs"] },
  ];
  return (
    <section className="py-16 md:py-24 bg-[#F4F8FA]">
      <div className="mx-auto max-w-[1320px] px-4 md:px-6">
        <SectionHead no="07" label="Engagement" title="XR engagement models" desc="Start with a pilot, scale what works — pricing placeholders, not copied content." />
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.n} className={`rounded-[24px] p-8 flex flex-col gap-6 ${t.hot ? "bg-[#1F2A2E] text-white" : "bg-white border border-[#1F2A2E]/10"}`}>
              <div>
                <div className="flex items-center gap-2"><h3 className="font-bold">{t.n}</h3>{t.hot && <span className="rounded-full bg-gradient-to-r from-[#a13ddf] to-[#2BB2FC] text-white text-xs font-bold px-3 py-1">Most popular</span>}</div>
                <p className="mt-3 text-4xl font-extrabold">{t.p}<span className="text-base font-bold opacity-60">{t.u}</span></p>
                <p className={`mt-2 ${t.hot ? "text-white/70" : "text-[#626a6d]"}`}>{t.d}</p>
              </div>
              <ul className="space-y-2.5 text-[15px] font-bold">{t.f.map((f) => <li key={f} className="flex gap-2"><span className="text-[#7ab830]">✓</span> {f}</li>)}</ul>
              <PillButton href="/contact-us" variant={t.hot ? "primary" : "default"}>Subscribe now</PillButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  const faqs = [
    ["What XR services does the studio offer?", "VR simulators, AR guidance, digital twins, 3D configurators and Unity/Unreal/Omniverse development."],
    ["How long does an XR pilot take?", "A single-scenario MVP typically ships in 4–6 weeks including device setup and analytics."],
    ["Do you support offline / regulated sites?", "Yes — on-prem, air-gapped and MDM-managed fleets for defence, energy and pharma."],
    ["What headsets do you build for?", "Quest, Vive, Vision Pro, plus WebXR and mobile AR for zero-install reach."],
    ["Do you provide support after launch?", "Yes — fleet support, content updates and CoE enablement with SLAs."],
  ];
  const [open, setOpen] = useState(0);
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-[1320px] px-4 md:px-6">
        <SectionHead no="08" label="FAQs" title="XR questions, answered" />
        <div className="mt-10 max-w-3xl space-y-3">
          {faqs.map(([q, a], i) => (
            <div key={q} className={`rounded-[20px] border ${open === i ? "border-[#1F2A2E] bg-[#F4F8FA]" : "border-[#1F2A2E]/10 bg-white"}`}>
              <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full text-left px-6 py-5 font-extrabold text-lg flex justify-between items-center gap-4">{q}<span className="w-9 h-9 rounded-full bg-[#a13ddf] grid place-items-center shrink-0">{open === i ? "−" : "+"}</span></button>
              {open === i && <p className="px-6 pb-6 text-[#626a6d]">{a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function News() {
  const imgs = [XR.hero1, XR.lab, XR.industrial];
  return (
    <section className="py-16 md:py-24 bg-[#F4F8FA]">
      <div className="mx-auto max-w-[1320px] px-4 md:px-6">
        <SectionHead no="09" label="Resources" title="XR notes & launches" />
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {blogPosts.slice(0, 3).map((p, i) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group">
              <div className="relative overflow-hidden rounded-[20px] aspect-[16/10]">
                <Image src={imgs[i % imgs.length]} alt={p.title} fill className="object-cover group-hover:scale-105 transition duration-500" sizes="(max-width:768px) 100vw, 33vw" />
              </div>
              <p className="mt-4 text-sm text-[#626a6d] font-bold">{p.date}</p>
              <h3 className="mt-1 text-xl font-extrabold group-hover:underline">{p.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactCTA() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-[1320px] px-4 md:px-6">
        <div className="grid md:grid-cols-12 gap-6">
          <div className="md:col-span-4">
            <div className="flex items-center gap-4">
              <span className="w-9 h-9 rounded-full bg-[#a13ddf] grid place-items-center text-sm font-bold">10</span>
              <hr className="w-12 h-px bg-[#1F2A2E]/15 border-0" />
              <span className="rounded-full bg-[#1F2A2E] text-white px-3 py-1.5 text-xs font-bold uppercase">Contact us</span>
            </div>
          </div>
          <div className="md:col-span-8">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">Build XR together?</h2>
            <p className="mt-4 text-lg text-[#626a6d] max-w-xl">Tell us the skill, asset or line to transform — we&apos;ll propose an XR pilot scope in days.</p>
            <form className="mt-8 grid sm:grid-cols-[1fr_auto] gap-3 max-w-xl" onSubmit={(e) => e.preventDefault()}>
              <input required type="email" placeholder="Work email" className="h-[64px] rounded-full border border-[#1F2A2E]/15 px-6 font-bold outline-none focus:border-[#1F2A2E]" />
              <PillButton href="/contact-us">Submit message</PillButton>
            </form>
            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {capabilities.slice(0, 4).map((c) => (
                <Link key={c.slug} href={`/capabilities/${c.slug}`} className="rounded-[20px] border border-[#1F2A2E]/10 p-5 hover:border-[#1F2A2E] font-extrabold flex justify-between items-center">{c.title}<ArrowUpRight className="h-5 w-5" /></Link>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {services.map((s) => <Link key={s.slug} href={`/services/${s.slug}`} className="rounded-full border border-[#1F2A2E]/15 px-4 py-2 text-sm font-bold hover:bg-[#1F2A2E] hover:text-white">{s.title}</Link>)}
              {techSolutions.slice(0, 3).map((s) => <Link key={s.slug} href={`/technology-solutions/${s.slug}`} className="rounded-full border border-[#1F2A2E]/15 px-4 py-2 text-sm font-bold hover:bg-[#1F2A2E] hover:text-white">{s.title}</Link>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

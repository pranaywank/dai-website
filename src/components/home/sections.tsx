"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, animate, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHead, PillButton } from "@/components/ui/section";
import { capabilities, industries, techSolutions, services, caseStudies, blogPosts } from "@/lib/site";
import { XR_IMAGES as X, HERO_SLIDES } from "@/lib/images";

const XR = {
  hero1: HERO_SLIDES[0],
  hero2: X.heroDangerous,
  hero3: X.heroTwin,
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
    {
      img: XR.hero1,
      titleA: "Immersive XR Solutions",
      titleB: "for Real Business ROI",
      p: "Digital Agents is an XR studio in India building VR training simulators, AR field guidance and digital twins for manufacturing, defence, healthcare and energy — with measurable skill transfer from day one.",
    },
    {
      img: XR.hero2,
      titleA: "Practice Dangerous Work",
      titleB: "Safely in Virtual Reality",
      p: "What is VR safety training? Rehearsing high-risk jobs — UAV, medical, plant and tactical operations — with zero exposure, plus scoring, debrief and LMS analytics built in Unity & Unreal.",
    },
    {
      img: XR.hero3,
      titleA: "See Every Asset",
      titleB: "Live in 3D Digital Twins",
      p: "IoT-connected digital twins, 360 tours, vision-based quality checks and remote AR assistance that cut downtime and travel — deployed on-prem or cloud, across India.",
    },
  ];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, [slides.length]);
  const s = slides[idx];
  const go = (d: number) => setIdx((idx + d + slides.length) % slides.length);
  return (
    <section className="relative flex items-end min-h-[100svh] overflow-hidden bg-[#1F2A2E]">
      <AnimatePresence mode="sync">
        <motion.div key={idx} initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="absolute inset-0">
          <Image src={s.img} alt="XR headset in industrial training" fill priority className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F2A2E] via-[#1F2A2E]/55 to-[#1F2A2E]/25" />
        </motion.div>
      </AnimatePresence>
      <div className="relative z-10 wrap w-full pb-24 md:pb-28 pt-36">
        <AnimatePresence mode="wait">
          <motion.div key={idx} initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.5 }}>
            <h1 className="fluid-hero text-white font-extrabold leading-[0.95] tracking-tight text-balance">
              {s.titleA}
              <br />
              <span className="bg-gradient-to-r from-[#a13ddf] via-[#b45df0] to-[#2BB2FC] bg-clip-text text-transparent">{s.titleB}</span>
            </h1>
            <p className="mt-5 max-w-2xl text-white/70 text-base md:text-lg leading-relaxed">{s.p}</p>
            <p className="mt-3 text-[13px] md:text-sm text-white/50 font-bold tracking-wide">For mobile, web, Apple Vision Pro, Meta Quest & leading AR / VR / MR headsets</p>
          </motion.div>
        </AnimatePresence>
        <div className="mt-7">
          <Pill href="/contact-us">Start an XR project</Pill>
        </div>
      </div>
      <div className="absolute top-24 right-4 md:top-auto md:bottom-8 md:right-8 z-20 flex items-center gap-2">
        <button aria-label="Previous slide" onClick={() => go(-1)} className="w-9 h-9 rounded-full bg-white/10 backdrop-blur border border-white/20 grid place-items-center text-white text-sm hover:bg-white/25 transition">‹</button>
        <div className="flex gap-1.5 px-1 py-2 -m-1">{slides.map((_, i) => <button key={i} aria-label={`Slide ${i+1}`} onClick={() => setIdx(i)} className={`h-2 rounded-full transition-all ${i===idx ? "w-8 bg-gradient-to-r from-[#a13ddf] to-[#2BB2FC]" : "w-2 bg-white/30 hover:bg-white/50"}`} />)}</div>
        <button aria-label="Next slide" onClick={() => go(1)} className="w-9 h-9 rounded-full bg-white/10 backdrop-blur border border-white/20 grid place-items-center text-white text-sm hover:bg-white/25 transition">›</button>
      </div>
    </section>
  );
}

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, { duration: 1.8, ease: "easeOut", onUpdate: (v) => setVal(Math.round(v)) });
    return () => controls.stop();
  }, [inView, to]);
  return (
    <span ref={ref}>
      {val.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export function StatsFacts() {
  const stats: { v: number; suffix: string; t: string; d: string }[] = [
    { v: 300, suffix: "+", t: "Projects launched", d: "XR modules, twins & 3D apps shipped for industry." },
    { v: 2, suffix: "M+", t: "Users reached", d: "Learners, shoppers and attendees engaged globally." },
    { v: 98, suffix: "%", t: "Client satisfaction rate", d: "Long-term partnerships through proven results." },
    { v: 10, suffix: "+", t: "Years of expertise", d: "A decade delivering impactful XR solutions." },
  ];
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="wrap">
        <SectionHead no="01" label="Stats & facts" title="Our work speaks through numbers" desc="Here's what we've achieved so far — measured in shipped programs, reached users and retained clients." />
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.t} className="border-t-2 border-[#1F2A2E]/10 pt-6">
              <p className="text-5xl min-[1800px]:text-7xl font-extrabold grad-text">
                <CountUp to={s.v} suffix={s.suffix} />
              </p>
              <p className="mt-2 font-extrabold text-lg">{s.t}</p>
              <p className="mt-1 text-[#626a6d]">{s.d}</p>
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
      <div className="wrap">
        <SectionHead no="04" label="Portfolio" title="Featured XR projects" desc="VR training, AR assistance and twin deployments — original placeholder summaries in the reference sitemap's structure." />
      </div>
      <div className="mt-10 grid md:grid-cols-3 gap-6 wrap">
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
    { t: "VR Training Simulators", d: "Quest, Vive & Vision Pro sims with scoring and xAPI analytics.", img: XR.training, href: "/capabilities/virtual-reality-vr" },
    { t: "AR Guidance & Remote Assist", d: "CAD-anchored steps and expert calls on phones & glasses.", img: XR.lab, href: "/capabilities/augmented-reality-ar" },
    { t: "Digital Twins & 3D", d: "IoT-bound twins, 360 tours, configurators and vision QA.", img: XR.industrial, href: "/technology-solutions/digital-twin" },
    { t: "Unity / Unreal / Omniverse", d: "Real-time pipelines from MVP to plant-scale rollout.", img: XR.headset, href: "/digital-product-engineering" },
  ];
  const [active, setActive] = useState(2);
  return (
    <section className="py-20 md:py-32 bg-[#1F2A2E]" id="services">
      <div className="wrap grid lg:grid-cols-12 gap-14">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-white/50">02 — Services</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-white">What We Do</h2>
            <div className="relative overflow-hidden rounded-[20px] aspect-[4/3] mt-6">
              <AnimatePresence mode="wait">
                <motion.div key={active} initial={{ opacity: 0, scale: 1.03 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }} className="absolute inset-0">
                  <Image src={rows[active].img} alt={rows[active].t} fill className="object-cover" sizes="(max-width:1024px) 100vw, 33vw" />
                </motion.div>
              </AnimatePresence>
            </div>
            <AnimatePresence mode="wait">
              <motion.div key={active} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
                <p className="mt-6 text-sm font-bold text-white/50">{rows[active].t}</p>
                <p className="mt-2 text-white font-bold text-lg">{rows[active].d}</p>
                <Link href={rows[active].href} className="mt-4 inline-flex items-center gap-1.5 text-sm font-extrabold text-[#2BB2FC] hover:underline">Explore <ArrowUpRight className="h-4 w-4" /></Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div className="lg:col-span-8 flex flex-col justify-center">
          {rows.map((r, i) => (
            <button
              key={r.t}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              className={`group w-full text-left border-t border-white/10 last:border-b transition-colors ${i === rows.length - 1 ? "" : ""}`}
            >
              <span className="flex items-baseline gap-4 py-8 md:py-10">
                <span className={`text-3xl sm:text-4xl md:text-6xl min-[1800px]:text-7xl font-extrabold tracking-tight transition-colors duration-300 ${i === active ? "text-white" : "text-white/25 group-hover:text-white/60"}`}>
                  {r.t}
                </span>
                <span className={`text-xs md:text-sm font-extrabold transition-colors ${i === active ? "text-[#2BB2FC]" : "text-white/30"}`}>
                  {"{0"}{i + 1}{"}"}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyUs() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="wrap grid lg:grid-cols-12 gap-8">
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

export function KeywordMarquee() {
  const words = ["Augmented Reality", "Virtual Reality", "Mixed Reality", "Digital Twins", "Artificial Intelligence", "Unity", "Unreal Engine", "Meta Quest", "Vision Pro"];
  return (
    <div className="py-6 border-y border-[#1F2A2E]/10 bg-[#F4F8FA] overflow-hidden" aria-hidden>
      <div className="flex gap-10 w-max animate-[marquee_30s_linear_infinite]">
        {[...words, ...words].map((w, i) => (
          <span key={i} className="flex items-center gap-10 text-sm font-extrabold uppercase tracking-[0.2em] text-[#1F2A2E]/50 whitespace-nowrap">
            {w} <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#a13ddf] to-[#2BB2FC]" />
          </span>
        ))}
      </div>
    </div>
  );
}

export function ProcessSteps() {
  const steps = [
    { t: "Discover", d: "Workshops and site walkthroughs pin down users, risks and KPIs — ending in a fixed-scope pilot proposal.", img: XR.lab },
    { t: "Design", d: "UX flows, 3D art direction and clickable prototypes validated with end users before build.", img: XR.headset },
    { t: "Build", d: "Agile sprints on real devices with backend bindings, analytics and hardening for offline fleets.", img: XR.industrial },
    { t: "Scale", d: "Pilot cohorts measured against baselines, then templated rollout with training and SLAs.", img: XR.training },
  ];
  const [active, setActive] = useState(1);
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="wrap grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#626a6d]">05 — Process</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">Our process</h2>
            <p className="mt-3 text-[#626a6d]">Four steps from first workshop to scaled rollout.</p>
            <div className="relative overflow-hidden rounded-[20px] aspect-[4/3] mt-6">
              <AnimatePresence mode="wait">
                <motion.div key={active} initial={{ opacity: 0, scale: 1.03 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }} className="absolute inset-0">
                  <Image src={steps[active].img} alt={steps[active].t} fill className="object-cover" sizes="(max-width:1024px) 100vw, 33vw" />
                </motion.div>
              </AnimatePresence>
            </div>
            <AnimatePresence mode="wait">
              <motion.p key={active} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="mt-4 font-bold">
                {steps[active].t} — <span className="text-[#626a6d] font-medium">{steps[active].d}</span>
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
        <div className="lg:col-span-8 flex flex-col justify-center">
          {steps.map((s, i) => (
            <button
              key={s.t}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              className="group w-full text-left border-t border-[#1F2A2E]/10 last:border-b"
            >
              <span className="block py-5 md:py-7">
                <span className="flex items-baseline gap-3">
                  <span className={`text-3xl sm:text-4xl md:text-6xl min-[1800px]:text-7xl font-extrabold tracking-tight transition-colors duration-300 ${i === active ? "text-[#1F2A2E]" : "text-[#1F2A2E]/20 group-hover:text-[#1F2A2E]/50"}`}>
                    {s.t}
                  </span>
                  <span className={`text-xs md:text-sm font-extrabold transition-colors ${i === active ? "text-[#a13ddf]" : "text-[#1F2A2E]/30"}`}>
                    {"{0"}{i + 1}{"}"}
                  </span>
                </span>
                <span className={`block mt-2 max-w-xl transition-colors ${i === active ? "text-[#626a6d]" : "text-[#1F2A2E]/40"}`}>
                  {s.d}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TeamTeaser() {
  return (
    <section className="py-16 md:py-24 bg-[#1F2A2E]">
      <div className="wrap grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-white/50">06 — Team</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight text-white">Meet our team</h2>
          <p className="mt-4 text-lg text-white/70 max-w-lg">A diverse group of creators, strategists and developers driven by one passion — impactful XR.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {[["19", "Creators, strategists & engineers"], ["7+", "XR developers"], ["9+", "3D & experience designers"]].map(([v, l]) => (
              <div key={l} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                <p className="text-2xl font-extrabold text-white">{v}</p>
                <p className="text-xs text-white/60 font-bold">{l}</p>
              </div>
            ))}
          </div>
          <div className="mt-6"><PillButton href="/about-us" variant="outline">Meet our team</PillButton></div>
        </div>
        <div className="relative overflow-hidden rounded-[28px] aspect-[16/10]">
          <Image src={X.arLab} alt="XR studio team collaborating in the lab" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F2A2E]/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const items = [
    { q: "Immersive modules our operators actually enjoy — rollout was seamless.", who: "XR Training Lead", org: "Manufacturing", img: XR.training, metrics: [["+75%", "Retention"]] },
    { q: "The twin cut our troubleshooting time across three lines.", who: "Plant Head", org: "Energy", img: XR.industrial, metrics: [["-30%", "Downtime"], ["+22%", "Throughput"]] },
    { q: "Seven years of v-lab partnership — students worldwide benefit.", who: "University Partner", org: "Education", img: XR.headset, metrics: [["7yrs", "Partnership"]] },
  ];
  return (
    <section className="py-16 md:py-24 bg-[#F4F8FA]">
      <div className="wrap">
        <SectionHead no="07" label="Testimonial" title="Success stories" desc="Our work speaks for itself — our clients say it even better. (Sample quotes; replace with licensed testimonials.)" />
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <div key={t.who} className={`rounded-[20px] p-7 flex flex-col justify-between min-h-[320px] ${i === 1 ? "bg-[#1F2A2E] text-white" : i === 0 ? "bg-gradient-to-r from-[#a13ddf] to-[#2BB2FC] text-white" : "bg-white border border-[#1F2A2E]/10"}`}>
              <div>
                <div className="flex flex-wrap gap-2">
                  {t.metrics.map(([v, l]) => (
                    <span key={l} className={`rounded-full px-3 py-1 text-xs font-extrabold ${i === 2 ? "bg-[#1F2A2E] text-white" : "bg-white/20 text-white"}`}>{v} {l}</span>
                  ))}
                </div>
                <h4 className="mt-4 text-2xl font-bold leading-snug">“{t.q}”</h4>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <div className="relative w-[60px] h-[60px] rounded-full overflow-hidden shrink-0"><Image src={t.img} alt={t.who} fill className="object-cover" sizes="60px" /></div>
                <div><p className="font-bold">{t.who}</p><p className={`text-sm ${i === 2 ? "text-[#626a6d]" : "opacity-70"}`}>{t.org}</p></div>
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
      <div className="wrap">
        <SectionHead no="03" label="Industries" title="XR where it pays back fastest" desc="Same industry sitemap as the reference — each page rewritten with XR use-cases for SEO." />
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
      <div className="wrap">
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
      <div className="wrap grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7">
          <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#626a6d]">07 — FAQ</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">FAQs</h2>
          <p className="mt-3 text-lg text-[#626a6d]">Everything you need to know before starting an XR pilot.</p>
          <div className="mt-8 space-y-3">
            {faqs.map(([q, a], i) => (
              <div key={q} className={`rounded-[20px] border transition ${open === i ? "border-[#1F2A2E] bg-[#F4F8FA]" : "border-[#1F2A2E]/10 bg-white hover:border-[#1F2A2E]/30"}`}>
                <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full text-left px-6 py-5 font-extrabold text-lg flex justify-between items-center gap-4">{q}<span className={`w-9 h-9 rounded-full grid place-items-center shrink-0 text-white transition ${open === i ? "bg-[#1F2A2E] rotate-45" : "bg-gradient-to-r from-[#a13ddf] to-[#2BB2FC]"}`}>+</span></button>
                {open === i && <p className="px-6 pb-6 text-[#626a6d]">{a}</p>}
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28 space-y-5">
            <div className="relative overflow-hidden rounded-[24px] aspect-[4/3]">
              <Image src={XR.headset} alt="XR headset ready for a pilot program" fill className="object-cover" sizes="(max-width:1024px) 100vw, 40vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F2A2E]/70 to-transparent" />
              <p className="absolute bottom-5 left-5 right-5 text-white font-extrabold text-xl leading-snug">Pilots ship in weeks, not quarters.</p>
            </div>
            <div className="rounded-[24px] bg-[#1F2A2E] p-7 flex items-center justify-between gap-4">
              <div>
                <p className="text-white font-extrabold text-lg">Still have questions?</p>
                <p className="text-white/60 text-sm mt-0.5">A consultant replies within one business day.</p>
              </div>
              <Link href="/contact-us" className="w-[52px] h-[52px] rounded-full bg-gradient-to-r from-[#a13ddf] to-[#2BB2FC] grid place-items-center shrink-0 hover:brightness-110"><ArrowUpRight className="h-5 w-5 text-white" /></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function News() {
  const imgs = [XR.hero1, XR.lab, XR.industrial];
  return (
    <section className="py-16 md:py-24 bg-[#F4F8FA]">
      <div className="wrap">
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
      <div className="wrap">
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

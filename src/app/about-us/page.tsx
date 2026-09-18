import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/content/PageTemplate";
import { EnquiryForm } from "@/components/content/EnquiryForm";
import { LEADERSHIP, TEAM, initials, type Member } from "@/lib/team";
import { XR_IMAGES as X } from "@/lib/images";

const CLIENTS = ["Coca-Cola", "Walmart", "NPOL", "Purdue", "Siemens", "L&T", "Mahindra", "TVS", "Aditya Birla", "Tata"];

function ClientMarquee() {
  return (
    <section className="py-10 border-y border-[#1F2A2E]/10 bg-[#F4F8FA] overflow-hidden">
      <p className="text-center text-xs uppercase tracking-[0.24em] text-[#626a6d] font-bold">Trusted by industry leaders</p>
      <div className="mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-4 w-max animate-[marquee_28s_linear_infinite]">
          {[...CLIENTS, ...CLIENTS].map((b, i) => (
            <span key={i} className="rounded-full border border-[#1F2A2E]/10 bg-white px-6 py-2.5 text-sm font-bold text-[#1F2A2E] whitespace-nowrap">{b}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export const metadata: Metadata = {
  title: "About Digital Agents — XR Studio for Industry | Team & Mission",
  description: "Digital Agents Interactive is an XR studio building VR simulators, AR solutions, digital twins and AI for defence, energy, manufacturing, healthcare and more. Meet the leadership and team.",
  keywords: ["XR studio", "about digital agents", "VR development team", "AR VR company India"],
};

function MemberCard({ m }: { m: Member }) {
  return (
    <div className="group rounded-[24px] border border-[#1F2A2E]/10 bg-white overflow-hidden hover:border-[#a13ddf]/50 hover:shadow-xl transition">
      <div className="relative h-56 bg-gradient-to-br from-[#a13ddf]/15 via-[#F4F8FA] to-[#2BB2FC]/15 grid place-items-center overflow-hidden">
        {m.photo ? (
          <Image src={m.photo} alt={`${m.name} — ${m.role}`} fill className="object-cover group-hover:scale-105 transition duration-500" sizes="(max-width:768px) 50vw, 20vw" />
        ) : (
          <span className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#a13ddf] to-[#2BB2FC] text-white grid place-items-center text-2xl font-extrabold shadow-lg shadow-[#a13ddf]/30">
            {initials(m.name)}
          </span>
        )}
        {m.linkedin && (
          <Link href={m.linkedin} target="_blank" rel="noopener" aria-label={`${m.name} on LinkedIn`} className="absolute bottom-3 right-3 h-10 px-3 rounded-full bg-[#1F2A2E] text-white grid place-items-center opacity-0 group-hover:opacity-100 transition hover:bg-[#a13ddf] text-xs font-extrabold">
            in
          </Link>
        )}
      </div>
      <div className="p-5">
        <p className="font-extrabold text-[17px]">{m.name}</p>
        <p className="mt-0.5 text-sm font-bold text-[#626a6d]">{m.role}</p>
      </div>
    </div>
  );
}

const PILLARS = [
  { t: "Empowering Progress, Redefining Possibilities", d: "Cutting-edge XR, AI and twin technology applied to real industry problems — measured in competency, uptime and ROI." },
  { t: "Fueling Innovation with Purpose", d: "Deep industry insight plus advanced digital tooling, so every build maps to your goals and exceeds its brief." },
];

const PARTNERSHIPS = [
  { n: "01", t: "Businesses, Empowered Through Alliances", d: "Strategic partnerships across devices, engines and cloud that keep our delivery current and supported." },
  { n: "02", t: "Your Success, Our Shared Vision", d: "Co-delivery with agencies and consulting firms — white-label XR engineering behind shared client wins." },
  { n: "03", t: "Expertise, Multiplied by Partnership", d: "University and technology alliances that feed R&D back into every client program." },
];

export default function Page() {
  return (
    <main className="bg-white">
      <PageHero
        eyebrow="About Us"
        title="Where XR Technology Meets Industry Expertise"
        tagline="An XR studio for defence, energy, manufacturing, healthcare and beyond"
        description="Digital Agents Interactive designs and ships VR simulators, AR workflows, digital twins and AI copilots — from MVP pilots to multi-site rollouts with measurable outcomes."
        image={X.training}
        imageAlt="XR studio team collaborating on immersive training"
      />

      {/* Mission */}
      <section className="py-14 md:py-20 bg-white">
        <div className="mx-auto max-w-[1320px] px-4 md:px-6 grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative overflow-hidden rounded-[28px] aspect-[4/3] shadow-xl shadow-[#1F2A2E]/10">
            <Image src={X.arLab} alt="Engineers building XR solutions in the studio lab" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
          </div>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#626a6d]">Our mission</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">The Digital Blueprint for Your XR Success</h2>
            <p className="mt-4 text-lg text-[#1F2A2E]/80 leading-relaxed">We drive impactful growth through visionary immersive technology and trusted partnerships — aligning with leading organizations to deliver excellence that helps customers thrive.</p>
            <div className="mt-6 space-y-4">
              {PILLARS.map((p) => (
                <div key={p.t} className="flex gap-4 rounded-[20px] border border-[#1F2A2E]/10 bg-[#F4F8FA] p-5">
                  <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#a13ddf] to-[#2BB2FC] grid place-items-center shrink-0 text-white font-extrabold">✓</span>
                  <div>
                    <p className="font-extrabold">{p.t}</p>
                    <p className="mt-1 text-[#626a6d]">{p.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/contact-us" className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#1F2A2E] text-white pl-6 pr-1.5 py-1.5 text-sm font-bold min-h-[52px]">Speak to our experts<span className="w-10 h-10 rounded-full bg-gradient-to-r from-[#a13ddf] to-[#2BB2FC] grid place-items-center"><ArrowUpRight className="h-4 w-4" /></span></Link>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-14 md:py-20 bg-[#1F2A2E]">
        <div className="mx-auto max-w-[1320px] px-4 md:px-6">
          <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-white/50">Partners</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight text-white max-w-2xl">Partnerships that Drive Innovation and Success</h2>
          <p className="mt-4 text-lg text-white/70 max-w-2xl">Progress is built through strong, strategic partnerships — aligning with the best to deliver unmatched value and support.</p>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {PARTNERSHIPS.map((p, i) => (
              <div key={p.n} className={`rounded-[24px] p-8 ${i === 0 ? "bg-gradient-to-br from-[#a13ddf] to-[#2BB2FC] text-white" : "bg-white/5 border border-white/10 text-white"}`}>
                <p className={`text-sm font-extrabold ${i === 0 ? "text-white/80" : "text-[#2BB2FC]"}`}>{p.n}</p>
                <h3 className="mt-3 text-2xl font-extrabold">{p.t}</h3>
                <p className={`mt-2.5 ${i === 0 ? "text-white/85" : "text-white/65"}`}>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 md:py-20 bg-white">
        <div className="mx-auto max-w-[1320px] px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight max-w-2xl">Empowering Growth with Innovative XR Solutions</h2>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[["10+", "Years in Business"], ["300+", "Projects Completed"], ["120+", "Happy Clients"], ["100%", "Dedicated Success"]].map(([v, l]) => (
              <div key={l} className="border-t-2 border-[#1F2A2E]/10 pt-6">
                <p className="text-5xl md:text-6xl font-extrabold grad-text">{v}</p>
                <p className="mt-2 font-bold text-[#626a6d]">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClientMarquee />

      {/* Leadership */}
      <section className="py-14 md:py-20 bg-white" id="leadership">
        <div className="mx-auto max-w-[1320px] px-4 md:px-6">
          <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#626a6d]">Leadership</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">Our Leadership</h2>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {LEADERSHIP.map((m) => <MemberCard key={m.name} m={m} />)}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-14 md:py-20 bg-[#F4F8FA]">
        <div className="mx-auto max-w-[1320px] px-4 md:px-6">
          <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#626a6d]">Studio</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">Our Team</h2>
          <p className="mt-4 text-lg text-[#626a6d] max-w-2xl">Engineers, artists, instructional designers and program managers behind every XR rollout.</p>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {TEAM.map((m) => <MemberCard key={m.name} m={m} />)}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-14 md:py-20 bg-white">
        <div className="mx-auto max-w-[1320px] px-4 md:px-6 grid lg:grid-cols-[1fr_1.4fr] gap-8 items-start">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Get In Touch</h2>
            <p className="mt-4 text-lg text-[#626a6d]">Tell us where XR could move the needle — we reply with a scoped next step.</p>
          </div>
          <EnquiryForm subject="About / General" />
        </div>
      </section>
    </main>
  );
}

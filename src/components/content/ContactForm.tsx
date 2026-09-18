"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const INTERESTS = ["VR Training Simulator", "AR Guidance / Remote Assist", "Digital Twin", "3D / Metaverse Experience", "AI Solution", "Game Development", "XR Centre of Excellence", "Something else"];

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  if (sent) {
    return (
      <div className="rounded-[28px] bg-[#1F2A2E] text-white p-10 md:p-14 text-center">
        <span className="mx-auto w-14 h-14 rounded-full bg-gradient-to-r from-[#a13ddf] to-[#2BB2FC] grid place-items-center text-2xl font-extrabold">✓</span>
        <h3 className="mt-5 text-2xl md:text-3xl font-extrabold">Thank you! We will reach out to you soon.</h3>
        <p className="mt-2 text-white/70">A consultant replies within one business day. (Demo form — connect to your CRM/endpoint.)</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); try { setSent(true); } catch { setError(true); } }}
      className="rounded-[28px] bg-[#1F2A2E] text-white p-8 md:p-10 grid sm:grid-cols-2 gap-4"
    >
      <h3 className="sm:col-span-2 text-2xl font-extrabold">Get in Touch</h3>
      <p className="sm:col-span-2 text-white/60 -mt-2">We&apos;re available to answer your questions and provide the support you need.</p>
      <input required placeholder="Name" className="h-[60px] rounded-2xl bg-white/5 border border-white/15 px-5 font-bold outline-none focus:border-[#2BB2FC] placeholder:text-white/40" />
      <input required type="email" placeholder="Email" className="h-[60px] rounded-2xl bg-white/5 border border-white/15 px-5 font-bold outline-none focus:border-[#2BB2FC] placeholder:text-white/40" />
      <input placeholder="Job Title" className="h-[60px] rounded-2xl bg-white/5 border border-white/15 px-5 font-bold outline-none focus:border-[#2BB2FC] placeholder:text-white/40" />
      <input placeholder="Organization" className="h-[60px] rounded-2xl bg-white/5 border border-white/15 px-5 font-bold outline-none focus:border-[#2BB2FC] placeholder:text-white/40" />
      <div className="sm:col-span-2">
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-white/50 mb-2">I&apos;m interested in</p>
        <div className="flex flex-wrap gap-2">
          {INTERESTS.map((t, i) => (
            <label key={t} className="cursor-pointer">
              <input type="checkbox" defaultChecked={i === 0} className="peer sr-only" />
              <span className="inline-block rounded-full border border-white/20 px-4 py-2 text-sm font-bold peer-checked:bg-gradient-to-r peer-checked:from-[#a13ddf] peer-checked:to-[#2BB2FC] peer-checked:border-transparent peer-checked:text-white transition">{t}</span>
            </label>
          ))}
        </div>
      </div>
      <textarea required rows={4} placeholder="Enter your QUERY" className="sm:col-span-2 rounded-2xl bg-white/5 border border-white/15 px-5 py-4 font-bold outline-none focus:border-[#2BB2FC] placeholder:text-white/40" />
      <label className="sm:col-span-2 flex items-start gap-2.5 text-xs text-white/60">
        <input required type="checkbox" className="mt-0.5 accent-[#a13ddf]" />
        <span>I agree to Digital Agents Interactive Pvt. Ltd.&apos;s <Link href="/terms-of-use" className="underline">Terms of Use</Link> & <Link href="/privacy-policy" className="underline">Privacy Policy</Link>.</span>
      </label>
      {error && <p className="sm:col-span-2 text-sm font-bold text-red-400">Please try again.</p>}
      <button type="submit" className="sm:col-span-2 inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#a13ddf] to-[#2BB2FC] pl-7 pr-2 py-2 text-[15px] font-bold min-h-[64px] hover:brightness-110">
        Submit Now
        <span className="w-[52px] h-[52px] rounded-full bg-white text-[#1F2A2E] grid place-items-center"><ArrowUpRight className="h-5 w-5" /></span>
      </button>
    </form>
  );
}

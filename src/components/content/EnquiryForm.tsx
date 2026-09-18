"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function EnquiryForm({ subject }: { subject: string }) {
  const [sent, setSent] = useState(false);
  if (sent) {
    return (
      <div className="rounded-[24px] bg-[#F4F8FA] border border-[#1F2A2E]/10 p-8 text-center">
        <span className="mx-auto w-12 h-12 rounded-full bg-gradient-to-r from-[#a13ddf] to-[#2BB2FC] text-white grid place-items-center text-xl font-extrabold">✓</span>
        <p className="mt-4 font-extrabold text-xl">Thank you! We will reach out to you soon.</p>
        <p className="mt-1 text-[#626a6d]">Your {subject} enquiry has been noted. (Demo form — wire to your CRM.)</p>
      </div>
    );
  }
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSent(true); }}
      className="rounded-[24px] bg-[#1F2A2E] text-white p-8 grid sm:grid-cols-2 gap-4"
    >
      <input required placeholder="Name" className="h-[60px] rounded-2xl bg-white/5 border border-white/15 px-5 font-bold outline-none focus:border-[#2BB2FC] placeholder:text-white/40" />
      <input required type="email" placeholder="Email" className="h-[60px] rounded-2xl bg-white/5 border border-white/15 px-5 font-bold outline-none focus:border-[#2BB2FC] placeholder:text-white/40" />
      <input placeholder="Job Title" className="h-[60px] rounded-2xl bg-white/5 border border-white/15 px-5 font-bold outline-none focus:border-[#2BB2FC] placeholder:text-white/40" />
      <input placeholder="Organization" className="h-[60px] rounded-2xl bg-white/5 border border-white/15 px-5 font-bold outline-none focus:border-[#2BB2FC] placeholder:text-white/40" />
      <textarea required rows={4} placeholder="Enter your QUERY" className="sm:col-span-2 rounded-2xl bg-white/5 border border-white/15 px-5 py-4 font-bold outline-none focus:border-[#2BB2FC] placeholder:text-white/40" />
      <label className="sm:col-span-2 flex items-start gap-2.5 text-xs text-white/60">
        <input required type="checkbox" className="mt-0.5 accent-[#a13ddf]" />
        <span>I agree to Digital Agents Interactive Pvt. Ltd.&apos;s <Link href="/terms-of-use" className="underline">Terms of Use</Link> & <Link href="/privacy-policy" className="underline">Privacy Policy</Link>.</span>
      </label>
      <button type="submit" className="sm:col-span-2 inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#a13ddf] to-[#2BB2FC] pl-7 pr-2 py-2 text-[15px] font-bold min-h-[64px] hover:brightness-110">
        Submit
        <span className="w-[52px] h-[52px] rounded-full bg-white text-[#1F2A2E] grid place-items-center"><ArrowUpRight className="h-5 w-5" /></span>
      </button>
    </form>
  );
}

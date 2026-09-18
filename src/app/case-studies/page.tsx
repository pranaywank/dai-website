import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/content/PageTemplate";
import { CaseGrid } from "@/components/content/CaseGrid";
import { EnquiryForm } from "@/components/content/EnquiryForm";

export const metadata: Metadata = {
  title: "Case Studies — XR, AI, Digital Twin & Simulator Success Stories",
  description: "Explore XR, AI, digital twin and simulator success stories across defence, manufacturing, healthcare, retail, education and more. Filter by industry and technology.",
  keywords: ["XR case studies", "VR training case study", "digital twin case study", "AI case study"],
};

export default function Page() {
  return (
    <main className="bg-white">
      <PageHero
        eyebrow="Work"
        title="Case Studies"
        tagline="XR, AI, digital twin & simulator success stories"
        description="Twenty-nine programs across defence, manufacturing, healthcare, retail, education and more — filter by industry or technology, then open any story for the full challenge-to-impact narrative."
      />
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-[1320px] px-4 md:px-6">
          <CaseGrid />
        </div>
      </section>
      <section className="pb-14 md:pb-20 bg-white">
        <div className="mx-auto max-w-[1320px] px-4 md:px-6 grid lg:grid-cols-[1fr_1.4fr] gap-8 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Get In Touch</h2>
            <p className="mt-3 text-lg text-[#626a6d]">Want results like these? Tell us your goal — we reply with a scoped pilot.</p>
            <Link href="/contact-us" className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-[#a13ddf] hover:underline">Or use the full contact page <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
          <EnquiryForm subject="Case-study enquiry" />
        </div>
      </section>
    </main>
  );
}

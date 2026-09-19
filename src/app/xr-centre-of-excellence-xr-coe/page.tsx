import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/content/PageTemplate";
import { XR_COE_GALLERY } from "@/lib/images";

const PILLARS = [
  { t: "Lab design & fleet", d: "Device selection, MDM, hygiene and space planning for your XR lab." },
  { t: "Content roadmap", d: "Prioritized scenario backlog from MVP pilots to full curricula." },
  { t: "Faculty enablement", d: "Train-the-trainer programs and authoring certification." },
  { t: "ROI governance", d: "KPIs, stage gates and scale-up funding criteria." },
];

export default function Page() {
  return (
    <main className="bg-white">
      <PageHero
        eyebrow="Advisory"
        title="XR Centre of Excellence"
        tagline="Labs, curriculum & governance"
        description="Set up an XR CoE: lab design, device fleet, content roadmap, faculty enablement and ROI governance."
        image={XR_COE_GALLERY[0]}
        imageAlt="XR Centre of Excellence lab with immersive equipment"
      />
      <section className="py-14 bg-white">
        <div className="wrap">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {XR_COE_GALLERY.map((g, i) => (
              <div key={g} className={`relative overflow-hidden rounded-[20px] h-52 md:h-64 group ${i === 0 ? "col-span-2 md:row-span-1" : ""}`}>
                <Image src={g} alt={`XR Centre of Excellence facility ${i + 1}`} fill className="object-cover group-hover:scale-105 transition duration-500" sizes="(max-width:768px) 100vw, 33vw" />
              </div>
            ))}
          </div>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {PILLARS.map((p, i) => (
              <div key={p.t} className="rounded-[24px] border border-[#1F2A2E]/10 bg-[#F4F8FA] p-6">
                <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#a13ddf] to-[#2BB2FC] text-white grid place-items-center font-extrabold">0{i + 1}</span>
                <p className="mt-4 font-extrabold text-lg">{p.t}</p>
                <p className="mt-1.5 text-[#626a6d]">{p.d}</p>
              </div>
            ))}
          </div>
          <Link href="/contact-us" className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#1F2A2E] text-white pl-6 pr-1.5 py-1.5 text-sm font-bold min-h-[52px]">Plan your CoE<span className="w-10 h-10 rounded-full bg-gradient-to-r from-[#a13ddf] to-[#2BB2FC] grid place-items-center"><ArrowUpRight className="h-4 w-4" /></span></Link>
        </div>
      </section>
    </main>
  );
}

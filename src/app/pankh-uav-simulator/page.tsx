import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/content/PageTemplate";
import { XR_IMAGES as X } from "@/lib/images";

const MODULES = [
  { t: "Basic flight & hover", d: "Takeoff, hover, orientation and landing fundamentals." },
  { t: "Mission & payload drills", d: "Waypoint missions, payload ops and emergency handling." },
  { t: "Assessment & debrief", d: "Scored sorties with instructor replay and analytics." },
];

export default function Page() {
  return (
    <main className="bg-white">
      <PageHero
        eyebrow="Product"
        title="Pankh UAV Simulator"
        tagline="Drone pilot training, sim-first"
        description="Stick-time without crash cost: flight modes, payload drills, wind scenarios and instructor scoring."
        image={X.rocket}
        imageAlt="Pankh UAV simulator for drone pilot training"
      />
      <section className="py-14 bg-white">
        <div className="wrap grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative overflow-hidden rounded-[28px] aspect-[4/3] shadow-xl shadow-[#1F2A2E]/10">
            <Image src={X.rocket} alt="UAV training scenario in Pankh simulator" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Crash in VR, fly with confidence</h2>
            <p className="mt-4 text-lg text-[#626a6d]">Pankh builds pilot muscle-memory across flight modes, weather and failures — every sortie scored and debriefed.</p>
            <div className="mt-6 space-y-4">
              {MODULES.map((m, i) => (
                <div key={m.t} className="flex gap-4 rounded-[20px] border border-[#1F2A2E]/10 bg-[#F4F8FA] p-5">
                  <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#a13ddf] to-[#2BB2FC] text-white grid place-items-center font-extrabold shrink-0">0{i + 1}</span>
                  <div>
                    <p className="font-extrabold">{m.t}</p>
                    <p className="mt-0.5 text-[#626a6d]">{m.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/contact-us" className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#1F2A2E] text-white pl-6 pr-1.5 py-1.5 text-sm font-bold min-h-[52px]">Request a demo<span className="w-10 h-10 rounded-full bg-gradient-to-r from-[#a13ddf] to-[#2BB2FC] grid place-items-center"><ArrowUpRight className="h-4 w-4" /></span></Link>
          </div>
        </div>
      </section>
    </main>
  );
}

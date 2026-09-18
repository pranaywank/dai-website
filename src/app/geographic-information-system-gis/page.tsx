import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/content/PageTemplate";
import { XR_IMAGES as X } from "@/lib/images";

const LAYERS = ["Asset mapping", "Field data apps", "Twin bindings", "Spatial analytics"];

export default function Page() {
  return (
    <main className="bg-white">
      <PageHero
        eyebrow="Product"
        title="Geographic Information System"
        tagline="Spatial intelligence for operations"
        description="GIS layers, asset mapping and field apps bound to your digital twin."
        image={X.servers}
        imageAlt="GIS spatial intelligence platform with asset mapping"
      />
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-[1320px] px-4 md:px-6 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Every asset, on the map and in 3D</h2>
            <p className="mt-4 text-lg text-[#626a6d]">Plan routes, inspect clusters and dispatch crews from one spatial view — synced with the twin.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {LAYERS.map((l) => (
                <span key={l} className="rounded-full border border-[#1F2A2E]/15 bg-[#F4F8FA] px-4 py-2 text-sm font-bold">{l}</span>
              ))}
            </div>
            <Link href="/contact-us" className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#1F2A2E] text-white pl-6 pr-1.5 py-1.5 text-sm font-bold min-h-[52px]">Request a demo<span className="w-10 h-10 rounded-full bg-gradient-to-r from-[#a13ddf] to-[#2BB2FC] grid place-items-center"><ArrowUpRight className="h-4 w-4" /></span></Link>
          </div>
          <div className="relative overflow-hidden rounded-[28px] aspect-[4/3] shadow-xl shadow-[#1F2A2E]/10">
            <Image src={X.servers} alt="GIS operations dashboard" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
          </div>
        </div>
      </section>
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/site";
import { XR_IMAGES as X } from "@/lib/images";
import { PageHero } from "@/components/content/PageTemplate";
import { EnquiryForm } from "@/components/content/EnquiryForm";

const TRACKS = [
  { t: "Discover", d: "Workshops, site visits and KPI definition." },
  { t: "Design", d: "UX, 3D art direction and prototypes." },
  { t: "Build", d: "Agile engineering with device testing." },
  { t: "Integrate", d: "IoT, LMS, CRM and analytics bindings." },
  { t: "Scale", d: "Fleet rollout with MDM and SLAs." },
];

export default function Page() {
  return (
    <main className="bg-white">
      <PageHero
        eyebrow="Services"
        title="Digital Product Engineering"
        tagline="Concept to market, engineered"
        description="Discovery, UX, build, integration and scale — with Unity, Unreal, web and AI under one roof."
        image={X.heroFreepik}
        imageAlt="Digital product engineering team building XR applications"
      />
      <section className="py-14 bg-white">
        <div className="wrap">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Engineering tracks</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group rounded-[20px] border border-[#1F2A2E]/10 bg-[#F4F8FA] overflow-hidden hover:border-[#a13ddf] hover:shadow-lg transition">
                <div className="relative h-36 overflow-hidden">
                  <Image src={s.image} alt={s.title} fill className="object-cover group-hover:scale-105 transition duration-500" sizes="(max-width:768px) 100vw, 25vw" />
                </div>
                <div className="p-5">
                  <p className="font-extrabold">{s.title}</p>
                  <p className="text-sm text-[#626a6d] mt-1">{s.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-14 bg-[#F4F8FA]">
        <div className="wrap grid lg:grid-cols-[1fr_1.5fr] gap-8 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">How engagements run</h2>
            <p className="mt-3 text-[#626a6d]">Five tracks from first workshop to scaled product.</p>
          </div>
          <div className="space-y-0">
            {TRACKS.map((t, i) => (
              <div key={t.t} className="relative flex gap-4 pb-6 last:pb-0">
                <div className="flex flex-col items-center">
                  <span className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#a13ddf] to-[#2BB2FC] text-white grid place-items-center font-extrabold shrink-0">{i + 1}</span>
                  {i < TRACKS.length - 1 && <span className="w-px flex-1 bg-[#1F2A2E]/10 mt-1" />}
                </div>
                <div className="rounded-[20px] border border-[#1F2A2E]/10 bg-white px-6 py-4 flex-1">
                  <p className="font-extrabold">{t.t}</p>
                  <p className="text-sm text-[#626a6d]">{t.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="pb-14 md:pb-20 bg-[#F4F8FA]">
        <div className="wrap grid lg:grid-cols-[1fr_1.4fr] gap-8 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Start your build</h2>
            <p className="mt-3 text-[#626a6d]">Tell us the outcome — we reply with a scoped proposal.</p>
            <Link href="/case-studies" className="mt-4 inline-flex items-center gap-1.5 text-sm font-extrabold text-[#a13ddf] hover:underline">See proof first <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
          <EnquiryForm subject="Digital Product Engineering" />
        </div>
      </section>
    </main>
  );
}

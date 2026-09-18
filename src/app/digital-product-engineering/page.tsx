import Link from "next/link";
import { services } from "@/lib/site";
import { PageHero } from "@/components/content/PageTemplate";
export default function Page() {
  return (<main className="bg-white"><PageHero eyebrow="Services" title="Digital Product Engineering" tagline="Concept to market, engineered" description="Discovery, UX, build, integration and scale — with Unity, Unreal, web and AI under one roof." /><section className="pb-20"><div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-4">{services.map((s)=>(<Link key={s.slug} href={`/services/${s.slug}`} className="rounded-2xl border border-[#1F2A2E]/10 bg-[#F4F8FA] p-6 text-white hover:border-[#a13ddf]/50"><p className="font-semibold">{s.title}</p><p className="text-sm text-[#626a6d] mt-1">{s.tagline}</p></Link>))}</div></section></main>);
}

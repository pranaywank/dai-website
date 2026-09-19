import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/lib/site";
import { XR_IMAGES as X } from "@/lib/images";
import { PageHero } from "@/components/content/PageTemplate";

const THUMBS = [X.heroFreepik, X.engineerTwin, X.factory, X.store, X.classroom];

export default function Page() {
  const [featured, ...rest] = blogPosts;
  return (
    <main className="bg-white">
      <PageHero eyebrow="Resources" title="Blogs" tagline="XR, digital & delivery notes" description="Practical notes on XR pilots, digital twins, CMS platforms and scaling immersive programs." />
      <section className="py-14 bg-white">
        <div className="wrap">
          <Link href={`/blog/${featured.slug}`} className="group grid lg:grid-cols-2 gap-6 rounded-[28px] border border-[#1F2A2E]/10 bg-[#F4F8FA] overflow-hidden hover:border-[#a13ddf]/50 hover:shadow-xl transition">
            <div className="relative min-h-[280px]">
              <Image src={THUMBS[0]} alt={featured.title} fill className="object-cover group-hover:scale-105 transition duration-500" sizes="(max-width:1024px) 100vw, 50vw" />
              <span className="absolute top-4 left-4 rounded-full bg-[#1F2A2E]/85 backdrop-blur text-white text-xs font-extrabold px-3.5 py-1.5">Featured</span>
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <p className="text-sm font-bold text-[#626a6d]">{featured.date}</p>
              <h2 className="mt-2 text-2xl md:text-4xl font-extrabold tracking-tight group-hover:underline">{featured.title}</h2>
              <p className="mt-3 text-[#626a6d] text-lg">{featured.excerpt}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 font-extrabold text-[#a13ddf]">Read article <ArrowUpRight className="h-4 w-4" /></span>
            </div>
          </Link>
          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {rest.map((p, i) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group rounded-[20px] border border-[#1F2A2E]/10 bg-white overflow-hidden hover:border-[#a13ddf] hover:shadow-lg transition">
                <div className="relative h-40 overflow-hidden">
                  <Image src={THUMBS[(i + 1) % THUMBS.length]} alt={p.title} fill className="object-cover group-hover:scale-105 transition duration-500" sizes="(max-width:768px) 100vw, 25vw" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-bold text-[#626a6d]">{p.date}</p>
                  <h3 className="mt-1.5 font-extrabold text-[17px] leading-snug group-hover:underline">{p.title}</h3>
                  <p className="mt-1.5 text-sm text-[#626a6d] line-clamp-2">{p.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

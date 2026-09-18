import Link from "next/link";
import { blogPosts } from "@/lib/site";
import { PageHero } from "@/components/content/PageTemplate";

export default function Page() {
  return (
    <main className="bg-white">
      <PageHero eyebrow="Resources" title="Blogs" tagline="CMS, digital & immersive notes" description="Five starter posts matching the original sitemap slugs." />
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-4">
          {blogPosts.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="rounded-2xl border border-[#1F2A2E]/10 bg-[#F4F8FA] p-6 hover:border-[#a13ddf]/50 transition">
              <p className="text-xs text-[#626a6d]">{p.date}</p>
              <h3 className="mt-2 text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-1.5 text-sm text-[#626a6d]">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

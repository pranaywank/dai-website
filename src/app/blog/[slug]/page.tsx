import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/site";
import { PageHero } from "@/components/content/PageTemplate";
import { EnquiryForm } from "@/components/content/EnquiryForm";

export function generateStaticParams() {
  return blogPosts.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((s) => s.slug === slug);
  if (!post) return {};
  return { title: `${post.title} | Digital Agents Blog`, description: post.excerpt, keywords: ["XR blog", post.title] };
}

const TAKEAWAYS = ["The short answer up front", "Options compared honestly", "What we'd recommend", "Your next step"];

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((s) => s.slug === slug);
  if (!post) return notFound();
  const others = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <main className="bg-white">
      <PageHero eyebrow={`Blog — ${post.date}`} title={post.title} tagline={post.excerpt} description="Practical XR and digital-delivery notes from our studio. Starter article — replace with long-form CMS content before launch." crumbs={[{ label: "Blogs", href: "/blogs" }]} />
      <section className="py-14 bg-white">
        <div className="wrap grid lg:grid-cols-[1.5fr_1fr] gap-8 items-start">
          <article className="rounded-[24px] border border-[#1F2A2E]/10 bg-[#F4F8FA] p-8 md:p-10">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#626a6d]">In this article</p>
            <ul className="mt-4 space-y-2.5">
              {TAKEAWAYS.map((t, i) => (
                <li key={t} className="flex gap-3 font-bold">
                  <span className="w-7 h-7 rounded-lg bg-[#1F2A2E] text-white grid place-items-center text-xs font-extrabold shrink-0">{i + 1}</span>
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-4 text-[#1F2A2E]/80 leading-relaxed">
              <p>This starter article covers {post.title.toLowerCase()}: the problem teams face, the options available, our recommendation from XR delivery experience, and a checklist to act on.</p>
              <p>Publish the full version with screenshots, data and customer proof — then link it from relevant service and industry pages to convert readers into pipeline.</p>
            </div>
            <Link href="/blogs" className="mt-6 inline-flex items-center gap-1.5 text-sm font-extrabold text-[#a13ddf] hover:underline"><ArrowLeft className="h-4 w-4" /> All articles</Link>
          </article>
          <aside className="space-y-5 lg:sticky lg:top-28">
            <div className="rounded-[24px] bg-[#1F2A2E] text-white p-7">
              <p className="font-extrabold text-lg">Need this done for you?</p>
              <p className="mt-1 text-sm text-white/65">A 30-minute call scopes your pilot.</p>
              <Link href="/contact-us" className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#a13ddf] to-[#2BB2FC] pl-5 pr-1.5 py-1.5 text-sm font-bold">Talk to us <span className="w-8 h-8 rounded-full bg-white text-[#1F2A2E] grid place-items-center"><ArrowUpRight className="h-4 w-4" /></span></Link>
            </div>
            <div className="rounded-[24px] border border-[#1F2A2E]/10 bg-white p-7">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#626a6d]">Keep reading</p>
              <div className="mt-3 space-y-3">
                {others.map((o) => (
                  <Link key={o.slug} href={`/blog/${o.slug}`} className="block font-extrabold hover:underline">{o.title}</Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
      <section className="pb-14 md:pb-20 bg-white">
        <div className="wrap grid lg:grid-cols-[1fr_1.4fr] gap-8 items-start">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight">Discuss this topic</h2>
            <p className="mt-3 text-[#626a6d]">Questions on {post.title.toLowerCase()}? Ask directly.</p>
          </div>
          <EnquiryForm subject={post.title} />
        </div>
      </section>
    </main>
  );
}

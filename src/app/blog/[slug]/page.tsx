import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/site";
import { PageHero } from "@/components/content/PageTemplate";

export function generateStaticParams() {
  return blogPosts.map((s) => ({ slug: s.slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((s) => s.slug === slug);
  if (!post) return notFound();
  return (
    <main className="bg-white">
      <PageHero eyebrow={`Blog — ${post.date}`} title={post.title} tagline={post.excerpt} description="Original placeholder article. Replace with your CMS-driven long-form content, code samples and diagrams." />
      <section className="pb-20">
        <div className="mx-auto max-w-3xl px-6 prose prose-invert">
          <div className="rounded-2xl border border-[#1F2A2E]/10 bg-[#F4F8FA] p-8 space-y-4 text-[#1F2A2E] text-[15px] leading-relaxed">
            <p>This is a starter article layout covering the sitemap URL. Structure: problem, options, recommendation, checklist and next steps.</p>
            <p>Add real screenshots, metrics and CTAs to enquiry pages to convert readers into pipeline.</p>
            <Link href="/blogs" className="inline-block text-violet-200 text-sm font-semibold">← All articles</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

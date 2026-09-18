import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { industries } from "@/lib/site";
import { IndustryDetail } from "@/components/content/IndustryDetail";

export function generateStaticParams() {
  return industries.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = industries.find((s) => s.slug === slug);
  if (!page) return {};
  return {
    title: `XR for ${page.title} | Digital Agents XR Studio`,
    description: page.description,
    keywords: page.keywords,
    openGraph: { title: page.title, description: page.tagline, images: [{ url: page.image }] },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = industries.find((s) => s.slug === slug);
  if (!page) return notFound();
  const { icon: _icon, ...rest } = page;
  return (
    <main className="bg-white">
      <IndustryDetail page={rest} />
    </main>
  );
}

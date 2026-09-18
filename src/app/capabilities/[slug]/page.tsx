import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { capabilities } from "@/lib/site";
import { CapabilityDetail } from "@/components/content/CapabilityDetail";

export function generateStaticParams() {
  return capabilities.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = capabilities.find((s) => s.slug === slug);
  if (!page) return {};
  return {
    title: `${page.title} | Digital Agents XR Studio`,
    description: page.description,
    keywords: page.keywords,
    openGraph: { title: page.title, description: page.tagline, images: [{ url: page.image }] },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = capabilities.find((s) => s.slug === slug);
  if (!page) return notFound();
  const { icon: _icon, ...rest } = page;
  return (
    <main className="bg-white">
      <CapabilityDetail page={rest} />
    </main>
  );
}

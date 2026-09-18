import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/lib/site";
import { ServiceDetail } from "@/components/content/ServiceDetail";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = services.find((s) => s.slug === slug);
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
  const page = services.find((s) => s.slug === slug);
  if (!page) return notFound();
  const { icon: _icon, ...rest } = page;
  return (
    <main className="bg-white">
      <ServiceDetail
        page={rest}
        siblings={services.filter((s) => s.slug !== slug).map((s) => ({ title: s.title, href: `/services/${s.slug}` }))}
      />
    </main>
  );
}

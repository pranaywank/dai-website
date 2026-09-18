import { PageHero } from "@/components/content/PageTemplate";

function Simple({ title, body }: { title: string; body: string }) {
  return (
    <main className="bg-zinc-950">
      <PageHero eyebrow="Legal" title={title} tagline="Original placeholder copy" description={body} />
      <section className="pb-20"><div className="mx-auto max-w-3xl px-6 text-sm text-zinc-400 leading-relaxed rounded-2xl border border-white/10 bg-white/[0.02] p-8">{body}</div></section>
    </main>
  );
}

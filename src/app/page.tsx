import {
  Hero,
  StatsFacts,
  KeywordMarquee,
  FeaturedProjects,
  ServicesDark,
  ProcessSteps,
  Testimonials,
  IndustriesXR,
  Faq,
  ContactCTA,
} from "@/components/home/sections";

export default function Home() {
  return (
    <main className="bg-white text-[#1F2A2E]">
      <Hero />
      <StatsFacts />
      <KeywordMarquee />
      <ServicesDark />
      <IndustriesXR />
      <FeaturedProjects />
      <ProcessSteps />
      <Testimonials />
      <Faq />
      <ContactCTA />
    </main>
  );
}

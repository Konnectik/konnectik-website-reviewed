import { Hero } from "@/components/Hero";
import { AudienceSection } from "@/components/AudienceSection";
import { LearnMore } from "@/components/LearnMore";
import { ExpansionJourney } from "@/components/ExpansionJourney";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { BlogSection } from "@/components/BlogSection";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <AudienceSection />
      <LearnMore />
      <ExpansionJourney />
      <HowItWorks />
      <Features />
      <BlogSection />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;

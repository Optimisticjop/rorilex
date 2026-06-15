import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Industries from "@/components/sections/Industries";
import Features from "@/components/sections/Features";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Industries />
      <Features />
      <CTA />
    </main>
  );
}

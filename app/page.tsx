import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Industries from "@/components/sections/Industries";
import Features from "@/components/sections/Features";
import CTA from "@/components/sections/CTA";
import FeaturedProducts from "@/components/home/featured-products";
// import Projects from "@/components/home/projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Industries />
      <FeaturedProducts />
      {/* <Projects /> */}
      <Features />
      <CTA />
    </main>
  );
}

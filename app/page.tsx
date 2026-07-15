import Hero from "@/components/sections/Hero";
import Transformation from "@/components/sections/Transformation";
import TechChapters from "@/components/sections/TechChapters";
import Ecosystem from "@/components/sections/Ecosystem";
import ApplicationsShowcase from "@/components/sections/ApplicationsShowcase";
import Programs from "@/components/sections/Programs";
import AboutStrip from "@/components/sections/AboutStrip";
import NewsStrip from "@/components/sections/NewsStrip";
import FinalCta from "@/components/sections/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Transformation />
      <TechChapters />
      <Ecosystem />
      <ApplicationsShowcase />
      <Programs />
      <AboutStrip />
      <NewsStrip />
      <FinalCta />
    </>
  );
}

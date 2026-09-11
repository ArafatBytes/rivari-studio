import HeroSection from "@/components/home/HeroSection";
import VideoScaleSection from "@/components/home/VideoScaleSection";
import AwardsSection from "@/components/home/AwardsSection";
import ServicesSection from "@/components/home/ServicesSection";
import StickyTextSection from "@/components/home/StickyTextSection";
import ProjectsSection from "@/components/home/ResultsCarousel";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaSection from "@/components/home/CtaSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <VideoScaleSection />
      <AwardsSection />
      <ServicesSection />
      <StickyTextSection />
      <ProjectsSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}

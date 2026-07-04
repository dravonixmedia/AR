import Hero from "@/components/sections/Hero";
import StatsAbout from "@/components/sections/StatsAbout";
import ServicesExperience from "@/components/sections/ServicesExperience";
import IndustriesExperience from "@/components/sections/IndustriesExperience";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import Testimonials from "@/components/sections/Testimonials";
import FinalCta from "@/components/sections/FinalCta";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsAbout />
      <ServicesExperience />
      <IndustriesExperience />
      <WhyChooseUs />
      <ProcessTimeline />
      <Testimonials />
      <FinalCta />
      <Contact />
    </>
  );
}

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import BCDFSection from "@/components/BCDFSection";
import SovereigntyBanner from "@/components/SovereigntyBanner";
import ProcessSection from "@/components/ProcessSection";
import DefenceSection from "@/components/DefenceSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <MissionSection />
      <CapabilitiesSection />
      <BCDFSection />
      <SovereigntyBanner />
      <ProcessSection />
      <DefenceSection />
      <CTASection />
      <Footer />
    </>
  );
}

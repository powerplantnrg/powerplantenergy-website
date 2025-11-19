import SEO from '../components/SEO';
import HeroSection from '../components/HeroSection';
import IntroSection from '../components/IntroSection';
import DefenceSection from '../components/DefenceSection';
import MarketAnalysisSection from '../components/MarketAnalysisSection';
import FundingSection from '../components/FundingSection';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import TechnologySection from '../components/TechnologySection';
import ImpactSection from '../components/ImpactSection';
import TractionSection from '../components/TractionSection';
import TestimonialsSection from '../components/TestimonialsSection';
import NewsSection from '../components/NewsSection';
import SocialsSection from '../components/SocialsSection';
import ImageBanner from '../components/ImageBanner';
import bannerAlgae from '/assets/9d08830d73ac68d798cb01e6045b08d28ab08da9.png';
import bannerFerns from '/assets/bcde4468d71419aba6de35acbee5d378cbba56a1.png';
import bannerLeafTexture from '/assets/43fa792d079af58b4e6e9c6ce3f7a30f47c3917a.png';
import bannerLandscape from '/assets/947426c156ec8916a32ff31d7ada873485b65b5d.png';
import mountainFog from '/assets/465b4bf243ce8746456a0950c0cc39822e9116d9.png';

export default function HomePage() {
  // Structured data for Organization
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Power Plant Energy Pty Ltd",
    "alternateName": "Power Plant Energy",
    "description": "Australian biorefinery company transforming bamboo into critical materials like battery-grade graphite and sustainable aviation fuel for defence, industry, and transport sectors",
    "url": "https://powerplantenergy.com.au",
    "logo": "https://powerplantenergy.com.au/logo.png",
    "foundingDate": "2020",
    "sameAs": [
      "https://linkedin.com/company/powerplantenergy",
      "https://instagram.com/powerplantenergy",
      "https://x.com/powerplantenergy"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "AU",
      "addressRegion": "Australia"
    },
    "industry": "Renewable Energy & Critical Minerals",
    "knowsAbout": [
      "Sustainable Aviation Fuel",
      "Battery Grade Graphite",
      "Critical Minerals Production",
      "Biorefinery Technology",
      "Carbon Negative Manufacturing",
      "Defence Energy Solutions",
      "Circular Economy",
      "Sovereign Energy Capability",
      "Renewable Fuel Production",
      "Biomass Transformation"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Australia"
    },
    "serviceType": [
      "Sustainable Fuel Production",
      "Critical Minerals Supply",
      "Biorefinery Services",
      "Carbon Sequestration",
      "Defence Energy Solutions"
    ]
  };

  return (
    <>
      <SEO
        title="Power Plant Energy | Sovereign Fuels & Critical Minerals Australia"
        description="Building Australia's sovereign capability with sustainable fuels and critical minerals. Our biorefinery produces battery-grade graphite and SAF for defence."
        keywords="sustainable fuels Australia, critical minerals supply chain, sovereign energy capability, biofuel refinery, Australian defence energy security, battery graphite production, renewable fuel ADF, local critical mineral refining, carbon negative manufacturing, bamboo biorefinery"
        canonicalUrl="https://powerplantenergy.com.au"
        structuredData={structuredData}
      />
      
      <HeroSection />
      <IntroSection sustainableImage={mountainFog} />
      <DefenceSection />
      <MarketAnalysisSection />
      
      <ImageBanner src={bannerFerns} alt="Green ferns representing sustainable biomass feedstock in Australian biorefinery for critical minerals production" />
      
      <FundingSection />
      <ProblemSection />
      <SolutionSection />
      
      <ImageBanner src={bannerAlgae} alt="Sustainable biomass transformation process for carbon-negative fuel production and battery-grade graphite manufacturing" />
      
      <TechnologySection />
      <ImpactSection />
      <TractionSection />
      <TestimonialsSection />
      
      <ImageBanner src={bannerLeafTexture} alt="Natural biomass materials used in critical minerals extraction and sustainable aviation fuel production for Australian defence" />
      
      <NewsSection />
      <SocialsSection />
      
      <ImageBanner src={bannerLandscape} alt="Transformative journey through sustainable innovation building Australia's sovereign energy future" height="h-[700px]" />
    </>
  );
}

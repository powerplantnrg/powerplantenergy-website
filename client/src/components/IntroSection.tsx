import { ImageWithFallback } from './figma/ImageWithFallback';
import imgGradient from "/assets/478e4b247e5b6e4702d7984347746e9514bb5334.png";

interface IntroSectionProps {
  sustainableImage?: string;
  id?: string;
}

export default function IntroSection({ sustainableImage, id }: IntroSectionProps) {
  return (
    <section id={id} className="relative py-32" aria-labelledby="intro-heading">
      {/* Gradient Fade Top */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black via-black/50 to-black/0 z-[1]" />
      
      {/* Gradient Fade Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-black/0 via-black/50 to-black z-[1]" />
      
      <div className="max-w-[1920px] mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div>
            <h2 className="font-['Poppins:SemiBold',_sans-serif] leading-[1.1] not-italic text-[64px] text-white tracking-[-3.84px] mb-12">
              Australian Innovation for a Sustainable Industrial Future
            </h2>
            
            <div className="space-y-8">
              <p className="font-['Poppins:SemiBold',_sans-serif] leading-[1.3] not-italic text-[28px] text-white tracking-[-1.68px]">
                Power Plant Energy integrates advanced materials science, clean-energy engineering, and circular-economy design to supply Australia with strategic critical minerals and sustainable biofuels.
              </p>
              
              <p className="font-['Poppins:SemiBold',_sans-serif] leading-[1.3] not-italic text-[28px] text-white tracking-[-1.68px]">
                Our vertically integrated approach—from renewable biomass cultivation to high-purity graphite, hydrogen, and aviation fuels—creates enduring value for industry and defence while restoring ecosystems and strengthening energy security.
              </p>
              
              <p className="font-['Poppins:SemiBold',_sans-serif] leading-[1.3] not-italic text-[28px] text-white tracking-[-1.68px]">
                We're not just reducing emissions—we're building the infrastructure for a carbon-negative industrial economy.
              </p>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative">
            <div className="relative rounded-[20px] overflow-hidden h-[800px]">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 z-10">
                <img 
                  src={imgGradient} 
                  alt="Gradient overlay enhancing visual presentation of sustainable energy landscape" 
                  className="w-full h-full object-cover opacity-40 mix-blend-overlay"
                />
              </div>
              
              {/* Main Image */}
              {sustainableImage && (
                <ImageWithFallback
                  src={sustainableImage}
                  alt="Australian renewable energy landscape showing sustainable bamboo cultivation for biorefinery processing"
                  className="w-full h-full object-cover"
                />
              )}
              
              {/* Fallback gradient if no image */}
              {!sustainableImage && (
                <div className="w-full h-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20" />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

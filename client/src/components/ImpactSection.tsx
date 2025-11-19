import imgGradient from "/assets/478e4b247e5b6e4702d7984347746e9514bb5334.png";

interface ImpactSectionProps {
  id?: string;
}

export default function ImpactSection({ id }: ImpactSectionProps) {
  return (
    <section id={id} className="relative py-32 overflow-hidden" aria-labelledby="impact-heading">
      {/* Background Gradient Image */}
      <div className="absolute inset-0 opacity-30">
        <img 
          src={imgGradient} 
          alt="Regenerative business background representing carbon-negative manufacturing and environmental restoration" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Gradient Fade Overlays */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black via-black/50 to-black/0 z-[1]" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-black/0 via-black/50 to-black z-[1]" />
      
      <div className="max-w-[1920px] mx-auto px-10 relative z-10">
        {/* Section Header */}
        <div className="mb-24">
          <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center px-[17px] py-[8px] rounded-[4px] w-fit mb-8">
            <p className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[10px] text-black text-nowrap tracking-[-0.4px] whitespace-pre">Net-Positive Impact</p>
          </div>

          <h2 className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[96px] text-white tracking-[-3.84px] mb-8 max-w-[1200px]">
            Beyond ESG to Regenerative Business
          </h2>

          <p className="font-['Poppins:Medium',_sans-serif] leading-[1.3] not-italic text-[28px] text-[#75778b] tracking-[-0.56px] max-w-[1400px]">
            We don't just minimize harm—we actively create positive environmental and social outcomes
          </p>
        </div>

        {/* Impact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Carbon Negative */}
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 border-2 border-green-500/40 rounded-[40px] p-16 backdrop-blur-sm">
            <p className="font-['Poppins:Medium',_sans-serif] leading-[1.4] text-[180px] text-white tracking-[-18px] mb-6">
              200t
            </p>
            <p className="font-['Poppins:Medium',_sans-serif] leading-[1.1] text-[36px] text-white tracking-[-1.44px] mb-8">
              CO₂ Sequestered per Hectare
            </p>
            <p className="font-['Poppins:Medium',_sans-serif] leading-[1.3] text-[22px] text-green-100 tracking-[-0.44px]">
              Bamboo cultivation to final product results in a net-negative carbon footprint—we remove more carbon than we emit
            </p>
          </div>

          {/* Land Regeneration & Community */}
          <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 border-2 border-blue-500/40 rounded-[40px] p-16 backdrop-blur-sm">
            <div className="mb-12">
              <p className="font-['Poppins:Medium',_sans-serif] leading-[1.1] text-[48px] text-white tracking-[-1.92px] mb-6">
                Land Regeneration
              </p>
              <p className="font-['Poppins:Medium',_sans-serif] leading-[1.3] text-[22px] text-blue-100 tracking-[-0.44px]">
                We actively rehabilitate degraded mining sites, improving soil health and biodiversity instead of using arable farmland
              </p>
            </div>
            
            <div className="h-px bg-white/30 mb-12" />
            
            <div>
              <p className="font-['Poppins:Medium',_sans-serif] leading-[1.1] text-[48px] text-white tracking-[-1.92px] mb-6">
                Community Empowerment
              </p>
              <p className="font-['Poppins:Medium',_sans-serif] leading-[1.3] text-[22px] text-blue-100 tracking-[-0.44px]">
                Creating sustainable, high-value jobs in rural and post-mining communities across Australia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

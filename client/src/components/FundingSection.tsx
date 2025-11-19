import svgPaths from "../imports/svg-urns9myfok";
import imgLandscape from "/assets/186001e6f78460078ac26abf709dbf30de0f0555.png";

interface FundingSectionProps {
  id?: string;
}

export default function FundingSection({ id }: FundingSectionProps) {
  const fundingTiers = [
    {
      title: 'Immediate Deployment',
      timeline: 'Q4 2025',
      programs: [
        { name: 'ARENA Low Carbon Liquid Fuels', amount: '$10M', focus: 'SAF FEED Study' },
        { name: 'Critical Minerals Development', amount: '$1-30M', focus: 'Bio-Graphite Project' },
        { name: 'National Bioenergy Strategy', amount: 'Strategic', focus: 'Feedstock Priority' }
      ]
    },
    {
      title: 'Near-Term Capital',
      timeline: 'Q1-Q2 2026',
      programs: [
        { name: 'Export Finance Australia', amount: '$50-100M', focus: 'Production Facility' },
        { name: 'CEFC Technology Fund', amount: 'Co-Finance', focus: 'Commercialisation' },
        { name: 'Cleaner Fuels Program', amount: '$1.1B Pool', focus: 'Production Incentive' }
      ]
    },
    {
      title: 'Scale Infrastructure',
      timeline: 'Q3 2026+',
      programs: [
        { name: 'National Reconstruction Fund', amount: '$4B Pool', focus: 'Value-Add Resources' },
        { name: 'Future Made in Australia', amount: 'Innovation', focus: 'Manufacturing Scale' },
        { name: 'State Co-Investment', amount: 'Regional', focus: 'Infrastructure Support' }
      ]
    }
  ];

  return (
    <section id={id} className="relative py-32 overflow-hidden" aria-labelledby="funding-heading">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={imgLandscape} 
          alt="Australian landscape representing government funding opportunities for sovereign energy and critical minerals development" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Gradient Fade Overlays */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black via-black/50 to-black/0 z-[1]" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-black/0 via-black/50 to-black z-[1]" />

      <div className="max-w-[1920px] mx-auto px-10 relative z-10">
        {/* Section Header */}
        <div className="mb-24 text-center">
          <div className="bg-white box-border content-stretch inline-flex gap-[10px] items-center justify-center px-[17px] py-[8px] rounded-[4px] mb-8">
            <p className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[10px] text-black text-nowrap tracking-[-0.4px] whitespace-pre">Government Support</p>
          </div>

          <h2 className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[96px] text-white tracking-[-3.84px] mb-8">
            Strategic Funding Pathways
          </h2>

          <p className="font-['Poppins:Medium',_sans-serif] leading-[1.3] text-[28px] text-white/70 tracking-[-0.56px] max-w-[1100px] mx-auto">
            Power Plant Energy aligns with multiple federal and state funding priorities, positioning for rapid scale-up through Australia's clean energy transition programs
          </p>
        </div>

        {/* Funding Tiers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {fundingTiers.map((tier, tierIndex) => (
            <div key={tierIndex} className="relative">
              {/* Layered Oval Graphic */}
              <div className="flex justify-center mb-8">
                <div className="w-[180px] h-[134px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 225 168">
                    <g>
                      <path d={svgPaths.p330f2f00} stroke="white" strokeWidth="1.35" opacity="0.3" />
                      <path d={svgPaths.p68ba800} stroke="white" strokeWidth="1.35" opacity="0.5" />
                      <path d={svgPaths.p1c1c1500} stroke="white" strokeWidth="1.35" opacity="0.7" />
                      <path d={svgPaths.p19845900} stroke="white" strokeWidth="1.35" opacity="0.9" />
                    </g>
                  </svg>
                </div>
              </div>

              {/* Tier Info */}
              <div className="text-center mb-8">
                <h3 className="font-['Poppins:Medium',_sans-serif] leading-[1.1] text-[36px] text-white tracking-[-1.44px] mb-3">
                  {tier.title}
                </h3>
                <p className="font-['Poppins:Medium',_sans-serif] leading-[1.1] text-[18px] text-white/50 tracking-[-0.36px]">
                  {tier.timeline}
                </p>
              </div>

              {/* Programs */}
              <div className="space-y-6">
                {tier.programs.map((program, progIndex) => (
                  <div key={progIndex} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[16px] p-6 hover:bg-white/10 hover:border-white/20 transition-all">
                    <div className="flex items-start justify-between mb-3">
                      <p className="font-['Poppins:Medium',_sans-serif] leading-[1.2] text-[16px] text-white tracking-[-0.32px] flex-1">
                        {program.name}
                      </p>
                      <p className="font-['Poppins:Medium',_sans-serif] leading-[1.2] text-[16px] text-white tracking-[-0.32px] ml-4">
                        {program.amount}
                      </p>
                    </div>
                    <p className="font-['Poppins:Medium',_sans-serif] leading-[1.3] text-[14px] text-white/60 tracking-[-0.28px]">
                      {program.focus}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="text-center">
          <p className="font-['Poppins:Medium',_sans-serif] leading-[1.3] text-[24px] text-white/70 tracking-[-0.48px] max-w-[1000px] mx-auto">
            All application packages prepared and ready for submission — positioning Power Plant Energy to secure funding across Australia's critical minerals, clean fuels, and manufacturing priorities
          </p>
        </div>
      </div>
    </section>
  );
}

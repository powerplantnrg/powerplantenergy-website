import imgGradient from "/assets/c922e7eebf2714905877e20d2530180d750f87fe.png";

interface MarketAnalysisSectionProps {
  id?: string;
}

export default function MarketAnalysisSection({ id }: MarketAnalysisSectionProps) {
  const graphiteDrivers = [
    'Electric vehicle adoption (300M+ EVs by 2030)',
    'Energy storage systems growth',
    'Supply chain diversification away from China',
    'Premium for sustainable/carbon-negative materials'
  ];

  const safDrivers = [
    'Aviation decarbonization mandates',
    'CORSIA compliance requirements',
    'Corporate sustainability commitments',
    'Government incentives and blending mandates'
  ];

  return (
    <section id={id} className="relative py-32 overflow-hidden" aria-labelledby="market-heading">
      {/* Background Gradient */}
      <div className="absolute inset-0 opacity-40">
        <img 
          src={imgGradient} 
          alt="Market growth background representing explosive demand for battery-grade graphite and sustainable aviation fuel" 
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
            <p className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[10px] text-black text-nowrap tracking-[-0.4px] whitespace-pre">Market Analysis</p>
          </div>

          <h2 className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[96px] text-white tracking-[-3.84px]">
            Explosive Growth in Critical Markets
          </h2>
        </div>

        {/* Market Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Battery-Grade Graphite Market */}
          <div className="relative rounded-[40px] bg-gradient-to-br from-emerald-500/30 via-teal-500/30 to-blue-600/30 border-2 border-emerald-500/50 p-12 backdrop-blur-sm overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
            {/* Decorative gradient circle */}
            <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-gradient-to-br from-emerald-500/40 to-teal-600/40 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h3 className="font-['Poppins:Medium',_sans-serif] leading-[1.1] text-[48px] text-white tracking-[-1.92px] mb-12">
                Battery-Grade Graphite
              </h3>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div className="bg-black/30 rounded-[24px] p-8 backdrop-blur-md">
                  <p className="font-['Poppins:Medium',_sans-serif] leading-[1.4] text-[80px] text-white tracking-[-8px]">
                    6-8M
                  </p>
                  <p className="font-['Poppins:Medium',_sans-serif] leading-[1.2] text-[18px] text-white/80 tracking-[-0.36px]">
                    tonnes demand by 2030
                  </p>
                </div>

                <div className="bg-black/30 rounded-[24px] p-8 backdrop-blur-md">
                  <p className="font-['Poppins:Medium',_sans-serif] leading-[1.4] text-[80px] text-white tracking-[-8px]">
                    25-30%
                  </p>
                  <p className="font-['Poppins:Medium',_sans-serif] leading-[1.2] text-[18px] text-white/80 tracking-[-0.36px]">
                    CAGR growth rate
                  </p>
                </div>
              </div>

              {/* Market Drivers */}
              <div>
                <p className="font-['Poppins:Medium',_sans-serif] leading-[1.1] text-[24px] text-white tracking-[-0.96px] mb-6">
                  Market Drivers
                </p>
                <div className="space-y-4">
                  {graphiteDrivers.map((driver, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="shrink-0 w-2 h-2 rounded-full bg-emerald-400 mt-2" />
                      <p className="font-['Poppins:Medium',_sans-serif] leading-[1.3] text-[18px] text-white/90 tracking-[-0.36px]">
                        {driver}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sustainable Aviation Fuel Market */}
          <div className="relative rounded-[40px] bg-gradient-to-br from-blue-500/30 via-cyan-500/30 to-emerald-500/30 border-2 border-blue-500/50 p-12 backdrop-blur-sm overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
            {/* Decorative gradient circle */}
            <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-gradient-to-br from-blue-500/40 to-cyan-600/40 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h3 className="font-['Poppins:Medium',_sans-serif] leading-[1.1] text-[48px] text-white tracking-[-1.92px] mb-12">
                Sustainable Aviation Fuel
              </h3>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div className="bg-black/30 rounded-[24px] p-8 backdrop-blur-md">
                  <p className="font-['Poppins:Medium',_sans-serif] leading-[1.4] text-[80px] text-white tracking-[-8px]">
                    30M
                  </p>
                  <p className="font-['Poppins:Medium',_sans-serif] leading-[1.2] text-[18px] text-white/80 tracking-[-0.36px]">
                    tonnes demand by 2030
                  </p>
                </div>

                <div className="bg-black/30 rounded-[24px] p-8 backdrop-blur-md">
                  <p className="font-['Poppins:Medium',_sans-serif] leading-[1.4] text-[80px] text-white tracking-[-8px]">
                    65%
                  </p>
                  <p className="font-['Poppins:Medium',_sans-serif] leading-[1.2] text-[18px] text-white/80 tracking-[-0.36px]">
                    CAGR growth rate
                  </p>
                </div>
              </div>

              {/* Market Drivers */}
              <div>
                <p className="font-['Poppins:Medium',_sans-serif] leading-[1.1] text-[24px] text-white tracking-[-0.96px] mb-6">
                  Market Drivers
                </p>
                <div className="space-y-4">
                  {safDrivers.map((driver, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="shrink-0 w-2 h-2 rounded-full bg-blue-400 mt-2" />
                      <p className="font-['Poppins:Medium',_sans-serif] leading-[1.3] text-[18px] text-white/90 tracking-[-0.36px]">
                        {driver}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Highlight */}
        <div className="mt-16 text-center">
          <p className="font-['Poppins:Medium',_sans-serif] leading-[1.3] text-[32px] text-white/70 tracking-[-0.64px] max-w-[1200px] mx-auto">
            Power Plant Energy is uniquely positioned to capture value across both high-growth markets with our integrated biorefinery platform
          </p>
        </div>
      </div>
    </section>
  );
}

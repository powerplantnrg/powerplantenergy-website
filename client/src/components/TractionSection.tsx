import imgGradient1 from "/assets/478e4b247e5b6e4702d7984347746e9514bb5334.png";

export default function TractionSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Gradient Image */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-auto opacity-50">
        <img 
          src={imgGradient1} 
          alt="Commercial validation background representing market traction and proven technology" 
          className="w-full h-auto object-cover blur-2xl"
        />
      </div>
      
      {/* Gradient Fade Overlays */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black via-black/50 to-black/0 z-[1]" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-black/0 via-black/50 to-black z-[1]" />
      
      <div className="max-w-[1920px] mx-auto px-10 relative z-10">
        {/* Section Header */}
        <div className="mb-24">
          <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center px-[17px] py-[8px] rounded-[4px] w-fit mb-8">
            <p className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[10px] text-black text-nowrap tracking-[-0.4px] whitespace-pre">Market Traction</p>
          </div>

          <h2 className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[96px] text-white tracking-[-3.84px]">
            De-Risked Commercial Validation
          </h2>
        </div>

        {/* Traction Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 bg-white rounded-[40px] p-16">
            <p className="font-['Poppins:Medium',_sans-serif] leading-[1.4] text-[220px] text-black tracking-[-22px] mb-6">
              1.2M
            </p>
            <p className="font-['Poppins:Medium',_sans-serif] leading-[1.1] text-[38px] text-black tracking-[-1.52px] mb-8">
              Tons Biomass Supply Agreement
            </p>
            <p className="font-['Poppins:Medium',_sans-serif] leading-[1.3] text-[24px] text-[#75778b] tracking-[-0.48px]">
              Secured long-term supply agreement demonstrating market confidence and operational readiness
            </p>
          </div>

          <div className="bg-gradient-to-br from-emerald-500/20 to-teal-600/20 border-2 border-emerald-500/40 rounded-[40px] p-12 flex flex-col justify-between backdrop-blur-sm">
            <div>
              <p className="font-['Poppins:Medium',_sans-serif] leading-[1.1] text-[38px] text-white tracking-[-1.52px] mb-8">
                Proven Technology
              </p>
              <p className="font-['Poppins:Medium',_sans-serif] leading-[1.3] text-[20px] text-white/80 tracking-[-0.4px]">
                Patent-protected processes validated at scale
              </p>
            </div>
          </div>
        </div>

        {/* Investment Opportunity */}
        <div className="bg-gradient-to-br from-teal-500/20 to-blue-600/20 border-2 border-teal-500/40 rounded-[40px] p-16 backdrop-blur-sm">
          <h3 className="font-['Poppins:Medium',_sans-serif] leading-[1.1] text-[56px] text-white tracking-[-2.24px] mb-16">
            Investment Opportunity
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <p className="font-['Poppins:Medium',_sans-serif] leading-[1.1] text-[32px] text-white/90 tracking-[-1.28px] mb-4">
                Strategic
              </p>
              <p className="font-['Poppins:Medium',_sans-serif] leading-[1.3] text-[20px] text-white/70 tracking-[-0.4px]">
                Sovereign capability in critical materials supply chain
              </p>
            </div>
            <div>
              <p className="font-['Poppins:Medium',_sans-serif] leading-[1.1] text-[32px] text-white/90 tracking-[-1.28px] mb-4">
                De-Risked
              </p>
              <p className="font-['Poppins:Medium',_sans-serif] leading-[1.3] text-[20px] text-white/70 tracking-[-0.4px]">
                Proven technology with secured supply agreements
              </p>
            </div>
            <div>
              <p className="font-['Poppins:Medium',_sans-serif] leading-[1.1] text-[32px] text-white/90 tracking-[-1.28px] mb-4">
                Scalable
              </p>
              <p className="font-['Poppins:Medium',_sans-serif] leading-[1.3] text-[20px] text-white/70 tracking-[-0.4px]">
                Clear path to commercialization and market expansion
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

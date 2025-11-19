import imgGradient from "/assets/9d08830d73ac68d798cb01e6045b08d28ab08da9.png";
import { Shield, Zap, Lock } from 'lucide-react';

interface DefenceSectionProps {
  id?: string;
}

export default function DefenceSection({ id }: DefenceSectionProps) {
  const capabilities = [
    {
      icon: Shield,
      title: 'Operational Resilience',
      description: 'Sovereign fuel production reducing reliance on vulnerable global supply chains'
    },
    {
      icon: Zap,
      title: 'Reduced Emissions',
      description: 'High-performance sustainable fuels meeting defence operational requirements'
    },
    {
      icon: Lock,
      title: 'Secure Supply Chains',
      description: 'Australian-sourced materials ensuring energy independence and national security'
    }
  ];

  return (
    <section id={id} className="relative py-32 overflow-hidden" aria-labelledby="defence-heading">
      {/* Gradient Background Image */}
      <div className="absolute inset-0">
        <img 
          src={imgGradient} 
          alt="Advanced technology background representing sovereign defence energy solutions for Australian military" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

      <div className="max-w-[1920px] mx-auto px-10 relative z-10">
        {/* Section Header */}
        <div className="mb-24 text-center">
          <div className="bg-white box-border content-stretch inline-flex gap-[10px] items-center justify-center px-[17px] py-[8px] rounded-[4px] mb-8">
            <p className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[10px] text-black text-nowrap tracking-[-0.4px] whitespace-pre">Strategic Partnership</p>
          </div>

          <h2 className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[96px] text-white tracking-[-3.84px] mb-12">
            Securing Australia's<br />Strategic Energy Future
          </h2>

          <p className="font-['Poppins:Medium',_sans-serif] leading-[1.4] text-[28px] text-white/90 tracking-[-0.56px] max-w-[1200px] mx-auto mb-8">
            Power Plant Energy views the Australian Defence Force as a cornerstone client in the nation's transition toward energy independence. Recognising the critical risks of imported fuel dependency, we are building the capacity to supply sovereign, high-performance sustainable fuels derived from Australian resources.
          </p>

          <p className="font-['Poppins:Medium',_sans-serif] leading-[1.4] text-[24px] text-white/70 tracking-[-0.48px] max-w-[1100px] mx-auto">
            Our technologies are designed to provide operational resilience, reduced emissions, and secure local supply chains—ensuring that Defence can operate confidently in an uncertain global energy landscape.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div 
                key={index} 
                className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-[24px] p-10 hover:bg-white/10 hover:border-white/20 transition-all group"
              >
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 group-hover:bg-white/20 transition-all">
                  <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
                
                <h3 className="font-['Poppins:Medium',_sans-serif] leading-[1.2] text-[28px] text-white tracking-[-0.56px] mb-4">
                  {capability.title}
                </h3>
                
                <p className="font-['Poppins:Medium',_sans-serif] leading-[1.4] text-[18px] text-white/70 tracking-[-0.36px]">
                  {capability.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

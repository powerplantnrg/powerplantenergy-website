import { Quote } from 'lucide-react';

interface TestimonialsSectionProps {
  id?: string;
}

export default function TestimonialsSection({ id }: TestimonialsSectionProps) {
  const testimonials = [
    {
      quote: "Power Plant Energy's innovative approach to sovereign fuel production represents a critical step forward in Australia's energy independence and national security.",
      author: "Industry Partner",
      role: "Defence & Energy Sector",
      organization: "Strategic Partner"
    },
    {
      quote: "The biorefinery technology demonstrates exceptional potential for sustainable critical minerals production, addressing both environmental and supply chain challenges.",
      author: "Technology Advisor",
      role: "Clean Technology Expert",
      organization: "Advisory Board"
    },
    {
      quote: "Their commitment to carbon-negative manufacturing and circular economy principles sets a new standard for the Australian resources sector.",
      author: "Sustainability Leader",
      role: "Environmental Innovation",
      organization: "Industry Collaboration"
    }
  ];

  return (
    <section id={id} className="relative py-32 overflow-hidden" aria-labelledby="testimonials-heading">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      
      <div className="max-w-[1920px] mx-auto px-10 relative z-10">
        {/* Section Header */}
        <div className="mb-24 text-center">
          <div className="bg-white box-border content-stretch inline-flex gap-[10px] items-center justify-center px-[17px] py-[8px] rounded-[4px] mb-8">
            <p className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[10px] text-black text-nowrap tracking-[-0.4px] whitespace-pre">Trusted Partners</p>
          </div>

          <h2 id="testimonials-heading" className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[96px] text-white tracking-[-3.84px] mb-8">
            Building Trust Through Partnership
          </h2>

          <p className="font-['Poppins:Medium',_sans-serif] leading-[1.3] text-[28px] text-white/70 tracking-[-0.56px] max-w-[1100px] mx-auto">
            Collaborating with industry leaders, government agencies, and technology partners to deliver sovereign energy solutions
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-[24px] p-10 hover:bg-white/10 hover:border-white/20 transition-all group"
            >
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 group-hover:bg-white/20 transition-all">
                <Quote className="w-6 h-6 text-white" strokeWidth={1.5} />
              </div>
              
              <p className="font-['Poppins:Medium',_sans-serif] leading-[1.4] text-[18px] text-white/90 tracking-[-0.36px] mb-8">
                "{testimonial.quote}"
              </p>
              
              <div className="border-t border-white/10 pt-6">
                <p className="font-['Poppins:Medium',_sans-serif] leading-[1.2] text-[20px] text-white tracking-[-0.4px] mb-2">
                  {testimonial.author}
                </p>
                <p className="font-['Poppins:Medium',_sans-serif] leading-[1.3] text-[14px] text-white/60 tracking-[-0.28px]">
                  {testimonial.role}
                </p>
                <p className="font-['Poppins:Medium',_sans-serif] leading-[1.3] text-[14px] text-white/50 tracking-[-0.28px]">
                  {testimonial.organization}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Partner Logos Placeholder */}
        <div className="mt-24 text-center">
          <p className="font-['Poppins:Medium',_sans-serif] leading-[1.3] text-[20px] text-white/50 tracking-[-0.4px] mb-12">
            Collaborating with leading organizations across defence, energy, and technology sectors
          </p>
          
          {/* Placeholder for partner logos - can be updated with actual logos */}
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            <div className="w-32 h-32 bg-white/10 rounded-lg flex items-center justify-center">
              <p className="text-white/50 text-xs">Partner Logo</p>
            </div>
            <div className="w-32 h-32 bg-white/10 rounded-lg flex items-center justify-center">
              <p className="text-white/50 text-xs">Partner Logo</p>
            </div>
            <div className="w-32 h-32 bg-white/10 rounded-lg flex items-center justify-center">
              <p className="text-white/50 text-xs">Partner Logo</p>
            </div>
            <div className="w-32 h-32 bg-white/10 rounded-lg flex items-center justify-center">
              <p className="text-white/50 text-xs">Partner Logo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

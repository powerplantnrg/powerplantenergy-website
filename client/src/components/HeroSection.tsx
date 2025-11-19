import imgGradient from "/assets/478e4b247e5b6e4702d7984347746e9514bb5334.png";
import svgPaths from "../imports/svg-8snommzkdn";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden">
      {/* Gradient Background Image */}
      <div className="absolute inset-0 opacity-70">
        <img 
          src={imgGradient} 
          alt="Gradient background" 
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>
      
      {/* Gradient Fade Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-black/0 via-black/50 to-black z-[1]" />
      
      <div className="max-w-[1920px] mx-auto px-10 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Large 3D Icon */}
          <div className="mb-8 md:mb-16 w-[200px] h-[229px] sm:w-[300px] sm:h-[343px] md:w-[400px] md:h-[458px] lg:w-[520px] lg:h-[595px]">
            <svg className="block size-full drop-shadow-2xl" fill="none" preserveAspectRatio="none" viewBox="0 0 104 119">
              <g>
                <path d={svgPaths.p13c1c400} fill="url(#paint0_linear_hero)" />
                <foreignObject height="148.899" width="148.096" x="-31.3108" y="-23.9928">
                  <div 
                    style={{ 
                      backdropFilter: "blur(16.08px)", 
                      clipPath: "url(#bgblur_hero_clip_path)", 
                      height: "100%", 
                      width: "100%" 
                    }} 
                    xmlns="http://www.w3.org/1999/xhtml" 
                  />
                </foreignObject>
                <path d={svgPaths.p398002f2} fill="white" fillOpacity="0.4" />
              </g>
              <defs>
                <clipPath id="bgblur_hero_clip_path" transform="translate(31.3108 23.9928)">
                  <path d={svgPaths.p398002f2} />
                </clipPath>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_hero" x1="23.021" x2="13.9951" y1="108.942" y2="32.9811">
                  <stop offset="0.0616042" stopColor="#D4FFC7" />
                  <stop offset="0.323137" stopColor="#5EEAD4" />
                  <stop offset="0.716195" stopColor="#60A5FA" />
                  <stop offset="1" stopColor="#7152DA" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Company Name */}
          <div className="content-stretch flex font-['Poppins:Medium',_sans-serif] items-start leading-[1.2] not-italic text-white mb-4 md:mb-8">
            <h1 className="relative shrink-0 text-[clamp(2rem,8vw,11.25rem)] tracking-[clamp(-0.5px,-0.5vw,-9px)] whitespace-nowrap">Power Plant Energy</h1>
            <p className="relative shrink-0 text-[clamp(0.625rem,2vw,2.5rem)] tracking-[clamp(-0.1px,-0.1vw,-1.2px)]">TM</p>
          </div>

          {/* Tagline */}
          <p className="font-['Poppins:Medium',_sans-serif] leading-[1.3] not-italic text-[clamp(1.25rem,3vw,2.625rem)] text-white/80 tracking-[clamp(-0.2px,-0.2vw,-0.84px)] max-w-[1000px] px-4">
            Securing Australia's Future with Sovereign Fuels & Critical Minerals
          </p>
        </div>
      </div>
    </section>
  );
}

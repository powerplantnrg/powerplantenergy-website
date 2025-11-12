import SEO from '../components/SEO';
import { blogArticles } from '../data/blog-articles';
import { Link } from 'react-router-dom';

export default function InsightsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Power Plant Energy Insights & News",
    "description": "Latest news, insights, and updates on sustainable fuel production, critical minerals, and sovereign energy capability in Australia"
  };

  return (
    <>
      <SEO
        title="Insights & News | Power Plant Energy Australia"
        description="Latest news and insights from Power Plant Energy on sustainable fuels, critical minerals production, defence energy security, and biorefinery technology developments in Australia."
        keywords="sustainable fuels news, critical minerals updates, biorefinery insights, Australian energy security, defence fuel developments, clean energy innovation, sovereign capability news"
        canonicalUrl="https://powerplantenergy.com.au/insights"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-950/20 to-black" />
        
        <div className="max-w-[1920px] mx-auto px-10 relative z-10">
          <div className="max-w-5xl">
            <div className="bg-white box-border content-stretch inline-flex gap-[10px] items-center justify-center px-[17px] py-[8px] rounded-[4px] mb-8">
              <p className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[10px] text-black text-nowrap tracking-[-0.4px] whitespace-pre">News & Insights</p>
            </div>

            <h1 className="font-['Poppins:SemiBold',_sans-serif] leading-[1.1] not-italic text-[96px] text-white tracking-[-3.84px] mb-12">
              Latest Developments in Sovereign Energy
            </h1>

            <p className="font-['Poppins:SemiBold',_sans-serif] leading-[1.3] not-italic text-[28px] text-white/90 tracking-[-1.68px] mb-12">
              Stay informed about Power Plant Energy's progress in building Australia's sustainable fuel and critical minerals capability. Explore industry insights, project updates, partnership announcements, and thought leadership on energy security and clean manufacturing.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Articles Grid */}
      <section className="relative py-32">
        <div className="max-w-[1920px] mx-auto px-10">
          <h2 className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[64px] text-white tracking-[-3.84px] mb-16 text-center">
            Featured Articles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogArticles.map((article) => (
              <Link key={article.id} to={`/insights/${article.slug}`} className="block bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 cursor-pointer group">
                  <div className="mb-4">
                    <span className="inline-block bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm font-['Poppins:Medium',_sans-serif]">
                      {article.category}
                    </span>
                  </div>
                  
                  <h3 className="text-[24px] text-white mb-4 tracking-[-0.96px] font-['Poppins:SemiBold',_sans-serif] group-hover:text-emerald-400 transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-white/80 text-[16px] leading-[1.6] mb-6">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-white/60 text-[14px]">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Analysis */}
      <section className="relative py-32 bg-gradient-to-b from-black via-indigo-950/10 to-black">
        <div className="max-w-[1920px] mx-auto px-10">
          <h2 className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[64px] text-white tracking-[-3.84px] mb-16 text-center">
            Industry Context & Strategic Insights
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-10">
              <h3 className="text-[32px] text-white mb-6 tracking-[-1.28px]">Fuel Security in Defence Supply Chains</h3>
              <p className="text-white/90 text-[18px] leading-[1.6] mb-4">
                Australia's dependence on imported fuels presents significant strategic risks for defence operations. With refined petroleum products traveling thousands of kilometres through contested waters, any disruption to supply chains could compromise ADF readiness within weeks.
              </p>
              <p className="text-white/80 text-[16px] leading-[1.6]">
                Sovereign fuel production isn't just an environmental initiative—it's a national security imperative that ensures operational independence in crisis scenarios.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-10">
              <h3 className="text-[32px] text-white mb-6 tracking-[-1.28px]">Critical Minerals Value Chain in Australia</h3>
              <p className="text-white/90 text-[18px] leading-[1.6] mb-4">
                While Australia possesses abundant mineral resources, we export raw materials and import processed products—losing value and creating dependency. The graphite market exemplifies this challenge: Australia has graphite deposits but imports 100% of processed graphite for batteries and manufacturing.
              </p>
              <p className="text-white/80 text-[16px] leading-[1.6]">
                Power Plant Energy's biorefinery technology enables domestic processing and value-added manufacturing, capturing the full economic benefit while building sovereign supply chains.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-10">
              <h3 className="text-[32px] text-white mb-6 tracking-[-1.28px]">Decarbonised Logistics & Transport</h3>
              <p className="text-white/90 text-[18px] leading-[1.6] mb-4">
                Aviation, shipping, and heavy transport account for significant carbon emissions but face limited electrification options. Sustainable fuels offer drop-in replacements that enable immediate emissions reductions without infrastructure overhaul.
              </p>
              <p className="text-white/80 text-[16px] leading-[1.6]">
                Carbon-negative sustainable aviation fuel (SAF) and marine biofuels provide pathways to net-zero logistics while maintaining performance and operational flexibility.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-10">
              <h3 className="text-[32px] text-white mb-6 tracking-[-1.28px]">Sovereign Industrial Capability Grants</h3>
              <p className="text-white/90 text-[18px] leading-[1.6] mb-4">
                Australian government funding programs recognise the strategic importance of sovereign manufacturing capability. Clean Energy Finance Corporation (CEFC), Australian Renewable Energy Agency (ARENA), and defence innovation programs support technologies that strengthen national resilience.
              </p>
              <p className="text-white/80 text-[16px] leading-[1.6]">
                Power Plant Energy's projects align with government priorities in critical minerals, clean fuels, and defence supply chain security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="max-w-[1920px] mx-auto px-10 text-center">
          <h2 className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[56px] text-white tracking-[-2.24px] mb-8">
            Stay Connected
          </h2>
          <p className="text-white/80 text-[20px] mb-12 max-w-3xl mx-auto">
            Follow our progress and connect with our team to discuss how Power Plant Energy can support your organisation's sustainability and sovereignty objectives.
          </p>
          <Link to="/contact" className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-['Poppins:SemiBold',_sans-serif] px-12 py-4 rounded-lg text-[18px] tracking-[-0.36px] transition-all duration-300">
            Contact Now
          </Link>
        </div>
      </section>
    </>
  );
}

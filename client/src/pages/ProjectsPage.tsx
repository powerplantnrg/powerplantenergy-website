import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import TractionSection from '../components/TractionSection';
import { Factory, FlaskConical, Rocket, MapPin } from 'lucide-react';

export default function ProjectsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Power Plant Energy Projects",
    "description": "Current and planned biorefinery projects for sustainable fuel and critical minerals production across Australia",
    "itemListElement": [
      {
        "@type": "Project",
        "name": "Pilot Plant - Bamboo to Battery-Grade Graphite",
        "description": "Pilot-scale facility demonstrating bamboo-to-graphite conversion technology"
      },
      {
        "@type": "Project",
        "name": "Commercial Demonstration Plant",
        "description": "First commercial-scale biorefinery producing graphite and sustainable fuels"
      }
    ]
  };

  const projectPhases = [
    {
      icon: FlaskConical,
      phase: 'Phase 1',
      title: 'Pilot Plant - Bamboo to Battery-Grade Graphite',
      status: 'In Progress',
      description: 'Pilot-scale facility demonstrating the conversion of Beema bamboo into battery-grade graphite through proprietary biorefinery processes, validating technology readiness and material specifications',
      achievements: [
        'Pilot plant design and engineering in development',
        'Proprietary bamboo-to-graphite conversion process under validation',
        'Target: Battery-grade graphite (99.95%+ purity)',
        'Process optimization and materials characterization ongoing'
      ]
    },
    {
      icon: Factory,
      phase: 'Phase 2',
      title: 'Commercial Demonstration Plant',
      status: 'Development',
      description: 'First commercial-scale biorefinery producing 1,000+ tonnes per year of graphite and sustainable fuels, validating economic viability and supply chain integration',
      targets: [
        'Production capacity: 1,000-2,000 tonnes/year graphite',
        'Co-production of sustainable aviation fuel and hydrogen',
        'Integration with offtake partners and end-users',
        'Regulatory approvals and environmental permitting'
      ]
    },
    {
      icon: Rocket,
      phase: 'Phase 3',
      title: 'Commercial Scale-Up',
      status: 'Planning',
      description: 'Multiple commercial biorefineries deployed across Australia, delivering sovereign critical minerals and fuel supply at national scale',
      vision: [
        'Network of modular biorefineries in strategic locations',
        '10,000+ tonnes per year aggregate production',
        'Supply agreements with defence, aviation, and manufacturing',
        'Export opportunities to allied nations seeking sovereign supply'
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Projects | Power Plant Energy Australia"
        description="Power Plant Energy biorefinery projects delivering sovereign critical minerals and sustainable fuel production. From pilot validation to commercial-scale deployment across Australia."
        keywords="biorefinery projects Australia, graphite production facility, sustainable fuel plant, critical minerals development, defence fuel production, commercial biorefinery, sovereign manufacturing projects"
        canonicalUrl="https://powerplantenergy.com.au/projects"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-violet-950/20 to-black" />
        
        <div className="max-w-[1920px] mx-auto px-10 relative z-10">
          <div className="max-w-5xl">
            <div className="bg-white box-border content-stretch inline-flex gap-[10px] items-center justify-center px-[17px] py-[8px] rounded-[4px] mb-8">
              <p className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[10px] text-black text-nowrap tracking-[-0.4px] whitespace-pre">Project Portfolio</p>
            </div>

            <h1 className="font-['Poppins:SemiBold',_sans-serif] leading-[1.1] not-italic text-[96px] text-white tracking-[-3.84px] mb-12">
              Building Australia's Sovereign Manufacturing Capability
            </h1>

            <p className="font-['Poppins:SemiBold',_sans-serif] leading-[1.3] not-italic text-[28px] text-white/90 tracking-[-1.68px] mb-12">
              Power Plant Energy is advancing from technology validation to commercial-scale deployment. Our staged approach de-risks investment, builds capability, and establishes the supply chains needed for sovereign critical minerals and fuel production at national scale.
            </p>
          </div>
        </div>
      </section>

      {/* Project Phases */}
      <section className="relative py-32">
        <div className="max-w-[1920px] mx-auto px-10">
          <div className="space-y-16">
            {projectPhases.map((project, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12 hover:bg-white/10 transition-all">
                <div className="flex items-start gap-8 mb-8">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-violet-600 to-purple-700 rounded-full">
                      <project.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-violet-400 text-[18px]">{project.phase}</span>
                      <span className={`px-4 py-1 rounded-full text-sm ${
                        project.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                        project.status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-400' :
                        project.status === 'Development' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-purple-500/20 text-purple-400'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <h2 className="text-[48px] text-white mb-6 tracking-[-1.92px]">{project.title}</h2>
                    <p className="text-white/90 text-[20px] leading-[1.5] mb-8">{project.description}</p>
                    
                    {project.achievements && (
                      <div>
                        <h3 className="text-[24px] text-white mb-4 tracking-[-0.96px]">Key Achievements</h3>
                        <ul className="space-y-3">
                          {project.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-2 h-2 bg-green-400 rounded-full mt-2" />
                              <span className="text-white/80 text-[18px] leading-[1.5]">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {project.targets && (
                      <div>
                        <h3 className="text-[24px] text-white mb-4 tracking-[-0.96px]">Development Targets</h3>
                        <ul className="space-y-3">
                          {project.targets.map((target, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-2 h-2 bg-blue-400 rounded-full mt-2" />
                              <span className="text-white/80 text-[18px] leading-[1.5]">{target}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {project.vision && (
                      <div>
                        <h3 className="text-[24px] text-white mb-4 tracking-[-0.96px]">Strategic Vision</h3>
                        <ul className="space-y-3">
                          {project.vision.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-2 h-2 bg-purple-400 rounded-full mt-2" />
                              <span className="text-white/80 text-[18px] leading-[1.5]">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traction Section - Reuse existing component */}
      <TractionSection />

      {/* Strategic Locations */}
      <section className="relative py-32 bg-gradient-to-b from-black via-violet-950/10 to-black">
        <div className="max-w-[1920px] mx-auto px-10">
          <h2 className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[64px] text-white tracking-[-3.84px] mb-16 text-center">
            Strategic Project Locations
          </h2>

          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-10">
            <div className="flex items-start gap-6 mb-8">
              <MapPin className="w-12 h-12 text-violet-400 flex-shrink-0" />
              <div>
                <h3 className="text-[32px] text-white mb-4 tracking-[-1.28px]">Site Selection Criteria</h3>
                <p className="text-white/90 text-[18px] leading-[1.6] mb-6">
                  Power Plant Energy evaluates potential biorefinery locations based on strategic factors including:
                </p>
                <ul className="text-white/90 text-[18px] leading-[1.6] space-y-3 list-disc list-inside">
                  <li>Proximity to biomass feedstock cultivation areas (bamboo plantations on marginal land)</li>
                  <li>Access to renewable energy infrastructure (solar, wind) for carbon-negative operations</li>
                  <li>Transportation links to defence bases, airports, ports, and manufacturing centres</li>
                  <li>Workforce availability and technical education institutions for capability development</li>
                  <li>Government support including regional development incentives and strategic investment</li>
                  <li>Environmental permitting pathways and community support for sustainable manufacturing</li>
                </ul>
              </div>
            </div>

            <p className="text-white/90 text-[18px] leading-[1.6]">
              Our modular biorefinery design enables distributed production across Australia, creating regional employment, reducing transport emissions, and building resilient supply chains that can operate independently during disruptions.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="max-w-[1920px] mx-auto px-10 text-center">
          <h2 className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[56px] text-white tracking-[-2.24px] mb-8">
            Join Our Project Development
          </h2>
          <p className="text-white/80 text-[20px] mb-12 max-w-3xl mx-auto">
            We're seeking strategic partners, investors, and offtake customers to accelerate commercial deployment of Australia's sovereign biorefinery infrastructure.
          </p>
          <div className="flex gap-6 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-violet-600 to-purple-700 text-white px-12 py-5 rounded-lg text-[18px] hover:from-violet-700 hover:to-purple-800 transition-all"
            >
              Explore Partnership Opportunities
            </Link>
            <Link
              to="/insights"
              className="bg-white/10 backdrop-blur-sm text-white px-12 py-5 rounded-lg text-[18px] hover:bg-white/20 transition-all border border-white/20"
            >
              Read Latest Updates
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

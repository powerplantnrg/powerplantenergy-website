import { useState } from 'react';
import SEO from '../components/SEO';
import { Calculator, Leaf, FileText, Map, Calendar, TrendingUp } from 'lucide-react';
import { IncomeCalculator } from '../bamboo-toolkit/components/IncomeCalculator';
import { PlantGenetics } from '../bamboo-toolkit/components/PlantGenetics';
import { RegistrationForm } from '../bamboo-toolkit/components/RegistrationForm';
import { YieldMap } from '../bamboo-toolkit/components/YieldMap';
import { Timeline } from '../bamboo-toolkit/components/Timeline';
import { Dashboard } from '../bamboo-toolkit/components/Dashboard';

type Page = 'dashboard' | 'calculator' | 'genetics' | 'registration' | 'yield-map' | 'timeline';

export default function BambooToolkitPage() {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');

  const navigationItems = [
    { id: 'dashboard' as Page, label: 'Dashboard', icon: TrendingUp },
    { id: 'calculator' as Page, label: 'Income Calculator', icon: Calculator },
    { id: 'genetics' as Page, label: 'Plant Genetics', icon: Leaf },
    { id: 'yield-map' as Page, label: 'Yield Mapping', icon: Map },
    { id: 'timeline' as Page, label: 'Timeline', icon: Calendar },
    { id: 'registration' as Page, label: 'Register Property', icon: FileText },
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard onNavigate={setCurrentPage} />;
      case 'calculator':
        return <IncomeCalculator />;
      case 'genetics':
        return <PlantGenetics />;
      case 'registration':
        return <RegistrationForm />;
      case 'yield-map':
        return <YieldMap />;
      case 'timeline':
        return <Timeline />;
      default:
        return <Dashboard onNavigate={setCurrentPage} />;
    }
  };

  return (
    <>
      <SEO
        title="Bamboo Growers Toolkit | Power Plant Energy Australia"
        description="Comprehensive toolkit for bamboo farmers including income calculators, plant genetics information, yield mapping, and property registration. Supporting sustainable bamboo cultivation for biorefinery feedstock."
        keywords="bamboo farming toolkit, bamboo income calculator, bamboo yield mapping, sustainable bamboo cultivation, biorefinery feedstock, beema bamboo, bamboo growers Australia"
        canonicalUrl="https://powerplantenergy.com.au/bamboo-toolkit"
      />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-gradient-to-b from-black via-emerald-950/20 to-black">
        <div className="max-w-[1920px] mx-auto px-10 relative z-10">
          <div className="max-w-5xl">
            <div className="bg-white box-border content-stretch inline-flex gap-[10px] items-center justify-center px-[17px] py-[8px] rounded-[4px] mb-8">
              <p className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[10px] text-black text-nowrap tracking-[-0.4px] whitespace-pre">Grower Resources</p>
            </div>

            <h1 className="font-['Poppins:SemiBold',_sans-serif] leading-[1.1] not-italic text-[96px] text-white tracking-[-3.84px] mb-12">
              Bamboo Growers Toolkit
            </h1>

            <p className="font-['Poppins:SemiBold',_sans-serif] leading-[1.3] not-italic text-[28px] text-white/90 tracking-[-1.68px] mb-12">
              Comprehensive tools and resources to support sustainable bamboo cultivation. Calculate potential income, access plant genetics information, map yields, and register your property for our biorefinery feedstock program.
            </p>
          </div>
        </div>
      </section>

      {/* Toolkit Navigation */}
      <section className="bg-white/5 backdrop-blur-sm border-y border-white/10 sticky top-0 z-40">
        <div className="max-w-[1920px] mx-auto px-10">
          <div className="flex overflow-x-auto">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`
                    flex items-center gap-2 px-6 py-4 border-b-2 transition-colors whitespace-nowrap
                    ${currentPage === item.id
                      ? 'border-emerald-500 text-emerald-400'
                      : 'border-transparent text-white/60 hover:text-white hover:border-white/30'
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm font-['Poppins:Medium',_sans-serif]">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Toolkit Content */}
      <section className="relative py-16 min-h-screen">
        <div className="max-w-[1920px] mx-auto px-10">
          {renderPage()}
        </div>
      </section>
    </>
  );
}

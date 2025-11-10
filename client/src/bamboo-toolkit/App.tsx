import { useState } from 'react';
import { Calculator, Leaf, FileText, Map, Calendar, TrendingUp } from 'lucide-react';
import { IncomeCalculator } from './components/IncomeCalculator';
import { PlantGenetics } from './components/PlantGenetics';
import { RegistrationForm } from './components/RegistrationForm';
import { YieldMap } from './components/YieldMap';
import { Timeline } from './components/Timeline';
import { Dashboard } from './components/Dashboard';
import { Toaster } from './components/ui/sonner';
import powerPlantLogo from 'figma:asset/76cf1528df873f91047e26921f87d5a8ee10cb36.png';
import caneGrowersLogo from 'figma:asset/7fa50e92f33ad5bd94b691775e456e5a5caa808f.png';

type Page = 'dashboard' | 'calculator' | 'genetics' | 'registration' | 'yield-map' | 'timeline';

export default function App() {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Toaster position="top-right" />
      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-8">
              <img src={powerPlantLogo} alt="PowerPlant Energy" className="h-14" />
              <div className="hidden md:block">
                <h1 className="text-slate-900">Bamboo Farming Toolkit</h1>
                <p className="text-slate-600 text-sm">by PowerPlant Energy Pty Ltd</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <p className="text-sm text-slate-600">In partnership with</p>
                <img 
                  src={caneGrowersLogo} 
                  alt="Cane Growers Association Australia" 
                  className="h-8 w-auto mt-1"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`
                    flex items-center gap-2 px-4 py-3 border-b-2 transition-colors whitespace-nowrap
                    ${currentPage === item.id
                      ? 'border-green-600 text-green-700'
                      : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300'
                    }
                  `}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-sm text-slate-600">
            <p>© 2024 PowerPlant Energy Pty Ltd. All rights reserved.</p>
            <p className="mt-1">Bamboo Farming Toolkit - Professional Agricultural Analysis Platform</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
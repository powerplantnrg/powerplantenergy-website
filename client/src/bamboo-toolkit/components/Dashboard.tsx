import { Calculator, Leaf, Map, Calendar, FileText, TrendingUp, DollarSign, Droplets } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

type Page = 'dashboard' | 'calculator' | 'genetics' | 'registration' | 'yield-map' | 'timeline';

interface DashboardProps {
  onNavigate: (page: Page) => void;
}

export function Dashboard({ onNavigate }: DashboardProps) {
  const tools = [
    {
      id: 'calculator' as Page,
      title: 'Income Calculator',
      description: 'Professional financial modeling with comprehensive cost analysis and revenue projections',
      icon: Calculator,
      color: 'bg-blue-500',
    },
    {
      id: 'genetics' as Page,
      title: 'Plant Genetics & Species',
      description: 'Detailed botanical profiles for Beema bamboo and companion species with cultivation requirements',
      icon: Leaf,
      color: 'bg-green-600',
    },
    {
      id: 'yield-map' as Page,
      title: 'Satellite Yield Mapping',
      description: 'Advanced satellite imagery analysis with heat maps for soil health and biomass monitoring',
      icon: Map,
      color: 'bg-purple-500',
    },
    {
      id: 'timeline' as Page,
      title: 'Development Timeline',
      description: '10-year phased implementation roadmap from establishment through optimization',
      icon: Calendar,
      color: 'bg-orange-500',
    },
    {
      id: 'registration' as Page,
      title: 'Property Registration',
      description: 'Register your property and connect with the Burdekin bamboo farming network',
      icon: FileText,
      color: 'bg-indigo-500',
    },
  ];

  const stats = [
    {
      label: 'Avg. Yield Potential',
      value: '100-200',
      unit: 'tonnes/ha',
      icon: TrendingUp,
      color: 'text-green-600',
    },
    {
      label: 'Peak Yield (Year 5+)',
      value: '160',
      unit: 'tonnes/ha (dry)',
      icon: TrendingUp,
      color: 'text-purple-600',
    },
    {
      label: 'Maturity Period',
      value: '3-4',
      unit: 'years',
      icon: Calendar,
      color: 'text-blue-600',
    },
    {
      label: 'Water Efficiency',
      value: '1000-2500',
      unit: 'mm rainfall',
      icon: Droplets,
      color: 'text-cyan-600',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-8 text-white">
        <h2 className="text-3xl mb-2">Bamboo Farming Toolkit</h2>
        <p className="text-green-50 text-lg">
          Comprehensive analysis platform for sustainable bamboo agriculture
        </p>
        <p className="text-green-100 mt-4">
          Evidence-based decision making with professional tools for feasibility assessment, 
          financial modeling, and operational management.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label}>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-slate-600">{stat.label}</p>
                    <div className="flex items-baseline gap-1 mt-2">
                      <span className={`text-3xl ${stat.color}`}>{stat.value}</span>
                      <span className="text-sm text-slate-600">{stat.unit}</span>
                    </div>
                  </div>
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Tools Grid */}
      <div>
        <h3 className="text-slate-900 mb-4">Professional Analysis Tools</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Card key={tool.id} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onNavigate(tool.id)}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`${tool.color} p-3 rounded-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{tool.title}</CardTitle>
                      <CardDescription className="mt-1">{tool.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => onNavigate(tool.id)}
                  >
                    Open Tool
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Info Section */}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle>Why Choose This Toolkit?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <p className="text-slate-900">Evidence-Based Decision Making</p>
            <p className="text-sm text-slate-600">All calculations built on peer-reviewed agricultural research and market data from global bamboo industry leaders.</p>
          </div>
          <div>
            <p className="text-slate-900">Comprehensive Coverage</p>
            <p className="text-sm text-slate-600">From feasibility assessment through operational management, covering economic, environmental, and technical dimensions.</p>
          </div>
          <div>
            <p className="text-slate-900">Scalable Framework</p>
            <p className="text-sm text-slate-600">Adaptable models for plots ranging from small-holder operations to large-scale commercial plantations.</p>
          </div>
          <div>
            <p className="text-slate-900">Government-Ready Documentation</p>
            <p className="text-sm text-slate-600">Export-ready reports suitable for funding applications, regulatory submissions, and partner presentations.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
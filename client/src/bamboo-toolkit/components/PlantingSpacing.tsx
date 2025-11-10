import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Ruler, Grid3x3, Calendar, TrendingUp } from 'lucide-react';

export function PlantingSpacing() {
  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-green-50 border-green-200">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-green-700">Plant Density</p>
              <p className="text-4xl text-green-900 my-2">2,500</p>
              <p className="text-sm text-green-700">plants per hectare</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-blue-700">First Harvest</p>
              <p className="text-4xl text-blue-900 my-2">2.5</p>
              <p className="text-sm text-blue-700">years after planting</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-purple-50 border-purple-200">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-purple-700">Expected Yield</p>
              <p className="text-4xl text-purple-900 my-2">100</p>
              <p className="text-sm text-purple-700">tonnes/year/hectare</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Spacing Patterns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pattern 1: Closer Spacing */}
        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle>Standard Spacing Pattern</CardTitle>
                <CardDescription>Optimal for maximum yield per hectare</CardDescription>
              </div>
              <Badge className="bg-green-600">Recommended</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Visual Grid */}
            <div className="bg-slate-50 rounded-lg p-6 border-2 border-slate-200">
              <div className="relative">
                {/* Spacing measurements */}
                <div className="absolute -top-8 left-0 right-0 flex justify-center">
                  <div className="flex items-center gap-2">
                    <div className="h-0.5 w-16 bg-red-500" />
                    <span className="text-sm text-slate-700">8 feet</span>
                    <div className="h-0.5 w-16 bg-red-500" />
                  </div>
                </div>
                
                <div className="absolute -left-16 top-0 bottom-0 flex flex-col justify-center">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-0.5 h-12 bg-red-500" />
                    <span className="text-sm text-slate-700 -rotate-90 whitespace-nowrap">4 feet</span>
                    <div className="w-0.5 h-12 bg-red-500" />
                  </div>
                </div>

                {/* Grid pattern */}
                <div className="grid grid-cols-5 gap-4">
                  {Array.from({ length: 15 }).map((_, i) => (
                    <div key={i} className="flex flex-col items-center justify-center h-16">
                      <div className="w-3 h-12 bg-gradient-to-t from-green-800 to-green-600 rounded-t-sm" />
                      <div className="w-4 h-4 bg-yellow-500 rounded-full border-2 border-red-600 -mt-2" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Specifications */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Ruler className="w-4 h-4 text-slate-600" />
                  <p className="text-sm text-slate-600">Row Spacing</p>
                </div>
                <p className="text-2xl text-slate-900">8 feet</p>
                <p className="text-xs text-slate-500">(2.4 meters)</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Ruler className="w-4 h-4 text-slate-600" />
                  <p className="text-sm text-slate-600">Plant Spacing</p>
                </div>
                <p className="text-2xl text-slate-900">4 feet</p>
                <p className="text-xs text-slate-500">(1.2 meters)</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Grid3x3 className="w-4 h-4 text-slate-600" />
                  <p className="text-sm text-slate-600">Density</p>
                </div>
                <p className="text-2xl text-slate-900">2,500</p>
                <p className="text-xs text-slate-500">plants/hectare</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-slate-600" />
                  <p className="text-sm text-slate-600">Target Yield</p>
                </div>
                <p className="text-2xl text-slate-900">100 t/ha</p>
                <p className="text-xs text-slate-500">at 2.5 years</p>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-3 rounded text-sm text-green-900">
              <p className="mb-1">✓ Maximizes plants per hectare</p>
              <p className="mb-1">✓ Efficient land utilization</p>
              <p>✓ Suitable for intensive cultivation</p>
            </div>
          </CardContent>
        </Card>

        {/* Pattern 2: Wider Spacing */}
        <Card>
          <CardHeader>
            <CardTitle>Wide Spacing Pattern</CardTitle>
            <CardDescription>Better for mechanized harvesting and larger culms</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Visual Grid */}
            <div className="bg-slate-50 rounded-lg p-6 border-2 border-slate-200">
              <div className="relative">
                {/* Spacing measurements */}
                <div className="absolute -top-8 left-0 right-0 flex justify-center">
                  <div className="flex items-center gap-2">
                    <div className="h-0.5 w-20 bg-red-500" />
                    <span className="text-sm text-slate-700">12 feet</span>
                    <div className="h-0.5 w-20 bg-red-500" />
                  </div>
                </div>

                {/* Grid pattern - wider spacing */}
                <div className="grid grid-cols-4 gap-6">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="flex flex-col items-center justify-center h-16">
                      <div className="w-4 h-14 bg-gradient-to-t from-green-800 to-green-600 rounded-t-sm" />
                      <div className="w-5 h-5 bg-yellow-500 rounded-full border-2 border-red-600 -mt-2" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Specifications */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Ruler className="w-4 h-4 text-slate-600" />
                  <p className="text-sm text-slate-600">Row Spacing</p>
                </div>
                <p className="text-2xl text-slate-900">12 feet</p>
                <p className="text-xs text-slate-500">(3.6 meters)</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Ruler className="w-4 h-4 text-slate-600" />
                  <p className="text-sm text-slate-600">Plant Spacing</p>
                </div>
                <p className="text-2xl text-slate-900">12 feet</p>
                <p className="text-xs text-slate-500">(3.6 meters)</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Grid3x3 className="w-4 h-4 text-slate-600" />
                  <p className="text-sm text-slate-600">Density</p>
                </div>
                <p className="text-2xl text-slate-900">~1,100</p>
                <p className="text-xs text-slate-500">plants/hectare</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-slate-600" />
                  <p className="text-sm text-slate-600">First Harvest</p>
                </div>
                <p className="text-2xl text-slate-900">3 years</p>
                <p className="text-xs text-slate-500">larger culms</p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-3 rounded text-sm text-blue-900">
              <p className="mb-1">✓ Easier machinery access</p>
              <p className="mb-1">✓ Larger individual culm diameter</p>
              <p>✓ Reduced competition between plants</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Comparative Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Spacing Pattern Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 bg-slate-50">Factor</th>
                  <th className="text-left p-3 bg-green-50">Standard (8' x 4')</th>
                  <th className="text-left p-3 bg-blue-50">Wide (12' x 12')</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-slate-50">
                  <td className="p-3">Plants per Hectare</td>
                  <td className="p-3 bg-green-50">2,500 plants</td>
                  <td className="p-3 bg-blue-50">~1,100 plants</td>
                </tr>
                <tr className="border-b hover:bg-slate-50">
                  <td className="p-3">Expected Yield (Year 2.5-3)</td>
                  <td className="p-3 bg-green-50">100 tonnes/ha</td>
                  <td className="p-3 bg-blue-50">70-80 tonnes/ha</td>
                </tr>
                <tr className="border-b hover:bg-slate-50">
                  <td className="p-3">Initial Investment</td>
                  <td className="p-3 bg-green-50">Higher (more plants)</td>
                  <td className="p-3 bg-blue-50">Lower (fewer plants)</td>
                </tr>
                <tr className="border-b hover:bg-slate-50">
                  <td className="p-3">Mechanization Suitability</td>
                  <td className="p-3 bg-green-50">Manual/Semi-automated</td>
                  <td className="p-3 bg-blue-50">Fully mechanized</td>
                </tr>
                <tr className="border-b hover:bg-slate-50">
                  <td className="p-3">Culm Diameter</td>
                  <td className="p-3 bg-green-50">Medium (8-10 cm)</td>
                  <td className="p-3 bg-blue-50">Large (10-12 cm)</td>
                </tr>
                <tr className="border-b hover:bg-slate-50">
                  <td className="p-3">Management Intensity</td>
                  <td className="p-3 bg-green-50">High</td>
                  <td className="p-3 bg-blue-50">Moderate</td>
                </tr>
                <tr className="border-b hover:bg-slate-50">
                  <td className="p-3">Best For</td>
                  <td className="p-3 bg-green-50">Maximum biomass production</td>
                  <td className="p-3 bg-blue-50">Premium quality culms</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Implementation Guidelines */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-orange-50 border-orange-200">
          <CardHeader>
            <CardTitle className="text-orange-900">Planting Guidelines</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-orange-900">
            <p>• Mark rows with string lines for accurate spacing</p>
            <p>• Prepare planting pits 60cm x 60cm x 60cm</p>
            <p>• Add 10-15 kg organic compost per pit</p>
            <p>• Plant rhizomes or offset at 10-15cm depth</p>
            <p>• Ensure proper drainage in each pit</p>
            <p>• Mulch around plants to retain moisture</p>
            <p>• Stake young shoots for first 6 months</p>
          </CardContent>
        </Card>

        <Card className="bg-purple-50 border-purple-200">
          <CardHeader>
            <CardTitle className="text-purple-900">Maintenance Schedule</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-purple-900">
            <p>• <strong>Year 1:</strong> Regular watering, weed control, fertilization</p>
            <p>• <strong>Year 2:</strong> Thinning of weak shoots, pest monitoring</p>
            <p>• <strong>Year 2.5:</strong> First selective harvest (20-30%)</p>
            <p>• <strong>Year 3+:</strong> Annual harvest of 3-4 year culms</p>
            <p>• Maintain 30-40% of mature culms for regeneration</p>
            <p>• Annual organic fertilizer application</p>
            <p>• Irrigation during dry periods (first 2 years critical)</p>
          </CardContent>
        </Card>
      </div>

      {/* Key Takeaway */}
      <Card className="bg-gradient-to-r from-green-600 to-green-700 text-white">
        <CardContent className="pt-6">
          <div className="text-center space-y-2">
            <h3 className="text-2xl">Recommended: 8' x 4' Spacing</h3>
            <p className="text-green-50">
              2,500 plants per hectare • 100 tonnes/year yield from Year 2.5 • Optimal ROI for most farmers
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

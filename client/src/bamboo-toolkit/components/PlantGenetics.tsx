import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Leaf, Droplets, Thermometer, TrendingUp } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { PlantingSpacing } from './PlantingSpacing';

export function PlantGenetics() {
  const species = [
    {
      name: 'Beema Bamboo',
      scientificName: 'Bambusa Balcooa',
      featured: true,
      characteristics: {
        culmHeight: '15-20 meters',
        diameter: '8-12 cm',
        annualYield: '100-200 tonnes/ha',
        peakYield: '160 tonnes/ha (dry weight)',
        growthPeriod: '120 days (monsoon)',
        lifespan: '50-60 years per plant',
        temperature: '15-40°C',
        rainfall: '1000-2500mm',
        soilPH: '6.0-7.5',
        maturity: '3-4 years',
        productiveLifespan: '50-60 years',
        marketValue: '$180-220/tonne',
      },
    },
    {
      name: 'Bambusa Bambos',
      scientificName: 'Bambusa bambos',
      featured: false,
      characteristics: {
        culmHeight: '12-15 meters',
        diameter: '6-10 cm',
        annualYield: '80-150 tonnes/ha',
        growthPeriod: '90-100 days',
        bestFor: 'Furniture, handicrafts',
        temperature: '18-35°C',
        rainfall: '1000-2000mm',
        soilPH: '6.5-7.5',
        maturity: '3-5 years',
        productiveLifespan: '45-55 years',
        marketValue: '$140-180/tonne',
      },
    },
    {
      name: 'Phyllostachys Edulis',
      scientificName: 'Moso Bamboo',
      featured: false,
      characteristics: {
        culmHeight: '18-25 meters',
        diameter: '10-15 cm',
        annualYield: '120-180 tonnes/ha',
        climate: 'Cool mountain regions',
        bestFor: 'Flooring, construction',
        temperature: '5-25°C (cooler climate)',
        rainfall: '1200-1800mm',
        soilPH: '5.5-7.0',
        maturity: '4-5 years',
        productiveLifespan: '60-70 years',
        marketValue: '$200-280/tonne',
      },
    },
  ];

  const comparisonData = [
    {
      characteristic: 'Temperature Tolerance',
      beema: '15-40°C',
      bambusa: '18-35°C',
      phyllostachys: '5-25°C (cooler)',
    },
    {
      characteristic: 'Rainfall Required',
      beema: '1000-2500mm',
      bambusa: '1000-2000mm',
      phyllostachys: '1200-1800mm',
    },
    {
      characteristic: 'Soil pH Preference',
      beema: '6.0-7.5',
      bambusa: '6.5-7.5',
      phyllostachys: '5.5-7.0',
    },
    {
      characteristic: 'Maturity Period',
      beema: '3-4 years',
      bambusa: '3-5 years',
      phyllostachys: '4-5 years',
    },
    {
      characteristic: 'Productive Lifespan',
      beema: '50-60 years',
      bambusa: '45-55 years',
      phyllostachys: '60-70 years',
    },
    {
      characteristic: 'Annual Yield Range',
      beema: '100-200 t/ha',
      bambusa: '80-150 t/ha',
      phyllostachys: '120-180 t/ha',
    },
    {
      characteristic: 'Peak Yield (Year 5+)',
      beema: '160 t/ha (dry)',
      bambusa: '120 t/ha (dry)',
      phyllostachys: '150 t/ha (dry)',
    },
    {
      characteristic: 'Market Value',
      beema: '$180-220/t',
      bambusa: '$140-180/t',
      phyllostachys: '$200-280/t',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Leaf className="w-8 h-8 text-green-600" />
        <div>
          <h2 className="text-slate-900">Plant Profile & Genetic Characteristics</h2>
          <p className="text-slate-600 text-sm">Detailed botanical database for bamboo species and cultivation requirements</p>
        </div>
      </div>

      {/* Tabs for different sections */}
      <Tabs defaultValue="species" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="species">Species Profiles</TabsTrigger>
          <TabsTrigger value="spacing">Planting Spacing</TabsTrigger>
          <TabsTrigger value="cultivation">Cultivation Guide</TabsTrigger>
        </TabsList>

        <TabsContent value="species" className="space-y-6 mt-6">
      {/* Species Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {species.map((sp) => (
          <Card key={sp.name} className={sp.featured ? 'border-green-500 border-2' : ''}>
            <CardHeader>
              {sp.featured && <Badge className="w-fit bg-green-600 mb-2">RECOMMENDED</Badge>}
              <CardTitle className="text-lg">{sp.name}</CardTitle>
              <CardDescription className="italic">{sp.scientificName}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="text-slate-600">Culm Height</p>
                  <p className="text-slate-900">{sp.characteristics.culmHeight}</p>
                </div>
                <div>
                  <p className="text-slate-600">Diameter</p>
                  <p className="text-slate-900">{sp.characteristics.diameter}</p>
                </div>
                <div>
                  <p className="text-slate-600">Annual Yield</p>
                  <p className="text-slate-900">{sp.characteristics.annualYield}</p>
                </div>
                <div>
                  <p className="text-slate-600">Growth Period</p>
                  <p className="text-slate-900">{sp.characteristics.growthPeriod}</p>
                </div>
                {sp.characteristics.lifespan && (
                  <div className="col-span-2">
                    <p className="text-slate-600">Lifespan</p>
                    <p className="text-slate-900">{sp.characteristics.lifespan}</p>
                  </div>
                )}
                {sp.characteristics.bestFor && (
                  <div className="col-span-2">
                    <p className="text-slate-600">Best For</p>
                    <p className="text-slate-900">{sp.characteristics.bestFor}</p>
                  </div>
                )}
                {sp.characteristics.climate && (
                  <div className="col-span-2">
                    <p className="text-slate-600">Climate</p>
                    <p className="text-slate-900">{sp.characteristics.climate}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Detailed Characteristics for Beema */}
      <Card className="border-green-200 bg-green-50">
        <CardHeader>
          <CardTitle>Beema Bamboo - Detailed Specifications</CardTitle>
          <CardDescription>Recommended species for Australian cultivation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-green-700">
                <Thermometer className="w-5 h-5" />
                <p>Temperature Range</p>
              </div>
              <p className="text-2xl text-slate-900">15-40°C</p>
              <p className="text-sm text-slate-600">Tolerates tropical to subtropical climates</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-blue-600">
                <Droplets className="w-5 h-5" />
                <p>Rainfall Needs</p>
              </div>
              <p className="text-2xl text-slate-900">1000-2500mm</p>
              <p className="text-sm text-slate-600">Annual precipitation requirement</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-purple-600">
                <TrendingUp className="w-5 h-5" />
                <p>Peak Yield</p>
              </div>
              <p className="text-2xl text-slate-900">160 t/ha (dry weight)</p>
              <p className="text-sm text-slate-600">From year 5 onwards</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-orange-600">
                <Leaf className="w-5 h-5" />
                <p>Maturity</p>
              </div>
              <p className="text-2xl text-slate-900">3-4 years</p>
              <p className="text-sm text-slate-600">Time to first commercial harvest</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Comparison Table */}
      <Card>
        <CardHeader>
          <CardTitle>Species Comparison Matrix</CardTitle>
          <CardDescription>Key characteristics across bamboo varieties</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 bg-slate-50">Characteristic</th>
                  <th className="text-left p-3 bg-green-50">Beema</th>
                  <th className="text-left p-3 bg-slate-50">Bambusa</th>
                  <th className="text-left p-3 bg-slate-50">Phyllostachys</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row) => (
                  <tr key={row.characteristic} className="border-b hover:bg-slate-50">
                    <td className="p-3">{row.characteristic}</td>
                    <td className="p-3 bg-green-50">{row.beema}</td>
                    <td className="p-3">{row.bambusa}</td>
                    <td className="p-3">{row.phyllostachys}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
        </TabsContent>

        <TabsContent value="spacing" className="space-y-6 mt-6">
      {/* Planting Spacing */}
      <Card className="bg-gray-50 border-gray-200">
        <CardHeader>
          <CardTitle className="text-gray-900">Planting Spacing</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-gray-900">
          <PlantingSpacing />
        </CardContent>
      </Card>
        </TabsContent>

        <TabsContent value="cultivation" className="space-y-6 mt-6">
      {/* Cultivation Requirements */}
      <Card>
        <CardHeader>
          <CardTitle>Optimal Cultivation Requirements</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="text-slate-900">Soil Requirements</h4>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• Well-drained loamy to sandy loam soils preferred</li>
              <li>• pH range: 6.0-7.5 (slightly acidic to neutral)</li>
              <li>• Rich in organic matter with good water retention</li>
              <li>• Avoid waterlogged or extremely heavy clay soils</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-slate-900">Climate Suitability</h4>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• Tropical to subtropical regions ideal</li>
              <li>• Monsoon areas with distinct wet/dry seasons</li>
              <li>• Queensland coastal and inland regions suitable</li>
              <li>• Protection from strong winds recommended</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-slate-900">Water Management</h4>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• Critical during establishment (first 2 years)</li>
              <li>• Irrigation required in dry seasons</li>
              <li>• Drip or sprinkler systems recommended</li>
              <li>• Mulching helps retain soil moisture</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-slate-900">Nutrient Requirements</h4>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• Nitrogen-rich fertilizer for shoot development</li>
              <li>• Organic compost application annually</li>
              <li>• Silica supplementation improves culm strength</li>
              <li>• Regular soil testing recommended</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-900">Cultivation Best Practices</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-blue-900">
          <p>• Plant spacing: 5m x 5m for optimal growth and harvesting access</p>
          <p>• Rhizome barrier installation prevents unwanted spreading</p>
          <p>• Annual thinning of mature culms promotes new shoot production</p>
          <p>• Integrated pest management for borers and shoot flies</p>
          <p>• Harvest culms at 3-4 years of age for best quality</p>
          <p>• Leave 30-40% of mature culms for plantation regeneration</p>
        </CardContent>
      </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
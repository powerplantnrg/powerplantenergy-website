import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { Map, Thermometer, Droplets, Wind, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function YieldMap() {
  const [selectedLayer, setSelectedLayer] = useState('ndvi');
  const [selectedMonth, setSelectedMonth] = useState('july');

  const layers = [
    { id: 'ndvi', name: 'NDVI (Vegetation Health)', description: 'Normalized Difference Vegetation Index' },
    { id: 'yield', name: 'Predicted Yield', description: 'AI-powered biomass estimation' },
    { id: 'moisture', name: 'Soil Moisture', description: 'Ground water content analysis' },
    { id: 'temperature', name: 'Surface Temperature', description: 'Thermal infrared mapping' },
    { id: 'biomass', name: 'Biomass Estimate', description: 'Carbon stock assessment' },
  ];

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const stats = [
    { label: 'Avg Yield (Predicted)', value: '18.5', unit: 't/ha', icon: TrendingUp, color: 'text-green-600' },
    { label: 'Plantation Health Index', value: '76', unit: '%', icon: TrendingUp, color: 'text-blue-600' },
    { label: 'Stress Areas', value: '3', unit: 'zones', icon: Wind, color: 'text-orange-600' },
    { label: 'Avg Surface Temp', value: '24.5', unit: '°C', icon: Thermometer, color: 'text-red-600' },
  ];

  const heatmapColors = [
    { label: 'Low / Stressed', color: 'bg-red-200', value: '0-20%' },
    { label: 'Below Average', color: 'bg-orange-200', value: '20-40%' },
    { label: 'Moderate', color: 'bg-yellow-200', value: '40-60%' },
    { label: 'Good Health', color: 'bg-lime-300', value: '60-80%' },
    { label: 'Excellent', color: 'bg-green-400', value: '80-100%' },
  ];

  // Generate grid data for heatmap
  const generateHeatmapGrid = () => {
    const grid = [];
    for (let i = 0; i < 100; i++) {
      const value = Math.random();
      let colorClass = 'bg-red-200';
      
      if (value < 0.2) colorClass = 'bg-red-200';
      else if (value < 0.4) colorClass = 'bg-orange-200';
      else if (value < 0.6) colorClass = 'bg-yellow-200';
      else if (value < 0.8) colorClass = 'bg-lime-300';
      else colorClass = 'bg-green-400';

      grid.push({
        id: i,
        value: Math.round(value * 100),
        colorClass,
      });
    }
    return grid;
  };

  const heatmapData = generateHeatmapGrid();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Map className="w-8 h-8 text-green-600" />
        <div>
          <h2 className="text-slate-900">Satellite Yield Mapping & Monitoring</h2>
          <p className="text-slate-600 text-sm">Advanced satellite imagery analysis with heat maps and biomass monitoring</p>
        </div>
      </div>

      {/* Controls */}
      <Card>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm text-slate-700">Analysis Layer</label>
              <Select value={selectedLayer} onValueChange={setSelectedLayer}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {layers.map((layer) => (
                    <SelectItem key={layer.id} value={layer.id}>
                      {layer.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-xs text-slate-600">
                {layers.find(l => l.id === selectedLayer)?.description}
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-slate-700">Time Period</label>
              <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {months.map((month, idx) => (
                    <SelectItem key={month} value={month.toLowerCase()}>
                      {month} 2024
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-xs text-slate-600">
                Select month for historical or current analysis
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label}>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-slate-600">{stat.label}</p>
                    <div className="flex items-baseline gap-1 mt-2">
                      <span className={`text-2xl ${stat.color}`}>{stat.value}</span>
                      <span className="text-sm text-slate-600">{stat.unit}</span>
                    </div>
                  </div>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Main Map Display */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Satellite View with Heat Map Overlay</CardTitle>
              <CardDescription>
                {layers.find(l => l.id === selectedLayer)?.name} - {selectedMonth.charAt(0).toUpperCase() + selectedMonth.slice(1)} 2024
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Satellite Background */}
              <div className="relative rounded-lg overflow-hidden border-2 border-slate-200">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1750418180525-cce49e403e78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXRlbGxpdGUlMjBlYXJ0aCUyMHZpZXclMjBhZ3JpY3VsdHVyYWx8ZW58MXx8fHwxNzYyNzM0MTEyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Satellite View"
                  className="w-full h-[400px] object-cover"
                />
                
                {/* Heatmap Overlay Grid */}
                <div className="absolute inset-0 bg-black bg-opacity-20">
                  <div className="grid grid-cols-10 grid-rows-10 w-full h-full gap-1 p-2">
                    {heatmapData.map((cell) => (
                      <div
                        key={cell.id}
                        className={`${cell.colorClass} opacity-60 hover:opacity-90 rounded-sm cursor-pointer transition-opacity`}
                        title={`Plot ${cell.id + 1}: ${cell.value}% health`}
                      />
                    ))}
                  </div>
                </div>

                {/* Overlay Label */}
                <div className="absolute top-4 left-4 bg-white bg-opacity-90 px-3 py-2 rounded-lg shadow">
                  <p className="text-xs text-slate-600">Heat Map Overlay Active</p>
                  <p className="text-sm text-slate-900">{layers.find(l => l.id === selectedLayer)?.name}</p>
                </div>
              </div>

              {/* Legend */}
              <div className="mt-4 p-4 bg-slate-50 rounded-lg">
                <p className="text-sm text-slate-700 mb-3">Heat Map Legend</p>
                <div className="flex flex-wrap gap-3">
                  {heatmapColors.map((item) => (
                    <div key={item.label} className="flex items-center gap-2">
                      <div className={`w-6 h-6 ${item.color} rounded border border-slate-300`} />
                      <div>
                        <p className="text-xs text-slate-900">{item.label}</p>
                        <p className="text-xs text-slate-600">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Analysis Panel */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Layer Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {selectedLayer === 'ndvi' && (
                <div className="space-y-2">
                  <Badge className="bg-green-600">Vegetation Health</Badge>
                  <p className="text-sm text-slate-700">
                    NDVI measures photosynthetic activity using near-infrared and red light reflectance. 
                    Higher values indicate healthier, denser vegetation.
                  </p>
                  <div className="pt-2 space-y-1 text-xs text-slate-600">
                    <p>• 0.8-1.0: Dense, healthy bamboo</p>
                    <p>• 0.6-0.8: Good vegetation cover</p>
                    <p>• 0.4-0.6: Moderate growth</p>
                    <p>• Below 0.4: Stressed or sparse</p>
                  </div>
                </div>
              )}

              {selectedLayer === 'yield' && (
                <div className="space-y-2">
                  <Badge className="bg-purple-600">AI Prediction</Badge>
                  <p className="text-sm text-slate-700">
                    Machine learning models predict yield based on historical data, current vegetation indices, 
                    and environmental factors.
                  </p>
                  <div className="pt-2 space-y-1 text-xs text-slate-600">
                    <p>• Accuracy: ±15% of actual yield</p>
                    <p>• Updated monthly</p>
                    <p>• Factors: NDVI, rainfall, temperature</p>
                  </div>
                </div>
              )}

              {selectedLayer === 'moisture' && (
                <div className="space-y-2">
                  <Badge className="bg-blue-600">Soil Analysis</Badge>
                  <p className="text-sm text-slate-700">
                    Soil moisture content derived from radar satellite data, indicating water availability 
                    for plant growth and irrigation needs.
                  </p>
                  <div className="pt-2 space-y-1 text-xs text-slate-600">
                    <p>• High moisture: Dark blue zones</p>
                    <p>• Optimal range: 60-80%</p>
                    <p>• Irrigation recommended: Below 40%</p>
                  </div>
                </div>
              )}

              {selectedLayer === 'temperature' && (
                <div className="space-y-2">
                  <Badge className="bg-red-600">Thermal Imaging</Badge>
                  <p className="text-sm text-slate-700">
                    Surface temperature from thermal infrared sensors helps identify heat stress 
                    and water deficiency areas.
                  </p>
                  <div className="pt-2 space-y-1 text-xs text-slate-600">
                    <p>• Optimal: 20-28°C</p>
                    <p>• Heat stress: Above 35°C</p>
                    <p>• Resolution: 30m per pixel</p>
                  </div>
                </div>
              )}

              {selectedLayer === 'biomass' && (
                <div className="space-y-2">
                  <Badge className="bg-green-700">Carbon Stock</Badge>
                  <p className="text-sm text-slate-700">
                    Estimated above-ground biomass calculated from vegetation indices and allometric equations 
                    for carbon credit assessment.
                  </p>
                  <div className="pt-2 space-y-1 text-xs text-slate-600">
                    <p>• Bamboo: ~60 tonnes/ha at maturity</p>
                    <p>• Carbon content: ~45% of biomass</p>
                    <p>• Updated quarterly</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="bg-orange-50 border-orange-200">
            <CardHeader>
              <CardTitle className="text-lg text-orange-900">Action Required</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-orange-900">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-1.5" />
                <p>3 zones showing vegetation stress - investigate irrigation</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-1.5" />
                <p>Southwest corner has low NDVI - check for pest damage</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-1.5" />
                <p>Northern plots ready for harvest (optimal biomass)</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-lg text-blue-900">Data Sources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-xs text-blue-900">
              <p>• Sentinel-2: 10m optical imagery</p>
              <p>• Landsat 8: Thermal & multispectral</p>
              <p>• Sentinel-1: Radar for soil moisture</p>
              <p>• Weather stations: Ground validation</p>
              <p>• Update frequency: 5-10 days</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Historical Trends */}
      <Card>
        <CardHeader>
          <CardTitle>Historical Analysis & Trends</CardTitle>
          <CardDescription>Plantation health trends over the past 6 months</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month, idx) => {
              const health = 60 + Math.random() * 25;
              const colorClass = health > 80 ? 'bg-green-500' : health > 60 ? 'bg-lime-400' : 'bg-yellow-400';
              return (
                <div key={month} className="text-center space-y-2">
                  <p className="text-sm text-slate-700">{month}</p>
                  <div className={`h-24 ${colorClass} rounded-lg flex items-end justify-center pb-2`}>
                    <span className="text-white text-sm">{Math.round(health)}%</span>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Technical Info */}
      <Card className="bg-slate-50 border-slate-200">
        <CardHeader>
          <CardTitle>Technical Specifications</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <p className="text-slate-900">Spatial Resolution</p>
            <p className="text-slate-600">10m - 30m per pixel depending on sensor</p>
          </div>
          <div>
            <p className="text-slate-900">Temporal Resolution</p>
            <p className="text-slate-600">5-10 day revisit time for most satellites</p>
          </div>
          <div>
            <p className="text-slate-900">Analysis Algorithm</p>
            <p className="text-slate-600">Random Forest ML model with 87% accuracy</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

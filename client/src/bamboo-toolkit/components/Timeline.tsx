import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, CheckCircle2 } from 'lucide-react';

export function Timeline() {
  const timelineData = [
    {
      year: 'Year 1',
      phase: 'ESTABLISHMENT',
      color: 'bg-blue-600',
      milestones: [
        'Site preparation and soil amendment',
        'Rhizome collection and propagation',
        'Initial planting (20-30% capacity)',
        'Irrigation infrastructure installation',
        'Investment: $15,000-20,000/hectare',
      ],
    },
    {
      year: 'Year 2',
      phase: 'DEVELOPMENT',
      color: 'bg-purple-600',
      milestones: [
        'Additional planting to 70% capacity',
        'First limited harvest (20% of mature area)',
        'Pest management protocol establishment',
        'Equipment procurement begins',
      ],
    },
    {
      year: 'Year 3',
      phase: 'PRODUCTION',
      color: 'bg-green-600',
      milestones: [
        'Full plantation capacity (100%)',
        'Commercial harvest begins',
        'Processing facility operational',
        'Market partnerships established',
      ],
    },
    {
      year: 'Years 4-10',
      phase: 'OPTIMIZATION',
      color: 'bg-orange-600',
      milestones: [
        'Full annual production cycles',
        'Yield optimization and refinement',
        'Value-added product development',
        'Carbon credit generation and trading',
      ],
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Calendar className="w-8 h-8 text-green-600" />
        <div>
          <h2 className="text-slate-900">Development Timeline</h2>
          <p className="text-slate-600 text-sm">10-Year Phased Implementation Roadmap</p>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-green-600 to-orange-600 hidden md:block" />

        <div className="space-y-8">
          {timelineData.map((item, index) => (
            <Card key={item.year} className="relative hover:shadow-lg transition-shadow">
              {/* Timeline dot */}
              <div className="absolute -left-2 top-8 w-4 h-4 bg-white border-4 border-green-600 rounded-full hidden md:block" />
              
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className={`${item.color} text-white px-4 py-2 rounded-lg min-w-[100px] text-center`}>
                    <p className="text-sm opacity-90">Timeline</p>
                    <p>{item.year}</p>
                  </div>
                  <div className="flex-1">
                    <Badge className={`${item.color} text-white mb-2`}>{item.phase}</Badge>
                    <CardTitle className="text-lg">Phase {index + 1}: {item.phase.charAt(0) + item.phase.slice(1).toLowerCase()}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="ml-0 md:ml-[116px] space-y-2">
                  {item.milestones.map((milestone, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-slate-700 text-sm">{milestone}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Key Milestones Summary */}
      <Card className="bg-green-50 border-green-200">
        <CardHeader>
          <CardTitle className="text-green-900">Key Success Indicators</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center">1</div>
              <p className="text-green-900">Year 1-2: Foundation</p>
            </div>
            <p className="text-sm text-green-800 ml-10">
              Focus on establishment, infrastructure, and initial planting cycles
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center">2</div>
              <p className="text-green-900">Year 3-4: Production</p>
            </div>
            <p className="text-sm text-green-800 ml-10">
              Commercial harvesting begins, market development, and revenue generation
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center">3</div>
              <p className="text-green-900">Year 5-10: Maturity</p>
            </div>
            <p className="text-sm text-green-800 ml-10">
              Full production capacity, optimization, and sustainable operations
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Notes */}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-900">Implementation Notes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-blue-900">
          <p>• Timeline is indicative and may vary based on local conditions and management practices</p>
          <p>• Investment figures exclude land acquisition costs</p>
          <p>• Phased planting approach reduces initial capital requirements</p>
          <p>• Infrastructure development should align with plantation expansion</p>
          <p>• Regular monitoring and adaptive management recommended throughout all phases</p>
        </CardContent>
      </Card>
    </div>
  );
}

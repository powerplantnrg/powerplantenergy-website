import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { Calculator, DollarSign, TrendingUp, TrendingDown } from 'lucide-react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  AreaChart,
} from 'recharts';

interface CalculatorInputs {
  landArea: number;
  initialInvestment: number;
  marketPrice: number;
  expectedYield: number;
  annualOpCost: number;
  priceGrowth: number;
  includeLease: boolean;
  leaseRate: number;
  includeWater: boolean;
  waterCost: number;
  includeEquipment: boolean;
  equipmentFinance: number;
  includeServices: boolean;
  servicesCost: number;
  includeCarbon: boolean;
  carbonIncome: number;
}

export function IncomeCalculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    landArea: 10,
    initialInvestment: 150000,
    marketPrice: 140,
    expectedYield: 100,
    annualOpCost: 5000,
    priceGrowth: 3,
    includeLease: false,
    leaseRate: 500,
    includeWater: false,
    waterCost: 300,
    includeEquipment: false,
    equipmentFinance: 5000,
    includeServices: false,
    servicesCost: 1000,
    includeCarbon: false,
    carbonIncome: 2500,
  });

  const [projectionData, setProjectionData] = useState<any[]>([]);
  const [summary, setSummary] = useState({
    totalRevenue: 0,
    totalCosts: 0,
    netProfit: 0,
    paybackYear: 0,
    roi: 0,
    npv: 0,
  });

  useEffect(() => {
    calculateProjection();
  }, [inputs]);

  const calculateProjection = () => {
    const years = [];
    let cumulativeCashflow = -inputs.initialInvestment;
    let totalRevenue = 0;
    let totalCosts = inputs.initialInvestment;
    let paybackYear = 0;

    for (let year = 1; year <= 10; year++) {
      // Revenue starts from Year 3
      const yieldMultiplier = year < 3 ? 0 : year === 3 ? 0.5 : year === 4 ? 0.8 : 1.0;
      const currentYield = inputs.expectedYield * yieldMultiplier;
      const currentPrice = inputs.marketPrice * Math.pow(1 + inputs.priceGrowth / 100, year - 1);
      const bambooRevenue = inputs.landArea * currentYield * currentPrice;

      // Calculate costs
      const operatingCost = inputs.landArea * inputs.annualOpCost;
      const leaseCost = inputs.includeLease ? inputs.landArea * inputs.leaseRate : 0;
      const waterCost = inputs.includeWater ? inputs.landArea * inputs.waterCost : 0;
      const equipmentCost = inputs.includeEquipment ? inputs.equipmentFinance : 0;
      const servicesCost = inputs.includeServices ? inputs.landArea * inputs.servicesCost : 0;
      
      const totalYearCosts = operatingCost + leaseCost + waterCost + equipmentCost + servicesCost;

      // Carbon income (starts from Year 2)
      const carbonRevenue = inputs.includeCarbon && year >= 2 ? inputs.landArea * inputs.carbonIncome : 0;

      const totalYearRevenue = bambooRevenue + carbonRevenue;
      const netIncome = totalYearRevenue - totalYearCosts;

      totalRevenue += totalYearRevenue;
      totalCosts += totalYearCosts;
      cumulativeCashflow += netIncome;

      if (paybackYear === 0 && cumulativeCashflow > 0) {
        paybackYear = year;
      }

      years.push({
        year: `Year ${year}`,
        yearNum: year,
        bambooRevenue: Math.round(bambooRevenue),
        carbonRevenue: Math.round(carbonRevenue),
        totalRevenue: Math.round(totalYearRevenue),
        operatingCost: Math.round(operatingCost),
        leaseCost: Math.round(leaseCost),
        waterCost: Math.round(waterCost),
        equipmentCost: Math.round(equipmentCost),
        servicesCost: Math.round(servicesCost),
        totalCosts: Math.round(totalYearCosts),
        netIncome: Math.round(netIncome),
        cumulativeCashflow: Math.round(cumulativeCashflow),
      });
    }

    const netProfit = totalRevenue - totalCosts;
    const roi = ((netProfit / inputs.initialInvestment) * 100);
    
    // Simple NPV calculation (10% discount rate)
    const discountRate = 0.1;
    const npv = years.reduce((acc, year) => {
      return acc + (year.netIncome / Math.pow(1 + discountRate, year.yearNum));
    }, -inputs.initialInvestment);

    setProjectionData(years);
    setSummary({
      totalRevenue: Math.round(totalRevenue),
      totalCosts: Math.round(totalCosts),
      netProfit: Math.round(netProfit),
      paybackYear,
      roi: Math.round(roi * 10) / 10,
      npv: Math.round(npv),
    });
  };

  const updateInput = (field: keyof CalculatorInputs, value: any) => {
    const newInputs = { ...inputs, [field]: value };
    
    // Auto-adjust initial investment based on land area (15,000 per hectare)
    if (field === 'landArea') {
      newInputs.initialInvestment = value * 15000;
    }
    
    setInputs(newInputs);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Calculator className="w-8 h-8 text-green-600" />
        <div>
          <h2 className="text-slate-900">Professional Income Calculator</h2>
          <p className="text-slate-600 text-sm">10-Year Financial Projection with Comprehensive Cost Analysis</p>
        </div>
      </div>

      {/* Input Section */}
      <Card>
        <CardHeader>
          <CardTitle>Calculation Parameters</CardTitle>
          <CardDescription>Configure your plantation parameters and optional costs</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Core Parameters */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="landArea">Land Area (hectares)</Label>
              <Input
                id="landArea"
                type="number"
                value={inputs.landArea}
                onChange={(e) => updateInput('landArea', parseFloat(e.target.value))}
                min="0.5"
                step="0.5"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="initialInvestment">Initial Investment ($)</Label>
              <Input
                id="initialInvestment"
                type="number"
                value={inputs.initialInvestment}
                onChange={(e) => updateInput('initialInvestment', parseFloat(e.target.value))}
                step="1000"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="marketPrice">Market Price ($/tonne)</Label>
              <Input
                id="marketPrice"
                type="number"
                value={inputs.marketPrice}
                onChange={(e) => updateInput('marketPrice', parseFloat(e.target.value))}
                step="10"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="expectedYield">Expected Yield (tonnes/ha/year)</Label>
              <Input
                id="expectedYield"
                type="number"
                value={inputs.expectedYield}
                onChange={(e) => updateInput('expectedYield', parseFloat(e.target.value))}
                step="1"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="annualOpCost">Base Operating Cost ($/ha/year)</Label>
              <Input
                id="annualOpCost"
                type="number"
                value={inputs.annualOpCost}
                onChange={(e) => updateInput('annualOpCost', parseFloat(e.target.value))}
                step="100"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="priceGrowth">Price Growth Rate (% per year)</Label>
              <Input
                id="priceGrowth"
                type="number"
                value={inputs.priceGrowth}
                onChange={(e) => updateInput('priceGrowth', parseFloat(e.target.value))}
                step="0.5"
              />
            </div>
          </div>

          {/* Optional Costs */}
          <div className="border-t pt-6">
            <h4 className="text-slate-900 mb-4">Optional Cost Components</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Lease Cost */}
              <div className="space-y-3 p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="includeLease"
                    checked={inputs.includeLease}
                    onCheckedChange={(checked) => updateInput('includeLease', checked)}
                  />
                  <Label htmlFor="includeLease" className="cursor-pointer">Include Lease Costs</Label>
                </div>
                {inputs.includeLease && (
                  <div className="space-y-2 ml-6">
                    <Label htmlFor="leaseRate">Lease Rate ($/ha/year)</Label>
                    <Input
                      id="leaseRate"
                      type="number"
                      value={inputs.leaseRate}
                      onChange={(e) => updateInput('leaseRate', parseFloat(e.target.value))}
                      step="100"
                    />
                  </div>
                )}
              </div>

              {/* Water Cost */}
              <div className="space-y-3 p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="includeWater"
                    checked={inputs.includeWater}
                    onCheckedChange={(checked) => updateInput('includeWater', checked)}
                  />
                  <Label htmlFor="includeWater" className="cursor-pointer">Include Water Costs</Label>
                </div>
                {inputs.includeWater && (
                  <div className="space-y-2 ml-6">
                    <Label htmlFor="waterCost">Water Cost ($/ha/year)</Label>
                    <Input
                      id="waterCost"
                      type="number"
                      value={inputs.waterCost}
                      onChange={(e) => updateInput('waterCost', parseFloat(e.target.value))}
                      step="50"
                    />
                  </div>
                )}
              </div>

              {/* Equipment Finance */}
              <div className="space-y-3 p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="includeEquipment"
                    checked={inputs.includeEquipment}
                    onCheckedChange={(checked) => updateInput('includeEquipment', checked)}
                  />
                  <Label htmlFor="includeEquipment" className="cursor-pointer">Include Equipment Finance</Label>
                </div>
                {inputs.includeEquipment && (
                  <div className="space-y-2 ml-6">
                    <Label htmlFor="equipmentFinance">Annual Payment ($)</Label>
                    <Input
                      id="equipmentFinance"
                      type="number"
                      value={inputs.equipmentFinance}
                      onChange={(e) => updateInput('equipmentFinance', parseFloat(e.target.value))}
                      step="500"
                    />
                  </div>
                )}
              </div>

              {/* Additional Services */}
              <div className="space-y-3 p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="includeServices"
                    checked={inputs.includeServices}
                    onCheckedChange={(checked) => updateInput('includeServices', checked)}
                  />
                  <Label htmlFor="includeServices" className="cursor-pointer">Include Additional Services</Label>
                </div>
                {inputs.includeServices && (
                  <div className="space-y-2 ml-6">
                    <Label htmlFor="servicesCost">Services Cost ($/ha/year)</Label>
                    <Input
                      id="servicesCost"
                      type="number"
                      value={inputs.servicesCost}
                      onChange={(e) => updateInput('servicesCost', parseFloat(e.target.value))}
                      step="100"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Carbon Offset Income */}
          <div className="border-t pt-6">
            <h4 className="text-slate-900 mb-4">Additional Revenue Streams</h4>
            <div className="space-y-3 p-4 bg-green-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="includeCarbon"
                  checked={inputs.includeCarbon}
                  onCheckedChange={(checked) => updateInput('includeCarbon', checked)}
                />
                <Label htmlFor="includeCarbon" className="cursor-pointer">Include Carbon Offset Income</Label>
              </div>
              {inputs.includeCarbon && (
                <div className="space-y-2 ml-6">
                  <Label htmlFor="carbonIncome">Carbon Credits ($/ha/year)</Label>
                  <Input
                    id="carbonIncome"
                    type="number"
                    value={inputs.carbonIncome}
                    onChange={(e) => updateInput('carbonIncome', parseFloat(e.target.value))}
                    step="100"
                  />
                  <p className="text-xs text-slate-600">Estimated carbon sequestration revenue from Year 2 onwards</p>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-600">Total Revenue (10 yrs)</p>
                <p className="text-3xl text-green-600">${(summary.totalRevenue / 1000).toFixed(0)}k</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-600">Total Costs (10 yrs)</p>
                <p className="text-3xl text-red-600">${(summary.totalCosts / 1000).toFixed(0)}k</p>
              </div>
              <TrendingDown className="w-8 h-8 text-red-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-600">Net Profit (10 yrs)</p>
                <p className={`text-3xl ${summary.netProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  ${(summary.netProfit / 1000).toFixed(0)}k
                </p>
              </div>
              <DollarSign className={`w-8 h-8 ${summary.netProfit >= 0 ? 'text-green-600' : 'text-red-600'}`} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div>
              <p className="text-sm text-slate-600">Payback Period</p>
              <p className="text-3xl text-blue-600">
                {summary.paybackYear > 0 ? `Year ${summary.paybackYear}` : 'N/A'}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div>
              <p className="text-sm text-slate-600">Return on Investment</p>
              <p className={`text-3xl ${summary.roi >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {summary.roi.toFixed(1)}%
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div>
              <p className="text-sm text-slate-600">Net Present Value (10%)</p>
              <p className={`text-3xl ${summary.npv >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                ${(summary.npv / 1000).toFixed(0)}k
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Revenue vs Costs by Year</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={projectionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip formatter={(value) => `$${Number(value).toLocaleString()}`} />
                <Legend />
                <Bar dataKey="totalRevenue" fill="#10b981" name="Revenue" />
                <Bar dataKey="totalCosts" fill="#ef4444" name="Costs" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cumulative Cash Flow</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={projectionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip formatter={(value) => `$${Number(value).toLocaleString()}`} />
                <Area type="monotone" dataKey="cumulativeCashflow" stroke="#3b82f6" fill="#93c5fd" name="Cumulative Cash Flow" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Table */}
      <Card>
        <CardHeader>
          <CardTitle>Detailed Year-by-Year Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Year</th>
                  <th className="text-right p-2">Bamboo Revenue</th>
                  <th className="text-right p-2">Carbon Revenue</th>
                  <th className="text-right p-2">Total Revenue</th>
                  <th className="text-right p-2">Total Costs</th>
                  <th className="text-right p-2">Net Income</th>
                  <th className="text-right p-2">Cumulative</th>
                </tr>
              </thead>
              <tbody>
                {projectionData.map((row) => (
                  <tr key={row.year} className="border-b hover:bg-slate-50">
                    <td className="p-2">{row.year}</td>
                    <td className="text-right p-2">${row.bambooRevenue.toLocaleString()}</td>
                    <td className="text-right p-2">${row.carbonRevenue.toLocaleString()}</td>
                    <td className="text-right p-2 text-green-600">${row.totalRevenue.toLocaleString()}</td>
                    <td className="text-right p-2 text-red-600">${row.totalCosts.toLocaleString()}</td>
                    <td className={`text-right p-2 ${row.netIncome >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      ${row.netIncome.toLocaleString()}
                    </td>
                    <td className={`text-right p-2 ${row.cumulativeCashflow >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      ${row.cumulativeCashflow.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Notes */}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-900">Important Notes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-blue-900">
          <p>• Revenue commences from Year 3 with gradual yield increases (50% Year 3, 80% Year 4, 100% Year 5+)</p>
          <p>• All figures are in nominal dollars and do not account for inflation</p>
          <p>• NPV calculated using 10% discount rate as industry standard</p>
          <p>• Carbon credit income starts from Year 2 when included</p>
          <p>• Actual results may vary based on market conditions, climate, and management practices</p>
        </CardContent>
      </Card>
    </div>
  );
}
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { FileText, CheckCircle2, MapPin, Mail, Phone, User } from 'lucide-react';
import { toast } from 'sonner';
import { FarmMap } from './FarmMap';

interface FormData {
  partnerName: string;
  email: string;
  phone: string;
  location: string;
  landArea: string;
  interestLevel: string;
  currentLandUse: string;
  waterAccess: string;
  comments: string;
  farmGeoJSON: string;
  distanceToRail: string;
}

export function RegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    partnerName: '',
    email: '',
    phone: '',
    location: '',
    landArea: '',
    interestLevel: '',
    currentLandUse: '',
    waterAccess: '',
    comments: '',
    farmGeoJSON: '',
    distanceToRail: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.partnerName || !formData.email || !formData.interestLevel) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Simulate submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    toast.success('Registration submitted successfully!');
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        partnerName: '',
        email: '',
        phone: '',
        location: '',
        landArea: '',
        interestLevel: '',
        currentLandUse: '',
        waterAccess: '',
        comments: '',
        farmGeoJSON: '',
        distanceToRail: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="space-y-6">
        <Card className="bg-green-50 border-green-200">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto" />
              <h3 className="text-green-900 text-2xl">Registration Successful!</h3>
              <p className="text-green-800">
                Thank you for your interest in the Bamboo Farming Toolkit. 
                A member of our team will contact you within 2-3 business days.
              </p>
              <div className="pt-4">
                <Badge className="bg-green-600 text-white px-4 py-2">
                  Confirmation sent to {formData.email}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <FileText className="w-8 h-8 text-green-600" />
        <div>
          <h2 className="text-slate-900">Property Registration</h2>
          <p className="text-slate-600 text-sm">Register your property and join the bamboo farming network</p>
        </div>
      </div>

      {/* Info Card */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-blue-600 mt-0.5" />
            <div className="space-y-2 text-sm text-blue-900">
              <p className="text-blue-900">Why Register Your Property?</p>
              <ul className="space-y-1 ml-4">
                <li>• Connect with other bamboo farmers in the Burdekin region</li>
                <li>• Receive customized cultivation advice based on your location</li>
                <li>• Access to market partnerships and bulk processing opportunities</li>
                <li>• Early notification of grants and funding opportunities</li>
                <li>• Technical support and ongoing consultation</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Registration Form */}
      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Property & Contact Information</CardTitle>
            <CardDescription>Please provide accurate details for our records</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="partnerName">
                  Partner/Farm Name <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                  <Input
                    id="partnerName"
                    className="pl-10"
                    placeholder="Your name or farm name"
                    value={formData.partnerName}
                    onChange={(e) => updateField('partnerName', e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">
                  Email Address <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                  <Input
                    id="email"
                    type="email"
                    className="pl-10"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                  <Input
                    id="phone"
                    type="tel"
                    className="pl-10"
                    placeholder="+61 XXX XXX XXX"
                    value={formData.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">
                  Property Location <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                  <Input
                    id="location"
                    className="pl-10"
                    placeholder="e.g., Burdekin, QLD"
                    value={formData.location}
                    onChange={(e) => updateField('location', e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Property Details */}
            <div className="border-t pt-6">
              <h4 className="text-slate-900 mb-4">Property Details</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="landArea">Available Land Area (hectares)</Label>
                  <Input
                    id="landArea"
                    type="number"
                    step="0.1"
                    placeholder="e.g., 10"
                    value={formData.landArea}
                    onChange={(e) => updateField('landArea', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="currentLandUse">Current Land Use</Label>
                  <Select value={formData.currentLandUse} onValueChange={(value) => updateField('currentLandUse', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select current use" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vacant">Vacant/Unused</SelectItem>
                      <SelectItem value="sugarcane">Sugarcane</SelectItem>
                      <SelectItem value="grazing">Grazing</SelectItem>
                      <SelectItem value="crops">Other Crops</SelectItem>
                      <SelectItem value="mixed">Mixed Use</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="waterAccess">Water Access</Label>
                  <Select value={formData.waterAccess} onValueChange={(value) => updateField('waterAccess', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select water source" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bore">Bore Water</SelectItem>
                      <SelectItem value="river">River/Creek</SelectItem>
                      <SelectItem value="irrigation">Irrigation Scheme</SelectItem>
                      <SelectItem value="rainwater">Rainwater Only</SelectItem>
                      <SelectItem value="multiple">Multiple Sources</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interestLevel">
                    Interest Level <span className="text-red-500">*</span>
                  </Label>
                  <Select value={formData.interestLevel} onValueChange={(value) => updateField('interestLevel', value)} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your interest level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="curious">Just Curious</SelectItem>
                      <SelectItem value="exploring">Exploring Options</SelectItem>
                      <SelectItem value="serious">Serious Interest</SelectItem>
                      <SelectItem value="ready">Ready to Partner</SelectItem>
                      <SelectItem value="immediate">Immediate Implementation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Comments */}
            <div className="border-t pt-6">
              <div className="space-y-2">
                <Label htmlFor="comments">Additional Comments or Questions</Label>
                <Textarea
                  id="comments"
                  placeholder="Tell us more about your interest in bamboo farming, any specific questions, or additional information about your property..."
                  rows={4}
                  value={formData.comments}
                  onChange={(e) => updateField('comments', e.target.value)}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </form>

      {/* Farm Location Map */}
      <FarmMap
        onAreaChange={(area, geoJSON) => {
          updateField('landArea', area.toFixed(2));
          updateField('farmGeoJSON', geoJSON);
        }}
        onDistanceChange={(distance) => {
          updateField('distanceToRail', distance.toFixed(1));
        }}
      />

      {/* Registration Form Continued */}
      <form onSubmit={handleSubmit}>
        <Card>
          <CardContent className="pt-6">
            {/* Submit Button */}
            <div className="border-t pt-6">
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                Submit Registration
              </Button>
              <p className="text-xs text-slate-600 text-center mt-3">
                By submitting this form, you agree to be contacted by PowerPlant Energy regarding bamboo farming opportunities.
              </p>
            </div>
          </CardContent>
        </Card>
      </form>

      {/* Additional Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">What Happens Next?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs">1</div>
              <div>
                <p className="text-slate-900">Initial Contact</p>
                <p className="text-slate-600 text-xs">We'll reach out within 2-3 business days to discuss your interest</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs">2</div>
              <div>
                <p className="text-slate-900">Site Assessment</p>
                <p className="text-slate-600 text-xs">Optional property visit to evaluate suitability and potential</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs">3</div>
              <div>
                <p className="text-slate-900">Customized Plan</p>
                <p className="text-slate-600 text-xs">Receive a tailored proposal with financial projections</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs">4</div>
              <div>
                <p className="text-slate-900">Implementation Support</p>
                <p className="text-slate-600 text-xs">Ongoing guidance from planning through to harvest</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-green-50 border-green-200">
          <CardHeader>
            <CardTitle className="text-lg text-green-900">Partnership Benefits</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-green-900">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <p>Access to premium Beema bamboo rhizomes</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <p>Technical training and ongoing support</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <p>Guaranteed market access through partnership network</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <p>Carbon credit facilitation and certification</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <p>Equipment sharing and bulk purchasing discounts</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Contact Info */}
      <Card className="bg-slate-50 border-slate-200">
        <CardHeader>
          <CardTitle className="text-lg">Need Help?</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-slate-700">
          <p className="mb-2">If you have questions before registering, contact our team:</p>
          <div className="space-y-1">
            <p>📧 Email: partnerships@powerplantenergy.com.au</p>
            <p>📞 Phone: 0400 011 682</p>
            <p>🕒 Business Hours: Monday - Friday, 9:00 AM - 5:00 PM AEST</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
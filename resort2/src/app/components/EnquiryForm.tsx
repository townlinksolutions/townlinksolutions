import { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from 'sonner';

export function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    roomType: '',
    adults: '2',
    children: '0',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Enquiry submitted successfully! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      checkIn: '',
      checkOut: '',
      roomType: '',
      adults: '2',
      children: '0',
      message: '',
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="enquiry" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Book Your Stay</h2>
            <p className="text-gray-600 text-lg">
              Send us your enquiry and we'll get back to you within 24 hours
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  placeholder="Enter your name"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="your@email.com"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  placeholder="+91 XXXXX XXXXX"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="roomType">Room Type *</Label>
                <Select value={formData.roomType} onValueChange={(value) => handleChange('roomType', value)}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select room type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="deluxe">Deluxe Room</SelectItem>
                    <SelectItem value="premium">Premium Suite</SelectItem>
                    <SelectItem value="cottage">Family Cottage</SelectItem>
                    <SelectItem value="villa">Coconut Villa</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="checkIn">Check-in Date *</Label>
                <Input
                  id="checkIn"
                  type="date"
                  required
                  value={formData.checkIn}
                  onChange={(e) => handleChange('checkIn', e.target.value)}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="checkOut">Check-out Date *</Label>
                <Input
                  id="checkOut"
                  type="date"
                  required
                  value={formData.checkOut}
                  onChange={(e) => handleChange('checkOut', e.target.value)}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="adults">Number of Adults</Label>
                <Select value={formData.adults} onValueChange={(value) => handleChange('adults', value)}>
                  <SelectTrigger className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                      <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="children">Number of Children</Label>
                <Select value={formData.children} onValueChange={(value) => handleChange('children', value)}>
                  <SelectTrigger className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[0, 1, 2, 3, 4, 5].map(num => (
                      <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mb-6">
              <Label htmlFor="message">Special Requests / Message</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                placeholder="Any special requirements or questions?"
                className="mt-2 min-h-32"
              />
            </div>

            <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700" size="lg">
              <Send className="w-5 h-5 mr-2" />
              Submit Enquiry
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

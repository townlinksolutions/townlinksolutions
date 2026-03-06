import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Card } from './ui/card';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Get in Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We're here to help make your stay memorable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Address</h4>
                  <p className="text-gray-600">
                    Kumta Coconut Paradise Resort<br />
                    Near Kumta Beach, Coconut Farm Road<br />
                    Kumta, Uttara Kannada - 581343<br />
                    Karnataka, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-gray-600">
                    +91 98765 43210<br />
                    +91 98765 43211<br />
                    Toll Free: 1800 XXX XXXX
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-gray-600">
                    info@kumtaparadise.com<br />
                    reservations@kumtaparadise.com
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t">
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center hover:bg-amber-600 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center hover:bg-amber-600 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center hover:bg-amber-600 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <h3 className="text-2xl font-semibold mb-6">Location Map</h3>
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248022.86515633424!2d74.35226!3d14.42944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbc17c0b5555555%3A0x5555555555555555!2sKumta%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Resort Location"
              ></iframe>
            </div>

            <div className="mt-6 p-4 bg-amber-50 rounded-lg">
              <h4 className="font-semibold mb-2">How to Reach</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><strong>By Air:</strong> Goa Airport (140 km) / Mangalore Airport (180 km)</li>
                <li><strong>By Train:</strong> Kumta Railway Station (4 km)</li>
                <li><strong>By Road:</strong> Well connected via NH-66 highway</li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

import { Facebook, Instagram, Twitter, Youtube, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="size-12 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-full flex items-center justify-center">
                <span className="font-bold text-xl">PC</span>
              </div>
              <div>
                <h3 className="font-bold text-xl">Paradise Cove</h3>
                <p className="text-sm text-gray-400">Kumta Resort</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Experience luxury and nature in perfect harmony at our coastal paradise in Kumta, Karnataka.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/10 hover:bg-emerald-600 rounded-full transition-colors">
                <Facebook className="size-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 hover:bg-emerald-600 rounded-full transition-colors">
                <Instagram className="size-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 hover:bg-emerald-600 rounded-full transition-colors">
                <Twitter className="size-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 hover:bg-emerald-600 rounded-full transition-colors">
                <Youtube className="size-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-emerald-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="#rooms" className="text-gray-400 hover:text-emerald-400 transition-colors">Rooms & Suites</a></li>
              <li><a href="#amenities" className="text-gray-400 hover:text-emerald-400 transition-colors">Amenities</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-emerald-400 transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-emerald-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Experiences */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Experiences</h4>
            <ul className="space-y-2 text-gray-400">
              <li>• Coconut Farm Tours</li>
              <li>• Beach Activities</li>
              <li>• Bonfire Nights</li>
              <li>• River Boating</li>
              <li>• Yoga Sessions</li>
              <li>• Spa & Wellness</li>
              <li>• Fresh Seafood</li>
              <li>• Waterfall Visits</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <strong className="text-white">Address:</strong><br />
                Paradise Cove Resort<br />
                Kumta Beach Road<br />
                Kumta, Uttara Kannada<br />
                Karnataka - 581343
              </li>
              <li>
                <strong className="text-white">Phone:</strong><br />
                +91 98765 43210
              </li>
              <li>
                <strong className="text-white">Email:</strong><br />
                info@paradisecoveresort.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 Paradise Cove Resort, Kumta. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              Made with <Heart className="size-4 text-red-500 fill-red-500" /> in Karnataka
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

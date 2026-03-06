import { Palmtree } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Palmtree className="w-8 h-8 text-amber-500" />
              <span className="text-xl font-serif">Kumta Paradise</span>
            </div>
            <p className="text-gray-400 text-sm">
              Experience luxury amidst nature at our coconut farm resort in the heart of Uttara Kannada.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-amber-500 transition-colors">Home</a></li>
              <li><a href="#rooms" className="hover:text-amber-500 transition-colors">Rooms</a></li>
              <li><a href="#amenities" className="hover:text-amber-500 transition-colors">Amenities</a></li>
              <li><a href="#nearby" className="hover:text-amber-500 transition-colors">Nearby Places</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Policies</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Cancellation Policy</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Guest Reviews</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Kumta, Uttara Kannada</li>
              <li>Karnataka - 581343</li>
              <li>+91 98765 43210</li>
              <li>info@kumtaparadise.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2026 Kumta Coconut Paradise Resort. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

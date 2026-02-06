import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="size-12 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-full flex items-center justify-center">
              <span className="font-bold text-white text-xl">PC</span>
            </div>
            <div>
              <h1 className="font-bold text-xl text-gray-900">Paradise Cove</h1>
              <p className="text-xs text-gray-600">Kumta Resort</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-emerald-600 transition-colors">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-emerald-600 transition-colors">About</button>
            <button onClick={() => scrollToSection('rooms')} className="text-gray-700 hover:text-emerald-600 transition-colors">Rooms</button>
            <button onClick={() => scrollToSection('amenities')} className="text-gray-700 hover:text-emerald-600 transition-colors">Amenities</button>
            <button onClick={() => scrollToSection('nearby')} className="text-gray-700 hover:text-emerald-600 transition-colors">Nearby</button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-emerald-600 transition-colors">Gallery</button>
            <button onClick={() => scrollToSection('contact')} className="px-6 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors">Book Now</button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 hover:text-emerald-600 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-emerald-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('rooms')} className="text-left text-gray-700 hover:text-emerald-600 transition-colors">Rooms</button>
              <button onClick={() => scrollToSection('amenities')} className="text-left text-gray-700 hover:text-emerald-600 transition-colors">Amenities</button>
              <button onClick={() => scrollToSection('nearby')} className="text-left text-gray-700 hover:text-emerald-600 transition-colors">Nearby</button>
              <button onClick={() => scrollToSection('gallery')} className="text-left text-gray-700 hover:text-emerald-600 transition-colors">Gallery</button>
              <button onClick={() => scrollToSection('contact')} className="text-left px-6 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors w-full">Book Now</button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

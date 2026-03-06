import { useState, useEffect } from 'react';
import { Menu, X, Palmtree } from 'lucide-react';
import { Button } from './ui/button';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Rooms', id: 'rooms' },
    { label: 'Amenities', id: 'amenities' },
    { label: 'Nearby', id: 'nearby' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <Palmtree className={`w-8 h-8 ${isScrolled ? 'text-amber-600' : 'text-white'}`} />
            <span className={`text-xl font-serif ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              Kumta Paradise
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-amber-600' : 'text-white hover:text-amber-300'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('enquiry')}
              className="bg-amber-600 hover:bg-amber-700"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-gray-700 hover:text-amber-600 py-2"
              >
                {item.label}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('enquiry')}
              className="w-full bg-amber-600 hover:bg-amber-700"
            >
              Book Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

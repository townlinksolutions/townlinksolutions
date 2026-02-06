import { ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1766603636671-484c4911a84b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNvcnQlMjBjb2NvbnV0JTIwcGFsbSUyMHRyb3BpY2FsfGVufDF8fHx8MTc3MDQwMDY5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-serif text-center mb-6">
          Kumta Coconut Paradise Resort
        </h1>
        <p className="text-xl md:text-2xl text-center mb-8 max-w-2xl">
          Experience luxury amidst coconut palms in Uttara Kannada's coastal haven
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            size="lg" 
            onClick={() => scrollToSection('enquiry')}
            className="bg-amber-600 hover:bg-amber-700 text-white px-8"
          >
            Book Your Stay
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => scrollToSection('rooms')}
            className="bg-white/10 border-white hover:bg-white/20 text-white"
          >
            Explore Rooms
          </Button>
        </div>
        
        <div className="absolute bottom-10 animate-bounce">
          <ChevronDown className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
}

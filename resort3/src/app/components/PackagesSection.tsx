import { Check, Gift, Heart, Users, Calendar } from 'lucide-react';

const packages = [
  {
    icon: Heart,
    name: "Honeymoon Special",
    duration: "3 Days / 2 Nights",
    price: "₹15,999",
    color: "pink",
    image: "https://images.unsplash.com/photo-1609561026486-f5d4a3c4c660?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHN1bnNldCUyMHJvbWFudGljfGVufDF8fHx8MTc3MDI4ODU2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    includes: [
      "Premium Suite with Ocean View",
      "Romantic Candlelight Dinner",
      "Couples Spa Treatment",
      "Champagne & Flowers",
      "Private Beach Bonfire",
      "Complimentary Breakfast"
    ]
  },
  {
    icon: Users,
    name: "Family Fun Package",
    duration: "4 Days / 3 Nights",
    price: "₹28,999",
    color: "blue",
    image: "https://images.unsplash.com/photo-1714412192114-61dca8f15f68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHRyb3BpY2FsJTIwcGFyYWRpc2V8ZW58MXx8fHwxNzcwNDAyMjMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    includes: [
      "2 Interconnected Family Rooms",
      "All Meals Included",
      "Kids Activities & Games",
      "Beach Volleyball & Sports",
      "Coconut Farm Tour",
      "Water Sports Activities"
    ]
  },
  {
    icon: Gift,
    name: "Weekend Getaway",
    duration: "2 Days / 1 Night",
    price: "₹8,999",
    color: "emerald",
    image: "https://images.unsplash.com/photo-1713077381724-196528564679?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXJuYXRha2ElMjBiZWFjaCUyMHN1bnNldHxlbnwxfHx8fDE3NzA0MDIyMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    includes: [
      "Deluxe Room Stay",
      "Welcome Drink",
      "Breakfast Buffet",
      "Beach Access",
      "Evening Bonfire",
      "Late Checkout (2 PM)"
    ]
  },
  {
    icon: Calendar,
    name: "Extended Stay",
    duration: "7 Days / 6 Nights",
    price: "₹45,999",
    color: "purple",
    image: "https://images.unsplash.com/photo-1752769041956-1af511b2a225?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGdhcmRlbiUyMHJlc29ydHxlbnwxfHx8fDE3NzAzNDY1MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    includes: [
      "Premium Suite",
      "All Meals Included",
      "Daily Yoga Sessions",
      "3 Spa Treatments",
      "River Boating Trip",
      "Waterfall Excursion",
      "Airport Transfers"
    ]
  }
];

export function PackagesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Special Packages</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our carefully curated packages designed to make your stay memorable and hassle-free.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            return (
              <div 
                key={index}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-6 text-white">
                    <div className={`inline-flex p-3 bg-${pkg.color}-500 rounded-lg mb-3`}>
                      <Icon className="size-6" />
                    </div>
                    <h3 className="text-2xl mb-1">{pkg.name}</h3>
                    <p className="text-white/90">{pkg.duration}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-baseline justify-between mb-6">
                    <div>
                      <span className="text-3xl font-bold text-emerald-600">{pkg.price}</span>
                      <span className="text-gray-600 ml-2">per package</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {pkg.includes.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="size-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all transform hover:scale-105"
                  >
                    Book This Package
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Special Offer Banner */}
        <div className="mt-16 bg-gradient-to-r from-emerald-600 to-teal-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl mb-4">Limited Time Offer!</h3>
          <p className="text-xl mb-6">
            Book any package for stays between March - May 2026 and get 20% OFF + Free Upgrade to next room category!
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white text-emerald-600 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            Claim Your Offer Now
          </button>
        </div>
      </div>
    </section>
  );
}

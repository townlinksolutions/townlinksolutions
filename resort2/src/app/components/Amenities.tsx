import { Waves, Utensils, Wifi, Sparkles, Palmtree, Coffee, Dumbbell, Car } from 'lucide-react';

const amenities = [
  {
    icon: Waves,
    title: 'Swimming Pool',
    description: 'Infinity pool with stunning views of coconut groves',
    image: 'https://images.unsplash.com/photo-1629711129507-d09c820810b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNvcnQlMjBzd2ltbWluZyUyMHBvb2wlMjB0cm9waWNhbHxlbnwxfHx8fDE3NzAzMjY2NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    icon: Utensils,
    title: 'Fine Dining',
    description: 'Authentic coastal cuisine & international delicacies',
    image: 'https://images.unsplash.com/photo-1729543239723-1feccd5c00b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZmluZSUyMGRpbmluZyUyMGJlYWNofGVufDF8fHx8MTc3MDQwMDcwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    icon: Sparkles,
    title: 'Spa & Wellness',
    description: 'Ayurvedic treatments and rejuvenating massages',
    image: 'https://images.unsplash.com/photo-1761470575018-135c213340eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjB3ZWxsbmVzcyUyMHJlc29ydHxlbnwxfHx8fDE3NzAyOTkwNTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    icon: Palmtree,
    title: 'Coconut Farm Tours',
    description: 'Guided walks through our organic coconut plantation',
    image: 'https://images.unsplash.com/photo-1744358399532-9769248a6d58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvbnV0JTIwZmFybSUyMHBsYW50YXRpb258ZW58MXx8fHwxNzcwNDAwNjk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    icon: Wifi,
    title: 'High-Speed WiFi',
    description: 'Complimentary WiFi throughout the property',
  },
  {
    icon: Coffee,
    title: 'Coffee Shop',
    description: 'Fresh brews and local delicacies',
  },
  {
    icon: Dumbbell,
    title: 'Fitness Center',
    description: 'Modern gym equipment for your workout',
  },
  {
    icon: Car,
    title: 'Travel Desk',
    description: 'Local sightseeing and transport arrangements',
  },
];

export function Amenities() {
  return (
    <section id="amenities" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Resort Highlights</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Everything you need for a perfect getaway
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg"
              >
                {amenity.image ? (
                  <div className="relative h-80">
                    <img 
                      src={amenity.image} 
                      alt={amenity.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <Icon className="w-10 h-10 mb-3 text-amber-400" />
                      <h3 className="text-xl font-semibold mb-2">{amenity.title}</h3>
                      <p className="text-gray-200 text-sm">{amenity.description}</p>
                    </div>
                  </div>
                ) : (
                  <div className="bg-gray-50 p-8 h-80 flex flex-col justify-center items-center text-center hover:bg-amber-50 transition-colors">
                    <Icon className="w-12 h-12 mb-4 text-amber-600" />
                    <h3 className="text-xl font-semibold mb-2">{amenity.title}</h3>
                    <p className="text-gray-600 text-sm">{amenity.description}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

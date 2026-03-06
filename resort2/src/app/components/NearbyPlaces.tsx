import { MapPin, Navigation } from 'lucide-react';
import { Card } from './ui/card';

const places = [
  {
    name: 'Om Beach',
    distance: '12 km',
    time: '20 mins',
    description: 'Famous for its unique Om shape and water sports',
    image: 'https://images.unsplash.com/photo-1664266377437-b280eae37573?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwS2FybmF0YWthfGVufDF8fHx8MTc3MDQwMDY5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'Nirvana Beach',
    distance: '8 km',
    time: '15 mins',
    description: 'Secluded pristine beach perfect for relaxation',
  },
  {
    name: 'Mirjan Fort',
    distance: '15 km',
    time: '25 mins',
    description: 'Historic 16th-century laterite fort',
  },
  {
    name: 'Yana Rocks',
    distance: '45 km',
    time: '1 hour',
    description: 'Unique rock formations and trekking destination',
  },
  {
    name: 'Gokarna Temple',
    distance: '18 km',
    time: '30 mins',
    description: 'Ancient Hindu pilgrimage site',
  },
  {
    name: 'Kumta Beach',
    distance: '3 km',
    time: '5 mins',
    description: 'Local beach with beautiful sunsets',
  },
  {
    name: 'Murudeshwar Temple',
    distance: '65 km',
    time: '1.5 hours',
    description: 'Famous for the world\'s second tallest Shiva statue',
  },
  {
    name: 'Jog Falls',
    distance: '95 km',
    time: '2 hours',
    description: 'India\'s second-highest plunge waterfall',
  },
];

export function NearbyPlaces() {
  return (
    <section id="nearby" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Explore Nearby</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover the beauty and culture around Kumta, Uttara Kannada
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {places.map((place, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              {place.image && (
                <div className="h-48 overflow-hidden">
                  <img 
                    src={place.image} 
                    alt={place.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{place.name}</h3>
                <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-amber-600" />
                    <span>{place.distance}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Navigation className="w-4 h-4 text-amber-600" />
                    <span>{place.time}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{place.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

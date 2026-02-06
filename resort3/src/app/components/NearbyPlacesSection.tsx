import { MapPin, Navigation, Camera } from 'lucide-react';

const nearbyPlaces = [
  {
    name: "Kumta Beach",
    distance: "2 km",
    description: "Pristine golden sand beach with stunning sunsets",
    image: "https://images.unsplash.com/photo-1713077381724-196528564679?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXJuYXRha2ElMjBiZWFjaCUyMHN1bnNldHxlbnwxfHx8fDE3NzA0MDIyMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    activities: ["Swimming", "Beach Volleyball", "Sunset Views"]
  },
  {
    name: "Nirvana Beach",
    distance: "5 km",
    description: "Secluded beach perfect for peaceful relaxation",
    image: "https://images.unsplash.com/photo-1609561026486-f5d4a3c4c660?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHN1bnNldCUyMHJvbWFudGljfGVufDF8fHx8MTc3MDI4ODU2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    activities: ["Peaceful Walks", "Photography", "Meditation"]
  },
  {
    name: "Yana Rocks",
    distance: "45 km",
    description: "Unique rock formations and ancient caves",
    image: "https://images.unsplash.com/photo-1662384157067-fdd356526af4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhpbGxzJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc3MDQwMjIzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    activities: ["Trekking", "Rock Climbing", "Photography"]
  },
  {
    name: "Mirjan Fort",
    distance: "15 km",
    description: "16th century fort with rich history",
    image: "https://images.unsplash.com/photo-1625023455567-09b002682d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmZhbGwlMjBuYXR1cmUlMjBpbmRpYXxlbnwxfHx8fDE3NzA0MDIyMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    activities: ["Historical Tour", "Photography", "Heritage Walk"]
  },
  {
    name: "Aghanashini River",
    distance: "8 km",
    description: "Beautiful river with boating facilities",
    image: "https://images.unsplash.com/photo-1711607839666-f7d0fbaf00b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaXZlciUyMGJvYXRpbmclMjBrYXlha2luZ3xlbnwxfHx8fDE3NzA0MDIyMzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    activities: ["Boating", "Kayaking", "River Rafting"]
  },
  {
    name: "Apsarakonda Falls",
    distance: "35 km",
    description: "Scenic waterfall with beach views",
    image: "https://images.unsplash.com/photo-1625023455567-09b002682d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmZhbGwlMjBuYXR1cmUlMjBpbmRpYXxlbnwxfHx8fDE3NzA0MDIyMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    activities: ["Trekking", "Swimming", "Nature Photography"]
  }
];

export function NearbyPlacesSection() {
  return (
    <section id="nearby" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Explore Nearby Attractions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the natural beauty and cultural heritage of Uttara Kannada with these must-visit destinations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nearbyPlaces.map((place, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                  <Navigation className="size-4 text-emerald-600" />
                  <span className="text-sm font-semibold">{place.distance}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl mb-2">{place.name}</h3>
                <p className="text-gray-600 mb-4">{place.description}</p>
                <div className="flex flex-wrap gap-2">
                  {place.activities.map((activity, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm"
                    >
                      {activity}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map Section */}
        <div className="mt-16 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl mb-4">Find Us</h3>
            <p className="text-gray-600">
              Paradise Cove Resort, Kumta, Uttara Kannada District, Karnataka - 581343
            </p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-md">
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="size-12 text-emerald-600 mx-auto mb-4" />
                <p className="text-gray-600">Map integration would appear here</p>
                <p className="text-sm text-gray-500 mt-2">Coordinates: 14.4219° N, 74.4138° E</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

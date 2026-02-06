import { Users, Bed, Wifi, Coffee, Maximize } from 'lucide-react';
import { useState } from 'react';

const rooms = [
  {
    id: 1,
    name: "Deluxe Room",
    image: "https://images.unsplash.com/flagged/photo-1582108074095-1730ef6caec9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGRlbHV4ZSUyMHJvb218ZW58MXx8fHwxNzcwNDAyMjI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "₹3,500",
    guests: 2,
    size: "300 sq ft",
    features: ["King Size Bed", "AC", "WiFi", "TV", "Mini Fridge"]
  },
  {
    id: 2,
    name: "Premium Suite",
    image: "https://images.unsplash.com/photo-1725962479542-1be0a6b0d444?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHN1aXRlJTIwYmVkcm9vbXxlbnwxfHx8fDE3NzA0MDIyMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "₹5,500",
    guests: 3,
    size: "450 sq ft",
    features: ["King Bed", "Living Area", "AC", "WiFi", "Mini Bar", "Balcony"]
  },
  {
    id: 3,
    name: "Beach Villa",
    image: "https://images.unsplash.com/photo-1628870970360-aa3afb4c562d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHZpbGxhJTIwY290dGFnZXxlbnwxfHx8fDE3NzA0MDIyMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "₹8,500",
    guests: 4,
    size: "650 sq ft",
    features: ["2 Bedrooms", "Private Beach Access", "AC", "WiFi", "Kitchen", "Sea View"]
  },
  {
    id: 4,
    name: "Honeymoon Suite",
    image: "https://images.unsplash.com/flagged/photo-1582108074095-1730ef6caec9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob25leW1vb24lMjBzdWl0ZSUyMGJlZHJvb218ZW58MXx8fHwxNzcwNDAyMjM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "₹7,000",
    guests: 2,
    size: "500 sq ft",
    features: ["King Bed", "Jacuzzi", "AC", "WiFi", "Champagne", "Romantic Decor"]
  },
  {
    id: 5,
    name: "Family Room",
    image: "https://images.unsplash.com/photo-1722409195473-d322e99621e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2ltbWluZyUyMHBvb2wlMjByZXNvcnR8ZW58MXx8fHwxNzcwMzExMzg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "₹6,500",
    guests: 5,
    size: "550 sq ft",
    features: ["2 Queen Beds", "AC", "WiFi", "TV", "Connecting Rooms Available"]
  },
  {
    id: 6,
    name: "Presidential Suite",
    image: "https://images.unsplash.com/photo-1752769041956-1af511b2a225?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGdhcmRlbiUyMHJlc29ydHxlbnwxfHx8fDE3NzAzNDY1MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "₹12,000",
    guests: 6,
    size: "900 sq ft",
    features: ["3 Bedrooms", "Private Pool", "AC", "WiFi", "Butler Service", "Panoramic Views"]
  }
];

export function RoomsSection() {
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null);

  return (
    <section id="rooms" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Our Rooms & Suites</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our variety of luxurious accommodations, each designed to provide the ultimate comfort and relaxation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div 
              key={room.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedRoom(room.id)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-emerald-600 text-white px-4 py-2 rounded-full">
                  {room.price}/night
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl mb-3">{room.name}</h3>
                <div className="flex items-center gap-4 mb-4 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Users className="size-4" />
                    <span className="text-sm">{room.guests} Guests</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Maximize className="size-4" />
                    <span className="text-sm">{room.size}</span>
                  </div>
                </div>
                <ul className="space-y-2 mb-4">
                  {room.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="size-1.5 bg-emerald-600 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

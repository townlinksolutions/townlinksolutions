import { Users, Maximize2, Wifi, Coffee } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

const rooms = [
  {
    id: 1,
    name: 'Deluxe Room',
    image: 'https://images.unsplash.com/photo-1731336478850-6bce7235e320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJvb20lMjBiZWR8ZW58MXx8fHwxNzcwMzg2NzcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    capacity: '2 Adults',
    size: '350 sq ft',
    price: '₹3,500',
    features: ['King Bed', 'AC', 'WiFi', 'Breakfast'],
  },
  {
    id: 2,
    name: 'Premium Suite',
    image: 'https://images.unsplash.com/photo-1509647924673-bbb53e22eeb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWx1eGUlMjBob3RlbCUyMHN1aXRlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcwNDAwNjk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    capacity: '2 Adults + 1 Child',
    size: '500 sq ft',
    price: '₹5,500',
    features: ['Living Area', 'Sea View', 'Mini Bar', 'Balcony'],
  },
  {
    id: 3,
    name: 'Family Cottage',
    image: 'https://images.unsplash.com/photo-1589779677460-a15b5b5790ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWxsYSUyMGNvdHRhZ2UlMjByZXNvcnR8ZW58MXx8fHwxNzcwNDAwNzAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    capacity: '4 Adults + 2 Children',
    size: '800 sq ft',
    price: '₹8,500',
    features: ['2 Bedrooms', 'Kitchen', 'Garden View', 'Private Patio'],
  },
  {
    id: 4,
    name: 'Coconut Villa',
    image: 'https://images.unsplash.com/photo-1642516864726-a243f416fc00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHJlc29ydCUyMEthcm5hdGFrYSUyMEluZGlhfGVufDF8fHx8MTc3MDQwMDY5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    capacity: '6 Adults + 3 Children',
    size: '1200 sq ft',
    price: '₹12,000',
    features: ['3 Bedrooms', 'Private Pool', 'Beach Access', 'Butler Service'],
  },
];

export function Rooms() {
  const scrollToEnquiry = () => {
    const element = document.getElementById('enquiry');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="rooms" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Our Accommodations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Choose from our range of luxurious rooms and villas, each designed for your ultimate comfort
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {rooms.map((room) => (
            <Card key={room.id} className="overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {room.price}/night
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-serif mb-3">{room.name}</h3>
                
                <div className="flex items-center gap-4 mb-4 text-gray-600">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{room.capacity}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Maximize2 className="w-4 h-4" />
                    <span className="text-sm">{room.size}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <ul className="space-y-2">
                    {room.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-amber-600 rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  onClick={scrollToEnquiry}
                  className="w-full bg-amber-600 hover:bg-amber-700"
                >
                  Book Now
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

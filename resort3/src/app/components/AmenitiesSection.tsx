import { 
  Waves, Utensils, Dumbbell, Sparkles, 
  TreePine, Coffee, Bike, Camera,
  Wind, Phone, Wifi, Car
} from 'lucide-react';

const amenities = [
  {
    icon: Waves,
    title: "Swimming Pool",
    description: "Infinity pool with ocean views",
    image: "https://images.unsplash.com/photo-1722409195473-d322e99621e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2ltbWluZyUyMHBvb2wlMjByZXNvcnR8ZW58MXx8fHwxNzcwMzExMzg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "blue"
  },
  {
    icon: Utensils,
    title: "Multi-Cuisine Restaurant",
    description: "Fresh seafood & local delicacies",
    image: "https://images.unsplash.com/photo-1769773297747-bd00e31b33aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZGluaW5nJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzA0MDIyMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "orange"
  },
  {
    icon: Sparkles,
    title: "Spa & Wellness",
    description: "Ayurvedic treatments & massages",
    image: "https://images.unsplash.com/photo-1761470575018-135c213340eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNvcnQlMjBzcGElMjB3ZWxsbmVzc3xlbnwxfHx8fDE3NzAyOTcxNjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "purple"
  },
  {
    icon: Dumbbell,
    title: "Fitness Center",
    description: "Modern gym equipment 24/7",
    image: "https://images.unsplash.com/photo-1660557989710-1a91e7e89d1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZ3ltJTIwaG90ZWx8ZW58MXx8fHwxNzcwNDAyMjM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "red"
  },
  {
    icon: TreePine,
    title: "Coconut Farm Tours",
    description: "Guided plantation walks",
    image: "https://images.unsplash.com/photo-1744358399532-9769248a6d58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvbnV0JTIwZmFybSUyMHBsYW50YXRpb258ZW58MXx8fHwxNzcwNDAwNjk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "green"
  },
  {
    icon: Wind,
    title: "Yoga & Meditation",
    description: "Beachside yoga sessions",
    image: "https://images.unsplash.com/photo-1635617240041-c95219c05542?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWVkaXRhdGlvbiUyMGJlYWNofGVufDF8fHx8MTc3MDQwMjIzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "teal"
  },
  {
    icon: Camera,
    title: "Bonfire Nights",
    description: "Beach camping & BBQ",
    image: "https://images.unsplash.com/photo-1653491948741-f693a80c8e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMGJvbmZpcmUlMjBjYW1waW5nfGVufDF8fHx8MTc3MDQwMjIyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "yellow"
  },
  {
    icon: Bike,
    title: "Bicycle Rentals",
    description: "Explore the surroundings",
    image: "https://images.unsplash.com/photo-1714412192114-61dca8f15f68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHRyb3BpY2FsJTIwcGFyYWRpc2V8ZW58MXx8fHwxNzcwNDAyMjMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "indigo"
  },
  {
    icon: Coffee,
    title: "24/7 Room Service",
    description: "At your service anytime",
    color: "brown"
  },
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    description: "Complimentary internet",
    color: "gray"
  },
  {
    icon: Car,
    title: "Airport Transfer",
    description: "Pickup & drop service",
    color: "slate"
  },
  {
    icon: Phone,
    title: "Concierge Service",
    description: "24/7 assistance",
    color: "zinc"
  }
];

export function AmenitiesSection() {
  return (
    <section id="amenities" className="py-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">World-Class Amenities</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need for a perfect vacation is right here at Paradise Cove Resort.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <div 
                key={index}
                className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {amenity.image && (
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={amenity.image}
                      alt={amenity.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className={`p-6 ${!amenity.image ? 'h-full' : ''}`}>
                  <div className={`inline-flex p-3 bg-${amenity.color}-100 rounded-lg mb-4`}>
                    <Icon className={`size-6 text-${amenity.color}-600`} />
                  </div>
                  <h3 className="text-xl mb-2">{amenity.title}</h3>
                  <p className="text-gray-600">{amenity.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

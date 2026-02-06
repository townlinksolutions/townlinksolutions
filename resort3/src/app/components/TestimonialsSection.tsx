import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Rajesh & Priya Kumar",
    location: "Bangalore, Karnataka",
    rating: 5,
    comment: "Paradise Cove exceeded all our expectations! The coconut farm tour was incredible, and the beach access was perfect. The staff went above and beyond to make our honeymoon special.",
    image: "https://images.unsplash.com/photo-1609561026486-f5d4a3c4c660?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHN1bnNldCUyMHJvbWFudGljfGVufDF8fHx8MTc3MDI4ODU2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Amit Sharma",
    location: "Mumbai, Maharashtra",
    rating: 5,
    comment: "Best family vacation ever! The kids loved the beach activities and the bonfire night. The seafood at the restaurant was absolutely fresh and delicious. Highly recommend!",
    image: "https://images.unsplash.com/photo-1714412192114-61dca8f15f68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHRyb3BpY2FsJTIwcGFyYWRpc2V8ZW58MXx8fHwxNzcwNDAyMjMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Sneha Patel",
    location: "Pune, Maharashtra",
    rating: 5,
    comment: "The spa and wellness center is world-class! I enjoyed the Ayurvedic treatments and morning yoga sessions on the beach. The perfect place to rejuvenate mind and body.",
    image: "https://images.unsplash.com/photo-1635617240041-c95219c05542?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWVkaXRhdGlvbiUyMGJlYWNofGVufDF8fHx8MTc3MDQwMjIzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

const highlights = [
  {
    stat: "50+",
    label: "Luxury Rooms",
    description: "Spacious & comfortable"
  },
  {
    stat: "5 Acres",
    label: "Coconut Plantation",
    description: "Organic farm experience"
  },
  {
    stat: "200m",
    label: "Private Beach",
    description: "Direct beach access"
  },
  {
    stat: "4.9/5",
    label: "Guest Rating",
    description: "1000+ reviews"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-emerald-50">
      <div className="container mx-auto px-4">
        {/* Stats Highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div className="text-4xl font-bold text-emerald-600 mb-2">{item.stat}</div>
              <div className="text-xl mb-1">{item.label}</div>
              <div className="text-gray-600 text-sm">{item.description}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">What Our Guests Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our happy guests about their experiences at Paradise Cove.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="size-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                <div className="border-t pt-4">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

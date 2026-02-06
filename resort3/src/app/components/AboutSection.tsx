import { Users, Palmtree, Waves, Heart } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Welcome to Paradise Cove Resort</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nestled in the heart of Kumta, Uttara Kannada, Karnataka, our resort offers a perfect blend of luxury, nature, and authentic coastal experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1742844551970-ce693b4f05ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNvcnQlMjByZWNlcHRpb24lMjBsb2JieXxlbnwxfHx8fDE3NzA0MDIyMzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Resort Lobby"
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl">Your Coastal Paradise Awaits</h3>
            <p className="text-gray-700 leading-relaxed">
              Paradise Cove Resort is more than just a place to stay – it's an experience. Situated on a sprawling coconut plantation, our resort offers breathtaking views of the Arabian Sea, pristine beaches, and lush tropical landscapes.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether you're looking for a romantic getaway, a family vacation, or a peaceful retreat, we provide world-class amenities, comfortable accommodations, and warm hospitality that will make your stay unforgettable.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="p-3 bg-emerald-100 rounded-full">
                  <Palmtree className="size-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Coconut Farm</h4>
                  <p className="text-sm text-gray-600">5 acres of paradise</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Waves className="size-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Beach Access</h4>
                  <p className="text-sm text-gray-600">Private beach area</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-3 bg-purple-100 rounded-full">
                  <Users className="size-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Expert Staff</h4>
                  <p className="text-sm text-gray-600">24/7 service</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-3 bg-pink-100 rounded-full">
                  <Heart className="size-6 text-pink-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Hospitality</h4>
                  <p className="text-sm text-gray-600">Warm & welcoming</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

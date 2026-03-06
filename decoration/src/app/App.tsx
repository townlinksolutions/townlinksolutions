import { Toaster } from './components/ui/sonner';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Rooms } from './components/Rooms';
import { Amenities } from './components/Amenities';
import { NearbyPlaces } from './components/NearbyPlaces';
import { EnquiryForm } from './components/EnquiryForm';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div id="home" className="min-h-screen">
      <Navigation />
      <Hero />
      <Rooms />
      <Amenities />
      <NearbyPlaces />
      <EnquiryForm />
      <Contact />
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}

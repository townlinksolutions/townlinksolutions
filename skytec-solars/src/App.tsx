import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { 
  Sun, 
  Battery, 
  Zap, 
  Phone, 
  MessageSquare, 
  ShieldCheck, 
  ArrowRight, 
  Menu, 
  X, 
  Facebook, 
  Instagram, 
  Mail,
  ChevronDown,
  Clock,
  MapPin,
  CheckCircle2,
  Cpu,
  Info,
  Trophy,
  Settings,
  TrendingDown,
  Leaf,
  HeartPulse,
  Download,
  Users
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Types ---
interface Product {
  id: string;
  title: string;
  titleKn: string;
  brand: string;
  description: string;
  descriptionKn: string;
  icon: React.ReactNode;
  features: string[];
  featuresKn: string[];
  image: string;
  videoUrl?: string; // Embedded video URL
  specs: Record<string, string>;
}

// --- Data ---
const PRODUCTS: Product[] = [
  {
    id: 'on-grid',
    title: 'Solar On-Grid Systems',
    titleKn: 'ಸೌರ ಆನ್-ಗ್ರಿಡ್ ವ್ಯವಸ್ಥೆ',
    brand: 'Sunlight Energy',
    description: 'Zero your electricity bills by feeding excess power to the government grid.',
    descriptionKn: 'ಹೆಚ್ಚುವರಿ ವಿದ್ಯುತ್ ಅನ್ನು ಸರ್ಕಾರಕ್ಕೆ ನೀಡುವ ಮೂಲಕ ನಿಮ್ಮ ವಿದ್ಯುತ್ ಬಿಲ್ ಅನ್ನು ಶೂನ್ಯಗೊಳಿಸಿ.',
    icon: <Sun className="w-8 h-8" />,
    features: ['90% Bill Reduction', 'Govt Subsidy Support', 'Monocrystalline Tech', '25-Year Reliability'],
    featuresKn: ['90% ಬಿಲ್ ಉಳಿತಾಯ', 'ಸಬ್ಸಿಡಿ ಸೌಲಭ್ಯ', 'ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಫಲಕ', '25 ವರ್ಷ ಬಾಳಿಕೆ'],
    image: 'https://images.unsplash.com/photo-1509391366360-feaffa602160?auto=format&fit=crop&q=80&w=1200',
    videoUrl: 'https://www.youtube.com/embed/zH3_UTheGfI', // Residential solar demo placeholder
    specs: {
      "Technology": "Mono PERC High Efficiency",
      "Savings": "Up to 95% Monthly",
      "KSEB Approved": "Yes / ಹೌದು",
      "ROI Time": "3-4 Years"
    }
  },
  {
    id: 'hybrid',
    title: 'Solar Hybrid (Battery)',
    titleKn: 'ಹೈಬ್ರಿಡ್ ಸೌರ ವ್ಯವಸ್ಥೆ',
    brand: 'Sunlight Energy',
    description: 'Ensure 24/7 power for your home even during nights or blackouts.',
    descriptionKn: 'ರಾತ್ರಿಯ ವೇಳೆಯಲ್ಲಿಯೂ ನಿಮ್ಮ ಮನೆಗೆ ಸತತ ವಿದ್ಯುತ್ ಸಂಪರ್ಕ ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.',
    icon: <Battery className="w-8 h-8" />,
    features: ['Uninterrupted Power', 'Lithium Storage-L-Ion', 'Smart Energy Controls', 'Zero Noise Backup'],
    featuresKn: ['ನಿರಂತರ ವಿದ್ಯುತ್', 'ಲಿಥಿಯಂ ಬ್ಯಾಟರಿ ಸಂಗ್ರಹ', 'ಸ್ಮಾರ್ಟ್ ಕಂಟ್ರೋಲ್', 'ಸದ್ದಿಲ್ಲದ ಬ್ಯಾಕಪ್'],
    image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80&w=1200',
    videoUrl: 'https://www.youtube.com/embed/1kIPpE-uYmI', // Hybrid battery storage demo placeholder
    specs: {
      "Battery Life": "10-15 Years",
      "Backup Period": "Full Night / ಇಡೀ ರಾತ್ರಿ",
      "Tech": "Advanced Lithium L-Ion",
      "Safety": "BMS Integration"
    }
  },
  {
    id: 'heat-pump',
    title: 'V-Guard Heat Pumps',
    titleKn: 'ವಿ-ಗಾರ್ಡ್ ಹೀಟ್ ಪಂಪ್',
    brand: 'V-Guard',
    description: 'Save 75% on hot water costs. Ideal for heavy usage in coastal weather.',
    descriptionKn: 'ಬಿಸಿ ನೀರಿಗಾಗಿ ಆಗುವ ವೆಚ್ಚದಲ್ಲಿ 75% ಉಳಿಸಿ. ಕರಾವಳಿ ಪ್ರದೇಶಕ್ಕೆ ಅತ್ಯುತ್ತಮ.',
    icon: <Zap className="w-8 h-8" />,
    features: ['Extreme Energy Saving', 'Digital Temp Control', 'Premium Glasslined Tank', 'Rust-Proof Body'],
    featuresKn: ['ಅಧಿಕ ಉಳಿತಾಯ', 'ಡಿಜಿಟಲ್ ನಿಯಂತ್ರಣ', 'ತುಕ್ಕು ರಹಿತ ಟ್ಯಾಂಕ್', 'ಬಲವಾದ ಬಾಡಿ'],
    image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=1200',
    videoUrl: 'https://www.youtube.com/embed/4yP2K70Y6hM', // Heat pump tech demo placeholder
    specs: {
      "Power Saving": "75% Less Wattage",
      "Water Temp": "Up to 60\u00b0C",
      "Technology": "Air Transfer Heating",
      "Ideal for": "Big Families / ಬಂಗಲೆ"
    }
  }
];

const INSTALLATIONS = [
  { url: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=1200', label: 'Commercial Rooftop', labelKn: 'ವಾಣಿಜ್ಯ ಸೌರ ಘಟಕ' },
  { url: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=1200', label: 'Residential Home', labelKn: 'ಮನೆಗಳ ಸೌರ ವ್ಯವಸ್ಥೆ' },
  { url: 'https://images.unsplash.com/photo-1559302995-f0a147047716?auto=format&fit=crop&q=80&w=1200', label: 'Hybrid Solar Backup', labelKn: 'ಹೈಬ್ರಿಡ್ ಸೌರ ಬ್ಯಾಕಪ್' },
  { url: 'https://images.unsplash.com/photo-1497440001374-f26997328c11?auto=format&fit=crop&q=80&w=1200', label: 'Lithium Battery Bank', labelKn: 'ಲಿಥಿಯಂ ಬ್ಯಾಟರಿ ಸಂಕಲನ' }
];

const LOCAL_AREAS = [
  { en: "Honavara", kn: "ಹೊನ್ನಾವರ", coords: [14.28, 74.44] as [number, number] },
  { en: "Kumta", kn: "ಕುಮಟಾ", coords: [14.42, 74.41] as [number, number] },
  { en: "Bhatkal", kn: "ಭಟ್ಕಳ", coords: [13.97, 74.55] as [number, number] },
  { en: "Ankola", kn: "ಅಂಕೋಲಾ", coords: [14.66, 74.30] as [number, number] },
  { en: "Karwar", kn: "ಕಾರವಾರ", coords: [14.82, 74.13] as [number, number] }
];

const FAQS = [
  { 
    q: "How much can I save monthly?", 
    qKn: "ತಿಂಗಳಿಗೆ ಎಷ್ಟು ಹಣ ಉಳಿಸಬಹುದು?",
    a: "Most homes save 80% to 100% of their bill with Sunlight Energy systems.",
    aKn: "ಸನ್-ಲೈಟ್ ಎನರ್ಜಿ ಸಿಸ್ಟಮ್ ಅಳವಡಿಸುವುದರಿಂದ ನಿಮ್ಮ ಬಿಲ್‌ನಲ್ಲಿ 80% ರಿಂದ 100% ಉಳಿಸಬಹುದು."
  },
  { 
    q: "Is insurance included?", 
    qKn: "ವಿಮೆ (Insurance) ಸೌಲಭ್ಯವಿದೆಯೇ?",
    a: "Yes, we provide structural insurance for the first year of installation.",
    aKn: "ಹೌದು, ಮೊದಲ ವರ್ಷ ನಾವು ನಿಮ್ಮ ಸೌರ ವ್ಯವಸ್ಥೆಗೆ ವಿಮೆ ಸೌಲಭ್ಯ ನೀಡುತ್ತೇವೆ."
  },
  { 
    q: "Will it work in rain?", 
    qKn: "ಮಳೆಯಲ್ಲಿ ಕೆಲಸ ಮಾಡುತ್ತದೆಯೇ?",
    a: "Yes, modern panels generate power even in cloudy weather, though less than sunny days.",
    aKn: "ಹೌದು, ಮೋಡ ಕವಿದ ವಾತಾವರಣದಲ್ಲೂ ಸೌರ ಫಲಕಗಳು ವಿದ್ಯುತ್ ಉತ್ಪಾದಿಸುತ್ತವೆ."
  }
];

// --- Sub-Components ---

const TechnicalSpecsModal = ({ product, isOpen, onClose }: { product: Product | null, isOpen: boolean, onClose: () => void }) => {
  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" 
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            className="relative w-full max-w-2xl bg-white rounded-[40px] shadow-3xl overflow-hidden"
          >
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 h-64 md:h-auto">
                <img src={product.image} className="w-full h-full object-cover" alt={product.title} />
              </div>
              <div className="p-10 flex-1">
                <button onClick={onClose} className="absolute top-6 right-6 p-2 bg-slate-100 rounded-full hover:bg-solar-gold hover:text-white transition-all">
                  <X className="w-5 h-5" />
                </button>
                
                <h3 className="text-3xl font-display font-bold text-solar-blue mb-1 uppercase tracking-tighter">{product.title}</h3>
                <p className="kannada text-solar-gold font-bold text-lg mb-8">{product.titleKn}</p>
                
                <div className="space-y-3">
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest border-b pb-2">Technical Summary / ವಿವರಣೆ</p>
                  {Object.entries(product.specs).map(([key, val]) => (
                    <div key={key} className="flex justify-between items-center py-2 text-sm border-b border-slate-50">
                      <span className="text-slate-500 font-bold">{key}</span>
                      <span className="text-solar-blue font-black">{val}</span>
                    </div>
                  ))}
                </div>
                
                <button 
                   onClick={() => { onClose(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                   className="w-full mt-10 bg-solar-blue text-white py-5 rounded-3xl font-black uppercase tracking-widest text-[11px] shadow-2xl hover:bg-solar-gold transition-all"
                >
                  Consult Specialist / ಸಂಪರ್ಕಿಸಿ
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const VideoDemoModal = ({ product, isOpen, onClose }: { product: Product | null, isOpen: boolean, onClose: () => void }) => {
  if (!product || !product.videoUrl) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/95 backdrop-blur-xl" 
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="relative w-full max-w-5xl bg-black rounded-[48px] overflow-hidden shadow-4xl aspect-video border border-white/10"
          >
            <button 
              onClick={onClose} 
              className="absolute top-6 right-6 z-10 p-4 bg-white/10 hover:bg-solar-gold text-white rounded-full transition-all backdrop-blur-md"
            >
              <X className="w-6 h-6" />
            </button>
            <iframe 
              src={`${product.videoUrl}?autoplay=1`}
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
              className="w-full h-full"
            ></iframe>
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none">
              <h3 className="text-white text-2xl font-display font-bold uppercase tracking-widest">{product.title} Demo</h3>
              <p className="kannada text-solar-gold font-bold text-lg">{product.titleKn} ಪ್ರಾತ್ಯಕ್ಷಿಕೆ</p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const PortfolioSlider = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % INSTALLATIONS.length);
  const prev = () => setIndex((prev) => (prev - 1 + INSTALLATIONS.length) % INSTALLATIONS.length);

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[500px] md:h-[700px] rounded-[56px] overflow-hidden shadow-3xl group">
      <AnimatePresence mode="wait">
        <motion.div
           key={index}
           initial={{ opacity: 0, scale: 1.1 }}
           animate={{ opacity: 1, scale: 1 }}
           exit={{ opacity: 0, scale: 0.95 }}
           transition={{ duration: 0.8 }}
           className="absolute inset-0"
        >
          <img src={INSTALLATIONS[index].url} className="w-full h-full object-cover" alt="Installation" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-6 md:p-20">
            <h4 className="text-white text-3xl md:text-6xl font-display font-bold tracking-tighter mb-2">{INSTALLATIONS[index].label}</h4>
            <p className="kannada text-solar-gold text-xl md:text-2xl font-bold">{INSTALLATIONS[index].labelKn}</p>
          </div>
        </motion.div>
      </AnimatePresence>
      
      <div className="absolute right-6 bottom-6 md:right-10 md:bottom-10 flex gap-3">
        <button onClick={prev} className="w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/20 hover:bg-white hover:text-solar-blue transition-all">
          <ChevronDown className="rotate-90 w-6 h-6 md:w-7 md:h-7" />
        </button>
        <button onClick={next} className="w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/20 hover:bg-white hover:text-solar-blue transition-all">
          <ChevronDown className="-rotate-90 w-6 h-6 md:w-7 md:h-7" />
        </button>
      </div>
      
      <div className="absolute top-6 left-6 md:top-10 md:left-10 bg-solar-gold text-white px-5 py-1.5 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] shadow-xl">
        Our Installations / ನಮ್ಮ ಸೌರ ಘಟಕಗಳು
      </div>
    </div>
  );
};

const InteractiveMap = () => {
  const customIcon = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  return (
    <div className="w-full h-[400px] rounded-[40px] overflow-hidden shadow-2xl border-4 border-white mb-12 z-0 relative">
      <MapContainer 
        center={[14.42, 74.41]} 
        zoom={9} 
        scrollWheelZoom={false} 
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {LOCAL_AREAS.map((area) => (
          <Marker key={area.en} position={area.coords} icon={customIcon}>
            <Popup className="rounded-xl overflow-hidden">
              <div className="p-2 text-center">
                <p className="font-display font-bold text-solar-blue mb-0">{area.en}</p>
                <p className="kannada text-solar-gold font-bold text-xs">{area.kn}</p>
                <p className="text-[10px] text-slate-400 uppercase mt-1">Skytec Service Hub</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

const CalculatorCard = () => {
  const [bill, setBill] = useState(2000);
  const [houseSize, setHouseSize] = useState(1200);

  // Estimates: savings is approx 90% of bill
  const monthlySavings = (bill * 0.9).toFixed(0);
  const yearlySavings = (bill * 0.9 * 12).toFixed(0);
  const treesSaved = (bill / 50).toFixed(1); // Rough conversion to CO2/trees

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white p-8 md:p-12 rounded-[56px] shadow-[0_80px_160px_rgba(0,0,0,0.12)] border border-slate-50"
    >
      <div className="space-y-12">
        {/* Bill Slider */}
        <div className="space-y-6">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Monthly Electricity Bill / ಮಾಸಿಕ ವಿದ್ಯುತ್ ಬಿಲ್</p>
              <p className="text-2xl font-bold text-solar-blue">₹{bill.toLocaleString()}</p>
            </div>
          </div>
          <input 
            type="range" min="500" max="20000" step="500" 
            value={bill} 
            onChange={(e) => setBill(Number(e.target.value))}
            className="w-full h-1.5 bg-slate-100 rounded-full appearance-none cursor-pointer accent-solar-gold"
          />
          <div className="flex justify-between text-[9px] font-black text-slate-300 uppercase tracking-widest">
            <span>₹500</span>
            <span>₹20,000+</span>
          </div>
        </div>

        {/* House Size Slider */}
        <div className="space-y-6">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Roof Area (Sq Ft) / ಮನೆಯ ವಿಸ್ತೀರ್ಣ</p>
              <p className="text-2xl font-bold text-solar-blue">{houseSize} sq.ft</p>
            </div>
          </div>
          <input 
            type="range" min="300" max="5000" step="100" 
            value={houseSize} 
            onChange={(e) => setHouseSize(Number(e.target.value))}
            className="w-full h-1.5 bg-slate-100 rounded-full appearance-none cursor-pointer accent-solar-blue"
          />
          <div className="flex justify-between text-[9px] font-black text-slate-300 uppercase tracking-widest">
            <span>300 ft²</span>
            <span>5,000 ft²</span>
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-2 gap-4 md:gap-8 pt-8 border-t border-slate-50">
           <div className="p-8 bg-emerald-50 rounded-[32px] border border-emerald-100/50">
              <p className="text-[10px] font-black uppercase text-emerald-600 tracking-widest mb-3 leading-tight text-center">Monthly Savings <br/> ತಿಂಗಳ ಉಳಿತಾಯ</p>
              <p className="text-3xl md:text-5xl font-display font-bold text-solar-blue tracking-tighter text-center">₹{Number(monthlySavings).toLocaleString()}</p>
           </div>
           <div className="p-8 bg-solar-gold/5 rounded-[32px] border border-solar-gold/10">
              <p className="text-[10px] font-black uppercase text-solar-gold tracking-widest mb-3 leading-tight text-center">Yearly Savings <br/> ವಾರ್ಷಿಕ ಉಳಿತಾಯ</p>
              <p className="text-3xl md:text-5xl font-display font-bold text-solar-blue tracking-tighter text-center">₹{Number(yearlySavings).toLocaleString()}</p>
           </div>
        </div>

        {/* Eco Badge */}
        <div className="flex items-center gap-4 px-8 py-5 bg-slate-50 rounded-2xl border border-slate-100">
           <Leaf className="text-emerald-500 w-6 h-6 shrink-0" />
           <p className="text-xs font-bold text-slate-500 leading-snug">
             You will save Earth by planting equivalent of <span className="text-emerald-600 font-black">{treesSaved} mature trees</span> every year.
           </p>
        </div>

        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full py-7 bg-solar-blue text-white rounded-[32px] font-black uppercase tracking-[0.4em] text-[11px] shadow-3xl shadow-solar-blue/20 hover:bg-solar-gold transition-all"
        >
          Confirm My Subsidy / ಸಬ್ಸಿಡಿ ಪಡೆಯಿರಿ
        </button>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [videoProduct, setVideoProduct] = useState<Product | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* High Contrast Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[100] p-4 md:p-6 transition-all duration-500">
        <div className="max-w-7xl mx-auto flex items-center justify-between glass px-8 md:px-12 py-3 rounded-[32px] border border-slate-200 shadow-3xl">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 bg-solar-gold rounded-xl flex items-center justify-center text-white shadow-xl shadow-solar-gold/20">
              <Sun className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-display font-bold text-xl text-solar-blue tracking-tighter leading-none">SKYTEC SOLARS</h1>
              <p className="text-[10px] uppercase tracking-widest text-solar-gold font-black">Proprietorship</p>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-10">
            <a href="#" className="nav-link font-black text-xs">Home / ಮುಖಪುಟ</a>
            <a href="#products" className="nav-link font-black text-xs">Products / ಉತ್ಪನ್ನಗಳು</a>
            <a href="#projects" className="nav-link font-black text-xs">Photos / ಗ್ಯಾಲರಿ</a>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-solar-blue text-white px-8 py-3.5 rounded-[20px] font-black text-[11px] uppercase tracking-widest hover:bg-solar-gold transition-all shadow-xl shadow-solar-blue/10"
            >
              Contact / ಸಂಪರ್ಕಿಸಿ
            </button>
          </div>

          <button className="lg:hidden text-solar-blue p-3 bg-slate-50 rounded-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overhaul */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: -20 }}
             className="fixed inset-0 z-[110] bg-white p-10 flex flex-col items-center justify-center gap-10 lg:hidden"
          >
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-10 right-10 p-4 bg-slate-50 rounded-3xl">
              <X className="w-8 h-8 text-solar-blue" />
            </button>
            <div className="text-center space-y-12">
              <a href="#" className="block text-4xl font-display font-bold text-solar-blue" onClick={() => setIsMenuOpen(false)}>
                Home <br /> <span className="kannada text-solar-gold text-2xl">ಮುಖಪುಟ</span>
              </a>
              <a href="#products" className="block text-4xl font-display font-bold text-solar-blue" onClick={() => setIsMenuOpen(false)}>
                Products <br /> <span className="kannada text-solar-gold text-2xl">ಉತ್ಪನ್ನಗಳು</span>
              </a>
              <a href="#projects" className="block text-4xl font-display font-bold text-solar-blue" onClick={() => setIsMenuOpen(false)}>
                Photos <br /> <span className="kannada text-solar-gold text-2xl">ಗ್ಯಾಲರಿ</span>
              </a>
              <button 
                 onClick={() => { setIsMenuOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                 className="w-full bg-solar-gold text-white py-8 rounded-[40px] font-black text-lg uppercase tracking-widest shadow-2xl"
              >
                Contact / ಸಂಪರ್ಕಿಸಿ
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Impactful Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 pb-20 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover opacity-40 contrast-125" alt="Residential Solar Rooftop" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-5xl"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-white/10 backdrop-blur-3xl rounded-full border border-white/10 mb-12 shadow-2xl">
              <span className="w-2.5 h-2.5 bg-solar-gold rounded-full animate-pulse shadow-[0_0_15px_rgba(217,106,19,0.8)]" />
              <span className="text-white text-[11px] font-black uppercase tracking-[0.4em]">Proprietor: Rathnakar Ambig</span>
            </div>
            
            <h2 className="text-[50px] md:text-[130px] font-display font-bold text-white leading-[0.9] mb-12 tracking-tighter uppercase">
              Skytec <br />
              <span className="text-solar-gold italic">Solars</span> ಸೌರ ಶಕ್ತಿ
            </h2>
            
            <p className="text-slate-300 text-xl md:text-2xl font-medium max-w-3xl mb-16 leading-relaxed">
              Coastal Karnataka's Trusted Solar Partner. Convert your roof into a power plant with Sunlight Energy systems.
            </p>

            <div className="flex flex-wrap gap-8">
              <button 
                 onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                 className="bg-solar-gold text-white px-12 py-7 rounded-[32px] font-black text-sm uppercase tracking-[0.2em] shadow-3xl shadow-solar-gold/20 hover:scale-105 transition-all flex items-center gap-4 active:scale-95"
              >
                Go Solar / ಸೌರ ಶಕ್ತಿಗೆ ಬದಲಾಗಿ
                <ArrowRight className="w-7 h-7" />
              </button>
              <div className="flex items-center gap-6 px-10 py-7 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-xl group cursor-pointer hover:bg-white/10 transition-all">
                <div className="w-14 h-14 bg-solar-gold rounded-2xl flex items-center justify-center text-white shadow-xl">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                   <p className="text-white/50 text-[10px] font-black uppercase tracking-widest mb-1">Direct Line / ನೇರ ಕರೆ</p>
                   <a href="tel:+918073698789" className="text-white text-2xl font-black font-display">8073 698 789</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Locally Relevant Quick Stats */}
      <section className="bg-white py-12 md:py-16 container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 -mt-16 md:-mt-20 relative z-20">
        {[
          { id: 'users', label: 'Saved Costs', kn: 'ನೂರಾರು ಕುಟುಂಬಗಳಿಗೆ ಉಳಿತಾಯ', val: '500+', icon: <Users /> },
          { id: 'zap', label: 'Installation Cap', kn: 'ಒಟ್ಟು ಅಳವಡಿಕೆ ಸಾಮರ್ಥ್ಯ', val: '5.2 MW+', icon: <Zap /> },
          { id: 'trophy', label: 'Service Reliability', kn: 'ನಿರಂತರ ಪ್ರಾಮಾಣಿಕ ಸೇವೆ', val: '15 Yrs', icon: <Trophy /> },
          { id: 'shield', label: 'Support Priority', kn: 'ತಾಂತ್ರಿಕ ಬೆಂಬಲ ಲಭ್ಯವಿದೆ', val: '24/7', icon: <ShieldCheck /> }
        ].map((item, i) => (
          <div key={i} className="bg-white p-10 rounded-[48px] shadow-[0_40px_80px_rgba(0,0,0,0.08)] border border-slate-50 flex flex-col items-center text-center group hover:border-solar-gold transition-all duration-500">
            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-solar-blue mb-8 group-hover:bg-solar-blue group-hover:text-white transition-all transform group-hover:rotate-6">
              <motion.div
                initial={item.id === 'zap' ? { scale: 0.5, rotate: -20, opacity: 0 } : { opacity: 1 }}
                whileInView={item.id === 'zap' ? { scale: 1, rotate: 0, opacity: 1 } : {}}
                animate={
                  item.id === 'shield' 
                    ? { scale: [1, 1.15, 1], filter: ['drop-shadow(0 0 0px rgba(0,212,255,0))', 'drop-shadow(0 0 8px rgba(0,212,255,0.4))', 'drop-shadow(0 0 0px rgba(0,212,255,0))'] }
                    : item.id === 'users'
                    ? { y: [0, -5, 0] }
                    : item.id === 'trophy'
                    ? { rotate: [0, 5, -5, 0] }
                    : {}
                }
                transition={
                  item.id === 'zap'
                    ? { type: 'spring', stiffness: 200, damping: 10 }
                    : { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }
                viewport={{ once: true }}
              >
                {item.icon}
              </motion.div>
            </div>
            <h4 className="text-4xl font-display font-bold text-solar-blue tracking-tighter mb-1">{item.val}</h4>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-solar-gold mb-3">{item.label}</p>
            <p className="kannada text-slate-500 font-bold text-sm leading-none">{item.kn}</p>
          </div>
        ))}
      </section>

      {/* Solar Savings Calculator */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 md:gap-20 items-center">
            <div className="lg:w-1/2">
              <p className="text-solar-gold font-black uppercase tracking-[0.5em] text-[10px] mb-4">Investment Predictor</p>
              <h2 className="text-5xl md:text-[80px] font-display font-bold text-solar-blue tracking-tighter mb-8 leading-[0.9]">Savings <br /> Calculator</h2>
              <p className="kannada text-solar-gold text-2xl font-bold mb-10">ಸೌರ ಉಳಿತಾಯ ಲೆಕ್ಕಾಚಾರ</p>
              <p className="text-slate-500 font-medium text-lg leading-relaxed mb-12">
                See exactly how much money you can save by switching to Skytec Solars. This estimation is based on average Karnataka electricity tariffs.
              </p>
              <div className="flex gap-6 p-8 bg-white rounded-[32px] shadow-xl border border-slate-100">
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 shrink-0">
                  <TrendingDown className="w-8 h-8" />
                </div>
                <div>
                   <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">Average ROI / ಲಾಭದ ಕಾಲಾವಧಿ</p>
                   <p className="text-solar-blue text-2xl font-black font-display tracking-tight">3.5 - 4 Years</p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
               <CalculatorCard />
            </div>
          </div>
        </div>
      </section>

      {/* The Skytec Standard (USP Section) */}
      <section className="section-padding overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 items-center mb-24">
            <div className="lg:w-1/2">
              <p className="text-solar-gold font-black uppercase tracking-[0.5em] text-[10px] mb-4">Why Choose Us</p>
              <h2 className="text-5xl md:text-8xl font-display font-bold text-solar-blue tracking-tighter mb-6 leading-none">The Skytec <br /> Standard</h2>
              <p className="kannada text-solar-gold text-2xl font-bold mb-10">ನಮ್ಮ ಗುಣಮಟ್ಟದ ಭರವಸೆ</p>
              <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-xl">
                 We don't just install panels; we build long-term relationships through Honesty, Quality, and Localized technical support.
              </p>
            </div>
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
               {[
                 { 
                   icon: <MapPin className="w-10 h-10" />, 
                   title: "Coast-Specific", 
                   titleKn: "ಪ್ರಾಂತೀಯ ಪರಿಣತಿ", 
                   desc: "Expert design for the salt-air and heavy winds of coastal Karnataka." 
                 },
                 { 
                   icon: <Cpu className="w-10 h-10" />, 
                   title: "Grade-A Gear", 
                   titleKn: "ಉತ್ತಮ ಪರಿಕರಗಳು", 
                   desc: "Official Sunlight Energy partners using only premium hardware." 
                 },
                 { 
                   icon: <Users className="w-10 h-10" />, 
                   title: "Direct Access", 
                   titleKn: "ನೇರ ಸಂಪರ್ಕ", 
                   desc: "Talk directly to Rathnakar Ambig & our head technicians, 24/7." 
                 },
                 { 
                   icon: <ShieldCheck className="w-10 h-10" />, 
                   title: "Secure Fixation", 
                   titleKn: "ಬಲವಾದ ಅಳವಡಿಕೆ", 
                   desc: "Military-grade mounting structures that outlast the heaviest monsoons." 
                 }
               ].map((usp, i) => (
                 <motion.div 
                   key={i}
                   whileHover={{ y: -10 }}
                   className="p-10 bg-slate-50 rounded-[40px] border border-slate-100 group transition-all"
                 >
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-solar-blue mb-8 shadow-xl group-hover:bg-solar-gold group-hover:text-white transition-all">
                      {usp.icon}
                    </div>
                    <h4 className="text-2xl font-display font-bold text-solar-blue mb-1 uppercase tracking-tight">{usp.title}</h4>
                    <p className="kannada text-solar-gold font-bold text-sm mb-4">{usp.titleKn}</p>
                    <p className="text-slate-500 text-xs font-medium leading-relaxed">{usp.desc}</p>
                 </motion.div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Showcase Slider */}
      <section id="projects" className="section-padding bg-slate-50 overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-24">
            <p className="text-solar-gold font-black uppercase tracking-[0.5em] text-[10px] mb-4">Real Implementations</p>
            <h2 className="text-5xl md:text-8xl font-display font-bold text-solar-blue tracking-tighter mb-4">ನಮ್ಮ ಸೌರ ಯೋಜನೆಗಳು</h2>
            <p className="text-slate-500 font-bold text-xl uppercase tracking-widest hidden md:block">Real Work. Local Locations. Trusted Power.</p>
          </div>
          <PortfolioSlider />
        </div>
      </section>

      {/* Bilingual Product Selection */}
      <section id="products" className="section-padding container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-24">
          <div className="max-w-3xl">
            <p className="text-solar-gold font-black uppercase tracking-[0.5em] text-[10px] mb-4">Elite Energy Partners</p>
            <h2 className="text-5xl md:text-8xl font-display font-bold text-solar-blue tracking-tighter mb-8 leading-[0.9]">ನಮ್ಮ ಉತ್ಪನ್ನ ಶ್ರೇಣಿ <br /> Our Product Range</h2>
            <p className="text-slate-500 font-medium text-lg leading-relaxed">
              We provide only certified Grade-A technology for the coastal climate of Karnataka. Long-lasting, rust-proof, and high efficiency.
            </p>
          </div>
          <div className="flex gap-4">
             <div className="p-8 bg-slate-50 rounded-[40px] text-center border border-slate-100 flex flex-col items-center">
                <Leaf className="text-emerald-500 w-10 h-10 mb-4" />
                <span className="text-[10px] font-black uppercase tracking-widest">Eco Friendly / ಪರಿಸರ ಸ್ನೇಹಿ</span>
             </div>
             <div className="p-8 bg-slate-50 rounded-[40px] text-center border border-slate-100 flex flex-col items-center">
                <TrendingDown className="text-solar-gold w-10 h-10 mb-4" />
                <span className="text-[10px] font-black uppercase tracking-widest">Low Cost / ಕಡಿಮೆ ವೆಚ್ಚ</span>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {PRODUCTS.map((p, i) => (
            <motion.div 
               key={p.id}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="group bg-white rounded-[56px] overflow-hidden shadow-2xl border border-slate-50 flex flex-col hover:shadow-solar-gold/10 transition-all duration-700 hover:-translate-y-2"
            >
               <div className="relative h-72 overflow-hidden">
                  <img src={p.image} className="w-full h-full object-cover grayscale-[0.2] transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" alt={p.title} />
                  <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-md px-5 py-2 rounded-full text-[10px] font-black uppercase text-solar-blue tracking-widest shadow-xl">
                    {p.brand} Power
                  </div>
                  {p.videoUrl && (
                    <button 
                      onClick={(e) => { e.stopPropagation(); setVideoProduct(p); }}
                      className="absolute inset-0 m-auto w-16 h-16 bg-solar-gold/90 text-white rounded-full flex items-center justify-center shadow-2xl backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all transform scale-50 group-hover:scale-100 animate-pulse hover:bg-solar-blue"
                    >
                      <Zap className="w-8 h-8 fill-current" />
                    </button>
                  )}
               </div>
               
               <div className="p-10 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h3 className="text-3xl font-display font-bold text-solar-blue tracking-tighter mb-1 uppercase">{p.title}</h3>
                      <p className="kannada text-solar-gold font-bold text-lg">{p.titleKn}</p>
                    </div>
                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-solar-blue shrink-0 group-hover:bg-solar-blue group-hover:text-white transition-all">
                      {p.icon}
                    </div>
                  </div>

                  <div className="space-y-4 mb-10">
                    {p.features.map((f, idx) => (
                      <div key={idx} className="flex gap-4 items-start">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                        <div className="flex flex-col">
                          <span className="text-slate-700 font-bold text-xs uppercase tracking-tight">{f}</span>
                          <span className="kannada text-slate-400 font-bold text-[13px]">{p.featuresKn[idx]}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <button 
                         onClick={() => setSelectedProduct(p)}
                         className="w-full py-5 rounded-[28px] border-2 border-slate-100 text-[11px] font-black uppercase tracking-[0.3em] text-solar-blue hover:bg-slate-50 hover:border-solar-gold transition-all flex items-center justify-center gap-2"
                      >
                        Info / ಮಾಹಿತಿ
                        <Info className="w-4 h-4" />
                      </button>
                      <button 
                         onClick={() => setVideoProduct(p)}
                         className="w-full py-5 rounded-[28px] bg-slate-50 text-[11px] font-black uppercase tracking-[0.3em] text-solar-gold hover:bg-solar-gold hover:text-white transition-all flex items-center justify-center gap-2 border border-slate-100"
                      >
                        Demo / ವಿಡಿಯೋ
                        <Zap className="w-4 h-4" />
                      </button>
                    </div>
                    <a 
                       href={`https://wa.me/918073698789?text=Interested in ${p.title}`}
                       className="w-full py-5 rounded-[28px] bg-solar-blue text-white flex items-center justify-center gap-4 font-black uppercase tracking-[0.2em] text-[11px] shadow-2xl hover:bg-solar-gold transition-all"
                    >
                      <MessageSquare className="w-5 h-5" />
                      Inquire on WhatsApp
                    </a>
                  </div>
               </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bilingual Knowledge Area */}
      <section className="section-padding bg-solar-blue relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.02] -skew-x-12 translate-x-1/2" />
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <p className="text-solar-accent font-black uppercase tracking-[0.5em] text-[10px] mb-4">Solar Education</p>
              <h2 className="text-5xl md:text-8xl font-display font-bold text-white tracking-tighter mb-12">ನಿಮ್ಮ ಪ್ರಶ್ನೆಗಳು <br /> <span className="text-white/50">(FAQs)</span></h2>
              
              <div className="space-y-4 md:space-y-6">
                {FAQS.map((faq, i) => (
                  <div key={i} className="group cursor-pointer">
                    <button 
                       onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                       className="w-full p-6 md:p-10 bg-white/5 backdrop-blur-xl rounded-[28px] md:rounded-[40px] border border-white/10 text-left hover:bg-white/10 transition-all flex items-center justify-between gap-4"
                    >
                       <div>
                         <h4 className="text-lg md:text-xl font-bold text-white mb-1 leading-tight uppercase tracking-tight">{faq.q}</h4>
                         <p className="kannada text-solar-accent text-base md:text-lg font-bold">{faq.qKn}</p>
                       </div>
                       <div className={cn("w-10 h-10 md:w-14 md:h-14 rounded-2xl md:rounded-3xl flex items-center justify-center transition-all bg-white/5 group-hover:bg-solar-gold text-white shrink-0", activeFaq === i && "bg-solar-gold rotate-180")}>
                         <ChevronDown className="w-6 h-6 md:w-8 h-8" />
                       </div>
                    </button>
                    <AnimatePresence>
                      {activeFaq === i && (
                        <motion.div
                           initial={{ height: 0, opacity: 0 }}
                           animate={{ height: 'auto', opacity: 1 }}
                           exit={{ height: 0, opacity: 0 }}
                           className="overflow-hidden"
                        >
                          <div className="p-6 md:p-10 pt-4 text-slate-300 font-medium text-base md:text-lg leading-relaxed space-y-4">
                            <p>{faq.a}</p>
                            <p className="kannada text-white text-lg md:text-xl">{faq.aKn}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-[48px] md:rounded-[72px] p-8 md:p-20 shadow-3xl">
               <h3 className="text-3xl md:text-4xl font-display font-bold text-solar-blue mb-4 tracking-tighter leading-none">Local Service Hub</h3>
               <p className="kannada text-solar-gold font-bold text-xl md:text-2xl mb-8 md:mb-12 italic">ನಿಮ್ಮೂರಿನಲ್ಲಿ ನಮ್ಮ ಸೇವೆ ಸಿದ್ದವಿದೆ</p>
               
               <InteractiveMap />

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-12 md:mb-16">
                  {LOCAL_AREAS.map(area => (
                    <div key={area.en} className="flex gap-4 md:gap-6 items-center p-5 md:p-6 bg-slate-50 rounded-2xl md:rounded-3xl border border-slate-100 hover:border-solar-gold transition-all group">
                       <MapPin className="text-solar-gold w-6 h-6 md:w-8 h-8 shrink-0 group-hover:scale-110 transition-transform" />
                       <div>
                         <p className="font-display font-bold text-solar-blue text-base md:text-lg leading-none mb-1">{area.en}</p>
                         <p className="kannada text-slate-400 font-bold text-xs md:text-sm leading-none">{area.kn}</p>
                       </div>
                    </div>
                  ))}
               </div>

               <div className="space-y-4 md:space-y-6">
                  <div className="flex items-center gap-6 md:gap-8 p-8 md:p-10 bg-solar-blue text-white rounded-[32px] md:rounded-[40px] shadow-2xl relative overflow-hidden group">
                     <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12 group-hover:rotate-45 transition-transform">
                        <Phone className="w-16 h-16 md:w-20 h-20" />
                     </div>
                     <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center shrink-0">
                        <Phone className="w-6 h-6 md:w-8 h-8 text-solar-gold" />
                     </div>
                     <div>
                        <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-white/50 mb-1 md:mb-2">Sales Hotline / ಶೀಘ್ರ ಸಂಪರ್ಕ</p>
                        <a href="tel:+918073698789" className="text-2xl md:text-3xl font-display font-bold block">8073 698 789</a>
                     </div>
                  </div>
                  <div className="flex items-center gap-6 md:gap-8 p-8 md:p-10 bg-slate-50 text-solar-blue rounded-[32px] md:rounded-[40px] shadow-xl group border border-slate-100">
                     <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:bg-solar-gold group-hover:text-white transition-all">
                        <Clock className="w-6 h-6 md:w-8 h-8 text-solar-gold group-hover:text-white" />
                     </div>
                     <div>
                        <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-1 md:mb-2">Official Office / ಕಚೇರಿ</p>
                        <a href="tel:+919663538784" className="text-2xl md:text-3xl font-display font-bold block">9663 538 784</a>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rural Benefits Section */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <p className="text-solar-gold font-black uppercase tracking-[0.5em] text-[10px] mb-4">Why Go Solar Today</p>
            <h2 className="text-5xl md:text-8xl font-display font-bold text-solar-blue tracking-tighter mb-4 leading-none uppercase">ಸೌರ ಶಕ್ತಿಯ ಲಾಭಗಳು</h2>
            <p className="text-slate-500 font-bold text-xl uppercase tracking-widest">Simple Solar. Big Benefits for Your Family.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Zero Current Bill",
                titleKn: "ಕರೆಂಟ್ ಬಿಲ್ ಇಲ್ಲ",
                icon: <TrendingDown className="w-12 h-12" />,
                desc: "Don't pay KSEB/HESCOM anymore. Save your hard-earned money and spend it on your family and kids' education.",
                descKn: "ಪ್ರತಿ ತಿಂಗಳು ಕರೆಂಟ್ ಬಿಲ್ ಕಟ್ಟುವ ಚಿಂತೆ ಬೇಡ. ನಿಮ್ಮ ಕಷ್ಟದ ಹಣವನ್ನು ಕುಟುಂಬದ ಏಳಿಗೆಗಾಗಿ ಉಳಿಸಿ."
              },
              {
                title: "Power During Rain",
                titleKn: "ಮಳೆಯಲ್ಲಿಯೂ ಬೆಳಕು",
                icon: <Zap className="w-12 h-12" />,
                desc: "Coastal monsoons bring long power cuts. With Skytec, your lights and fans stay ON even when the main grid fails.",
                descKn: "ಕರಾವಳಿಯ ಜೋರು ಮಳೆಯಲ್ಲಿ ಕರೆಂಟ್ ಹೋದರೂ ಸೌರ ಶಕ್ತಿಯಿಂದ ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸದಾ ಬೆಳಕು ಇರುತ್ತದೆ."
              },
              {
                title: "Clean Air and Health",
                titleKn: "ಶುದ್ಧ ಗಾಳಿ ಮತ್ತು ಆರೋಗ್ಯ",
                icon: <Leaf className="w-12 h-12" />,
                desc: "Solar is God-given energy. It produces no smoke or noise, keeping our beautiful coastal air clean for future generations.",
                descKn: "ಯಾವುದೇ ಶಬ್ದ ಅಥವಾ ಹೊಗೆ ಇಲ್ಲದ ಪರಿಸರ ಸ್ನೇಹಿ ಶಕ್ತಿ. ಇದು ನಮ್ಮ ಮುಂದಿನ ಪೀಳಿಗೆಗೆ ಉತ್ತಮ ಕೊಡುಗೆ."
              }
            ].map((benefit, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white p-12 rounded-[56px] shadow-2xl border border-slate-100 flex flex-col items-center text-center group hover:bg-solar-blue transition-all duration-500"
              >
                <div className="w-24 h-24 bg-slate-50 rounded-[32px] flex items-center justify-center text-solar-gold mb-10 group-hover:bg-white/10 group-hover:text-white transition-all transform group-hover:rotate-12">
                   {benefit.icon}
                </div>
                <h4 className="text-3xl font-display font-bold text-solar-blue mb-2 group-hover:text-white transition-all uppercase">{benefit.title}</h4>
                <p className="kannada text-solar-gold font-bold text-xl mb-8 group-hover:text-solar-accent transition-all">{benefit.titleKn}</p>
                <div className="space-y-4">
                   <p className="text-slate-500 font-medium leading-relaxed group-hover:text-slate-300 transition-all">{benefit.desc}</p>
                   <p className="kannada text-slate-400 font-bold leading-relaxed group-hover:text-white/70 transition-all pt-4 border-t border-slate-100 group-hover:border-white/10">{benefit.descKn}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Simplified High-Performance Form */}
      <section id="contact" className="section-padding container mx-auto">
        <div className="max-w-4xl mx-auto glass p-12 md:p-24 rounded-[80px] border-slate-200 shadow-3xl">
          <div className="text-center mb-16">
            <p className="text-solar-gold font-black uppercase tracking-[0.5em] text-[10px] mb-4">Start Inquiry</p>
            <h2 className="text-5xl md:text-8xl font-display font-bold text-solar-blue tracking-tighter mb-4 leading-none">ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ</h2>
            <p className="text-slate-500 font-bold text-xl uppercase tracking-widest mb-10">Send a message, we will call you back.</p>
            <div className="w-24 h-1.5 bg-solar-gold mx-auto rounded-full" />
          </div>
          
          <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); alert("ಕಳುಹಿಸಲಾಗಿದೆ! ನಮ್ಮ ತಾಂತ್ರಿಕ ತಂಡ ಶೀಘ್ರದಲ್ಲೇ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುತ್ತದೆ."); }}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="pl-6 text-[10px] font-black uppercase text-slate-400 tracking-widest">Name / ಹೆಸರು</label>
                <input type="text" placeholder="ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರು" className="w-full bg-slate-50 border-none rounded-[28px] px-8 py-6 focus:ring-4 focus:ring-solar-gold/20 outline-none transition-all font-bold text-lg" required />
              </div>
              <div className="space-y-3">
                <label className="pl-6 text-[10px] font-black uppercase text-slate-400 tracking-widest">Phone / ಫೋನ್ ಸಂಖ್ಯೆ</label>
                <input type="tel" placeholder="ನಿಮ್ಮ ಸಂಪರ್ಕ ಸಂಖ್ಯೆ" className="w-full bg-slate-50 border-none rounded-[28px] px-8 py-6 focus:ring-4 focus:ring-solar-gold/20 outline-none transition-all font-bold text-lg" required />
              </div>
            </div>
            <div className="space-y-3">
              <label className="pl-6 text-[10px] font-black uppercase text-slate-400 tracking-widest">Place / ಊರು</label>
              <input type="text" placeholder="Honavara, Kumta, Karwar, etc." className="w-full bg-slate-50 border-none rounded-[28px] px-8 py-6 focus:ring-4 focus:ring-solar-gold/20 outline-none transition-all font-bold text-lg" required />
            </div>
            <button className="w-full bg-solar-blue text-white py-10 rounded-[36px] font-black uppercase tracking-[0.5em] text-sm shadow-3xl shadow-solar-blue/20 hover:bg-solar-gold transition-all active:scale-95 group">
              Confirm Submission <br /> <span className="text-xs opacity-50 font-medium group-hover:opacity-100 transition-opacity">(ಮಾಹಿತಿ ಕಳುಹಿಸಿ)</span>
            </button>
          </form>
        </div>
      </section>

      {/* Coastal Footer */}
      <footer className="bg-slate-950 py-32 text-slate-500 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-solar-gold via-solar-accent to-solar-gold" />
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-20 mb-24">
            <div className="max-w-sm">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-solar-gold rounded-2xl flex items-center justify-center text-white">
                  <Sun className="w-8 h-8" />
                </div>
                <div>
                   <h3 className="text-white font-display font-bold text-3xl tracking-tighter leading-none mb-1">SKYTEC SOLARS</h3>
                   <p className="text-[11px] uppercase tracking-[0.4em] text-solar-gold font-black">Coasts of Uttara Kannada</p>
                </div>
              </div>
              <p className="text-lg font-bold italic text-slate-400 leading-relaxed">
                "Simple terms. Clean power. Guaranteed savings for Every coastal home."
              </p>
            </div>
            
            <div className="flex flex-wrap gap-20">
               <div>
                  <h5 className="text-white font-black uppercase text-[10px] tracking-[0.5em] mb-10">Regional Service</h5>
                  <ul className="space-y-6 text-xs font-bold uppercase tracking-widest">
                     <li><a href="#" className="hover:text-solar-gold transition-colors">Honavara / ಹೊನ್ನಾವರ</a></li>
                     <li><a href="#" className="hover:text-solar-gold transition-colors">Kumta / ಕುಮಟಾ</a></li>
                     <li><a href="#" className="hover:text-solar-gold transition-colors">Bhatkal / ಭಟ್ಕಳ</a></li>
                     <li><a href="#" className="hover:text-solar-gold transition-colors">Ankola / ಅಂಕೋಲಾ</a></li>
                     <li><a href="#" className="hover:text-solar-gold transition-colors">Karwar / ಕಾರವಾರ</a></li>
                  </ul>
               </div>
               <div>
                  <h5 className="text-white font-black uppercase text-[10px] tracking-[0.5em] mb-10">Social / ಸಾಮಾಜಿಕ</h5>
                  <div className="flex gap-6">
                    <Facebook className="hover:text-solar-gold transition-all cursor-pointer" />
                    <Instagram className="hover:text-solar-gold transition-all cursor-pointer" />
                    <Mail className="hover:text-solar-gold transition-all cursor-pointer" />
                  </div>
               </div>
            </div>
          </div>
          
          <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 text-[10px] font-black uppercase tracking-[0.8em] text-slate-800 text-center md:text-left">
             <p>© 2024 SKYTEC SOLARS. POWERED BY RATHNAKAR AMBIG & TEAM.</p>
             <div className="flex gap-16">
               <a href="#" className="hover:text-white transition-colors">Security</a>
               <a href="#" className="hover:text-white transition-colors">KSEB Hub</a>
             </div>
          </div>
        </div>
      </footer>

      {/* Floating Interactive Modals */}
      <TechnicalSpecsModal 
        product={selectedProduct}
        isOpen={selectedProduct !== null}
        onClose={() => setSelectedProduct(null)}
      />
      <VideoDemoModal 
        product={videoProduct}
        isOpen={videoProduct !== null}
        onClose={() => setVideoProduct(null)}
      />
    </div>
  );
}

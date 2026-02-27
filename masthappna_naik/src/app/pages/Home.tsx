import { Link } from "react-router";
import { Users, Heart, Award, TrendingUp, ArrowRight, Calendar } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const stats = [
    { icon: Users, label: "ಸಮುದಾಯ ಯೋಜನೆಗಳು", value: "50+" },
    { icon: Heart, label: "ಕುಟುಂಬಗಳಿಗೆ ಸಹಾಯ", value: "1000+" },
    { icon: Award, label: "ಪ್ರಶಸ್ತಿಗಳು", value: "15+" },
    { icon: TrendingUp, label: "ವರ್ಷಗಳ ಸೇವೆ", value: "20+" },
  ];

  const timelinePreview = [
    { year: "2026", event: "ಭಾರತದ ಕೈಗಾರಿಕಾ ಐಕಾನ್ ಪ್ರಶಸ್ತಿ" },
    { year: "2025", event: "ಶರವತಿ ಪಂಪ್ಡ್ ಸ್ಟೋರೇಜ್ ಯೋಜನೆ ವಿರೋಧ ಅಭಿಯಾನ" },
    { year: "2024", event: "ಭಗವದ್ಗೀತೆ ವಿತರಣೆ ಕಾರ್ಯಕ್ರಮ" },
    { year: "2023", event: "ಬಹು-ವಿಶೇಷ ಆಸ್ಪತ್ರೆ ಪೋಸ್ಟ್‌ಕಾರ್ಡ್ ಅಭಿಯಾನ" },
  ];

  const focusAreas = [
    {
      title: "ಆರೋಗ್ಯ ಸೇವೆ",
      description: "ಉತ್ತರ ಕನ್ನಡ ಜಿಲ್ಲೆಗೆ ಬಹು-ವಿಶೇಷ ಆಸ್ಪತ್ರೆ ಸ್ಥಾಪನೆಗಾಗಿ ಹೋರಾಟ",
      image: "medical facility india"
    },
    {
      title: "ಪರಿಸರ ಸಂರಕ್ಷಣೆ",
      description: "ನದಿಗಳ ರಕ್ಷಣೆ ಮತ್ತು ಪರಿಸರ ಹಾನಿಕಾರಕ ಯೋಜನೆಗಳ ವಿರೋಧ",
      image: "river conservation india"
    },
    {
      title: "ಶಿಕ್ಷಣ",
      description: "ಗ್ರಾಮೀಣ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಶಿಕ್ಷಣ ಬೆಂಬಲ ಮತ್ತು ಮೌಲ್ಯ ಶಿಕ್ಷಣ",
      image: "students learning india"
    },
    {
      title: "ಸಾಮಾಜಿಕ ಕಲ್ಯಾಣ",
      description: "ಬಡ ಕುಟುಂಬಗಳಿಗೆ ಮೂಲಭೂತ ಸೌಕರ್ಯಗಳು ಮತ್ತು ಸಹಾಯ",
      image: "community help india"
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 to-red-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                ಮಸ್ತಪ್ಪ ನಾಯಕ್ ಬಲಸೆ
              </h1>
              <p className="text-xl mb-4 text-orange-100">
                ಜನರ ಧ್ವನಿ, ಪ್ರಗತಿಯ ದೃಷ್ಟಿ
              </p>
              <p className="text-lg mb-8 text-orange-50">
                ಸಾಮಾಜಿಕ ಕಾರ್ಯಕರ್ತ | ಉದ್ಯಮಿ | ಸಮುದಾಯ ನಾಯಕ
              </p>
              <p className="mb-8 text-orange-50">
                ಮುರ್ದೇಶ್ವರ ಮತ್ತು ಭಟ್ಕಳ ಪ್ರದೇಶದ ಮೀನುಗಾರ ಸಮುದಾಯ ಮತ್ತು ಹಿಂದುಳಿದ ವರ್ಗಗಳ 
                ಹಕ್ಕುಗಳಿಗಾಗಿ ಹೋರಾಡುವ ಒಬ್ಬ ಸಮರ್ಪಿತ ನಾಯಕ. ಸೇವೆ ಮೇಲೆ ಸ್ವಯಂ ತತ್ವವನ್ನು ನಂಬುವವರು.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/about"
                  className="px-6 py-3 bg-white text-orange-600 rounded-lg font-medium hover:bg-orange-50 transition-colors"
                >
                  ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ
                </Link>
                <Link
                  to="/contact"
                  className="px-6 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-orange-600 transition-colors"
                >
                  ಸಂಪರ್ಕಿಸಿ
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1542178243-bc20204b769f"
                  alt="Mastappa Naik Balase"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-orange-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">ಪ್ರಮುಖ ಕಾರ್ಯಕ್ಷೇತ್ರಗಳು</h2>
            <p className="text-gray-600">ಸಮುದಾಯದ ಅಭಿವೃದ್ಧಿಗಾಗಿ ನಮ್ಮ ಪ್ರಮುಖ ಗಮನ ಕ್ಷೇತ್ರಗಳು</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback
                    src={`https://images.unsplash.com/photo-${index === 0 ? '1519494026892-80bbd2d6fd0d' : index === 1 ? '1501594907352-04cda38ebc29' : index === 2 ? '1503676260728-1c00da094a0b' : '1559027615-cd4628902d4a'}`}
                    alt={area.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{area.title}</h3>
                  <p className="text-gray-600 text-sm">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">ಪ್ರಮುಖ ಮೈಲುಗಲ್ಲುಗಳು</h2>
              <p className="text-gray-600">ನಮ್ಮ ಪ್ರಯಾಣದ ಮುಖ್ಯ ಘಟ್ಟಗಳು</p>
            </div>
            <Link
              to="/timeline"
              className="flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium"
            >
              ಸಂಪೂರ್ಣ ಟೈಮ್‌ಲೈನ್ ನೋಡಿ
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-orange-200"></div>
            
            {/* Timeline Items */}
            <div className="space-y-8">
              {timelinePreview.map((item, index) => (
                <div key={index} className="relative flex items-start gap-6">
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0 w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                    <Calendar className="w-6 h-6" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-gray-50 rounded-lg p-6 shadow-sm">
                    <div className="text-orange-600 font-bold text-lg mb-2">{item.year}</div>
                    <div className="text-gray-900 font-medium">{item.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/timeline"
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors"
            >
              ಸಂಪೂರ್ಣ ಟೈಮ್‌ಲೈನ್ ನೋಡಿ
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-orange-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">ಸಮುದಾಯದ ಅಭಿವೃದ್ಧಿಗೆ ಸೇರಿಕೊಳ್ಳಿ</h2>
          <p className="text-xl text-orange-100 mb-8">
            ಒಟ್ಟಿಗೆ ನಾವು ಬಲಶಾಲಿಗಳು. ನಮ್ಮ ಸಮುದಾಯ ಸೇವಾ ಕಾರ್ಯಗಳಲ್ಲಿ ಭಾಗವಹಿಸಿ.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/community"
              className="px-6 py-3 bg-white text-orange-600 rounded-lg font-medium hover:bg-orange-50 transition-colors"
            >
              ಸಮುದಾಯ ಕಾರ್ಯಕ್ರಮಗಳು
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-orange-600 transition-colors"
            >
              ಸಂಪರ್ಕಿಸಿ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

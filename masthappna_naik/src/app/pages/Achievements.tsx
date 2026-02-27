import { Award, Trophy, Medal, Star } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Achievements() {
  const awards = [
    {
      year: "2026",
      title: "ಭಾರತದ ಕೈಗಾರಿಕಾ ಐಕಾನ್ ಪ್ರಶಸ್ತಿ - 2026",
      organization: "ರಾಷ್ಟ್ರೀಯ ಉದ್ಯಮಿಗಳ ಸಂಘ",
      description: "ಭಟ್ಕಳದ ಪ್ರಮುಖ ಉದ್ಯಮಿ ಎಂಬ ಗುರುತಿಸುವಿಕೆಗಾಗಿ. ವ್ಯಾಪಾರ ಕ್ಷೇತ್ರದಲ್ಲಿ ಕೊಡುಗೆ ಮತ್ತು ಸ್ಥಳೀಯ ಉದ್ಯೋಗ ಸೃಷ್ಟಿಯ ಮನ್ನಣೆ.",
      icon: Trophy
    },
    {
      year: "2024",
      title: "ಪರಿಸರ ಯೋಧ ಪ್ರಶಸ್ತಿ",
      organization: "ಕರ್ನಾಟಕ ಪರಿಸರ ಸಂರಕ್ಷಣಾ ಸಂಘ",
      description: "ಶರವತಿ ನದಿ ಸಂರಕ್ಷಣೆ ಮತ್ತು ಪರಿಸರ ಹಾನಿಕಾರಕ ಯೋಜನೆಗಳ ವಿರೋಧದಲ್ಲಿ ಅಸಾಧಾರಣ ನಾಯಕತ್ವಕ್ಕಾಗಿ.",
      icon: Medal
    },
    {
      year: "2023",
      title: "ಜನನಾಯಕ ಪ್ರಶಸ್ತಿ",
      organization: "ಉತ್ತರ ಕನ್ನಡ ಸಾಮಾಜಿಕ ಕಾರ್ಯಕರ್ತರ ವೇದಿಕೆ",
      description: "ಜನರ ಹಕ್ಕುಗಳಿಗಾಗಿ ನಿರಂತರ ಹೋರಾಟ ಮತ್ತು ಸಮುದಾಯ ಸೇವೆಗಾಗಿ.",
      icon: Award
    },
    {
      year: "2022",
      title: "ಶಿಕ್ಷಣ ಪ್ರೇಮಿ ಪ್ರಶಸ್ತಿ",
      organization: "ಭಟ್ಕಳ ತಾಲೂಕು ಶಿಕ್ಷಣ ಸಮಿತಿ",
      description: "ಗ್ರಾಮೀಣ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಶೈಕ್ಷಣಿಕ ಬೆಂಬಲ ಮತ್ತು ಮೌಲ್ಯ ಶಿಕ್ಷಣ ಪ್ರೋತ್ಸಾಹಕ್ಕಾಗಿ.",
      icon: Star
    },
    {
      year: "2021",
      title: "ಕೋವಿಡ್ ಸೇವಾ ರತ್ನ",
      organization: "ಜಿಲ್ಲಾ ಆಡಳಿತ, ಉತ್ತರ ಕನ್ನಡ",
      description: "ಸಾಂಕ್ರಾಮಿಕ ಸಮಯದಲ್ಲಿ ಸಮುದಾಯಕ್ಕೆ ನಿಸ್ವಾರ್ಥ ಸೇವೆಗಾಗಿ.",
      icon: Heart
    },
    {
      year: "2020",
      title: "ಸಮುದಾಯ ನಾಯಕತ್ವ ಪ್ರಶಸ್ತಿ",
      organization: "ಕರಾವಳಿ ಅಭಿವೃದ್ಧಿ ಪ್ರಾಧಿಕಾರ",
      description: "ಕರಾವಳಿ ಸಮುದಾಯಗಳ ಕಲ್ಯಾಣ ಮತ್ತು ಅಭಿವೃದ್ಧಿಗಾಗಿ ಕೆಲಸಕ್ಕಾಗಿ.",
      icon: Award
    }
  ];

  const majorCampaigns = [
    {
      title: "ರಕ್ತದಿಂದ ಬರೆದ ಪೋಸ್ಟ್‌ಕಾರ್ಡ್ ಅಭಿಯಾನ",
      impact: "7 ಲಕ್ಷ ಜನರನ್ನು ತಲುಪುವ ಗುರಿ, 25,000 ಪೋಸ್ಟ್‌ಕಾರ್ಡ್‌ಗಳು",
      description: "ಬಹು-ವಿಶೇಷ ಆಸ್ಪತ್ರೆ ಮತ್ತು ಪರಿಸರ ರಕ್ಷಣೆಗಾಗಿ ಅಭೂತಪೂರ್ವ ಸಾರ್ವಜನಿಕ ಅಭಿಯಾನ"
    },
    {
      title: "ನದಿಯ ಉಳಿವಿಗಾಗಿ ಪದಯಾತ್ರೆ",
      impact: "100+ ಗ್ರಾಮಗಳು, 10,000+ ಜನರನ್ನು ತಲುಪಿತು",
      description: "ಶರವತಿ ನದಿ ಸಂರಕ್ಷಣೆಗಾಗಿ ಐತಿಹಾಸಿಕ ಪದಯಾತ್ರೆ"
    },
    {
      title: "ಭಗವದ್ಗೀತೆ ವಿತರಣೆ",
      impact: "5,000+ ವಿದ್ಯಾರ್ಥಿಗಳು",
      description: "ಗ್ರಾಮೀಣ ವಿದ್ಯಾರ್ಥಿಗಳಲ್ಲಿ ಮೌಲ್ಯ ಶಿಕ್ಷಣ ಪ್ರಚಾರ"
    },
    {
      title: "ಕೋವಿಡ್ ಸಹಾಯ ಕಾರ್ಯ",
      impact: "2,000+ ಕುಟುಂಬಗಳು",
      description: "ಸಾಂಕ್ರಾಮಿಕ ಸಮಯದಲ್ಲಿ ಆಹಾರ, ವೈದ್ಯಕೀಯ ಮತ್ತು ಆರ್ಥಿಕ ಸಹಾಯ"
    }
  ];

  const recognitions = [
    "ಮೀನುಗಾರ ಸಮುದಾಯದ ಧ್ವನಿ - ಉತ್ತರ ಕನ್ನಡ ಮೀನುಗಾರರ ಸಂಘ",
    "ಯುವ ನಾಯಕ - ಸ್ಥಳೀಯ ಮಾಧ್ಯಮ ಮನ್ನಣೆ",
    "ಪರಿಸರ ಹೋರಾಟಗಾರ - ರಾಷ್ಟ್ರೀಯ ಹಸಿರು ನ್ಯಾಯಾಲಯದ ಅಭಿನಂದನೆ",
    "ಶಿಕ್ಷಣ ಪ್ರೋತ್ಸಾಹಕ - ಗ್ರಾಮ ಪಂಚಾಯತ್‌ಗಳ ಮೆಚ್ಚುಗೆ",
    "ಸಮಾಜ ಸೇವಕ - ಸ್ಥಳೀಯ ಆಟೋ ಚಾಲಕರ ಸಂಘದ ಗೌರವ"
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">ಸಾಧನೆಗಳು ಮತ್ತು ಮನ್ನಣೆಗಳು</h1>
          <p className="text-xl text-gray-600">
            ಸಮುದಾಯ ಸೇವೆ ಮತ್ತು ನಾಯಕತ್ವಕ್ಕಾಗಿ ಪಡೆದ ಗೌರವಗಳು
          </p>
        </div>

        {/* Awards Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">ಪ್ರಶಸ್ತಿಗಳು</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <award.icon className="w-8 h-8 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-orange-600 font-semibold mb-1">{award.year}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{award.title}</h3>
                    <div className="text-sm text-gray-500 mb-2">{award.organization}</div>
                    <p className="text-gray-600">{award.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Major Campaigns */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">ಪ್ರಮುಖ ಅಭಿಯಾನಗಳು</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {majorCampaigns.map((campaign, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{campaign.title}</h3>
                <div className="text-orange-600 font-semibold mb-3">{campaign.impact}</div>
                <p className="text-gray-700">{campaign.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recognitions */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">ಸಮುದಾಯ ಮನ್ನಣೆಗಳು</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recognitions.map((recognition, index) => (
              <div key={index} className="flex items-start gap-3">
                <Star className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{recognition}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Gallery */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">ಪ್ರಭಾವದ ಚಿತ್ರಗಳು</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a", title: "ಸಮುದಾಯ ಸೇವೆ" },
              { src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c", title: "ಶಿಕ್ಷಣ ಕಾರ್ಯಕ್ರಮ" },
              { src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29", title: "ಪರಿಸರ ರಕ್ಷಣೆ" },
              { src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d", title: "ಆರೋಗ್ಯ ಅಭಿಯಾನ" },
              { src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846", title: "ಯುವ ತೊಡಗಿಸಿಕೊಳ್ಳುವಿಕೆ" },
              { src: "https://images.unsplash.com/photo-1529651737248-dad5e287768e", title: "ಕ್ರೀಡಾ ಪ್ರೋತ್ಸಾಹ" }
            ].map((item, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg">
                <div className="aspect-video">
                  <ImageWithFallback
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <span className="text-white font-semibold">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const Heart = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

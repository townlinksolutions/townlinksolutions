import { Newspaper, Calendar, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function News() {
  const newsItems = [
    {
      date: "27 ಫೆಬ್ರವರಿ 2026",
      title: "ಮಸ್ತಪ್ಪ ನಾಯಕ್ ಅವರಿಗೆ ಭಾರತದ ಕೈಗಾರಿಕಾ ಐಕಾನ್ ಪ್ರಶಸ್ತಿ",
      summary: "ಭಟ್ಕಳದ ಪ್ರಮುಖ ಉದ್ಯಮಿ ಮಸ್ತಪ್ಪ ನಾಯಕ್ ಬಲಸೆ ಅವರಿಗೆ ಪ್ರತಿಷ್ಠಿತ ಭಾರತದ ಕೈಗಾರಿಕಾ ಐಕಾನ್ ಪ್ರಶಸ್ತಿ - 2026 ನೀಡಿ ಗೌರವಿಸಲಾಯಿತು.",
      source: "NudiSiri",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87"
    },
    {
      date: "15 ಸೆಪ್ಟೆಂಬರ್ 2025",
      title: "ಶರವತಿ ಯೋಜನೆ ವಿರೋಧ: ಜಿಲ್ಲಾಧಿಕಾರಿಗಳೊಂದಿಗೆ ಸಾರ್ವಜನಿಕ ಸಭೆ",
      summary: "16,000 ಮರಗಳ ನಾಶ ಮತ್ತು ನೀರು ಮಾಲಿನ್ಯದ ವಿರುದ್ಧ ಪ್ರತಿಭಟನೆ. ಮಸ್ತಪ್ಪ ನಾಯಕ್ ಸಹಸ್ರಾರು ಜನರನ್ನು ಒಟ್ಟುಗೂಡಿಸಿ ಪ್ರತಿಭಟನೆ ನಡೆಸಿದರು.",
      source: "ಸ್ಥಳೀಯ ಮಾಧ್ಯಮ",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29"
    },
    {
      date: "20 ಡಿಸೆಂಬರ್ 2024",
      title: "ನದಿಯ ಉಳಿವಿಗಾಗಿ ಪದಯಾತ್ರೆ - ಪೊಲೀಸ್ ಪೀಡನೆ ಎದುರಿಸಿಯೂ ಮುಂದುವರಿಕೆ",
      summary: "ಪೊಲೀಸ್ ನಿರ್ಬಂಧಗಳ ನಡುವೆಯೂ, ಮಸ್ತಪ್ಪ ನಾಯಕ್ ಮತ್ತು ಇತರ ನಾಯಕರು ತಮ್ಮ ಹೋರಾಟವನ್ನು ಮುಂದುವರಿಸಿದರು. ಗ್ರಾಮಗಳ ಮೂಲಕ ಪದಯಾತ್ರೆ ನಡೆಸಿದರು.",
      source: "ಕನ್ನಡ ಪ್ರಭ",
      image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d"
    },
    {
      date: "10 ಸೆಪ್ಟೆಂಬರ್ 2024",
      title: "ಭಗವದ್ಗೀತೆ ವಿತರಣೆ - ಶಿಕ್ಷಣ ಪ್ರೇಮಿ ಎಂಬ ಮೆಚ್ಚುಗೆ",
      summary: "ಗೊರೇಟೆ ಗ್ರಾಮದಲ್ಲಿ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಭಗವದ್ಗೀತೆ ವಿತರಣೆ. ಮೌಲ್ಯ ಶಿಕ್ಷಣದ ಮಹತ್ವವನ್ನು ಎತ್ತಿ ಹಿಡಿದರು.",
      source: "ವಿಜಯ ಕರ್ನಾಟಕ",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
    },
    {
      date: "25 ಜುಲೈ 2024",
      title: "ಬಡ ಕುಟುಂಬಕ್ಕೆ ಸಹಾಯ - ಪುನೀತ್ ರಾಜಕುಮಾರ್ ಅವರ ಸ್ಫೂರ್ತಿ",
      summary: "ಮೂಡ್ಕಣಿ ಗ್ರಾಮದ ಕ್ರಿಷ್ಣ ನಾಯಕ್ ಕುಟುಂಬಕ್ಕೆ ಗ್ಯಾಸ್ ಒಲೆ ಮತ್ತು ಸಿಲಿಂಡರ್ ದಾನ. ಪುನೀತ್ ರಾಜಕುಮಾರ್ ಅವರ ಸಾಮಾಜಿಕ ಕಾರ್ಯವೇ ಪ್ರೇರಣೆ ಎಂದು ಹೇಳಿದರು.",
      source: "ಉದಯವಾಣಿ",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c"
    },
    {
      date: "5 ನವೆಂಬರ್ 2023",
      title: "ರಕ್ತದಿಂದ ಬರೆದ ಪತ್ರ - 25,000 ಪೋಸ್ಟ್‌ಕಾರ್ಡ್ ಅಭಿಯಾನ",
      summary: "ಮುಖ್ಯಮಂತ್ರಿಗಳಿಗೆ ತಮ್ಮ ರಕ್ತದಿಂದ ಪತ್ರ ಬರೆದು ಐತಿಹಾಸಿಕ ಅಭಿಯಾನ ಪ್ರಾರಂಭ. ಬಹು-ವಿಶೇಷ ಆಸ್ಪತ್ರೆ ಮತ್ತು ಪರಿಸರ ರಕ್ಷಣೆಗಾಗಿ ಬೇಡಿಕೆ.",
      source: "ಪ್ರಜಾವಾಣಿ",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c"
    },
    {
      date: "20 ಮೇ 2023",
      title: "'ಮರಣದ ಸವಾರಿ' - ಆಸ್ಪತ್ರೆ ಕೊರತೆಯ ವಿರುದ್ಧ ಧ್ವನಿ",
      summary: "ವೈದ್ಯಕೀಯ ತುರ್ತು ಸೌಕರ್ಯಗಳ ಕೊರತೆಯಿಂದ ಜೀವ ಕಳೆದುಕೊಳ್ಳುತ್ತಿರುವ ಜನರ ಸಮಸ್ಯೆಯನ್ನು ಎತ್ತಿ ಹಿಡಿದರು. ಸರ್ಕಾರದ ದುರ್ಬಲತೆಯನ್ನು ಟೀಕಿಸಿದರು.",
      source: "ದಿ ಹಿಂದೂ",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d"
    },
    {
      date: "15 ಮಾರ್ಚ್ 2022",
      title: "ಕ್ರೀಡಾ ಪ್ರೋತ್ಸಾಹ - ವಾಲಿಬಾಲ್ ಪಂದ್ಯಾವಳಿ ಉದ್ಘಾಟನೆ",
      summary: "ಮುರ್ದೇಶ್ವರದಲ್ಲಿ ಯುವಕರಿಗಾಗಿ ವಾಲಿಬಾಲ್ ಪಂದ್ಯಾವಳಿಯನ್ನು ಉದ್ಘಾಟಿಸಿದರು. ಕ್ರೀಡೆಯಲ್ಲಿ ಯುವಕರ ತೊಡಗಿಸಿಕೊಳ್ಳುವಿಕೆಯ ಮಹತ್ವವನ್ನು ಒತ್ತಿ ಹೇಳಿದರು.",
      source: "ಸ್ಥಳೀಯ ಮಾಧ್ಯಮ",
      image: "https://images.unsplash.com/photo-1529651737248-dad5e287768e"
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">ಸುದ್ದಿ ಮತ್ತು ಮಾಧ್ಯಮ</h1>
          <p className="text-xl text-gray-600">
            ಮಾಧ್ಯಮಗಳಲ್ಲಿ ನಮ್ಮ ಕಾರ್ಯಗಳ ಪ್ರತಿಬಿಂಬ
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 gap-8">
          {newsItems.map((news, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Image */}
                <div className="md:col-span-1">
                  <div className="h-64 md:h-full">
                    <ImageWithFallback
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-2 p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      {news.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Newspaper className="w-4 h-4" />
                      {news.source}
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{news.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{news.summary}</p>
                  <button className="flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium">
                    ಸಂಪೂರ್ಣ ಸುದ್ದಿ ಓದಿ
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Media Coverage Stats */}
        <div className="mt-16 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">ಮಾಧ್ಯಮ ಪ್ರಸಾರ</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">150+</div>
              <div className="text-sm text-gray-600">ಪತ್ರಿಕೆ ಲೇಖನಗಳು</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-sm text-gray-600">ಟಿವಿ ಸಂದರ್ಶನಗಳು</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">100+</div>
              <div className="text-sm text-gray-600">ಸುದ್ದಿ ವರದಿಗಳು</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">25+</div>
              <div className="text-sm text-gray-600">ದಾಖಲಿತ ಚಿತ್ರಗಳು</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

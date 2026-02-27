import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("ಎಲ್ಲಾ");

  const categories = ["ಎಲ್ಲಾ", "ಸಮುದಾಯ ಸೇವೆ", "ಪರಿಸರ", "ಶಿಕ್ಷಣ", "ಕ್ರೀಡೆ", "ಕಾರ್ಯಕ್ರಮಗಳು", "ಪ್ರಶಸ್ತಿಗಳು"];

  const galleryItems = [
    {
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c",
      title: "ಭಗವದ್ಗೀತೆ ವಿತರಣೆ ಕಾರ್ಯಕ್ರಮ",
      category: "ಶಿಕ್ಷಣ",
      date: "ಸೆಪ್ಟೆಂಬರ್ 2024"
    },
    {
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
      title: "ನದಿಯ ಉಳಿವಿಗಾಗಿ ಪದಯಾತ್ರೆ",
      category: "ಪರಿಸರ",
      date: "ಡಿಸೆಂಬರ್ 2024"
    },
    {
      image: "https://images.unsplash.com/photo-1529651737248-dad5e287768e",
      title: "ವಾಲಿಬಾಲ್ ಪಂದ್ಯಾವಳಿ ಉದ್ಘಾಟನೆ",
      category: "ಕ್ರೀಡೆ",
      date: "ಜೂನ್ 2025"
    },
    {
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a",
      title: "ಸಮುದಾಯ ಸೇವಾ ಕಾರ್ಯಕ್ರಮ",
      category: "ಸಮುದಾಯ ಸೇವೆ",
      date: "ಜುಲೈ 2024"
    },
    {
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
      title: "ಕೈಗಾರಿಕಾ ಐಕಾನ್ ಪ್ರಶಸ್ತಿ",
      category: "ಪ್ರಶಸ್ತಿಗಳು",
      date: "ಫೆಬ್ರವರಿ 2026"
    },
    {
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846",
      title: "ಯುವ ಸಂವಾದ ಸಭೆ",
      category: "ಕಾರ್ಯಕ್ರಮಗಳು",
      date: "ಮಾರ್ಚ್ 2025"
    },
    {
      image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d",
      title: "ಪರಿಸರ ಜಾಗೃತಿ ಅಭಿಯಾನ",
      category: "ಪರಿಸರ",
      date: "ಸೆಪ್ಟೆಂಬರ್ 2025"
    },
    {
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
      title: "ವಿದ್ಯಾರ್ಥಿಗಳೊಂದಿಗೆ ಸಂವಾದ",
      category: "ಶಿಕ್ಷಣ",
      date: "ಏಪ್ರಿಲ್ 2024"
    },
    {
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d",
      title: "ಆರೋಗ್ಯ ಶಿಬಿರ",
      category: "ಸಮುದಾಯ ಸೇವೆ",
      date: "ಮೇ 2023"
    },
    {
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c",
      title: "ಪೋಸ್ಟ್‌ಕಾರ್ಡ್ ಅಭಿಯಾನ",
      category: "ಕಾರ್ಯಕ್ರಮಗಳು",
      date: "ನವೆಂಬರ್ 2023"
    },
    {
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
      title: "ಸಮುದಾಯ ಸಭೆ",
      category: "ಕಾರ್ಯಕ್ರಮಗಳು",
      date: "ಜನವರಿ 2024"
    },
    {
      image: "https://images.unsplash.com/photo-1542178243-bc20204b769f",
      title: "ಸಾರ್ವಜನಿಕ ಭಾಷಣ",
      category: "ಕಾರ್ಯಕ್ರಮಗಳು",
      date: "ಫೆಬ್ರವರಿ 2025"
    }
  ];

  const filteredItems = selectedCategory === "ಎಲ್ಲಾ" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">ಗ್ಯಾಲರಿ</h1>
          <p className="text-xl text-gray-600">
            ನಮ್ಮ ಸಮುದಾಯ ಸೇವಾ ಪ್ರಯಾಣದ ಚಿತ್ರಗಳು
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-orange-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all cursor-pointer"
            >
              <div className="aspect-[4/3]">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <div className="flex justify-between items-center text-sm">
                    <span className="bg-orange-600 px-3 py-1 rounded-full text-xs font-medium">
                      {item.category}
                    </span>
                    <span className="text-gray-200">{item.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">ಚಿತ್ರಗಳ ಸಂಖ್ಯೆ</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
              <div className="text-sm text-gray-600">ಒಟ್ಟು ಚಿತ್ರಗಳು</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">100+</div>
              <div className="text-sm text-gray-600">ಕಾರ್ಯಕ್ರಮಗಳು</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-sm text-gray-600">ವೀಡಿಯೋಗಳು</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">20+</div>
              <div className="text-sm text-gray-600">ದಾಖಲಿತ ಚಿತ್ರಗಳು</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

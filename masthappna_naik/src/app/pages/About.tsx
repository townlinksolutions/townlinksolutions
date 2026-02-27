import { User, Briefcase, Heart, Award } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function About() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">ಪರಿಚಯ</h1>
          <p className="text-xl text-gray-600">ಮಸ್ತಪ್ಪ ನಾಯಕ್ ಬಲಸೆ - ಒಬ್ಬ ಸಮರ್ಪಿತ ನಾಯಕ</p>
        </div>

        {/* Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
                alt="Mastappa Naik Balase"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">ಮಸ್ತಪ್ಪ ನಾಯಕ್ ಬಲಸೆ</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                ಮುರ್ದೇಶ್ವರ, ಕರ್ನಾಟಕದಲ್ಲಿ ಜನಿಸಿದ ಮಸ್ತಪ್ಪ ನಾಯಕ್ ಬಲಸೆ ಉತ್ತರ ಕನ್ನಡ ಜಿಲ್ಲೆಯ ಅತ್ಯಂತ 
                ಪ್ರಭಾವಶಾಲಿ ವ್ಯಕ್ತಿಗಳಲ್ಲಿ ಒಬ್ಬರು. ಅವರ ಸಾರ್ವಜನಿಕ ಗುರುತು ಎರಡು ಮುಖ್ಯ ಸ್ತಂಭಗಳ ಮೇಲೆ 
                ನಿರ್ಮಾಣವಾಗಿದೆ: ಸಾಮಾಜಿಕ ಸಕ್ರಿಯತೆ ಮತ್ತು ಉದ್ಯಮಶೀಲತೆ.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                ಸ್ಥಳೀಯ ಮೀನುಗಾರ ಸಮುದಾಯ ಮತ್ತು ಹಿಂದುಳಿದ ವರ್ಗಗಳ ಹಕ್ಕುಗಳಿಗಾಗಿ ಹೋರಾಡುವವರು. 
                ಸ್ಥಳೀಯ ಆಡಳಿತ ಮತ್ತು ಸಮುದಾಯ ಸಂಸ್ಥೆಗಳಲ್ಲಿ ಸಕ್ರಿಯರಾಗಿದ್ದು, ನಮಧಾರಿ ಸಮುದಾಯದ ಧ್ವನಿಯಾಗಿ 
                ಸೇವೆ ಸಲ್ಲಿಸುತ್ತಿದ್ದಾರೆ.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong>ತತ್ವ:</strong> "ಸೇವೆ ಮೇಲೆ ಸ್ವಯಂ" - ಸಮುದಾಯದ ಸೇವೆಯೇ ಅವರ ಮೊದಲ ಆದ್ಯತೆ.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-orange-50 p-4 rounded-lg">
                <div className="text-orange-600 font-bold text-2xl mb-1">20+</div>
                <div className="text-gray-600 text-sm">ವರ್ಷಗಳ ಸೇವೆ</div>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <div className="text-orange-600 font-bold text-2xl mb-1">1000+</div>
                <div className="text-gray-600 text-sm">ಸಹಾಯ ಪಡೆದ ಕುಟುಂಬಗಳು</div>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <div className="text-orange-600 font-bold text-2xl mb-1">50+</div>
                <div className="text-gray-600 text-sm">ಸಮುದಾಯ ಯೋಜನೆಗಳು</div>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <div className="text-orange-600 font-bold text-2xl mb-1">15+</div>
                <div className="text-gray-600 text-sm">ಪ್ರಶಸ್ತಿಗಳು</div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Aspects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Social Activism */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">ಸಾಮಾಜಿಕ ಸಕ್ರಿಯತೆ ಮತ್ತು ಸಮುದಾಯ ನಾಯಕತ್ವ</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-1">•</span>
                <span>ಸ್ಥಳೀಯ ಮೀನುಗಾರ ಸಮುದಾಯ ಮತ್ತು ಹಿಂದುಳಿದ ವರ್ಗಗಳ ಪರವಾಗಿ ಹೋರಾಟ</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-1">•</span>
                <span>ಸ್ಥಳೀಯ ಆಡಳಿತ ಮತ್ತು ಸಮುದಾಯ ಸಂಸ್ಥೆಗಳಲ್ಲಿ ಸಕ್ರಿಯ ಭಾಗವಹಿಸುವಿಕೆ</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-1">•</span>
                <span>ಸ್ಥಳೀಯ ದೇವಸ್ಥಾನ ಸಮಿತಿಗಳಲ್ಲಿ ತೊಡಗಿಸಿಕೊಳ್ಳುವಿಕೆ</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-1">•</span>
                <span>ಗ್ರಾಮೀಣ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಶೈಕ್ಷಣಿಕ ಬೆಂಬಲ</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-1">•</span>
                <span>ಸಮುದಾಯ ಆರೋಗ್ಯ ಮತ್ತು ಕ್ರೀಡಾ ಕಾರ್ಯಕ್ರಮಗಳ ಆಯೋಜನೆ</span>
              </li>
            </ul>
          </div>

          {/* Business */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
              <Briefcase className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">ವ್ಯಾಪಾರ ಆಸಕ್ತಿಗಳು</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-1">•</span>
                <span>ಆತಿಥ್ಯ ಮತ್ತು ರಿಯಲ್ ಎಸ್ಟೇಟ್ ಕ್ಷೇತ್ರದಲ್ಲಿ ಪ್ರಮುಖ ಆಸಕ್ತಿಗಳು</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-1">•</span>
                <span>Youngoneinda ಕಂಪನಿಯ ಮಾಲೀಕರು (ಚೆನ್ನೈ ಮೂಲದ)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-1">•</span>
                <span>ಮುರ್ದೇಶ್ವರದ ಪ್ರವಾಸೋದ್ಯಮ ಮೂಲಸೌಕರ್ಯಕ್ಕೆ ಗಮನಾರ್ಹ ಕೊಡುಗೆ</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-1">•</span>
                <span>ಸ್ಥಳೀಯ ಆರ್ಥಿಕತೆ ಮತ್ತು ಉದ್ಯೋಗ ಸೃಷ್ಟಿಗೆ ಪ್ರಮುಖ ಕೊಡುಗೆ</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-1">•</span>
                <span>ಕರಾವಳಿ ಪಟ್ಟಿಯ ಅಭಿವೃದ್ಧಿಗೆ ಬದ್ಧತೆ</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Early Life & Journey */}
        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">ಆರಂಭಿಕ ಜೀವನ ಮತ್ತು ಪ್ರಯಾಣ</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              ಮುರ್ದೇಶ್ವರದಲ್ಲಿ ಜನಿಸಿದ ಮಸ್ತಪ್ಪ ನಾಯಕ್ ಬಲಸೆ ತಮ್ಮ ಜೀವನದ ಆರಂಭಿಕ ದಿನಗಳಿಂದಲೇ 
              ಸಮುದಾಯದ ಸೇವೆಯಲ್ಲಿ ಆಸಕ್ತಿ ತೋರಿಸಿದ್ದರು. ಸ್ಥಳೀಯ ಸಮುದಾಯದ ಸಮಸ್ಯೆಗಳನ್ನು ನೇರವಾಗಿ 
              ಅನುಭವಿಸಿದವರು, ಆ ಅನುಭವಗಳೇ ಅವರನ್ನು ಸಾಮಾಜಿಕ ಸಕ್ರಿಯತೆಯತ್ತ ತಳ್ಳಿದವು.
            </p>
            <p>
              ವರ್ಷಗಳ ಕಾಲ ಮೀನುಗಾರ ಸಮುದಾಯ ಮತ್ತು ಹಿಂದುಳಿದ ವರ್ಗಗಳ ಜೊತೆಗೆ ಕೆಲಸ ಮಾಡುತ್ತಾ, 
              ಅವರ ಸಮಸ್ಯೆಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಂಡು ಪರಿಹಾರಕ್ಕಾಗಿ ಹೋರಾಡಿದರು. ಅವರ ನಾಯಕತ್ವ ಮತ್ತು 
              ಸಮರ್ಪಣೆಯು ಅವರನ್ನು ಜಿಲ್ಲೆಯಲ್ಲಿ ಗೌರವಾನ್ವಿತ ವ್ಯಕ್ತಿಯನ್ನಾಗಿ ಮಾಡಿತು.
            </p>
            <p>
              ಸಾಮಾಜಿಕ ಕೆಲಸದ ಜೊತೆಗೆ, ಅವರು ಉದ್ಯಮಶೀಲತೆಯಲ್ಲೂ ತೊಡಗಿದರು. ಅವರ ವ್ಯಾಪಾರ ಉದ್ಯಮಗಳು 
              ಕೇವಲ ಲಾಭ ಗಳಿಸುವುದಕ್ಕಾಗಿ ಅಲ್ಲ, ಬದಲಿಗೆ ಸ್ಥಳೀಯ ಸಮುದಾಯಕ್ಕೆ ಉದ್ಯೋಗ ಮತ್ತು ಅವಕಾಶಗಳನ್ನು 
              ಒದಗಿಸುವ ಉದ್ದೇಶದೊಂದಿಗೆ ನಿರ್ಮಾಣವಾಗಿವೆ.
            </p>
          </div>
        </div>

        {/* Inspiration */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Award className="w-8 h-8 text-orange-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">ಪ್ರೇರಣೆ</h2>
              <p className="text-gray-700 leading-relaxed">
                ದಿವಂಗತ ನಟ ಪುನೀತ್ ರಾಜಕುಮಾರ್ ಅವರ ಸಾಮಾಜಿಕ ಕಾರ್ಯವೇ ಮಸ್ತಪ್ಪ ನಾಯಕ್ ಅವರಿಗೆ 
                ಪ್ರಾಥಮಿಕ ಪ್ರೇರಣೆ ಮತ್ತು ಸಮುದಾಯ ಸೇವೆಯನ್ನು ಮುಂದುವರಿಸಲು ಧೈರ್ಯವನ್ನು ನೀಡುತ್ತದೆ ಎಂದು 
                ಅವರು ಸ್ಪಷ್ಟವಾಗಿ ಹೇಳುತ್ತಾರೆ. ಪುನೀತ್ ರಾಜಕುಮಾರ್ ಅವರಂತೆ, ಮಸ್ತಪ್ಪ ನಾಯಕ್ ಕೂಡ ನಿಜವಾದ 
                ಸೇವೆಯು ಮೌನವಾಗಿ, ನೆಲಮಟ್ಟದಲ್ಲಿ ಮಾಡಬೇಕಾದ ಕೆಲಸ ಎಂದು ನಂಬುತ್ತಾರೆ.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Target, Heart, Leaf, GraduationCap, Hospital, Building2 } from "lucide-react";

export function Vision() {
  const priorities = [
    {
      icon: Hospital,
      title: "ಆರೋಗ್ಯ ಸೇವೆ ಮೂಲಸೌಕರ್ಯ",
      description: "ಉತ್ತರ ಕನ್ನಡ ಜಿಲ್ಲೆಗೆ ಬಹು-ವಿಶೇಷ ಆಸ್ಪತ್ರೆ ಸ್ಥಾಪನೆ",
      details: [
        "ಜಿಲ್ಲೆಯಲ್ಲಿ ಆಧುನಿಕ ಬಹು-ವಿಶೇಷ ಆಸ್ಪತ್ರೆ ನಿರ್ಮಾಣ",
        "ಆಕಸ್ಮಿಕ ವೈದ್ಯಕೀಯ ಸೌಕರ್ಯಗಳ ಸುಧಾರಣೆ",
        "'ಮರಣದ ಸವಾರಿ' ಅಂತ್ಯಗೊಳಿಸುವುದು",
        "ಗ್ರಾಮೀಣ ಪ್ರದೇಶಗಳಲ್ಲಿ ಪ್ರಾಥಮಿಕ ಆರೋಗ್ಯ ಕೇಂದ್ರಗಳ ಬಲಪಡಿಸುವಿಕೆ"
      ]
    },
    {
      icon: Leaf,
      title: "ಪರಿಸರ ಸಂರಕ್ಷಣೆ",
      description: "ನದಿಗಳು ಮತ್ತು ಪರಿಸರ ರಕ್ಷಣೆಗಾಗಿ ಹೋರಾಟ",
      details: [
        "ಶರವತಿ ಪಂಪ್ಡ್ ಸ್ಟೋರೇಜ್ ಯೋಜನೆ ಸಂಪೂರ್ಣ ರದ್ದತಿ",
        "16,000+ ಮರಗಳ ಸಂರಕ್ಷಣೆ",
        "ನದಿಗಳ ಮಾಲಿನ್ಯ ತಡೆಗಟ್ಟುವಿಕೆ",
        "ಅಪರೂಪದ ಜಾತಿಗಳ ಆವಾಸಸ್ಥಾನ ರಕ್ಷಣೆ",
        "1000 ವರ್ಷಗಳ ಐತಿಹಾಸಿಕ ಸ್ಮಾರಕಗಳ ಸಂರಕ್ಷಣೆ"
      ]
    },
    {
      icon: GraduationCap,
      title: "ಶಿಕ್ಷಣ ಮತ್ತು ಮೌಲ್ಯಗಳು",
      description: "ಗ್ರಾಮೀಣ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಗುಣಮಟ್ಟದ ಶಿಕ್ಷಣ",
      details: [
        "ಗ್ರಾಮೀಣ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಶೈಕ್ಷಣಿಕ ಬೆಂಬಲ",
        "ಸಂಸ್ಕಾರ ಮತ್ತು ಮೌಲ್ಯ ಶಿಕ್ಷಣ",
        "ಭಗವದ್ಗೀತೆ ಮತ್ತು ನೈತಿಕ ಪುಸ್ತಕಗಳ ವಿತರಣೆ",
        "ಶಿಸ್ತು, ಕರ್ತವ್ಯ ಮತ್ತು ಮಾನವೀಯತೆಯ ಅಭಿವೃದ್ಧಿ"
      ]
    },
    {
      icon: Heart,
      title: "ಸಾಮಾಜಿಕ ಕಲ್ಯಾಣ",
      description: "ಬಡ ಕುಟುಂಬಗಳಿಗೆ ನೇರ ಸಹಾಯ",
      details: [
        "ಅಗತ್ಯ ಕುಟುಂಬಗಳಿಗೆ ಮೂಲಭೂತ ಸೌಕರ್ಯಗಳು",
        "ಆಹಾರ ಮತ್ತು ಅಡಿಗೆ ಸಾಮಗ್ರಿಗಳ ಒದಗಿಸುವಿಕೆ",
        "ವೈದ್ಯಕೀಯ ತುರ್ತು ಸಂದರ್ಭಗಳಲ್ಲಿ ಸಹಾಯ",
        "ಗ್ರಾಮೀಣ ನೆಟ್‌ವರ್ಕ್ ಮೂಲಕ ಅಗತ್ಯ ಗುರುತಿಸುವಿಕೆ"
      ]
    },
    {
      icon: Building2,
      title: "ಮೂಲಸೌಕರ್ಯ ಅಭಿವೃದ್ಧಿ",
      description: "ಗ್ರಾಮೀಣ ಮತ್ತು ನಗರ ಮೂಲಸೌಕರ್ಯ",
      details: [
        "ಗ್ರಾಮೀಣ ಪ್ರದೇಶಗಳಲ್ಲಿ ಮೂಲಭೂತ ಸೌಕರ್ಯಗಳು",
        "ರಸ್ತೆ ಮತ್ತು ಸಂಪರ್ಕ ಸುಧಾರಣೆ",
        "ಕುಡಿಯುವ ನೀರಿನ ಸೌಕರ್ಯ",
        "ಸ್ಥಳೀಯ ಉದ್ಯೋಗ ಸೃಷ್ಟಿ"
      ]
    },
    {
      icon: Target,
      title: "ರಾಜಕೀಯ ಸುಧಾರಣೆ",
      description: "ಪ್ರಾಮಾಣಿಕ ಮತ್ತು ಸೇವಾ-ಆಧಾರಿತ ರಾಜಕೀಯ",
      details: [
        "ವರ್ಷವಿಡೀ ಜನರ ಜೊತೆ ತೊಡಗಿಸಿಕೊಳ್ಳುವಿಕೆ",
        "ಚುನಾವಣಾ ಪೂರ್ವ ಖಾಲಿ ಭರವಸೆಗಳಿಗೆ ವಿರೋಧ",
        "ನೆಲಮಟ್ಟದಲ್ಲಿ ನಿಜವಾದ ಸಮಸ್ಯೆಗಳ ಪರಿಹಾರ",
        "ಜವಾಬ್ದಾರಿಯುತ ನಾಯಕತ್ವ"
      ]
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">ನಮ್ಮ ದೃಷ್ಟಿಕೋನ</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ಉತ್ತರ ಕನ್ನಡ ಜಿಲ್ಲೆಯ ಸಮಗ್ರ ಅಭಿವೃದ್ಧಿಗಾಗಿ ಸಮರ್ಪಿತವಾದ ದೃಷ್ಟಿಕೋನ. 
            ಜನರ ನಿಜವಾದ ಸಮಸ್ಯೆಗಳಿಗೆ ನಿಜವಾದ ಪರಿಹಾರಗಳು.
          </p>
        </div>

        {/* Vision Statement */}
        <div className="bg-gradient-to-br from-orange-600 to-red-700 text-white rounded-2xl p-8 md:p-12 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">ನಮ್ಮ ಪ್ರತಿಜ್ಞೆ</h2>
            <p className="text-xl leading-relaxed mb-6">
              "ಸೇವೆ ಮೇಲೆ ಸ್ವಯಂ - ಜನರ ಹಿತಾಸಕ್ತಿಗಳು ಯಾವಾಗಲೂ ನಮ್ಮ ಮೊದಲ ಆದ್ಯತೆ. 
              ನಾವು ಖಾಲಿ ಭರವಸೆಗಳಲ್ಲ, ನೆಲಮಟ್ಟದ ಕೆಲಸದಲ್ಲಿ ನಂಬುತ್ತೇವೆ. 
              ಚುನಾವಣೆಯ ಸಮಯದಲ್ಲಿ ಮಾತ್ರವಲ್ಲ, ವರ್ಷವಿಡೀ ಜನರ ಜೊತೆಗಿರುವುದು ನಮ್ಮ ಧ್ಯೇಯ."
            </p>
            <p className="text-lg text-orange-100">
              - ಮಸ್ತಪ್ಪ ನಾಯಕ್ ಬಲಸೆ
            </p>
          </div>
        </div>

        {/* Priority Areas */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">ಪ್ರಮುಖ ಆದ್ಯತೆಗಳು</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {priorities.map((priority, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <priority.icon className="w-8 h-8 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{priority.title}</h3>
                    <p className="text-gray-600">{priority.description}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {priority.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <span className="text-orange-600 mt-1 flex-shrink-0">✓</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Major Campaigns */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">ಪ್ರಮುಖ ಅಭಿಯಾನಗಳು</h2>
          
          {/* Postcard Campaign */}
          <div className="bg-white rounded-xl p-8 mb-6 shadow-md">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">ರಕ್ತದಿಂದ ಬರೆದ ಪೋಸ್ಟ್‌ಕಾರ್ಡ್ ಅಭಿಯಾನ</h3>
                <p className="text-gray-600 mb-4">
                  ಮುಖ್ಯಮಂತ್ರಿಗಳಿಗೆ ತಮ್ಮ ಸ್ವಂತ ರಕ್ತದಿಂದ ಪತ್ರ ಬರೆದು, 25,000 ಪೋಸ್ಟ್‌ಕಾರ್ಡ್‌ಗಳನ್ನು 
                  ವಿತರಿಸಿ 7 ಲಕ್ಷ ಜನರನ್ನು ತಲುಪುವ ಗುರಿಯೊಂದಿಗೆ ಪ್ರಾರಂಭಿಸಿದ ಐತಿಹಾಸಿಕ ಅಭಿಯಾನ.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="font-bold text-orange-600 mb-1">ಬೇಡಿಕೆ 1:</div>
                    <div className="text-gray-700">ಬಹು-ವಿಶೇಷ ಆಸ್ಪತ್ರೆ ಸ್ಥಾಪನೆ</div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="font-bold text-orange-600 mb-1">ಬೇಡಿಕೆ 2:</div>
                    <div className="text-gray-700">ಶರವತಿ ಯೋಜನೆ ರದ್ದತಿ</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* River Protection */}
          <div className="bg-white rounded-xl p-8 shadow-md">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">"ನದಿಯ ಉಳಿವಿಗಾಗಿ" ಪದಯಾತ್ರೆ</h3>
                <p className="text-gray-600 mb-4">
                  ಪೊಲೀಸ್ ಪೀಡನೆ ಎದುರಿಸಿಯೂ ಹಿಂದೆ ಸರಿಯದೆ, ಗ್ರಾಮಗಳ ಮೂಲಕ ನಡೆದು ಪರಿಸರ ಹಾನಿಕಾರಕ 
                  ಯೋಜನೆಗಳ ವಿರುದ್ಧ ಜಾಗೃತಿ ಮೂಡಿಸಿದ ಐತಿಹಾಸಿಕ ಪದಯಾತ್ರೆ. ಆಧ್ಯಾತ್ಮಿಕ ನಾಯಕರು ಮತ್ತು 
                  ಸಮುದಾಯದ ವ್ಯಾಪಕ ಬೆಂಬಲ ಪಡೆದ ಚಳುವಳಿ.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Future Vision */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">ಭವಿಷ್ಯದ ದೃಷ್ಟಿಕೋನ</h2>
          <div className="max-w-4xl mx-auto space-y-4 text-gray-700 leading-relaxed">
            <p>
              ಉತ್ತರ ಕನ್ನಡ ಜಿಲ್ಲೆಯ ಸಮಗ್ರ ಅಭಿವೃದ್ಧಿಯೇ ನಮ್ಮ ಗುರಿ. ಆರೋಗ್ಯ, ಶಿಕ್ಷಣ, ಪರಿಸರ ಮತ್ತು 
              ಮೂಲಸೌಕರ್ಯ - ಎಲ್ಲಾ ಕ್ಷೇತ್ರಗಳಲ್ಲಿ ಸಮತೋಲಿತ ಅಭಿವೃದ್ಧಿಯನ್ನು ಖಚಿತಪಡಿಸುವುದು.
            </p>
            <p>
              ನಾವು ಅಭಿವೃದ್ಧಿಯನ್ನು ವಿರೋಧಿಸುವವರಲ್ಲ, ಆದರೆ ಪರಿಸರ ಮತ್ತು ಜನರ ಹಿತಾಸಕ್ತಿಗಳಿಗೆ ಹಾನಿಯಾಗದ 
              ಸುಸ್ಥಿರ ಅಭಿವೃದ್ಧಿಯನ್ನು ಬೆಂಬಲಿಸುವವರು. ಬ್ಯಾಟರಿ ಎನರ್ಜಿ ಸ್ಟೋರೇಜ್ ಸಿಸ್ಟಮ್‌ಗಳಂತಹ 
              ಪರ್ಯಾಯ ಪರಿಹಾರಗಳನ್ನು ಪ್ರೋತ್ಸಾಹಿಸುತ್ತೇವೆ.
            </p>
            <p>
              ರಾಜಕೀಯವು ವ್ಯಾಪಾರವಾಗಿ ಮಾರ್ಪಟ್ಟಿರುವ ಈ ಕಾಲದಲ್ಲಿ, ನಾವು ನಿಜವಾದ ಸೇವಾಭಾವದ ರಾಜಕೀಯವನ್ನು 
              ಪುನಃಸ್ಥಾಪಿಸಲು ಬದ್ಧರಾಗಿದ್ದೇವೆ. MLA ಆಗುವ ಅವಕಾಶ ಸಿಕ್ಕರೆ, ಮೂಲಭೂತ ಮೂಲಸೌಕರ್ಯ ಮತ್ತು 
              ಉದ್ಯೋಗ ಸೃಷ್ಟಿಗೆ ಪ್ರಾಧಾನ್ಯತೆ ನೀಡುತ್ತೇವೆ.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

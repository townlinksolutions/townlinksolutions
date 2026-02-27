import { Calendar, Award, Users, Leaf, Heart, GraduationCap, Megaphone } from "lucide-react";

export function Timeline() {
  const timelineEvents = [
    {
      year: "2026",
      month: "ಫೆಬ್ರವರಿ",
      title: "ಭಾರತದ ಕೈಗಾರಿಕಾ ಐಕಾನ್ ಪ್ರಶಸ್ತಿ - 2026",
      description: "ಭಟ್ಕಳದ ಪ್ರಮುಖ ಉದ್ಯಮಿ ಎಂಬ ಗುರುತಿಸುವಿಕೆಗಾಗಿ ಪ್ರಶಸ್ತಿ ಪಡೆದರು. ಈ ಗೌರವವು ವ್ಯಾಪಾರ ಕ್ಷೇತ್ರದಲ್ಲಿ ಅವರ ಕೊಡುಗೆ ಮತ್ತು ಸ್ಥಳೀಯ ಉದ್ಯೋಗ ಸೃಷ್ಟಿಯ ಮನ್ನಣೆಯಾಗಿದೆ.",
      icon: Award,
      color: "orange"
    },
    {
      year: "2025",
      month: "ಸೆಪ್ಟೆಂಬರ್",
      title: "ಶರವತಿ ಯೋಜನೆ ವಿರೋಧ ತೀವ್ರತೆ",
      description: "ಜಿಲ್ಲಾಧಿಕಾರಿಗಳ ದೂರು ಸಭೆಗೆ ಸಾರ್ವಜನಿಕರನ್ನು ಕರೆಯಿತು. 2,000 MW ಯೋಜನೆಯಿಂದ 16,000+ ಮರಗಳ ನಾಶ, ಅಪರೂಪದ ಜಾತಿಗಳ ಆವಾಸಸ್ಥಾನ ನಾಶ, ಮತ್ತು 18,000 ಟನ್ ಸ್ಫೋಟಕಗಳಿಂದ ನೀರು ಮಾಲಿನ್ಯದ ಬಗ್ಗೆ ತೀವ್ರ ವಿರೋಧ ವ್ಯಕ್ತಪಡಿಸಿದರು.",
      icon: Megaphone,
      color: "red"
    },
    {
      year: "2025",
      month: "ಜೂನ್",
      title: "ಕ್ರೀಡಾ ಪ್ರೋತ್ಸಾಹ - ವಾಲಿಬಾಲ್ ಪಂದ್ಯಾವಳಿ",
      description: "ಮುರ್ದೇಶ್ವರ/ಹೊನ್ನಾವರದಲ್ಲಿ ವಾಲಿಬಾಲ್ ಪಂದ್ಯಾವಳಿಯನ್ನು ಉದ್ಘಾಟಿಸಿ, ಯುವಕರಿಗೆ ಕ್ರೀಡೆಯಲ್ಲಿ ತೊಡಗಿಸಿಕೊಳ್ಳುವ ಅವಕಾಶ ಮಾಡಿಕೊಟ್ಟರು. ಸ್ಥಳೀಯ ಕ್ರೀಡಾಕೂಟಗಳ ನಿಯಮಿತ ಬೆಂಬಲ.",
      icon: Users,
      color: "green"
    },
    {
      year: "2024",
      month: "ಡಿಸೆಂಬರ್",
      title: "ನದಿಯ ಉಳಿವಿಗಾಗಿ ಪದಯಾತ್ರೆ",
      description: "ಪೊಲೀಸ್ ನಿರ್ಬಂಧಗಳ ನಡುವೆಯೂ, ಶರವತಿ ಪಂಪ್ಡ್ ಸ್ಟೋರೇಜ್ ಯೋಜನೆಯ ವಿರೋಧವಾಗಿ ಪ್ರಮುಖ ಪದಯಾತ್ರೆ ನಡೆಸಿದರು. ಭಟ್ಕಳ ಮತ್ತು ಹೊನ್ನಾವರ ಜನರ ಕಾಳಜಿಗಳನ್ನು ಧ್ವನಿಸಿದರು. ಆಧ್ಯಾತ್ಮಿಕ ನಾಯಕರೊಂದಿಗೆ ಸಹಯೋಗ.",
      icon: Leaf,
      color: "green"
    },
    {
      year: "2024",
      month: "ಸೆಪ್ಟೆಂಬರ್",
      title: "ಭಗವದ್ಗೀತೆ ವಿತರಣೆ ಕಾರ್ಯಕ್ರಮ",
      description: "ಗೊರೇಟೆ ಗ್ರಾಮದ ಜ್ಞಾನ ದೇಗುಲದಲ್ಲಿ ಶಾಲಾ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಭಗವದ್ಗೀತೆ ಪ್ರತಿಗಳನ್ನು ವಿತರಿಸಿದರು. ಸಂಸ್ಕಾರ, ಮೌಲ್ಯಗಳು, ನೈತಿಕತೆ ಮತ್ತು ಆತ್ಮವಿಶ್ವಾಸವನ್ನು ಮಕ್ಕಳಲ್ಲಿ ಬೆಳೆಸುವ ಉದ್ದೇಶದೊಂದಿಗೆ.",
      icon: GraduationCap,
      color: "blue"
    },
    {
      year: "2024",
      month: "ಜುಲೈ",
      title: "ಮೂಡ್ಕಣಿ ಕುಟುಂಬಕ್ಕೆ ಸಹಾಯ",
      description: "ಆಟೋ ಚಾಲಕರಿಂದ ಕೇಳಿ, ಹೊನ್ನಾವರದ ಮೂಡ್ಕಣಿಯಲ್ಲಿ ಬಡತನದಲ್ಲಿರುವ ಕ್ರಿಷ್ಣ ನಾಯಕ್ ಕುಟುಂಬಕ್ಕೆ ಗ್ಯಾಸ್ ಒಲೆ ಮತ್ತು ಎರಡು ಸಿಲಿಂಡರ್‌ಗಳನ್ನು ದಾನ ಮಾಡಿದರು. ಪುನೀತ್ ರಾಜಕುಮಾರ್ ಅವರ ಸಾಮಾಜಿಕ ಕಾರ್ಯದಿಂದ ಪ್ರೇರಿತರಾಗಿದ್ದಾರೆ ಎಂದು ತಿಳಿಸಿದರು.",
      icon: Heart,
      color: "red"
    },
    {
      year: "2023",
      month: "ನವೆಂಬರ್",
      title: "ರಕ್ತದಿಂದ ಬರೆದ ಪತ್ರ - ಪೋಸ್ಟ್‌ಕಾರ್ಡ್ ಅಭಿಯಾನ",
      description: "ಉತ್ತರ ಕನ್ನಡ ಜಿಲ್ಲೆಗೆ ಬಹು-ವಿಶೇಷ ಆಸ್ಪತ್ರೆ ಮತ್ತು ಶರವತಿ ಯೋಜನೆ ರದ್ದತಿಗಾಗಿ ಮುಖ್ಯಮಂತ್ರಿಗಳಿಗೆ ತಮ್ಮ ರಕ್ತದಿಂದ ಪತ್ರ ಬರೆದರು. 25,000 ಪೋಸ್ಟ್‌ಕಾರ್ಡ್‌ಗಳನ್ನು ವಿತರಿಸಿ 7 ಲಕ್ಷ ಜನರನ್ನು ತಲುಪುವ ಗುರಿ. ವಿದ್ಯಾರ್ಥಿಗಳು, ಯುವಕರು ಮತ್ತು ಪಂಚಾಯತ್ ಸದಸ್ಯರನ್ನು ತೊಡಗಿಸಿದರು.",
      icon: Megaphone,
      color: "red"
    },
    {
      year: "2023",
      month: "ಮೇ",
      title: "ಜಿಲ್ಲೆಯಲ್ಲಿ ಆಸ್ಪತ್ರೆಗಾಗಿ ಚರ್ಚೆ",
      description: "'ಮರಣದ ಸವಾರಿ' ಸಮಸ್ಯೆಯನ್ನು ಎತ್ತಿ ಹಿಡಿದರು - ಆಕಸ್ಮಿಕ ಮತ್ತು ವೈದ್ಯಕೀಯ ಸೌಕರ್ಯಗಳ ಕೊರತೆಯಿಂದಾಗಿ ಸ್ಥಳೀಯ ನಾಗರಿಕರು ತುರ್ತು ಚಿಕಿತ್ಸೆಗಾಗಿ ದೂರದ ಆಸ್ಪತ್ರೆಗಳಿಗೆ ಹೋಗುವಾಗ ಮರಣ ಹೊಂದುತ್ತಿದ್ದಾರೆ ಎಂದು ಸರ್ಕಾರವನ್ನು ಟೀಕಿಸಿದರು.",
      icon: Heart,
      color: "red"
    },
    {
      year: "2020-2023",
      month: "",
      title: "ಕೋವಿಡ್-19 ಸಹಾಯ ಕಾರ್ಯಗಳು",
      description: "ಸಾಂಕ್ರಾಮಿಕ ಸಮಯದಲ್ಲಿ ಸ್ಥಳೀಯ ಸಮುದಾಯಗಳಿಗೆ ವ್ಯಾಪಕ ಸಹಾಯ ಕಾರ್ಯಗಳು. ಆಹಾರ ವಿತರಣೆ, ವೈದ್ಯಕೀಯ ತುರ್ತು ಸಹಾಯ, ಮತ್ತು ಅಗತ್ಯ ಕುಟುಂಬಗಳಿಗೆ ಆರ್ಥಿಕ ಬೆಂಬಲ.",
      icon: Heart,
      color: "red"
    },
    {
      year: "2018",
      month: "",
      title: "Youngoneinda ವ್ಯಾಪಾರ ವಿಸ್ತರಣೆ",
      description: "ಚೆನ್ನೈ ಮೂಲದ Youngoneinda ಕಂಪನಿಯ ವಿಸ್ತರಣೆ. ಕರಾವಳಿ ಕರ್ನಾಟಕ ಮತ್ತು ತಮಿಳುನಾಡಿನ ನಡುವೆ ವ್ಯಾಪಾರ ಸಂಪರ್ಕ ಬಲಪಡಿಸುವಿಕೆ. ಸ್ಥಳೀಯ ಉದ್ಯೋಗ ಸೃಷ್ಟಿಗೆ ಗಮನ.",
      icon: Award,
      color: "orange"
    },
    {
      year: "2015",
      month: "",
      title: "ಮುರ್ದೇಶ್ವರ ಪ್ರವಾಸೋದ್ಯಮ ಅಭಿವೃದ್ಧಿ",
      description: "ಮುರ್ದೇಶ್ವರದಲ್ಲಿ ಆತಿಥ್ಯ ಮತ್ತು ರಿಯಲ್ ಎಸ್ಟೇಟ್ ಯೋಜನೆಗಳ ಪ್ರಾರಂಭ. ಪ್ರವಾಸಿಗರಿಗೆ ಉತ್ತಮ ಸೌಕರ್ಯಗಳನ್ನು ಒದಗಿಸುವುದು ಮತ್ತು ಸ್ಥಳೀಯ ಆರ್ಥಿಕತೆಗೆ ಕೊಡುಗೆ.",
      icon: Award,
      color: "orange"
    },
    {
      year: "2010",
      month: "",
      title: "ಸಮುದಾಯ ಸೇವೆಯ ಔಪಚಾರಿಕ ಪ್ರಾರಂಭ",
      description: "ಸಂಘಟಿತ ಸಾಮಾಜಿಕ ಕಾರ್ಯದ ಔಪಚಾರಿಕ ಆರಂಭ. ಸ್ಥಳೀಯ ಸಮುದಾಯ ಸಂಸ್ಥೆಗಳಲ್ಲಿ ಸಕ್ರಿಯ ಭಾಗವಹಿಸುವಿಕೆ. ಮೀನುಗಾರ ಸಮುದಾಯ ಮತ್ತು ಹಿಂದುಳಿದ ವರ್ಗಗಳ ಪರವಾಗಿ ಧ್ವನಿ ಎತ್ತುವಿಕೆ.",
      icon: Users,
      color: "blue"
    },
    {
      year: "2005-2010",
      month: "",
      title: "ಆರಂಭಿಕ ವ್ಯಾಪಾರ ಮತ್ತು ಸಮುದಾಯ ತೊಡಗಿಸಿಕೊಳ್ಳುವಿಕೆ",
      description: "ವ್ಯಾಪಾರ ಕ್ಷೇತ್ರದಲ್ಲಿ ಆರಂಭಿಕ ಪ್ರವೇಶ ಮತ್ತು ಸ್ಥಳೀಯ ಸಮುದಾಯ ಕಾರ್ಯಗಳಲ್ಲಿ ಅನೌಪಚಾರಿಕ ಭಾಗವಹಿಸುವಿಕೆ. ಸ್ಥಳೀಯ ದೇವಸ್ಥಾನ ಸಮಿತಿಗಳು ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮಗಳಲ್ಲಿ ತೊಡಗಿಸಿಕೊಳ್ಳುವಿಕೆ.",
      icon: Users,
      color: "blue"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'orange':
        return 'bg-orange-600 border-orange-200';
      case 'red':
        return 'bg-red-600 border-red-200';
      case 'green':
        return 'bg-green-600 border-green-200';
      case 'blue':
        return 'bg-blue-600 border-blue-200';
      default:
        return 'bg-orange-600 border-orange-200';
    }
  };

  return (
    <div className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">ಸಂಪೂರ್ಣ ಟೈಮ್‌ಲೈನ್</h1>
          <p className="text-xl text-gray-600">
            ಮಸ್ತಪ್ಪ ನಾಯಕ್ ಬಲಸೆ ಅವರ ಸೇವಾ ಪ್ರಯಾಣದ ಸಂಪೂರ್ಣ ಇತಿಹಾಸ
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 via-red-500 to-blue-500 transform md:-translate-x-1/2"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex items-start gap-4 mb-4">
                      {index % 2 === 0 ? (
                        <>
                          <div className="flex-1">
                            <div className="text-sm text-gray-500 mb-1">
                              {event.month && `${event.month}, `}{event.year}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{event.description}</p>
                          </div>
                          <div className={`w-12 h-12 ${getColorClasses(event.color).split(' ')[0]} rounded-full flex items-center justify-center text-white flex-shrink-0`}>
                            <event.icon className="w-6 h-6" />
                          </div>
                        </>
                      ) : (
                        <>
                          <div className={`w-12 h-12 ${getColorClasses(event.color).split(' ')[0]} rounded-full flex items-center justify-center text-white flex-shrink-0`}>
                            <event.icon className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm text-gray-500 mb-1">
                              {event.month && `${event.month}, `}{event.year}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{event.description}</p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Center Dot - Hidden on mobile */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                  <div className={`w-6 h-6 ${getColorClasses(event.color).split(' ')[0]} rounded-full border-4 border-white shadow-lg`}></div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">ಪ್ರಯಾಣದ ಸಾರಾಂಶ</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">20+</div>
              <div className="text-sm text-gray-600">ವರ್ಷಗಳ ಸೇವೆ</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-sm text-gray-600">ಸಮುದಾಯ ಯೋಜನೆಗಳು</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">1000+</div>
              <div className="text-sm text-gray-600">ಸಹಾಯ ಪಡೆದ ಕುಟುಂಬಗಳು</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
              <div className="text-sm text-gray-600">ಪ್ರಶಸ್ತಿಗಳು</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

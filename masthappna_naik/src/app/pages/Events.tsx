import { Calendar, MapPin, Users, Clock } from "lucide-react";

export function Events() {
  const upcomingEvents = [
    {
      date: "15 ಮಾರ್ಚ್ 2026",
      time: "10:00 AM",
      title: "ಗ್ರಾಮ ಪಂಚಾಯತ್ ಸಭೆ - ಮೂಲಸೌಕರ್ಯ ಚರ್ಚೆ",
      location: "ಮುರ್ದೇಶ್ವರ ಗ್ರಾಮ ಪಂಚಾಯತ್",
      attendees: "200+",
      description: "ಗ್ರಾಮೀಣ ಮೂಲಸೌಕರ್ಯ ಅಭಿವೃದ್ಧಿ, ರಸ್ತೆ ಸುಧಾರಣೆ ಮತ್ತು ಕುಡಿಯುವ ನೀರಿನ ಸಮಸ್ಯೆಗಳ ಕುರಿತು ಚರ್ಚೆ."
    },
    {
      date: "22 ಮಾರ್ಚ್ 2026",
      time: "3:00 PM",
      title: "ಯುವ ಸಂವಾದ ಕಾರ್ಯಕ್ರಮ",
      location: "ಭಟ್ಕಳ ಕಾಲೇಜು ಆಡಿಟೋರಿಯಂ",
      attendees: "500+",
      description: "ಯುವಕರೊಂದಿಗೆ ಶಿಕ್ಷಣ, ಉದ್ಯೋಗ ಮತ್ತು ಸಮುದಾಯ ಭಾಗವಹಿಸುವಿಕೆಯ ಕುರಿತು ಸಂವಾದ."
    },
    {
      date: "5 ಏಪ್ರಿಲ್ 2026",
      time: "9:00 AM",
      title: "ಪರಿಸರ ಜಾಗೃತಿ ಪದಯಾತ್ರೆ",
      location: "ಹೊನ್ನಾವರ - ಗೆರುಸೊಪ್ಪ",
      attendees: "1000+",
      description: "ನದಿ ಸಂರಕ್ಷಣೆ ಮತ್ತು ಪರಿಸರ ರಕ್ಷಣೆಯ ಕುರಿತು ಸಾರ್ವಜನಿಕ ಜಾಗೃತಿ ಪದಯಾತ್ರೆ."
    },
    {
      date: "18 ಏಪ್ರಿಲ್ 2026",
      time: "11:00 AM",
      title: "ಶೈಕ್ಷಣಿಕ ಸಾಮಗ್ರಿ ವಿತರಣೆ",
      location: "ಗೊರೇಟೆ ಗ್ರಾಮ",
      attendees: "300+",
      description: "ಗ್ರಾಮೀಣ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಶೈಕ್ಷಣಿಕ ಪುಸ್ತಕಗಳು ಮತ್ತು ಸಾಮಗ್ರಿಗಳ ವಿತರಣೆ."
    },
    {
      date: "1 ಮೇ 2026",
      time: "4:00 PM",
      title: "ಕಾರ್ಮಿಕ ದಿನಾಚರಣೆ",
      location: "ಮುರ್ದೇಶ್ವರ ಮೈದಾನ",
      attendees: "800+",
      description: "ಕಾರ್ಮಿಕರ ಹಕ್ಕುಗಳು ಮತ್ತು ಸಮಾಜದಲ್ಲಿ ಅವರ ಮಹತ್ವದ ಕುರಿತು ಕಾರ್ಯಕ್ರಮ."
    }
  ];

  const pastEvents = [
    {
      date: "10 ಫೆಬ್ರವರಿ 2026",
      title: "ಕ್ರೀಡಾ ಪಂದ್ಯಾವಳಿ",
      location: "ಮುರ್ದೇಶ್ವರ",
      attendees: "400+",
      description: "ಯುವಕರಿಗಾಗಿ ವಾಲಿಬಾಲ್ ಮತ್ತು ಕಬಡ್ಡಿ ಪಂದ್ಯಾವಳಿ ಯಶಸ್ವಿಯಾಗಿ ನಡೆಯಿತು."
    },
    {
      date: "25 ಜನವರಿ 2026",
      title: "ಗಣರಾಜ್ಯೋತ್ಸವ ಸಮಾರಂಭ",
      location: "ಭಟ್ಕಳ",
      attendees: "1500+",
      description: "ಗಣರಾಜ್ಯ ದಿನಾಚರಣೆ ಮತ್ತು ಸ್ವಾತಂತ್ರ್ಯ ಹೋರಾಟಗಾರರ ನೆನಪು."
    },
    {
      date: "15 ಡಿಸೆಂಬರ್ 2025",
      title: "ಪರಿಸರ ಪದಯಾತ್ರೆ",
      location: "ಹೊನ್ನಾವರ - ಗೆರುಸೊಪ್ಪ",
      attendees: "2000+",
      description: "ಶರವತಿ ಯೋಜನೆ ವಿರೋಧ ಮತ್ತು ನದಿ ಸಂರಕ್ಷಣೆ ಪದಯಾತ್ರೆ."
    },
    {
      date: "10 ಸೆಪ್ಟೆಂಬರ್ 2025",
      title: "ಭಗವದ್ಗೀತೆ ವಿತರಣೆ",
      location: "ಗೊರೇಟೆ ಗ್ರಾಮ",
      attendees: "350+",
      description: "ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಭಗವದ್ಗೀತೆ ಮತ್ತು ಮೌಲ್ಯ ಶಿಕ್ಷಣ ಕಾರ್ಯಕ್ರಮ."
    },
    {
      date: "15 ಆಗಸ್ಟ್ 2025",
      title: "ಸ್ವಾತಂತ್ರ್ಯ ದಿನಾಚರಣೆ",
      location: "ಮುರ್ದೇಶ್ವರ",
      attendees: "1000+",
      description: "ಸ್ವಾತಂತ್ರ್ಯ ದಿನ ಆಚರಣೆ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮಗಳು."
    },
    {
      date: "20 ಜುಲೈ 2025",
      title: "ಬಡ ಕುಟುಂಬಗಳಿಗೆ ಸಹಾಯ ವಿತರಣೆ",
      location: "ಮೂಡ್ಕಣಿ ಗ್ರಾಮ",
      attendees: "150+",
      description: "ಅಗತ್ಯ ಕುಟುಂಬಗಳಿಗೆ ಮೂಲಭೂತ ಸೌಕರ್ಯಗಳ ವಿತರಣೆ."
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">ಕಾರ್ಯಕ್ರಮಗಳು</h1>
          <p className="text-xl text-gray-600">
            ಮುಂಬರುವ ಮತ್ತು ಹಿಂದಿನ ಸಮುದಾಯ ಕಾರ್ಯಕ್ರಮಗಳು
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">ಮುಂಬರುವ ಕಾರ್ಯಕ್ರಮಗಳು</h2>
          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border-l-4 border-orange-600">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {/* Date & Time */}
                  <div className="md:col-span-1">
                    <div className="bg-orange-50 rounded-lg p-4 text-center">
                      <div className="text-orange-600 font-bold text-2xl mb-1">
                        {event.date.split(' ')[0]}
                      </div>
                      <div className="text-gray-600 font-medium mb-2">
                        {event.date.split(' ').slice(1).join(' ')}
                      </div>
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        {event.time}
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="md:col-span-3">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                    <div className="flex flex-wrap gap-4 mb-3">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="w-4 h-4 text-orange-600" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="w-4 h-4 text-orange-600" />
                        ಅಪೇಕ್ಷಿತ: {event.attendees}
                      </div>
                    </div>
                    <p className="text-gray-600">{event.description}</p>
                    <button className="mt-4 px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                      Register / ನೋಂದಣಿ
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">ಹಿಂದಿನ ಕಾರ್ಯಕ್ರಮಗಳು</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastEvents.map((event, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-500 mb-1">{event.date}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h3>
                  </div>
                </div>
                <div className="flex gap-4 mb-3 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    {event.attendees}
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{event.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-br from-orange-600 to-red-700 text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">ನಮ್ಮ ಕಾರ್ಯಕ್ರಮಗಳಲ್ಲಿ ಭಾಗವಹಿಸಿ</h2>
          <p className="mb-6">
            ಸಮುದಾಯದ ಅಭಿವೃದ್ಧಿಗಾಗಿ ನಮ್ಮ ಜೊತೆ ಸೇರಿ. ನಿಮ್ಮ ಭಾಗವಹಿಸುವಿಕೆ ಬದಲಾವಣೆಯನ್ನು ತರುತ್ತದೆ.
          </p>
          <button className="px-8 py-3 bg-white text-orange-600 rounded-lg font-medium hover:bg-orange-50 transition-colors">
            Contact for Events / ಸಂಪರ್ಕಿಸಿ
          </button>
        </div>
      </div>
    </div>
  );
}

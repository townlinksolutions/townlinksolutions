import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    category: "ಸಾಮಾನ್ಯ"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("ಧನ್ಯವಾದಗಳು! ನಿಮ್ಮ ಸಂದೇಶ ಸ್ವೀಕರಿಸಲಾಗಿದೆ. ನಾವು ಶೀಘ್ರದಲ್ಲೇ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುತ್ತೇವೆ.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      category: "ಸಾಮಾನ್ಯ"
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ</h1>
          <p className="text-xl text-gray-600">
            ನಿಮ್ಮ ಸಮಸ್ಯೆಗಳು, ಸಲಹೆಗಳು ಮತ್ತು ಪ್ರತಿಕ್ರಿಯೆಗಳನ್ನು ನಮ್ಮೊಂದಿಗೆ ಹಂಚಿಕೊಳ್ಳಿ
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Office Address */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">ಕಛೇರಿ ವಿಳಾಸ</h3>
              <p className="text-gray-600">
                ಮುರ್ದೇಶ್ವರ<br />
                ಭಟ್ಕಳ ತಾಲೂಕು<br />
                ಉತ್ತರ ಕನ್ನಡ ಜಿಲ್ಲೆ<br />
                ಕರ್ನಾಟಕ - 581350
              </p>
            </div>

            {/* Contact Details */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">ಸಂಪರ್ಕ ವಿವರಗಳು</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-gray-500">ದೂರವಾಣಿ</div>
                  <a href="tel:+919876543210" className="text-gray-900 hover:text-orange-600">
                    +91 98765 43210
                  </a>
                </div>
                <div>
                  <div className="text-sm text-gray-500">ಇಮೇಲ್</div>
                  <a href="mailto:info@mastappanaik.com" className="text-gray-900 hover:text-orange-600">
                    info@mastappanaik.com
                  </a>
                </div>
                <div>
                  <div className="text-sm text-gray-500">WhatsApp</div>
                  <a href="https://wa.me/919876543210" className="text-gray-900 hover:text-orange-600">
                    +91 98765 43210
                  </a>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">ಕಾರ್ಯಾಲಯ ಸಮಯ</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">ಸೋಮವಾರ - ಶುಕ್ರವಾರ</span>
                  <span className="text-gray-900 font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">ಶನಿವಾರ</span>
                  <span className="text-gray-900 font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">ಭಾನುವಾರ</span>
                  <span className="text-gray-900 font-medium">ಮುಚ್ಚಿದೆ</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-br from-orange-600 to-red-700 text-white rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4">ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮ</h3>
              <div className="space-y-3">
                <a href="#" className="block hover:underline">Facebook</a>
                <a href="#" className="block hover:underline">Twitter</a>
                <a href="#" className="block hover:underline">Instagram</a>
                <a href="#" className="block hover:underline">YouTube</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">ಸಂದೇಶ ಕಳುಹಿಸಿ</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ನಿಮ್ಮ ಹೆಸರು *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                      placeholder="ಹೆಸರು ನಮೂದಿಸಿ"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ಇಮೇಲ್ *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ದೂರವಾಣಿ *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ವಿಷಯ *
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                    >
                      <option>ಸಾಮಾನ್ಯ</option>
                      <option>ಆರೋಗ್ಯ</option>
                      <option>ಶಿಕ್ಷಣ</option>
                      <option>ಪರಿಸರ</option>
                      <option>ಮೂಲಸೌಕರ್ಯ</option>
                      <option>ಸಾಮಾಜಿಕ ಕಲ್ಯಾಣ</option>
                      <option>ಇತರೆ</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ವಿಷಯ ಶೀರ್ಷಿಕೆ *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                    placeholder="ವಿಷಯ ನಮೂದಿಸಿ"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ಸಂದೇಶ *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent resize-none"
                    placeholder="ನಿಮ್ಮ ಸಂದೇಶ ಇಲ್ಲಿ ಬರೆಯಿರಿ..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message / ಕಳುಹಿಸಿ
                </button>
              </form>
            </div>

            {/* Emergency Contact */}
            <div className="mt-6 bg-red-50 border-l-4 border-red-600 rounded-lg p-6">
              <h3 className="text-lg font-bold text-red-900 mb-2">ತುರ್ತು ಸಹಾಯ</h3>
              <p className="text-red-700 mb-3">
                ತುರ್ತು ಸಹಾಯಕ್ಕಾಗಿ ನೇರವಾಗಿ ಕರೆ ಮಾಡಿ:
              </p>
              <a href="tel:+919876543210" className="text-xl font-bold text-red-600 hover:text-red-700">
                +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

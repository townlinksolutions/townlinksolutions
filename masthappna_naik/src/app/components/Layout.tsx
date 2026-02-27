import { Outlet, Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith('/admin');

  const navLinks = [
    { path: "/", label: "ಮುಖಪುಟ" },
    { path: "/about", label: "ಪರಿಚಯ" },
    { path: "/vision", label: "ದೃಷ್ಟಿಕೋನ" },
    { path: "/achievements", label: "ಸಾಧನೆಗಳು" },
    { path: "/news", label: "ಸುದ್ದಿ" },
    { path: "/events", label: "ಕಾರ್ಯಕ್ರಮಗಳು" },
    { path: "/gallery", label: "ಗ್ಯಾಲರಿ" },
    { path: "/community", label: "ಸಮುದಾಯ" },
    { path: "/contact", label: "ಸಂಪರ್ಕ" },
  ];

  if (isAdminRoute) {
    return <Outlet />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                ಮ
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">ಮಸ್ತಪ್ಪ ನಾಯಕ್ ಬಲಸೆ</h1>
                <p className="text-sm text-gray-600">ಜನರ ಧ್ವನಿ, ಪ್ರಗತಿಯ ದೃಷ್ಟಿ</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? "text-orange-600"
                      : "text-gray-700 hover:text-orange-600"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/admin"
                className="ml-4 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm"
              >
                Admin Login
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden py-4 border-t">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 text-sm font-medium ${
                    location.pathname === link.path
                      ? "text-orange-600"
                      : "text-gray-700"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/admin"
                onClick={() => setMobileMenuOpen(false)}
                className="block mt-4 px-4 py-2 bg-orange-600 text-white rounded-lg text-sm text-center"
              >
                Admin Login
              </Link>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-lg font-bold mb-4">ಮಸ್ತಪ್ಪ ನಾಯಕ್ ಬಲಸೆ</h3>
              <p className="text-gray-400 text-sm">
                ಉತ್ತರ ಕನ್ನಡ ಜಿಲ್ಲೆಯ ಸಾಮಾಜಿಕ ಕಾರ್ಯಕರ್ತ, ಉದ್ಯಮಿ ಮತ್ತು ಸಮುದಾಯ ನಾಯಕ. 
                ಜನರ ಹಿತಾಸಕ್ತಿಗಾಗಿ ಮೀಸಲಾಗಿರುವ ನಾಯಕತ್ವ.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="text-gray-400 hover:text-white">ಪರಿಚಯ</Link></li>
                <li><Link to="/vision" className="text-gray-400 hover:text-white">ದೃಷ್ಟಿಕೋನ</Link></li>
                <li><Link to="/achievements" className="text-gray-400 hover:text-white">ಸಾಧನೆಗಳು</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white">ಸಂಪರ್ಕ</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-4">ಸಂಪರ್ಕ ಮಾಹಿತಿ</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>ಮುರ್ದೇಶ್ವರ, ಭಟ್ಕಳ</li>
                <li>ಉತ್ತರ ಕನ್ನಡ ಜಿಲ್ಲೆ, ಕರ್ನಾಟಕ</li>
                <li>Email: info@mastappanaik.com</li>
                <li>Phone: +91 9876543210</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2026 ಮಸ್ತಪ್ಪ ನಾಯಕ್ ಬಲಸೆ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

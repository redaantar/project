import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Footer() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <footer className="bg-gray-50 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              {isHomePage ? (
                <li><a href="#about-us" className="hover:text-[#0066CC] transition">About Us</a></li>
              ) : (
                <li><Link to="/#about-us" className="hover:text-[#0066CC] transition">About Us</Link></li>
              )}
              <li><Link to="/careers" className="hover:text-[#0066CC] transition">Careers</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/help" className="hover:text-[#0066CC] transition">Help Center</Link></li>
              <li><Link to="/api" className="hover:text-[#0066CC] transition">API Reference</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy-policy" className="text-gray-600 hover:text-[#0066CC] transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-use" className="text-gray-600 hover:text-[#0066CC] transition">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Apps */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Mobile Apps</h3>
            <div className="flex flex-col space-y-4">
              <a 
                href="https://apps.apple.com/app/aidra"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-[135px] h-[40px] transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:ring-offset-2"
                aria-label="Download Aidra on the App Store"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </a>
              <a 
                href="https://play.google.com/store/apps/details?id=com.aidra.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-[135px] h-[40px] transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:ring-offset-2"
                aria-label="Get Aidra on Google Play"
              >
                <img
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/aidratech" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#0066CC] transition-colors duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:ring-offset-2 rounded-full p-1"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-6 h-6" strokeWidth={1.75} />
              </a>
              <a 
                href="https://www.linkedin.com/company/aidra-tech" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#0066CC] transition-colors duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:ring-offset-2 rounded-full p-1"
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin className="w-6 h-6" strokeWidth={1.75} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <p>© {new Date().getFullYear()} Aidra. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link 
                to="/privacy-policy" 
                className="hover:text-[#0066CC] transition"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms-of-use" 
                className="hover:text-[#0066CC] transition"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
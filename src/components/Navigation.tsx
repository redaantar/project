import React, { useState, useEffect } from 'react';
import { Brain, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { LanguageSelector } from './LanguageSelector';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'What We Do', path: '/#products' },
    { name: 'Saudi 2030 Vision', path: '/#saudi-2030-vision' },
    { name: 'About Us', path: '/#about-us' },
    { 
      name: 'Careers', 
      path: '/careers',
      isHighlighted: true,
      ariaLabel: 'View career opportunities at Aidra'
    }
  ];

  const handleNavClick = (path: string) => {
    if (path.startsWith('/#')) {
      const element = document.querySelector(path.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center">
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <Brain className="h-8 w-8 text-[#0066CC]" />
              <span className="ml-2 text-2xl font-bold gradient-text">
                Aidra
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.path.startsWith('/#') ? (
                  <a
                    href={item.path}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.path);
                    }}
                    className={`text-gray-600 hover:text-[#0066CC] font-medium transition-colors ${
                      item.isHighlighted ? 'relative group' : ''
                    }`}
                    aria-label={item.ariaLabel}
                  >
                    {item.name}
                    {item.isHighlighted && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#0066CC] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    )}
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    className={`text-gray-600 hover:text-[#0066CC] font-medium transition-colors ${
                      item.isHighlighted ? 'relative group' : ''
                    } ${location.pathname === item.path ? 'text-[#0066CC]' : ''}`}
                    aria-label={item.ariaLabel}
                    aria-current={location.pathname === item.path ? 'page' : undefined}
                  >
                    {item.name}
                    {item.isHighlighted && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#0066CC] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    )}
                  </Link>
                )}
              </motion.div>
            ))}
            <div className="flex items-center space-x-4">
              <motion.a
                href="https://dev.aidra.tech/login"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0066CC] text-white px-6 py-2.5 rounded-lg hover:brightness-110 active:brightness-90 focus:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#0066CC]/50 transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Sign in to Aidra platform"
              >
                Sign In
              </motion.a>
              <LanguageSelector />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSelector />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-[#0066CC] transition-colors"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.path.startsWith('/#') ? (
                    <a
                      href={item.path}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.path);
                      }}
                      className={`block text-gray-600 hover:text-[#0066CC] font-medium transition-colors py-2 ${
                        item.isHighlighted ? 'relative inline-block' : ''
                      }`}
                      aria-label={item.ariaLabel}
                    >
                      {item.name}
                      {item.isHighlighted && (
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#0066CC]" />
                      )}
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      className={`block text-gray-600 hover:text-[#0066CC] font-medium transition-colors py-2 ${
                        item.isHighlighted ? 'relative inline-block' : ''
                      } ${location.pathname === item.path ? 'text-[#0066CC]' : ''}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      aria-label={item.ariaLabel}
                      aria-current={location.pathname === item.path ? 'page' : undefined}
                    >
                      {item.name}
                      {item.isHighlighted && (
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#0066CC]" />
                      )}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <a
                  href="https://dev.aidra.tech/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#0066CC] text-white px-6 py-2.5 rounded-lg hover:brightness-110 active:brightness-90 focus:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#0066CC]/50 transition-all duration-300 font-semibold shadow-md hover:shadow-lg text-center"
                  aria-label="Sign in to Aidra platform"
                >
                  Sign In
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
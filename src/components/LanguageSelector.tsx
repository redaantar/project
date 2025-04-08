import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';

const languages = [
  { code: 'en', label: 'ENG' },
  { code: 'ar', label: 'AR' },
] as const;

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLanguage = languages.find(lang => lang.code === language);

  const dropdownVariants = {
    hidden: { 
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2
      }
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1.5 px-3 py-1.5 rounded-md bg-gradient-to-r from-[#0066FF] to-[#00CC66] text-white hover:brightness-110 transition-all duration-300 text-xs font-medium shadow-sm hover:shadow-md relative overflow-hidden group"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={`Select language (currently ${language === 'en' ? 'English' : 'Arabic'})`}
      >
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="font-medium relative z-10">{currentLanguage?.label}</span>
        <ChevronDown 
          className={`w-3 h-3 text-white relative z-10 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={dropdownVariants}
            className="absolute right-0 mt-1 rounded-md bg-white shadow-lg ring-1 ring-black/5 z-50 min-w-[90px] overflow-hidden"
          >
            <div className="py-0.5">
              {languages.map((lang) => (
                <motion.button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`flex items-center justify-between w-full px-3 py-2 text-xs ${
                    language === lang.code
                      ? 'bg-gradient-to-r from-[#0066FF]/5 to-[#00CC66]/5 text-[#0066FF]'
                      : 'text-gray-700 hover:bg-gradient-to-r hover:from-[#0066FF]/5 hover:to-[#00CC66]/5'
                  } transition-all duration-300`}
                  whileHover={{ x: 2 }}
                  aria-label={lang.code === 'en' ? 'Switch to English' : 'Switch to Arabic'}
                >
                  <span className="font-medium">{lang.label}</span>
                  {language === lang.code && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="ml-2 w-1 h-1 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00CC66]"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
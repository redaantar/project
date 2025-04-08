import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, X, MapPin, Building2, Users } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  company: string;
}

export function CTA() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Invalid email format');
      }

      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setShowModal(false);
      setFormData({ name: '', email: '', company: '' });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [formData]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value.slice(0, 100)
    }));
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: {
        duration: 0.2
      }
    }
  };

  const benefits = [
    {
      icon: <MapPin className="h-6 w-6" />,
      text: "First-mover advantage in KSA's emerging carbon market"
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      text: "Early access to our Saudi-optimized platform"
    },
    {
      icon: <Users className="h-6 w-6" />,
      text: "Join our growing network of sustainability pioneers"
    }
  ];

  return (
    <>
      <section className="relative py-24 bg-gradient-to-br from-[#0066FF] to-[#00CC66] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.343 0L13.857 8.485 15.272 9.9l9.9-9.9h-2.83zM32 0l-3.486 3.485 1.415 1.415L34.828.828 32 0zm-6.485 0L16.828 8.687l1.414 1.414 8.485-8.485L25.515 0zm12.97 0l8.486 8.486-1.414 1.415-8.485-8.485L38.485 0zm6.484 0l8.486 8.486-1.414 1.415-8.485-8.485L44.97 0zm-18 0L18.284 8.687l1.414 1.414 8.485-8.485L26.97 0zm-6.484 0L11.8 8.687l1.415 1.414 8.485-8.485L20.485 0zm-6.485 0L5.373 8.687 6.787 10.1l8.485-8.485L14 0zM4.485 0L0 4.485l1.414 1.414L5.9 1.414 4.485 0z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
            backgroundSize: "60px 60px"
          }} />
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center"
        >
          <motion.span 
            variants={containerVariants}
            className="inline-flex items-center px-4 py-1 mb-8 text-white/90 bg-white/10 backdrop-blur-sm rounded-full text-lg font-medium"
          >
            🇸🇦 Now Launching in Saudi Arabia
          </motion.span>

          <motion.h2 
            variants={containerVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight max-w-4xl"
          >
            Join the Movement to<br className="hidden md:inline" />
            <span className="text-white/90">Monetize Sustainability</span>
          </motion.h2>

          <motion.p 
            variants={containerVariants}
            className="text-xl text-white/90 mb-12 max-w-3xl leading-relaxed"
          >
            Aidra is now live in the Kingdom — uniting stakeholders to unlock new value from waste, emissions, and environmental data.
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mb-12"
          >
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                variants={containerVariants}
                whileHover={{ scale: 1.02 }}
                className="flex items-center justify-center space-x-3 text-white/90 bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300"
              >
                {benefit.icon}
                <span className="text-sm md:text-base">{benefit.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.p 
            variants={containerVariants}
            className="text-lg text-white/90 mb-10 italic max-w-3xl text-center"
          >
            Every new user strengthens the ecosystem:<br className="hidden sm:inline" />
            More data. Smarter traceability. Greater carbon revenue potential.
          </motion.p>

          <motion.div 
            variants={containerVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-2xl mx-auto"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto bg-white text-[#0066FF] px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center text-lg font-semibold shadow-lg shadow-black/20"
              onClick={() => setShowModal(true)}
            >
              Join Now 
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.p
              variants={containerVariants}
              className="text-white/90 text-center sm:text-left text-lg"
            >
              Join us and be part of Saudi Arabia's sustainability journey
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-2xl p-8 max-w-lg w-full relative shadow-xl"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close modal"
              >
                <X className="h-6 w-6" />
              </button>

              <h3 className="text-2xl font-bold gradient-text mb-4 text-center">
                Join Aidra's Saudi Launch
              </h3>

              <p className="text-gray-600 mb-8 text-center">
                Be among the first to access our platform in Saudi Arabia. Complete the form below and our team will contact you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    minLength={2}
                    maxLength={100}
                    pattern="[A-Za-z\s]+"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066FF] focus:border-[#0066FF] transition-shadow"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Business Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    maxLength={100}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066FF] focus:border-[#0066FF] transition-shadow"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    minLength={2}
                    maxLength={100}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066FF] focus:border-[#0066FF] transition-shadow"
                    placeholder="Acme Inc."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#0066FF] to-[#00CC66] text-white py-3 rounded-lg hover:opacity-90 transition-all duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
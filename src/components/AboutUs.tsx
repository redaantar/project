import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Linkedin, Mail } from 'lucide-react';

export function AboutUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const missions = [
    {
      title: "Measure What Matters",
      description: "Turn environmental impact into data you can track, trust, and act on."
    },
    {
      title: "Operationalize Circularity",
      description: "Bring the circular economy to life with tools that work on the ground."
    },
    {
      title: "Achieve Net Zero",
      description: "Turn ambition into results with real-time insights, verified actions, and carbon monetization."
    }
  ];

  const locations = [
    {
      name: "Aidra Tech KSA",
      icon: <Brain className="h-6 w-6 text-emerald-400" />
    },
    {
      name: "Aidra Tech USA",
      icon: <Brain className="h-6 w-6 text-emerald-400" />
    }
  ];

  return (
    <section id="about-us" className="section-padding">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="section-container"
      >
        <div className="text-center mb-16">
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-3 mb-8"
          >
            <span className="text-3xl">🧬</span>
            <h2 className="text-4xl font-bold gradient-text">
              About Us
            </h2>
          </motion.div>
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-gray-900 mb-6"
          >
            Empowering the Carbon Economy with Intelligence, Traceability & Impact
          </motion.h3>
        </div>

        <motion.div variants={itemVariants} className="glass-card p-10 mb-16 hover-card-glow">
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            At Aidra, we are building the infrastructure for a new carbon economy — where waste becomes value, emissions become verified credits, and sustainability becomes scalable.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            We combine AI, blockchain, and carbon finance into one unified platform that helps industries, governments, and landowners measure their environmental footprint, reduce emissions, and generate certified carbon credits.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-16">
          <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Our Mission Is Clear and Actionable
          </h4>
          <div className="space-y-6">
            {missions.map((mission, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start space-x-6 glass-card p-8 hover-card-glow"
                whileHover={{ x: 10 }}
              >
                <div className="text-emerald-400 flex-shrink-0 mt-1.5 text-2xl">➡️</div>
                <div>
                  <h5 className="text-xl font-bold text-gray-900 mb-2">{mission.title}</h5>
                  <p className="text-gray-600 text-lg">{mission.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="glass-card p-10 mb-16 hover-card-glow">
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            From waste traceability to product-level CO₂ analysis and market-ready credit monetization, we deliver the tools to drive real change — starting in Saudi Arabia and scaling across the region.
          </p>
          <p className="text-gray-900 text-xl font-semibold text-center">
            Built in the Gulf. Designed for the world. Scaled for a sustainable future.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="text-center">
          <h4 className="text-2xl font-bold text-gray-900 mb-10">Contact Us</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card p-8 hover-card-glow"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-emerald-50 rounded-xl p-4">
                    {location.icon}
                  </div>
                </div>
                <h5 className="text-xl font-bold text-gray-900">
                  {location.name}
                </h5>
              </motion.div>
            ))}
            <motion.div
              variants={itemVariants}
              className="glass-card p-8 hover-card-glow"
              whileHover={{ y: -5 }}
            >
              <div className="space-y-6">
                <a
                  href="mailto:info@aidra.tech"
                  className="flex items-center justify-center space-x-3 text-gray-700 hover:text-emerald-600 transition-colors group"
                >
                  <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span className="text-lg">info@aidra.tech</span>
                </a>
                <a
                  href="https://linkedin.com/company/aidra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 text-gray-700 hover:text-emerald-600 transition-colors group"
                >
                  <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span className="text-lg">LinkedIn</span>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
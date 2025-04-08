import React from 'react';
import { Zap, Shield, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function Features() {
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

  const features = [
    {
      icon: <Zap className="h-6 w-6 text-emerald-400" />,
      title: "Built for Circular Impact",
      description: "From CO₂ footprint intelligence to blockchain-backed traceability, Aidra is optimized to handle complex sustainability data — fast, scalable, and always audit-ready."
    },
    {
      icon: <Shield className="h-6 w-6 text-emerald-400" />,
      title: "Trust at Every Step",
      description: "Transparency and compliance are built in — with AI-powered verification, secure data pipelines, and certified environmental actions aligned with global standards."
    },
    {
      icon: <Smartphone className="h-6 w-6 text-emerald-400" />,
      title: "AI-Powered & Predictive by Design",
      description: "Mobile-first, field-ready, and intelligence-driven — Aidra brings AI to every layer of your operations: from customer care and smart routing to predictive insights and environmental analytics. Wherever your impact starts, Aidra is there."
    }
  ];

  return (
    <section className="py-24">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-16">
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 mb-6"
          >
            <span className="text-2xl">💡</span>
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">
              Why Choose Aidra
            </h2>
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            The unified platform powering the circular economy for governments, industries, and carbon innovators.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card p-8 hover-card-glow"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="bg-emerald-400/10 rounded-lg p-3">
                  {feature.icon}
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold gradient-text mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
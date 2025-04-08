import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BrainCircuit, LineChart, Network, Bot } from 'lucide-react';

export function Solutions() {
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

  const solutions = [
    {
      icon: <BrainCircuit className="h-8 w-8 text-emerald-600" />,
      title: "Machine Learning",
      description: "Custom ML models that adapt and learn from your data to drive intelligent decision-making.",
      features: ["Predictive Analytics", "Pattern Recognition", "Automated Learning"]
    },
    {
      icon: <LineChart className="h-8 w-8 text-emerald-600" />,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with our advanced analytics solutions.",
      features: ["Real-time Analysis", "Visual Dashboards", "Trend Forecasting"]
    },
    {
      icon: <Network className="h-8 w-8 text-emerald-600" />,
      title: "Neural Networks",
      description: "Deep learning solutions that mimic human intelligence for complex problem-solving.",
      features: ["Deep Learning", "Image Recognition", "Natural Language Processing"]
    },
    {
      icon: <Bot className="h-8 w-8 text-emerald-600" />,
      title: "AI Automation",
      description: "Streamline operations with intelligent automation powered by cutting-edge AI.",
      features: ["Process Automation", "Smart Workflows", "Cognitive Computing"]
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-white">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-16">
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            AI Solutions for Every Need
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Discover our comprehensive suite of AI-powered solutions designed to transform your business
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="bg-emerald-50 rounded-lg p-3">
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 ml-4">
                  {solution.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                {solution.description}
              </p>
              <ul className="space-y-3">
                {solution.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex}
                    className="flex items-center text-gray-700"
                  >
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
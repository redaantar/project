import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Footprints, 
  GitBranch, 
  Coins, 
  LineChart,
  CheckCircle2
} from 'lucide-react';

export function Products() {
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

  const products = [
    {
      icon: <Footprints className="h-8 w-8 text-emerald-600" />,
      title: "Footprint Intelligence",
      description: "Track your environmental impact at every level — from operations to individual products — with smart CO₂ calculation models and data-backed insights.",
      features: [
        "Real-time CO₂ tracking",
        "Smart calculation models",
        "Impact visualization",
        "Data-driven insights"
      ]
    },
    {
      icon: <GitBranch className="h-8 w-8 text-emerald-600" />,
      title: "Traceability Engine",
      description: "Monitor material and waste flows in real-time across the value chain. Our system ensures full transparency from source to recovery — verified by blockchain.",
      features: [
        "Real-time monitoring",
        "Blockchain verification",
        "Value chain tracking",
        "Waste flow analytics"
      ]
    },
    {
      icon: <Coins className="h-8 w-8 text-emerald-600" />,
      title: "Carbon Credit Generator",
      description: "Turn reductions into value. Aidra automates the conversion of verified actions into certified carbon credits, aligned with global standards.",
      features: [
        "Automated conversion",
        "Global standard compliance",
        "Credit certification",
        "Value optimization"
      ]
    },
    {
      icon: <LineChart className="h-8 w-8 text-emerald-600" />,
      title: "Compliance & Reporting Hub",
      description: "Stay aligned with national and international ESG frameworks through customizable dashboards and automated reporting tools.",
      features: [
        "ESG framework alignment",
        "Custom dashboards",
        "Automated reporting",
        "Compliance tracking"
      ]
    }
  ];

  return (
    <section id="products" className="py-24 bg-gradient-to-b from-white to-gray-50">
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
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">
              What We Do
            </h2>
          </motion.div>
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-gray-900 mb-6"
          >
            One Platform. Multiple Sustainability Tools.
          </motion.h3>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Aidra's unified SaaS platform empowers businesses and institutions to measure, trace, and monetize their environmental impact — with built-in flexibility to support diverse sustainability goals.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card p-8 hover:shadow-xl transition-all duration-300 group"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-emerald-50 rounded-lg p-3 mr-4">
                  {product.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {product.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {product.description}
              </p>
              <ul className="space-y-3">
                {product.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex}
                    className="flex items-center text-gray-700"
                  >
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0" />
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
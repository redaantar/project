import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Recycle, Leaf, LineChart, Droplet } from 'lucide-react';

export function Vision2030() {
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

  const stats = [
    {
      icon: <Recycle className="h-6 w-6 text-emerald-400" />,
      value: "50–60M",
      label: "tons of waste generated annually in KSA",
      description: "An untapped opportunity for traceable, circular recovery."
    },
    {
      icon: <Leaf className="h-6 w-6 text-emerald-400" />,
      value: "130 GW",
      label: "renewable energy capacity targeted by 2030",
      description: "Driving demand for measurable, tech-enabled decarbonization."
    },
    {
      icon: <Droplet className="h-6 w-6 text-emerald-400" />,
      value: "150,000+",
      label: "entities to be connected",
      description: "Enabling real-time sustainability tracking and participation in national carbon programs under the Saudi Green Initiative."
    }
  ];

  return (
    <section id="saudi-2030-vision" className="py-24">
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
            <span className="text-2xl">🌍</span>
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">
              Scaling for National Impact
            </h2>
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mt-6"
          >
            Aidra's unified platform is designed to power Saudi Arabia's circular transformation — from CO₂ footprint tracking to certified carbon credit monetization. Our technology is scaling to support the Kingdom's bold Vision 2030 targets across waste, energy, and emissions.
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mt-6"
          >
            With a growing ecosystem of partners, we are laying the digital foundation for a new circular and carbon economy — starting in Saudi Arabia.
          </motion.p>
        </div>

        <motion.div variants={itemVariants} className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-12 gradient-text">
            📈 Vision 2030 in Numbers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card p-8 hover-card-glow"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-emerald-400/10 rounded-lg p-3">
                    {stat.icon}
                  </div>
                </div>
                <h4 className="text-3xl font-bold gradient-text mb-2">
                  {stat.value}
                </h4>
                <p className="text-gray-400 font-medium mb-4">
                  {stat.label}
                </p>
                <p className="text-gray-500 text-sm">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
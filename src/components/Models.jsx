'use client';

import { motion } from 'framer-motion';
import { AI_MODELS } from '../lib/constants';
import { Sparkles, Video, Wand2 } from 'lucide-react';

const categoryIcons = {
  'Image Generation': Sparkles,
  'Video Generation': Video,
  'Enhancement': Wand2,
};

export default function Models() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="models" className="py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-gold/10 border border-gold/20 rounded-full mb-6"
          >
            <span className="text-sm text-gold font-semibold">AI Models</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Powered by the
            </span>
            <br />
            <span className="bg-gradient-to-r from-gold via-gold-light to-gold-dark bg-clip-text text-transparent">
              World&apos;s Best AI Models
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Access 12+ state-of-the-art AI models all in one place. Switch between models seamlessly for the perfect result.
          </p>
        </motion.div>

        {/* Models Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {AI_MODELS.map((model) => {
            const Icon = categoryIcons[model.category];
            return (
              <motion.div
                key={model.id}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 border border-gold/10 rounded-xl p-6 backdrop-blur-sm hover:border-gold/30 transition-all duration-300"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>

                <div className="relative z-10">
                  {/* Icon & Category */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-gold/20 to-gold-dark/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon size={20} className="text-gold" />
                    </div>
                    <span className="text-xs text-gold/60 font-medium">{model.category}</span>
                  </div>

                  {/* Model Name */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gold transition-colors">
                    {model.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {model.description}
                  </p>

                  {/* Status Badge */}
                  <div className="mt-4 inline-flex items-center space-x-1 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-400 font-medium">Available</span>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-gold/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Category Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-16"
        >
          {Object.entries(categoryIcons).map(([category, Icon]) => (
            <div key={category} className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center">
                <Icon size={16} className="text-gold" />
              </div>
              <span className="text-sm text-gray-400">{category}</span>
            </div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6 text-lg">
            New models added regularly. Get access to them all!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-gold via-gold-light to-gold text-black font-semibold rounded-lg shadow-lg shadow-gold/30 hover:shadow-gold/50 transition-all"
          >
            Explore All Models
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { MousePointerClick, PenTool, Sparkles, Download } from 'lucide-react';
import { HOW_IT_WORKS } from '../lib/constants';

const iconMap = {
  MousePointerClick,
  PenTool,
  Sparkles,
  Download,
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900 opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-gold/10 border border-gold/20 rounded-full mb-6"
          >
            <span className="text-sm text-gold font-semibold">How It Works</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Create in
            </span>
            {' '}
            <span className="bg-gradient-to-r from-gold via-gold-light to-gold-dark bg-clip-text text-transparent">
              Four Simple Steps
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            From idea to reality in minutes. Our streamlined process makes AI creation effortless.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/20 to-transparent transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {HOW_IT_WORKS.map((step, index) => {
              const Icon = iconMap[step.icon];
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Card */}
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="relative bg-gradient-to-br from-gray-900 to-black border border-gold/20 rounded-2xl p-6 md:p-8 text-center group hover:border-gold/40 transition-all duration-300"
                  >
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>

                    {/* Step Number */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="relative z-10 w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-gold via-gold-light to-gold-dark rounded-full flex items-center justify-center shadow-lg shadow-gold/30 group-hover:shadow-gold/50 transition-shadow"
                    >
                      <span className="text-2xl font-bold text-black">{step.step}</span>
                    </motion.div>

                    {/* Icon */}
                    <div className="relative z-10 mb-4">
                      <div className="w-14 h-14 mx-auto bg-gold/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon size={28} className="text-gold" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="relative z-10 text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors">
                      {step.title}
                    </h3>
                    <p className="relative z-10 text-gray-400 text-sm leading-relaxed">
                      {step.description}
                    </p>

                    {/* Arrow Connector for Desktop */}
                    {index < HOW_IT_WORKS.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                        <motion.div
                          animate={{
                            x: [0, 5, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-gold/40">
                            <path d="M8 16H24M24 16L18 10M24 16L18 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </motion.div>
                      </div>
                    )}
                  </motion.div>

                  {/* Mobile Arrow */}
                  {index < HOW_IT_WORKS.length - 1 && (
                    <div className="lg:hidden flex justify-center my-4">
                      <motion.div
                        animate={{
                          y: [0, 5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-gold/40">
                          <path d="M16 8V24M16 24L10 18M16 24L22 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6 text-lg">
            See how easy it is. Start creating today!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-gold via-gold-light to-gold text-black font-semibold rounded-lg shadow-lg shadow-gold/30 hover:shadow-gold/50 transition-all"
            >
              Start Free Trial
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white/5 border border-gold/30 text-white font-semibold rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all"
            >
              View Examples
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { PRICING_TIERS } from '../lib/constants';
import Link from 'next/link';

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/10 rounded-full blur-3xl"
      />
      
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
            <span className="text-sm text-gold font-semibold">Pricing</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Simple, Transparent
            </span>
            <br />
            <span className="bg-gradient-to-r from-gold via-gold-light to-gold-dark bg-clip-text text-transparent">
              Pricing for Everyone
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your creative needs. No hidden fees, cancel anytime.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {PRICING_TIERS.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className={`relative ${tier.highlighted ? 'md:scale-105' : ''}`}
            >
              {/* Popular Badge */}
              {tier.highlighted && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-gold via-gold-light to-gold text-black text-sm font-bold rounded-full shadow-lg shadow-gold/30 flex items-center space-x-2"
                >
                  <Star size={16} fill="currentColor" />
                  <span>MOST POPULAR</span>
                </motion.div>
              )}

              <div
                className={`relative h-full bg-gradient-to-br from-gray-900 to-black border ${
                  tier.highlighted ? 'border-gold/50 shadow-2xl shadow-gold/20' : 'border-gold/20'
                } rounded-2xl p-8 group hover:border-gold/40 transition-all duration-300`}
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  tier.highlighted ? 'from-gold/20' : 'from-gold/10'
                } to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl`}></div>

                <div className="relative z-10">
                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-400 text-sm mb-6">{tier.description}</p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline">
                      <span className="text-5xl font-bold bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                        ${tier.price}
                      </span>
                      <span className="text-gray-400 ml-2">/{tier.period}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link href="/account/signup">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-4 rounded-lg font-semibold mb-8 transition-all ${
                        tier.highlighted
                          ? 'bg-gradient-to-r from-gold via-gold-light to-gold text-black shadow-lg shadow-gold/30 hover:shadow-gold/50'
                          : 'bg-white/5 border border-gold/30 text-white hover:bg-white/10'
                      }`}
                    >
                      {tier.cta}
                    </motion.button>
                  </Link>

                  {/* Features */}
                  <div className="space-y-4">
                    <p className="text-sm font-semibold text-gray-400 mb-4">What&apos;s included:</p>
                    {tier.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: featureIndex * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <div className="flex-shrink-0 w-5 h-5 bg-gold/20 rounded-full flex items-center justify-center mt-0.5">
                          <Check size={14} className="text-gold" />
                        </div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Corner Accent */}
                {tier.highlighted && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold/20 to-transparent rounded-bl-full"></div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-sm">
            All plans include a 7-day money-back guarantee. No questions asked.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Need a custom plan? <a href="#" className="text-gold hover:underline">Contact us</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

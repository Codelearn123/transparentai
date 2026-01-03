'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Twitter, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { SITE_CONFIG } from '../lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { label: 'Features', href: '#features' },
      { label: 'AI Models', href: '#models' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'API Docs', href: '/docs' },
    ],
    Company: [
      { label: 'About Us', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
    ],
    Resources: [
      { label: 'Documentation', href: '/docs' },
      { label: 'Tutorials', href: '/tutorials' },
      { label: 'Community', href: '/community' },
      { label: 'Support', href: '/support' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
      { label: 'License', href: '/license' },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/pixelclips', label: 'Twitter' },
    { icon: Github, href: 'https://github.com/pixelclips', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/company/pixelclips', label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${SITE_CONFIG.email}`, label: 'Email' },
  ];

  return (
    <footer className="relative bg-black border-t border-gold/10">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-black"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center space-x-2 group mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-gold via-gold-light to-gold-dark rounded-lg flex items-center justify-center shadow-lg shadow-gold/30 group-hover:shadow-gold/50 transition-shadow">
                <span className="text-black font-bold text-xl">P</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
                PixelClips
              </span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {SITE_CONFIG.description}
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-gold/10 border border-gold/20 rounded-lg flex items-center justify-center text-gold hover:bg-gold/20 hover:border-gold/30 transition-all"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-gold transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gold/10 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-3">
              Stay Updated
            </h3>
            <p className="text-gray-400 mb-6">
              Get the latest AI models, tips, and exclusive offers delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/5 border border-gold/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold/40 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-gold via-gold-light to-gold text-black font-semibold rounded-lg shadow-lg shadow-gold/30 hover:shadow-gold/50 transition-all whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold/10 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center space-x-1">
              <span>Made with</span>
              <Heart size={14} className="text-gold fill-gold animate-pulse" />
              <span>by the PixelClips team</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

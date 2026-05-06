import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Twitter, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Ministries', path: '/ministries' },
  ];

  const resources = [
    { label: 'Events', path: '/events' },
    { label: 'Media', path: '/media' },
    { label: 'Testimonies', path: '/testimonies' },
    { label: 'Give', path: '/give' },
  ];

  const socialLinks = [
    { icon: Facebook, url: '#', label: 'Facebook' },
    { icon: Instagram, url: '#', label: 'Instagram' },
    { icon: Youtube, url: '#', label: 'YouTube' },
    { icon: Twitter, url: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <Link to="/" className="flex items-center gap-3 mb-6 group">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  WC
                </div>
                <div>
                  <div className="font-bold text-white">Winners Chapel</div>
                  <div className="text-xs text-gray-500">Living Faith Church</div>
                </div>
              </Link>
              <p className="text-gray-400 mb-6">
                Where faith becomes reality and lives are transformed. Serving the Lomé community since 2010.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.url}
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-gray-800 hover:bg-red-600 rounded-full transition-colors"
                      title={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="hover:text-red-500 transition-colors flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-red-600 rounded-full"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-white font-bold text-lg mb-6">Resources</h3>
              <ul className="space-y-3">
                {resources.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="hover:text-red-500 transition-colors flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-red-600 rounded-full"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
              <div className="space-y-4">
                <a href="tel:+228XXXXXXXX" className="flex items-start gap-3 hover:text-red-500 transition-colors">
                  <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p>+228 XXXX XXXX</p>
                  </div>
                </a>
                <a href="mailto:info@winnerschapeltogo.com" className="flex items-start gap-3 hover:text-red-500 transition-colors">
                  <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="break-all">info@winnerschapeltogo.com</p>
                  </div>
                </a>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500">Address</p>
                    <p>Lomé, Maritime<br />Togo, West Africa</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-red-600/10 to-red-700/10 border border-red-600/20 rounded-xl p-8 mb-12"
          >
            <h3 className="text-white font-bold text-lg mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-6">Subscribe to our newsletter for sermons, events, and prayer requests.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-600 text-white placeholder-gray-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="border-t border-gray-800"></div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-950 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500"
          >
            <p>© {currentYear} Winners Chapel Togo. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-red-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                Contact
              </a>
            </div>
            <p className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-600 fill-current" /> for the Kingdom
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

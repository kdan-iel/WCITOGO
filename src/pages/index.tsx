import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Play, MessageSquare, Mail, Phone, MapPin, Heart, Send, Calendar, Clock } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

// MEDIA PAGE
export function Media() {
  const sermons = [
    { title: 'Faith for Breakthrough', preacher: 'Pastor David', date: 'May 2026', views: '2.5K' },
    { title: 'Living Victoriously', preacher: 'Pastor Grace', date: 'April 2026', views: '1.8K' },
    { title: 'Kingdom Principles', preacher: 'Pastor Stephen', date: 'April 2026', views: '3.2K' }
  ];

  return (
    <div className="min-h-screen">
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative py-20 md:py-32 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Media Center</h1>
            <p className="text-xl md:text-2xl text-blue-100">Watch sermons, listen to messages, and stay connected</p>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {sermons.map((sermon, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.1 }} className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group">
                <div className="relative h-48 bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center overflow-hidden">
                  <motion.button whileHover={{ scale: 1.2 }} className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all">
                    <Play className="w-8 h-8 text-white fill-white" />
                  </motion.button>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{sermon.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{sermon.preacher}</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{sermon.date}</span>
                    <span>{sermon.views} views</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// CONTACT PAGE
export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  return (
    <div className="min-h-screen">
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative py-20 md:py-32 bg-gradient-to-br from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-green-100">We'd love to hear from you</p>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div {...fadeInUp}>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 dark:bg-gray-800" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 dark:bg-gray-800" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea rows={5} className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 dark:bg-gray-800" placeholder="Your message..."></textarea>
                </div>
                <motion.button type="submit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="space-y-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-400">+228 XXXX XXXX</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-gray-600 dark:text-gray-400">info@winnerschapeltogo.com</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Location</h3>
                    <p className="text-gray-600 dark:text-gray-400">Lomé, Maritime Region, Togo</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

// GIVE PAGE
export function Give() {
  return (
    <div className="min-h-screen">
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative py-20 md:py-32 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Give</h1>
            <p className="text-xl md:text-2xl text-orange-100">Partner with us in advancing God's Kingdom</p>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div {...fadeInUp} className="bg-gradient-to-br from-orange-50 to-white dark:from-orange-900/20 dark:to-gray-900 p-8 md:p-12 rounded-xl border-2 border-orange-600">
            <h2 className="text-3xl font-bold mb-6">Support Our Mission</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Your generous giving helps us reach more lives, plant new churches, and expand our community outreach programs.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                { amount: '$5', uses: 'Feed 2 families' },
                { amount: '$50', uses: 'Support 1 student' },
                { amount: '$100', uses: 'Ministry materials' },
                { amount: '$500', uses: 'Building expansion' }
              ].map((option, i) => (
                <motion.button key={i} whileHover={{ scale: 1.05 }} className="p-6 border-2 border-orange-600 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all">
                  <div className="text-2xl font-bold text-orange-600 mb-2">{option.amount}</div>
                  <div className="text-gray-700 dark:text-gray-400">{option.uses}</div>
                </motion.button>
              ))}
            </div>

            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors">
              Give Now
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// EVENTS PAGE
export function Events() {
  const events = [
    { title: 'Night of Glory', date: 'May 15, 2026', time: '7:00 PM', location: 'Main Chapel' },
    { title: 'Youth Camp 2026', date: 'June 20-22, 2026', time: 'All Day', location: 'Coastal Resort' },
    { title: 'Children\'s Day', date: 'May 28, 2026', time: '3:00 PM', location: 'Children\'s Hall' }
  ];

  return (
    <div className="min-h-screen">
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative py-20 md:py-32 bg-gradient-to-br from-pink-600 to-pink-700 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Events</h1>
            <p className="text-xl md:text-2xl text-pink-100">Special gatherings and celebrations</p>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-6">
            {events.map((event, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.1 }} className="bg-gradient-to-r from-pink-50 to-white dark:from-pink-900/20 dark:to-gray-900 p-8 rounded-xl border-l-4 border-pink-600 shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
                    <div className="space-y-2 text-gray-600 dark:text-gray-400">
                      <p className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {event.date}</p>
                      <p className="flex items-center gap-2"><Clock className="w-4 h-4" /> {event.time}</p>
                      <p className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {event.location}</p>
                    </div>
                  </div>
                  <motion.button whileHover={{ scale: 1.05 }} className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors">
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// TESTIMONIES PAGE
export function Testimonies() {
  const testimonies = [
    { name: 'Marie Koffi', text: 'This church changed my life forever. I went from broken to blessed!' },
    { name: 'Jean-Paul Amenou', text: 'Finding Winners Chapel was finding my family and my purpose.' },
    { name: 'Esther Mensah', text: 'Every service brings me closer to God. The anointing here is real.' }
  ];

  return (
    <div className="min-h-screen">
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative py-20 md:py-32 bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Testimonies</h1>
            <p className="text-xl md:text-2xl text-red-100">Real stories of transformation</p>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {testimonies.map((testimony, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.1 }} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => <Heart key={j} className="w-5 h-5 text-red-600 fill-current" />)}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic">"{testimony.text}"</p>
                <p className="font-bold text-lg">{testimony.name}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="text-center bg-red-50 dark:bg-red-900/20 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Share Your Story</h3>
            <p className="text-gray-700 dark:text-gray-400 mb-6">Your testimony can inspire and transform others. We'd love to hear your story.</p>
            <motion.button whileHover={{ scale: 1.05 }} className="px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors">
              Submit Your Testimony
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

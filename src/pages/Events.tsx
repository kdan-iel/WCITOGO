import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Events() {
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

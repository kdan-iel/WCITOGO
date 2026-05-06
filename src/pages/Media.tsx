import React from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Media() {
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

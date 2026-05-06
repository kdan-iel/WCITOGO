import React from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Testimonies() {
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

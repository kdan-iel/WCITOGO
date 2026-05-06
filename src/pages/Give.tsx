import React from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Give() {
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

            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
              <Heart className="w-5 h-5" />
              Give Now
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

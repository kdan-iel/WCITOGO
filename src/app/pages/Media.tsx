import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { Play, Headphones, Image as ImageIcon, Share2 } from 'lucide-react';

export function Media() {
  const { t } = useLanguage();

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const sermons = [
    {
      title: { en: 'Walking in Faith', fr: 'Marcher par la Foi' },
      speaker: 'Pastor David',
      date: '06 Jan 2026',
      image: 'https://images.unsplash.com/photo-1620565404581-e0aea3f826ef?w=500',
      type: 'video'
    },
    {
      title: { en: 'The Power of Prayer', fr: 'La Puissance de la Prière' },
      speaker: 'Pastor Faith',
      date: '29 Dec 2025',
      image: 'https://images.unsplash.com/photo-1602601571578-3b4484428203?w=500',
      type: 'video'
    },
    {
      title: { en: 'Living Victoriously', fr: 'Vivre Victorieusement' },
      speaker: 'Pastor David',
      date: '22 Dec 2025',
      image: 'https://images.unsplash.com/photo-1667068114532-97a1ce6d0a52?w=500',
      type: 'audio'
    },
    {
      title: { en: 'Building on the Rock', fr: 'Construire sur le Roc' },
      speaker: 'Pastor Faith',
      date: '15 Dec 2025',
      image: 'https://images.unsplash.com/photo-1610414962731-83e357f83a10?w=500',
      type: 'audio'
    }
  ];

  const gallery = [
    'https://images.unsplash.com/photo-1602601571578-3b4484428203',
    'https://images.unsplash.com/photo-1667068114532-97a1ce6d0a52',
    'https://images.unsplash.com/photo-1610414962731-83e357f83a10',
    'https://images.unsplash.com/photo-1581961562828-cd1663ac274e',
    'https://images.unsplash.com/photo-1620565404581-e0aea3f826ef',
    'https://images.unsplash.com/photo-1665113721966-65b14ff0acf0'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1620565404581-e0aea3f826ef)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            {t('Media Center', 'Centre Média')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            {t('Watch, Listen, and Be Blessed', 'Regardez, Écoutez et Soyez Bénis')}
          </p>
        </motion.div>
      </motion.section>

      {/* Recent Sermons */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              {t('Recent Messages', 'Messages Récents')}
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sermons.map((sermon, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={sermon.image}
                    alt={t(sermon.title.en, sermon.title.fr)}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    {sermon.type === 'video' ? (
                      <Play className="w-16 h-16 text-white" />
                    ) : (
                      <Headphones className="w-16 h-16 text-white" />
                    )}
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-red-600 text-white text-xs font-semibold rounded-full">
                      {sermon.type.toUpperCase()}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">{t(sermon.title.en, sermon.title.fr)}</h3>
                  <p className="text-gray-600 text-sm mb-2">{sermon.speaker}</p>
                  <p className="text-gray-500 text-sm mb-4">{sermon.date}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-red-600 font-semibold hover:text-red-700"
                  >
                    <Share2 className="w-4 h-4" />
                    {t('Share', 'Partager')}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
            >
              {t('View Archive', 'Voir les Archives')}
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              {t('Photo Gallery', 'Galerie Photos')}
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700">
              {t('Moments from our services and events', 'Moments de nos services et événements')}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((image, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative h-64 rounded-xl overflow-hidden cursor-pointer group"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ImageIcon className="w-12 h-12 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Stream CTA */}
      <section
        className="py-32 relative"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1610414962731-83e357f83a10)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <motion.div {...fadeInUp} className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <Play className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            {t('Watch Live', 'Regarder en Direct')}
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            {t(
              'Join us online every Sunday at 6:30 AM and 8:35 AM',
              'Rejoignez-nous en ligne chaque dimanche à 6h30 et 8h35'
            )}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-red-600 text-white font-bold text-lg rounded-lg hover:bg-red-700 transition-colors shadow-2xl flex items-center gap-3 mx-auto"
          >
            <Play className="w-6 h-6" />
            {t('Watch Now', 'Regarder Maintenant')}
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}

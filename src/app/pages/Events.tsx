import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, Clock, MapPin, ChevronRight } from 'lucide-react';

export function Events() {
  const { t } = useLanguage();

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const upcomingEvents = [
    {
      title: { en: 'Night of Glory', fr: 'Nuit de Gloire' },
      date: { en: 'May 30, 2026', fr: '30 Mai 2026' },
      time: '7:00 PM – 10:00 PM',
      location: { en: 'Main Auditorium', fr: 'Auditorium Principal' },
      description: {
        en: 'A special night of praise, worship, and powerful ministry. Come expecting a divine encounter.',
        fr: "Une nuit spéciale de louange, d'adoration et de ministration puissante. Venez avec l'attente d'une rencontre divine."
      },
      tag: { en: 'Special Service', fr: 'Service Spécial' },
      color: 'from-red-500 to-red-700',
      image: 'https://images.unsplash.com/photo-1602601571578-3b4484428203?w=800'
    },
    {
      title: { en: 'Youth Camp 2026', fr: 'Camp des Jeunes 2026' },
      date: { en: 'June 20–22, 2026', fr: '20–22 Juin 2026' },
      time: { en: 'All day', fr: 'Toute la journée' },
      location: { en: 'Outside Lomé', fr: 'En dehors de Lomé' },
      description: {
        en: 'Annual 3-day youth retreat combining spiritual growth, fellowship, and fun activities.',
        fr: 'Retraite annuelle de 3 jours pour les jeunes combinant croissance spirituelle, communion et activités amusantes.'
      },
      tag: { en: 'Youth Event', fr: 'Événement Jeunesse' },
      color: 'from-purple-500 to-purple-700',
      image: 'https://images.unsplash.com/photo-1581961562828-cd1663ac274e?w=800'
    },
    {
      title: { en: "Children's Day Celebration", fr: 'Fête des Enfants' },
      date: { en: 'June 1, 2026', fr: '1er Juin 2026' },
      time: '9:00 AM – 12:00 PM',
      location: { en: "Children's Hall", fr: 'Salle des Enfants' },
      description: {
        en: 'A special celebration for all children with games, prizes, and a fun-filled program.',
        fr: 'Une célébration spéciale pour tous les enfants avec des jeux, des prix et un programme plein de joie.'
      },
      tag: { en: 'Children', fr: 'Enfants' },
      color: 'from-blue-500 to-blue-700',
      image: 'https://images.unsplash.com/photo-1667068114532-97a1ce6d0a52?w=800'
    },
    {
      title: { en: 'Covenant Hour of Prayer – Special Edition', fr: "Heure d'Alliance de Prière – Édition Spéciale" },
      date: { en: 'Every Saturday', fr: 'Chaque Samedi' },
      time: '5:30 AM – 6:30 AM',
      location: { en: 'Prayer Hall', fr: 'Salle de Prière' },
      description: {
        en: 'Join us for an intensified hour of corporate prayer every Saturday morning.',
        fr: 'Rejoignez-nous pour une heure de prière corporative intensifiée chaque samedi matin.'
      },
      tag: { en: 'Prayer', fr: 'Prière' },
      color: 'from-amber-500 to-amber-700',
      image: 'https://images.unsplash.com/photo-1610414962731-83e357f83a10?w=800'
    },
  ];

  const pastEvents = [
    {
      title: { en: 'Easter Crossover Service', fr: 'Service de Pâques' },
      date: { en: 'April 20, 2026', fr: '20 Avril 2026' },
    },
    {
      title: { en: 'WOFBI Graduation Ceremony', fr: 'Cérémonie de Remise de Diplômes IBPF' },
      date: { en: 'March 15, 2026', fr: '15 Mars 2026' },
    },
    {
      title: { en: "Valentine's Couples Night", fr: "Soirée des Couples" },
      date: { en: 'February 14, 2026', fr: '14 Février 2026' },
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1602601571578-3b4484428203)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            {t('Events', 'Événements')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            {t('Stay connected with what\'s happening', 'Restez connectés avec ce qui se passe')}
          </p>
        </motion.div>
      </motion.section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              {t('Upcoming Events', 'Événements à Venir')}
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6" />
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t("Don't miss these special moments", 'Ne manquez pas ces moments spéciaux')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={t(event.title.en, event.title.fr)}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${event.color} opacity-60`} />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-white text-black text-xs font-bold rounded-full">
                    {t(event.tag.en, event.tag.fr)}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-black mb-3">{t(event.title.en, event.title.fr)}</h3>
                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-red-600 flex-shrink-0" />
                      <span>{typeof event.date === 'string' ? event.date : t(event.date.en, event.date.fr)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-red-600 flex-shrink-0" />
                      <span>{typeof event.time === 'string' ? event.time : t(event.time.en, event.time.fr)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-red-600 flex-shrink-0" />
                      <span>{t(event.location.en, event.location.fr)}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-5">{t(event.description.en, event.description.fr)}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors text-sm"
                  >
                    {t('Learn More', 'En Savoir Plus')} <ChevronRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">{t('Past Events', 'Événements Passés')}</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto" />
          </motion.div>
          <div className="max-w-2xl mx-auto space-y-4">
            {pastEvents.map((event, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between bg-white p-5 rounded-xl shadow hover:shadow-md transition-all border border-gray-100"
              >
                <div>
                  <h4 className="font-semibold text-black">{t(event.title.en, event.title.fr)}</h4>
                  <p className="text-sm text-gray-500">{t(event.date.en, event.date.fr)}</p>
                </div>
                <span className="text-xs font-semibold text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
                  {t('Past', 'Passé')}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-32 relative"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1667068114532-97a1ce6d0a52)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <motion.div {...fadeInUp} className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            {t("Don't Miss a Thing!", 'Ne Manquez Rien!')}
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            {t('Subscribe to stay updated on all our events and activities.', 'Abonnez-vous pour rester informé de tous nos événements.')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder={t('Your email address', 'Votre adresse email')}
              className="flex-1 px-5 py-4 rounded-lg text-black focus:outline-none"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors"
            >
              {t('Subscribe', "S'abonner")}
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { Clock, MapPin, Users, Calendar as CalendarIcon, Info } from 'lucide-react';

export function Services() {
  const { t } = useLanguage();

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      day: { en: 'Sunday', fr: 'Dimanche' },
      times: ['6:30 AM - 8:30 AM', '8:35 AM - 10:35 PM'],
      title: { en: 'Sunday Worship Service', fr: 'Service de Culte Dominical' },
      description: { en: 'Join us for powerful worship and life-changing messages', fr: 'Rejoignez-nous pour une adoration puissante et des messages transformateurs' }
    },
    {
      day: { en: 'Wednesday', fr: 'Mercredi' },
      times: ['6:00 PM - 7:30 PM'],
      title: { en: 'Midweek communion service', fr: 'Service de Communion du Mi-Semaine' },
      description: { en: 'Deep dive into God\'s Word, powerful prayer and break the fast with the communion', fr: 'Plongée profonde dans la Parole de Dieu, prière puissante et rupture du jeûne avec la communion' }
    },
    {
      day: { en: 'Every morning', fr: 'Chaque matin' },
      times: ['7:00 PM - 9:00 PM'],
      title: { en: 'Convenant Hour Of Prayer', fr: 'Heure d\'Alliance de Priere' },
      description: { en: 'Powerful time of prayer to take charge over the day', fr: 'Moment puissant de prière pour prendre controle de la journee' }
    },
    {
      day: { en: 'Saturday', fr: 'Samedi' },
      times: ['6:30 AM - 9:30 AM'],
      title: { en: 'CHOP and Outreach', fr: 'HADP et Evangelisation' },
      description: { en: 'We take charge of the day and go out to win souls for Christ', fr: 'Nous prenons le controle de la journée et allons gagner des âmes pour Christ' }
    }
  ];

  const expectations = [
    {
      icon: Users,
      title: { en: 'Warm Welcome', fr: 'Accueil Chaleureux' },
      desc: { en: 'Our ushers and greeters will welcome you with love', fr: 'Nos placeurs et hôtes vous accueilleront avec amour' }
    },
    {
      icon: MapPin,
      title: { en: 'Easy Parking', fr: 'Parking Facile' },
      desc: { en: 'Ample parking space available for all members', fr: 'Grand parking disponible pour tous les membres' }
    },
    {
      icon: Clock,
      title: { en: 'Service Duration', fr: 'Durée du Service' },
      desc: { en: 'Services typically last 1.5 to 2 hours', fr: 'Les services durent généralement 1h30 à 2h' }
    },
    {
      icon: Info,
      title: { en: 'First-Time?', fr: 'Première Fois?' },
      desc: { en: 'Visit our welcome desk for more information', fr: 'Visitez notre bureau d\'accueil pour plus d\'informations' }
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1610414962731-83e357f83a10)',
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
            {t('Service Times', 'Horaires des Services')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            {t('Join us as we worship together', 'Rejoignez-nous pour adorer ensemble')}
          </p>
        </motion.div>
      </motion.section>

      {/* Services Schedule */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              {t('Weekly Schedule', 'Programme Hebdomadaire')}
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl border-2 border-red-100 hover:border-red-600 transition-all shadow-lg"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-black">{t(service.day.en, service.day.fr)}</h3>
                  <CalendarIcon className="w-8 h-8 text-red-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">{t(service.title.en, service.title.fr)}</h4>
                <div className="space-y-2 mb-4">
                  {service.times.map((time, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-red-600 font-semibold">
                      <Clock className="w-5 h-5" />
                      <span>{time}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-700">{t(service.description.en, service.description.fr)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              {t('What to Expect', 'À quoi s\'attendre')}
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {t(
                'Whether it\'s your first time or you\'ve been with us for years, here\'s what you can expect',
                'Que ce soit votre première fois ou que vous soyez avec nous depuis des années, voici à quoi vous pouvez vous attendre'
              )}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expectations.map((item, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl text-center hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{t(item.title.en, item.title.fr)}</h3>
                <p className="text-gray-700">{t(item.desc.en, item.desc.fr)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-32 relative"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1602601571578-3b4484428203)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <motion.div {...fadeInUp} className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            {t('We Can\'t Wait to See You!', 'Nous avons hâte de vous voir !')}
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            {t(
              'Join us this Sunday for an unforgettable worship experience and a life transforming word',
              'Rejoignez-nous ce dimanche pour une expérience d\'adoration inoubliable et une parole transformatrice de vie'
            )}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-red-600 text-white font-bold text-lg rounded-lg hover:bg-red-700 transition-colors shadow-2xl"
          >
            {t('Plan Your Visit', 'Planifiez votre visite')}
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}

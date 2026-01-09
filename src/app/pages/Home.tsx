import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, Play, Book, Heart, Users, Church } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  const { t } = useLanguage();

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const ministries = [
    {
      title: { en: 'Children Ministry', fr: 'Ministère des Enfants' },
      description: { en: 'Building strong foundations in Christ', fr: 'Construire des fondations solides en Christ' },
      icon: Heart,
      image: './../../assets/children1.jpg'
    },
    {
      title: { en: 'Youth Alive', fr: 'Jeunesse Vivante' },
      description: { en: 'Empowering the next generation', fr: 'Autonomiser la prochaine génération' },
      icon: Users,
      image: 'src/assets/jeune1.jpg'
    },
    {
      title: { en: 'WOFBI', fr: 'IBPF' },
      description: { en: 'The Word Of faith Bible Institute', fr: 'L\'Institut Biblique de la Parole de la foi' },
      icon: Book,
      image: 'src/assets/wofbi1.jpg'
    }
  ];

  const events = [
    {
      title: { en: 'Sunday Service', fr: 'Service du Dimanche' },
      time: { en: '6:30 AM & 8:35 AM', fr: '6h30 & 8h35' },
      description: { en: 'Join us for worship and the Word', fr: 'Rejoignez-nous pour l\'adoration et la Parole' }
    },
    {
      title: { en: 'Midweek communion service', fr: 'culte de communion de mi-semaine' },
      time: { en: '6:00 PM', fr: '18h00' },
      description: { en: 'We stand in fasting and break with the communion', fr: 'Nous jeunons et terminons avec la communion' }
    },
    {
      title: { en: 'Convenant Hour of Prayer', fr: 'Heure d\'Alliance de Priere' },
      time: { en: '5:30 AM - 6:30 AM', fr: '5h30 - 6h30' },
      description: { en: 'We pray every morning to take charge over the day', fr: 'Nous prions chaque matin pour prendre controle sur la journée' }
    }
  ];

  const testimonials = [
    {
      name: 'Marie K.',
      text: { en: 'This church transformed my life. The teaching is powerful and the community is loving.', fr: 'Cette église a transformé ma vie. L\'enseignement est puissant et la communauté est aimante.' },
      // image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
    },
    {
      name: 'Jean-Paul A.',
      text: { en: 'I found my purpose here. Winners Chapel is truly a place of miracles.', fr: 'J\'ai trouvé mon but ici. Winners Chapel est vraiment un lieu de miracles.' },
      // image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
    },
    {
      name: 'Esther M.',
      text: { en: 'The worship is anointed and the Word brings transformation.', fr: 'L\'adoration est ointe et la Parole apporte la transformation.' },
      // image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1602601571578-3b4484428203)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            {t('Welcome to Winners Chapel', 'Bienvenue à Winners Chapel')}
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl mb-8 text-gray-200"
          >
            {t('Living Faith Church Int\'l, Lomé', 'Eglise de la Foi Vivante Int\'l, Lomé')}
          </motion.p>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors shadow-lg"
              >
                {t('Plan Your Visit', 'Planifiez votre visite')}
              </motion.button>
            </Link>
            <Link to="/media">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg flex items-center gap-2"
              >
                <Play className="w-5 h-5" />
                {t('Watch Live', 'Regarder le live')}
              </motion.button>
            </Link>
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all shadow-lg flex items-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                {t('Sunday Program', 'Programme du dimanche')}
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              {t('Our Mandate', 'Le Mandat')}
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {t(
                'Our Mandate speaks of liberation in all facets of human existence, we focus mainly on destinies that have been afflicted, battered, beaten, tattered, deformed and subsequently in groaning and agonies, as a result of pains, pangs and crying. This is the mandate. The hour has come to liberate the world from all oppression of the devil through the preaching of the word of faith, and I am sending you to undertake this task.” Today, testimonies of liberation through our messages, books, tapes, magazines and other periodicals are most humbling. The word of faith is working like fire for the liberation of mankind across the nations.',
                'Notre mandat parle de la libération dans toutes les dimensions de l\'existence humaine. Nous nous concentrons principalement sur des destinées qui ont été affligées, malmenées, brisées, déchirées, déformées et qui, par conséquent, gémissent et souffrent dans les douleurs et les tourments, au milieu des cris et des larmes. Tel est le mandat.L\'heure est venue de libérer le monde de toute oppression du diable par la prédication de la Parole de la foi, et je t\'envoie pour accomplir cette mission.Aujourd\'hui, les témoignages de libération issus de nos messages, livres, cassettes, magazines et autres publications sont profondément édifiants et empreints d\'humilité. La Parole de la foi agit comme un feu pour la libération de l\'humanité à travers les nations.'
              )}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Church,
                title: { en: 'Worship', fr: 'Adoration' },
                desc: { en: 'Spirit-filled worship that connects us to God', fr: 'Adoration remplie d\'Esprit qui nous connecte à Dieu' }
              },
              {
                icon: Book,
                title: { en: 'Teaching', fr: 'Enseignement' },
                desc: { en: 'Through the preaching of the Word of Faith', fr: 'Par la prédication de la Parole de la foi' }
              },
              {
                icon: Users,
                title: { en: 'Fellowship', fr: 'Communion' },
                desc: { en: 'Strong community of believers growing together', fr: 'Communauté forte de croyants grandissants ensemble' }
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-gray-50 p-8 rounded-xl text-center group hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">{t(item.title.en, item.title.fr)}</h3>
                <p className="text-gray-600">{t(item.desc.en, item.desc.fr)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ministries Highlight */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              {t('Our Ministries', 'Nos Ministères')}
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {t(
                'Empowering every generation to live victoriously in Christ',
                'Revetir chaque génération de puissance pour vivre victorieusement en Christ'
              )}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {ministries.map((ministry, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer h-80"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${ministry.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <ministry.icon className="w-10 h-10 mb-4 text-red-500" />
                  <h3 className="text-2xl font-bold mb-2">{t(ministry.title.en, ministry.title.fr)}</h3>
                  <p className="text-gray-200">{t(ministry.description.en, ministry.description.fr)}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="text-center mt-12">
            <Link to="/ministries">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
              >
                {t('Explore All Ministries', 'Découvrir tous les ministères')}
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              {t('Upcoming Events', 'Événements à Venir')}
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.2 }}
                className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl border-2 border-red-100 hover:border-red-600 transition-all hover:shadow-xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black">{t(event.title.en, event.title.fr)}</h3>
                    {/* <p className="text-red-600 font-semibold">{event.time}</p> */}
                  </div>
                </div>
                <p className="text-gray-700">{t(event.description.en, event.description.fr)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              {t('Testimonies', 'Témoignages')}
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {t('You can register your testimonies', 'Vous pouvez enregistrer vos témoignages')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    // src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-red-600"
                  />
                  <div>
                    <h4 className="font-bold text-lg text-black">{testimonial.name}</h4>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Heart key={i} className="w-4 h-4 text-red-600 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{t(testimonial.text.en, testimonial.text.fr)}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="py-32 relative overflow-hidden"
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
            {t('Join Us This Sunday', 'Rejoignez-nous ce Dimanche')}
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            {t(
              'Experience the presence of God and connect with a loving community',
              'Vivez la présence de Dieu et connectez-vous avec une communauté aimante'
            )}
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-red-600 text-white font-bold text-lg rounded-lg hover:bg-red-700 transition-colors shadow-2xl"
            >
              {t('Get Directions', 'Obtenir l\'itinéraire')}
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

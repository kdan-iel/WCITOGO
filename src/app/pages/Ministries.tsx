import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { Baby, Users, Flame, Home, GraduationCap } from 'lucide-react';
// Images served from `public/assets` — use absolute public paths

export function Ministries() {
  const { t } = useLanguage();

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const ministries = [
    {
      icon: Baby,
      title: { en: 'Children Ministry', fr: 'Ministère des Enfants' },
      age: { en: 'Ages 0-14', fr: 'Âges 0-14' },
      description: {
        en: 'Building strong spiritual foundations in the hearts of our children through age-appropriate teaching, worship, and activities.',
        fr: 'Construire des fondations spirituelles solides dans le cœur de nos enfants par un enseignement, une adoration et des activités adaptés à leur âge.'
      },
      details: {
        en: 'Every Sunday during main service, children are taught Bible stories, memorize Scripture, and learn to worship God with joy.',
        fr: 'Chaque dimanche pendant le service principal, les enfants apprennent des histoires bibliques, mémorisent les Écritures et apprennent à adorer Dieu avec joie.'
      },
      schedule: { en: 'Sundays 6:30 AM & 8:30 AM', fr: 'Dimanches 6h30 & 8h30' },
      image: '/assets/children1.jpg',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: { en: 'Teens Ministry', fr: 'Ministère des Ados' },
      age: { en: 'Ages 15-19', fr: 'Âges 15-19' },
      description: {
        en: 'Equipping teenagers to navigate life\'s challenges with biblical wisdom, building godly character and strong friendships.',
        fr: 'Équiper les adolescents pour naviguer les défis de la vie avec la sagesse biblique, construire un caractère pieux et des amitiés solides.'
      },
      details: {
        en: 'Teen-focused worship, relevant Bible teaching, and fun fellowship activities designed to help teens grow in their faith and in the church.',
        fr: 'Adoration axée sur les ados, enseignement biblique pertinent et activités de communion amusantes conçues pour aider les ados à grandir dans leur foi et dans l\'église.'
      },
      schedule: { en: 'Sundays 6:30 AM', fr: 'Dimanches 6h30' },
      image: '/assets/jeune2.jpg',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Flame,
      title: { en: 'Youth Alive', fr: 'Jeunesse Vivante' },
      age: { en: 'Ages 20-55', fr: 'Âges 20-55' },
      description: {
        en: 'Raising a generation of passionate, purpose-driven young adults who will transform their world through the power of God and the fellowship.',
        fr: 'Former une génération de jeunes adultes passionnés et animés par un but qui transformeront leur monde par la puissance de Dieu et la communauté.'
      },
      details: {
        en: 'Dynamic worship, practical teaching for everyday life, career guidance, relationship counseling, and community outreach.',
        fr: 'Adoration dynamique, enseignement pratique pour la vie quotidienne, orientation professionnelle, conseil relationnel et sensibilisation communautaire.'
      },
      schedule: { en: 'Every two Sundays 5:00 PM', fr: 'Chaque deux Dimanches 17h00' },
      image: '/assets/jeune1.jpg',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Home,
      title: { en: 'Home Cells', fr: 'Cellules de Maison' },
      age: { en: 'All Ages', fr: 'Tous Âges' },
      description: {
        en: 'Small groups meeting in homes across Lomé for fellowship, prayer, Bible study, and mutual encouragement in intimate settings.',
        fr: 'Petits groupes se réunissant dans des maisons à travers Lomé pour la communion, la prière, l\'étude biblique et l\'encouragement mutuel dans un cadre intime.'
      },
      details: {
        en: 'Join a home cell in your neighborhood. Experience genuine community, receive prayer support, and grow together in Christ. Get more information at the church bookshop.',
        fr: 'Rejoignez une cellule de maison dans votre quartier. Vivez une véritable communauté, recevez un soutien en prière et grandissez ensemble en Christ. Obtenez plus d\'informations à la librairie de l\'église.'
      },
      schedule: { en: 'Saturdays 5:00 PM - 6:00 PM', fr: 'Samedis 17h00 - 18h00' },
      image: '/assets/cell1.jpg',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: GraduationCap,
      title: { en: 'Word Of Faith Bible Institute', fr: 'Institut Biblique de la Parole de Foi' },
      age: { en: 'Ages 18+', fr: 'Âges 18+' },
      description: {
        en: 'Comprehensive biblical training for those called to ministry or desiring deeper knowledge of God\'s Word.',
        fr: 'Formation biblique complète pour ceux appelés au ministère ou désireux d\'une connaissance plus profonde de la Parole de Dieu.'
      },
      details: {
        en: 'Basic Certificate Course(BCC), Leadership Certificate Course(LCC), Ledership Diploma Course(LDC) and Junior Bible School(JBS) for the children.',
        fr: 'Brevet de Base (BCC), Brevet de Leadership (LCC), Diplôme de Leadership (LDC) et Ecole Biblique Jeunesse (JBS) pour les enfants.'
      },
      schedule: { en: 'Scheduled by the Institute', fr: 'Programmé par l\'Institut' },
      image: '/assets/wofbi2.jpg',
      color: 'from-amber-500 to-amber-600'
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
          backgroundImage: 'url(https://images.unsplash.com/photo-1581961562828-cd1663ac274e)',
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
            {t('Our Ministries', 'Nos Ministères')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            {t('Empowering every generation for Christ', 'Revetir de puissance chaque génération pour Christ')}
          </p>
        </motion.div>
      </motion.section>

      {/* Ministries */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              {t('Find Your Place', 'Trouvez votre place')}
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {t(
                'Every member has a place to grow, serve, and make a difference',
                'Chaque membre a une place pour grandir, servir et faire une différence'
              )}
            </p>
          </motion.div>

          <div className="space-y-16">
            {ministries.map((ministry, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`relative h-96 rounded-xl overflow-hidden shadow-2xl ${
                    index % 2 === 1 ? 'md:order-2' : ''
                  }`}
                >
                  <img
                    src={ministry.image}
                    alt={t(ministry.title.en, ministry.title.fr)}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${ministry.color} opacity-60`} />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <ministry.icon className="w-6 h-6" />
                      </div>
                      <span className="text-lg font-semibold">{t(ministry.age.en, ministry.age.fr)}</span>
                    </div>
                  </div>
                </motion.div>

                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${ministry.color} rounded-full flex items-center justify-center`}>
                      <ministry.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-black">{t(ministry.title.en, ministry.title.fr)}</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {t(ministry.description.en, ministry.description.fr)}
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {t(ministry.details.en, ministry.details.fr)}
                  </p>
                  <div className="flex items-center gap-2 text-red-600 font-semibold mb-6">
                    <GraduationCap className="w-5 h-5" />
                    <span>{t(ministry.schedule.en, ministry.schedule.fr)}</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-8 py-3 bg-gradient-to-r ${ministry.color} text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all`}
                  >
                    {t('Get Involved', 'Participez')}
                  </motion.button>
                </div>
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
            {t('Ready to Get Connected?', 'Prêt à vous connecter?')}
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            {t(
              'Join a ministry today and discover your purpose',
              'Rejoignez un ministère aujourd\'hui et découvrez votre but'
            )}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-red-600 text-white font-bold text-lg rounded-lg hover:bg-red-700 transition-colors shadow-2xl"
          >
            {t('Contact Us', 'Contactez-nous')}
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}

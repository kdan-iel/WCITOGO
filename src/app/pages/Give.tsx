import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { Heart, DollarSign, Sprout, QrCode, Shield, CreditCard } from 'lucide-react';

export function Give() {
  const { t } = useLanguage();

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const givingOptions = [
    {
      icon: Heart,
      title: { en: 'Offering', fr: 'Offrande' },
      verse: { en: '2 Corinthians 9:7', fr: '2 Corinthiens 9:7' },
      scripture: {
        en: 'Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.',
        fr: 'Que chacun donne comme il l\'a résolu en son cœur, sans tristesse ni contrainte; car Dieu aime celui qui donne avec joie.'
      },
      description: {
        en: 'You can still give your offering through our mobile contact.',
        fr: 'Vous pouvez aussi donner votre offrande via notre contact mobile.'
      },
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: DollarSign,
      title: { en: 'Tithe', fr: 'Dîme' },
      verse: { en: 'Malachi 3:10', fr: 'Malachie 3:10' },
      scripture: {
        en: 'Bring the whole tithe into the storehouse, that there may be food in my house. Test me in this and see if I will not throw open the floodgates of heaven.',
        fr: 'Apportez à la maison du trésor toutes les dîmes, afin qu\'il y ait de la nourriture dans ma maison. Mettez-moi ainsi à l\'épreuve, dit l\'Éternel des armées. Et vous verrez si je n\'ouvre pas pour vous les écluses des cieux.'
      },
      description: {
        en: 'Tithing is giving back to God the first 10% of your income as an act of worship and obedience.',
        fr: 'La dîme consiste à redonner à Dieu les premiers 10% de vos revenus comme un acte d\'adoration et d\'obéissance.'
      },
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Sprout,
      title: { en: 'Seed', fr: 'Semence' },
      verse: { en: 'Luke 6:38', fr: 'Luc 6:38' },
      scripture: {
        en: 'Give, and it will be given to you. A good measure, pressed down, shaken together and running over, will be poured into your lap.',
        fr: 'Donnez, et il vous sera donné: on versera dans votre sein une bonne mesure, serrée, secouée et qui déborde.'
      },
      description: {
        en: 'Sow a special seed offering for specific needs, projects, or as the Spirit leads you to give.',
        fr: 'Semez une offrande spéciale de semence pour des besoins spécifiques, des projets ou selon que l\'Esprit vous conduit à donner.'
      },
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
          backgroundImage: 'url(https://images.unsplash.com/photo-1563097013-a1df1d1fd1c7)',
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
            {t('Give', 'Donner')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            {t(
              'Honoring God with our firstfruits and supporting His work',
              'Honorer Dieu avec nos prémices et soutenir Son œuvre'
            )}
          </p>
        </motion.div>
      </motion.section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              {t('Why We Give', 'Pourquoi Nous Donnons')}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {t(
                'Giving is not just about money; it\'s about worship, trust, and partnership with God in His work. When we give, we acknowledge that everything we have comes from Him.',
                'Donner ne concerne pas seulement l\'argent; c\'est une question d\'adoration, de confiance et de partenariat avec Dieu dans Son œuvre. Quand nous donnons, nous reconnaissons que tout ce que nous avons vient de Lui.'
              )}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t(
                'Your generosity enables us to spread the gospel, minister to those in need, and build God\'s Kingdom here in Lomé and beyond.',
                'Votre générosité nous permet de répandre l\'évangile, de ministrer à ceux qui sont dans le besoin et de bâtir le Royaume de Dieu ici à Lomé et au-delà.'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Giving Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              {t('Ways to Give', 'Façons de Donner')}
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </motion.div>

          <div className="space-y-12">
            {givingOptions.map((option, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="grid md:grid-cols-5 gap-8">
                  <div className={`md:col-span-2 bg-gradient-to-br ${option.color} p-8 md:p-12 text-white flex flex-col justify-center`}>
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6">
                      <option.icon className="w-10 h-10" />
                    </div>
                    <h3 className="text-4xl font-bold mb-4">{t(option.title.en, option.title.fr)}</h3>
                    <p className="text-lg opacity-90">{t(option.verse.en, option.verse.fr)}</p>
                  </div>

                  <div className="md:col-span-3 p-8 md:p-12">
                    <div className="bg-gray-50 p-6 rounded-xl mb-6 border-l-4 border-red-600">
                      <p className="text-gray-700 italic leading-relaxed">
                        "{t(option.scripture.en, option.scripture.fr)}"
                      </p>
                    </div>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      {t(option.description.en, option.description.fr)}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-8 py-4 bg-gradient-to-r ${option.color} text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-3`}
                    >
                      <CreditCard className="w-5 h-5" />
                      {t('Give Now', 'Donner Maintenant')}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              {t('How to Give', 'Comment Donner')}
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              {...fadeInUp}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border-2 border-blue-100 hover:border-blue-600 transition-all text-center"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">
                {t('Mobile Money', 'Payement Mobile')}
              </h3>
              <p className="text-gray-700 mb-4">
                {t('Send your offering via Mixx by Yas or Flooz', 'Envoyez votre offrande via Mixx par Yas ou Flooz')}
              </p>
              <p className="text-red-600 font-semibold">+228 XX XX XX XX</p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl border-2 border-green-100 hover:border-green-600 transition-all text-center"
            >
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <QrCode className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">
                {t('QR Code', 'Code QR')}
              </h3>
              <p className="text-gray-700 mb-4">
                {t('Scan and give instantly', 'Scannez et donnez instantanément')}
              </p>
              <div className="w-32 h-32 bg-gray-200 mx-auto rounded-lg flex items-center justify-center">
                <QrCode className="w-16 h-16 text-gray-400" />
              </div>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.4 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-xl border-2 border-amber-100 hover:border-amber-600 transition-all text-center"
            >
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">
                {t('In Person', 'En Personne' )}
              </h3>
              <p className="text-gray-700">
                {t(
                  'Give during service or visit our office during the week',
                  'Donnez pendant le service ou visitez notre bureau pendant la semaine'
                )}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security Assurance */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              {t('Safe & Secure', 'Sûr et Sécurisé')}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {t(
                'All online giving is secure and encrypted. Your personal information is protected and we handle every gift with integrity and accountability.',
                'Tous les dons en ligne sont sécurisés et cryptés. Vos informations personnelles sont protégées et nous traitons chaque don avec intégrité et responsabilité.'
              )}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t(
                'For transparency, our financial reports are available upon request. We are committed to being faithful stewards of every gift entrusted to us.',
                'Pour la transparence, nos rapports financiers sont disponibles sur demande. Nous sommes engagés à être des intendants fidèles de chaque don qui nous est confié.'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
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
            {t('Give with Joy', 'Donnez avec Joie')}
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            {t(
              'Your generosity makes a difference in lives and advances God\'s Kingdom',
              'Votre générosité fait une différence dans les vies et fait avancer le Royaume de Dieu'
            )}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-red-600 text-white font-bold text-lg rounded-lg hover:bg-red-700 transition-colors shadow-2xl"
          >
            {t('Give Now', 'Donner Maintenant')}
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}

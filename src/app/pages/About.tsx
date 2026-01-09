import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { Target, Eye, Heart, Award, Users, BookOpen } from 'lucide-react';

export function About() {
  const { t } = useLanguage();

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const coreValues = [
    {
      icon: Heart,
      title: { en: 'Faith', fr: 'Foi' },
      desc: { en: 'We live by faith in God\'s Word', fr: 'Nous vivons par la foi en la Parole de Dieu' }
    },
    {
      icon: Award,
      title: { en: 'Excellence', fr: 'Excellence' },
      desc: { en: 'We pursue excellence in all we do', fr: 'Nous poursuivons l\'excellence dans tout' }
    },
    {
      icon: Users,
      title: { en: 'Love', fr: 'Amour' },
      desc: { en: 'We walk in love towards all', fr: 'Nous marchons dans l\'amour envers tous' }
    },
    {
      icon: BookOpen,
      title: { en: 'Word', fr: 'Parole' },
      desc: { en: 'The Word of God is our foundation', fr: 'La Parole de Dieu est notre fondation' }
    }
  ];

  const leadership = [
    {
      name: 'Bishop David O. OYEDEPO',
      title: { en: 'President and founder', fr: 'Président et fondateur' },
      image: 'src/assets/oyedepo1.png',
      bio: { en: 'Leading Winners Chapel with vision according to the word of God', fr: 'Dirigeant Winners Chapel avec vision et selon la parole de Dieu' }
    },
    {
      name: 'Pastor Mike CHUKWUDI',
      title: { en: 'Resident Pastor', fr: 'Pasteur résident' },
      image: 'src/assets/chukwudi3.png',
      bio: { en: 'He is the resident pastor of Winners Chapel Lome airport', fr: 'Il est le pasteur résident de Winners Chapel Lome airport' }
    }
  ];

  const milestones = [
    { year: '1983', event: { en: 'Church Founded by Bishop David O. OYEDEPO', fr: 'Fondation de l\'Église par le Bishop David O. OYEDEPO' } },
    { year: '2001', event: { en: 'New Building Dedicated', fr: 'Nouveau Bâtiment Dédié' } },
    { year: '2010', event: { en: 'Bible Institute Launched', fr: 'Lancement de l\'Institut Biblique' } },
    { year: '2026', event: { en: 'Serving 5000+ Members', fr: 'Service à plus de 5000 membres' } }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1667068114532-97a1ce6d0a52)',
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
            {t('About Us', 'À Propos de nous')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            {t('Knowing the church and it purpose', 'Connaitre l\'église et son but')}
          </p>
        </motion.div>
      </motion.section>

      {/* Mandate */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-black">{t('Our Mandate', 'Notre Mandat')}</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t(
                  'Our Mandate speaks of liberation in all facets of human existence, we focus mainly on destinies that have been afflicted, battered, beaten, tattered, deformed and subsequently in groaning and agonies, as a result of pains, pangs and crying. This is the mandate. The hour has come to liberate the world from all oppression of the devil through the preaching of the word of faith, and I am sending you to undertake this task.” Today, testimonies of liberation through our messages, books, tapes, magazines and other periodicals are most humbling. The word of faith is working like fire for the liberation of mankind across the nations.',
                  'Notre mandat parle de la libération dans toutes les dimensions de l\'existence humaine. Nous nous concentrons principalement sur des destinées qui ont été affligées, malmenées, brisées, déchirées, déformées et qui, par conséquent, gémissent et souffrent dans les douleurs et les tourments, au milieu des cris et des larmes. Tel est le mandat.L\'heure est venue de libérer le monde de toute oppression du diable par la prédication de la Parole de la foi, et je t\'envoie pour accomplir cette mission.Aujourd\'hui, les témoignages de libération issus de nos messages, livres, cassettes, magazines et autres publications sont profondément édifiants et empreints d\'humilité. La Parole de la foi agit comme un feu pour la libération de l\'humanité à travers les nations.'
                )}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t(
                  'Through sound biblical teaching, fervent worship, and practical discipleship, we equip believers to live victoriously and fulfill their divine purpose.',
                  'Par un enseignement biblique solide, une adoration fervente et un discipulat pratique, nous équipons les croyants pour vivre victorieusement et accomplir leur but divin.'
                )}
              </p>
            </motion.div>
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="relative h-96 rounded-xl overflow-hidden shadow-2xl"
            >
              <img
                src="src/assets/oyedepo3.png"
                alt="Mission"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              {...fadeInUp}
              className="order-2 md:order-1 relative h-96 rounded-xl overflow-hidden shadow-2xl"
            >
              <img
                src="src/assets/vision1.jpg"
                alt="Vision"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="order-1 md:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-black">{t('Our Vision', 'Notre Vision')}</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t(
                  'When Bishop David Oyedepo founded Living Faith Church Worldwide in 1981, he initially saw his mandate as more of an outreach ministry rather than establishing new churches. At the time, church planting was not a priority. The focus was on seeking revival in existing churches. Also, the mandate he received did not specifically mention starting a new church. Bishop Oyedepo thought the calling was for outreach, reasoning that there were enough churches already. However, one morning the Lord spoke to Bishop Oyedepo through Luke chapter one, verses 1-3, impressing upon him that while many churches existed, God was giving him a portion of the church ministry to fulfill. “I also…” became a marching order to launch church plants as his part in the wider body of Christ. What began as outreach became a church ministry that has grown into a global phenomenon under Bishop Oyedepo\'s leadership.',
                  'Lorsque l\'Évêque David Oyedepo a fondé Living Faith Church Worldwide en 1981, il considérait au départ son mandat davantage comme un ministère d\'évangélisation que comme une œuvre de création d\'églises. À cette époque, l\'implantation d\'églises n\'était pas une priorité. L\'accent était mis sur la recherche du réveil au sein des églises existantes. De plus, le mandat qu\'il avait reçu ne mentionnait pas spécifiquement la création d\'une nouvelle église. L\'Évêque Oyedepo pensait donc que l\'appel concernait l\'évangélisation, estimant qu\'il y avait déjà suffisamment d\'églises.Cependant, un matin, le Seigneur parla à l\'Évêque Oyedepo à travers Luc chapitre 1, versets 1 à 3, lui faisant comprendre que, bien que de nombreuses églises existent, Dieu lui confiait une part spécifique du ministère de l\'Église à accomplir. L\'expression « Moi aussi… » devint alors un ordre de marche pour lancer l\'implantation d\'églises comme sa contribution au sein du corps plus large de Christ.Ce qui avait commencé comme une œuvre d\'évangélisation est devenu un ministère d\'église qui s\'est développé pour devenir un phénomène mondial sous le leadership de l\'Évêque Oyedepo. '
                )}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t(
                  'Living Faith Church Worldwide serves as the fulfillment of the God-given mandate to plant Life-changing churches that minister to needs across the world. To God alone be the glory!',
                  'Living Faith Church Worldwide constitue l\'accomplissement du mandat divin consistant à implanter des églises qui transforment des vies et répondent aux besoins à travers le monde.À Dieu seul soit toute la gloire !'
                )}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              {t('The pillars of the commission', 'Les pilliers de la commission')}
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl text-center border-2 border-red-100 hover:border-red-600 transition-all hover:shadow-xl"
              >
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">{t(value.title.en, value.title.fr)}</h3>
                <p className="text-gray-700">{t(value.desc.en, value.desc.fr)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              {t('Our Leadership', 'Notre Direction')}
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <div className="h-80 overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-black mb-2">{leader.name}</h3>
                  <p className="text-red-600 font-semibold mb-4">{t(leader.title.en, leader.title.fr)}</p>
                  <p className="text-gray-700">{t(leader.bio.en, leader.bio.fr)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              {t('Our Journey', 'Notre Parcours')}
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.2 }}
                className="flex gap-8 mb-12 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {milestone.year}
                  </div>
                  {index !== milestones.length - 1 && (
                    <div className="w-1 flex-1 bg-red-200 mt-4"></div>
                  )}
                </div>
                <div className="flex-1 pb-12">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-black">{t(milestone.event.en, milestone.event.fr)}</h3>
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

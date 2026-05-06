import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';
import { Heart, Send, CheckCircle } from 'lucide-react';

export function Testimonies() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', category: 'healing', testimony: '' });

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const testimonials = [
    {
      name: 'Marie K.',
      category: { en: 'Healing', fr: 'Guérison' },
      text: {
        en: 'After years of illness, God healed me completely through the prayers of this church. I am forever grateful to Winners Chapel Lomé!',
        fr: "Après des années de maladie, Dieu m'a totalement guérie grâce aux prières de cette église. Je suis à jamais reconnaissante envers Winners Chapel Lomé!"
      },
      color: 'border-red-600'
    },
    {
      name: 'Jean-Paul A.',
      category: { en: 'Financial Breakthrough', fr: 'Percée Financière' },
      text: {
        en: 'I was drowning in debt. After joining Winners Chapel and applying biblical principles of giving, God turned my finances around in 6 months!',
        fr: "Je me noyais dans les dettes. Après avoir rejoint Winners Chapel et appliqué les principes bibliques du don, Dieu a transformé mes finances en 6 mois!"
      },
      color: 'border-blue-600'
    },
    {
      name: 'Esther M.',
      category: { en: 'Salvation', fr: 'Salut' },
      text: {
        en: "I came to Winners Chapel lost and broken. Today I have found purpose, peace, and a community that truly loves me. Thank God for this church!",
        fr: "Je suis arrivée à Winners Chapel perdue et brisée. Aujourd'hui, j'ai trouvé un but, la paix et une communauté qui m'aime vraiment. Merci à Dieu pour cette église!"
      },
      color: 'border-green-600'
    },
    {
      name: 'Kofi B.',
      category: { en: 'Employment', fr: 'Emploi' },
      text: {
        en: "After 2 years of unemployment, I sowed a seed in faith at Winners Chapel. Within 3 weeks I received two job offers. God is faithful!",
        fr: "Après 2 ans de chômage, j'ai semé une semence dans la foi à Winners Chapel. En 3 semaines, j'ai reçu deux offres d'emploi. Dieu est fidèle!"
      },
      color: 'border-purple-600'
    },
    {
      name: 'Ama D.',
      category: { en: 'Family Restoration', fr: 'Restauration Familiale' },
      text: {
        en: 'My marriage was on the verge of collapse. Through counseling and prayer here at Winners Chapel, God restored our family completely!',
        fr: "Mon mariage était sur le point de s'effondrer. Grâce au conseil et à la prière ici à Winners Chapel, Dieu a complètement restauré notre famille!"
      },
      color: 'border-amber-600'
    },
    {
      name: 'Yao F.',
      category: { en: 'Academic Success', fr: 'Réussite Académique' },
      text: {
        en: 'I had failed my exams three times. After enrolling in WOFBI and receiving prayer, I passed with distinction. God is great!',
        fr: "J'avais échoué mes examens trois fois. Après m'être inscrit au IBPF et avoir reçu la prière, j'ai réussi avec mention. Dieu est grand!"
      },
      color: 'border-teal-600'
    },
  ];

  const categories = [
    { value: 'healing', label: { en: 'Healing', fr: 'Guérison' } },
    { value: 'financial', label: { en: 'Financial Breakthrough', fr: 'Percée Financière' } },
    { value: 'salvation', label: { en: 'Salvation', fr: 'Salut' } },
    { value: 'family', label: { en: 'Family Restoration', fr: 'Restauration Familiale' } },
    { value: 'employment', label: { en: 'Employment', fr: 'Emploi' } },
    { value: 'other', label: { en: 'Other', fr: 'Autre' } },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
        <div className="absolute inset-0 bg-black/65" />
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            {t('Testimonies', 'Témoignages')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            {t('Real stories of God\'s faithfulness', "De vraies histoires de la fidélité de Dieu")}
          </p>
        </motion.div>
      </motion.section>

      {/* Testimonies Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              {t('What God Has Done', 'Ce Que Dieu a Fait')}
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6" />
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('Lives transformed by the power of God\'s Word', 'Des vies transformées par la puissance de la Parole de Dieu')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`bg-white p-8 rounded-2xl shadow-lg border-t-4 ${item.color} hover:shadow-2xl transition-all`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold text-gray-600">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-black">{item.name}</h4>
                    <span className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-0.5 rounded-full">
                      {t(item.category.en, item.category.fr)}
                    </span>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Heart key={i} className="w-4 h-4 text-red-600 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic leading-relaxed">
                  "{t(item.text.en, item.text.fr)}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Testimony Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">{t('Share Your Testimony', 'Partagez Votre Témoignage')}</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6" />
            <p className="text-gray-600">
              {t(
                'Your testimony can inspire and encourage others in their faith journey.',
                "Votre témoignage peut inspirer et encourager les autres dans leur parcours de foi."
              )}
            </p>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-green-50 border-2 border-green-600 rounded-2xl p-12 text-center"
            >
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-black mb-2">{t('Thank You!', 'Merci!')}</h3>
              <p className="text-gray-700">
                {t(
                  'Your testimony has been received. God bless you!',
                  "Votre témoignage a bien été reçu. Que Dieu vous bénisse!"
                )}
              </p>
            </motion.div>
          ) : (
            <motion.form {...fadeInUp} onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t('Your Name', 'Votre Nom')}</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-red-600 focus:outline-none transition-colors"
                  placeholder={t('Jean Dupont', 'Jean Dupont')}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t('Category', 'Catégorie')}</label>
                <select
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-red-600 focus:outline-none transition-colors"
                >
                  {categories.map((cat) => (
                    <option key={cat.value} value={cat.value}>{t(cat.label.en, cat.label.fr)}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t('Your Testimony', 'Votre Témoignage')}</label>
                <textarea
                  required
                  rows={6}
                  value={form.testimony}
                  onChange={(e) => setForm({ ...form, testimony: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-red-600 focus:outline-none transition-colors resize-none"
                  placeholder={t('Share what God has done for you...', 'Partagez ce que Dieu a fait pour vous...')}
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-3"
              >
                <Send className="w-5 h-5" />
                {t('Submit Testimony', 'Soumettre le Témoignage')}
              </motion.button>
            </motion.form>
          )}
        </div>
      </section>
    </div>
  );
}

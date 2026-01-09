import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, MessageCircle, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    type: 'general'
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert(t('Thank you! We will contact you soon.', 'Merci! Nous vous contacterons bientôt.'));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: { en: 'Location', fr: 'Localisation' },
      content: { en: 'Lomé, airport road just after ASECNA', fr: 'Lomé, route de l\'aéroport juste après ASECNA' }
    },
    {
      icon: Phone,
      title: { en: 'Phone', fr: 'Téléphone' },
      content: { en: '+228 XX XX XX XX', fr: '+228 XX XX XX XX' }
    },
    {
      icon: Mail,
      title: { en: 'Email', fr: 'Email' },
      content: { en: 'info@winnerschapel-lome.org', fr: 'info@winnerschapel-lome.org' }
    },
    {
      icon: Clock,
      title: { en: 'Office Hours', fr: 'Heures de Bureau' },
      content: { en: 'Mon-Fri: 7:00 AM - 5:00 PM', fr: 'Lun-Ven: 7h00 - 17h00' }
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
          backgroundImage: 'url(https://images.unsplash.com/photo-1708267062168-38fdffccde95)',
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
            {t('Contact Us', 'Contactez-Nous')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            {t('We\'d love to hear from you', 'Nous aimerions avoir de vos nouvelles')}
          </p>
        </motion.div>
      </motion.section>

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl text-center border-2 border-red-100 hover:border-red-600 transition-all"
              >
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{t(info.title.en, info.title.fr)}</h3>
                <p className="text-gray-700">{t(info.content.en, info.content.fr)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl font-bold text-black mb-6">
                {t('Send us a Message', 'Envoyez-nous un Message')}
              </h2>
              <p className="text-gray-700 mb-8">
                {t(
                  'Fill out the form below and we\'ll get back to you as soon as possible.',
                  'Remplissez le formulaire ci-dessous et nous vous répondrons dès que possible.'
                )}
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('Full Name', 'Nom Complet')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-red-600 focus:outline-none transition-colors"
                    placeholder={t('John Doe', 'Jean Dupont')}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('Email', 'Email')}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-red-600 focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('Phone', 'Téléphone')}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-red-600 focus:outline-none transition-colors"
                      placeholder="+228 XX XX XX XX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('Subject', 'Sujet')}
                  </label>
                  <select
                    title='type'
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-red-600 focus:outline-none transition-colors"
                  >
                    <option value="general">{t('General Inquiry', 'Question Générale')}</option>
                    <option value="prayer">{t('Prayer Request', 'Demande de Prière')}</option>
                    <option value="counseling">{t('Counseling', 'Conseil')}</option>
                    <option value="ministry">{t('Ministry Inquiry', 'Question sur le Ministère')}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('Message', 'Message')}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-red-600 focus:outline-none transition-colors resize-none"
                    placeholder={t('Your message here...', 'Votre message ici...')}
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-8 py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-3"
                >
                  <Send className="w-5 h-5" />
                  {t('Send Message', 'Envoyer le Message')}
                </motion.button>
              </form>
            </motion.div>

            {/* Map & Social */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-black mb-6">
                  {t('Find Us', 'Nous Trouver')}
                </h3>
                <div className="h-96 bg-gray-200 rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.668!2d1.225!3d6.133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMDcnNTguOCJOIDHCsDEzJzMwLjAiRQ!5e0!3m2!1sen!2stg!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-6">
                  {t('Connect With Us', 'Connectez-vous avec Nous')}
                </h3>
                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://facebook.com/Winnerschapeltogo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors"
                  >
                    <Facebook className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://www.instagram.com/winnerschapeltogo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://wa.me/228XXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors"
                  >
                    <MessageCircle className="w-6 h-6" />
                  </motion.a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl border-2 border-red-100">
                <h4 className="text-xl font-bold text-black mb-4">
                  {t('Prayer Request', 'Demande de Prière')}
                </h4>
                <p className="text-gray-700 mb-4">
                  {t(
                    'Need prayer? Submit your request and our prayer team will intercede for you.',
                    'Besoin de prière? Soumettez votre demande et notre équipe de prière intercédera pour vous.'
                  )}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
                >
                  {t('Submit Prayer Request', 'Soumettre une Demande')}
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Times CTA */}
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
            {t('Visit Us This Sunday', 'Visitez-nous ce Dimanche')}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-2">{t('First Service', 'Premier Culte')}</h3>
              <p className="text-xl">6:30 AM - 8:30 AM</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-2">{t('Second Service', 'Deuxième Culte')}</h3>
              <p className="text-xl">8:35 AM - 10:35 PM</p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

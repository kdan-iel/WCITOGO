import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin, MessageCircle, Youtube } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { path: '/', label: { en: 'Home', fr: 'Accueil' } },
    { path: '/about', label: { en: 'About', fr: 'À Propos' } },
    { path: '/services', label: { en: 'Services', fr: 'Services' } },
    { path: '/ministries', label: { en: 'Ministries', fr: 'Ministères' } },
    { path: '/events', label: { en: 'Events', fr: 'Événements' } },
    { path: '/media', label: { en: 'Media', fr: 'Média' } },
    { path: '/testimonies', label: { en: 'Testimonies', fr: 'Témoignages' } },
    { path: '/give', label: { en: 'Give', fr: 'Don' } },
    { path: '/contact', label: { en: 'Contact', fr: 'Contact' } },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo & Description */}
          <div className="space-y-4">
            <img src="/assets/logo.png" alt="Winners Chapel Lomé" className="h-16 w-auto" />
            <p className="text-gray-400 text-sm leading-relaxed">
              {t(
                'A living church where faith, hope, and love come alive. Join us as we worship together.',
                "Une église vivante où la foi, l'espérance et l'amour prennent vie. Rejoignez-nous pour adorer ensemble."
              )}
            </p>
            <div className="flex space-x-3 pt-2">
              <a href="https://facebook.com/Winnerschapeltogo" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-red-600 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/winnerschapeltogo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-red-600 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@winnerschapeltogo" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-red-600 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://wa.me/228XXXXXXXX" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-red-600 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-5 text-red-500">{t('Quick Links', 'Liens Rapides')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {t(link.label.en, link.label.fr)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-5 text-red-500">{t('Contact Us', 'Contactez-Nous')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm">
                <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  {t('Airport Road, just after ASECNA', "Route de l'Aéroport, juste après ASECNA")}<br />
                  Lomé, Togo
                </span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
                <a href="tel:+228XXXXXXXX" className="text-gray-400 hover:text-white transition-colors">+228 XX XX XX XX</a>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
                <a href="mailto:info@winnerschapel-lome.org" className="text-gray-400 hover:text-white transition-colors">
                  info@winnerschapel-lome.org
                </a>
              </li>
            </ul>
          </div>

          {/* Service Times + Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-5 text-red-500">{t('Service Times', 'Horaires des Cultes')}</h3>
            <div className="space-y-3 text-sm text-gray-400 mb-6">
              <div className="bg-gray-900 rounded-lg p-3">
                <p className="text-white font-semibold">{t('Sunday', 'Dimanche')}</p>
                <p>6:30 AM &amp; 8:35 AM</p>
              </div>
              <div className="bg-gray-900 rounded-lg p-3">
                <p className="text-white font-semibold">{t('Wednesday', 'Mercredi')}</p>
                <p>6:00 PM</p>
              </div>
              <div className="bg-gray-900 rounded-lg p-3">
                <p className="text-white font-semibold">{t('Daily Prayer', 'Prière Quotidienne')}</p>
                <p>5:30 AM – 6:30 AM</p>
              </div>
            </div>
            {/* Newsletter */}
            <p className="text-xs text-gray-500 mb-2">{t('Subscribe to our newsletter', 'Abonnez-vous à notre newsletter')}</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder={t('Your email', 'Votre email')}
                className="flex-1 px-3 py-2 text-sm bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-600"
              />
              <button className="px-3 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium">
                OK
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Winners Chapel Lomé. {t('All rights reserved.', 'Tous droits réservés.')}</p>
          <p className="text-gray-600">{t('Living Faith Church International', 'Eglise de la Foi Vivante Internationale')}</p>
        </div>
      </div>
    </footer>
  );
}

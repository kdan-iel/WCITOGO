import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import logo from '@/assets/logo.png';

export function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { path: '/', label: { en: 'Home', fr: 'Accueil' } },
    { path: '/about', label: { en: 'About', fr: 'À Propos' } },
    { path: '/services', label: { en: 'Services', fr: 'Services' } },
    { path: '/ministries', label: { en: 'Ministries', fr: 'Ministères' } },
    { path: '/media', label: { en: 'Media', fr: 'Média' } },
    { path: '/give', label: { en: 'Give', fr: 'Don' } }
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <img src={logo} alt="Winners Chapel Lomé" className="h-16 w-auto" />
            <p className="text-gray-400 text-sm leading-relaxed">
              {t(
                'A living church where faith, hope, and love come alive. Join us as we worship together.',
                'Une église vivante où la foi, l\'espérance et l\'amour prennent vie. Rejoignez-nous pour adorer ensemble.'
              )}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-red-500">
              {t('Quick Links', 'Liens Rapides')}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {t(link.label.en, link.label.fr)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-red-500">
              {t('Contact Us', 'Contactez-Nous')}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Lomé, Togo<br />
                  {t('Airport Road just after ASECNA', 'Route de l\'Aéroport juste après ASECNA')}
                </span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-gray-400">+228 XX XX XX XX</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-gray-400">info@winnerschapel-lome.org</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-red-500">
              {t('Follow Us', 'Suivez-Nous')}
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/Winnerschapeltogo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-red-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/winnerschapeltogo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-red-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/228XXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-red-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">
                {t('Service Times', 'Horaires des Cultes')}
              </h4>
              <p className="text-gray-400 text-sm">
                {t('Sunday: 6:30 AM & 8:35 AM', 'Dimanche: 6h30 & 8h35')}<br />
                {t('Wednesday: 6:00 PM', 'Mercredi: 18h00')}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Winners Chapel Lomé. {t('All rights reserved.', 'Tous droits réservés.')}</p>
        </div>
      </div>
    </footer>
  );
}

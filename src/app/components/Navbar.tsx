import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Languages, Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  const navLinks = [
    { path: '/', label: { en: 'Home', fr: 'Accueil' } },
    { path: '/about', label: { en: 'About', fr: 'À Propos' } },
    { path: '/services', label: { en: 'Services', fr: 'Services' } },
    {
      path: '/ministries',
      label: { en: 'Ministries', fr: 'Ministères' },
      submenu: [
        { path: '/ministries', label: { en: 'All Ministries', fr: 'Tous les Ministères' } },
        { path: '/ministries#children', label: { en: 'Children Ministry', fr: 'Ministère Enfants' } },
        { path: '/ministries#youth', label: { en: 'Youth Alive', fr: 'Jeunesse Vivante' } },
        { path: '/ministries#wofbi', label: { en: 'WOFBI', fr: 'IBPF' } },
      ]
    },
    { path: '/events', label: { en: 'Events', fr: 'Événements' } },
    { path: '/media', label: { en: 'Media', fr: 'Média' } },
    { path: '/testimonies', label: { en: 'Testimonies', fr: 'Témoignages' } },
    { path: '/give', label: { en: 'Give', fr: 'Don' } },
    { path: '/contact', label: { en: 'Contact', fr: 'Contact' } },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/assets/logo.png"
              alt="Winners Chapel Lomé"
              className="h-14 w-auto"
            />
            <div className="hidden md:block">
              <div className="font-bold text-lg text-black leading-tight">Winners Chapel</div>
              <div className="text-sm text-gray-600">Lomé, Togo</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <div
                  key={link.path}
                  className="relative"
                  onMouseEnter={() => link.submenu && setOpenDropdown(link.path)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    to={link.path}
                    className="relative px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1"
                  >
                    <span className={isActive ? 'text-red-600' : 'text-gray-700 hover:text-red-600'}>
                      {t(link.label.en, link.label.fr)}
                    </span>
                    {link.submenu && <ChevronDown className="w-3 h-3 text-gray-500" />}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {link.submenu && openDropdown === link.path && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50"
                      >
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.path}
                            to={sub.path}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors border-b border-gray-100 last:border-0"
                          >
                            {t(sub.label.en, sub.label.fr)}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right actions */}
          <div className="flex items-center space-x-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
            >
              <Languages className="w-4 h-4" />
              <span>{language.toUpperCase()}</span>
            </motion.button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <div key={link.path}>
                    <Link
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-lg transition-colors font-medium ${
                        isActive ? 'bg-red-50 text-red-600' : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {t(link.label.en, link.label.fr)}
                    </Link>
                    {link.submenu && (
                      <div className="ml-4 mt-1 space-y-1">
                        {link.submenu.slice(1).map((sub) => (
                          <Link
                            key={sub.path}
                            to={sub.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-red-600 rounded-lg hover:bg-gray-50"
                          >
                            {t(sub.label.en, sub.label.fr)}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

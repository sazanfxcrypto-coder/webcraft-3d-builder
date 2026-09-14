'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export function Navigation() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  const links = [
    { href: '#services', label: t('nav.services') },
    { href: '#portfolio', label: t('nav.portfolio') },
    { href: '#process', label: t('nav.process') },
    { href: '#faq', label: t('nav.faq') },
    { href: '#contact', label: t('nav.contact') },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled ? 'bg-dark-bg/80 backdrop-blur-xl border-b border-dark-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-black bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent"
        >
          WebCraft
        </motion.a>

        <ul className="hidden md:flex gap-8 list-none">
          {links.map((item) => (
            <li key={item.href}>
              <motion.a
                href={item.href}
                whileHover={{ y: -2 }}
                className="text-gray-400 hover:text-white transition text-sm font-medium"
              >
                {item.label}
              </motion.a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="px-3 py-1 text-xs font-bold border border-dark-border rounded-lg hover:border-accent-primary transition uppercase"
          >
            {i18n.language}
          </button>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="hidden md:inline-block px-6 py-2.5 bg-gradient-to-r from-accent-primary to-accent-secondary text-white rounded-lg font-semibold text-sm"
          >
            {t('nav.cta')}
          </motion.a>
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-dark-card border-t border-dark-border"
        >
          <ul className="p-6 flex flex-col gap-4 list-none">
            {links.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setMenuOpen(false)} className="text-gray-400 hover:text-white transition">
                  {item.label}
                </a>
              </li>
            ))}
            <a href="#contact" className="block px-6 py-2.5 bg-gradient-to-r from-accent-primary to-accent-secondary text-white rounded-lg font-semibold text-sm text-center mt-4">
              {t('nav.cta')}
            </a>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}

'use client';

import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-dark-border py-12 bg-dark-card">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Main content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-black bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent mb-2">
                WebCraft
              </h3>
              <p className="text-gray-400 text-sm">Создание высокопроизводительных сайтов под ключ</p>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#services" className="hover:text-white transition">Услуги</a></li>
                <li><a href="#portfolio" className="hover:text-white transition">Портфолио</a></li>
                <li><a href="#process" className="hover:text-white transition">Процесс</a></li>
                <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>

            {/* Social & contact */}
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>📧 <a href="mailto:info@webcraft.by" className="hover:text-white transition">info@webcraft.by</a></p>
                <p>💬 <a href="https://t.me/sazanfxcrypto" className="hover:text-white transition" target="_blank" rel="noopener noreferrer">Telegram</a></p>
                <p>🔗 <a href="https://github.com/sazanfxcrypto-coder" className="hover:text-white transition" target="_blank" rel="noopener noreferrer">GitHub</a></p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-dark-border" />

          {/* Copyright */}
          <div className="text-center text-gray-500 text-sm">
            <p>© {currentYear} WebCraft. {t('footer.rights')} Все права защищены.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

// Временный импорт для исправления ошибки
const t = (key: string) => key;

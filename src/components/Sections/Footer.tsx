'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

const socials = [
  { name: 'Telegram', url: 'https://t.me/sazanfxcrypto' },
  { name: 'Instagram', url: 'https://instagram.com/webcraft.io' },
  { name: 'LinkedIn', url: 'https://linkedin.com/company/webcraft' },
  { name: 'GitHub', url: 'https://github.com/sazanfxcrypto-coder' },
];

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-dark-border py-12 bg-dark-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex gap-6 justify-center mb-6 flex-wrap">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent-secondary transition"
            >
              {social.name}
            </a>
          ))}
        </div>
        <p className="text-center text-gray-500 text-sm">
          {t('footer.copyright')}
        </p>
      </div>
    </footer>
  );
}

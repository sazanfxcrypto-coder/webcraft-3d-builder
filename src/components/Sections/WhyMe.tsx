'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const reasons = [
  { emoji: '⚡', key: 'fast' },
  { emoji: '💎', key: 'quality' },
  { emoji: '🌍', key: 'niche' },
  { emoji: '🤝', key: 'support' },
  { emoji: '💬', key: 'chat' },
  { emoji: '💰', key: 'price' },
];

export function WhyMe() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-dark-bg">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black mb-4">{t('why.title')}</h2>
          <p className="text-gray-400 text-lg">{t('why.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, idx) => (
            <motion.div
              key={reason.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-dark-card border border-dark-border rounded-2xl p-8"
            >
              <div className="text-5xl mb-4">{reason.emoji}</div>
              <h3 className="text-xl font-bold mb-2">{t(`why.${reason.key}`)}</h3>
              <p className="text-gray-400">{t(`why.${reason.key}Desc`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

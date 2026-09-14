'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const features = [
  { key: 'fast', emoji: '⚡', color: 'from-blue-500 to-cyan-500' },
  { key: 'quality', emoji: '💎', color: 'from-purple-500 to-pink-500' },
  { key: 'niche', emoji: '🌐', color: 'from-green-500 to-emerald-500' },
  { key: 'support', emoji: '🤝', color: 'from-orange-500 to-red-500' },
  { key: 'contact', emoji: '💬', color: 'from-indigo-500 to-blue-500' },
  { key: 'price', emoji: '💰', color: 'from-green-400 to-blue-400' },
];

export function WhyMe() {
  const { t } = useTranslation();

  return (
    <section id="why" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">{t('why.title')}</h2>
          <p className="text-gray-400 text-lg">{t('why.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-dark-card border border-dark-border rounded-2xl p-8 overflow-hidden hover:border-accent-primary/50 transition-all"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${feature.color} transition-opacity`} />
              <div className="relative z-10">
                <div className="text-5xl mb-4">{feature.emoji}</div>
                <h3 className="text-xl font-bold mb-2">{t(`why.items.${feature.key}.title`)}</h3>
                <p className="text-gray-400 text-sm">{t(`why.items.${feature.key}.desc`)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

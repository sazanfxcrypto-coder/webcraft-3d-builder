'use client';

import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const faqData = [
  { key: 'price' },
  { key: 'time' },
  { key: 'abroad' },
  { key: 'start' },
  { key: 'guarantee' },
];

export function FAQ() {
  const { t } = useTranslation();
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-dark-bg-2">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">{t('faq.title')}</h2>
        </motion.div>

        <div className="space-y-4">
          {faqData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-dark-card border border-dark-border rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-6 py-4 flex justify-between items-center hover:bg-dark-bg/50 transition font-bold text-lg text-left"
              >
                <span>{t(`faq.items.${item.key}.q`)}</span>
                <motion.span
                  animate={{ rotate: openIdx === idx ? 180 : 0 }}
                  className="text-accent-secondary text-2xl"
                >
                  ▼
                </motion.span>
              </button>

              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-400 border-t border-dark-border pt-4">
                      {t(`faq.items.${item.key}.a`)}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

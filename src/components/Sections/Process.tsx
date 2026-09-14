'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const steps = [
  { num: 1, key: 'step1' },
  { num: 2, key: 'step2' },
  { num: 3, key: 'step3' },
  { num: 4, key: 'step4' },
  { num: 5, key: 'step5' },
];

export function Process() {
  const { t } = useTranslation();

  return (
    <section id="process" className="py-24 bg-dark-bg">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black mb-4">{t('process.title')}</h2>
          <p className="text-gray-400 text-lg">{t('process.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-dark-card border border-dark-border rounded-2xl p-6 text-center relative"
            >
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 text-2xl text-accent-primary">
                  →
                </div>
              )}
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary flex items-center justify-center font-black text-white">
                {step.num}
              </div>
              <h3 className="text-lg font-bold mb-2">{t(`process.${step.key}`)}</h3>
              <p className="text-gray-400 text-sm">{t(`process.${step.key}Desc`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

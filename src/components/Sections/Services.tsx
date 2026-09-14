'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const serviceIcons = ['⚡', '🏢', '🛒', '🔗', '🍽', '🎨'];
const serviceKeys = ['landing', 'corporate', 'ecommerce', 'web3', 'restaurant', 'design'];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
  hover: {
    y: -8,
    transition: { duration: 0.3 },
  },
};

export function Services() {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-24 bg-dark-bg">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black mb-4">{t('services.title')}</h2>
          <p className="text-gray-400 text-lg">{t('services.subtitle')}</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {serviceKeys.map((key, idx) => {
            const service = t(`services.${key}`) as any;
            return (
              <motion.div
                key={key}
                variants={cardVariants}
                whileHover="hover"
                className="bg-dark-card border border-dark-border rounded-2xl p-8 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />

                <div className="text-5xl mb-4">{serviceIcons[idx]}</div>
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.desc}</p>
                <div className="text-accent-secondary font-bold text-sm">{service.price}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

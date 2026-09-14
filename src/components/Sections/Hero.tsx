'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Hero3D } from '@/components/3D/Hero3D';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent-primary/10 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-accent-primary/15 border border-accent-primary/40 text-accent-secondary text-sm font-semibold">
              {t('hero.badge')}
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            {t('hero.title')} <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">{t('hero.titleGradient')}</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
            {t('hero.description')}
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-4 justify-center flex-wrap">
            <a href="#contact" className="px-8 py-3 bg-gradient-to-r from-accent-primary to-accent-secondary text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-accent-primary/50 transition">
              {t('hero.cta')}
            </a>
            <a href="#portfolio" className="px-8 py-3 border border-dark-border text-white rounded-lg font-semibold hover:border-accent-primary transition">
              {t('hero.ctaSecondary')}
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-16 mb-12">
            <Hero3D />
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-12 justify-center flex-wrap">
            {[
              { value: t('stats.projectsValue'), label: t('stats.projects') },
              { value: t('stats.daysValue'), label: t('stats.days') },
              { value: t('stats.clientsValue'), label: t('stats.clients') },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-black text-accent-secondary">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

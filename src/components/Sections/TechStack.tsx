'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const technologies = [
  'HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Node.js',
  'Python', 'WordPress', 'Tailwind', 'Solidity', 'Web3.js', 'PostgreSQL',
  'MongoDB', 'Figma', 'TypeScript', 'GraphQL', 'Docker', 'AWS'
];

export function TechStack() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-dark-bg-2">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black mb-4">{t('tech.title')}</h2>
          <p className="text-gray-400 text-lg">{t('tech.subtitle')}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-4 justify-center"
        >
          {technologies.map((tech, idx) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="px-6 py-3 bg-dark-card border border-dark-border rounded-lg font-semibold hover:border-accent-primary hover:text-accent-secondary transition"
            >
              {tech}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

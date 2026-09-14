'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const techCategories = [
  {
    title: 'Frontend',
    techs: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
  },
  {
    title: 'Backend',
    techs: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL'],
  },
  {
    title: 'Web3/Blockchain',
    techs: ['Solidity', 'Web3.js', 'Ethers.js', 'Smart Contracts', 'IPFS'],
  },
  {
    title: 'Tools & Services',
    techs: ['Figma', 'Docker', 'AWS', 'Vercel', 'Git'],
  },
];

export function TechStack() {
  const { t } = useTranslation();

  return (
    <section id="tech" className="py-24 bg-dark-bg-2">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">{t('tech.title')}</h2>
          <p className="text-gray-400 text-lg">{t('tech.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-dark-card border border-dark-border rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold mb-6 text-accent-secondary">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.techs.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 bg-dark-bg border border-dark-border rounded-lg text-sm font-medium hover:border-accent-primary transition cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

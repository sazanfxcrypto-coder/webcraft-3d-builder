'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const portfolioItems = [
  { icon: 'DeFi', gradient: 'from-accent-primary to-accent-secondary', title: 'DeFi Dashboard', desc: 'Web app for staking and token analytics', tags: ['React', 'Solidity', 'Web3'] },
  { icon: '🍕', gradient: 'from-orange-500 to-red-500', title: 'Restaurant Fire', desc: 'Menu, delivery and online booking', tags: ['Next.js', 'Strapi'] },
  { icon: '🛒', gradient: 'from-green-500 to-teal-500', title: 'ShopMarket', desc: 'Electronics e-commerce store', tags: ['E-commerce', 'Node.js'] },
  { icon: '🏗', gradient: 'from-orange-400 to-yellow-400', title: 'StroyPro', desc: 'Construction company site', tags: ['WordPress', 'SEO'] },
  { icon: 'NFT', gradient: 'from-purple-500 to-accent-primary', title: 'NFT Marketplace', desc: 'Digital art trading platform', tags: ['Web3', 'IPFS'] },
  { icon: '💼', gradient: 'from-blue-500 to-cyan-500', title: 'Agency Landing', desc: 'Marketing agency landing page', tags: ['HTML', 'GSAP'] },
];

export function Portfolio() {
  const { t } = useTranslation();

  return (
    <section id="portfolio" className="py-24 bg-dark-bg-2">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black mb-4">{t('portfolio.title')}</h2>
          <p className="text-gray-400 text-lg">{t('portfolio.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-dark-card border border-dark-border rounded-2xl overflow-hidden hover:border-accent-secondary transition"
            >
              <div className={`h-48 bg-gradient-to-r ${item.gradient} flex items-center justify-center text-5xl font-black text-white`}>
                {item.icon}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{item.desc}</p>
                <div className="flex gap-2 flex-wrap">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 bg-accent-primary/15 text-accent-secondary rounded-full border border-accent-primary/30">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

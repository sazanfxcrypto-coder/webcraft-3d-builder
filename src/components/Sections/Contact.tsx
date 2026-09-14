'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const projectTypes = ['landing', 'corporate', 'ecommerce', 'web3', 'restaurant', 'other'];

export function Contact() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', projectType: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-dark-bg">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border border-dark-border rounded-3xl p-12 text-center"
        >
          <h2 className="text-4xl font-black mb-4">{t('contact.title')}</h2>
          <p className="text-gray-400 mb-12">{t('contact.subtitle')}</p>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
            <input
              type="text"
              placeholder={t('contact.name')}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full px-4 py-3 bg-dark-bg-2 border border-dark-border rounded-lg text-white placeholder-gray-500 focus:border-accent-primary focus:outline-none transition"
            />
            <input
              type="email"
              placeholder={t('contact.email')}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full px-4 py-3 bg-dark-bg-2 border border-dark-border rounded-lg text-white placeholder-gray-500 focus:border-accent-primary focus:outline-none transition"
            />
            <select
              value={formData.projectType}
              onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
              required
              className="w-full px-4 py-3 bg-dark-bg-2 border border-dark-border rounded-lg text-white focus:border-accent-primary focus:outline-none transition"
            >
              <option value="">{t('contact.projectType')}</option>
              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {t(`services.${type}.name`)}
                </option>
              ))}
            </select>
            <textarea
              placeholder={t('contact.message')}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={5}
              className="w-full px-4 py-3 bg-dark-bg-2 border border-dark-border rounded-lg text-white placeholder-gray-500 focus:border-accent-primary focus:outline-none transition resize-none"
            />
            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-bold rounded-lg hover:shadow-lg hover:shadow-accent-primary/50 transition"
            >
              {t('contact.submit')}
            </button>
          </form>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400"
            >
              ✓ {t('contact.success')}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

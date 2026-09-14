'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', type: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Инициализируем EmailJS (замени на свой ID)
      emailjs.init('YOUR_EMAILJS_PUBLIC_KEY');

      await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        from_name: formData.name,
        from_email: formData.email,
        project_type: formData.type,
        message: formData.message,
      });

      setSuccess(true);
      setFormData({ name: '', email: '', type: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">{t('contact.title')}</h2>
          <p className="text-gray-400 text-lg">{t('contact.subtitle')}</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-4 bg-dark-card border border-dark-border rounded-2xl p-8"
        >
          <input
            type="text"
            placeholder={t('contact.name')}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-primary transition"
          />

          <input
            type="email"
            placeholder={t('contact.contactInfo')}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-primary transition"
          />

          <select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            required
            className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-white focus:outline-none focus:border-accent-primary transition"
          >
            <option value="">{t('contact.type')}</option>
            <option value="landing">Landing Page</option>
            <option value="corporate">Corporate Site</option>
            <option value="ecommerce">E-commerce</option>
            <option value="web3">Web3/Blockchain</option>
            <option value="other">Other</option>
          </select>

          <textarea
            placeholder={t('contact.message')}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            rows={5}
            className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-primary transition resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full px-8 py-3 bg-gradient-to-r from-accent-primary to-accent-secondary text-white rounded-lg font-bold hover:shadow-lg hover:shadow-accent-primary/50 transition disabled:opacity-50"
          >
            {loading ? 'Отправка...' : t('contact.submit')}
          </button>

          {success && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 text-center font-bold"
            >
              ✓ {t('contact.sent')}
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  );
}

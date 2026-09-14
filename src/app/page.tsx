'use client';

import { useEffect } from 'react';
import i18n from '@/lib/i18n';
import { Navigation } from '@/components/Layout/Navigation';
import { Hero } from '@/components/Sections/Hero';
import { Services } from '@/components/Sections/Services';
import { Portfolio } from '@/components/Sections/Portfolio';
import { Process } from '@/components/Sections/Process';
import { Contact } from '@/components/Sections/Contact';
import { Footer } from '@/components/Sections/Footer';

export default function Home() {
  useEffect(() => {
    i18n.changeLanguage('ru');
  }, []);

  return (
    <>
      <Navigation />
      <main className="bg-dark-bg text-white">
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

import { Navigation } from '@/components/Layout/Navigation';
import { Hero } from '@/components/Sections/Hero';
import { Services } from '@/components/Sections/Services';
import { Portfolio } from '@/components/Sections/Portfolio';
import { Process } from '@/components/Sections/Process';
import { TechStack } from '@/components/Sections/TechStack';
import { WhyMe } from '@/components/Sections/WhyMe';
import { FAQ } from '@/components/Sections/FAQ';
import { Contact } from '@/components/Sections/Contact';
import { Footer } from '@/components/Sections/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="bg-dark-bg text-white">
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <TechStack />
        <WhyMe />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from 'next';
import './globals.css';
import '@/lib/i18n';

export const metadata: Metadata = {
  title: 'WebCraft — Создание сайтов на заказ | Next.js + 3D',
  description: 'Лендинги, корпоративные сайты, интернет-магазины, Web3. Быстро, качественно, честно. Работаю по РБ и за рубежом.',
  keywords: 'разработка сайтов, веб-разработка, Next.js, React, Web3, лендинг',
  openGraph: {
    type: 'website',
    url: 'https://webcraft.by',
    title: 'WebCraft — Создание сайтов на заказ',
    description: 'Профессиональная разработка сайтов любой сложности',
    images: [
      {
        url: 'https://webcraft.by/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}

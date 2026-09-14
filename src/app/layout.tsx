import '@/lib/i18n';
import type { Metadata } from 'next';
import './globals.css';
import { I18nProvider } from '@/components/Providers/I18nProvider';

export const metadata: Metadata = {
  title: 'WebCraft 3D - Universal Website Builder',
  description: 'Create stunning websites for any business niche with our 3D-powered builder. Multi-language support, fully customizable.',
  keywords: ['website builder', '3D', 'landing page', 'web3', 'e-commerce'],
  openGraph: {
    type: 'website',
    url: 'https://webcraft3d.com',
    title: 'WebCraft 3D - Universal Website Builder',
    description: 'Create stunning 3D websites for any business niche',
    images: [{
      url: 'https://webcraft3d.com/og-image.png',
      width: 1200,
      height: 630,
    }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-dark-bg text-white">
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}

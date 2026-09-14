import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'WebCraft 3D - Universal Website Builder',
  description: 'Create stunning websites for any business niche with our 3D-powered builder. Multi-language support, fully customizable.',
  keywords: ['website builder', '3D', 'landing page', 'web3', 'e-commerce'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-dark-bg text-white">{children}</body>
    </html>
  );
}

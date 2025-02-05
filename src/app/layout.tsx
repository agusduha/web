import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wonderland',

  description:
    'Wonderland is the largest core development group in Web3. We partner up with the best protocols in the world, including, among others: Optimism, Connext, and Reflexer.',
  keywords: 'Wonderland, Defi, decentralized finance, activist fund, ethereum, solidity, devs',
  robots: 'index, follow',
  openGraph: {
    url: 'https://defi.sucks',
    type: 'website',
    title: 'Wonderland',
    description:
      'Wonderland is the largest core development group in Web3. We partner up with the best protocols in the world, including, among others: Optimism, Connext, and Reflexer.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
      </head>
      <body>{children}</body>
    </html>
  );
}

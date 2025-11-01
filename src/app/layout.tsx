'use client';

import { Raleway, Inter, Oswald } from 'next/font/google';
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const raleway = Raleway({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
});

const oswald = Oswald({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${raleway.variable} ${oswald.variable}`}>
      <body className="font-sans">
        <style jsx global>{`
          h1, h2, h3, h4, h5, h6 {
            font-family: var(--font-raleway), sans-serif;
          }
          body {
            font-family: var(--font-inter), sans-serif;
          }
        `}</style>
        {children}
      </body>
    </html>
  );
}

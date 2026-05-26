import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from './components/Header';

const glacialIndifference = localFont({
  src: [
    {
      path: './fonts/GlacialIndifference-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/GlacialIndifference-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
});

export const metadata: Metadata = {
  title: 'Sky To Be Media | Coming Soon',
  description: 'Agence média dédiée aux podcasts, interviews et journalisme.',
  openGraph: {
    title: 'Sky To Be Media | Coming Soon',
    description: 'Agence média dédiée aux podcasts, interviews et journalisme.',
    // url: 'https://skytobemedia.com',
    siteName: 'Sky To Be Media',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      {/* Attention aux accolades et aux backticks sur cette ligne ! */}
      <body className={`${glacialIndifference.className} bg-black text-white h-dvh flex flex-col antialiased overflow-hidden`}>
        <Header />
        <main className="grow flex flex-col relative overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
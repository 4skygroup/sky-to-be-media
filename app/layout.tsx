import type { Metadata } from 'next';
import './globals.css';
import Header from './components/Header';

// Intégration SEO minimal (meta, OG)
export const metadata: Metadata = {
  title: 'Sky To Be Media | Coming Soon',
  description: 'Agence média dédiée aux podcasts, interviews et journalisme.',
  openGraph: {
    title: 'Sky To Be Media | Coming Soon',
    description: 'Agence média dédiée aux podcasts, interviews et journalisme.',
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
      <body className="bg-black text-white min-h-screen flex flex-col antialiased">
        <Header />

        {/* Le contenu de la page viendra s'insérer ici et prendra l'espace restant */}
        <main className="grow flex flex-col relative overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
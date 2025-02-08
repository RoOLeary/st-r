import Footer from '@/components/ui/footer';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NavBar } from '@/components/nav-bar';
import { ViewTransitions } from 'next-view-transitions'
import CookieBanner from '@/components/cookie-banner';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Headless eCommerce Store',
  description: 'Fuck this poxy and faggery'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={inter.className}>
          <main className="min-h-screen bg-background overflow-x-hidden">
            <NavBar />
            {children}
          </main>
          <Footer />
          <CookieBanner />
        </body>
      </html>
    </ViewTransitions>
  );
}

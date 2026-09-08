// app/layout.js
import { Playfair_Display, Cormorant } from "next/font/google";
import { MusicProvider } from './contexts/MusicContext';
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Herkanusya & Meri's Wedding",
  description: "Join us in celebrating our special day",
  metadataBase: new URL('https://herkamery.vercel.app'),
  openGraph: {
    title: "Herkanusya & Meri's Wedding",
    description: "Join us in celebrating our special day",
    images: [{
      url: '/asset/whatsapp-share.jpg',
      width: 1200,
      height: 630,
      alt: "Herkanusya & Meri's Wedding",
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Herkanusya & Meri's Wedding",
    description: "Join us in celebrating our special day",
    images: ['/asset/whatsapp-share.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${cormorant.variable}`}>
      <body className="antialiased overflow-x-hidden">
        <MusicProvider>
          <main>{children}</main>
        </MusicProvider>
      </body>
    </html>
  );
}
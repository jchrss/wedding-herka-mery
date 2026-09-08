// app/layout.js
import { Bodoni_Moda, Jost, Pinyon_Script } from "next/font/google";
import { MusicProvider } from './contexts/MusicContext';
import "./globals.css";

// Editorial display face -- high contrast, used italic for names and headings.
const bodoni = Bodoni_Moda({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

// Geometric sans for body copy and the letterspaced uppercase labels.
const jost = Jost({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

// Script accent for the couple's short names and the monogram.
const pinyon = Pinyon_Script({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
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
    <html
      lang="id"
      className={`${bodoni.variable} ${jost.variable} ${pinyon.variable}`}
    >
      <body className="antialiased overflow-x-hidden">
        <MusicProvider>
          <main>{children}</main>
        </MusicProvider>
      </body>
    </html>
  );
}

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
  title: "Franky & Juli's Wedding",
  description: "Join us in celebrating our special day",
  image: "./whatsapp.png", // Update to a proper preview image if possible
  url: "https://wedding-franky-juli.vercel.app", 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${cormorant.variable}`}>
      <head>
        {/* Basic Meta Tags */}
        <title>{metadata.title}</title>
        <link rel="icon" href="./favico.ico" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
      </head>

      <body className="antialiased overflow-x-hidden">
      <MusicProvider>
        <main>{children}</main>
        </MusicProvider>
      </body>
    </html>
  );
}






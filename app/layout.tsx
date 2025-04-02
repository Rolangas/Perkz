import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  variable: '--font-montserrat',
})

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
};

export const metadata: Metadata = {
  title: "Perkz - Buy Now, Use Later | Make the Most of Your Corporate Meal Stipend",
  description: "Perkz helps employees maximize their corporate benefits by letting them save their meal stipend for later use – eat when and how you want.",
  icons: {
    icon: [
      {
        url: "/images/perkz-logo.png",
        type: "image/png",
        sizes: "32x32"
      },
      {
        url: "/images/perkz-logo.png",
        type: "image/png",
        sizes: "16x16"
      }
    ],
    apple: [
      {
        url: "/images/perkz-logo.png",
        type: "image/png",
        sizes: "180x180"
      }
    ],
    shortcut: [{ url: "/images/perkz-logo.png" }],
    other: [
      {
        rel: "icon",
        url: "/images/perkz-logo.png",
      },
    ],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/perkz-logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/perkz-logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/perkz-logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <style dangerouslySetInnerHTML={{ __html: `
          @font-face {
            font-family: 'Recoleta';
            src: url('/fonts/Recoleta Bold.woff2') format('woff2');
            font-weight: bold;
            font-style: normal;
            font-display: swap;
          }
          
          @font-face {
            font-family: 'Gazpacho';
            src: url('/fonts/Gazpacho Black.woff2') format('woff2');
            font-weight: 900;
            font-style: normal;
            font-display: swap;
          }
        `}} />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} font-sans bg-gradient-to-b from-[#0A0F29] to-[#131B41]`}>{children}</body>
    </html>
  );
}

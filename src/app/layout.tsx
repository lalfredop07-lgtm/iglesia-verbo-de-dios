import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/motion/PageTransition";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { site } from "@/content/site";
import { resolveMetadataBase } from "@/lib/metadata";
import { churchJsonLd } from "@/lib/structured-data";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
  weight: ["500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
  weight: ["300", "400"],
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} · Una comunidad de fe en Madrid`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  // El dominio definitivo está pendiente de confirmación: no se publican
  // URLs canónicas absolutas hasta entonces (véase `resolveMetadataBase`).
  metadataBase: resolveMetadataBase(),
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: site.name,
    title: site.name,
    description: site.description,
    images: [{ url: "/images/hero/culto-principal.jpg", width: 1672, height: 941, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: ["/images/hero/culto-principal.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b2345",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-ES" className={`${jakarta.variable} ${dmSans.variable} ${cormorant.variable}`}>
      <head>
        {/* Red de seguridad: sin JavaScript, las animaciones de entrada no
            deben dejar contenido invisible. */}
        <noscript>
          <style>{`[style*="opacity:0"],[style*="opacity: 0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <ScrollProgress />
        <Header />
        <main id="contenido">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <script
          type="application/ld+json"
          // Datos estructurados con información confirmada únicamente.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(churchJsonLd()) }}
        />
      </body>
    </html>
  );
}

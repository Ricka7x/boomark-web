import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { SITE_URL, APP_NAME } from "@/lib/constants";

import Footer from "../components/Footer";
import Nav from "../components/Nav";
import ClarityAnalytics from "../components/ClarityAnalytics";
import "./globals.css";
import Script from "next/script";

// TODO: replace with a real GA4 measurement ID before shipping, or remove
// this snippet entirely if a different analytics stack is used instead.
const GA_MEASUREMENT_ID = "";

const TAGLINE = "Search your bookmarks like you search your apps.";
const DESCRIPTION =
  "Boomark is a command-palette bookmark manager for Mac. Search in a few keystrokes, pin your favorites, and let the first five get ⌘1–⌘5 automatically.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${APP_NAME} | ${TAGLINE}`,
  description: DESCRIPTION,
  authors: [{ name: `${APP_NAME} Team` }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: `${APP_NAME} | ${TAGLINE}`,
    description: DESCRIPTION,
    url: `${SITE_URL}/`,
    siteName: APP_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${APP_NAME} | ${TAGLINE}`,
    description: DESCRIPTION,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <head>
        <link rel="alternate" type="application/rss+xml" title={`${APP_NAME} Blog RSS Feed`} href="/feed.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "SoftwareApplication",
                  name: APP_NAME,
                  operatingSystem: "macOS",
                  applicationCategory: "ProductivityApplication",
                  description: DESCRIPTION,
                  url: `${SITE_URL}/`,
                  offers: {
                    "@type": "Offer",
                    price: "7",
                    priceCurrency: "USD",
                    description: "One-time purchase, no subscription",
                  },
                },
                {
                  "@type": "Organization",
                  name: APP_NAME,
                  url: `${SITE_URL}/`,
                  logo: `${SITE_URL}/assets/logo.webp`,
                },
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:bg-foreground focus:text-background focus:px-4 focus:py-2 focus:rounded-lg"
        >
          Skip to content
        </a>
        <Nav />
        <ClarityAnalytics />
        <main id="main">{children}</main>
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-script" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
        <Footer />
      </body>
    </html>
  );
}

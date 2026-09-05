import type { Metadata } from "next";
import { SITE_URL, APP_NAME } from "@/lib/constants";

import Footer from "../components/Footer";
import Nav from "../components/Nav";
import ClarityAnalytics from "../components/ClarityAnalytics";
import "./globals.css";
import Script from "next/script";

// TODO: replace with a real GA4 measurement ID before shipping, or remove
// this snippet entirely if a different analytics stack is used instead.
const GA_MEASUREMENT_ID = "";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${APP_NAME} | Placeholder Tagline`,
  description: "Placeholder description. Replace with real marketing copy.",
  authors: [{ name: `${APP_NAME} Team` }],
  openGraph: {
    title: `${APP_NAME} | Placeholder Tagline`,
    description: "Placeholder description. Replace with real marketing copy.",
    url: `${SITE_URL}/`,
    siteName: APP_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${APP_NAME} | Placeholder Tagline`,
    description: "Placeholder description. Replace with real marketing copy.",
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
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
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
                  description: "Placeholder description. Replace with real marketing copy.",
                  url: `${SITE_URL}/`,
                },
                {
                  "@type": "Organization",
                  name: APP_NAME,
                  url: `${SITE_URL}/`,
                },
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded-lg"
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

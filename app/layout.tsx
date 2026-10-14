import type { Metadata } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Analytics } from "@vercel/analytics/next";
import { AnalyticsProvider } from "@/components/Analytics";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

// Calculate years dynamically
const yearsExperience = new Date().getFullYear() - 2013;

const description = `Lead Engineer at VerticalAI in Perth, building the real-time runtime behind voice and text agents for Australian businesses. ${yearsExperience}+ years in cloud platforms before that.`;

export const metadata: Metadata = {
  title: "Luke Halley | Lead Engineer at VerticalAI, Voice AI in Perth",
  description,
  keywords: [
    "Luke Halley",
    "Luke Halley VerticalAI",
    "VerticalAI",
    "Voice AI engineer Perth",
    "AI voice agents Australia",
    "Luke Halley AWS",
    "Cloud Platform Engineer Perth",
    "Pipecat",
  ],
  authors: [{ name: "Luke Halley", url: "https://lukehalley.com" }],
  creator: "Luke Halley",
  publisher: "Luke Halley",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  metadataBase: new URL("https://lukehalley.com"),
  alternates: {
    canonical: "https://lukehalley.com",
  },
  openGraph: {
    title: "Luke Halley | Lead Engineer at VerticalAI",
    description,
    type: "profile",
    locale: "en_AU",
    url: "https://lukehalley.com",
    siteName: "Luke Halley",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luke Halley | Lead Engineer at VerticalAI",
    description,
    creator: "@lukehalley",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Luke Halley",
    url: "https://lukehalley.com",
    image: "https://lukehalley.com/images/me.webp",
    jobTitle: "Lead Engineer",
    worksFor: {
      "@type": "Organization",
      name: "VerticalAI",
      url: "https://verticalai.com.au",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Waterford Institute of Technology",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Perth",
      addressRegion: "WA",
      addressCountry: "AU",
    },
    email: "development@lukehalley.com",
    sameAs: [
      "https://github.com/lukehalley",
      "https://www.linkedin.com/in/lukehalley/",
      "https://gitlab.com/lukehalley",
    ],
    description,
    knowsAbout: [
      "Voice AI",
      "Real-time voice agents",
      "Pipecat",
      "Amazon Web Services",
      "Infrastructure as Code",
      "CI/CD Automation",
      "Platform Engineering",
    ],
  };

  return (
    <html lang="en" className={`${manrope.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link
          rel="preload"
          href="/images/me.webp"
          as="image"
          type="image/webp"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans" suppressHydrationWarning>
        {children}
        <ScrollToTop />
        <Analytics />
        <AnalyticsProvider />
      </body>
    </html>
  );
}

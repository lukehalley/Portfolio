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

export const metadata: Metadata = {
  title: "Luke Halley - Cloud Platform Engineer | Infrastructure at Scale",
  description: `Cloud Platform Engineer with ${yearsExperience}+ years experience. I built an entire AWS cloud platform for 100+ engineering teams: serverless build agents, an account factory, CI/CD templates, and a self-hosted Terraform stack. $369K/year saved, zero production incidents. IaC, CI/CD, AWS, Azure. Perth, Australia.`,
  keywords: [
    "Luke Halley",
    "Luke Halley DevOps",
    "Luke Halley AWS",
    "Luke Halley Cloud Engineer",
    "Luke Halley Cloud Platform Engineer",
    "Cloud Platform Engineer",
    "Platform Engineering",
    "Cloud Developer",
    "DevOps Engineer Perth",
    "AWS Solutions Architect",
    "Infrastructure as Code",
    "IaC Expert",
    "Cloud Infrastructure",
    "Multi-Cloud Engineer",
    "CI/CD Automation",
    "Perth Australia",
    "Cloud Architect",
    "Site Reliability Engineer",
  ],
  authors: [{ name: "Luke Halley" }],
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
    title: `Luke Halley - Cloud Platform Engineer | ${yearsExperience}+ Years Experience | Infrastructure at Scale`,
    description: `Cloud Platform Engineer who built an entire AWS platform for 100+ teams. 18 systems shipped, $369K/year saved, zero production incidents. IaC, CI/CD, AWS, Azure.`,
    type: "website",
    locale: "en_US",
    url: "https://lukehalley.com",
    siteName: "Luke Halley - Cloud Engineer Portfolio",
    images: [
      {
        url: "https://lukehalley.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Luke Halley - Cloud Platform Engineer who built an entire AWS platform at scale",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luke Halley - Cloud Platform Engineer",
    description: `Built an entire AWS cloud platform for 100+ teams. 18 systems, $369K/year saved, zero production incidents. IaC, CI/CD, AWS, Azure.`,
    images: ["https://lukehalley.com/og-image.png"],
    site: "@lukehalley",
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
    image: "https://lukehalley.com/og-image.png",
    jobTitle: "Cloud Platform Engineer",
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Dublin City University",
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
      "https://linkedin.com/in/lukehalley",
      "https://gitlab.com/lukehalley",
    ],
    description: `Cloud Platform Engineer with ${yearsExperience}+ years experience. Built an entire AWS cloud platform for 100+ engineering teams. Specializes in IaC, CI/CD automation, and multi-account cloud architecture.`,
    knowsAbout: [
      "Infrastructure as Code",
      "Multi-Cloud Architecture",
      "Amazon Web Services",
      "Microsoft Azure",
      "CI/CD Automation",
      "DevOps",
      "Cloud Computing",
      "Containerization",
      "Database Migration",
      "Cloud Governance",
    ],
    award: [
      "Promoted to Senior Cloud Developer in 8 months",
      "Top performance rating (highest)",
      "Company Spotlight Award",
      "2019 Enterprise Award",
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

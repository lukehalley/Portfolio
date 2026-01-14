import type { Metadata } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ScrollToTop } from "@/components/ScrollToTop";

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
  title: "Luke Halley - Senior Cloud Engineer | Infrastructure at Scale",
  description: `Senior Cloud Engineer with ${yearsExperience}+ years building multi-cloud infrastructure at scale. From database migrations to container platforms, I design systems that ship faster and cost less. IaC, CI/CD, AWS, Azure. Perth, Australia.`,
  keywords: [
    "Luke Halley",
    "Luke Halley DevOps",
    "Luke Halley AWS",
    "Luke Halley Cloud Engineer",
    "Senior Cloud Engineer",
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
    title: `Luke Halley - Senior Cloud Engineer | ${yearsExperience}+ Years | Infrastructure at Scale`,
    description: `Senior Cloud Engineer specializing in multi-cloud infrastructure and automation. ${yearsExperience}+ years designing systems that scale. 95 AWS accounts, 200+ repo migrations, 50% cost reductions.`,
    type: "profile",
    locale: "en_US",
    url: "https://lukehalley.com",
    siteName: "Luke Halley - Cloud Engineer Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Luke Halley - Senior Cloud Engineer specializing in multi-cloud infrastructure at scale",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luke Halley - Senior Cloud Engineer",
    description: `${yearsExperience}+ years building multi-cloud infrastructure at scale. Migrations that save 50% costs. Systems that ship faster. IaC, CI/CD, AWS, Azure.`,
    images: ["/og-image.png"],
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
    jobTitle: "Senior Cloud Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Mineral Resources",
    },
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
    email: "contact@lukehalley.com",
    sameAs: [
      "https://github.com/lukehalley",
      "https://linkedin.com/in/lukehalley",
      "https://gitlab.com/lukehalley",
    ],
    description: `Senior Cloud Engineer with ${yearsExperience}+ years building multi-cloud infrastructure at scale. Specializing in IaC, CI/CD automation, and cloud architecture.`,
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
      "Verizon Spotlight Award",
      "SunLife Enterprise Award",
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
      </body>
    </html>
  );
}

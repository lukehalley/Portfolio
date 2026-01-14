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
  title: "Luke Halley",
  description: `Senior Cloud Engineer with ${yearsExperience}+ years building infrastructure at scale. From database migrations to container platforms, I design systems that ship faster and cost less. Terraform, AWS, Azure DevOps. Perth, Australia.`,
  keywords: [
    "Luke Halley",
    "Luke Halley DevOps",
    "Luke Halley AWS",
    "Luke Halley Cloud Engineer",
    "Senior Cloud Engineer",
    "DevOps Engineer Perth",
    "AWS Solutions Architect",
    "Terraform Expert",
    "Infrastructure as Code",
    "Cloud Infrastructure",
    "Azure DevOps",
    "Perth Australia",
  ],
  authors: [{ name: "Luke Halley" }],
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  metadataBase: new URL("https://lukehalley.com"),
  openGraph: {
    title: `Luke Halley - Senior Cloud Engineer | ${yearsExperience}+ Years | Infrastructure at Scale`,
    description: `Senior Cloud Engineer specializing in Terraform, AWS, and DevOps automation. ${yearsExperience}+ years designing infrastructure that scales.`,
    type: "website",
    locale: "en_US",
    url: "https://lukehalley.com",
    siteName: "Luke Halley",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Luke Halley - Senior Cloud Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luke Halley - Senior Cloud Engineer",
    description: `${yearsExperience}+ years building cloud infrastructure at scale. Migrations that save 50% costs. Systems that ship faster. Terraform, AWS, Azure DevOps.`,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link
          rel="preload"
          href="/images/me.webp"
          as="image"
          type="image/webp"
        />
      </head>
      <body className="font-sans" suppressHydrationWarning>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}

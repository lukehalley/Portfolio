import type { Metadata } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Luke Halley - Senior Cloud Engineer | DevOps | AWS Solutions Architect",
  description: "Senior Cloud Engineer with 5+ years scaling infrastructure across 95 AWS accounts. Led migrations saving 50% costs at Verizon. Expert in Terraform, AWS, Azure DevOps. Based in Perth, Australia.",
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
    title: "Luke Halley - Senior Cloud Engineer | 95 AWS Accounts | 50% Cost Savings",
    description: "Senior Cloud Engineer scaling infrastructure across 95 AWS accounts at Mineral Resources. Expert in Terraform, AWS, and DevOps automation.",
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
    description: "Designed infrastructure for 95 AWS accounts. Led migrations saving 50% costs. 5+ years scaling cloud systems.",
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
      <body className="font-sans">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { LanguageProvider } from "./language-context";
import { ScrollReveal } from "./scroll-reveal";
import { SiteFooter, SiteHeader } from "./site-chrome";
import "./globals.css";

export const metadata: Metadata = {
  title: "Golden Rose Employment Agency Inc. | Brooklyn Employment Referrals",
  description:
    "Licensed Brooklyn employment agency connecting New York employers and job seekers since 2016. Warm bilingual service in English and Spanish.",
  keywords: [
    "Brooklyn employment agency",
    "NYC employment referral agency",
    "domestic worker referrals",
    "housekeeper referrals Brooklyn",
    "nanny referrals NYC",
    "Golden Rose Employment",
  ],
  openGraph: {
    title: "Golden Rose Employment Agency Inc.",
    description:
      "Warm, bilingual employment referrals for New York employers and job seekers.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <SiteHeader />
          <ScrollReveal />
          {children}
          <SiteFooter />
        </LanguageProvider>
      </body>
    </html>
  );
}

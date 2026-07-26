import type { Metadata } from "next";
import { LanguageProvider } from "./language-context";
import { ScrollReveal } from "./scroll-reveal";
import { SiteFooter, SiteHeader } from "./site-chrome";
import "./globals.css";

export const metadata: Metadata = {
  title: "Golden Rose Employment Agency Inc. | Brooklyn Employment Referrals",
  description:
    "Licensed Brooklyn employment agency for domestic household staffing, housekeepers, nannies, housekeeper/nannies, commercial staffing, and local business referrals.",
  keywords: [
    "Brooklyn employment agency",
    "NYC employment referral agency",
    "domestic worker referrals",
    "domestic household staffing",
    "live-in housekeepers",
    "live-out housekeepers",
    "housekeeper referrals Brooklyn",
    "nanny referrals NYC",
    "housekeeper nanny referrals",
    "commercial staffing Brooklyn",
    "Golden Rose Employment",
  ],
  openGraph: {
    title: "Golden Rose Employment Agency Inc.",
    description:
      "Warm, bilingual employment referrals for New York employers and job seekers.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/golden-rose-logo.jpg",
    shortcut: "/golden-rose-logo.jpg",
    apple: "/golden-rose-logo.jpg",
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

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Golden Rose Employment",
  description: "Golden Rose Employment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

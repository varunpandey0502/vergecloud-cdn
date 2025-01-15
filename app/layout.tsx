import { notoSans } from "@/fonts";
import type { Metadata } from "next";
import "./globals.css";
import TrackingScript from "@/components/tracking-script";

export const metadata: Metadata = {
  title: "VergeCloud",
  description: "Blazing-fast Content Delivery. Everywhere, Every Time.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSans.variable} font-sans`}>{children}</body>
      <TrackingScript />
    </html>
  );
}

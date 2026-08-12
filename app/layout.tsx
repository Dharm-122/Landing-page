import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dharm-the digital room | Free AI Marketing Consultation",
    template: "%s | Dharm-the digital room",
  },
  description:
    "Book a free AI marketing consultation and receive a customized AI marketing plan for your small or medium business.",
  keywords: [
    "AI marketing consultation",
    "digital marketing plan",
    "small business marketing",
    "lead generation",
  ],
  openGraph: {
    type: "website",
    title: "Dharm-the digital room | Free AI Marketing Consultation",
    description:
      "Get a customized AI marketing plan for your business through a free consultation.",
    url: "/",
    siteName: "Dharm-the digital room",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Dharm-the digital room",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dharm-the digital room | Free AI Marketing Consultation",
    description:
      "Book a free AI marketing consultation and receive a customized AI marketing plan for your business.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}

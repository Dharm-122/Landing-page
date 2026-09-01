import type { Metadata } from "next";
import Script from "next/script";
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
      <body className="font-sans">
        {children}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1846113373424498');
fbq('track', 'PageView');`}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1846113373424498&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}

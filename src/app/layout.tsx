import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

const base = process.env.NEXT_PUBLIC_BASE_URL as string;

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(base),

  title: {
    default: "Pawna Lake Camping | Comfy Tents & Lakeside Experience",
    template: "%s | Pawna Lake Camping",
  },

  description:
    "Book premium Pawna Lake camping with Comfy tents, BBQ, live music, boating and stunning lakeside views. Perfect for couples, families, and groups.",

  keywords: [
    "Pawna Lake Camping",
    "Lonavala Camping",
    "Couple Camping",
    "Couple Camping Pawna",
    "Couple Camping Lonavala",

    // Location-based
    "Pawna Camping",
    "Pawna Lake Camps",
    "Camping Near Pune",
    "Camping Near Mumbai",
    "Lakeside Camping Lonavala",
    "Pawna Lake Stay",
    "Weekend Camping Lonavala",
    "Pawna Lake Resort Camping",
    "Best Camping in Lonavala",
    "Best Camping Near Pune",

    // Couple-focused
    "Romantic Camping Near Pune",
    "Romantic Camping Near Mumbai",
    "Private Couple Camping",
    "Couple Tent Camping",
    "Couple Camping with Dinner",
    "Couple Camping with Music",
    "Lakeside Couple Camping",
    "Romantic Getaway Pawna Lake",
    "Couple Weekend Getaway Lonavala",
    "Private Camping for Couples",

    // Experience-based
    "Overnight Camping Pawna Lake",
    "Camping with BBQ Pawna",
    "Camping with Bonfire",
    "Camping with Live Music",
    "Adventure Camping Lonavala",
    "Family Camping Pawna Lake",
    "Luxury Camping Pawna Lake",
    "Tent Stay Pawna Lake",
    "Glamping Near Pune",
    "Camping Under the Stars",

    // Search intent keywords
    "Pawna Lake Camping Booking",
    "Book Pawna Lake Camping",
    "Pawna Lake Camping Packages",
    "Pawna Camping Price",
    "Pawna Lake Camping Deals",
    "Affordable Camping Lonavala",
    "Budget Camping Near Pune",
    "Weekend Camping Packages",
    "One Day Camping Lonavala",
    "Best Pawna Lake Camping Packages",

    // Long-tail keywords
    "Best Couple Camping Near Pune",
    "Best Couple Camping Near Mumbai",
    "Pawna Lake Camping for Couples",
    "Lonavala Camping for Couples",
    "Camping with Lake View in Lonavala",
    "Weekend Getaway Near Pune for Couples",
    "Weekend Getaway Near Mumbai for Couples",
    "Lakeside Tent Camping Near Pune",
    "Camping and Bonfire Near Pune",
    "Pawna Lake Night Camping"
  ],

  openGraph: {
    type: "website",
    url: base,
    siteName: "Pawna Camps",
    title: "Pawna Lake Camping",
    description:
      "Premium Pawna Lake camping with BBQ, boating and Comfy tents.",
    images: [
      {
        url: `${base}/images/accommodations/delux/delux-1.webp`,
        width: 1600,
        height: 900,
        alt: "Pawna Lake Comfy Camping",
      },
      {
        url: `${base}/images/accommodations/delux/delux-2.webp`,
        width: 1600,
        height: 900,
      },
      {
        url: `${base}/images/accommodations/triangle/triangle-1.webp`,
        width: 1600,
        height: 900,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    images: [`${base}/images/accommodations/delux/delux-1.webp`],
  },

  alternates: {
    canonical: base,
  },

  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="image"
          content={cn(
            `${process.env.NEXT_PUBLIC_BASE_URL}/images/accommodations/delux/delux-1.webp`,
          )}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17767702220"
          strategy="afterInteractive"
        />

        <Script id="google-ads-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17767702220');
          `}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17776658067"
          strategy="afterInteractive"
        />

        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17776658067');
          `}
        </Script>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16673264298"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16673264298');
          `}
        </Script>
      </body>
    </html>
  );
}

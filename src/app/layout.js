import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Al-Hafiz Attar And Perfumes",
  description:
    "Buy premium attar and perfumes in Malegaon. Long-lasting fragrances like Oud, Rose Essence, and more. Order now via WhatsApp.",

  keywords: [
    "attar in Malegaon",
    "perfume shop Malegaon",
    "oud attar",
    "rose perfume",
    "long lasting attar",
    "attar near me",
    "Al Hafiz perfumes",
    "premium attar",
    "natural perfumes",
    "fragrance collection",
    "buy attar online",
    "best attar in Malegaon",
    "unique perfume blends",
    

  ],

  authors: [{ name: "Al-Hafiz Attar And Perfumes" }],
  creator: "Al-Hafiz Attar And Perfumes",

  openGraph: {
    title: "Al-Hafiz Attar And Perfumes",
    description:
      "Premium quality attars and perfumes. Long-lasting fragrance collection.",
    url: "https://your-domain.com",
    siteName: "Al-Hafiz Attar And Perfumes",
    images: [
      {
        url: "/profile.jpg", // apni best image
        width: 1200,
        height: 630,
        alt: "Al Hafiz Perfumes",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
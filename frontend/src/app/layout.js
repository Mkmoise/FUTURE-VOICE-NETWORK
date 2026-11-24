import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  applicationName: "Future Voice Network",
  title: {
    default: "Future Voice Network | Education Opens Possibilities",
    template: "%s | Future Voice Network",
  },
  description:
    "Future Voice Network supports refugee students in accessing and continuing their education through financial support, mentorship, and educational opportunities.",
  keywords: [
    "Future Voice Network",
    "FVN",
    "refugee students",
    "education support",
    "student mentorship",
    "Kenya",
  ],
  openGraph: {
    type: "website",
    siteName: "Future Voice Network",
    title: "Future Voice Network",
    description:
      "Supporting refugee students in accessing and continuing their education.",
    locale: "en_KE",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

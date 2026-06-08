import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Student Toolkit",
  description: "Study smarter. Stress less.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${interFont.variable} h-full`}
    >
      <body 
        className="min-h-full flex flex-col selection:bg-accent/30 selection:text-primary"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}

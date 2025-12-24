import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import VisitLogger from "@/components/VisitLogger";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jelle Mulder - Full Stack Developer & Software Engineer",
  description: "Professional portfolio of Jelle Mulder, a passionate full stack developer specializing in modern web technologies, React, Next.js, and MongoDB. Available for new opportunities.",
  keywords: ["Jelle Mulder", "Full Stack Developer", "Software Engineer", "React", "Next.js", "TypeScript", "MongoDB", "Web Developer"],
  authors: [{ name: "Jelle Mulder" }],
  openGraph: {
    title: "Jelle Mulder - Full Stack Developer",
    description: "Professional portfolio showcasing my skills in modern web development",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <VisitLogger />
        {children}
      </body>
    </html>
  );
}

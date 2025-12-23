import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard - Jelle Mulder",
  description: "Private administration dashboard for managing website content and features.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PeterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

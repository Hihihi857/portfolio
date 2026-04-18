import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ContactFooter } from "@/components/ContactFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Yejee Portfolio",
  description:
    "A clean portfolio landing page with scroll-linked cinematic motion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <div className="flex flex-1 flex-col">{children}</div>
        </div>
        <ContactFooter />
      </body>
    </html>
  );
}

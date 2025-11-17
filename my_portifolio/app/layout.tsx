import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import PageRouter from "./page-router";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bernardo Brüggemann - Portfolio",
  description: "Software Engineer Intern Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Script
          src="https://unpkg.com/@splinetool/viewer@1.11.2/build/spline-viewer.js"
          strategy="beforeInteractive"
        />
        <PageRouter />
      </body>
    </html>
  );
}

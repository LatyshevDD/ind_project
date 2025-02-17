import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'
import HeaderSection from "@/components/HeaderSection/HeaderSection";
import React from "react";

const NeueMontreal = localFont({
  src: './fonts/ppneuemontreal-book.otf',
  variable: '--Montreal-book',
})


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${NeueMontreal.variable} antialiased bg-white font-Montreal_book`}
      >
        <HeaderSection/>
        {children}
      </body>
    </html>
  );
}

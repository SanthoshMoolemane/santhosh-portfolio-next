import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Santhosh Moolemane — Full Stack Developer",
  description: "Portfolio of Santhosh Moolemane — full stack developer building scalable web experiences with React, Next.js and Node.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main className="relative" style={{ zIndex: 2 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "../(site)/components/Header";
import Footer from "../(site)/components/Footer";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "m e t a l l b i l d n e r e i  p h i l i p p  s c h r e i n e r",
  description: "Metallbildnerei Philipp Schreiner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interSans.variable} antialiased`}>
        <header>
          <Header />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}

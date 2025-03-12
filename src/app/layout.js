import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "G-Rentify",
  description:
    "Rentify is your ultimate destination for renting high-quality gadgets without the hassle of ownership. Whether you need the latest smartphones, laptops, gaming consoles, or cameras, we’ve got you covered. Experience top-tier technology at a fraction of the cost, upgrade whenever you want, and enjoy the freedom to explore without long-term commitments.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}

import { Poppins } from "next/font/google";
import "@/app/globals.css";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";
import NextAuthProviders from "@/Providers/NextAuthProviders";
import Navbar from "./components/Navbar";

//Poppins Front
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Home - G-Rentify",
  description:
    "Rentify is your ultimate destination for renting high-quality gadgets without the hassle of ownership. Whether you need the latest smartphones, laptops, gaming consoles, or cameras, we’ve got you covered. Experience top-tier technology at a fraction of the cost, upgrade whenever you want, and enjoy the freedom to explore without long-term commitments.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <NextAuthProviders>
          <Toaster />
          <ToastContainer />
          <Navbar />
          {children}
          <Footer />
        </NextAuthProviders>
      </body>
    </html>
  );
}

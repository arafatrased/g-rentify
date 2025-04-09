import { Poppins } from "next/font/google";
import "@/app/globals.css";
import Sidebar from "./components/Sidebar";
import DashboardNavbar from "./components/DashboardNavbar";
import DashboardFooter from "./components/DashboardFooter";
import { Toaster } from "react-hot-toast";
import NextAuthProviders from "@/Providers/NextAuthProviders";

//Poppins Front
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Dashboard - G-Rentify",
  description:
    "Rentify is your ultimate destination for renting high-quality gadgets without the hassle of ownership. Whether you need the latest smartphones, laptops, gaming consoles, or cameras, we’ve got you covered. Experience top-tier technology at a fraction of the cost, upgrade whenever you want, and enjoy the freedom to explore without long-term commitments.",
};

export default function DashboardLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <NextAuthProviders>
        <body className={`${poppins.className}`}>
          <div className="flex lg:relative">
            <Sidebar />

            <div className="bg-[#EEF0FB] w-full lg:w-[calc(100%-250px)]">
              <DashboardNavbar />
              <Toaster
                toastOptions={{
                  duration: 3000,
                  removeDelay: 500,
                  style: {
                    background: "#03b00b",
                    color: "#fff",
                    borderRadius: "2px",
                  },

                  // Default options for specific types
                  success: {
                    duration: 3000,
                    iconTheme: {
                      primary: "white",
                      secondary: "#03b00b",
                    },
                  },
                }}
              />
              <div className="mt-[69px] lg:mt-0">{children}</div>
              <DashboardFooter />
            </div>
          </div>
        </body>
      </NextAuthProviders>
    </html>
  );
}

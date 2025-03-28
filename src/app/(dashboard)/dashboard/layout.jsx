import { Poppins } from "next/font/google";
import "@/app/globals.css";
import Sidebar from "./components/Sidebar";
import DashboardNavbar from "./components/DashboardNavbar";
import DashboardFooter from "./components/DashboardFooter";
import { Toaster } from "react-hot-toast";

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
    <html lang="en">
      <body className={`${poppins.className}`}>
        <div className="flex">
          <Sidebar />
          <div className="bg-[#EEF0FB] w-[calc(100%-250px)]">
            <DashboardNavbar />
            <Toaster
              toastOptions={{
                // Define default options
                className: "",
                duration: 3000,
                removeDelay: 500,
                style: {
                  background: "#03b00b",
                  color: "#fff",
                  borderRadius: "4px",
                },

                // Default options for specific types
                success: {
                  duration: 3000,
                  iconTheme: {
                    primary: "white",
                    secondary: "black",
                  },
                },
              }}
            />
            {children}
            <DashboardFooter />
          </div>
        </div>
      </body>
    </html>
  );
}

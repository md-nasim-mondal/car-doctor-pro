import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Car Doctor Pro",
  description: "Car Reaper Workshop",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' data-theme='car_doctor_theme'>
      <body className={inter.className}>
        <div className="max-w-7xl mx-auto">
        <Navbar />
        {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

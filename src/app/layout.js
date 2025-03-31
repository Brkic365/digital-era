import { Poppins } from "next/font/google";
import "./globals.css";

import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"]
});

export const metadata = {
  title: "Digital Era",
  description: "Bring Your Ideas to Reality with Our Creative Magic",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

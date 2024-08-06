import { Footer, Navbar } from "./constants/index";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rapier Technology International",
  description: "We are Rapier Technology International Raprofessional and modern Apps is our passion",
  icons: "/images/rapier.png",
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={`relative ${inter.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";
import NavContexts from "@/contexts/NavContexts";
import Headers from "@/components/common-component/header";
import ScrollToTop from "@/components/common-component/ScrollToTop";
import Footer from "../components/common-component/Footer";
import CateMenuRenderer from '@/components/common-component/CateMenuRenderer'



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wisaale Shops",
  description: "Wisaale Shops is a newly created multi vendor ecommerse website in BD.This website is created to build a large number of entrepreneur among general people and also focuses on customer satisfaction and on time delivery system.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <NavContexts>
       <Headers>
         <CateMenuRenderer />
       </Headers>
       <ScrollToTop />
        <main className="max-w-screen overflow-hidden">
          {children}
        </main>
          <Footer />
       </NavContexts>
       </body>
    </html>
  );
}

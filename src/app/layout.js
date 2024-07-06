import { Inter } from "next/font/google";
import "./globals.css";
import NavContexts from "@/contexts/NavContexts";
import Headers from "@/components/common-component/header";
import ScrollToTop from "@/components/common-component/ScrollToTop";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <NavContexts>
       <Headers/>
       <ScrollToTop />
        <main className="max-w-screen overflow-hidden">
          {children}
        </main>
       </NavContexts>
       </body>
    </html>
  );
}

"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "@/styles/globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>
        <div>
          <Navbar/>
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  )
}
"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ChakraProvider } from '@chakra-ui/react'
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {

const router= useRouter();


  useEffect(() => {

    const handleRouteChange = ()=> 
    {
      const token = sessionStorage.getItem("token");
      if (!token) {
       router.push("/");
      }
      else {
        console.log("token", token);
      }
    }
 
    handleRouteChange();

  }, [router]);

  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>
          <Header />
          {children}
          <Footer />
        </ChakraProvider>

      </body>
    </html>
  );
}

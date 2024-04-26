"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
 import { ChakraProvider } from '@chakra-ui/react'
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {

  // const useRouter = useRouter();
  const pathname = usePathname();
  const router = useRouter();
  console.log("router", router);
  console.log("pathname", pathname);


  const token = localStorage.getItem("token");

  useEffect(() => {
    const handleRouteChange = () => {
      if (!token) {
        console.log("no token")
        window.location.href = "/Authorization/login";
        // router.push("/login");

      }
      else {
        console.log("token", token);
      }
    }

    handleRouteChange();

  }, [pathname, token]);

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

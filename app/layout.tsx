import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { CartProvider } from "@/contexts/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mks frontend challenge",
  description: "Frontend challenge for Mks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <CartProvider>
        <html lang="en" className="h-full h-screen">
            <body className={`min-h-full h-screen h-full flex flex-col ${inter.className}`}>
              <div className='mb-10'>
                <Nav />
              </div>
              {children}
              <div className='mt-auto pt-10'>
                <Footer />
              </div>
            </body>
        </html>
        </CartProvider>
  );
}

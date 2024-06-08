import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

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
    <html lang="en" className="h-full h-screen">
      <body className={`min-h-full h-screen h-full flex flex-col ${inter.className}`}>
        <div className='mb-10'>
          <Nav />
        </div>
        {children}
        <div className='mt-auto'>
          <Footer />
        </div>
      </body>
    </html>
  );
}

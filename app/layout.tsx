import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import Provider from "@/components/provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ModalProvider from "@/components/providers/modal-provider";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SwiftMarket",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Navbar />
          <ModalProvider />
          {children}
          <Footer />
          <Toaster />
        </Provider>
      </body>
    </html>
  );
}

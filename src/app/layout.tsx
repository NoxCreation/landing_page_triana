import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "@/ui/provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter, Bricolage_Grotesque } from 'next/font/google';
import ButtonUp from "@/components/buttonUp";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
});

export const metadata: Metadata = {
  title: "Triana Marketing & Consulting",
  description: "",
  icons: {
    icon: '/home/VectorCh.ico'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body style={{ background: "#ffffff" }} className={`${inter.variable} ${bricolage.variable}`}>
        <Provider attribute="class" defaultTheme="light">
          <Navbar />
          {children}
          <Footer />
          <ButtonUp />
        </Provider>
      </body>
    </html>
  );
}

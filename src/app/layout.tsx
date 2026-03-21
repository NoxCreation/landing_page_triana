import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "@/ui/provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter, Bricolage_Grotesque } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
});

export const metadata: Metadata = {
  title: "Triana Marketing & Consulting",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ background: "#ffffff" }} className={`${inter.variable} ${bricolage.variable}`}>
        <Provider>
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}

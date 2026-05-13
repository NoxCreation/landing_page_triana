import type { Metadata, Viewport } from "next";
import { Provider } from "@/ui/provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Bricolage_Grotesque } from 'next/font/google';
import ButtonUp from "@/components/buttonUp";
import { redirect } from 'next/navigation';
import { getContent } from "@/lib/content";
import { ContentType } from "@/types/ContentType";
import "./globals.css";

export const dynamic = 'force-dynamic';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
});

export const viewport: Viewport = {
  themeColor: '#d107ff',
  colorScheme: 'light',
}

export const metadata: Metadata = {
  title: "Triana Marketing & Consulting",
  description: "",
  icons: {
    icon: '/home/VectorCh.ico'
  }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let content = await getContent() as ContentType
  if (!content) redirect("/500")

  return (
    <html lang="es" suppressHydrationWarning>
      <body style={{ background: "#ffffff" }} className={`${bricolage.variable}`}>
        <Provider attribute="class" defaultTheme="light">
          <Navbar />
          {children}
          <Footer content={content} />
          <ButtonUp content={content} />
        </Provider>
      </body>
    </html>
  );
}

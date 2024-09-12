import type { Metadata, Viewport } from "next";
import { Azeret_Mono } from "next/font/google"
import "./globals.css";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import { cn } from "@/lib/utils";

const azeretMono = Azeret_Mono({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "pikushe",
  description: "Everything about Piku is here :o",
  authors: [{name: "piKu"}],
  keywords: ["piku", "pikushe", "piku1337"],
  creator: "pikushe",
  publisher: "pikushe",
  icons: {
    icon: "/Logo..jpg",
  }
}

export const viewport: Viewport = {
  themeColor: '#214ADE',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(azeretMono.className, "flex flex-row p-12 h-screen")}
      >
        <Sidebar />
        <Header />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Azeret_Mono } from "next/font/google"
import "./globals.css";
import Sidebar from "@/components/layout/sidebar";
import Header from "@/components/layout/header";
const azeretMono = Azeret_Mono({
    subsets: ['latin']
})
export const metadata: Metadata = {
    metadataBase: new URL("https://pikushe.com"),
    title: {
        default: "Piku - Front-End Developer",
        template: "%s | Piku Portfolio",
    },
    description: "Frontend Developer specializing in modern, responsive, and high-performance web applications built with Next.js, React, and Tailwind CSS.",
    keywords: [
        "Frontend Developer",
        "Next.js Developer",
        "React Developer",
        "Tailwind CSS",
        "Web Developer Portfolio",
    ],
    authors: [{ name: "piku1337" }],
    creator: "piku",
    openGraph: {
        title: "Piku — Front-End Developer",
        description:
            "Portfolio showcasing modern web projects built with Next.js, React, and Tailwind CSS.",
        url: "https://pikushe.com",
        siteName: "Piku Portfolio",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Piku Portfolio Preview",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Piku - Front-End Developer",
        description:
            "Frontend Developer building modern and responsive web experiences.",
        images: ["/og-image.png"],
    },
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col md:flex-row ${azeretMono.className} antialiased h-screen`}
      >
      <Sidebar/>
      <main className="flex flex-col gap-3 py-6 px-2 lg:py-12 lg:pr-12 w-full">
          <Header />
          {children}
      </main>
      </body>
    </html>
  );
}

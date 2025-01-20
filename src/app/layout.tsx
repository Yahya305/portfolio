import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "@lib/providers/providers";
import { Toaster } from "@components/ui/toaster";
import NextTopLoader from "nextjs-toploader";
import { Poppins } from "next/font/google";
import { SidebarMain } from "@components/Sidebar";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Yahya Salman",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`dark ${poppins.className}`}
                // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Providers>
                    <NextTopLoader />
                    <Navbar />
                    <SidebarMain />
                    {children}
                    <Footer />
                </Providers>
                <Toaster />
            </body>
        </html>
    );
}

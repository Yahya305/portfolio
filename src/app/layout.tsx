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

const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const siteTitle = "Yahya Salman | Full Stack Engineer & Technical Consultant";
const siteDescription =
    "Portfolio of Yahya Salman, a Full Stack Engineer and Technical Consultant building scalable web, mobile, AI, and automation systems for business-focused products.";

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: siteTitle,
        template: "%s | Yahya Salman",
    },
    description: siteDescription,
    keywords: [
        "Yahya Salman",
        "Full Stack Engineer",
        "Technical Consultant",
        "Business Analyst",
        "Next.js",
        "React",
        "NestJS",
        "AI Automation",
        "Software Architecture",
    ],
    openGraph: {
        title: siteTitle,
        description: siteDescription,
        url: siteUrl,
        siteName: "Yahya Salman Portfolio",
        type: "website",
        images: [
            {
                url: "/Yahya_Salman_Img.png",
                width: 1200,
                height: 630,
                alt: "Yahya Salman",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: siteTitle,
        description: siteDescription,
        images: ["/Yahya_Salman_Img.png"],
    },
    alternates: {
        canonical: siteUrl,
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

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import Footer from "@/components/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Lakshya 4.0 | IIT Indore Sports Fest",
    description: "Annual sports event at IIT Indore",
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

        <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gray-950 text-gray-200 aurora-bg`}>
        <ClientLayout>
            {children}
            <Footer />
        </ClientLayout>
        </body>
        </html>
    );
}
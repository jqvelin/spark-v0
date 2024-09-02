import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Spark - Listen everytime, everywhere",
    description:
        "This is the place where music is. Discover myriads of artists, albums and songs. Download directly with no restrictions, for free."
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="icon"
                    href="/icon.ico"
                />
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
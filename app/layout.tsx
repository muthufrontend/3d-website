import type { Metadata } from "next";
import { Outfit } from "next/font/google"; // Correct import for App Router
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
    title: "Nano Banana | Future of Freshness",
    description: "Premium cold-pressed juices.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={outfit.className}>{children}</body>
        </html>
    );
}

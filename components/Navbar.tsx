"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Custom Banana Icon
const BananaIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        width="24"
        height="24"
        style={{ minWidth: '24px', minHeight: '24px' }}
    >
        <path
            fillRule="evenodd"
            d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
            clipRule="evenodd"
        />
    </svg>
);

export default function Navbar() {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50);
    });

    return (
        <motion.nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300",
                scrolled
                    ? "bg-white/10 backdrop-blur-xl border-b border-white/10 shadow-lg"
                    : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="p-2 bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg group-hover:scale-110 transition-transform overflow-hidden flex items-center justify-center w-10 h-10">
                        <BananaIcon className="w-6 h-6 text-white text-current" />
                    </div>
                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-500">
                        Nano Banana
                    </span>
                </Link>

                <div className="flex items-center gap-6">
                    {/* Hidden on mobile for simplicity in this MVP */}
                    <div className="hidden md:flex items-center text-white/80 font-medium" style={{ gap: '2rem' }}>
                        <Link href="#" className="hover:text-white transition-colors">Shop</Link>
                        <Link href="#" className="hover:text-white transition-colors">Our Story</Link>
                        <Link href="#" className="hover:text-white transition-colors">Sustainability</Link>
                    </div>

                    <button className="relative px-6 py-2 rounded-full font-bold bg-white text-black overflow-hidden group transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                        <span className="relative z-10">Order Now</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                </div>
            </div>
        </motion.nav>
    );
}

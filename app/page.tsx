"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { products } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductBottleScroll from "@/components/ProductBottleScroll";
import ProductDetails from "@/components/ProductDetails";
import FreshnessSection from "@/components/FreshnessSection";
import BuyNowSection from "@/components/BuyNowSection";
import { cn } from "@/lib/utils";

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const product = products[currentIndex];



    const nextFlavor = () => {
        setCurrentIndex((prev) => (prev + 1) % products.length);
    };

    const prevFlavor = () => {
        setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
    };

    return (
        <main className="relative min-h-screen selection:bg-orange-500 selection:text-white">
            <Navbar />

            {/* Background Gradient Transition */}
            <div
                className="fixed inset-0 -z-10 transition-colors duration-1000 ease-in-out"
                style={{ background: product.gradient }}
            />

            {/* Main Content AnimatePresence */}
            <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
                <motion.div
                    key={product.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                >
                    {/* Section 1: Scrollytelling Bottle */}
                    <ProductBottleScroll product={product} />

                    {/* Section 2: Details */}
                    <div className="relative bg-white z-10 rounded-t-[3rem] -mt-24 pt-10 shadow-[0_-20px_60px_rgba(0,0,0,0.2)]">
                        <ProductDetails product={product} />
                        <FreshnessSection product={product} />
                        <BuyNowSection product={product} />

                        {/* Next Flavor CTA */}
                        <div
                            onClick={nextFlavor}
                            className="relative h-[40vh] flex items-center justify-center cursor-pointer group overflow-hidden bg-black text-white"
                        >
                            {/* Background Image/Gradient for Next Flavor */}
                            <div
                                className="absolute inset-0 opacity-40 transition-transform duration-700 group-hover:scale-110"
                                style={{ background: products[(currentIndex + 1) % products.length].gradient }}
                            />

                            <div className="relative z-10 text-center space-y-4">
                                <p className="text-xl text-gray-300 uppercase tracking-[0.2em]">Next Flavor</p>
                                <h2 className="text-6xl md:text-8xl font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                                    {products[(currentIndex + 1) % products.length].name} <span className="inline-block transition-transform duration-300 group-hover:translate-x-4">→</span>
                                </h2>
                            </div>
                        </div>

                        <Footer />
                    </div>

                </motion.div>
            </AnimatePresence>

            {/* Floating Navigation Controls */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 p-2 rounded-full bg-black/20 backdrop-blur-md border border-white/10 shadow-2xl">
                <button onClick={prevFlavor} className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
                    ←
                </button>

                <div className="flex gap-2 px-2">
                    {products.map((p, idx) => (
                        <button
                            key={p.id}
                            onClick={() => setCurrentIndex(idx)}
                            className={cn(
                                "w-3 h-3 rounded-full transition-all duration-300",
                                idx === currentIndex ? "w-8 bg-white" : "bg-white/30 hover:bg-white/50"
                            )}
                        />
                    ))}
                </div>

                <button onClick={nextFlavor} className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
                    →
                </button>
            </div>

            {/* Side Arrows (Left/Right) for Desktop */}
            <button
                onClick={prevFlavor}
                className="fixed top-1/2 left-4 -translate-y-1/2 z-40 hidden md:flex w-12 h-12 items-center justify-center rounded-full border border-white/20 text-white/50 hover:bg-white/10 hover:text-white transition-all"
            >
                ←
            </button>
            <button
                onClick={nextFlavor}
                className="fixed top-1/2 right-4 -translate-y-1/2 z-40 hidden md:flex w-12 h-12 items-center justify-center rounded-full border border-white/20 text-white/50 hover:bg-white/10 hover:text-white transition-all"
            >
                →
            </button>

        </main>
    );
}

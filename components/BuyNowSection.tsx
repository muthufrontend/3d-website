"use client";

import { motion } from "framer-motion";
import { Product } from "@/data/products";

export default function BuyNowSection({ product }: { product: Product }) {
    return (
        <section className="relative z-10 bg-white py-24 pb-32">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-gray-900 rounded-[2.5rem] p-8 md:p-16 text-white overflow-hidden relative">
                    {/* Background Gradient Blob */}
                    <div
                        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full filter blur-[100px] opacity-30 pointer-events-none"
                        style={{ background: product.gradient }}
                    />

                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl md:text-6xl font-bold">Ready to taste?</h2>
                            <div className="space-y-4">
                                <p className="text-lg text-gray-300 flex items-center gap-3">
                                    <span>🚚</span> {product.buyNowSection.deliveryPromise}
                                </p>
                                <p className="text-lg text-gray-300 flex items-center gap-3">
                                    <span>🛡️</span> {product.buyNowSection.returnPolicy}
                                </p>
                            </div>
                        </div>

                        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-10 space-y-8">
                            <div className="flex items-end justify-between">
                                <div>
                                    <p className="text-gray-400 mb-1">{product.name} Pack</p>
                                    <div className="text-5xl font-bold">{product.buyNowSection.price}</div>
                                </div>
                                <div className="text-gray-400 text-right pb-1">
                                    {product.buyNowSection.unit}
                                </div>
                            </div>

                            <hr className="border-white/10" />

                            <div className="flex items-center gap-4">
                                <div className="flex items-center bg-gray-800 rounded-xl p-1">
                                    <button className="w-10 h-10 flex items-center justify-center text-xl hover:bg-gray-700 rounded-lg transition-colors">-</button>
                                    <span className="w-10 text-center font-bold">1</span>
                                    <button className="w-10 h-10 flex items-center justify-center text-xl hover:bg-gray-700 rounded-lg transition-colors">+</button>
                                </div>
                                <button
                                    className="flex-1 py-4 rounded-xl font-bold text-lg shadow-lg hover:scale-105 transition-transform text-white"
                                    style={{ background: product.themeColor }}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

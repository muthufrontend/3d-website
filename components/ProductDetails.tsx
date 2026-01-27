"use client";

import { motion } from "framer-motion";
import { Product } from "@/data/products";

export default function ProductDetails({ product }: { product: Product }) {
    return (
        <section className="relative z-10 bg-white text-black py-24 rounded-t-[3rem] -mt-24 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    {/* Image Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative aspect-square bg-gray-100 rounded-3xl overflow-hidden shadow-2xl"
                    >
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                            {/* In a real app, this would be a static high-res shot */}
                            <span className="text-xl">{product.detailsSection.imageAlt} Image</span>
                        </div>
                        {/* Decorative Circle */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full mix-blend-multiply filter blur-2xl opacity-70" style={{ backgroundColor: product.themeColor }} />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <h3 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            {product.detailsSection.title}
                        </h3>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            {product.detailsSection.description}
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100">
                            {product.stats.map((stat, idx) => (
                                <div key={idx} className="text-center">
                                    <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br" style={{ backgroundImage: product.gradient }}>
                                        {stat.val}
                                    </div>
                                    <div className="text-sm font-medium text-gray-500 uppercase tracking-widest mt-1">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

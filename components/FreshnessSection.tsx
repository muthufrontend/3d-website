"use client";

import { motion } from "framer-motion";
import { Product } from "@/data/products";

export default function FreshnessSection({ product }: { product: Product }) {
    return (
        <section className="relative z-10 bg-gray-50 py-24">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center space-y-8"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-white text-sm font-bold shadow-sm uppercase tracking-widest text-gray-500">
                        Science of Fresh
                    </span>
                    <h3 className="text-3xl md:text-5xl font-bold text-gray-900">
                        {product.freshnessSection.title}
                    </h3>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        {product.freshnessSection.description}
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 pt-8">
                        {product.buyNowSection.processingParams.map((param, i) => (
                            <div key={i} className="px-6 py-3 rounded-xl bg-white shadow-sm border border-gray-100 font-medium text-gray-700">
                                ✨ {param}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

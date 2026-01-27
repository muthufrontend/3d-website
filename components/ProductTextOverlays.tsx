"use client";

import { MotionValue, motion, useTransform } from "framer-motion";
import { Product } from "@/data/products";

interface ProductTextOverlaysProps {
    product: Product;
    scrollYProgress: MotionValue<number>;
}

const OverlaySection = ({
    title,
    subtitle,
    progress,
    range,
    align = "center",
}: {
    title: string;
    subtitle: string;
    progress: MotionValue<number>;
    range: [number, number];
    align?: "left" | "right" | "center";
}) => {
    const opacity = useTransform(
        progress,
        [range[0] - 0.05, range[0], range[1], range[1] + 0.05],
        [0, 1, 1, 0]
    );
    const y = useTransform(
        progress,
        [range[0] - 0.05, range[1] + 0.05],
        [50, -50]
    );

    const alignClass = align === "left" ? "items-start text-left" : align === "right" ? "items-end text-right" : "items-center text-center";

    return (
        <motion.div
            style={{ opacity, y }}
            className={`absolute inset-0 flex flex-col justify-center px-12 pointer-events-none ${alignClass}`}
        >
            <h2 className="text-6xl md:text-8xl font-bold text-white drop-shadow-lg mb-4">
                {title}
            </h2>
            <p className="text-2xl md:text-3xl text-white/90 font-light max-w-2xl drop-shadow-md">
                {subtitle}
            </p>
        </motion.div>
    );
};

export default function ProductTextOverlays({
    product,
    scrollYProgress,
}: ProductTextOverlaysProps) {
    return (
        <div className="absolute inset-0 z-10 w-full h-full">
            {/* Section 1: Intro */}
            <OverlaySection
                title={product.section1.title}
                subtitle={product.section1.subtitle}
                progress={scrollYProgress}
                range={[0.02, 0.15]}
                align="center"
            />

            {/* Section 2 */}
            <OverlaySection
                title={product.section2.title}
                subtitle={product.section2.subtitle}
                progress={scrollYProgress}
                range={[0.25, 0.40]}
                align="left"
            />

            {/* Section 3 */}
            <OverlaySection
                title={product.section3.title}
                subtitle={product.section3.subtitle}
                progress={scrollYProgress}
                range={[0.50, 0.65]}
                align="right"
            />

            {/* Section 4 */}
            <OverlaySection
                title={product.section4.title}
                subtitle={product.section4.subtitle}
                progress={scrollYProgress}
                range={[0.75, 0.90]}
                align="center"
            />
        </div>
    );
}

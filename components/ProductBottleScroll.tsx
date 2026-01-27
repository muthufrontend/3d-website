"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { Product } from "@/data/products";
import ProductTextOverlays from "./ProductTextOverlays";

interface ProductBottleScrollProps {
    product: Product;
}

export default function ProductBottleScroll({ product }: ProductBottleScrollProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Scroll Progress (0 to 1) attached to container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Map scroll progress to frame index (0 to 119)
    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, 119]);

    // Preload images
    useEffect(() => {
        setIsLoaded(false);
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;
        const totalFrames = 120;

        for (let i = 1; i <= totalFrames; i++) {
            const img = new Image();
            img.src = `${product.folderPath}/${i}.jpg`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === totalFrames) {
                    setImages(loadedImages);
                    setIsLoaded(true);
                }
            };
            // Ensure strictly ordered array
            loadedImages[i - 1] = img;
        }
    }, [product.folderPath]);

    // Canvas Drawing Logic
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || images.length === 0) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Responsive Canvas Sizing
        const resizeCanvas = () => {
            // Set canvas internal resolution to match display size * pixel ratio
            const rect = canvas.getBoundingClientRect();
            const dpr = window.devicePixelRatio || 1;

            // We want a high-res square/portrait canvas
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            ctx.scale(dpr, dpr);
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        const render = () => {
            // Get current frame index from MotionValue
            const currentFrame = Math.floor(frameIndex.get());
            const clampedFrame = Math.max(0, Math.min(119, currentFrame));
            const img = images[clampedFrame];

            if (img) {
                ctx.clearRect(0, 0, canvas.width / (window.devicePixelRatio || 1), canvas.height / (window.devicePixelRatio || 1));

                // "Cover" fit logic (Full Width/Height filling)
                const canvasWidth = canvas.width / (window.devicePixelRatio || 1);
                const canvasHeight = canvas.height / (window.devicePixelRatio || 1);
                const imgRatio = img.width / img.height;
                const canvasRatio = canvasWidth / canvasHeight;

                let drawWidth, drawHeight, offsetX, offsetY;

                // To cover: maximize the image
                if (imgRatio > canvasRatio) {
                    // Image is wider than canvas (crop sides)
                    drawHeight = canvasHeight;
                    drawWidth = canvasHeight * imgRatio;
                    offsetY = 0;
                    offsetX = (canvasWidth - drawWidth) / 2;
                } else {
                    // Image is taller/narrower (crop top/bottom)
                    drawWidth = canvasWidth;
                    drawHeight = canvasWidth / imgRatio;
                    offsetX = 0;
                    offsetY = (canvasHeight - drawHeight) / 2;
                }

                ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
            }

            requestAnimationFrame(render);
        };

        const animationId = requestAnimationFrame(render);

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationId);
        };
    }, [images, frameIndex]);

    return (
        <div ref={containerRef} className="relative h-[500vh] w-full">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {/* Loading State */}
                {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center z-50 text-white font-bold text-2xl animate-pulse bg-black/20 backdrop-blur-sm">
                        Loading Freshness...
                    </div>
                )}

                {/* The Canvas - Absolute Full Fill */}
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full block object-cover"
                    style={{
                        opacity: isLoaded ? 1 : 0,
                        transition: 'opacity 0.5s ease-in-out'
                    }}
                />

                {/* Text Overlays - Absolute Full Fill */}
                <div className="absolute inset-0 w-full h-full pointer-events-none">
                    <ProductTextOverlays product={product} scrollYProgress={scrollYProgress} />
                </div>

                {/* Scroll Down Indicator */}
                <motion.div
                    style={{ opacity: useTransform(scrollYProgress, [0, 0.05], [1, 0]) }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce z-20"
                >
                    ↓ Scroll to Drink
                </motion.div>
            </div>
        </div>
    );
}

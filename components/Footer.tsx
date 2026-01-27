import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-16 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-500">
                        Nano Banana
                    </h3>
                    <p className="text-gray-400">
                        Future of Freshness. Cold-pressed, 100% natural, delivered to your door.
                    </p>
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-4">Shop</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li><Link href="#" className="hover:text-white transition-colors">Mango</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Chocolate</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Pomegranate</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Bundles</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-4">Support</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li><Link href="#" className="hover:text-white transition-colors">FAQ</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Shipping</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Returns</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h4 className="font-bold text-lg">Stay Fresh</h4>
                    <p className="text-gray-400 text-sm">Join our newsletter for exclusive drops and discounts.</p>
                    <div className="flex gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-gray-800 text-white px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 w-full"
                        />
                        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                            →
                        </button>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} Nano Banana Inc. All rights reserved.
            </div>
        </footer>
    );
}

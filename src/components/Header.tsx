"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/home" },
        { name: "Legacy", href: "/legacy" },
        { name: "Events", href: "/events" },
        { name: "Sponsors", href: "/sponsors" },
    ];

    return (
        <motion.nav
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 
                       w-[92%] md:w-[80%] lg:w-[65%] 
                       bg-white/5 backdrop-blur-xl 
                       border border-white/10 
                       rounded-full shadow-lg shadow-black/40 
                       px-6 py-2"
        >
            <div className="flex items-center justify-between h-14">

                {/* Brand / Logo */}
                <Link href="/home" className="flex items-center gap-2 group">
                    <span className="relative text-xl font-semibold text-white tracking-wide">
                        LAKSHYA
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="relative text-gray-300 hover:text-white transition-all duration-300 font-medium group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></span>
                        </Link>
                    ))}

                    {/* CTA Button */}
                    <motion.button
                        whileHover={{ scale: 1.07 }}
                        whileTap={{ scale: 0.93 }}
                        className="px-5 py-2 rounded-full bg-white text-black font-semibold shadow-md hover:bg-white/90 transition duration-300"
                    >
                        Register
                    </motion.button>
                </div>

                {/* Mobile Menu Icon */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-gray-300 hover:text-white"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden flex flex-col gap-4 py-4 text-center border-t border-white/10 mt-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-gray-300 hover:text-white transition font-medium"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button className="w-full px-6 py-2 rounded-full bg-white text-black font-semibold shadow-md">
                        Register
                    </button>
                </div>
            )}
        </motion.nav>
    );
}

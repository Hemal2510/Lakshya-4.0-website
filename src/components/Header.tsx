// src/components/Header.tsx
import Link from "next/link";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Legacy", href: "/legacy" },
    { name: "Events", href: "/events" },
    { name: "Sponsors", href: "/sponsors" },
    { name: "Contact", href: "/contacts" },
    { name: "Teams", href: "/teams" },
];

export default function Header() {
    return (
        <header className="w-full sticky top-0 z-40 bg-gradient-to-r from-blue-900 via-blue-600 to-teal-500 shadow">
            <nav className="flex justify-center items-center gap-10 py-3 text-teal-200 font-bold text-lg">
                {navLinks.map((link, idx) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="hover:text-white transition"
                    >
                        {link.name}
                        {idx < navLinks.length - 1 && <span className="mx-2">|</span>}
                    </Link>
                ))}
            </nav>
        </header>
    );
}

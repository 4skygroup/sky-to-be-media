"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'The Group', href: "https://playtosky.com/" },
        { name: 'About', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Contact', href: '#' },
    ];

    return (
        <header className="flex justify-between items-center px-6 md:px-12 py-2 w-full mx-auto relative z-100">
            {/* Logo /Home */}
            <div className="shrink-0">
                <Link href="/">
                    <Image
                        src="Sky-to-be-media-logo-noir.png"
                        alt="Logo Sky to be Media"
                        width={80}
                        height={28}
                        unoptimized
                        className="object-contain w-auto h-auto max-w-17.5 md:max-w-21.25 cursor-pointer"
                    />
                </Link>
            </div>

            {/* Navigation Desktop */}
            <nav className="hidden md:flex gap-8 text-xs tracking-wider">
                {navLinks.map((link) => (
                    <Link key={link.name} href={link.href} className="text-white hover:text-blue-700 transition-colors">
                        {link.name}
                    </Link>
                ))}
            </nav>

            <button
                onClick={toggleMenu}
                className="relative md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 z-110 focus:outline-none cursor-pointer"
                aria-label="Toggle Menu"
            >
                <span className={`h-0.5 w-full bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`h-0.5 w-full bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`h-0.5 w-full bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>

            {/* Navigation Mobile */}
            <div className={`fixed inset-0 bg-black z-105 flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <nav className="flex flex-col gap-10 text-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={toggleMenu}
                            className="text-3xl font-bold text-white tracking-widest hover:scale-110 transition-transform"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="absolute bottom-12 text-white/60 text-[10px] tracking-widest">
                    A Play To Sky Group Entity
                </div>
            </div>
        </header>
    );
}
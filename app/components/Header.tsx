"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "The Group", href: "https://playtosky.com/", target: "_blank" },
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="flex justify-between items-center px-6 md:px-12 py-2 w-full mx-auto relative z-100">
      {/* Logo / Home */}
      <div className="shrink-0">
        <Link href="/">
          <Image
            src="/Sky-to-be-media-logo-noir.png"
            alt="Logo Sky to be Media"
            width={80}
            height={28}
            unoptimized
            className="object-contain w-auto h-auto max-w-[70px] md:max-w-[85px] cursor-pointer opacity-80"
          />
        </Link>
      </div>

      {/* NAVIGATION DESKTOP */}
      <nav className="hidden md:flex gap-8 text-xs tracking-wider">
          {navLinks.map((link) => (
              link.href.startsWith('http') ? (
                  <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-white/50 transition-colors"
                  >
                      {link.name}
                  </a>
              ) : (
                  <Link
                      key={link.name}
                      href={link.href}
                      className="text-white hover:text-white/50 transition-colors"
                  >
                      {link.name}
                  </Link>
              )
          ))}
      </nav>

      {/* Burger button */}
      <button
        onClick={toggleMenu}
        className="relative md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 z-110 focus:outline-none cursor-pointer"
        aria-label="Toggle Menu"
      >
        <span className={`h-0.5 w-full bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`h-0.5 w-full bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
        <span className={`h-0.5 w-full bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Navigation Mobile */}
      <div className={`fixed inset-0 bg-black z-105 flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <nav className="flex flex-col gap-10 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={toggleMenu}
              className="text-3xl font-normal text-white tracking-widest hover:text-white/60 transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-12 text-white/30 text-[10px] tracking-widest uppercase">
          A Play To Sky Group Entity
        </div>
      </div>
    </header>
  );
}
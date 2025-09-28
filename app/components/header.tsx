"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e5e7eb] bg-white/80 backdrop-blur">
      <nav className="container mx-auto px-4 md:px-10 h-20 md:h-24 flex items-center justify-between">
        <Link href="/" className="text-3xl md:text-4xl font-semibold tracking-tight">
          Leonel Felezario
        </Link>
        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="/" className="text-lg md:text-xl font-medium hover:underline">
            Home
          </Link>
          <Link href="/projects" className="text-lg md:text-xl font-medium hover:underline">
            Projects
          </Link>
          <Link href="/blog" className="text-lg md:text-xl font-medium hover:underline">
            Blog
          </Link>
          <Link href="/contact" className="text-lg md:text-xl font-medium hover:underline">
            Contact
          </Link>
        </div>
        {/* Mobile toggle */}
        <button
          aria-label="Toggle navigation"
          className="md:hidden p-4 rounded hover:bg-[#f3f4f6]"
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-[#e5e7eb] bg-white">
          <div className="container mx-auto px-6 py-5 flex flex-col gap-4">
            <Link href="/" className="py-2 text-lg font-medium" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/projects" className="py-2 text-lg font-medium" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
            <Link href="/blog" className="py-2 text-lg font-medium" onClick={() => setIsOpen(false)}>
              Blog
            </Link>
            <Link
              href="/contact"
              className="py-2 text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e5e7eb] bg-white/80 backdrop-blur">
      <nav className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          Leonel Felezario
        </Link>
        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:underline">
            Home
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:underline">
            Contact
          </Link>
        </div>
        {/* Mobile toggle */}
        <button
          aria-label="Toggle navigation"
          className="md:hidden p-2 rounded hover:bg-[#f3f4f6]"
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-[#e5e7eb] bg-white">
          <div className="container mx-auto px-6 py-3 flex flex-col gap-2">
            <Link href="/" className="py-1 text-sm font-medium" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link
              href="/contact"
              className="py-1 text-sm font-medium"
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

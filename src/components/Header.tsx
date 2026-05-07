"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/company", label: "Company" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[#fafaf8] border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-sm font-bold tracking-tight"
          aria-label="educai — ホーム"
        >
          <span className="text-zinc-950">educ</span>
          <span className="text-cyan-600">ai</span>
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-10"
          aria-label="グローバルナビゲーション"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-xs tracking-widest uppercase font-medium transition-colors duration-150 ${
                pathname === item.href
                  ? "text-zinc-950"
                  : "text-zinc-400 hover:text-zinc-950"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-xs tracking-widest uppercase font-medium border border-zinc-900 px-4 py-2 hover:bg-zinc-950 hover:text-white transition-colors duration-150"
          >
            お問い合わせ →
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-1 text-zinc-600 hover:text-zinc-950 transition-colors"
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="md:hidden border-t border-zinc-200 bg-[#fafaf8] px-6 py-6 flex flex-col gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs tracking-widest uppercase font-medium text-zinc-500 hover:text-zinc-950 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-xs tracking-widest uppercase font-medium border border-zinc-950 px-4 py-3 text-center hover:bg-zinc-950 hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            お問い合わせ →
          </Link>
        </div>
      )}
    </header>
  );
}

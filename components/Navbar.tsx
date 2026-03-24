"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/#about", label: "About" },
    { href: "/#amenities", label: "Amenities" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-royal-900/95 backdrop-blur-2xl shadow-luxury border-b border-gold-500/10"
          : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3.5">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: "linear-gradient(135deg,#E8C96A,#A07730)" }}
          >
            <span className="font-display font-bold text-royal-900 text-lg">रा</span>
          </div>
          <div>
            <div className="font-display font-semibold text-white text-[17px] leading-none">
              Arihant <span className="gold-text">Infra</span>
            </div>
            <div className="text-[9px] font-body tracking-[0.22em] text-gray-500 uppercase mt-0.5">
              Premium Real Estate
            </div>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link ${pathname === l.href ? "active-link" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link href="/#contact" className="hidden lg:inline-flex btn-gold py-3 px-6 text-[10px]">
          <i className="fa-solid fa-download text-[9px]"></i> Download Brochure
        </Link>

        {/* Hamburger */}
        <button
          className="lg:hidden text-white text-xl p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-royal-900/98 backdrop-blur-2xl border-t border-white/5 px-6 py-5 mt-1">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="nav-link text-sm"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="btn-gold mt-2 justify-center"
              onClick={() => setMenuOpen(false)}
            >
              <i className="fa-solid fa-download text-[9px]"></i> Download Brochure
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

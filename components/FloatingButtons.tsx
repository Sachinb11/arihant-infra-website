"use client";
import { useState, useEffect } from "react";

export default function FloatingButtons() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-7 right-7 z-50 flex flex-col gap-3 items-end transition-all duration-500 ${
        show ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none translate-y-4"
      }`}
    >
      <a
        href="tel:+91"
        className="flex items-center gap-2 px-4 py-3 rounded-full font-body text-xs font-bold shadow-gold-lg transition-all hover:-translate-y-1"
        style={{ background: "linear-gradient(135deg,#E8C96A,#A07730)", color: "#060A1E" }}
        aria-label="Call us"
      >
        <i className="fa-solid fa-phone text-xs"></i>
        <span className="hidden sm:inline">Call Now</span>
      </a>
      <a
        href="https://wa.me/91?text=Hi%2C%20I%27m%20interested%20in%20RadhaKrishna%20Apt.%20by%20Arihant%20Infra"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-3 rounded-full font-body text-xs font-bold text-white shadow-luxury transition-all hover:-translate-y-1"
        style={{ background: "#25D366" }}
        aria-label="WhatsApp us"
      >
        <i className="fa-brands fa-whatsapp text-base"></i>
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}

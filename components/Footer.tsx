import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-royal-950 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg,#E8C96A,#A07730)" }}
              >
                <span className="font-display font-bold text-royal-900 text-base">रा</span>
              </div>
              <div>
                <div className="font-display font-semibold text-white text-base leading-none">
                  Arihant <span className="gold-text">Infra</span>
                </div>
                <div className="text-[9px] text-gray-600 font-body tracking-wider mt-0.5">
                  Premium Real Estate
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-xs font-body leading-relaxed mb-5">
              Building premium residential spaces in Palghar since 2012. Your trusted partner for quality homes.
            </p>
            <div className="flex gap-3">
              {["instagram", "facebook-f", "youtube"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-600 hover:text-gold-400 hover:bg-white/10 transition-all text-xs"
                >
                  <i className={`fa-brands fa-${s}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <div className="text-[9px] font-body text-gray-600 tracking-widest uppercase mb-5">
              Quick Links
            </div>
            <div className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/projects", label: "All Projects" },
                { href: "/#about", label: "About Us" },
                { href: "/#amenities", label: "Amenities" },
                { href: "/#contact", label: "Contact" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block text-sm text-gray-500 hover:text-gold-400 transition-colors font-body"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Address */}
          <div>
            <div className="text-[9px] font-body text-gray-600 tracking-widest uppercase mb-5">
              Address
            </div>
            <p className="text-gray-500 text-xs font-body leading-relaxed">
              Plot No. 8, Dholvira Navli Road,
              <br />
              Near Sai Baba Temple,
              <br />
              Palghar (East) – 401404
              <br />
              Maharashtra, India
            </p>
            <div className="mt-4 space-y-2 text-xs font-body">
              <a href="tel:+91" className="flex items-center gap-2 text-gray-500 hover:text-gold-400 transition-colors">
                <i className="fa-solid fa-phone text-gold-500 text-[10px]"></i>
                Call for Inquiry
              </a>
              <a href="https://wa.me/91" className="flex items-center gap-2 text-gray-500 hover:text-green-400 transition-colors">
                <i className="fa-brands fa-whatsapp text-green-500 text-[11px]"></i>
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Team */}
          <div>
            <div className="text-[9px] font-body text-gray-600 tracking-widest uppercase mb-5">
              Professional Team
            </div>
            <div className="space-y-3 text-xs font-body">
              {[
                { role: "Developer", name: "Arihant Infra" },
                { role: "Contact — Sales", name: "Jeet H. Gala" },
                { role: "Contact — Principal", name: "Harilal J. Gala" },
                { role: "Architect", name: "Pranav Deshmukh" },
                { role: "Legal Advisor", name: "Adv. Nevil Chheda" },
              ].map((t) => (
                <div key={t.role}>
                  <div className="text-gray-600 text-[9px] uppercase tracking-wider">{t.role}</div>
                  <div className="text-gray-400 mt-0.5">{t.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="rera">
            <i className="fa-solid fa-certificate text-gold-400 text-xs"></i>
            <span className="text-xs font-body text-gray-500">
              MahaRERA:{" "}
              <span className="text-gold-400 font-semibold">P99000051839</span>
            </span>
          </div>
          <p className="text-xs text-gray-700 font-body text-center">
            © {currentYear} Arihant Infra. All rights reserved. Prices are indicative and subject to change.
          </p>
        </div>
      </div>
    </footer>
  );
}

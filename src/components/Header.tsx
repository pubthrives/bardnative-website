import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { scrollToSection } from "../util/scrollToSection";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.title = "BardNative — Smarter Ad Monetization for Publishers";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      const desc = document.createElement("meta");
      desc.name = "description";
      desc.content =
        "BardNative helps publishers maximize revenue with AI-driven monetization, transparent analytics, and Google Ad Manager integration.";
      document.head.appendChild(desc);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      const keywords = document.createElement("meta");
      keywords.name = "keywords";
      keywords.content =
        "BardNative, ad monetization, Google Ad Manager, publisher ads, website monetization, digital ads, ad revenue optimization, Bard Native";
      document.head.appendChild(keywords);
    }

    const existingFavicon = document.querySelector("link[rel='icon']");
    if (!existingFavicon) {
      const link = document.createElement("link");
      link.rel = "icon";
      link.type = "image/png";
      link.href = "/favicon.png";
      document.head.appendChild(link);
    }
  }, []);

  const handleScroll = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(id), 300);
    } else {
      scrollToSection(id);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between h-20">
        {/* ===== Logo ===== */}
        <a href="/" className="flex items-center">
          <img
            src="/logo.jpeg"
            alt="BardNative Logo"
            loading="eager"
            className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
          />
        </a>

        {/* ===== Desktop Navigation ===== */}
        <nav className="hidden md:flex items-center space-x-2 font-medium text-gray-800 relative">
          {[
            { label: "Home", href: "/", id: "/" },
            { label: "Partners", href: "/#partners", id: "partners" },
            { label: "Solutions", href: "/#solutions", id: "solutions" },
            { label: "Affiliate", href: "/affiliate" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={(e) => {
                if (item.id) {
                  e.preventDefault();
                  handleScroll(item.id);
                }
              }}
              className="relative px-4 py-2 rounded-xl transition-all duration-300
                         hover:bg-gray-100/70 hover:text-[#0D1B4C]
                         active:scale-[0.97] font-medium"
            >
              <span className="relative z-10">{item.label}</span>
              {/* background bubble */}
              <span
                className="absolute inset-0 bg-gray-100/70 scale-0 group-hover:scale-100 rounded-xl transition-all duration-300 ease-out"
                aria-hidden="true"
              ></span>
            </a>
          ))}
        </nav>

        {/* ===== CTA Button (Desktop) ===== */}
        <a
          href="/start"
          className="hidden md:inline-block px-6 py-2.5 rounded-lg text-sm font-semibold text-white 
                     bg-gradient-to-r from-[#0D1B4C] to-[#1E3A8A] hover:from-[#1E3A8A] hover:to-[#0D1B4C]
                     transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-[1px]"
        >
          Start Monetization
        </a>

        {/* ===== Mobile Toggle ===== */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* ===== Mobile Dropdown ===== */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-t border-gray-200 shadow-xl rounded-b-2xl animate-slideDown">
          <nav className="flex flex-col items-center py-6 space-y-4 text-gray-800 font-medium">
            <a href="/" onClick={() => setIsOpen(false)} className="hover:text-[#0D1B4C] transition">
              Home
            </a>
            <a href="/about" onClick={() => setIsOpen(false)} className="hover:text-[#0D1B4C] transition">
              About
            </a>
            <a
              href="/#partners"
              onClick={() => {
                handleScroll("partners");
                setIsOpen(false);
              }}
              className="hover:text-[#0D1B4C] transition"
            >
              Partners
            </a>
            <a
              href="/#solutions"
              onClick={() => {
                handleScroll("solutions");
                setIsOpen(false);
              }}
              className="hover:text-[#0D1B4C] transition"
            >
              Solutions
            </a>
            <a href="/affiliate" onClick={() => setIsOpen(false)} className="hover:text-[#0D1B4C] transition">
              Affiliate
            </a>
            <a href="/contact" onClick={() => setIsOpen(false)} className="hover:text-[#0D1B4C] transition">
              Contact
            </a>

            {/* Mobile CTA Button */}
            <a
              href="/start"
              onClick={() => setIsOpen(false)}
              className="mt-4 px-6 py-2.5 rounded-lg text-sm font-semibold text-white 
                         bg-gradient-to-r from-[#0D1B4C] to-[#1E3A8A] hover:from-[#1E3A8A] hover:to-[#0D1B4C]
                         shadow-md hover:shadow-lg transition-all"
            >
              Start Monetization
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
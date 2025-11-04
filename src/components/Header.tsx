import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { scrollToSection } from "../util/scrollToSection";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // SEO + Meta setup (run once)
  useEffect(() => {
    document.title = "BardNative — Smarter Ad Monetization for Publishers";

    const ensureMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name='${name}']`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        tag.setAttribute("content", content);
        document.head.appendChild(tag);
      }
    };

    ensureMeta(
      "description",
      "BardNative helps publishers maximize revenue with AI-driven monetization, transparent analytics, and Google Ad Manager integration."
    );
    ensureMeta(
      "keywords",
      "BardNative, ad monetization, Google Ad Manager, publisher ads, website monetization, ad revenue optimization, Bard Native"
    );

    const existingFavicon = document.querySelector("link[rel='icon']");
    if (!existingFavicon) {
      const link = document.createElement("link");
      link.rel = "icon";
      link.type = "image/png";
      link.href = "/favicon.png";
      document.head.appendChild(link);
    }
  }, []);

  // Handle section scroll
  const handleScroll = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(id), 400);
    } else {
      scrollToSection(id);
    }
    setIsOpen(false);
  };

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-20">
        {/* ===== Logo ===== */}
        <a href="/" className="flex items-center shrink-0">
          <img
            src="/logo.jpeg"
            alt="BardNative Logo"
            loading="eager"
            fetchPriority="high"
            className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
          />
        </a>

        {/* ===== Desktop Navigation ===== */}
        <nav className="hidden md:flex items-center space-x-2 font-medium text-gray-800">
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
              className="relative group px-4 py-2 rounded-lg transition-all duration-300 hover:text-[#0D1B4C] hover:bg-gray-100/60 active:scale-[0.97]"
            >
              <span>{item.label}</span>
              <span
                className="absolute inset-0 rounded-lg bg-gray-100/60 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out"
                aria-hidden="true"
              ></span>
            </a>
          ))}
        </nav>

        {/* ===== CTA Button (Desktop) ===== */}
        <a
          href="/start"
          className="hidden md:inline-block px-6 py-2.5 rounded-lg text-sm font-semibold text-white 
                     bg-gradient-to-r from-[#0D1B4C] to-[#1E3A8A]
                     hover:from-[#1E3A8A] hover:to-[#0D1B4C]
                     transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-[1px]"
        >
          Start Monetization
        </a>

        {/* ===== Mobile Toggle ===== */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* ===== Mobile Dropdown ===== */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-t border-gray-200 shadow-xl rounded-b-2xl animate-slideDown">
          <nav className="flex flex-col items-center py-6 space-y-5 text-gray-800 font-medium">
            {[
              { label: "Home", action: () => handleScroll("/") },
              { label: "About", action: () => (window.location.href = "/about") },
              { label: "Partners", action: () => handleScroll("partners") },
              { label: "Solutions", action: () => handleScroll("solutions") },
              { label: "Affiliate", action: () => (window.location.href = "/affiliate") },
              { label: "Contact", action: () => (window.location.href = "/contact") },
            ].map((link, i) => (
              <button
                key={i}
                onClick={link.action}
                className="hover:text-[#0D1B4C] transition text-base"
              >
                {link.label}
              </button>
            ))}

            {/* ===== Mobile CTA ===== */}
            <a
              href="/start"
              onClick={() => setIsOpen(false)}
              className="mt-4 px-6 py-2.5 rounded-lg text-sm font-semibold text-white 
                         bg-gradient-to-r from-[#0D1B4C] to-[#1E3A8A]
                         hover:from-[#1E3A8A] hover:to-[#0D1B4C]
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
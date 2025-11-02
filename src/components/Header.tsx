import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { scrollToSection } from "../util/scrollToSection";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // 🧠 SEO + Favicon Setup (runs once on mount)
  useEffect(() => {
    document.title = "BardNative — Smarter Ad Monetization for Publishers";

    // ✅ Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      const desc = document.createElement("meta");
      desc.name = "description";
      desc.content =
        "BardNative helps publishers maximize revenue with AI-driven monetization, transparent analytics, and Google Ad Manager integration.";
      document.head.appendChild(desc);
    }

    // ✅ Meta Keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      const keywords = document.createElement("meta");
      keywords.name = "keywords";
      keywords.content =
        "BardNative, ad monetization, Google Ad Manager, publisher ads, website monetization, digital ads, ad revenue optimization, Bard Native";
      document.head.appendChild(keywords);
    }

    // ✅ Add favicon dynamically
    const existingFavicon = document.querySelector("link[rel='icon']");
    if (!existingFavicon) {
      const link = document.createElement("link");
      link.rel = "icon";
      link.type = "image/png";
      link.href = "/favicon.png"; // ✅ Use favicon from public folder
      document.head.appendChild(link);
    }
  }, []);

  // ✅ Handle Navigation Click
  const handleNavClick = (id: string) => {
    setIsOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(id), 300);
    } else {
      scrollToSection(id);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between h-20 md:h-22">
        {/* ===== Logo ===== */}
        <a href="/" className="flex items-center">
          <img
            src="/logo.jpeg"
            alt="BardNative Logo"
            loading="eager"
            fetchPriority="high"
            className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
            style={{ maxHeight: "48px" }}
          />
        </a>

        {/* ===== Desktop Navigation ===== */}
        <nav className="hidden md:flex space-x-10 font-medium text-gray-700">
          <a
            onClick={() => handleNavClick("/")}
            className="cursor-pointer hover:text-[#1E3A8A] transition"
          >
            Home
          </a>
          <a href="/about" className="hover:text-[#1E3A8A] transition">
            About
          </a>
          <a
            onClick={() => handleNavClick("partners")}
            className="cursor-pointer hover:text-[#1E3A8A] transition"
          >
            Partners
          </a>
          <a
            onClick={() => handleNavClick("solutions")}
            className="cursor-pointer hover:text-[#1E3A8A] transition"
          >
            Solutions
          </a>
          <a href="/Affiliate" className="hover:text-[#1E3A8A] transition">
            Affiliate
          </a>
          <a href="/contact" className="hover:text-[#1E3A8A] transition">
            Contact
          </a>
        </nav>

        {/* ===== CTA Button (Desktop) ===== */}
        <a
          href="/start"
          className="hidden md:inline-block px-6 py-2.5 rounded-lg text-sm font-semibold text-white 
                     bg-[#1E3A8A] hover:bg-[#1E40AF] transition-all duration-300 
                     shadow-sm hover:shadow-md hover:-translate-y-[2px]"
        >
          Start Monetization
        </a>

        {/* ===== Mobile Menu Button ===== */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* ===== Mobile Dropdown Menu ===== */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-t border-gray-200 shadow-xl rounded-b-2xl animate-slideDown">
          <nav className="flex flex-col items-center py-6 space-y-4 text-gray-800 font-medium">
            <a
              href="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#1E3A8A] transition"
            >
              Home
            </a>
            <a
              href="/about"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#1E3A8A] transition"
            >
              About
            </a>
            <a
              onClick={() => handleNavClick("partners")}
              className="cursor-pointer hover:text-[#1E3A8A] transition"
            >
              Partners
            </a>
            <a
              onClick={() => handleNavClick("solutions")}
              className="cursor-pointer hover:text-[#1E3A8A] transition"
            >
              Solutions
            </a>
            <a
              href="/Affiliate"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#1E3A8A] transition"
            >
              Affiliate
            </a>
            <a
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#1E3A8A] transition"
            >
              Contact
            </a>

            <a
              href="/start"
              onClick={() => setIsOpen(false)}
              className="mt-4 px-6 py-2.5 rounded-lg text-sm font-semibold text-white 
                         bg-[#1E3A8A] shadow-md hover:bg-[#1E40AF] transition-all"
            >
              Start Monetization
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
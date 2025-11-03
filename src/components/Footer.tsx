import { useLocation, useNavigate } from "react-router-dom";
import { scrollToSection } from "../util/scrollToSection";

export default function Footer() {
  const year = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  // Smooth scroll + redirect handler
  const handleNavClick = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(id), 400);
    } else {
      scrollToSection(id);
    }
  };

  return (
    <footer className="relative bg-[#0A0F1F] text-gray-300 pt-20 pb-10 overflow-hidden">
      {/* ===== Decorative Grid Background ===== */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"
        aria-hidden="true"></div>
      {/* ===== Soft Glow Accent ===== */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#1E3A8A]/40 via-blue-500/20 to-transparent blur-3xl rounded-full opacity-50"></div>

      {/* ===== Footer Content Grid ===== */}    <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-12">     {/* ===== Logo + About ===== */}
        <div className="col-span-2">
          <a href="/" className="flex items-center mb-4">
            <a href="/" className="flex items-center mb-4">
              <img
                src="/white.png"
                alt="BardNative Logo"
                className="w-30 h-30 md:w-28 md:h-28 object-contain transition-transform duration-300 hover:scale-105"
              />
            </a>
          </a>
          <p className="text-sm text-gray-400 leading-relaxed max-w-md">
            AI-driven monetization that empowers publishers with smarter ad
            delivery, transparent analytics, and premium demand — powered by
            Google Ad Manager.
          </p>
        </div>

        {/* ===== Company Links ===== */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-lg tracking-wide">
            Company
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="/about"
                className="hover:text-gray-100 transition-colors duration-300">
                About
              </a>
            </li>
            <li>
              <a
                href="/#partners"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("partners");
                }}
                className="hover:text-gray-100 transition-colors duration-300">
                Partners
              </a>
            </li>
            <li>
              <a
                href="/#solutions"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("solutions");
                }}
                className="hover:text-gray-100 transition-colors duration-300">
                Solutions
              </a>
            </li>
            <li>
              <a
                href="/Affiliate"
                className="hover:text-gray-100 transition-colors duration-300">
                Affiliate
              </a>
            </li>
          </ul>
        </div>

        {/* ===== Get Started ===== */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-lg tracking-wide">
            Get Started
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="/start"
                className="hover:text-gray-100 transition-colors duration-300">
                Start Monetization{" "}
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-gray-100 transition-colors duration-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* ===== Divider ===== */}
      <div className="relative mt-16 mb-6">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-600/40 to-transparent"></div>
      </div>

      {/* ===== Bottom Text ===== */}
      <div className="text-center text-sm text-gray-500">
        © {year}{" "}
        <span className="text-white font-medium hover:text-gray-100 transition-colors duration-300">
          BardNative
        </span>{" "}
        — Empowering publishers through AI and transparency.
      </div>
    </footer>
  );
}

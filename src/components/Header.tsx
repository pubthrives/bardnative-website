import { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { scrollToSection } from "../util/scrollToSection";

const ANCHORS = [
  { label: "Solutions", id: "solutions" },
  { label: "Why us", id: "whyus" },
  { label: "Integrations", id: "partners" },
];
const PAGES = [
  { label: "Affiliate", href: "/affiliate" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const goAnchor = (id: string) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(id), 420);
    } else {
      scrollToSection(id);
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-ink/80 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-bn flex h-[72px] items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0" aria-label="BardNative home">
          <img
            src="/white.png"
            alt="BardNative"
            fetchPriority="high"
            className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 hover:scale-[1.03]"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1 text-sm font-medium text-ice-dim">
          {ANCHORS.map((a) => (
            <button
              key={a.id}
              onClick={() => goAnchor(a.id)}
              className="px-3.5 py-2 rounded-lg transition hover:text-white hover:bg-white/[0.06]"
            >
              {a.label}
            </button>
          ))}
          {PAGES.map((p) => (
            <Link
              key={p.href}
              to={p.href}
              className="px-3.5 py-2 rounded-lg transition hover:text-white hover:bg-white/[0.06]"
            >
              {p.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          to="/start"
          className="hidden lg:inline-flex items-center gap-1.5 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5"
        >
          Start monetizing
          <ArrowUpRight className="w-4 h-4" />
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="lg:hidden grid place-items-center w-10 h-10 rounded-lg border border-white/10 bg-white/[0.03] text-ice"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile sheet */}
      {open && (
        <div className="lg:hidden absolute top-[72px] inset-x-0 bg-ink/95 backdrop-blur-xl border-t border-white/10 animate-slide-down">
          <nav className="container-bn flex flex-col py-5 gap-1 text-ice-dim">
            {ANCHORS.map((a) => (
              <button
                key={a.id}
                onClick={() => goAnchor(a.id)}
                className="text-left px-3 py-3 rounded-lg text-base hover:text-white hover:bg-white/[0.05]"
              >
                {a.label}
              </button>
            ))}
            {PAGES.map((p) => (
              <Link
                key={p.href}
                to={p.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-lg text-base hover:text-white hover:bg-white/[0.05]"
              >
                {p.label}
              </Link>
            ))}
            <Link
              to="/start"
              onClick={() => setOpen(false)}
              className="mt-3 btn-primary w-full"
            >
              Start monetizing <ArrowUpRight className="w-4 h-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

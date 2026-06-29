import { useLocation, useNavigate, Link } from "react-router-dom";
import { Linkedin, Facebook, Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import { scrollToSection } from "../util/scrollToSection";

export default function Footer() {
  const year = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const goAnchor = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(id), 420);
    } else {
      scrollToSection(id);
    }
  };

  return (
    <footer className="relative mt-10 border-t border-white/10 bg-ink-900/70">
      {/* gradient hairline */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal/40 to-transparent" />

      <div className="container-bn grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr]">
        {/* brand */}
        <div>
          <Link to="/" className="inline-flex">
            <img src="/white.png" alt="BardNative" className="h-9 w-auto object-contain" />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-mute">
            Real-time ad yield for modern publishers. Premium demand, smarter
            optimization, and reporting you can audit — built on Google Ad Manager.
          </p>

          <div className="mt-6 flex flex-col gap-2 text-sm">
            <a
              href="mailto:adops@bardnative.com"
              className="inline-flex w-fit items-center gap-2 text-ice-dim transition hover:text-white"
            >
              <Mail className="h-4 w-4 text-signal-400" /> adops@bardnative.com
            </a>
            <a
              href="https://wa.me/447473903586"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 text-ice-dim transition hover:text-white"
            >
              <MessageCircle className="h-4 w-4 text-mint" /> WhatsApp support
            </a>
          </div>

          <div className="mt-6 flex gap-2.5">
            {[
              { Icon: Linkedin, href: "https://www.linkedin.com/", label: "LinkedIn" },
              { Icon: Facebook, href: "https://www.facebook.com/", label: "Facebook" },
              { Icon: Mail, href: "mailto:adops@bardnative.com", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-mute transition hover:border-signal/40 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* product */}
        <div>
          <h4 className="font-mono text-[11px] uppercase tracking-wider text-mute">Product</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <button onClick={() => goAnchor("solutions")} className="text-ice-dim transition hover:text-white">
                Solutions
              </button>
            </li>
            <li>
              <button onClick={() => goAnchor("whyus")} className="text-ice-dim transition hover:text-white">
                Why BardNative
              </button>
            </li>
            <li>
              <button onClick={() => goAnchor("partners")} className="text-ice-dim transition hover:text-white">
                Integrations
              </button>
            </li>
            <li>
              <Link to="/affiliate" className="text-ice-dim transition hover:text-white">
                Affiliate
              </Link>
            </li>
          </ul>
        </div>

        {/* company */}
        <div>
          <h4 className="font-mono text-[11px] uppercase tracking-wider text-mute">Company</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link to="/about" className="text-ice-dim transition hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-ice-dim transition hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/start"
                className="inline-flex items-center gap-1 text-ice-dim transition hover:text-white"
              >
                Start monetizing <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="container-bn flex flex-col items-center justify-between gap-3 py-6 text-xs text-mute sm:flex-row">
          <p>© {year} BardNative. All rights reserved.</p>
          <p className="font-mono">Empowering publishers through real-time yield.</p>
        </div>
      </div>
    </footer>
  );
}

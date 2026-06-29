import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "./ui";

export default function CTA() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="container-bn">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink-800/70 p-10 text-center shadow-panel sm:p-16">
            {/* glows */}
            <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-signal/25 blur-[120px]" />
            <div className="pointer-events-none absolute -bottom-24 right-0 h-64 w-80 rounded-full bg-violet/20 blur-[120px]" />
            <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:46px_46px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

            <div className="relative">
              <p className="eyebrow">// READY WHEN YOU ARE</p>
              <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
                Start earning more from{" "}
                <span className="gradient-text">day one.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-mute sm:text-lg">
                Apply in two minutes. Our team reviews your site and gets you live
                with premium demand, higher fill, and reporting you can trust.
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <Link to="/start" className="btn-primary">
                  Start monetizing <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/contact" className="btn-ghost">
                  Talk to us
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

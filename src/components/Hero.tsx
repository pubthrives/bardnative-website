import { ArrowRight, ShieldCheck } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16">
      <div className="container-bn">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5">
            <ShieldCheck className="w-4 h-4 text-signal-400" />
            <span className="font-mono text-[11px] uppercase tracking-eyebrow text-ice-dim">
              Google-certified MCM partner
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-[2.6rem] leading-[1.05] sm:text-6xl font-bold tracking-tight text-white"
          >
            More revenue from
            <br />
            the traffic you{" "}
            <span className="gradient-text">already have.</span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-mute">
            BardNative tunes your ad stack in real time — header bidding, AdX
            demand, and price floors optimized per impression — with reporting
            you can actually audit.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <Link to="/start" className="btn-primary">
              Start monetizing <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="#solutions" className="btn-ghost">
              See solutions
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 font-mono text-xs text-mute">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-mint" /> NET-45 payouts
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" /> 25+ GEOs
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-violet" /> Free IVT protection
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
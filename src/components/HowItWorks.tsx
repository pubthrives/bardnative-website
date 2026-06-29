import { Plug, SlidersHorizontal, BadgeDollarSign } from "lucide-react";
import { Reveal, SectionHeading } from "./ui";

const steps = [
  {
    n: "01",
    icon: Plug,
    title: "Connect your inventory",
    desc: "Add one BardNative tag or grant MCM access. We map your placements and inherit your existing setup — zero downtime.",
  },
  {
    n: "02",
    icon: SlidersHorizontal,
    title: "We optimize in real time",
    desc: "Header bidding, AdX, and open bidding compete on every request while our engine tunes floors and density per impression.",
  },
  {
    n: "03",
    icon: BadgeDollarSign,
    title: "Get paid, on time",
    desc: "Watch revenue in a live dashboard and receive guaranteed NET-45 payouts — reconciled to the impression.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="container-bn">
        <SectionHeading
          eyebrow="// HOW IT WORKS"
          title={
            <>
              Three steps from setup to <span className="gradient-text">payout</span>
            </>
          }
        />

        <div className="relative mt-16">
          {/* connecting line (desktop) */}
          <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent md:block" />

          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.n} delay={i * 0.1}>
                  <div className="relative">
                    {/* node */}
                    <div className="mb-6 flex items-center gap-4">
                      <div className="relative grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-ink-800 ring-1 ring-white/12">
                        <Icon className="h-5 w-5 text-signal-400" />
                        <span className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-brand font-mono text-[10px] font-bold text-white shadow-glow">
                          {i + 1}
                        </span>
                      </div>
                      <span className="font-mono text-5xl font-bold leading-none text-white/[0.06]">
                        {s.n}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-white">{s.title}</h3>
                    <p className="mt-3 max-w-sm leading-relaxed text-mute">{s.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

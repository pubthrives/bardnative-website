import { Zap, BrainCircuit, Wallet } from "lucide-react";
import { Reveal, SectionHeading } from "./ui";

const pillars = [
  {
    icon: Zap,
    title: "Live in minutes",
    desc: "A single tag connects your inventory to premium demand. Streamlined AdX and GAM onboarding, no engineering sprint required.",
    accent: "from-signal/25",
  },
  {
    icon: BrainCircuit,
    title: "AI yield optimization",
    desc: "Price floors, demand routing, and ad density are tuned per impression, so every request clears at the highest viable CPM.",
    accent: "from-violet/25",
  },
  {
    icon: Wallet,
    title: "Transparent payouts",
    desc: "Guaranteed NET-45 by bank or crypto, reconciled against the same impression-level numbers you see in your dashboard.",
    accent: "from-mint/25",
  },
];

export default function Advantages() {
  return (
    <section id="platform" className="relative py-20 sm:py-28">
      <div className="container-bn">
        <SectionHeading
          eyebrow="// THE PLATFORM"
          title={
            <>
              Built to grow yield, <span className="gradient-text">not guesswork</span>
            </>
          }
          lead="Automation, intelligence, and transparency working on every impression — so you scale faster and keep control of your stack."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="card-grad group h-full p-8 transition-transform duration-300 hover:-translate-y-1">
                  <div
                    className={`mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${p.accent} to-transparent ring-1 ring-white/10`}
                  >
                    <Icon className="h-6 w-6 text-ice" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-mute">{p.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

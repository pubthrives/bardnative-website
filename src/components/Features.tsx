import {
  Megaphone,
  BadgeCheck,
  Wallet,
  Network,
  BarChart3,
  Sparkles,
} from "lucide-react";
import { Reveal, SectionHeading } from "./ui";

const features = [
  {
    icon: Megaphone,
    title: "Managed accounts",
    desc: "Premium advertiser demand with flexible rev-shares like 20/80 or 5/95 — full control, maximum yield, no minimums.",
    span: "lg:col-span-2",
  },
  {
    icon: BadgeCheck,
    title: "Fast-track approval",
    desc: "AdX and GAM access in record time with dedicated partner support.",
    span: "",
  },
  {
    icon: Wallet,
    title: "Hassle-free payouts",
    desc: "Guaranteed monthly payments via Google or trusted partners.",
    span: "",
  },
  {
    icon: Network,
    title: "Open & header bidding",
    desc: "Stack server-side and client-side demand so every impression clears in a real auction — more competition, higher CPMs.",
    span: "lg:col-span-2",
  },
  {
    icon: BarChart3,
    title: "100% transparency",
    desc: "Live dashboards for revenue, fill, and viewability — impression-level, auditable, always on.",
    span: "lg:col-span-2",
  },
  {
    icon: Sparkles,
    title: "Smart ad formats",
    desc: "Sticky, native, and video that lift RPM without hurting UX.",
    span: "",
  },
];

export default function Features() {
  return (
    <section id="solutions" className="relative py-20 sm:py-28">
      <div className="container-bn">
        <SectionHeading
          eyebrow="// SOLUTIONS"
          title={
            <>
              Everything your ad stack needs, <span className="gradient-text">in one place</span>
            </>
          }
          lead="A complete monetization suite built for transparency, scale, and long-term revenue growth."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.title} delay={(i % 3) * 0.06} className={f.span}>
                <div className="card-grad group flex h-full flex-col p-7 transition-transform duration-300 hover:-translate-y-1">
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-white/[0.04] ring-1 ring-white/10 transition group-hover:bg-signal/10">
                    <Icon className="h-5 w-5 text-signal-400" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white">{f.title}</h3>
                  <p className="mt-2 leading-relaxed text-mute">{f.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

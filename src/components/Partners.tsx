import {
  ServerCog,
  Network,
  Layers,
  FileCheck2,
  ShieldCheck,
  Globe2,
  CheckCircle2,
} from "lucide-react";
import { Reveal, SectionHeading } from "./ui";

const integrations = [
  { icon: ServerCog, name: "Google Ad Manager", note: "Native MCM management" },
  { icon: Layers, name: "Google AdX", note: "Premium exchange demand" },
  { icon: Network, name: "Open Bidding", note: "Server-side competition" },
  { icon: Layers, name: "Prebid · Header Bidding", note: "Client-side auctions" },
  { icon: FileCheck2, name: "Ads.txt · sellers.json", note: "Verified supply chain" },
  { icon: ShieldCheck, name: "IVT protection", note: "MRC-accredited filtering" },
];

const trust = [
  "Google Certified MCM Partner",
  "GDPR & CCPA compliant",
  "99.9% serving uptime",
  "24/7 ad-ops monitoring",
];

export default function Partners() {
  return (
    <section id="partners" className="relative py-20 sm:py-28">
      <div className="container-bn">
        <SectionHeading
          eyebrow="// INTEGRATIONS"
          title={
            <>
              Enterprise demand, <span className="gradient-text">certified infrastructure</span>
            </>
          }
          lead="BardNative runs on the platforms and standards publishers trust — fully compliant, fully transparent, no black boxes."
        />

        {/* certified highlight */}
        <Reveal className="mt-14">
          <div className="card-grad flex flex-col items-center gap-5 p-7 text-center sm:flex-row sm:text-left">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand-soft ring-1 ring-white/10">
              <Globe2 className="h-7 w-7 text-signal-400" />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-lg font-semibold text-white">
                A direct Google Multiple Customer Management partner
              </h3>
              <p className="mt-1 text-sm text-mute">
                Your inventory is managed inside Google's ecosystem — the same demand, with optimization and reporting layered on top.
              </p>
            </div>
          </div>
        </Reveal>

        {/* integration cards */}
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {integrations.map((it, i) => {
            const Icon = it.icon;
            return (
              <Reveal key={it.name} delay={(i % 3) * 0.06}>
                <div className="card-grad flex items-center gap-4 p-5">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/[0.04] ring-1 ring-white/10">
                    <Icon className="h-5 w-5 text-ice" />
                  </div>
                  <div>
                    <p className="font-display text-[15px] font-semibold text-white">{it.name}</p>
                    <p className="font-mono text-[11px] text-mute">{it.note}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* trust bar */}
        <Reveal className="mt-10">
          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
            {trust.map((t) => (
              <span key={t} className="inline-flex items-center gap-2 font-mono text-xs text-ice-dim">
                <CheckCircle2 className="h-4 w-4 text-mint" />
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

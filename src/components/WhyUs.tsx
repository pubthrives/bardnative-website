import { Check, Minus } from "lucide-react";
import { Reveal, SectionHeading } from "./ui";

const rows = [
  { feature: "Premium demand (AdX, open & header bidding)", others: true },
  { feature: "Viewability optimization", others: true },
  { feature: "High-impact ads (sticky, video, native)", others: true },
  { feature: "Automated price-floor optimization", others: false },
  { feature: "Smart ad refresh", others: false },
  { feature: "Fast-track approval", others: false },
  { feature: "Free IVT protection", others: false },
  { feature: "Impression-level transparency", others: false },
  { feature: "Aggregated payments", others: true },
  { feature: "Dedicated account manager", others: false },
];

function Cell({ on, brand = false }: { on: boolean; brand?: boolean }) {
  if (on)
    return (
      <span
        className={`mx-auto grid h-7 w-7 place-items-center rounded-full ${
          brand ? "bg-mint/15 text-mint" : "bg-white/[0.06] text-ice-dim"
        }`}
      >
        <Check className="h-4 w-4" strokeWidth={2.5} />
      </span>
    );
  return (
    <span className="mx-auto grid h-7 w-7 place-items-center rounded-full bg-white/[0.03] text-mute/50">
      <Minus className="h-4 w-4" />
    </span>
  );
}

export default function WhyUs() {
  return (
    <section id="whyus" className="relative py-20 sm:py-28">
      <div className="container-bn">
        <SectionHeading
          eyebrow="// WHY BARDNATIVE"
          title={
            <>
              The same inventory, <span className="gradient-text">more revenue</span>
            </>
          }
          lead="See how our monetization suite compares to a standard ad network."
        />

        <Reveal className="mt-14">
          <div className="card-grad overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="p-5 font-mono text-[11px] uppercase tracking-wider text-mute">
                      Capability
                    </th>
                    <th className="p-5 text-center font-mono text-[11px] uppercase tracking-wider text-mute">
                      Others
                    </th>
                    <th className="relative p-5 text-center">
                      <span className="font-display text-sm font-semibold text-white">BardNative</span>
                      <span className="absolute inset-x-0 bottom-0 h-px bg-brand" />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr
                      key={r.feature}
                      className={`border-b border-white/[0.06] transition-colors hover:bg-white/[0.02] ${
                        i === rows.length - 1 ? "border-b-0" : ""
                      }`}
                    >
                      <td className="p-5 text-sm font-medium text-ice-dim">{r.feature}</td>
                      <td className="p-5 text-center">
                        <Cell on={r.others} />
                      </td>
                      <td className="bg-gradient-to-b from-signal/[0.06] to-violet/[0.06] p-5 text-center">
                        <Cell on brand />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

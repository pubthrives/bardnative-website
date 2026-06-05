import { Megaphone, Zap, Wallet, Network, BarChart, BadgeCheck } from "lucide-react";

const features = [
  {
    icon: <Megaphone className="w-8 h-8 text-blue-500" />,
    title: "Managed Accounts",
    desc: "Access premium advertisers and flexible rev shares like 20/80 or 5/95 — giving you full control and maximum yield.",
  },
  {
    icon: <BadgeCheck className="w-8 h-8 text-purple-500" />,
    title: "Fast-Track Approval",
    desc: "Get AdX & GAM access in record time with BardNative’s streamlined onboarding and dedicated partner support.",
  },
  {
    icon: <Wallet className="w-8 h-8 text-green-500" />,
    title: "Hassle-Free Payouts",
    desc: "Guaranteed monthly payments — on time, every time — via Google or trusted BardNative payment partners.",
  },
  {
    icon: <Network className="w-8 h-8 text-pink-500" />,
    title: "Open-Bidding Integration",
    desc: "Increase competition and CPMs with seamless open-bidding and header-bidding integrations.",
  },
  {
    icon: <BarChart className="w-8 h-8 text-indigo-500" />,
    title: "100% Transparency",
    desc: "Access live dashboards showing real-time revenue, fill rate, and performance insights — with total visibility.",
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-500" />,
    title: "Innovative Ad Formats",
    desc: "Enhance user experience and engagement with high-performing, policy-safe ad formats designed for speed.",
  },
];

export default function Features() {
  return (
    <section
      id="solutions"
      className="relative bg-gradient-to-b from-white via-gray-50 to-gray-100 py-28 overflow-hidden border-t border-gray-100"
    >
      {/* Soft Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 left-1/3 w-[500px] h-[500px] bg-[#0D1B4C]/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/3 w-[450px] h-[450px] bg-[#142E6E]/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D1B4C] to-[#142E6E]">
              Solutions
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            BardNative delivers high-performance ad monetization built for
            transparency, scalability, and long-term growth.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <div
              key={i}
              className="group relative bg-white border border-gray-100 rounded-3xl p-10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Accent background on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-[#0D1B4C]/5 to-[#142E6E]/5 blur-xl rounded-3xl"></div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-[#0D1B4C]/10">
                  {f.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {f.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{f.desc}</p>
              </div>

              {/* Bottom Accent Line */}
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#0D1B4C]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { Megaphone, Zap, Wallet, Network, BarChart, BadgeCheck } from "lucide-react";

const features = [
  {
    icon: <Megaphone className="w-8 h-8 text-blue-500" />,
    title: "Managed Accounts",
    desc: "Choose premium advertisers and manage flexible rev shares like 20/80 up to 5/95 for maximum yield and control.",
  },
  {
    icon: <BadgeCheck className="w-8 h-8 text-purple-500" />,
    title: "Fast-Track Approval",
    desc: "Get AdX and GAM access faster with BardNative’s optimized onboarding and dedicated account managers.",
  },
  {
    icon: <Wallet className="w-8 h-8 text-green-500" />,
    title: "Hassle-Free Payouts",
    desc: "Enjoy secure and on-time monthly payouts directly through Google or BardNative partners, every time.",
  },
  {
    icon: <Network className="w-8 h-8 text-pink-500" />,
    title: "Open-Bidding Integration",
    desc: "Maximize competition with multiple demand partners and header bidding setups that drive higher CPMs.",
  },
  {
    icon: <BarChart className="w-8 h-8 text-indigo-500" />,
    title: "100% Transparency",
    desc: "Get real-time insights into revenue, viewability, and bid competition through clear, live dashboards.",
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-500" />,
    title: "Innovative Ad Formats",
    desc: "Boost engagement with impactful, policy-compliant ad formats designed for speed, UX, and monetization.",
  },
];

export default function Features() {
  return (
    <section
      id="solutions"
      className="relative bg-gradient-to-b from-white to-gray-50 py-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-100/30 via-transparent to-blue-100/30 blur-3xl opacity-40 pointer-events-none"></div>

      <div className="bn-container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-[#1E3A8A]">
              Solutions
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            BardNative delivers high-performance ad monetization designed for
            modern publishers — fast, transparent, and revenue-focused.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((f) => (
            <div
              key={f.title}
              className="group bg-white/80 backdrop-blur-md rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-8 border border-gray-100 relative overflow-hidden"
            >
              {/* Accent glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-purple-500/5 to-blue-500/5 blur-2xl"></div>

              <div className="relative z-10">
                <div className="flex justify-center items-center w-14 h-14 mx-auto mb-6 rounded-full bg-gradient-to-tr from-gray-100 to-gray-50 shadow-inner">
                  {f.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  {f.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

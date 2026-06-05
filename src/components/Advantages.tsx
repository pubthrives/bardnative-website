import { Clock, TrendingUp, Wallet } from "lucide-react";

export default function Advantages() {
  return (
    <section className="relative overflow-hidden py-28 bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-900">
      {/* ===== Soft Gradient Background Glow ===== */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 left-1/3 w-[600px] h-[600px] bg-[#0D1B4C]/10 blur-[160px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#142E6E]/10 blur-[180px] rounded-full"></div>
      </div>

      {/* ===== Content Container ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Powering the Future of{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D1B4C] to-[#142E6E]">
            Monetization
          </span>
        </h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-20">
          BardNative empowers publishers with automation, AI insights, and full
          transparency — helping you grow smarter, faster, and with more control.
        </p>

        {/* ===== Advantage Cards ===== */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="group relative bg-white border border-gray-100 rounded-3xl p-10 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-[#0D1B4C]/10 group-hover:bg-[#0D1B4C]/20 transition">
                <Clock size={48} className="text-[#0D1B4C]" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-900">
              Instant Setup
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Integrate BardNative in minutes — optimized AdX setup and faster
              onboarding built for modern publishers.
            </p>
            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#0D1B4C]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all"></div>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-white border border-gray-100 rounded-3xl p-10 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-[#142E6E]/10 group-hover:bg-[#142E6E]/20 transition">
                <TrendingUp size={48} className="text-[#142E6E]" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-900">
              AI Optimization
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our adaptive AI maximizes fill rate, CPMs, and ad quality — ensuring
              real-time optimization for every impression.
            </p>
            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#142E6E]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all"></div>
          </div>

          {/* Card 3 */}
          <div className="group relative bg-white border border-gray-100 rounded-3xl p-10 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-[#0D1B4C]/10 group-hover:bg-[#0D1B4C]/20 transition">
                <Wallet size={48} className="text-[#0D1B4C]" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-900">
              Transparent Payments
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Guaranteed NET-45 payments through bank or crypto — reliable,
              fast, and fully transparent.
            </p>
            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#0D1B4C]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all"></div>
          </div>
        </div>

        {/* ===== Tagline ===== */}
        <div className="mt-20 text-gray-500 text-sm uppercase tracking-widest">
          Trusted • Transparent • Transformative
        </div>
      </div>
    </section>
  );
}
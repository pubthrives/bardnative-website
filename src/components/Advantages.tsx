import { Clock, TrendingUp, Wallet } from "lucide-react";

export default function Advantages() {
  return (
    <section className="relative overflow-hidden py-28 bg-[#0B0F19] text-white">
      {/* ===== Subtle Gradient & Glow Background ===== */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-indigo-700/20 blur-[200px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-blue-400/10 blur-[200px] rounded-full"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100%_40px]"></div>
      </div>

      {/* ===== Content Container ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Powering the Future of{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] to-[#60A5FA]">
            Monetization
          </span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-20">
          BardNative helps publishers grow faster with smarter integration,
          continuous optimization, and transparent performance — built for scale
          and simplicity.
        </p>

        {/* ===== Advantage Cards ===== */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="group relative bg-white/[0.03] border border-white/10 rounded-3xl p-10 backdrop-blur-xl hover:border-indigo-500/40 hover:-translate-y-2 transition-all duration-500 shadow-[0_0_25px_rgba(30,58,138,0.15)]">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-[#1E3A8A]/20 group-hover:bg-[#1E3A8A]/30 transition">
                <Clock size={48} className="text-[#60A5FA]" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-white">
              Instant Setup
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Connect your site with BardNative’s MA/Mi integration in minutes —
              AdX and demand setup faster than ever.
            </p>
            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-all"></div>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-white/[0.03] border border-white/10 rounded-3xl p-10 backdrop-blur-xl hover:border-emerald-400/40 hover:-translate-y-2 transition-all duration-500 shadow-[0_0_25px_rgba(16,185,129,0.15)]">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-emerald-600/20 group-hover:bg-emerald-600/30 transition">
                <TrendingUp size={48} className="text-emerald-400" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-white">
              AI Optimization
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Our adaptive AI continuously refines performance, delivering faster
              loads, higher CPMs, and fewer unfilled requests.
            </p>
            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-all"></div>
          </div>

          {/* Card 3 */}
          <div className="group relative bg-white/[0.03] border border-white/10 rounded-3xl p-10 backdrop-blur-xl hover:border-yellow-400/40 hover:-translate-y-2 transition-all duration-500 shadow-[0_0_25px_rgba(250,204,21,0.15)]">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-yellow-600/20 group-hover:bg-yellow-600/30 transition">
                <Wallet size={48} className="text-yellow-400" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-white">
              Transparent Payments
            </h3>
            <p className="text-gray-400 leading-relaxed">
              NET-45 guaranteed payments via crypto or bank — backed by full
              transparency, speed, and consistency.
            </p>
            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-all"></div>
          </div>
        </div>

        {/* ===== Tagline ===== */}
        <div className="mt-20 text-gray-500 text-sm uppercase tracking-widest">
          Trusted. Transparent. Transformative. 
        </div>
      </div>
    </section>
  );
}
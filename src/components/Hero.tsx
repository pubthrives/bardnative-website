import { ArrowRight, BarChart3, Rocket, Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const stats = [
    { value: "+35%", label: "Average CPM Uplift" },
    { value: "95%+", label: "Global Fill Rate" },
    { value: "<150ms", label: "Ad Latency" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-gray-100 pt-32 pb-12 flex items-center justify-center text-center text-gray-900">
      {/* ===== Light Grid Background ===== */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(13,27,76,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(13,27,76,0.05)_1px,transparent_1px)] bg-[size:48px_48px]"
        aria-hidden="true"
      ></div>

      {/* ===== Floating Icons ===== */}
      <div className="absolute top-20 left-1/4 text-[#0D1B4C]/10 animate-float-slow">
        <Rocket className="w-10 h-10" />
      </div>
      <div className="absolute bottom-16 right-1/4 text-[#0D1B4C]/10 animate-float-delayed">
        <Shield className="w-8 h-8" />
      </div>
      <div className="absolute top-1/3 right-10 text-[#0D1B4C]/10 animate-float">
        <BarChart3 className="w-9 h-9" />
      </div>

      {/* ===== Content ===== */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Tag */}
        <div className="inline-block bg-[#0D1B4C]/10 text-[#0D1B4C] text-sm font-semibold px-4 py-1.5 rounded-full shadow-sm mb-6 border border-[#0D1B4C]/10">
          Premium MCM Partner
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Monetize{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D1B4C] to-[#142E6E]">
            Smarter
          </span>
          <br /> with{" "}
          <span className="text-[#0D1B4C]">BardNative</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          Empowering publishers with AI-driven monetization, transparent
          insights, and real-time optimization — built on Google Ad Manager.
        </p>

        {/* ===== CTA Buttons ===== */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <a
            href="/start"
            className="px-8 py-3 rounded-full bg-[#0D1B4C] text-white font-semibold shadow-md hover:scale-105 transition-all flex items-center gap-2"
          >
            Start Monetization <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#solutions"
            className="px-8 py-3 rounded-full border border-[#0D1B4C] text-[#0D1B4C] font-semibold hover:bg-[#0D1B4C]/5 transition-all"
          >
            Explore Solutions
          </a>
        </div>

        {/* ===== Stats Cards ===== */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/90 via-gray-50/80 to-gray-100/70 backdrop-blur-sm border border-gray-200/60 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-[#0D1B4C] mb-1">
                {stat.value}
              </h3>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
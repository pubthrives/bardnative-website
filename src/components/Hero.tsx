import { ArrowRight, BarChart3, Rocket, Shield } from "lucide-react";
import { motion } from "framer-motion"; // ✅ Run: npm install framer-motion

export default function Hero() {
  const stats = [
    { value: "+35%", label: "Average CPM Uplift" },
    { value: "95%+", label: "Global Fill Rate" },
    { value: "<150ms", label: "Ad Latency" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-gray-100 py-32 flex items-center justify-center text-center text-gray-900">
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
        <div className="flex flex-wrap justify-center gap-4">
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

        {/* ===== Enhanced Metrics Cards ===== */}
        <div className="mt-16 max-w-4xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/80 via-gray-50/70 to-gray-100/70 
                         backdrop-blur-md border border-gray-200/60 
                         shadow-[0_4px_12px_rgba(0,0,0,0.05)] 
                         rounded-2xl py-6 px-4 flex flex-col items-center justify-center 
                         transition-all duration-300 hover:shadow-[0_6px_18px_rgba(0,0,0,0.08)] hover:-translate-y-1"
            >
              <h3 className="text-3xl sm:text-2xl md:text-3xl font-extrabold text-[#0D1B4C] mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base font-medium leading-snug">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
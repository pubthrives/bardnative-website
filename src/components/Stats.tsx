import { Globe2, Users, TrendingUp, BarChart } from "lucide-react";
import { motion } from "framer-motion"; // ✅ Make sure installed

const stats = [
  {
    icon: <Users className="w-7 h-7 sm:w-8 sm:h-8 text-[#1E3A8A]" />,
    value: "200+",
    label: "Active Publishers",
  },
  {
    icon: <TrendingUp className="w-7 h-7 sm:w-8 sm:h-8 text-indigo-600" />,
    value: "18–35%",
    label: "Avg CPM Uplift",
  },
  {
    icon: <Globe2 className="w-7 h-7 sm:w-8 sm:h-8 text-green-600" />,
    value: "25+ GEOs",
    label: "Global Coverage",
  },
  {
    icon: <BarChart className="w-7 h-7 sm:w-8 sm:h-8 text-pink-600" />,
    value: "95%+",
    label: "Avg Fill Rate",
  },
];

export default function Stats() {
  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50 to-gray-100 py-20 md:py-28 overflow-hidden border-t border-gray-100">
      {/* ===== Subtle Glow Background ===== */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] md:w-[650px] md:h-[650px] bg-[#0D1B4C]/10 blur-[160px] rounded-full opacity-40"></div>

      {/* ===== Grid Overlay ===== */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(13,27,76,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(13,27,76,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"
        aria-hidden="true"
      ></div>

      {/* ===== Content ===== */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          BardNative{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D1B4C] to-[#142E6E]">
            Performance Insights
          </span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-14">
          Proven results that scale. Our technology optimizes every impression to
          deliver higher yields, smarter ad serving, and consistent revenue growth.
        </p>

        {/* ===== Stats Grid ===== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
          {stats.map((s, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gradient-to-br from-white/90 via-gray-50/80 to-gray-100/70 
                         backdrop-blur-sm border border-gray-200/60 rounded-2xl 
                         p-6 sm:p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 
                         transition-all duration-300"
            >
              <div className="flex flex-col items-center justify-center">
                <div className="mb-2 sm:mb-3">{s.icon}</div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0D1B4C] leading-tight">
                  {s.value}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm font-medium mt-1">
                  {s.label}
                </p>
              </div>

              {/* Accent Line */}
              <div className="mt-3 h-[2px] w-10 sm:w-12 mx-auto bg-gradient-to-r from-[#0D1B4C] to-[#142E6E] opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
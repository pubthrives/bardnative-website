import { Globe2, Users, TrendingUp, BarChart } from "lucide-react";

const stats = [
  {
    icon: <Users className="w-8 h-8 text-[#1E3A8A]" />,
    value: "200+",
    label: "Active Publishers",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-indigo-600" />,
    value: "18–35%",
    label: "Avg CPM Uplift",
  },
  {
    icon: <Globe2 className="w-8 h-8 text-green-600" />,
    value: "25+ GEOs",
    label: "Global Coverage",
  },
  {
    icon: <BarChart className="w-8 h-8 text-pink-600" />,
    value: "95%+",
    label: "Average Fill Rate",
  },
];

export default function Stats() {
  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50 to-white py-24 overflow-hidden border-t border-gray-100">
      {/* Decorative Grid Background */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:50px_50px]"
        aria-hidden="true"
      ></div>

      {/* Glowing Blue Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#1E3A8A]/10 blur-3xl rounded-full opacity-50"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          BardNative{" "}
          <span className="text-transparent bg-clip-text bg-[#1E3A8A]">
            Performance Insights
          </span>
        </h2>
        <p className="text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
          Real results that drive growth for every partner. Our platform ensures
          higher yields, smarter ads, and faster optimization.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((s, index) => (
            <div
              key={index}
              className="group bg-white/90 backdrop-blur-lg p-10 rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              <div className="flex justify-center mb-4">{s.icon}</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">
                {s.value}
              </h3>
              <p className="text-gray-600 text-sm font-medium">{s.label}</p>
              <div className="mt-4 h-[2px] w-12 mx-auto bg-gradient-to-r from-[#1E3A8A] to-indigo-500 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { ArrowRight, BarChart3, Rocket, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-32 flex items-center justify-center text-center">
      {/* ===== Clean Grid Background ===== */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:42px_42px]"
        aria-hidden="true"
      ></div>

      {/* ===== Floating Icons ===== */}
      <div className="absolute top-20 left-1/4 text-gray-300 animate-float-slow">
        <Rocket className="w-10 h-10 opacity-20" />
      </div>
      <div className="absolute bottom-16 right-1/4 text-gray-300 animate-float-delayed">
        <Shield className="w-8 h-8 opacity-20" />
      </div>
      <div className="absolute top-1/3 right-10 text-gray-300 animate-float">
        <BarChart3 className="w-9 h-9 opacity-15" />
      </div>

      {/* ===== Content ===== */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Tag */}
        <div className="inline-block bg-[#1E3A8A] text-white text-sm font-semibold px-4 py-1.5 rounded-full shadow-sm mb-6">
          Premium MCM Partner
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Monetize{" "}
          <span className="text-transparent bg-clip-text bg-[#1E3A8A]">
            Smarter
          </span>
          <br /> with <span className="text-gray-900">BardNative</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          Empowering publishers to reach their full potential with AI-powered
          monetization, transparent insights, and real-time optimization —
          powered by Google Ad Manager.
        </p>

        {/* ===== CTA Buttons ===== */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/start"
            className="px-8 py-3 rounded-xl text-white font-semibold bg-[#1E3A8A] hover:bg-[#1E40AF] shadow-md hover:shadow-lg hover:scale-105 transition-all flex items-center gap-2"
          >
            Start Monetization <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#solutions"
            className="px-8 py-3 rounded-xl border border-indigo-200 text-[#1E3A8A] font-semibold hover:bg-indigo-50 transition-all"
          >
            Explore Solutions
          </a>
        </div>

        {/* ===== Stats Card ===== */}
        <div className="mt-16 bg-white/90 backdrop-blur-sm shadow-sm rounded-2xl max-w-3xl mx-auto grid grid-cols-3 divide-x divide-gray-200 border border-gray-100">
          <div className="p-6">
            <h3 className="text-2xl font-bold text-[#1E3A8A]">+35%</h3>
            <p className="text-gray-600 text-sm mt-1">Average CPM Uplift</p>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-[#1E3A8A]">95%+</h3>
            <p className="text-gray-600 text-sm mt-1">Global Fill Rate</p>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-[#1E3A8A]">&lt;150ms</h3>
            <p className="text-gray-600 text-sm mt-1">Ad Latency</p>
          </div>
        </div>
      </div>
    </section>
  );
}
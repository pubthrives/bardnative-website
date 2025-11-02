import { Rocket } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-28 bg-white border-t border-gray-100 overflow-hidden">
      {/* Gentle grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,58,138,0.05),transparent_80%)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Floating Icon */}
        <div className="flex justify-center mb-10">
          <div className="w-24 h-24 rounded-2xl bg-[#1E3A8A] flex items-center justify-center shadow-xl shadow-blue-100 hover:scale-105 transition-transform duration-500">
            <Rocket className="w-10 h-10 text-white" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
          Grow with <span className="text-[#1E3A8A]">BardNative</span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl mb-14 leading-relaxed">
          Unlock AI-powered ad optimization, faster fill rates, and real-time revenue analytics — 
          built for the next generation of publishers.
        </p>

        {/* Button */}
        <div className="flex justify-center">
          <a
            href="/start"
            className="px-10 py-4 rounded-full text-white font-semibold bg-[#1E3A8A] shadow-lg  transition-all duration-300 hover:scale-105 hover:bg-[#243FA0]"
          >
            Start Monetizing Today
          </a>
        </div>

       
      </div>
    </section>
  );
}

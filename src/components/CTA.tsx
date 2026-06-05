import { Rocket } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative isolate bg-white">
      {/* Top curve shape like Dub.co */}
      <div className="absolute inset-x-0 top-0 h-[6rem] bg-gradient-to-b from-gray-50 to-transparent rounded-t-[2rem]"></div>

      {/* Inner container */}
      <div className="relative mx-auto max-w-5xl px-6 py-28 text-center">
        {/* Icon */}
        <div className="flex justify-center mb-10">
          <div className="w-20 h-20 rounded-2xl bg-[#1E3A8A] flex items-center justify-center shadow-md shadow-blue-200">
            <Rocket className="w-10 h-10 text-white" />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-semibold text-gray-900 tracking-tight leading-tight">
          Grow with <span className="text-[#1E3A8A] font-bold">BardNative</span>
        </h2>

        {/* Subheading */}
        <p className="mt-6 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Unlock AI-powered ad optimization, faster fill rates, and real-time
          revenue analytics — built for the next generation of publishers.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/start"
            className="rounded-full bg-black px-8 py-4 text-sm md:text-base font-semibold text-white shadow-sm hover:bg-gray-900 transition-all duration-200"
          >
            Start Monetizing Today
          </a>
          <a
            href="/contact"
            className="rounded-full border border-gray-300 px-8 py-4 text-sm md:text-base font-semibold text-gray-900 bg-white hover:bg-gray-50 transition-all duration-200"
          >
            Contact us
          </a>
        </div>
      </div>
    </section>
  );
}
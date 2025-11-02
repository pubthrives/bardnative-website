import Header from "./Header";
import { Target, Rocket, ShieldCheck, Lightbulb } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="font-sans text-gray-900 bg-gradient-to-b from-white via-gray-50 to-white min-h-screen flex flex-col">
      <Header />

      {/* ===== Mission Section ===== */}
      <section className="relative flex flex-col items-center justify-center text-center py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,58,138,0.08),transparent_70%)]"></div>

        <div className="relative z-10 max-w-3xl">
          <Target className="w-14 h-14 text-[#1E3A8A] mx-auto mb-4" />
          <h1 className="text-5xl font-extrabold text-gray-900 mb-3">
            Our Mission
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            To help publishers maximize revenue with transparency, innovation,
            and performance-driven technology — built on trust, data, and real
            results.
          </p>
        </div>
      </section>

      {/* ===== Our Story ===== */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center px-6">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>BardNative was founded with a simple vision:</strong> to
              redefine digital ad monetization for modern publishers. While
              others focused on scale, we focused on clarity — combining
              automation, transparency, and data ownership for every partner.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              From humble beginnings, BardNative quickly became a trusted ally
              for content creators, media brands, and niche publishers globally
              — helping them unlock new revenue opportunities while maintaining
              exceptional user experience.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we empower hundreds of publishers with advanced header
              bidding, AI optimization, and policy-compliant ad delivery — all
              powered by Google Ad Manager.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1E3A8A]/10 to-transparent rounded-3xl blur-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
              alt="BardNative Office"
              className="relative rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ===== What We Stand For ===== */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-14 text-gray-900">
            What We <span className="text-[#1E3A8A]">Stand For</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white border border-gray-100 rounded-2xl p-10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <ShieldCheck className="w-10 h-10 text-[#1E3A8A] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Transparency First
              </h3>
              <p className="text-gray-600">
                Every impression, bid, and metric is visible to publishers —
                no hidden margins, no guesswork.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <Lightbulb className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Innovation Always
              </h3>
              <p className="text-gray-600">
                Constantly evolving our tech stack with AI-driven testing,
                smarter header bidding, and better UX.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <Rocket className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Publisher Success
              </h3>
              <p className="text-gray-600">
                Your growth is our growth — full-service ad ops support,
                strategy, and optimization at every level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA Section ===== */}
      <section className="relative py-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(30,58,138,0.08),transparent_70%)]"></div>

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            Ready to Join the{" "}
            <span className="text-transparent bg-clip-text bg-[#1E3A8A]">
              BardNative
            </span>{" "}
            Network?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Partner with us and unlock the next generation of ad monetization.{" "}
            <br />
            Grow your digital business — smarter, faster, and transparently.
          </p>
          <a
            href="/start"
            className="inline-block px-8 py-4 rounded-xl font-semibold text-white bg-[#1E3A8A] shadow-md hover:bg-[#162b6b] hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Start Monetization
          </a>
        </div>
      </section>

    
    </div>
  );
}
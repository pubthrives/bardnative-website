import React, { useState } from "react";
import {
  Users,
  TrendingUp,
  LineChart,
  CheckCircle2,
  Send,
} from "lucide-react";
import Header from "./Header";
import Select from "react-select";

export default function Affiliate() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formspree.io/f/mrbooowe", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        e.currentTarget.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const countries = [
    "United States",
    "United Kingdom",
    "Pakistan",
    "India",
    "UAE",
    "Germany",
    "France",
    "Brazil",
    "Canada",
    "Singapore",
  ];

  return (
    <div className="font-sans text-gray-900 bg-gradient-to-b from-white via-gray-50 to-gray-100 min-h-screen flex flex-col">
      <Header />

      {/* ===== HERO SECTION ===== */}
      <section className="relative pt-28 pb-10 text-center overflow-hidden">
        {/* Subtle Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(13,27,76,0.08),transparent_70%)]"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <span className="px-4 py-1 rounded-full text-sm font-medium bg-[#0D1B4C]/10 text-[#0D1B4C]">
            BardNative Partners
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold mt-6 mb-4 leading-tight">
            Grow your revenue with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D1B4C] to-[#142E6E]">
              partnerships
            </span>
          </h1>

          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Join the BardNative Affiliate Program — partner with publishers,
            agencies, and creators to drive smarter monetization with
            transparency, data ownership, and performance.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="#apply"
              className="px-8 py-3 rounded-full bg-[#0D1B4C] text-white font-semibold shadow-md hover:scale-105 transition-all"
            >
              Get Started
            </a>
            <a
              href="/contact"
              className="px-8 py-3 rounded-full border border-[#0D1B4C] text-[#0D1B4C] font-semibold hover:bg-[#0D1B4C]/5 transition-all"
            >
              Contact us
            </a>
          </div>
        </div>
      </section>

      {/* ===== REVENUE SECTION ===== */}
      <section className="py-16 border-t border-gray-100 bg-gradient-to-b from-white via-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-4xl font-extrabold mb-4 text-gray-900">
            Revenue on{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D1B4C] to-[#142E6E]">
              autopilot
            </span>
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Scale your partner-driven revenue with transparent rewards,
            real-time tracking, and AI optimization — built for modern publishers.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-10 h-10 text-[#0D1B4C]" />,
                title: "Flexible Rewards",
                desc: "Set up dynamic commissions, revenue-share, and bonuses to drive engagement.",
              },
              {
                icon: <TrendingUp className="w-10 h-10 text-[#0D1B4C]" />,
                title: "Dual-Sided Incentives",
                desc: "Reward both affiliates and advertisers for successful performance.",
              },
              {
                icon: <LineChart className="w-10 h-10 text-[#0D1B4C]" />,
                title: "Real-Time Tracking",
                desc: "Access real-time data for impressions, conversions, and revenue uplift.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-3xl p-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#0D1B4C]/10 flex items-center justify-center mx-auto mb-5">
                  {f.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== APPLICATION FORM ===== */}
      <section id="apply" className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-3xl shadow-xl p-10">
          <h2 className="text-3xl font-bold text-center mb-6">
            Join the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D1B4C] to-[#142E6E]">
              BardNative Affiliate Network
            </span>
          </h2>

          {status === "success" ? (
            <div className="text-center py-10 animate-fadeIn">
              <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-4 animate-bounce" />
              <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                Application Received!
              </h3>
              <p className="text-gray-600">
                Thank you for applying — our team will reach out soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0D1B4C] outline-none transition"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Business Email"
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0D1B4C] outline-none transition"
                  required
                />
              </div>

              <input
                type="text"
                name="sites"
                placeholder="Top Publisher Sites"
                className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0D1B4C] outline-none transition"
              />

              <Select
                isMulti
                name="countries"
                options={countries.map((c) => ({ label: c, value: c }))}
                placeholder="Select target countries..."
                className="text-sm"
              />

              <textarea
                name="message"
                rows={4}
                placeholder="Tell us about your affiliate goals..."
                className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0D1B4C] outline-none transition resize-none"
              ></textarea>

              <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full py-3 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all shadow-md ${status === "sending"
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#0D1B4C] hover:bg-[#162a6a]"
                  }`}
              >
                {status === "sending" ? (
                  <span>Submitting...</span>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Submit Application</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
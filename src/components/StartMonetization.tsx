import React, { useState } from "react";
import {
  Send,
  TrendingUp,
  DollarSign,
  ShieldCheck,
  CheckCircle2,
  Rocket,
  BarChart3,
  Zap,
} from "lucide-react";
import Header from "./Header";

export default function StartMonetization() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

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
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("success");
        e.currentTarget.reset();
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("success");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <div className="font-sans text-gray-900 bg-gradient-to-b from-white via-gray-50 to-gray-100 min-h-screen flex flex-col">
      <Header />

      {/* ===== Hero Section ===== */}
      <section className="relative pt-28 pb-10 overflow-hidden text-center">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#1E3A8A]/10 blur-3xl rounded-full opacity-40" />

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-[#1E3A8A] rounded-full flex items-center justify-center shadow-xl">
              <Rocket className="w-10 h-10 text-white animate-bounce" />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-gray-900">
            Join{" "}
            <span className="text-transparent bg-clip-text bg-[#1E3A8A]">
              BardNative
            </span>{" "}
            Monetization
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Apply now to partner with BardNative and unlock premium ad demand,
            higher fill rates, and transparent reporting — all powered by Google
            Ad Manager.
          </p>
        </div>
      </section>

      {/* ===== Features Section ===== */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-extrabold text-center mb-14 text-[#1E3A8A]">
            Why Choose BardNative?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: <TrendingUp className="text-indigo-600 w-8 h-8" />,
                title: "Higher RPMs",
                desc: "Get up to 35%+ higher RPM with AI-based header bidding and layout testing.",
              },
              {
                icon: <DollarSign className="text-green-600 w-8 h-8" />,
                title: "On-Time Payments",
                desc: "We ensure monthly, timely payments through trusted MCM partners.",
              },
              {
                icon: <ShieldCheck className="text-blue-600 w-8 h-8" />,
                title: "Policy Safe",
                desc: "Compliant with Google policies for stable, risk-free monetization.",
              },
              {
                icon: <BarChart3 className="text-purple-600 w-8 h-8" />,
                title: "Real-Time Analytics",
                desc: "Track your performance with transparent and live reporting dashboards.",
              },
              {
                icon: <Zap className="text-yellow-500 w-8 h-8" />,
                title: "Lightning Integration",
                desc: "Integrate and go live quickly with a one-tag solution.",
              },
              {
                icon: <CheckCircle2 className="text-pink-500 w-8 h-8" />,
                title: "Dedicated Support",
                desc: "Get instant help from our expert team 24/7 via Slack & WhatsApp.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl border border-gray-100 bg-white shadow-md hover:shadow-xl transition-transform hover:-translate-y-2 text-center"
              >
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-5 rounded-2xl bg-[#1E3A8A]/10">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#1E3A8A] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Form Section ===== */}
      <section
        className="relative py-20 bg-gradient-to-b from-gray-50 via-white to-gray-100"
        id="apply"
      >
        <div className="max-w-5xl mx-auto px-8">
          <div className="bg-white border border-gray-200 shadow-2xl rounded-3xl p-10 md:p-14">
            <h2 className="text-3xl font-extrabold text-center mb-10 text-[#1E3A8A]">
              Apply for Monetization
            </h2>

            {status === "success" ? (
              <div className="text-center py-10 animate-fadeIn">
                <div className="relative inline-block mb-4">
                  <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-4 animate-bounce" />
                  <div className="absolute inset-0 blur-2xl bg-emerald-400/30 rounded-full opacity-60"></div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-600">
                  Thanks for reaching out — our team will get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1E3A8A] outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                      Business Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@domain.com"
                      className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1E3A8A] outline-none"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Website URL
                  </label>
                  <input
                    type="url"
                    name="website"
                    placeholder="https://yourwebsite.com"
                    className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1E3A8A] outline-none"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                      Monthly Pageviews
                    </label>
                    <select
                      name="traffic"
                      className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1E3A8A] outline-none"
                      required
                    >
                      <option value="">Select Range</option>
                      <option value="0-100k">0 - 100K</option>
                      <option value="100k-500k">100K - 500K</option>
                      <option value="500k-1m">500K - 1M</option>
                      <option value="1m+">1M+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                      Business Type
                    </label>
                    <select
                      name="type"
                      className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1E3A8A] outline-none"
                      required
                    >
                      <option value="">Select Type</option>
                      <option value="blog">Blog / News</option>
                      <option value="entertainment">Entertainment</option>
                      <option value="tech">Tech / Gadget</option>
                      <option value="others">Others</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Message / Additional Info
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your site or goals..."
                    className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1E3A8A] outline-none resize-none"
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className={`w-full py-3 rounded-xl font-semibold text-white flex items-center justify-center gap-2 shadow-md transition-all ${status === "sending"
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#1E3A8A] hover:bg-[#162a6a] hover:shadow-lg hover:scale-[1.02]"
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
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
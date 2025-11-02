import React, { useState } from "react";
import {
  Users,
  TrendingUp,
  Crown,
  Send,
  CheckCircle2,
} from "lucide-react";
import Select from "react-select";
import Header from "./Header";

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
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Australia", "Austria",
    "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
    "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia",
    "Cameroon", "Canada", "Chile", "China", "Colombia", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic",
    "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Estonia", "Eswatini",
    "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada",
    "Guatemala", "Guinea", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
    "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyzstan", "Laos",
    "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia",
    "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro",
    "Morocco", "Mozambique", "Myanmar", "Namibia", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
    "North Macedonia", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Paraguay", "Peru", "Philippines", "Poland",
    "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Lucia", "Samoa", "Saudi Arabia", "Senegal", "Serbia",
    "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Somalia", "South Africa", "South Korea", "Spain",
    "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand",
    "Togo", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Uganda", "Ukraine", "United Arab Emirates",
    "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
  ];

  return (
    <div className="font-sans text-gray-900 bg-gradient-to-b from-white via-gray-50 to-gray-100 min-h-screen flex flex-col">
      <Header />

      {/* ===== HERO ===== */}
      <section className="relative pt-28 pb-10 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,58,138,0.08),transparent_70%)]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Become a{" "}
            <span className="text-transparent bg-clip-text bg-[#1E3A8A]">
              BardNative Affiliate Partner
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Earn monthly commissions by referring high-quality publishers to BardNative.
            Scalable rewards, transparent tracking, and long-term partnerships.
          </p>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            How the{" "}
            <span className="text-transparent bg-clip-text bg-[#1E3A8A]">
              Affiliate Program
            </span>{" "}
            Works
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
            Our affiliate program rewards you for referring publishers who join
            under our <strong>Managed Account (MA)</strong> model — usually
            <strong> 10–90</strong> or <strong>20–80</strong> rev-share setups.
            You earn a percentage of BardNative’s parent revenue monthly.
          </p>

          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg hover:scale-[1.03] transition">
              <Users className="w-12 h-12 text-[#1E3A8A] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Refer Publishers</h3>
              <p className="text-gray-600">
                Bring publishers to BardNative and start earning from their performance.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg hover:scale-[1.03] transition">
              <TrendingUp className="w-12 h-12 text-[#1E3A8A] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Earn Monthly</h3>
              <p className="text-gray-600">
                Receive a <strong>5% base commission</strong> — or more — as your referred publishers grow.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg hover:scale-[1.03] transition">
              <Crown className="w-12 h-12 text-[#1E3A8A] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Scale Up to 50%</h3>
              <p className="text-gray-600">
                Our top-performing partners can earn <strong>up to 50%</strong> parent revenue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMMISSION MODEL ===== */}
      <section className="relative py-20 bg-gradient-to-b from-white via-gray-50 to-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(30,58,138,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,58,138,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-4 text-gray-900">
            Transparent{" "}
            <span className="text-transparent bg-clip-text bg-[#1E3A8A]">
              Commission Model
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg">
            Our affiliate tiers scale with your performance. The more you grow,
            the higher your commission.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { tier: "Base Tier", rate: "5%", desc: "All affiliates start here" },
              { tier: "Growth Tier", rate: "10–25%", desc: "High-earning publishers" },
              { tier: "Elite Tier", rate: "Up to 50%", desc: "Top-tier performance" },
            ].map((t, i) => (
              <div
                key={i}
                className="group relative p-[2px] rounded-3xl bg-gradient-to-br from-[#1E3A8A]/40 to-transparent hover:from-[#1E3A8A] hover:to-[#4338CA] transition-all duration-300 shadow-lg"
              >
                <div className="h-full bg-white rounded-3xl py-10 px-6 flex flex-col items-center justify-center">
                  <div className="w-14 h-14 rounded-2xl bg-[#1E3A8A]/10 flex items-center justify-center mb-5">
                    <span className="text-[#1E3A8A] text-2xl font-bold">{i + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.tier}</h3>
                  <p className="text-gray-500 mb-4">{t.desc}</p>
                  <p className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#1E3A8A] to-[#4338CA]">
                    {t.rate} Parent Rev
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FORM ===== */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-3xl shadow-xl p-10">
          <h2 className="text-2xl font-bold text-center mb-6">
            Apply to Join the{" "}
            <span className="text-transparent bg-clip-text bg-[#1E3A8A]">
              BardNative Affiliate Program
            </span>
          </h2>

          {status === "success" ? (
            <div className="text-center py-10 animate-fadeIn">
              <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-4 animate-bounce" />
              <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                Application Received!
              </h3>
              <p className="text-gray-600">
                Thank you for applying — our team will contact you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1E3A8A] outline-none transition"
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
                    className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1E3A8A] outline-none transition"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Top 5 Publisher Sites
                </label>
                <input
                  type="text"
                  name="sites"
                  placeholder="example1.com, example2.com, example3.com"
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1E3A8A] outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Mostly Publishers From
                </label>
                <Select
                  isMulti
                  name="countries"
                  options={countries.map((c) => ({ label: c, value: c }))}
                  placeholder="Select countries..."
                  className="text-sm"
                  styles={{
                    control: (base) => ({
                      ...base,
                      borderRadius: "0.75rem",
                      borderColor: "#E5E7EB",
                      boxShadow: "none",
                      padding: "4px",
                      ":hover": { borderColor: "#1E3A8A" },
                    }),
                    multiValue: (base) => ({
                      ...base,
                      backgroundColor: "rgba(30,58,138,0.1)",
                      borderRadius: "0.5rem",
                      display: "flex",
                      alignItems: "center",
                      padding: "0 6px",
                      margin: "2px",
                    }),
                    multiValueLabel: (base) => ({
                      ...base,
                      color: "#1E3A8A",
                      fontWeight: 500,
                    }),
                    multiValueRemove: (base) => ({
                      ...base,
                      color: "#1E3A8A",
                      borderRadius: "9999px",
                      marginLeft: "6px",
                      transition: "all 0.2s",
                      ":hover": {
                        backgroundColor: "#1E3A8A",
                        color: "#fff",
                        transform: "scale(1.1)",
                      },
                    }),
                  }}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Message / Additional Info
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your publisher base or goals..."
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1E3A8A] outline-none transition resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full py-3 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all shadow-md ${
                  status === "sending"
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#1E3A8A] hover:bg-[#162a6a]"
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
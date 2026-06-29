import { useState } from "react";
import type { FormEvent } from "react";
import { Users, TrendingUp, LineChart, CheckCircle2, Send } from "lucide-react";
import Select from "react-select";
import { Link } from "react-router-dom";
import { Reveal, SectionHeading } from "./ui";

type Status = "idle" | "sending" | "success" | "error";

const COUNTRIES = [
  "United States", "United Kingdom", "Pakistan", "India", "UAE",
  "Germany", "France", "Brazil", "Canada", "Singapore",
];

const FEATURES = [
  { icon: Users, title: "Flexible rewards", desc: "Dynamic commissions, revenue-share, and bonuses designed to drive engagement." },
  { icon: TrendingUp, title: "Dual-sided incentives", desc: "Reward both affiliates and advertisers for genuine, measurable performance." },
  { icon: LineChart, title: "Real-time tracking", desc: "Live data on impressions, conversions, and revenue uplift — fully transparent." },
];

export default function Affiliate() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/mrbooowe", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-14 text-center sm:pt-36">
        <div className="container-bn max-w-4xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 font-mono text-xs uppercase tracking-eyebrow text-signal-400">
              BardNative Partners
            </span>
            <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
              Grow your revenue with <span className="gradient-text">partnerships</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-mute">
              Join the BardNative Affiliate Program — partner with publishers, agencies,
              and creators to drive smarter monetization with transparency, data
              ownership, and real performance.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a href="#apply" className="btn-primary">Get started</a>
              <Link to="/contact" className="btn-ghost">Contact us</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Revenue features */}
      <section className="relative py-16">
        <div className="container-bn">
          <SectionHeading
            eyebrow="// AUTOPILOT"
            title={<>Revenue on <span className="gradient-text">autopilot</span></>}
            lead="Scale partner-driven revenue with transparent rewards, real-time tracking, and AI optimization — built for modern publishers."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {FEATURES.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 0.06}>
                <div className="card-grad h-full p-8 text-center">
                  <span className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-2xl bg-signal/10 text-signal ring-1 ring-signal/20">
                    <Icon className="h-8 w-8" />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mute">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section id="apply" className="relative py-16 pb-28">
        <div className="container-bn max-w-3xl">
          <Reveal>
            <div className="card-grad p-7 sm:p-10">
              <h2 className="text-center font-display text-2xl font-semibold text-white sm:text-3xl">
                Join the <span className="gradient-text">affiliate network</span>
              </h2>

              {status === "success" ? (
                <div className="animate-fade-in py-10 text-center">
                  <div className="relative mx-auto mb-4 inline-block">
                    <CheckCircle2 className="mx-auto h-16 w-16 text-mint" />
                    <div className="absolute inset-0 rounded-full bg-mint/30 opacity-60 blur-2xl" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white">Application received</h3>
                  <p className="mt-2 text-mute">Thank you for applying — our team will reach out soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="label">Full name</label>
                      <input type="text" name="name" placeholder="John Doe" className="field" required />
                    </div>
                    <div>
                      <label className="label">Business email</label>
                      <input type="email" name="email" placeholder="you@domain.com" className="field" required />
                    </div>
                  </div>

                  <div>
                    <label className="label">Top publisher sites</label>
                    <input type="text" name="sites" placeholder="site1.com, site2.com" className="field" />
                  </div>

                  <div>
                    <label className="label">Target countries</label>
                    <Select
                      isMulti
                      name="countries"
                      classNamePrefix="rs"
                      options={COUNTRIES.map((c) => ({ label: c, value: c }))}
                      placeholder="Select target countries..."
                    />
                  </div>

                  <div>
                    <label className="label">Message</label>
                    <textarea name="message" rows={4} placeholder="Tell us about your affiliate goals..." className="field resize-none" />
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-rose-400">Something went wrong. Please try again or message us on WhatsApp.</p>
                  )}

                  <button type="submit" disabled={status === "sending"} className="btn-primary w-full disabled:opacity-60">
                    {status === "sending" ? "Submitting..." : (<><Send size={18} /> Submit application</>)}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

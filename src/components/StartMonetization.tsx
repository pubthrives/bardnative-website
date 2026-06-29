import { useState } from "react";
import type { FormEvent } from "react";
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
import { Reveal, SectionHeading } from "./ui";

type Status = "idle" | "sending" | "success" | "error";

const PERKS = [
  { icon: TrendingUp, tint: "text-signal", ring: "ring-signal/20 bg-signal/10", title: "Higher RPMs", desc: "Up to 35%+ higher RPM with AI header bidding and continuous layout testing." },
  { icon: DollarSign, tint: "text-mint", ring: "ring-mint/20 bg-mint/10", title: "On-time payments", desc: "Reliable monthly payouts through trusted, fully compliant MCM partners." },
  { icon: ShieldCheck, tint: "text-violet", ring: "ring-violet/20 bg-violet/10", title: "Policy safe", desc: "Aligned with Google policies for stable, risk-free, long-term monetization." },
  { icon: BarChart3, tint: "text-signal", ring: "ring-signal/20 bg-signal/10", title: "Real-time analytics", desc: "Track performance with transparent, live reporting you can actually trust." },
  { icon: Zap, tint: "text-mint", ring: "ring-mint/20 bg-mint/10", title: "Lightning integration", desc: "Go live fast with a single-tag solution and hands-on onboarding support." },
  { icon: CheckCircle2, tint: "text-violet", ring: "ring-violet/20 bg-violet/10", title: "Dedicated support", desc: "Talk to real ad-ops experts 24/7 over WhatsApp and email — no ticket queues." },
];

export default function StartMonetization() {
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
        <div className="container-bn">
          <Reveal>
            <div className="mb-7 flex justify-center">
              <span className="grid h-16 w-16 place-items-center rounded-2xl bg-brand shadow-glow">
                <Rocket className="h-8 w-8 text-white" />
              </span>
            </div>
            <p className="eyebrow">// PUBLISHERS</p>
            <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
              Start monetizing with <span className="gradient-text">BardNative</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-mute">
              Apply to partner with BardNative and unlock premium demand, higher fill
              rates, and transparent reporting — all powered by Google Ad Manager.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Perks */}
      <section className="relative py-16">
        <div className="container-bn">
          <SectionHeading eyebrow="// WHY BARDNATIVE" title="Built for publisher revenue" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PERKS.map(({ icon: Icon, tint, ring, title, desc }, i) => (
              <Reveal key={title} delay={i * 0.05}>
                <div className="card-grad h-full p-7">
                  <span className={`mb-5 grid h-14 w-14 place-items-center rounded-2xl ring-1 ${ring}`}>
                    <Icon className={`h-7 w-7 ${tint}`} />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mute">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Apply form */}
      <section id="apply" className="relative py-16 pb-28">
        <div className="container-bn max-w-4xl">
          <Reveal>
            <div className="card-grad p-7 sm:p-12">
              <h2 className="text-center font-display text-2xl font-semibold text-white sm:text-3xl">
                Apply for monetization
              </h2>

              {status === "success" ? (
                <div className="animate-fade-in py-10 text-center">
                  <div className="relative mx-auto mb-4 inline-block">
                    <CheckCircle2 className="mx-auto h-16 w-16 text-mint" />
                    <div className="absolute inset-0 rounded-full bg-mint/30 opacity-60 blur-2xl" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white">Application received</h3>
                  <p className="mt-2 text-mute">Thanks for reaching out — our team will get back to you soon.</p>
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
                    <label className="label">Website URL</label>
                    <input type="url" name="website" placeholder="https://yourwebsite.com" className="field" required />
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="label">Monthly pageviews</label>
                      <select name="traffic" className="field" required defaultValue="">
                        <option value="" disabled>Select range</option>
                        <option value="0-100k">0 – 100K</option>
                        <option value="100k-500k">100K – 500K</option>
                        <option value="500k-1m">500K – 1M</option>
                        <option value="1m+">1M+</option>
                      </select>
                    </div>
                    <div>
                      <label className="label">Business type</label>
                      <select name="type" className="field" required defaultValue="">
                        <option value="" disabled>Select type</option>
                        <option value="blog">Blog / News</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="tech">Tech / Gadget</option>
                        <option value="others">Others</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="label">Message / additional info</label>
                    <textarea name="message" rows={4} placeholder="Tell us about your site or goals..." className="field resize-none" />
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

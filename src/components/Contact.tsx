import { useState } from "react";
import type { FormEvent } from "react";
import { Mail, MessageCircle, Send, CheckCircle2, ArrowUpRight } from "lucide-react";
import { Reveal } from "./ui";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
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
      const data = await response.json();
      if (response.ok && data.ok !== false) {
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
    <section className="relative overflow-hidden pt-32 pb-24 sm:pt-36">
      <div className="container-bn grid items-start gap-14 lg:grid-cols-2">
        {/* Left — pitch + contact cards */}
        <Reveal>
          <p className="eyebrow">// CONTACT</p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl">
            Let's build something <span className="gradient-text">incredible</span>
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-mute">
            Publisher or advertiser — the BardNative team is ready to help you scale
            revenue and performance. Fast, secure, and fully transparent.
          </p>

          <div className="mt-10 space-y-4">
            <a
              href="https://wa.me/+447473903586"
              target="_blank"
              rel="noopener noreferrer"
              className="card-grad group flex items-center gap-5 p-5 transition-transform duration-300 hover:-translate-y-0.5"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-mint/10 text-mint ring-1 ring-mint/20">
                <MessageCircle size={22} />
              </span>
              <span className="min-w-0">
                <span className="flex items-center gap-1 font-display text-lg font-semibold text-white">
                  WhatsApp <ArrowUpRight size={15} className="text-mute transition group-hover:text-mint" />
                </span>
                <span className="block text-sm text-mute">Instant support, 24/7 — chat now</span>
              </span>
            </a>

            <div className="card-grad flex items-center gap-5 p-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-signal/10 text-signal ring-1 ring-signal/20">
                <Mail size={22} />
              </span>
              <span className="min-w-0">
                <span className="block font-display text-lg font-semibold text-white">Email</span>
                <span className="select-all break-all text-sm text-signal-400">adops@bardnative.com</span>
              </span>
            </div>
          </div>
        </Reveal>

        {/* Right — form */}
        <Reveal delay={0.1}>
          <div className="card-grad p-7 sm:p-9">
            <h2 className="text-center font-display text-2xl font-semibold text-white">
              Send us a message
            </h2>

            {status === "success" ? (
              <div className="animate-fade-in py-10 text-center">
                <div className="relative mx-auto mb-4 inline-block">
                  <CheckCircle2 className="mx-auto h-16 w-16 text-mint" />
                  <div className="absolute inset-0 rounded-full bg-mint/30 opacity-60 blur-2xl" />
                </div>
                <h3 className="font-display text-xl font-semibold text-white">Message sent</h3>
                <p className="mt-2 text-mute">Thanks for reaching out — our team will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                <div>
                  <label className="label">Full name</label>
                  <input type="text" name="name" placeholder="John Doe" className="field" required />
                </div>
                <div>
                  <label className="label">Email address</label>
                  <input type="email" name="email" placeholder="john@domain.com" className="field" required />
                </div>
                <div>
                  <label className="label">Message</label>
                  <textarea name="message" rows={5} placeholder="Write your message..." className="field resize-none" required />
                </div>

                {status === "error" && (
                  <p className="text-sm text-rose-400">Something went wrong. Please try again or message us on WhatsApp.</p>
                )}

                <button type="submit" disabled={status === "sending"} className="btn-primary w-full disabled:opacity-60">
                  {status === "sending" ? "Sending..." : (<><Send size={18} /> Send message</>)}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

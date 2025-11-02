import React, { useState } from "react";
import { Mail, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import Header from "./Header";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

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

      const data = await response.json();

      if (response.ok && data.ok !== false) {
        setStatus("success");
        e.currentTarget.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="font-sans text-gray-900 bg-gradient-to-b from-[#F8FAFF] via-white to-[#EEF2FF] min-h-screen flex flex-col">
      <Header />

      {/* ===== Hero Section ===== */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,58,138,0.15),transparent_70%)]"></div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* ===== Left Content ===== */}
          <div>
            <h1 className="text-5xl font-extrabold leading-tight mb-6">
              Let’s Build Something{" "}
              <span className="text-transparent bg-clip-text bg-[#1E3A8A]">
                Incredible
              </span>
            </h1>
            <p className="text-gray-600 text-lg mb-12">
              Whether you're a publisher or advertiser, our team at{" "}
              <span className="font-semibold text-[#1E3A8A]">BardNative</span> is
              ready to help you scale revenue and performance — fast, secure, and transparent.
            </p>

            {/* Contact Cards */}
            <div className="space-y-6">
              {/* WhatsApp Card - stays green */}
              <div className="group bg-white border border-gray-200 shadow-lg hover:shadow-xl rounded-2xl p-6 transition-all flex items-center gap-5">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">WhatsApp</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Get instant support 24/7.
                  </p>
                  <a
                    href="https://wa.me/923093797625"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 font-medium hover:underline"
                  >
                    Chat Now →
                  </a>
                </div>
              </div>

              {/* Email Card - uses theme blue */}
              <div className="group bg-white border border-gray-200 shadow-lg hover:shadow-xl rounded-2xl p-6 transition-all flex items-center gap-5">
                <div className="w-12 h-12 bg-[#1E3A8A]/10 text-[#1E3A8A] rounded-xl flex items-center justify-center group-hover:bg-[#1E3A8A] group-hover:text-white transition">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Email</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    For detailed inquiries & support.
                  </p>
                  <span className="text-[#1E3A8A] font-medium select-all">
                    adops@bardnative.com
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ===== Right Content (Form) ===== */}
          <div className="bg-white border border-gray-200 shadow-2xl backdrop-blur-xl rounded-3xl p-10 relative overflow-hidden">
            <h2 className="text-3xl font-bold mb-6 text-[#1E3A8A] text-center">
              Send Us a Message
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
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1E3A8A] outline-none transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@domain.com"
                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1E3A8A] outline-none transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Write your message..."
                    rows={5}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1E3A8A] outline-none transition resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className={`w-full py-3 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all shadow-md ${
                    status === "sending"
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#1E3A8A] hover:bg-[#1E40AF] hover:shadow-lg hover:scale-[1.02]"
                  }`}
                >
                  {status === "sending" ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {status === "error" && (
                  <p className="text-red-500 text-center mt-4">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
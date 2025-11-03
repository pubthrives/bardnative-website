import Header from "./Header";
import {
  Target,
  Rocket,
  ShieldCheck,
  Lightbulb,
  Linkedin,
  Github,
  Sparkles,
  Facebook,
  MessageCircle,
} from "lucide-react";

const TEAM = [
  {
    name: "Arslan Mehdi",
    role: "CEO & Co-Founder",
    image: "/arslan.png",
    linkedin: "https://www.linkedin.com/in/mehdiarslan?",
    facebook: "https://www.facebook.com/realarslanmehdi", // ✅ New Facebook link
  },
  {
    name: "Arman Rajpot",
    role: "Co-Founder",
    image: "/arman.png",
    whatsapp: "https://wa.me/+923267376967", // ✅ WhatsApp
    facebook: "https://www.facebook.com/arman.rajput.769232", // ✅ Replaces LinkedIn
  },
  {
    name: "Saqlen Mehdi",
    role: "Co-Founder & Software Engineer",
    image: "/saqlen.png",
    linkedin: "https://www.linkedin.com/in/mehdisaqlen/",
    github: "https://github.com/mehdisaqlen",
  },
  {
    name: "Adnan Mehdi",
    role: "AdOps Assistant",
    image: "/adnan.png",
    linkedin: "https://www.linkedin.com/in/mehdi-adnan/",
    facebook: "/", // ✅ Replaces GitHub
  },
];

export default function AboutUs() {
  return (
    <div className="font-sans text-gray-900 bg-gradient-to-b from-white via-gray-50 to-white min-h-screen flex flex-col">
      <Header />

      {/* ==== OUR MISSION ==== */}
      <section className="relative overflow-hidden text-center py-28 px-6">
        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-[#0D1B4C]/15 rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#0D1B4C]/10 rounded-full blur-[140px] opacity-30"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="bg-[#0D1B4C]/10 p-4 rounded-2xl shadow-inner backdrop-blur-sm">
              <Target className="w-10 h-10 text-[#0D1B4C]" />
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-extrabold mb-6 tracking-tight bg-gradient-to-r from-[#0D1B4C] via-[#142E6E] to-[#0D1B4C] text-transparent bg-clip-text">
            Our Mission
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            To help publishers maximize revenue with{" "}
            <span className="font-semibold text-gray-900">transparency</span>,{" "}
            <span className="font-semibold text-gray-900">innovation</span>, and{" "}
            <span className="font-semibold text-gray-900">
              performance-driven technology
            </span>{" "}
            — built on trust, data, and real results.
          </p>

          <div className="flex justify-center mt-10">
            <div className="px-6 py-3 rounded-full bg-[#0D1B4C] text-white font-semibold shadow-lg hover:shadow-xl hover:scale-99 transition-all duration-300 flex items-center gap-2">
              <Sparkles className="w-5 h-5" /> Empowering Publishers Everywhere
            </div>
          </div>
        </div>
      </section>

      {/* ==== OUR STORY ==== */}
      <section className="relative py-24 px-6 border-t border-gray-100 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(13,27,76,0.06),transparent_70%)]"></div>

        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          {/* IMAGE */}
          <div className="relative order-2 md:order-1">
            <div className="absolute -inset-8 bg-[#0D1B4C]/10 rounded-[2.5rem] blur-3xl opacity-60"></div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
              alt="BardNative Office"
              className="relative rounded-[2rem] shadow-2xl border border-gray-100 hover:scale-[1.02] transition-transform duration-500"
            />
          </div>

          {/* TEXT */}
          <div className="order-1 md:order-2">
            <h2 className="text-5xl font-extrabold mb-6 text-[#0D1B4C] leading-tight">
              The BardNative Story
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              <strong>BardNative was founded with a simple vision:</strong> to
              redefine digital ad monetization for modern publishers. While
              others focused on scale, we focused on clarity — combining
              automation, transparency, and data ownership for every partner.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              From humble beginnings, BardNative quickly became a trusted ally
              for content creators, media brands, and niche publishers globally
              — helping them unlock new revenue opportunities while maintaining
              exceptional user experience.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              Today, we empower hundreds of publishers with{" "}
              <span className="text-[#0D1B4C] font-medium">
                AI optimization
              </span>
              ,{" "}
              <span className="text-[#0D1B4C] font-medium">
                advanced header bidding
              </span>
              , and{" "}
              <span className="text-[#0D1B4C] font-medium">
                policy-compliant ad delivery
              </span>{" "}
              — all powered by{" "}
              <span className="font-semibold text-gray-900">
                Google Ad Manager
              </span>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ==== OUR VALUES ==== */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-14 text-gray-900">
            What We <span className="text-[#0D1B4C]">Stand For</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <ShieldCheck className="w-10 h-10 text-[#0D1B4C]" />,
                title: "Transparency First",
                desc: "Every impression, bid, and metric is visible to publishers — no hidden margins, no guesswork.",
              },
              {
                icon: <Lightbulb className="w-10 h-10 text-[#0D1B4C]" />,
                title: "Innovation Always",
                desc: "Constantly evolving our tech stack with AI-driven testing, smarter header bidding, and better UX.",
              },
              {
                icon: <Rocket className="w-10 h-10 text-[#0D1B4C]" />,
                title: "Publisher Success",
                desc: "Your growth is our growth — full-service ad ops support, strategy, and optimization at every level.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/80 border border-gray-100 rounded-[1.75rem] p-10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="bg-[#0D1B4C]/10 p-3 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==== OUR TEAM ==== */}
      <section
        id="team"
        className="relative py-24 border-t border-gray-200 bg-white text-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(13,27,76,0.05),transparent_70%)]"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <p className="text-sm font-medium text-[#0D1B4C] mb-2">
            👥 Our People
          </p>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Built by people who believe in better publishing.
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-16">
            BardNative is a close-knit, globally connected team driven by
            transparency, innovation, and a shared mission to reshape ad
            monetization.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="relative w-24 h-24 mx-auto mb-5">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-[center_20%] rounded-full border-4 border-white shadow-md"
                  />
                </div>
                <h3 className="font-semibold text-lg text-gray-900">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{member.role}</p>

                {/* ICONS */}
                <div className="flex items-center justify-center gap-4 text-gray-400">
                  {member.name === "Arslan Mehdi" ? (
                    <>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#0D1B4C] transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href={member.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#0D1B4C] transition-colors"
                      >
                        <Facebook className="w-5 h-5" />
                      </a>
                    </>
                  ) : member.name === "Arman Rajpot" ? (
                    <>
                      <a
                        href={member.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#0D1B4C] transition-colors"
                      >
                        <MessageCircle className="w-5 h-5" />
                      </a>
                      <a
                        href={member.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#0D1B4C] transition-colors"
                      >
                        <Facebook className="w-5 h-5" />
                      </a>
                    </>
                  ) : member.name === "Adnan Mehdi" ? (
                    <>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#0D1B4C] transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href={member.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#0D1B4C] transition-colors"
                      >
                        <Facebook className="w-5 h-5" />
                      </a>
                    </>
                  ) : (
                    <>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#0D1B4C] transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#0D1B4C] transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
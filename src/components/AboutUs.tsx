import {
  Target,
  Rocket,
  ShieldCheck,
  Lightbulb,
  Linkedin,
  Github,
  Facebook,
  MessageCircle,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { Reveal, SectionHeading } from "./ui";

// ---- Types ----------------------------------------------------------------
interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  github?: string;
  facebook?: string;
  whatsapp?: string;
}
type SocialKey = "linkedin" | "github" | "facebook" | "whatsapp";

const SOCIAL_LINKS: { key: SocialKey; Icon: LucideIcon; label: string }[] = [
  { key: "linkedin", Icon: Linkedin, label: "LinkedIn" },
  { key: "github", Icon: Github, label: "GitHub" },
  { key: "facebook", Icon: Facebook, label: "Facebook" },
  { key: "whatsapp", Icon: MessageCircle, label: "WhatsApp" },
];

// ---- Data -----------------------------------------------------------------
const TEAM: TeamMember[] = [
  {
    name: "Saud Zafar",
    role: "Founder & CEO",
    image: "/arman.png",
    linkedin: "https://www.linkedin.com/in/saud-zafar-0276aa3ab/",
    facebook: "https://www.facebook.com/arman.rajput.769232",
  },
  {
    name: "Aneela Batool",
    role: "Co-Founder & Co-CEO",
    image: "/anela.png",
    linkedin: "https://www.linkedin.com/in/aneela-batool-0b254a356/",
  },
  {
    name: "Saqlen Mehdi",
    role: "Co-Founder",
    image: "/saqlen.png",
    linkedin: "https://www.linkedin.com/in/mehdisaqlen/",
    github: "https://github.com/mehdisaqlen",
  },
  {
    name: "Arslan Mehdi",
    role: "Co-Founder",
    image: "/arslan.png",
    linkedin: "https://www.linkedin.com/in/mehdi-adnan/",
  },
];

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Transparency first",
    desc: "Every impression, bid, and metric is visible to publishers — no hidden margins, no guesswork.",
  },
  {
    icon: Lightbulb,
    title: "Innovation always",
    desc: "We keep evolving the stack with AI-driven testing, smarter header bidding, and better UX.",
  },
  {
    icon: Rocket,
    title: "Publisher success",
    desc: "Your growth is our growth — full-service ad-ops, strategy, and optimization at every level.",
  },
];

const FACTS = [
  { v: "200+", l: "Publishers" },
  { v: "25+", l: "GEOs" },
  { v: "NET-45", l: "Payouts" },
  { v: "96%", l: "Avg fill" },
];

// ---- Component ------------------------------------------------------------
export default function AboutUs() {
  return (
    <div className="font-sans text-ice">
      {/* MISSION */}
      <section className="relative px-5 pt-32 pb-16 text-center sm:px-8 sm:pt-40">
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <div className="mb-7 flex justify-center">
              <div className="grid h-16 w-16 place-items-center rounded-2xl bg-brand-soft ring-1 ring-white/10">
                <Target className="h-8 w-8 text-signal-400" />
              </div>
            </div>
            <p className="eyebrow">// OUR MISSION</p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
              Help publishers earn more, <span className="gradient-text">transparently</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-mute sm:text-lg">
              We pair performance-driven technology with full visibility — built on
              trust, data, and real results — so every publisher keeps control of
              their revenue.
            </p>
            <div className="mt-8 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-medium text-ice">
                <Sparkles className="h-4 w-4 text-signal-400" /> Empowering publishers everywhere
              </span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* STORY */}
      <section className="relative py-16 sm:py-24">
        <div className="container-bn grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <Reveal className="order-2 md:order-1">
            <div className="card-grad overflow-hidden p-2">
              <div className="relative overflow-hidden rounded-[0.9rem]">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                  alt="The BardNative team collaborating"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-signal/30 via-transparent to-violet/20 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                {/* mini facts overlay */}
                <div className="absolute inset-x-3 bottom-3 grid grid-cols-4 gap-2">
                  {FACTS.map((f) => (
                    <div key={f.l} className="rounded-lg bg-ink/60 px-2 py-2 text-center backdrop-blur-sm ring-1 ring-white/10">
                      <p className="font-display text-base font-bold text-white">{f.v}</p>
                      <p className="font-mono text-[9px] uppercase tracking-wider text-mute">{f.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="order-1 md:order-2" delay={0.1}>
            <p className="eyebrow">// OUR STORY</p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
              The BardNative story
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-mute">
              <p>
                BardNative was founded with a simple vision: redefine digital ad
                monetization for modern publishers. While others chased scale, we
                focused on clarity — combining automation, transparency, and data
                ownership for every partner.
              </p>
              <p>
                From humble beginnings, we became a trusted ally for content
                creators, media brands, and niche publishers worldwide — unlocking
                new revenue while protecting the user experience.
              </p>
              <p className="text-ice-dim">
                Today we power hundreds of publishers with AI optimization, advanced
                header bidding, and policy-compliant delivery — all built on Google
                Ad Manager.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="relative py-16 sm:py-24">
        <div className="container-bn">
          <SectionHeading eyebrow="// WHAT WE STAND FOR" title={<>Principles we don't bend on</>} />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={i * 0.08}>
                  <div className="card-grad h-full p-8">
                    <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-white/[0.04] ring-1 ring-white/10">
                      <Icon className="h-6 w-6 text-signal-400" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-white">{v.title}</h3>
                    <p className="mt-3 leading-relaxed text-mute">{v.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="relative py-16 sm:py-24">
        <div className="container-bn">
          <SectionHeading
            eyebrow="// OUR PEOPLE"
            title={<>The team behind better publishing</>}
            lead="A close-knit, globally connected team driven by transparency, innovation, and a shared mission to reshape ad monetization."
          />

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member, i) => (
              <Reveal key={member.name} delay={(i % 4) * 0.06}>
                <div className="card-grad group h-full p-7 text-center transition-transform duration-300 hover:-translate-y-1">
                  <div className="relative mx-auto mb-5 h-24 w-24">
                    <div className="absolute -inset-1 rounded-full bg-brand opacity-30 blur-md transition group-hover:opacity-60" />
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      className="relative h-full w-full rounded-full object-cover object-[center_18%] ring-2 ring-white/15"
                    />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white">{member.name}</h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-wider text-signal-400">
                    {member.role}
                  </p>

                  <div className="mt-4 flex items-center justify-center gap-3">
                    {SOCIAL_LINKS.map(({ key, Icon, label }) => {
                      const href = member[key];
                      if (!href) return null;
                      return (
                        <a
                          key={key}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} on ${label}`}
                          className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-mute transition hover:border-signal/40 hover:text-white"
                        >
                          <Icon className="h-4 w-4" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal, SectionHeading } from "./ui";

const BLOGS = [
  {
    id: 1,
    title: "How BardNative helps publishers boost CPM by 40%",
    excerpt: "How AI-driven yield optimization lifted performance and transparency for top-tier publishers.",
    tag: "Case Study",
    tint: "from-signal/25",
  },
  {
    id: 2,
    title: "Inside BardNative: making ads smarter, not louder",
    excerpt: "A look inside our tech — from real-time bidding to predictive analytics and publisher-first policies.",
    tag: "Inside BardNative",
    tint: "from-violet/25",
  },
  {
    id: 3,
    title: "How AI is redefining digital monetization",
    excerpt: "Why data-driven ad decisioning is reshaping publishing — and how you can benefit today.",
    tag: "Insights",
    tint: "from-mint/20",
  },
];

export default function Blog() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-12 text-center sm:pt-36">
        <div className="container-bn max-w-4xl">
          <Reveal>
            <p className="eyebrow">// JOURNAL</p>
            <h1 className="mx-auto mt-4 font-display text-5xl font-bold tracking-tight text-white sm:text-6xl">
              BardNative <span className="gradient-text">blog</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-mute">
              Stories, insights, and case studies from the future of ad monetization —
              powered by innovation and trust.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative py-12 pb-24">
        <div className="container-bn grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BLOGS.map((post, i) => (
            <Reveal key={post.id} delay={i * 0.06}>
              <article className="card-grad group relative h-full overflow-hidden p-7">
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${post.tint} to-transparent opacity-60`} />
                <div className="relative flex h-full flex-col">
                  <span className="font-mono text-[11px] uppercase tracking-eyebrow text-signal-400">{post.tag}</span>
                  <h2 className="mt-3 font-display text-xl font-semibold leading-snug text-white">{post.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-mute">{post.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-signal-400">
                    Read more <ArrowUpRight size={15} className="transition group-hover:translate-x-0.5" />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative py-20">
        <div className="container-bn max-w-3xl text-center">
          <Reveal>
            <SectionHeading eyebrow="// CONTRIBUTE" title="Have a story to share?" lead="We love highlighting publishers and partners redefining monetization with BardNative." />
            <Link to="/contact" className="btn-primary mt-8">Share your story</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

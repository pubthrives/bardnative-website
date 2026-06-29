import { Reveal } from "./ui";

const stats = [
  { value: "200+", label: "Active publishers" },
  { value: "18–35%", label: "Avg CPM uplift" },
  { value: "25+", label: "GEOs covered" },
  { value: "96%", label: "Avg fill rate" },
];

export default function Stats() {
  return (
    <section id="stats" className="relative py-10 sm:py-14">
      <div className="container-bn">
        <Reveal>
          <div className="card-grad overflow-hidden">
            <div className="grid grid-cols-2 divide-white/8 md:grid-cols-4 md:divide-x">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`px-6 py-7 text-center ${i < 2 ? "border-b border-white/8 md:border-b-0" : ""} ${
                    i % 2 === 1 ? "border-l border-white/8 md:border-l-0" : ""
                  }`}
                >
                  <p className="font-display text-3xl sm:text-4xl font-bold tabular-nums gradient-text">
                    {s.value}
                  </p>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-mute">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

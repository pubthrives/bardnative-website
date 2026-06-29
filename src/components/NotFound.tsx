import { Link } from "react-router-dom";
import { Compass, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[78vh] flex-col items-center justify-center overflow-hidden px-6 py-32 text-center">
      <div className="relative z-10">
        <p className="eyebrow">// 404</p>
        <div className="my-6 flex justify-center">
          <span className="grid h-20 w-20 place-items-center rounded-2xl border border-white/10 bg-white/[0.03] text-signal">
            <Compass className="h-10 w-10" />
          </span>
        </div>
        <h1 className="font-display text-5xl font-bold tracking-tight text-white sm:text-6xl">
          Page not <span className="gradient-text">found</span>
        </h1>
        <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-mute">
          The page you're looking for doesn't exist or may have moved. Let's get you
          back on track.
        </p>
        <Link to="/" className="btn-primary mt-9">
          <ArrowLeft size={18} /> Back to home
        </Link>
      </div>
    </section>
  );
}

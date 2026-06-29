import { motion } from "framer-motion";
import type { ReactNode } from "react";

/* Scroll-triggered fade-up wrapper */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

/* Centered section header: mono eyebrow + display title + lead */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "center" | "left";
}) {
  const center = align === "center";
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold leading-tight tracking-tight text-white">
        {title}
      </h2>
      {lead && <p className="mt-4 text-base sm:text-lg leading-relaxed text-mute">{lead}</p>}
    </div>
  );
}

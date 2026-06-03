import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 30,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="mb-14 text-center">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-[11px] tracking-[0.3em] text-gold">
        <span className="h-px w-6 bg-gold" />
        {eyebrow}
        <span className="h-px w-6 bg-gold" />
      </div>
      <h2 className="font-display text-4xl font-bold sm:text-5xl md:text-6xl">
        <span className="text-gradient-luxe">{title}</span>
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}

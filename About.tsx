import { Reveal, SectionTitle } from "./Reveal";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Award, Code2, Lightbulb, Rocket } from "lucide-react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const v = useMotionValue(0);
  const display = useTransform(v, (n) => (Number.isInteger(to) ? Math.floor(n).toString() : n.toFixed(2)));

  useEffect(() => {
    if (inView) {
      const c = animate(v, to, { duration: 1.6, ease: "easeOut" });
      return () => c.stop();
    }
  }, [inView, to, v]);

  return (
    <span className="text-gradient-gold font-display text-4xl font-bold sm:text-5xl">
      <motion.span ref={ref}>{display}</motion.span>
      {suffix}
    </span>
  );
}

const cards = [
  { icon: Code2, title: "Frontend Craft", desc: "Building beautiful, performant interfaces with modern web tech." },
  { icon: Lightbulb, title: "AI Enthusiast", desc: "Exploring intelligent systems and prompt-driven workflows." },
  { icon: Rocket, title: "Tech Entrepreneur", desc: "Co-founder of ELITE TECH — sustainable smart solutions." },
  { icon: Award, title: "Academic Excellence", desc: "CGPA 9.47, multiple hackathon and pitch wins." },
];

export function About() {
  return (
    <section id="about" className="relative px-5 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="ABOUT ME"
          title="Crafted with passion"
          subtitle="Aspiring software developer with strong academic excellence, passionate about frontend development, AI tools, IoT systems, and building impactful digital products. Co-founder of a startup focused on sustainable innovation and smart technology."
        />

        <div className="mb-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { v: 9.47, s: "", l: "CGPA" },
            { v: 15, s: "+", l: "Projects" },
            { v: 6, s: "+", l: "Awards" },
            { v: 3, s: "+", l: "Years Coding" },
          ].map((s) => (
            <Reveal key={s.l} className="glass relative overflow-hidden rounded-2xl p-6 text-center border-gradient-gold">
              <Counter to={s.v} suffix={s.s} />
              <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
            </Reveal>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-2xl glass p-6 transition-all hover:-translate-y-1 hover:glow-pink">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl"
                     style={{ background: "var(--gradient-luxe)" }}>
                  <c.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="mb-2 font-display text-xl text-foreground">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-pink-neon/10 blur-3xl transition-opacity group-hover:opacity-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

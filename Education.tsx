import { Reveal, SectionTitle } from "./Reveal";
import { GraduationCap, BookOpen, School } from "lucide-react";

const items = [
  {
    icon: GraduationCap,
    period: "Present",
    title: "B.E Electronics & Communication Engineering",
    place: "Vivekananda College of Engineering for Women",
    score: "CGPA 9.47",
  },
  {
    icon: BookOpen,
    period: "Higher Secondary",
    title: "HSC — Class 12",
    place: "Academic Excellence",
    score: "85.6%",
  },
  {
    icon: School,
    period: "Secondary",
    title: "SSLC — Class 10",
    place: "Academic Excellence",
    score: "91.8%",
  },
];

export function Education() {
  return (
    <section id="education" className="relative px-5 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionTitle eyebrow="EDUCATION" title="Academic journey" />

        <div className="relative">
          {/* timeline line */}
          <div
            className="absolute left-5 top-0 h-full w-px md:left-1/2"
            style={{ background: "linear-gradient(to bottom, transparent, oklch(0.82 0.15 85 / 60%), oklch(0.72 0.27 358 / 60%), transparent)" }}
          />

          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.1}>
              <div className={`relative mb-10 flex items-center md:gap-8 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                <div className="hidden flex-1 md:block" />
                <div
                  className="absolute left-5 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full glow-pink md:left-1/2"
                  style={{ background: "var(--gradient-luxe)" }}
                >
                  <it.icon className="h-4 w-4 text-primary-foreground" />
                </div>
                <div className="ml-14 flex-1 rounded-2xl glass p-6 border-gradient-gold md:ml-0">
                  <div className="mb-1 text-[11px] tracking-[0.3em] text-gold">{it.period}</div>
                  <h3 className="font-display text-xl text-foreground">{it.title}</h3>
                  <p className="text-sm text-muted-foreground">{it.place}</p>
                  <div className="mt-3 inline-block rounded-full px-3 py-1 text-xs font-bold text-primary-foreground"
                       style={{ background: "var(--gradient-gold)" }}>
                    {it.score}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

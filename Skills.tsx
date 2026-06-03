import { Reveal, SectionTitle } from "./Reveal";

const groups = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 92 },
      { name: "JavaScript", level: 88 },
    ],
  },
  {
    title: "Programming",
    skills: [
      { name: "Python", level: 90 },
      { name: "C++", level: 82 },
      { name: "Java", level: 80 },
    ],
  },
  {
    title: "AI & Tools",
    skills: [
      { name: "Prompt Engineering", level: 92 },
      { name: "ChatGPT", level: 95 },
      { name: "AI Productivity", level: 88 },
    ],
  },
  {
    title: "Workflow",
    skills: [
      { name: "GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 80 },
      { name: "Replit AI", level: 85 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative px-5 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="SKILLS"
          title="Tools of my craft"
          subtitle="A curated stack for building beautiful, intelligent products."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {groups.map((g, gi) => (
            <Reveal key={g.title} delay={gi * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-3xl glass p-7 transition-all hover:glow-gold">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="font-display text-2xl text-gradient-luxe">{g.title}</h3>
                  <span className="text-[10px] tracking-[0.3em] text-gold">0{gi + 1}</span>
                </div>
                <div className="space-y-5">
                  {g.skills.map((s, i) => (
                    <div key={s.name}>
                      <div className="mb-2 flex justify-between text-sm">
                        <span className="text-foreground">{s.name}</span>
                        <span className="text-gold">{s.level}%</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-secondary/50">
                        <Reveal delay={0.1 + i * 0.1}>
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${s.level}%`,
                              background: "var(--gradient-luxe)",
                              boxShadow: "0 0 12px oklch(0.72 0.27 358 / 60%)",
                              transition: "width 1.2s ease-out",
                            }}
                          />
                        </Reveal>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="absolute -right-16 -bottom-16 h-40 w-40 rounded-full bg-gold/10 blur-3xl" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

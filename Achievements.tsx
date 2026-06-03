import { Reveal, SectionTitle } from "./Reveal";
import { Trophy, Medal, Award, Star, Rocket, Users } from "lucide-react";

const items = [
  { icon: Trophy, title: "1st Place — Idea-Pitch Contest", desc: "Winning concept presented to industry judges." },
  { icon: Medal, title: "3rd Place — ELECTROTHON Hackathon", desc: "National-level engineering hackathon." },
  { icon: Award, title: "Gold Badge — Python (HackerRank)", desc: "Top-tier proficiency recognition." },
  { icon: Star, title: "Silver Badge — C++ & Java", desc: "Demonstrated strong OOP fundamentals." },
  { icon: Rocket, title: "Co-Founder — ELITE TECH", desc: "Startup focused on sustainable smart tech." },
  { icon: Users, title: "EDII-TN Achievers Meet", desc: "Recognized among entrepreneurial achievers." },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative px-5 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="ACHIEVEMENTS" title="Milestones & honors" />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.07}>
              <div className="group relative h-full overflow-hidden rounded-2xl glass p-6 transition-all hover:-translate-y-1 hover:glow-gold">
                <div
                  className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl animate-float-y"
                  style={{ background: "var(--gradient-gold)", animationDelay: `${i * 0.3}s` }}
                >
                  <it.icon className="h-6 w-6 text-background" />
                </div>
                <h3 className="mb-2 font-display text-lg text-gradient-gold">{it.title}</h3>
                <p className="text-sm text-muted-foreground">{it.desc}</p>
                <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

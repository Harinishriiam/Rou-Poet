import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Reveal, SectionTitle } from "./Reveal";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import medicart from "@/assets/medicart.jpg";
import skybound from "@/assets/skybound.jpg";
import lunatone from "@/assets/lunatone.jpg";
import foodbite from "@/assets/foodbite.jpg";

const projects = [
  {
    title: "MEDICART",
    tag: "E-Commerce",
    desc: "Online medicine shopping platform with clean UI and smooth navigation.",
    img: medicart,
    link: "https://harinishriiam.github.io/medicart/",
  },
  {
    title: "SKYBOUND HOLIDAYS",
    tag: "Travel",
    desc: "Modern travel planner website with engaging travel experience and attractive UI.",
    img: skybound,
    link: "https://harinishriiam.github.io/skybound-dream/",
  },
  {
    title: "LUNATONE MUSIC",
    tag: "Streaming",
    desc: "Music streaming interface focused on immersive UI and seamless user experience.",
    img: lunatone,
    link: "https://harinishriiam.github.io/Lunatone-Music/",
  },
  {
    title: "FOODBITE",
    tag: "AI · Food",
    desc: "AI-powered food ordering platform with smart chatbot recommendations.",
    img: foodbite,
    link: "https://food-ordering-platform--hash1405.replit.app",
  },
];

const filters = ["All", "E-Commerce", "Travel", "Streaming", "AI · Food"];

function TiltCard({ p }: { p: (typeof projects)[number] }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [t, setT] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setT({ x: -py * 8, y: px * 10 });
  };

  return (
    <a
      ref={ref}
      href={p.link}
      target="_blank"
      rel="noreferrer"
      onMouseMove={onMove}
      onMouseLeave={() => setT({ x: 0, y: 0 })}
      className="group relative block overflow-hidden rounded-3xl glass border-gradient-gold transition-shadow hover:glow-pink"
      style={{
        transform: `perspective(1000px) rotateX(${t.x}deg) rotateY(${t.y}deg)`,
        transition: "transform 0.2s ease-out",
      }}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={p.img}
          alt={p.title}
          loading="lazy"
          width={1024}
          height={640}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full glass-strong opacity-0 transition-opacity group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4 text-gold" />
        </div>
      </div>
      <div className="relative p-6">
        <span className="text-[11px] tracking-[0.25em] text-gold">{p.tag}</span>
        <h3 className="mt-2 font-display text-2xl text-foreground transition-colors group-hover:text-gradient-pink">
          {p.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
        <div className="mt-5 flex gap-3">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold text-primary-foreground"
            style={{ background: "var(--gradient-luxe)" }}
          >
            Live Demo <ExternalLink className="h-3 w-3" />
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full glass px-4 py-1.5 text-xs font-semibold text-foreground">
            View Project
          </span>
        </div>
      </div>
    </a>
  );
}

export function Projects() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.tag === filter);

  return (
    <section id="projects" className="relative px-5 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="PROJECTS"
          title="Selected work"
          subtitle="A glimpse into the products I've designed and engineered."
        />

        <Reveal className="mb-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-5 py-2 text-xs font-semibold tracking-wide transition-all ${
                filter === f
                  ? "text-primary-foreground glow-pink"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
              style={filter === f ? { background: "var(--gradient-luxe)" } : undefined}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <motion.div layout className="grid gap-6 md:grid-cols-2">
          {filtered.map((p, i) => (
            <motion.div
              key={p.title}
              layout
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <TiltCard p={p} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

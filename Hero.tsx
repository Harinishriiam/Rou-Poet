import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, ArrowRight, Sparkles } from "lucide-react";
import profile from "@/assets/profile.jpg";

const roles = ["Frontend Developer", "AI Enthusiast", "Tech Entrepreneur", "Software Developer"];

function Typewriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = roles[i];
    const speed = del ? 40 : 80;
    const t = setTimeout(() => {
      if (!del) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDel(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDel(false);
          setI((i + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i]);

  return (
    <span className="text-gradient-gold">
      {text}
      <span className="animate-pulse text-pink-neon">|</span>
    </span>
  );
}

export function Hero() {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pt-32"
    >
      {/* floating blobs */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-pink-neon/20 blur-[120px] animate-drift" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-[28rem] w-[28rem] rounded-full bg-gold/15 blur-[140px] animate-drift" style={{ animationDelay: "3s" }} />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="order-2 md:order-1"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs tracking-widest text-gold"
          >
            <Sparkles className="h-3 w-3" /> WELCOME TO MY UNIVERSE
          </motion.div>

          <h1 className="mb-4 font-display text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
            <span className="block text-foreground">HARINISHRII</span>
            <span className="block text-gradient-luxe animate-gradient-x">AM</span>
          </h1>

          <p className="mb-3 text-lg text-muted-foreground sm:text-xl">
            I am a <Typewriter />
          </p>
          <p className="mb-8 max-w-md text-sm leading-relaxed text-muted-foreground/80">
            Crafting elegant, intelligent digital experiences at the intersection of
            design, code and AI.
          </p>

          <div className="mb-8 flex flex-wrap gap-4">
            <button
              onClick={() => go("projects")}
              className="group relative overflow-hidden rounded-full px-7 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 animate-pulse-glow"
              style={{ background: "var(--gradient-luxe)" }}
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
            <button
              onClick={() => go("contact")}
              className="group relative overflow-hidden rounded-full glass border-gradient-gold px-7 py-3 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5"
            >
              Contact Me
            </button>
          </div>

          <div className="flex items-center gap-4">
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/harinishrii-a-m-a11500388", label: "LinkedIn" },
              { icon: Github, href: "https://github.com/Harinishriiam", label: "GitHub" },
              { icon: Mail, href: "mailto:harini.shrii.am@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="group flex h-11 w-11 items-center justify-center rounded-full glass transition-all hover:scale-110 hover:glow-pink"
              >
                <Icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-pink-neon" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="order-1 flex justify-center md:order-2"
        >
          <div className="relative animate-float-y">
            <div
              className="absolute -inset-6 animate-spin-slow rounded-full opacity-70 blur-2xl"
              style={{ background: "conic-gradient(from 0deg, #ff4fa3, #d4af37, #ff7ab8, #ff4fa3)" }}
            />
            <div className="relative h-72 w-72 overflow-hidden rounded-full p-[3px] sm:h-96 sm:w-96"
                 style={{ background: "var(--gradient-luxe)" }}>
              <div className="relative h-full w-full overflow-hidden rounded-full">
                <img
                  src={profile}
                  alt="Harinishrii AM"
                  className="h-full w-full object-cover"
                  width={768}
                  height={960}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </div>
            </div>
            {/* corner sparkles */}
            <Sparkles className="absolute -right-2 top-6 h-6 w-6 animate-pulse text-gold" />
            <Sparkles className="absolute -left-3 bottom-12 h-5 w-5 animate-pulse text-pink-neon" style={{ animationDelay: "1s" }} />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-[0.3em] text-muted-foreground">
        <span className="animate-pulse">SCROLL</span>
      </div>
    </section>
  );
}

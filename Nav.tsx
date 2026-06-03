import { useEffect, useState } from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Awards" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-5 transition-all duration-500 ${
          scrolled ? "glass-strong rounded-full px-6 py-2" : ""
        }`}
        style={{ width: scrolled ? "min(92%, 64rem)" : "100%" }}
      >
        <button
          onClick={() => go("home")}
          className="font-display text-xl tracking-wider text-gradient-luxe"
        >
          HARINISHRII
        </button>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="group relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-pink-neon to-gold transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>
        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-full glass md:hidden"
          aria-label="Menu"
        >
          <span className="block h-px w-5 bg-foreground" />
        </button>
      </div>
      {open && (
        <div className="glass-strong mx-5 mt-2 rounded-2xl p-4 md:hidden">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="block w-full py-2 text-left text-sm text-foreground"
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

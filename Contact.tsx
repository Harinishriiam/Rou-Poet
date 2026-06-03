import { useState } from "react";
import { Reveal, SectionTitle } from "./Reveal";
import { Mail, Phone, Linkedin, Github, Send, Sparkles } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio inquiry from ${data.get("name")}`);
    const body = encodeURIComponent(`${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`);
    window.location.href = `mailto:harini.shrii.am@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative px-5 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="GET IN TOUCH"
          title="Let's build something amazing"
          subtitle="Have a project, idea or opportunity? I'd love to hear from you."
        />

        <div className="grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="h-full rounded-3xl glass p-8 border-gradient-gold">
              <h3 className="mb-6 font-display text-2xl text-gradient-luxe">Reach me</h3>
              <div className="space-y-4">
                {[
                  { icon: Mail, label: "Email", value: "harini.shrii.am@gmail.com", href: "mailto:harini.shrii.am@gmail.com" },
                  { icon: Phone, label: "Phone", value: "+91 89034 91930", href: "tel:+918903491930" },
                  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/harinishrii-a-m", href: "https://www.linkedin.com/in/harinishrii-a-m-a11500388" },
                  { icon: Github, label: "GitHub", value: "github.com/Harinishriiam", href: "https://github.com/Harinishriiam" },
                ].map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-secondary/40"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl glass transition-all group-hover:glow-pink">
                      <c.icon className="h-4 w-4 text-pink-neon" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] tracking-widest text-gold">{c.label.toUpperCase()}</div>
                      <div className="truncate text-sm text-foreground">{c.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8 rounded-2xl p-5"
                   style={{ background: "linear-gradient(135deg, oklch(0.72 0.27 358 / 0.15), oklch(0.82 0.15 85 / 0.1))" }}>
                <Sparkles className="mb-2 h-5 w-5 text-gold" />
                <p className="font-display text-lg text-foreground">
                  Open to internships, freelance & founding-team roles.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-3">
            <form onSubmit={onSubmit} className="rounded-3xl glass p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                {[
                  { name: "name", label: "Your Name", type: "text" },
                  { name: "email", label: "Email Address", type: "email" },
                ].map((f) => (
                  <label key={f.name} className="block">
                    <span className="mb-2 block text-[11px] tracking-[0.25em] text-gold">{f.label.toUpperCase()}</span>
                    <input
                      required
                      type={f.type}
                      name={f.name}
                      className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-pink-neon focus:glow-pink"
                    />
                  </label>
                ))}
              </div>
              <label className="mt-5 block">
                <span className="mb-2 block text-[11px] tracking-[0.25em] text-gold">SUBJECT</span>
                <input
                  required
                  type="text"
                  name="subject"
                  className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-pink-neon focus:glow-pink"
                />
              </label>
              <label className="mt-5 block">
                <span className="mb-2 block text-[11px] tracking-[0.25em] text-gold">MESSAGE</span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="w-full resize-none rounded-xl border border-border bg-input px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-pink-neon focus:glow-pink"
                />
              </label>
              <button
                type="submit"
                className="group mt-6 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 animate-pulse-glow"
                style={{ background: "var(--gradient-luxe)" }}
              >
                {sent ? "Opening mail…" : "Send Message"}
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </Reveal>
        </div>

        <Reveal delay={0.3} className="mt-16 text-center">
          <p className="font-display text-2xl text-gradient-luxe sm:text-4xl">
            "Let's Build Something Amazing Together."
          </p>
        </Reveal>
      </div>
    </section>
  );
}

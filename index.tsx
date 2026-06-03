import { createFileRoute } from "@tanstack/react-router";
import { Loader } from "@/components/portfolio/Loader";
import { Particles } from "@/components/portfolio/Particles";
import { CursorGlow } from "@/components/portfolio/CursorGlow";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Achievements } from "@/components/portfolio/Achievements";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Harinishrii AM — Frontend Developer · AI Enthusiast · Tech Entrepreneur" },
      {
        name: "description",
        content:
          "Premium portfolio of Harinishrii AM — aspiring software developer, frontend craftswoman, AI enthusiast and co-founder of ELITE TECH.",
      },
      { property: "og:title", content: "Harinishrii AM — Luxury Developer Portfolio" },
      { property: "og:description", content: "Frontend Developer · AI Enthusiast · Tech Entrepreneur" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen">
      <Loader />
      <Particles />
      <CursorGlow />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
        <footer className="relative z-10 border-t border-border/40 px-5 py-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Harinishrii AM · Crafted with passion, pink neon & gold
        </footer>
      </main>
    </div>
  );
}

import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { GamingSection } from "@/components/sections/GamingSection";
import { HobbiesSection } from "@/components/sections/HobbiesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ObsessionsSection } from "@/components/sections/ObsessionsSection";
import { Footer } from "@/components/sections/Footer";
import { KonamiEgg } from "@/components/eggs/KonamiEgg";

export default function App() {
  return (
    <>
      {/* Easter egg overlay (renders only when the Konami code fires) */}
      <KonamiEgg />

      <Navbar />

      <main>
        <Hero />

        {/* thin neon divider between hero and the rest */}
        <div
          aria-hidden="true"
          className="mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-white/15 to-transparent"
        />

        <GamingSection />
        <HobbiesSection />
        <ProjectsSection />
        <ObsessionsSection />
      </main>

      <Footer />
    </>
  );
}

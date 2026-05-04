import HomeSection from "@/components/Home";
import About from "@/components/About";
import { Projects } from "@/components/Projects";
import Stack from "@/components/Stack";
import Experiences from "@/components/Experiences";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main
      id="main-content"
      className="flex flex-col min-h-screen w-full overflow-x-hidden bg-background text-foreground"
    >
      <HomeSection />
      <About />
      <Projects />
      <Stack />
      <Experiences />
      <Testimonials />
      <Contact />
    </main>
  );
}

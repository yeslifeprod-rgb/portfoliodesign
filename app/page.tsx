import HomeSection from "@/components/Home";
import Services from "@/components/Services";
import Method from "@/components/Method";
import { Projects } from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main
      id="main-content"
      className="flex flex-col min-h-screen w-full overflow-x-hidden bg-background text-foreground"
    >
      <HomeSection />
      <Services />
      <Method />
      <Projects />
      <Contact />
    </main>
  );
}

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Experiences from "@/components/Experiences";

import Stack from "@/components/Stack";
import HomeSection from "@/components/Home";
import ParallaxSection from "@/components/ParallaxSection";


import { Grid } from "lucide-react";
import { Projects } from "@/components/Projects";
import ButtonCV from "@/components/ButtonCV";


export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex flex-col items-center space-y-16 p-6">
        {/* Section Accueil */}
    
          <HomeSection />
   

        {/* Section Parallax */}
  

          <ButtonCV />
      {/* Section Projets */}
  
      <Projects />

        {/* Section Stack (Compétences) */}
       
        
          <Stack />
      

        {/* Section Expériences */}
      
          <Experiences />
        

  


        {/* Section Contact */}
      
         
          <Contact />
      

        {/* Section Grid */}

          <Grid />



      </main>

      <Footer />
    </>
  );
}

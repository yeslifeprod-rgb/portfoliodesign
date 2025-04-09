import { AnimatedTestimonials } from "./animated-testimonials";


export function Projects() {
  const testimonials = [
    {
      quote:
        "Notre objectif est de développer une application conviviale pour le covoiturage des activités extra-scolaires des enfants. L'application permettra aux responsables de gérer des groupes et des événements, et aux parents de créer et de répondre à des offres de covoiturage. La sécurité des données et des enfants est notre priorité.",
      name: "EDUKA",
      designation: "ALT",
      src: "https://ilyesportfolioz-v.vercel.app/_next/image?url=%2Ficons%2Fprojects%2FEduka.png&w=3840&q=90",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://ilyesportfolioz-v.vercel.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1656787346245-528afaaecb86%3Fq%3D80%26w%3D3000%26auto%3Dformat%26fit%3Dcrop%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D&w=3840&q=90",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://ilyesportfolioz-v.vercel.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1656787346245-528afaaecb86%3Fq%3D80%26w%3D3000%26auto%3Dformat%26fit%3Dcrop%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D&w=3840&q=90",
    },
    
 
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}

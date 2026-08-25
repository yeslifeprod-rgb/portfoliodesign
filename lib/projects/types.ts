export type Project = {
  id: string;
  quote: string;
  story?: {
    title: string;
    paragraphs: string[];
  };
  name: string;
  designation: string;
  srcs: string[];
  /** MP4 d'aperçu. Prioritaire sur srcs[0] : un GIF non compressé pèse
      jusqu'à 50x plus lourd pour un rendu identique. */
  video?: string;
  stack?: string[];
  gallery?: string[];
  codeSnippets?: {
    title: string;
    description: string;
    code: string;
    language: string;
    image?: string;
    category?: "frontend" | "backend";
  }[];
  architecture?: {
    description: string;
    image?: string;
    points: string[];
  };
  deployment?: {
    title: string;
    description: string;
    image?: string;
    steps: string[];
    conclusion: string;
  };
  design?: {
    title: string;
    description: string;
    methods: {
      name: string;
      description: string;
      image?: string;
    }[];
  };
  features?: string[];
  metrics?: { label: string; value: string }[];
  gridSize?: string;
  liveUrl?: string;
  gitlabUrl?: string;
  githubUrls?: {
    front: string;
    back: string;
  };
  playstoreImages?: string[];
  businessCase?: { problem: string; role: string; result: string };
  /** Témoignage rattaché au projet. Affiché sur la carte : une preuve
      posée à côté du travail qu'elle commente porte plus qu'isolée
      dans une section dédiée. */
  testimonial?: { quote: string; name: string; role: string };
};

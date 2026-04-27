export type Project = {
  id: string;
  quote: string;
  name: string;
  designation: string;
  srcs: string[];
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
  businessCase?: { problem: string; role: string; result: string };
};

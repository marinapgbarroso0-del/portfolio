// Edit this file to add your real projects. Use a unique, URL-friendly slug.
export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  disciplines: string[];
  artwork: "bloom" | "forma" | "still";
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "bloom", title: "Bloom", category: "Visual identity", year: "Sample project",
    description: "A placeholder identity exploring organic shapes, warm color, and expressive typography. Replace this text with the story of your own project, your role, and the design process.",
    disciplines: ["Art direction", "Brand identity", "Packaging"], artwork: "bloom", featured: true,
  },
  {
    slug: "forma", title: "Forma", category: "Editorial design", year: "Sample project",
    description: "A placeholder editorial concept about the relationship between form and space. Add your brief, sketches, design decisions, and final work here.",
    disciplines: ["Editorial", "Typography", "Layout"], artwork: "forma", featured: true,
  },
  {
    slug: "still", title: "Still", category: "Art direction", year: "Sample project",
    description: "A placeholder visual study in balance and simplicity. This is a fictional concept, created only to demonstrate the portfolio layout. Replace it with your own work.",
    disciplines: ["Art direction", "Visual exploration"], artwork: "still", featured: false,
  },
];

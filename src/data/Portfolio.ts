import { PhosphorIconName, Portfolio } from "./types";

export type portfolioCategory = {
  title: string;
  icon: PhosphorIconName;
};

export const portfolioCategories: Record<string, portfolioCategory> = {
  frontend: { title: "Frontend", icon: "ProjectorScreen" },
  personal: { title: "Personal", icon: "Cube" },
  uiux: { title: "UI/UX", icon: "Cube" },
  other: { title: "Other", icon: "Cube" },
};

export const portfolios: Portfolio[] = [
  {
    id: 0,
    title: "E-Commerce Platform",
    description:
      "I developed a platform for Company Name to help them find new customers, and sell products without worrying about shipping and technicalities, and instead focus on delivering the best quality.",
    images: [
      "/portfolio-placeholder-1.png",
      "/portfolio-placeholder-2.png",
      "/portfolio-placeholder-3.png",
      "/portfolio-placeholder-4.png",
      "/portfolio-placeholder-5.png",
      "/portfolio-placeholder-6.png",
    ],
    technologies: [
      { icon: "logos:nextjs-icon", text: "Next.js" },
      { icon: "logos:react", text: "React" },
      { icon: "logos:tailwindcss-icon", text: "Tailwind CSS" },
      { icon: "logos:mongodb-icon", text: "MongoDB" },
    ],
    liveLink: "https://ecommerce.example.com",
    category: portfolioCategories.frontend.title,
  },
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio to showcase projects and skills.",
    images: [
      "/portfolio-placeholder-1.png",
      "/portfolio-placeholder-2.png",
      "/portfolio-placeholder-3.png",
    ],
    technologies: [
      { icon: "logos:react", text: "React" },
      { icon: "logos:typescript-icon", text: "TypeScript" },
      { icon: "logos:tailwindcss-icon", text: "Tailwind CSS" },
    ],
    liveLink: "https://portfolio.example.com",
    category: portfolioCategories.frontend.title,
  },
  {
    id: 2,
    title: "Social Media App",
    description:
      "A social media platform to connect with friends and share updates.",
    images: [
      "/portfolio-placeholder-1.png",
      "/portfolio-placeholder-2.png",
      "/portfolio-placeholder-3.png",
    ],
    technologies: [
      { icon: "logos:nextjs-icon", text: "Next.js" },
      { icon: "logos:firebase", text: "Firebase" },
      { icon: "logos:tailwindcss-icon", text: "Tailwind CSS" },
    ],
    liveLink: "https://socialapp.example.com",
    category: portfolioCategories.other.title,
  },
  {
    id: 3,
    title: "Social Media App",
    description:
      "A social media platform to connect with friends and share updates.",
    images: [
      "/portfolio-placeholder-1.png",
      "/portfolio-placeholder-2.png",
      "/portfolio-placeholder-3.png",
    ],
    technologies: [
      { icon: "logos:nextjs-icon", text: "Next.js" },
      { icon: "logos:firebase", text: "Firebase" },
      { icon: "logos:tailwindcss-icon", text: "Tailwind CSS" },
    ],
    liveLink: "https://socialapp.example.com",
    category: portfolioCategories.other.title,
  },
  {
    id: 4,
    title: "Social Media App",
    description:
      "A social media platform to connect with friends and share updates.",
    images: [
      "/portfolio-placeholder-1.png",
      "/portfolio-placeholder-2.png",
      "/portfolio-placeholder-3.png",
    ],
    technologies: [
      { icon: "logos:nextjs-icon", text: "Next.js" },
      { icon: "logos:firebase", text: "Firebase" },
      { icon: "logos:tailwindcss-icon", text: "Tailwind CSS" },
    ],
    liveLink: "https://socialapp.example.com",
    category: portfolioCategories.personal.title,
  },
  {
    id: 5,
    title: "Social Media App",
    description:
      "A social media platform to connect with friends and share updates.",
    images: [
      "/portfolio-placeholder-1.png",
      "/portfolio-placeholder-2.png",
      "/portfolio-placeholder-3.png",
    ],
    technologies: [
      { icon: "logos:nextjs-icon", text: "Next.js" },
      { icon: "logos:firebase", text: "Firebase" },
      { icon: "logos:tailwindcss-icon", text: "Tailwind CSS" },
    ],
    liveLink: "https://socialapp.example.com",
    category: portfolioCategories.uiux.title,
  },
];

export type Technology = {
  icon: string;
  text: string;
};

type Portfolio = {
  title: string;
  description: string;
  images: string[];
  technologies: Technology[];
  liveLink: string;
};

export const portfolios: Portfolio[] = [
  {
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
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase projects and skills.",
    images: [
      "/portfolio-placeholder.png",
      "/portfolio-placeholder.png",
      "/portfolio-placeholder.png",
    ],
    technologies: [
      { icon: "logos:react", text: "React" },
      { icon: "logos:typescript-icon", text: "TypeScript" },
      { icon: "logos:tailwindcss-icon", text: "Tailwind CSS" },
    ],
    liveLink: "https://portfolio.example.com",
  },
  {
    title: "Social Media App",
    description:
      "A social media platform to connect with friends and share updates.",
    images: [
      "/portfolio-placeholder.png",
      "/portfolio-placeholder.png",
      "/portfolio-placeholder.png",
    ],
    technologies: [
      { icon: "logos:nextjs-icon", text: "Next.js" },
      { icon: "logos:firebase", text: "Firebase" },
      { icon: "logos:tailwindcss-icon", text: "Tailwind CSS" },
    ],
    liveLink: "https://socialapp.example.com",
  },
];

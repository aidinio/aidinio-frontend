import type { BlocksContent } from "@strapi/blocks-react-renderer";

export interface ImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

export interface Image {
  id: number;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: {
    thumbnail: ImageFormat;
    small: ImageFormat;
    medium: ImageFormat;
    large: ImageFormat;
  };
}

export interface Author {
  name: string;
  image: Image;
}

export interface BlogPost {
  id: number;
  documentId: string;
  title: string;
  urlTitle: string;
  author: Author;
  tags: BlogPostTag[];
  description: string;
  content: BlocksContent;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface BlogPostTag {
  label: string;
  blogPosts: BlogPost[];
}

export interface Technology {
  label: string;
  icon: string;
}

export interface PortfolioCategory {
  id: number;
  title: string;
}

export interface Portfolio {
  id: number;
  title: string;
  urlTitle: string;
  description: string;
  liveLink: string;
  technologyTags: Technology[];
  previewPicture: Image;
  images: Image[];
  category: PortfolioCategory;
}

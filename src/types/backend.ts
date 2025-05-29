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

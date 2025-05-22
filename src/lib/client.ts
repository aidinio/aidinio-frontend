import type { BlocksContent } from "@strapi/blocks-react-renderer";

const BASE = process.env.NEXT_PUBLIC_API_URL;
const KEY = process.env.API_KEY;
const header = {
  Authorization: `Bearer ${KEY}`,
};


interface ImageFormat {
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

interface Image {
  id: number;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: {
    thumbnail: ImageFormat;
    small: ImageFormat;

  }
}

interface Author {
  name: string;
  image: Image;
}

interface BlogPostTag {
  label: string;
  blogPosts: BlogPost[];
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

export async function getPosts() {
  const res = await fetch(`${BASE}/blog-posts`, {
    method: "GET",
    headers: header,
    next: {
      revalidate: 10,
    },
  });
  const { data }: { data: BlogPost[] } = await res.json();
  // console.log(data[0].content[0]);
  return { data };
}

export async function getPost(urlTitle: string) {
  const res = await fetch(
    `${BASE}/blog-posts?filters[urlTitle][$eq]=${urlTitle}&populate[0]=tags&populate[1]=author.image`,
    {
      method: "GET",
      headers: header,
      next: {
        revalidate: 10,
      },
    }
  );
  const { data }: { data: BlogPost[] } = await res.json();
  return data[0];
}

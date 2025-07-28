import {
  BlogPost,
  Portfolio,
  PortfolioCategory,
  SimilarArticle,
} from "@/types/backend";
import { articlesContainingTags } from "./apiQueries";

export const BASE = process.env.NEXT_PUBLIC_API_BASE;
const API = `${BASE}/api`;
const KEY = process.env.API_KEY;
const header = {
  Authorization: `Bearer ${KEY}`,
};

export async function getPosts() {
  const res = await fetch(`${API}/blog-posts?populate=*`, {
    method: "GET",
    headers: header,
    next: {
      revalidate: 10,
    },
  });
  const { data }: { data: BlogPost[] } = await res.json();
  return { data };
}

export async function getPost(urlTitle: string) {
  const res = await fetch(
    `${API}/blog-posts?filters[urlTitle][$eq]=${urlTitle}&populate[0]=tags.blogPosts&populate[1]=author.image&populate[2]=poster`,
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

export async function getPortfolios() {
  const res = await fetch(`${API}/portfolios?populate=*`, {
    method: "GET",
    headers: header,
    next: {
      revalidate: 10,
    },
  });
  const { data }: { data: Portfolio[] } = await res.json();
  return { data };
}

export async function getPortfolioCategories() {
  const res = await fetch(`${API}/portfolio-categories`, {
    method: "GET",
    headers: header,
    next: {
      revalidate: 10,
    },
  });
  const { data }: { data: PortfolioCategory[] } = await res.json();
  return { data };
}

export async function getPortfolio(urlTitle: string) {
  const res = await fetch(
    `${API}/portfolios?filters[urlTitle][$eq]=${urlTitle}&populate=*`,
    {
      method: "GET",
      headers: header,
      next: {
        revalidate: 10,
      },
    }
  );
  const { data }: { data: Portfolio[] | undefined } = await res.json();
  return { data: data?.[0] };
}

export async function getArticlesWithTags(tags: string[]) {
  const res = await fetch(`${API}/blog-posts?${articlesContainingTags(tags)}`, {
    method: "GET",
    headers: header,
    next: {
      revalidate: 10,
    },
  });
  const { data }: { data: SimilarArticle[] | undefined } = await res.json();
  return { data };
}

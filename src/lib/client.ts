import { BlogPost } from "@/types/backend";


const BASE = process.env.NEXT_PUBLIC_API_URL;
const KEY = process.env.API_KEY;
const header = {
  Authorization: `Bearer ${KEY}`,
};

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

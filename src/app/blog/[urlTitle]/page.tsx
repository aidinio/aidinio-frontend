import BlogPost from "../../../ui/blog/blogPost/BlogPost";
import { getPost } from "@/lib/client";
import type { BlogPost } from "@/types/backend";

export default async function Page({
  params,
}: {
  params: Promise<{ urlTitle: string }>;
}) {
  const { urlTitle } = await params;
  const blogPost: BlogPost = await getPost(urlTitle);
  return <BlogPost data={blogPost} />;
}

import Blog from "./blog";
import { BlogPost, getPost } from "@/lib/client";

export default async function Page({
  params,
}: {
  params: Promise<{ urlTitle: string }>;
}) {
  const { urlTitle } = await params;
  const blogPost: BlogPost = await getPost(urlTitle);
  return <Blog data={blogPost} />;
}

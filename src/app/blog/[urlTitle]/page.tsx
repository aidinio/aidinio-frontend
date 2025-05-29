import BlogPost from "@/ui/blog/blogPost/BlogPost";
import { getPost } from "@/lib/client";

export default async function Page({
  params,
}: {
  params: Promise<{ urlTitle: string }>;
}) {
  const { urlTitle } = await params;
  const blogPost = await getPost(urlTitle);
  return <BlogPost data={blogPost} />;
}

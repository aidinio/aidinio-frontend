import DescriptionPreview from "@/components/custom/DescriptionPreview";
import { getPosts } from "@/lib/client";

export default async function BlogPostsList() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const { data: posts } = await getPosts();
  return (
    <>
      {posts.map((post) => (
        <DescriptionPreview
          key={post.documentId}
          title={post.title}
          description={post.description}
          href={encodeURI(`/blog/${encodeURIComponent(post.urlTitle)}`)}
          imageSrc="/suggestion.jpg"
          imageAlt="Preview hi"
        />
      ))}
    </>
  );
}

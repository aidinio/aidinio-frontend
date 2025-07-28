import DescriptionPreview from "@/components/custom/DescriptionPreview";
import { BASE, getPosts } from "@/lib/client";

export default async function BlogPostsList() {
  const { data: posts } = await getPosts();
  return (
    <>
      {posts.map((post) => (
        <DescriptionPreview
          key={post.documentId}
          title={post.title}
          description={post.description}
          href={encodeURI(`/blog/${encodeURIComponent(post.urlTitle)}`)}
          imageSrc={`${BASE}${post.poster.formats.small.url}` || "/placeholder.png"}
          imageAlt="Preview hi"
        />
      ))}
    </>
  );
}

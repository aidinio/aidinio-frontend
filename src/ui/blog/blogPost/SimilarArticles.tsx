import { BlogPost, BlogPostTag, SimilarArticle } from "@/types/backend";
import SimilarCarousel from "./SimilarCarousel";
import { getArticlesWithTags, getPosts } from "@/lib/client";

export default async function similarArticles({
  tags,
  className,
  currentArticleId,
}: {
  tags: BlogPostTag[];
  className: string;
  currentArticleId: number;
}) {
  let {
    data: similarArticles,
  }: { data: SimilarArticle[] | BlogPost[] | undefined } =
    await getArticlesWithTags(tags.map((tag) => tag.label));
  similarArticles = similarArticles?.filter((article) => article.id !== currentArticleId);
  if (!similarArticles || similarArticles.length === 0) {
    const { data } = await getPosts();
    similarArticles = data.slice(0, 5);
  }
  similarArticles = similarArticles.filter(
    (article) => article.id !== currentArticleId
  );
  return <SimilarCarousel articles={similarArticles} className={className} />;
}

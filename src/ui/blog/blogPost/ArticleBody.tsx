import { BlocksContent, BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function ArticleBody({ content }: { content: BlocksContent }) {
  return (
    <div className="article-body">
      <BlocksRenderer content={content} />
    </div>
  );
}

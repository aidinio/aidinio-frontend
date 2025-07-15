import BlogPostsList from "@/ui/blog/BlogPostsList";
import TitledCardList from "@/components/custom/TitledCardList/TitledCardList";

export default function Page() {
  return (
    <TitledCardList title="Posts" Cards={<BlogPostsList />} />
  );
}

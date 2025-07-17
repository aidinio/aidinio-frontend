import { Skeleton } from "@/components/ui/skeleton";
import { getPost } from "@/lib/client";
import Article from "@/ui/blog/blogPost/Article";
import SimilarPosts from "@/ui/blog/blogPost/SimilarArticles";
import { Suspense } from "react";

export default async function Page({
  params,
}: {
  params: Promise<{ urlTitle: string }>;
}) {
  const { urlTitle } = await params;
  const blogPost = await getPost(urlTitle);
  return (
    <div className="flex gap-10 flex-col md:flex-row place-self-start justify-between grow shrink h-fit max-h-full">
      <div className="max-w-[100vw] box-border sm:max-w-full shrink w-full grow bg-white rounded-[2.5rem] md:rounded-[3.125rem] px-[2rem] mt-[8rem] lg:m-0 py-[2.5rem] md:px-[6.75rem] sm:p-[4rem] lg:p-[6rem] xl:p-[9rem] 2xl:p-[10rem] shadow-default relative h-full mb-[3.125rem] ">
        <div className="flex flex-col items-start">
          <div className="shrink w-fit max-w-full sm:max-w-[1100px] flex flex-col gap-[100px]">
            <Article data={blogPost} />
            <SimilarPosts tags={blogPost.tags} className="hidden md:flex" currentArticleId = {blogPost.id} />
          </div>
        </div>
      </div>
      <Suspense fallback={<Skeleton className="h-[200px] w-full max-w-[100vw]" />}>
        <SimilarPosts tags={blogPost.tags} className="flex md:hidden max-w-[100vw] box-border" currentArticleId = {blogPost.id}/>
      </Suspense>
    </div>
  );
}

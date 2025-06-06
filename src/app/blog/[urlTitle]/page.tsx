import { getPost } from "@/lib/client";
import Article from "@/ui/blog/blogPost/Article";
import SimilarCarousel from "@/ui/blog/SimilarCarousel";

export default async function Page({
  params,
}: {
  params: Promise<{ urlTitle: string }>;
}) {
  const { urlTitle } = await params;
  const blogPost = await getPost(urlTitle);
  return (
    <div className="flex gap-10 flex-col sm:flex-row place-self-start justify-between grow h-fit">
      <div className="max-w-[100vw] w-full  bg-white sm:rounded-[3.125rem] px-[2rem] mt-[5rem] sm:m-0 py-[5rem] sm:px-[8.75rem] sm:py-[10rem] shadow-default relative h-full mb-[3.125rem] overflow-hidden">
        {/* <Decoration /> */}
        <div className="flex flex-col items-center justify-center">
          <div className="w-full max-w-[1100px] flex flex-col gap-[100px]">
            <Article data={blogPost} />
            <SimilarCarousel articles={[]} className="hidden sm:flex" />
          </div>
        </div>
      </div>
      <SimilarCarousel articles={[]} className="sm:hidden px-[2rem]" />
    </div>
  );
}

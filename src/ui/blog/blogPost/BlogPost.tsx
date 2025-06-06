"use client";

import type { BlogPost } from "@/types/backend";
import SimilarCarousel from "@/ui/blog/SimilarCarousel";
import Article from "@/ui/blog/blogPost/Article";

export default function BlogPost({ data }: { data: BlogPost }) {
  return (
    <div className="flex flex-col sm:flex-row place-self-start justify-between grow h-fit">
      <div className="max-w-[100vw] box-border w-full  bg-white rounded-[3.125rem] px-[2rem] mt-[5rem] sm:m-0 px-[3rem] py-[5rem] sm:px-[8.75rem] sm:py-[10rem] shadow-default relative h-full mb-[3.125rem] overflow-hidden">
        {/* <Decoration /> */}
        <div className="flex flex-col items-center justify-center">
          <div className="w-full max-w-[1100px] flex flex-col gap-[100px]">
            <Article data={data} />
            <SimilarCarousel articles={[]} className="hidden sm:flex" />
          </div>
        </div>
      </div>
      <SimilarCarousel articles={[]} className="sm:hidden px-[2rem]" />
    </div>
  );
}

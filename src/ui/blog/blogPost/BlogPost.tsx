"use client";

import type { BlogPost } from "@/types/backend";
import SimilarCarousel from "@/ui/blog/SimilarCarousel";
import Article from "@/ui/blog/blogPost/Article";
import Decoration from "@/ui/blog/blogPost/Decoration";

export default function BlogPost({ data }: { data: BlogPost }) {
  return (
    <div className="flex place-self-start justify-between grow gap-[105px] h-fit">
      <div className="grow-[5] bg-white rounded-[50px] px-[140px] py-[160px] shadow-default relative h-full mb-[50px] overflow-hidden">
        <Decoration />
        <div className="flex flex-col items-center justify-center">
          <div className="max-w-[1100px] flex flex-col gap-[100px]">
            <Article data={data}/>
            <SimilarCarousel articles={[]} />
          </div>
        </div>
      </div>
    </div>
  );
}
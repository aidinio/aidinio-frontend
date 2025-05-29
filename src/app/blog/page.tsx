import { Suspense } from "react";
import DescriptionPreviewSkeleton from "@/components/custom/DescriptionPreviewSkeleton";
import BlogPostsList from "@/ui/blog/BlogPostsList";

export default function Page() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-[1920px] h-fit bg-white rounded-[50px] p-[75px] box-border relative shadow-default self-center">
        <div className="flex gap-10">
          <h1 className="text-[64px] font-black">Blog Posts</h1>
          <div className="flex items-center justify-center gap-5"></div>
        </div>
        <div className="grid gap-x-10 gap-y-10 grid-cols-[repeat(3,1fr)] justify-items-center mt-10">
          <Suspense
            fallback={
              <>
                {[0, 1, 2, 3, 4, 5].map((item) => (
                  <DescriptionPreviewSkeleton key={item} />
                ))}
              </>
            }
          >
            <BlogPostsList />
          </Suspense>
        </div>
      </div>
    </div>
  );
}



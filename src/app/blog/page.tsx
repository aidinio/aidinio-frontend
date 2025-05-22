import { SuggestedPost } from "./[urlTitle]/blog";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { getPosts } from "@/lib/client";

export default function Page() {
  return <div className="flex items-center justify-center"><BlogPostsPage /></div>;
}

export function BlogPostsPage({ categoryTitle }: { categoryTitle?: string }) {
  return (
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
                <Loading key={item} />
              ))}
            </>
          }
        >
          <AllPosts />
        </Suspense>
      </div>
    </div>
  );
}

async function AllPosts() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const { data: posts } = await getPosts();
  return (
    <>
      {posts.map((post) => (
        <SuggestedPost
          key={post.documentId}
          title={post.title}
          description={post.description}
          href={encodeURI(`/blog/${encodeURIComponent(post.urlTitle)}`)}
        />
      ))}
    </>
  );
}

function Loading() {
  return (
    <div className="flex flex-col bg-white h-fit rounded-[35px] shadow-default w-fit">
      <div className="p-[16px] flex flex-col items-center gap-[20px] w-fit">
        <Skeleton className="w-[350px] h-[200px] rounded-[30px]" />
        <div className="px-[19px] flex flex-col items-center gap-[16px] text-[15px] max-w-[350px]">
          <div className="gap-2 flex flex-col items-start justify-start">
            <Skeleton className="w-[300px] h-[25px] rounded-[30px]" />
            <Skeleton className="w-[150px] h-[25px] rounded-[30px]" />
          </div>
          <div className="flex flex-col items-start justify-start gap-2">
            <Skeleton className="w-[280px] h-[20px] rounded-[30px]" />
            <Skeleton className="w-[280px] h-[20px] rounded-[30px]" />
            <Skeleton className="w-[180px] h-[20px] rounded-[30px]" />
          </div>
          <Skeleton className="w-[170px] h-[50px] rounded-[30px]" />
        </div>
      </div>
    </div>
  );
}

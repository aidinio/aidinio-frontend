import BlogPostsList from "@/ui/blog/BlogPostsList";
import MobileHeading from "@/components/custom/MobileHeading";

export default function Page() {
  return (
    <>
      <div className="hidden sm:flex items-center justify-center">
        <div className="w-full max-w-[1920px] h-fit bg-white rounded-[50px] p-[4.5rem] box-border relative shadow-default self-center">
          <div className="flex gap-10">
            <h1 className="text-[4rem] font-black">Posts</h1>
            <div className="flex items-center justify-center gap-5"></div>
          </div>
          <div className="flex flex-wrap sm:grid gap-x-10 gap-y-10 grid-cols-[repeat(3,1fr)] justify-items-center mt-10">
              <BlogPostsList />
          </div>
        </div>
      </div>
      <div className="sm:hidden flex flex-col gap-10 w-full h-fit sm:bg-white rounded-[50px] mt-[8rem] sm:p-[4.5rem] box-border relative sm:shadow-default max-w-[2100px]">
        <div className="flex flex-col">
          <MobileHeading title="Posts" />
        </div>
        <div className="sm:hidden flex flex-wrap gap-[2rem] justify-center items-center w-full max-w-[100vw] px-[2rem]">
          <BlogPostsList />
        </div>
      </div>
    </>
  );
}

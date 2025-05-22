"use client";

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { type CarouselApi } from "@/components/ui/carousel";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
// import { CornersOut } from "@phosphor-icons/react";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import { BlogPost } from "@/lib/client";
import { parse } from "path";

export default function Blog({ data }: { data: BlogPost }) {
  const { title, content, author, tags, createdAt } = data;
  const parsedDate = new Date(createdAt);
  console.log("[ ]", parsedDate);
  return (
    <div className="flex place-self-start justify-between grow gap-[105px] h-fit">
      <div className="grow-[5] bg-white rounded-[50px] px-[140px] py-[160px] shadow-default relative h-full mb-[50px] overflow-hidden">
        <div className="-z-30">
          <div className="w-[500px] h-[500px] absolute bg-[#BAF7FF] top-[40px] right-[30%] z-0 blur-[550px] opacity-75 rounded-full"></div>
          <div className="w-[500px] h-[500px] absolute bg-[#FFB2B2] top-[550px] right-[-10%] z-0 blur-[550px] opacity-75 rounded-full"></div>
          <div className="w-[500px] h-[500px] absolute bg-[#FEFFBA] top-[340px] right-[10%] z-0 blur-[550px] opacity-75 rounded-full"></div>
        </div>
        {/* <div className="bg-white rounded-full shadow-default size-fit p-[10px] absolute top-[65px] right-[65px] cursor-pointer">
          <CornersOut size={24} />
        </div> */}
        <div className="flex flex-col items-center justify-center">
          <div className="max-w-[1100px] flex flex-col gap-[100px]">
            <article className="flex flex-col gap-[32px] z-30 relative h-full">
              <h1 className="text-[40px] font-extrabold text-justify">
                {title}
              </h1>
              <div className="flex flex-col gap-[32px] px-[60px] h-full">
                <div className="flex justify-between items-center text-[#7E7E7E] font-medium text-[16px]">
                  <div className="flex gap-4 items-center justify-center">
                    <Image
                      className="rounded-full inline-block"
                      width={40}
                      height={40}
                      src={`http://localhost:1337${author.image.formats.thumbnail.url}`}
                      alt="profile picture"
                    />
                    <span>{author.name}</span>
                  </div>
                  <div>{`${parsedDate.toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}`}</div>
                </div>
                <div className="flex flex-wrap gap-[15px]">
                  {tags.map((tag) => (
                    <BlogTag text={tag.label} key={tag.label} />
                  ))}
                </div>
                <div className="tracking-[3%] leading-[210%] text-justify text-[20px] font-medium">
                  <BlogContentRenderer content={content} />
                </div>
              </div>
            </article>
            <SimilarArticles />
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col relative gap-[15px] h-fit">
        <SuggestedPost />
        <SuggestedPost />
      </div> */}
    </div>
  );
}

function BlogContentRenderer({ content }: { content: BlocksContent }) {
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        paragraph: ({ children }) => (
          <p className="indent-[17px]">{children}</p>
        ),
        heading: ({ children, level }) => {
          switch (level) {
            case 1:
              return <h1 className="font-extrabold text-[32px]">{children}</h1>;
            case 2:
              return <h2 className="font-bold text-[28px]">{children}</h2>;
            case 3:
              return <h3 className="font-bold text-[24px]">{children}</h3>;
            case 4:
              return <h4 className="font-bold text-[20px]">{children}</h4>;
            case 5:
              return <h5 className="font-bold text-[20px]">{children}</h5>;
            case 6:
              return <h6 className="font-bold text-[20px]">{children}</h6>;
          }
        },
        link: ({ children, url }) => (
          <Link
            href={url}
            className="rounded-[10px] transition-all hover:bg-linear-to-r text-blue-500 hover:text-black hover:no-underline hover:from-[#BAF7FF66] hover:via-[#FEFFBA66] hover:to-[#FFB2B266] underline px-3 py-1"
          >
            {children}
          </Link>
        ),
      }}
      modifiers={{
        bold: ({ children }) => (
          <strong className="font-bold">{children}</strong>
        ),
        italic: ({ children }) => <span className="italic">{children}</span>,
      }}
    />
  );
}

function BlogTag({ text }: { text: string }) {
  return (
    <span className="font-semibold rounded-full px-[17px] py-[6px] bg-white shadow-[0px_0px_10px_0px_#E9E9E9]">
      {text}
    </span>
  );
}

export function SuggestedPost({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <div className="flex flex-col bg-white h-fit rounded-[35px] shadow-default w-fit">
      <div className="p-[16px] flex flex-col items-center gap-[20px] w-fit">
        <Image
          className="rounded-[20px] min-w-[350px]"
          src="/suggestion.jpg"
          alt="blog suggestion poster"
          width={270}
          height={168}
        />
        <div className="px-[19px] flex flex-col items-center gap-[16px] text-[15px] max-w-[350px]">
          <h2 className="font-semibold text-[17px] self-start">{title}</h2>
          <p className="text-justify self-start px-[10px] font-medium">
            {description}
          </p>
          <Link
            href={href}
            className="mb-[10px] flex justify-center items-center gap-[20px] bg-gradient-to-r from-[#BAF7FFAA] via-[#FEFFBAAA] to-[#FFB2B2AA] rounded-full px-[20px] py-[14px] font-semibold"
          >
            <span className="grow shrink-0">Read More</span>
            <div className="bg-[url(/arrow.svg)] bg-center bg-size-[cover] size-[18px] bg-no-repeat grow shrink-0"></div>
          </Link>
        </div>
      </div>
    </div>
  );
}
function SimilarArticles() {
  const [api, setApi] = useState<CarouselApi>();
  const [canPrev, setCanPrev] = useState<undefined | boolean>(undefined);
  const [canNext, setCanNext] = useState<undefined | boolean>(undefined);
  useEffect(() => {
    api?.on("scroll", () => {
      if (!api) return;
      setCanPrev(api.canScrollPrev());
      setCanNext(api.canScrollNext());
    });
  }, [api]);
  return (
    <div className="flex flex-col gap-[40px]">
      <h1 className="text-[36px] font-bold">Similar Articles</h1>
      <Carousel
        opts={{ dragFree: true }}
        setApi={setApi}
        className="flex gap-[30px] relative"
      >
        <AnimatePresence>
          {canPrev && (
            <motion.div
              className="absolute h-full w-[100px] bg-gradient-to-r from-[#ffffff] to-transparent block z-10"
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: easeInOut }}
            />
          )}
        </AnimatePresence>
        <CarouselPrevious className="size-[40px]" />
        <CarouselContent className="flex gap-[50px]">
          <SuggestedPost
            title={"Using this and that to that"}
            description={"wokjsadlkf aslkdfj aklsdj fasdf"}
            href="#"
          />
          <SuggestedPost
            title={"Using this and that to that"}
            description={"wokjsadlkf aslkdfj aklsdj fasdf"}
            href="#"
          />
          <SuggestedPost
            title={"Using this and that to that"}
            description={"wokjsadlkf aslkdfj aklsdj fasdf"}
            href="#"
          />
        </CarouselContent>
        <CarouselNext className="size-[40px]" />

        <AnimatePresence>
          {canNext && (
            <motion.div
              className="absolute h-full w-[100px] bg-gradient-to-l from-[#ffffff] block z-10 right-0"
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: easeInOut }}
            />
          )}
        </AnimatePresence>
      </Carousel>
    </div>
  );
}

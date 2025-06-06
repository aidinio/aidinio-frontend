"use client"

import DescriptionPreview from "@/components/custom/DescriptionPreview";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useCarousel from "@/hooks/useCarousel";
import type { BlogPost } from "@/types/backend";
import { AnimatePresence, easeInOut, motion } from "framer-motion";

export default function SimilarCarousel({
  articles,
  className,
}: {
  articles: BlogPost[];
  className?: string;
}) {
  const { setApi, canPrev, canNext } = useCarousel();
  return (
    <div className={`flex flex-col gap-[2.5rem] ${className}`}>
      <h3 className="text-[2.25rem] font-bold">Similar Articles</h3>
      <Carousel
        opts={{ dragFree: true }}
        setApi={setApi}
        className="self-center flex flex-col sm:flex-row gap-[30px] relative max-w-[min(80vw,900px)]"
      >
        <div className="sm:hidden flex items-center justify-center gap-[10rem] w-full mt-10">
          <CarouselPrevious className="static scale-200" />
          <CarouselNext className="static scale-200" />
        </div>
        <AnimatePresence>
          {canPrev && (
            <motion.div
              className="hidden sm:block absolute h-full w-[2rem] sm:w-[6.25rem] bg-gradient-to-r from-[#ffffff] via-5% sm:via-none to-transparent z-10"
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: easeInOut }}
            />
          )}
        </AnimatePresence>
        <CarouselPrevious className="hidden sm:block size-[40px]" />
        <CarouselContent className="flex gap-[50px]">
          <DescriptionPreview
            title={"Using this and that to that"}
            description={"wokjsadlkf aslkdfj."}
            href="#"
            imageSrc="/suggestion.jpg"
            imageAlt="Preview picture"
          />
          <DescriptionPreview
            title={"Using this and that to that"}
            description={
              "wokjsadlkf arofsadl fsalkfj aslkjdf askldj faslkdjf aslkjdf askldf slkdfj aklsdj fasdf"
            }
            href="#"
            imageSrc="/suggestion.jpg"
            imageAlt="Preview picture"
          />
          <DescriptionPreview
            title={"Using this and that to that"}
            description={"wokjsadlkf aslkdfj aklsdj fasdf"}
            href="#"
            imageSrc="/suggestion.jpg"
            imageAlt="Preview picture"
          />
          {articles?.map((article) => (
            <DescriptionPreview
              title={article.title}
              description={article.description}
              href={`/blog/${article.urlTitle}`}
              key={article.urlTitle}
              imageSrc="/suggestion.jpg"
              imageAlt="Preview picture"
            />
          ))}
        </CarouselContent>
        <CarouselNext className="hidden sm:block size-[40px]" />
        <AnimatePresence>
          {canNext && (
            <motion.div
              className="hidden sm:block absolute h-full w-[2rem] sm:w-[6.25rem] bg-gradient-to-l from-[#ffffff] via-5% sm:via-none z-10 right-0"
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

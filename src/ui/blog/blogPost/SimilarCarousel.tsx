"use client"

import DescriptionPreview from "@/components/custom/DescriptionPreview";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useCarousel from "@/hooks/useCarousel";
import { BASE } from "@/lib/client";
import type { BlogPost, SimilarArticle } from "@/types/backend";
import { AnimatePresence, easeInOut, motion } from "framer-motion";

export default function SimilarCarousel({
  articles,
  className,
}: {
  articles: SimilarArticle[] | BlogPost[];
  className?: string;
}) {
  const { setApi, canPrev, canNext } = useCarousel();
  return (
    <div className={`flex flex-col gap-[2.5rem] grow max-w-[100vw] h-full w-full justify-center ${className}`}>
      <h3 className="text-[2.25rem] font-bold">Similar Articles</h3>
      <Carousel
        opts={{ dragFree: true }}
        setApi={setApi}
        className="self-center place-self-center justify-self-center shrink grow flex flex-col sm:flex-row gap-[30px] relative w-full sm:w-[80%] lg:w-full"
      >
        <div className="sm:hidden flex items-center justify-center gap-[10rem] w-full mt-10">
          <CarouselPrevious className="static flex items-center justify-center scale-200" />
          <CarouselNext className="static flex items-center justify-center scale-200" />
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
        <CarouselPrevious className="hidden size-[40px] sm:flex items-center justify-center" />
        <CarouselContent className="flex grow gap-[50px] w-full">
          {articles?.map((article) => (
            <DescriptionPreview
              title={article.title}
              description={article.description}
              href={`/blog/${article.urlTitle}`}
              key={article.urlTitle}
              imageSrc={`${BASE}${article.poster.formats.small.url}` || "/placeholder.png"}
              imageAlt="Post Preview"
            />
          ))}
        </CarouselContent>
        <CarouselNext className="hidden sm:flex items-center justify-center size-[40px]" />
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

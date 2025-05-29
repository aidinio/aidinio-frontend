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
}: {
  articles: BlogPost[];
}) {
  const { setApi, canPrev, canNext } = useCarousel();
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
          <DescriptionPreview
            title={"Using this and that to that"}
            description={"wokjsadlkf aslkdfj aklsdj fasdf"}
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

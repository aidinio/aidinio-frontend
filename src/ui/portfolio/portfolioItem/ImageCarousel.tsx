import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { BASE } from "@/lib/client";
import { Image as ImageType } from "@/types/backend";
import Image from "next/image";

export default function ImageCarousel({images} : {images: ImageType[]}) {
  return (
    <div className="block w-[100vw] sm:mt-[6rem] md:mt-0 sm:w-full xl:w-[60%] mt-10">
      <Carousel className="flex flex-col">
        <CarouselContent className="w-fit max-w-full">
          {images.map((image) => (
            <CarouselItem
              key={image.id}
              className="flex items-center justify-center"
            >
              <div className="flex justify-center items-center px-[5rem]">
                <Image
                  src={`${BASE}${image.formats.medium.url}`}
                  width={769}
                  height={454}
                  className="w-[80vw] scale-120"
                  alt="portfolio picture"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-center gap-[10rem] w-full mt-10">
          <CarouselPrevious className="static scale-200" />
          <CarouselNext className="static scale-200" />
        </div>
      </Carousel>
    </div>
  );
}

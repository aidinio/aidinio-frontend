import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { BASE } from "@/lib/client";
import { Image as ImageType } from "@/types/backend";
import Image from "next/image";

export default function ImageCarousel({images} : {images: ImageType[]}) {
  return (
    <div className="block w-[100vw] sm:mt-[6rem] md:mt-0 sm:w-full mt-10">
      <Carousel className="flex flex-col w-full">
        <CarouselContent className="w-full max-w-full h-[40rem] max-h-[60rem]">
          {images.map((image) => (
            <CarouselItem
              key={image.id}
              className="flex items-center justify-center w-full h-full"
            >
              <div className="flex justify-center items-center h-full w-full ">
                <Image
                  src={`${BASE}${image.formats.medium.url}`}
                  width={1140}
                  height={640}
                  className="object-contain w-full h-full"
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

import { Image as ImageType } from "@/types/backend";
import Image from "next/image";
import PreviewPicture from "./PreviewPicture";
import { BASE } from "@/lib/client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ImageGallery({ images }: { images: ImageType[] }) {
  return (
    <>
        <div className="hidden sm:block rounded-[50px] shadow-xl overflow-hidden">
          <Image
            src={`${BASE}${images[0].formats.medium.url}`}
            width={769}
            height={454}
            className="w-full scale-120"
            alt="portfolio picture"
          />
        </div>
        <div className="hidden sm:grid grid-cols-2 grid-rows-3 gap-x-[30px] gap-y-[10px]">
          {images.map((image) => (
            <PreviewPicture
              key={image.id}
              src={`${BASE}${image.formats.medium.url}`}
            />
          ))}
        </div>
      <div className="block w-[100vw] sm:hidden mt-10">
        <Carousel className="flex flex-col">
          <CarouselContent>
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
    </>
  );
}

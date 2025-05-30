import { Image as ImageType } from "@/types/backend";
import Image from "next/image";
import PreviewPicture from "./PreviewPicture";
import { BASE } from "@/lib/client";

export default function ImageGallery({ images }: { images: ImageType[] }) {
  return (
    <>
      <div className="rounded-[50px] shadow-xl overflow-hidden">
        <Image
          src={`${BASE}${images[0].formats.medium.url}`}
          width={769}
          height={454}
          className="w-full scale-120"
          alt="portfolio picture"
        />
      </div>
      <div className="grid grid-cols-2 grid-rows-3 gap-x-[30px] gap-y-[10px]">
        {images.map((image) => (
          <PreviewPicture
            key={image.id}
            src={`${BASE}${image.formats.medium.url}`}
          />
        ))}
      </div>
    </>
  );
}

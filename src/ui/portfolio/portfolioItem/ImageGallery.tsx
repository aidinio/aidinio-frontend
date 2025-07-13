import { Image as ImageType } from "@/types/backend";
import ImageCarousel from "./ImageCarousel";

export default function ImageGallery({ images }: { images: ImageType[] }) {
  return (
      <ImageCarousel images={images} />
  );
}

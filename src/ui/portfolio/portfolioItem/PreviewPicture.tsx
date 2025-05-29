import Image from "next/image";

export default function PreviewPicture({ src }: { src: string }) {
  return (
    <Image
      src={src}
      width={227}
      height={134}
      className="rounded-[30px] w-full h-full max-w-[230px] max-h-[135px]"
      alt="portfolio picture"
    />
  );
}

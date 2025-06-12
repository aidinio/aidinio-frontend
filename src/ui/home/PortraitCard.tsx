import Image from "next/image";

export default function PortraitCard({
  alt,
  src,
}: {
  alt: string;
  src: string;
}) {
  return (
    <Image
      alt={alt}
      src={src}
      width={575}
      height={575}
      className="-mt-14 w-[56rem] h-full sm:mt-0 grow object-cover max-w-[min(36rem,100vw)] rounded-b-[30px] sm:rounded-[60px] shadow-default"
    />
  );
}

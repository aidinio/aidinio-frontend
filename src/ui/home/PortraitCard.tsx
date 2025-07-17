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
      className="-mt-14 w-full 2xl:w-[56rem] shrink h-full sm:mt-0 grow object-cover max-w-[min(36rem,100vw)] sm:max-w-[min(36rem,50vw)] rounded-b-[30px] sm:rounded-[60px] shadow-default"
    />
  );
}

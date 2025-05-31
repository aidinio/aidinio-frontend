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
      className="-mt-14 sm:mt-0 max-w-[min(33rem,100vw)] rounded-b-[30px] sm:rounded-[60px] shadow-default"
    />
  );
}

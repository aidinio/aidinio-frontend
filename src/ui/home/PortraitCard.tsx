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
      className="sm:rounded-[60px] sm:shadow-default"
    />
  );
}

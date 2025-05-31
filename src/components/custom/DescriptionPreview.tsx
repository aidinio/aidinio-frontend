import Image from "next/image";
import Link from "next/link";

export default function DescriptionPreview({
  title,
  description,
  href,
  imageSrc,
  imageAlt,
}: {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
}) {
  return (
    <div className="flex flex-col bg-white rounded-[35px] shadow-default w-fit h-full">
      <div className="p-[16px] flex flex-col h-full items-center gap-[20px] w-fit">
        <Image
          className="rounded-[20px] min-w-[350px]"
          src={imageSrc}
          alt={imageAlt}
          width={270}
          height={168}
        />
        <div className="px-[19px] h-full flex flex-col items-center justify-between gap-[16px] text-[1rem] max-w-[350px]">
          <div className="flex flex-col gap-5">
            <h2 className="font-semibold text-[1rem] self-start">{title}</h2>
            <p className="text-justify self-start px-[10px] font-medium">
              {description}
            </p>
          </div>
          <Link
            href={href}
            className="mb-[10px] flex justify-center items-center gap-[20px] bg-gradient-to-r from-[#BAF7FFAA] via-[#FEFFBAAA] to-[#FFB2B2AA] rounded-full px-[20px] py-[14px] font-semibold"
          >
            <span className="grow shrink-0">Read More</span>
            <div className="bg-[url(/arrow.svg)] bg-center bg-size-[cover] size-[18px] bg-no-repeat grow shrink-0"></div>
          </Link>
        </div>
      </div>
    </div>
  );
}

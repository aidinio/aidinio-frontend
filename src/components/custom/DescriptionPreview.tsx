import Image from "next/image";
import PrimaryLink from "./link/PrimaryLink";

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
    <div className="flex flex-col bg-white rounded-[2.25rem] shadow-default h-full min-h-[30rem] justify-between max-w-[min(100%,350px)] w-full">
      <div className="p-[1rem] flex flex-col grow h-full items-center justify-between gap-[20px]">
        <Image
          className="rounded-[1.25rem] w-full min-w-[min(90vw,300px)]"
          src={imageSrc}
          alt={imageAlt}
          width={270}
          height={168}
        />
        <div className="px-[19px] w-full h-full flex flex-col grow items-center justify-between gap-[16px] text-[1.2] max-w-[350px]">
          <div className="flex flex-col gap-5 w-full">
            <h2 className="font-bold text-[1.3rem] self-start">{title}</h2>
            <p className="text-justify self-start px-[10px] font-medium">
              {description.slice(0, 100)}
              {description.length > 100 && "..."}
            </p>
          </div>
          {/* <Link
            href={href}
            className="mb-[10px] flex justify-center items-center gap-[20px] bg-gradient-to-r from-[#BAF7FF77] via-[#FEFFBA77] to-[#FFB2B277] rounded-full px-[20px] py-[14px] font-semibold"
          >
            <span className="grow shrink-0">Read More</span>
            <div className="bg-[url(/arrow.svg)] bg-center bg-size-[cover] size-[18px] bg-no-repeat grow shrink-0"></div>
          </Link> */}
          <PrimaryLink href={href}>
            More
            <div
              className={`bg-[url(/arrow.svg)] bg-center bg-size-[cover] size-[1rem] md:size-[1.25rem] bg-no-repeat inline-block`}
            />
          </PrimaryLink>
        </div>
      </div>
    </div>
  );
}

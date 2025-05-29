import Image from "next/image";
import ArticleBody from "./ArticleBody";
import { BlogPost } from "@/types/backend";
import TextTag from "@/components/custom/TextTag";

export default function Article({ data }: { data: BlogPost }) {
  const { title, content, author, tags, createdAt } = data;
  const parsedDate = new Date(createdAt);
  return (
    <article className="flex flex-col gap-[32px] z-30 relative h-full">
      <h1 className="text-[40px] font-extrabold text-justify">{title}</h1>
      <div className="flex flex-col gap-[32px] px-[60px] h-full">
        <div className="flex justify-between items-center text-[#7E7E7E] font-medium text-[16px]">
          <div className="flex gap-4 items-center justify-center">
            <Image
              className="rounded-full inline-block"
              width={40}
              height={40}
              src={`http://localhost:1337${author.image.formats.thumbnail.url}`}
              alt="profile picture"
            />
            <span>{author.name}</span>
          </div>
          <div>{`${parsedDate.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}`}</div>
        </div>
        <div className="flex flex-wrap gap-[15px]">
          {tags.map((tag) => (
            <TextTag text={tag.label} key={tag.label} />
          ))}
        </div>
        <div className="tracking-[3%] leading-[210%] text-justify text-[20px] font-medium">
          <ArticleBody content={content} />
        </div>
      </div>
    </article>
  );
}

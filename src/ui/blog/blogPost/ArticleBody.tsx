import { BlocksContent, BlocksRenderer } from "@strapi/blocks-react-renderer";
import Link from "next/link";

export default function ArticleBody({ content }: { content: BlocksContent }) {
    return (
      <BlocksRenderer
        content={content}
        blocks={{
          paragraph: ({ children }) => (
            <p className="indent-[17px]">{children}</p>
          ),
          heading: ({ children, level }) => {
            switch (level) {
              case 1:
                return <h1 className="font-extrabold text-[2rem]">{children}</h1>;
              case 2:
                return <h2 className="font-bold text-[1.75rem]">{children}</h2>;
              case 3:
                return <h3 className="font-bold text-[1.5rem]">{children}</h3>;
              case 4:
                return <h4 className="font-bold text-[1.25rem]">{children}</h4>;
              case 5:
                return <h5 className="font-bold text-[1.25rem]">{children}</h5>;
              case 6:
                return <h6 className="font-bold text-[1.25rem]">{children}</h6>;
            }
          },
          link: ({ children, url }) => (
            <Link
              href={url}
              className="rounded-[10px] transition-all hover:bg-linear-to-r text-blue-500 hover:text-black hover:no-underline hover:from-[#BAF7FF66] hover:via-[#FEFFBA66] hover:to-[#FFB2B266] underline px-3 py-1"
            >
              {children}
            </Link>
          ),
        }}
        modifiers={{
          bold: ({ children }) => (
            <strong className="font-bold">{children}</strong>
          ),
          italic: ({ children }) => <span className="italic">{children}</span>,
        }}
      />
    );
  }
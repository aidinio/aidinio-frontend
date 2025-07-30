import { Icon } from "@phosphor-icons/react";

export default function TitledCard({
  Icon,
  title,
  children,
}: {
  Icon: Icon;
  title: string;
  children: React.ReactNode;
}) {
  return (
      <div className="bg-white rounded-4xl shadow-default flex gap-[0.75rem] flex-col justify-between items-start p-[3rem] size-fit w-[80vw] sm:w-full">
        <div className="flex gap-[1.5rem] items-center self-start">
          <Icon weight="bold" size={"2rem"} />
          <h1 className="text-[2rem] font-semibold">{title}</h1>
        </div>
      {children}
      </div>
  );
}

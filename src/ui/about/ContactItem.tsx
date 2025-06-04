import { Icon } from "@phosphor-icons/react";

export default function ContactItem({
  Icon,
  title,
  content,
}: {
  Icon: Icon;
  title: string;
  content: string;
}) {
  return (
    <div className="flex items-center gap-[11px]">
      <Icon size={24} />
      <div className="flex flex-col gap-[2px]">
        <span className="font-bold">{title}</span>
        <span className="font-medium">{content}</span>
      </div>
    </div>
  );
}

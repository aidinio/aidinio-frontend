import { Icon } from "@iconify/react";

export default function IconLabelBadge({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex gap-[10px] bg-white items-center px-[15px] py-[10px] text-[1rem] font-semibold w-fit shadow-[0px_3px_6px_0px_#e8e8e8] rounded-[20px]">
      <Icon icon={icon} fontSize={"1.5rem"} />
      <span>{text}</span>
    </div>
  );
}
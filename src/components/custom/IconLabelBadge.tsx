import { Icon } from "@iconify/react";

export default function IconLabelBadge({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex gap-[10px] items-center px-[15px] py-[10px] text-[16px] font-semibold w-fit shadow-[0px_3px_6px_0px_#e8e8e8] rounded-[20px]">
      <Icon icon={icon} width={30} height={30} />
      <span>{text}</span>
    </div>
  );
}
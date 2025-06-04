import { Icon } from "@iconify/react/dist/iconify.js";

export default function SkillBadge({ icon, text }: { icon: string; text: string }) {
    return (
      <div className="flex gap-[10px] items-center bg-white px-[15px] py-[10px] text-[1rem] font-semibold w-fit shadow-[0px_3px_6px_0px_#e8e8e8] rounded-[20px]">
        <Icon icon={icon} width={22} height={22} />
        <span>{text}</span>
      </div>
    );
  }
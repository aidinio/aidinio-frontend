import { PhosphorIconName } from "@/data/types";
import clsx from "clsx";
import Link from "next/link";
import DynamicPhosphorIcon from "./DynamicIcon";

export default function PhosphorLabelBadge({
    icon,
    label,
    href,
    selected,
  }: {
    icon: PhosphorIconName;
    label: string;
    href: string;
    selected?: boolean;
  }) {
    return (
      <Link
        className={clsx(
          "flex p-[20px] shadow-default items-center justify-center rounded-full gap-2",
          { "font-bold text-white bg-black shadow-none": selected }
        )}
        href={encodeURI(href)}
      >
        <DynamicPhosphorIcon icon={icon} weight={selected ? "bold" : "regular"} />
        {label}
      </Link>
    );
  }
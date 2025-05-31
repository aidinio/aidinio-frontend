import type { Icon } from "@phosphor-icons/react";
import Link from "next/link";

export default function IconCard({ Icon, href }: { Icon: Icon; href: string }) {
  return (
    <Link
      href={href}
      className="shadow-default size-[3.75rem] bg-white rounded-[10px] sm:rounded-[16px] flex justify-center items-center"
    >
      <Icon fontSize={"1.75rem"} />
    </Link>
  );
}

import type { Icon } from "@phosphor-icons/react";
import Link from "next/link";

export default function IconCard({ Icon, href }: { Icon: Icon; href: string }) {
  return (
    <Link
      href={href}
      className="shadow-default size-[60px] bg-white rounded-[15px] flex justify-center items-center"
    >
      <Icon size={29} />
    </Link>
  );
}

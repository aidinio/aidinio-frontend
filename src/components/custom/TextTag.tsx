import clsx from "clsx";
import Link from "next/link";

export default function TextTag({
  label,
  selected,
  href,
}: {
  label: string;
  selected?: boolean;
  href?: string;
}) {
  const classes = clsx(
    "font-semibold rounded-full px-[17px] py-[6px] shadow-[0px_0px_10px_0px_#E9E9E9]",
    {
      "bg-black text-white": selected,
      "bg-white text-black": !selected,
    }
  );
  if (href)
    return (
      <Link href={href} className={classes}>
        {" "}
        {label}{" "}
      </Link>
    );
  return <span className={classes}>{label}</span>;
}

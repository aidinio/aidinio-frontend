"use client";

import { iconCache } from "@/data/cache";
import { PhosphorIcon } from "@/types/PhosphorIcon";
import { Spiral } from "@phosphor-icons/react/dist/ssr";
import dynamic from "next/dynamic";

interface DynamicPhosphorIconProps extends React.ComponentProps<typeof Spiral> {
  ssr?: boolean | undefined;
  icon: PhosphorIcon;
}

export default function DynamicPhosphorIcon({
  icon,
  ssr = undefined,
  ...props
}: DynamicPhosphorIconProps) {
  const Icon = iconCache.has(icon)
    ? iconCache.get(icon)
    : dynamic(
        () =>
          import("@phosphor-icons/react").then((mod) => {
            iconCache.set(icon, mod[icon]);
            return mod[icon];
          }),
        {
          ssr: ssr,
          loading: () => (
            <Spiral
              className="animate-spin text-black"
              {...props}
            />
          ),
        }
      );
  return <Icon {...props} />;
}

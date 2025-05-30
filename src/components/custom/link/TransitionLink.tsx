"use client";

import Link, { LinkProps } from "next/link";
import { ReactNode, useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface TransitionLinkProps extends LinkProps {
  children: ReactNode;
  href: string;
}

export default function TransitionLink({
  href,
  children,
  ...props
}: TransitionLinkProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )
  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    router.replace(pathname+"?"+createQueryString("loading", href))
    router.push(href);
  };
  return (
    <>
      <Link onClick={handleTransition} href={href} {...props}>
        {children}
      </Link>
    </>
  );
}

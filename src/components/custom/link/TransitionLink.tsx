"use client";

import Link, { LinkProps } from "next/link";
import { ReactNode, useCallback, useEffect } from "react";
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
  useEffect(() => {
    console.log(`[!] ${pathname}`);
  }, [pathname, router]);

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    router.replace(pathname+"?"+createQueryString("loading", href))
    // await new Promise(resolve => setTimeout(resolve, 2000));
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

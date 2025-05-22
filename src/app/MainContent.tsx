"use client";

import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { ReactNode, useState, useEffect } from "react";
import { usePathname } from 'next/navigation';

export default function Page({ children }: { children: ReactNode }) {
  const [key, setKey] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    setKey((prevKey) => prevKey + 1); // Change key to trigger animation on route change
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={key}
        initial={{ translateY: 50, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: easeInOut }}
        className="w-full h-full flex justify-center items-center"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

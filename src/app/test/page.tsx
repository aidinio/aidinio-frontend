"use client";

import { useScroll } from "motion/react";
import { motion, useMotionValueEvent } from "framer-motion";

export default function Page() {
  // const
  const { scrollYProgress, scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
  });
  return (
    <>
      <motion.div className="block w-full h-[110vh] bg-white rounded-[50px] absolute top-0">
        <motion.div
          className="bg-red-500 block h-[100px] w-[50px]"
          style={{ scaleX: scrollYProgress }}
        />
        asdf
      </motion.div>
    </>
  );
}

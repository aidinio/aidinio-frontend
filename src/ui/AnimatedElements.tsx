"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const classNames = [
  "absolute rounded-full bg-[#A7FFD5] size-[31vmax] block",
  "absolute rounded-full bg-[#FFB2B2] size-[28vmax] block",
  "absolute rounded-full bg-[#FEFFBA] size-[26vmax] block",
  "absolute rounded-full bg-[#FEFFBA] size-[26vmax] block",
  "absolute rounded-full bg-[#DCBAFF] size-[23vmax] block",
  "absolute rounded-full bg-[#DCBAFF] size-[23vmax] block",
  "absolute rounded-full bg-[#BAF7FF] size-[23vmax] block",
  "absolute rounded-full bg-[#BAF7FF] size-[23vmax] block",
];

const getQuadraticExtremeRandom = () => {
  const randomValue = Math.random();
  return randomValue < 0.5
    ? Math.pow(randomValue, 2)
    : 1 - Math.pow(1 - randomValue, 2);
};


const AnimatedElements = () => {
  const [elements, setElements] = useState<{ dim: number }[]>([]);
  useEffect(() => {
    const size = Math.max(window.innerHeight, window.innerWidth)
    setElements([
      { dim: 0.31 * size },
      { dim: 0.28 * size },
      { dim: 0.26 * size },
      { dim: 0.26 * size },
      { dim: 0.23 * size },
      { dim: 0.23 * size },
      { dim: 0.23 * size },
      { dim: 0.23 * size },
    ]);
  }, []);
  const [positions, setPositions] = useState<{ x: number; y: number }[]>([]);
  useEffect(() => {
    const getRandomPosition = (dim: number) => ({
      x: getQuadraticExtremeRandom() * (window.innerWidth - dim),
      y: getQuadraticExtremeRandom() * (window.innerHeight - dim),
    });

    let effectPositions = elements.map((e) => getRandomPosition(e.dim));
    effectPositions = effectPositions.map((_, index) =>
      getRandomPosition(elements[index].dim)
    );
    const generateRandomPositions = () => {
      effectPositions = effectPositions.map((_, index) =>
        getRandomPosition(elements[index].dim)
      );
      setPositions(effectPositions);
    };
    generateRandomPositions();
    const interval = setInterval(generateRandomPositions, 3000);

    return () => clearInterval(interval);
  }, [elements]);

  if (positions.length === 0) {
    return null;
  }

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        height: "100vh",
        width: "100vw",
      }}
      >
      {elements.map((_, index) => (
        <motion.div
          key={index}
          initial={positions[index]}
          animate={positions[index]}
          transition={{
            duration: 3,
            ease: "easeInOut",
            willChange: "transform",
            
          }}
          className={`${classNames[index]} blur-[150px]`}
          ></motion.div>
        ))}
    </div>
  );
};

export default AnimatedElements;

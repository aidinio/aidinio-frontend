"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const classNames = [
  "absolute rounded-full bg-[#A7FFD5] w-[600px] h-[600px] block",
  "absolute rounded-full bg-[#FFB2B2] w-[550px] h-[550px] block",
  "absolute rounded-full bg-[#FEFFBA] w-[500px] h-[500px] block",
  "absolute rounded-full bg-[#FEFFBA] w-[500px] h-[500px] block",
  "absolute rounded-full bg-[#DCBAFF] w-[450px] h-[450px] block",
  "absolute rounded-full bg-[#DCBAFF] w-[450px] h-[450px] block",
  "absolute rounded-full bg-[#BAF7FF] w-[450px] h-[450px] block",
  "absolute rounded-full bg-[#BAF7FF] w-[450px] h-[450px] block",
  //   "absolute rounded-full bg-[#DCBAFF] w-[600px] h-[600px] block",
];

const AnimatedElements = () => {
  const elements = [
    { dim: 600 },
    { dim: 550 },
    { dim: 500 },
    { dim: 500 },
    { dim: 450 },
    { dim: 450 },
    { dim: 450 },
    { dim: 450 },
  ];

  const getQuadraticExtremeRandom = () => {
    const randomValue = Math.random();
    return randomValue < 0.5
      ? Math.pow(randomValue, 2)
      : 1 - Math.pow(1 - randomValue, 2);
  };

  const getRandomPosition = (dim: number) => ({
    x: getQuadraticExtremeRandom() * (window.innerWidth - dim),
    y: getQuadraticExtremeRandom() * (window.innerHeight - dim),
  });

  const [positions, setPositions] = useState(
    elements.map((e) => getRandomPosition(e.dim))
  );
  useEffect(() => {
    if (window)
      setPositions((prevPositions) =>
        prevPositions.map((_, index) => getRandomPosition(elements[index].dim))
      );
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setPositions((prevPositions) =>
        prevPositions.map((_, index) => getRandomPosition(elements[index].dim))
      );
    }, 3000); // Change position every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [elements, getRandomPosition]);

  return (
    <div style={{ position: "relative", overflow: "hidden", height: "100vh" }}>
      {elements.map((_, index) => (
        <motion.div
          key={index}
          initial={positions[index]}
          animate={positions[index]}
          transition={{
            duration: 3,
            ease: "easeInOut",
          }}
          //   style={{
          //     width: '100px',
          //     height: '100px',
          //     backgroundColor: 'lightblue',
          //     position: 'absolute',
          //   }}
          className={`${classNames[index]} blur-[150px]`}
        ></motion.div>
      ))}
    </div>
  );
};

export default AnimatedElements;

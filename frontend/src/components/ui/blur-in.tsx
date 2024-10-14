"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlurInProps {
  word: React.ReactNode; // Change from string to React.ReactNode
  className?: string;
  variant?: {
    hidden: { filter: string; opacity: number };
    visible: { filter: string; opacity: number };
  };
  duration?: number;
  delay?: number; // Added delay property
}

const BlurIn = ({ word, className, variant, duration = 1, delay = 0 }: BlurInProps) => {
  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      transition={{ duration, delay }} // Added delay to transition
      variants={combinedVariants}
      className={cn(
        "font-display text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]",
        className,
      )}
    >
      {word}
    </motion.h1>
  );
};

export default BlurIn;

"use client";

import React from "react";
import { motion, type AnimationProps } from "framer-motion";

import { cn } from "@/lib/utils";

const buttonAnimationProps = {
  initial: { "--x": "100%", scale: 0.9 },
  animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.95 },
  transition: {
    delay: 2.1, // Increased delay to 2 seconds
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 0.5,
    type: "spring",
    stiffness: 15, // Reduced stiffness for slower animation
    damping: 20,   // Increased damping for smoother animation
    mass: 1.5,
    scale: {
      type: "spring",
      stiffness: 160, // Reduced stiffness for slower scaling
      damping: 15,    // Increased damping for smoother scaling
      mass: 0.8,
    },
  },
} as AnimationProps;

const textAnimationProps = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: {
    delay: 2, // Increased delay to 2 seconds
    duration: 3, // Increased duration for slower text animation
    type: "fade-in",
    stiffness: 160,
    damping: 10,
  },
} as AnimationProps;

interface ShinyButtonProps {
  children: React.ReactNode;
  className?: string;
}

const ShinyButton = ({ children, className, ...props }: ShinyButtonProps) => {
  return (
    <motion.button
      {...buttonAnimationProps}
      {...props}
      className={cn(
        "relative rounded-lg px-8 py-4 font-medium text-xl backdrop-blur-xl transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 dark:bg-gray-900 dark:hover:shadow-[0_0_30px_hsl(var(--primary)/20%)]",
        className,
      )}
    >
      <motion.span
        {...textAnimationProps}
        className="relative block w-full tracking-wide text-[rgb(0,0,0,85%)] dark:text-[rgb(255,255,255,95%)]"
        style={{
          maskImage:
            "linear-gradient(-75deg,hsl(var(--primary)) calc(var(--x) + 15%),transparent calc(var(--x) + 25%),hsl(var(--primary)) calc(var(--x) + 100%))",
        }}
      >
        {children}
      </motion.span>
      <span
        style={{
          mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          maskComposite: "exclude",
        }}
        className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,hsl(var(--primary)/20%)_calc(var(--x)+15%),hsl(var(--primary)/70%)_calc(var(--x)+20%),hsl(var(--primary)/20%)_calc(var(--x)+100%))] p-[2px]"
      ></span>
    </motion.button>
  );
};

export default ShinyButton;

"use client";

import { motion } from "framer-motion";

export function ScrollAnimation({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  yOffset = 30,
  once = true,
  amount = 0.2, // Percentage of element needed in view to trigger
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: once, amount: amount }}
      transition={{
        duration: duration,
        delay: delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}

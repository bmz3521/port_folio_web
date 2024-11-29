"use client";
import { motion, AnimatePresence } from "motion/react";

const PageWrapper = ({ children }:Readonly<{
    children: React.ReactNode;
  }>) => (
  <AnimatePresence mode="wait">
    <motion.main
      key="main"
      initial={{ opacity: 0, x: +200 }}
      animate={{ opacity: 1, x: 0 }}
      exist={{ opacity: 0, x: -100 }}
      transition={{ delay: 0.25 }}
      className="container"
    >
      {children}
    </motion.main>
  </AnimatePresence>
);

export default PageWrapper;

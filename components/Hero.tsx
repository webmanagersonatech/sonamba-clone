"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

// Safe cubic easing
const cubicEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

// Parent container for stagger
const heroVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.25 } },
};

// Title animation
const titleVariant: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: cubicEase } },
};

// Description animation
const descVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: cubicEase } },
};

// Button animation
const buttonVariant: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: cubicEase },
  },
};

export default function Hero() {
  const [headerHeight, setHeaderHeight] = useState(0);

  // Dynamically get header height
  useEffect(() => {
    const updateHeaderHeight = () => {
      const header = document.querySelector("header");
      const topHeader = document.querySelector("#top-header");
      const totalHeight =
        (header?.clientHeight || 0) + (topHeader?.clientHeight || 0);
      setHeaderHeight(totalHeight);
    };
    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);
    window.addEventListener("scroll", updateHeaderHeight);

    return () => {
      window.removeEventListener("resize", updateHeaderHeight);
      window.removeEventListener("scroll", updateHeaderHeight);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden"
      style={{ height: `calc(100vh - ${headerHeight}px)` }}
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover object-center"
        src="/images/hero/download.webm"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={heroVariants}
        className="relative z-10 container mx-auto px-4 flex flex-col justify-center items-center sm:items-start text-center sm:text-left h-full"
      >
        <motion.h1
          variants={titleVariant}
          className="text-white text-4xl sm:text-6xl font-bold leading-tight"
        >
          Global Learning, Local Impact
        </motion.h1>

        <motion.p
          variants={descVariant}
          className="mt-4 text-gray-200 text-lg sm:text-xl max-w-xl"
        >
          Our MBA prepares you to lead with confidence.
        </motion.p>

        <motion.a
          variants={buttonVariant}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://www.sonabusinessschool.com/online-application?inst_id=ZFSQSGGCPYXQ9589"
          target="_blank"
          className="relative inline-flex items-center border border-white justify-start mt-6 px-6 py-3 overflow-hidden font-medium transition-all  
  border border-transparent rounded group"
        >
          <span
            className="w-48 h-48 rounded border rotate-[-40deg] bg-gradient-to-br from-[#006466] via-[#0B7285] to-[#1098AD]
      absolute bottom-0 left-0 -translate-x-full translate-y-full mb-9 ml-9
      transition-all duration-500 ease-out
      group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"
          ></span>

          <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">
            Apply Now →
          </span>
        </motion.a>



      </motion.div>
    </section>
  );
}

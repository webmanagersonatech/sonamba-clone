"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { Md360 } from "react-icons/md";

export default function About() {
  const [counts, setCounts] = useState({
    industry: 0,
    recruiters: 0,
    alumni: 0,
    ceo: 0,
  });

  const { ref: counterRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // Counter Animation
  useEffect(() => {
    if (inView) {
      const duration = 2000;
      const step = 20;

      const target = {
        industry: 100,
        recruiters: 250,
        alumni: 2500,
        ceo: 300,
      };

      let start = 0;
      const interval = setInterval(() => {
        start += step;
        setCounts({
          industry: Math.min(Math.floor((start / duration) * target.industry), target.industry),
          recruiters: Math.min(Math.floor((start / duration) * target.recruiters), target.recruiters),
          alumni: Math.min(Math.floor((start / duration) * target.alumni), target.alumni),
          ceo: Math.min(Math.floor((start / duration) * target.ceo), target.ceo),
        });
        if (start >= duration) clearInterval(interval);
      }, step);

      return () => clearInterval(interval);
    }
  }, [inView]);

  return (
    <section id="about" className="relative overflow-hidden bg-transparent">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-y-0 left-0 w-1/4 hidden lg:block bg-[repeating-linear-gradient(135deg,#e5e5e5_0px,#e5e5e5_2px,transparent_2px,transparent_150px)] opacity-40"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 hidden lg:block bg-[repeating-linear-gradient(225deg,#e5e5e5_0px,#e5e5e5_2px,transparent_2px,transparent_150px)] opacity-40"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 md:px-12 py-12 grid gap-10 md:gap-16 md:grid-cols-2 items-start">

        {/* Mobile + Tablet Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:hidden w-full text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            <span className="text-yellow-500">About </span>
            <span className="text-maroon">SONA GROUP</span>
          </h2>
        </motion.div>

        {/* Left Column - Image + Badge */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full h-[280px] sm:h-[380px] md:h-full flex flex-col justify-center"
        >
          <div className="relative w-full h-full overflow-hidden">
            <motion.div
              whileHover={{
                scale: 1.02,
                rotate: [-0.5, 0.5, 0],
                transition: { duration: 0.6 },
              }}
              className="relative w-full h-full"
            >
              <Image
                src="/images/about/100-photo.webp"
                alt="Sona SSBM Campus"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </motion.div>
          </div>

          {/* NAAC Badge */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "backOut" }}
            viewport={{ once: true }}
            className="absolute bottom-6 sm:bottom-20 left-6 w-[clamp(5rem,8vw,10rem)] h-[clamp(5rem,8vw,10rem)] 
             flex flex-col items-center justify-center rounded-full bg-gradient-to-br from-[#A0E7E5] via-[#B4F8C8] to-[#FBE7C6]
             text-[#FFD700] font-semibold shadow-2xl border-[3px] sm:border-4 border-maroon 
             p-2 sm:p-3"
          >
            {/* Image scaled to a fraction of the badge size */}
            <img
              src="/images/about/100+-year.png"
              alt="NAAC Accredited"
              className="w-1/2 h-1/2 sm:w-1/2 sm:h-1/2 mb-1 object-contain"
            />

            {/* Text scales with the badge */}
            <div className="text-[clamp(0.5rem,1.5vw,1rem)] text-center leading-tight text-maroon-800">
              INDUSTRY & <br /> ACCADAMY
            </div>
          </motion.div>


          {/* Mobile + Tablet 360° Button */}
          <div className="mt-4 flex justify-center md:hidden">
            <a
              href="https://www.sonatech.ac.in/campus-360-virtual-tour/MBA/index.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-4 py-2 bg-maroon text-white font-bold rounded-lg shadow-lg hover:bg-maroon/80 transition-colors duration-300 text-sm sm:text-base"
            >
              <Md360 className="mr-2 w-5 h-5" /> {/* Icon moved to left with right margin */}
              View 360°
            </a>
          </div>








        </motion.div>

        {/* Right Column - Text + Counters */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative h-full space-y-6 rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl bg-white/60 backdrop-blur-lg flex flex-col justify-between"
        >
          {/* Mobile Heading */}
          <div className="hidden md:flex flex-col md:flex-row md:justify-between md:items-center text-center md:text-left space-y-2 md:space-y-0">
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              <span className="text-gray-500 block md:inline">About </span>
              <span className="text-maroon block md:inline">SONA GROUP</span>
            </h2>

            {/* 360° Button */}
            <a
              href="https://www.sonatech.ac.in/campus-360-virtual-tour/MBA/index.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-4 py-2 bg-maroon text-white font-bold rounded-lg shadow-lg hover:bg-maroon/80 transition-colors duration-300 text-sm sm:text-base inline-block"
            >
              View 360°
              <Md360 className="absolute top-0 left-0 w-5 h-5 bg-maroon rounded-full text-white -translate-x-1/2 -translate-y-1/2" />
            </a>
          </div>



          {/* Text */}
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg text-justify ">
            The Sona Group began in the early 20th century under industrialist and philanthropist Karumuttu Thiagarajar Chettiar, whose mission was to empower society through industry and education. A well-known moment in its history is Mahatma Gandhi’s visit to Chettiar’s residence, where Gandhi adopted the simple loincloth as a symbol of solidarity with the poor. Over the years, the Group expanded from textiles into key sectors such as engineering, technology, and national development. The Sona Group played an influential role in India’s industrial growth through modern textile mills, engineering research centres, and major tower implementations that improved communication and infrastructure across the country. Its education wing later grew into renowned institutions, including Sona College of Technology and the Sona School of Business and Management (SSBM), continuing the legacy of quality, innovation, and social responsibility.
          </p>

          {/* Counters */}
          <motion.div
            ref={counterRef}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6 text-center"
          >
            {[
              { value: counts.industry, label: "Industry Connect" },
              { value: counts.recruiters, label: "Recruiters" },
              { value: counts.alumni, label: "Managerial Exp. Alumnus" },
              { value: counts.ceo, label: "CEO's Talks" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              >
                <h3 className="text-xl sm:text-2xl font-bold text-maroon">{item.value}+</h3>
                <p className="text-gray-600 text-xs sm:text-sm">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Know More Button */}
          <Link
            href={{ pathname: "/about" }}
            className="inline-block mt-6 px-6 py-3 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 text-maroon font-medium rounded-xl shadow-lg hover:from-gray-300 hover:to-gray-500 transition-colors transition text-sm sm:text-base text-center"
          >
            Know More →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

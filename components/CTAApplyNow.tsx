"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import AdmissionForm from "./AdmissionForm";
import Modal from "./Modal";

export default function CTAApplyNow({ fadeUp }: any) {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const bubbles = [
    { top: "10%", left: "20%", size: 3, delay: 0 },
    { top: "50%", left: "80%", size: 4, delay: 1 },
    { top: "70%", left: "40%", size: 2.5, delay: 2 },
    { top: "30%", left: "60%", size: 3.5, delay: 0.5 },
  ];

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="relative w-full py-8 text-center bg-[linear-gradient(to_bottom,_#A88562_0%,_#8A6645_40%,_#6A4A2F_100%)]"
      >
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4">
          Ready to Transform Your Future?
        </h2>

        <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}

            onClick={() => setIsModalOpen(true)}

            className="inline-flex items-center px-5 sm:px-6 md:px-8 py-2 sm:py-3 text-maroon font-semibold rounded-lg shadow-lg bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 border transition-all"
          >
            Apply Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2 animate-bounce"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </motion.button>

        </motion.div>

        {bubbles.map((bubble, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 0, x: 0, opacity: 0.3, scale: 1 }}
            animate={{
              y: [-5, 5, -5],
              x: [-3, 3, -3],
              opacity: [0.2, 0.6, 0.2],
              scale: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: bubble.delay,
              repeatType: "loop",
            }}
            className="absolute rounded-full bg-white/30 backdrop-blur-md"
            style={{
              width: `${bubble.size}rem`,
              height: `${bubble.size}rem`,
              top: bubble.top,
              left: bubble.left,
              zIndex: 5,
            }}
          />
        ))}



      </motion.div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-2xl font-bold mb-4">Admission</h2>
        <AdmissionForm />
      </Modal>
    </>
  );
}

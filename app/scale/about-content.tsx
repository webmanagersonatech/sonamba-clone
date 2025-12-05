"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// ICONS - Smaller sizes
import { FiInfo, FiEye, FiClock, FiUsers } from "react-icons/fi";
import {
  FaRocket,
  FaLaptopCode,
  FaStar,
  FaLightbulb,
  FaChartLine,
  FaGlobe,
  FaBuilding,
} from "react-icons/fa";

import {
  FaRobot,
  FaChartBar,
  FaCloud,
  FaShieldAlt,
  FaBullseye,
  FaCogs,
  FaCoins,
} from "react-icons/fa";
import {
  FaPlane,
  FaGraduationCap,
  FaBriefcase,
  FaTools,
  FaUsers,
} from "react-icons/fa";

import {
  FaClock,
  FaHandshake,
  FaUniversity,
  FaFlagCheckered,
} from "react-icons/fa";

import {
  FaMicrochip,
  FaIndustry,
  FaFlask,
  FaSync,
  FaMagic,
} from "react-icons/fa";

import { MdOutlineAutoFixHigh } from "react-icons/md";

// Custom CSS for colors
const customStyles = `
  .text-primary {
    color: #B98A5A !important;
  }
  
  .bg-primary {
    background-color: #B98A5A !important;
  }
  
  .border-primary {
    border-color: #B98A5A !important;
  }
  
  .hover\\:text-primary:hover {
    color: #B98A5A !important;
  }
  
  .text-primary-light {
    color: rgba(185, 138, 90, 0.1) !important;
  }
  
  .bg-primary-light {
    background-color: rgba(185, 138, 90, 0.1) !important;
  }
  
  .bg-primary-50 {
    background-color: rgba(185, 138, 90, 0.05) !important;
  }
  
  .text-primary-dark {
    color: #9a6f3c !important;
  }
  
  .bg-primary-dark {
    background-color: #9a6f3c !important;
  }
`;

type TabId =
  | "why-scale"
  | "industry-designed"
  | "tech-driven"
  | "global-exposure"
  | "startup-incubation"
  | "residential-learning"
  | "sona-legacy"
  | "future-proof-careers"
  | "leadership-development"
  | "future-ready-school";

interface Section {
  id: TabId;
  title: string;
  icon: any;
}

export default function ScalePage({ activeSlug }: any) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<TabId>("why-scale");

  // ALL TABS
  const sections: Section[] = [
    { id: "why-scale", title: "Why SCALE", icon: FiInfo },
    {
      id: "industry-designed",
      title: "Industry-Designed B-School",
      icon: FiEye,
    },
    {
      id: "tech-driven",
      title: "Tech-Driven Business School",
      icon: FaLaptopCode,
    },
    { id: "global-exposure", title: "Global Exposure", icon: FaGlobe },
    {
      id: "startup-incubation",
      title: "Startup Incubation Centre",
      icon: FaRocket,
    },
    {
      id: "residential-learning",
      title: "Residential Learning",
      icon: FiUsers,
    },
    { id: "sona-legacy", title: "Sona Legacy", icon: FaStar },
    {
      id: "future-proof-careers",
      title: "Future-Proof Careers",
      icon: FaChartLine,
    },
    {
      id: "leadership-development",
      title: "Leadership Development",
      icon: MdOutlineAutoFixHigh,
    },
    {
      id: "future-ready-school",
      title: "Future-Ready School",
      icon: FaLightbulb,
    },
  ];

  // URL SYNC
  useEffect(() => {
    if (activeSlug && sections.some((s) => s.id === activeSlug)) {
      setActiveTab(activeSlug);
    }
  }, [activeSlug]);

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab && sections.some((s) => s.id === tab)) {
      setActiveTab(tab as TabId);
    }
  }, [searchParams]);

  const handleTabChange = (tabId: TabId) => {
    setActiveTab(tabId);
    router.push(`/scale/${tabId}`);
  };

  // CURRENT SECTION TITLE
  const currentSection = sections.find((s) => s.id === activeTab);

  const tabImages: any = {
    "why-scale": "/images/banner/about-banners/about-us.webp",
    "industry-designed": "/images/banner/about-banners/about-us.webp",
    "tech-driven": "/images/banner/about-banners/about-us.webp",
    "global-exposure": "/images/banner/about-banners/about-us.webp",
    "startup-incubation": "/images/banner/about-banners/about-us.webp",
    "residential-learning": "/images/banner/about-banners/about-us.webp",
    "sona-legacy": "/images/banner/about-banners/about-us.webp",
    "future-proof-careers": "/images/banner/about-banners/about-us.webp",
    "leadership-development": "/images/banner/about-banners/about-us.webp",
    "future-ready-school": "/images/banner/about-banners/about-us.webp",
  };

  const tabVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <>
      <style jsx global>
        {customStyles}
      </style>

      <section className="w-full min-h-screen bg-gray-50 py-12 flex flex-col items-center">
        {/* BANNER */}
        <div className="relative w-full">
          <AnimatePresence mode="wait">
            <motion.img
              key={tabImages[activeTab]}
              src={tabImages[activeTab] || ""}
              alt="Scale Banner"
              className="w-full h-auto max-h-96 object-contain"
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </AnimatePresence>

          {/* TITLE */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-7xl px-4 sm:px-6">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg flex items-center gap-2">
              {currentSection?.title}
            </h1>

            <div className="mt-3 sm:mt-4 w-full">
              <nav
                className="flex flex-wrap text-white text-xs sm:text-sm md:text-base"
                aria-label="Breadcrumb"
              >
                <ol className="inline-flex flex-wrap items-center space-x-1 sm:space-x-2">
                  {/* Home */}

                  <li className="inline-flex items-center">
                    <Link
                      href="/"
                      className="hover:text-maroon cursor-pointer transition-colors text-white"
                    >
                      Home
                    </Link>
                    <span className="text-white mx-1">{">"}</span>
                  </li>

                  {/* About Scale*/}

                  <li className="inline-flex items-center">
                    <Link
                      href="/scale"
                      className="hover:text-maroon cursor-pointer transition-colors text-white"
                    >
                      About Scale
                    </Link>
                    <span className="text-white mx-1">{">"}</span>
                  </li>

                  {/* Current Section */}
                  <li className="inline-flex items-center text-white font-semibold">
                    {currentSection?.title}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>

        {/* TABS */}
        <div className="w-full relative border-b border-gray-300 mt-6">
          <div className="relative flex flex-wrap justify-center gap-2 sm:gap-4 w-full max-w-7xl mx-auto px-2 sm:px-0">
            {sections.map((sec) => {
              const Icon = sec.icon;
              const isActive = activeTab === sec.id;

              return (
                <button
                  key={sec.id}
                  onClick={() => handleTabChange(sec.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all text-sm md:text-base ${
                    isActive
                      ? "text-primary font-semibold bg-primary-light"
                      : "text-primary-700 hover:bg-gray-200 hover:text-primary"
                  }`}
                >
                  <Icon className="w-4 h-4 md:w-5 md:h-5" />
                  {sec.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* CONTENT */}
        <div className="w-full max-w-7xl mx-auto mt-6 sm:mt-8 md:mt-10 relative flex flex-col gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 lg:px-6">
          <AnimatePresence mode="wait">
            {/* ---------------- WHY SCALE ---------------- */}
            {activeTab === "why-scale" && (
              <motion.div
                key="why-scale"
                variants={tabVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="bg-white p-6 md:p-8 rounded-xl shadow-lg space-y-6"
              >
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                    Why Students Should Join Sona School of Business &
                    Management - SCALE
                  </h2>
                  <p className="text-base md:text-lg text-primary-700">
                    India's First Truly Tech-Driven, Industry-Built Business
                    School
                  </p>
                  <p className="text-primary-600 mt-2 text-sm md:text-base">
                    Sona Business School is not another B-school. It is a
                    new-age, high-impact leadership factory created for students
                    who want to lead the future—not catch up to it.
                  </p>
                </div>

                <div className="bg-primary-50 p-6 rounded-lg border-l-4 border-primary">
                  <h3 className="text-lg md:text-xl font-bold text-primary-800 mb-4">
                    Here is what makes SCALE truly unique:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {sections.slice(1).map((sec, index) => (
                      <button
                        key={sec.id}
                        onClick={() => handleTabChange(sec.id)}
                        className="flex items-center gap-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow text-left text-sm md:text-base"
                      >
                        <div className="bg-primary-light p-2 rounded-lg">
                          <sec.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-primary-800">
                            {sec.title}
                          </p>
                          <p className="text-xs md:text-sm text-primary-600 mt-1">
                            Click to learn more
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* ---------------- INDUSTRY DESIGNED ---------------- */}
            {activeTab === "industry-designed" && (
              <motion.div
                key="industry-designed"
                variants={tabVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="bg-white p-6 md:p-8 rounded-xl shadow-lg space-y-6"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-primary-light p-3 rounded-lg">
                    <FiEye className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary">
                    A Business School Built by the Industry, for the Industry,
                    to the Industry
                  </h2>
                </div>

                <p className="text-base md:text-lg text-primary-700">
                  Most business schools teach industry. SCALE-SSBM is designed
                  by industry.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary-light p-2 rounded-full mt-1">
                        <span className="font-bold text-primary">✓</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-primary-800 text-sm md:text-base">
                          Curriculum co-created with CXOs, founders, and tech
                          leaders
                        </h4>
                        <p className="text-primary-600 text-xs md:text-sm mt-1">
                          Learn from the people who shape industries
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-primary-light p-2 rounded-full mt-1">
                        <span className="font-bold text-primary">✓</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-primary-800 text-sm md:text-base">
                          Real-world case labs instead of textbook theory
                        </h4>
                        <p className="text-primary-600 text-xs md:text-sm mt-1">
                          Solve actual business problems from day one
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary-light p-2 rounded-full mt-1">
                        <span className="font-bold text-primary">✓</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-primary-800 text-sm md:text-base">
                          Industry mentors are part of everyday learning
                        </h4>
                        <p className="text-primary-600 text-xs md:text-sm mt-1">
                          Guidance from experienced professionals
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-primary-light p-2 rounded-full mt-1">
                        <span className="font-bold text-primary">✓</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-primary-800 text-sm md:text-base">
                          Corporate-backed live projects every semester
                        </h4>
                        <p className="text-primary-600 text-xs md:text-sm mt-1">
                          Work on real projects with real companies
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-primary-50 p-4 rounded-lg border-l-4 border-primary mt-6">
                  <p className="font-semibold text-primary-800 text-sm md:text-base">
                    👉 Students learn exactly what companies want RIGHT NOW.
                  </p>
                </div>
              </motion.div>
            )}

            {/* ---------------- TECH DRIVEN ---------------- */}
            {activeTab === "tech-driven" && (
              <motion.div
                key="tech-driven"
                variants={tabVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="bg-white p-6 md:p-8 rounded-xl shadow-lg space-y-6"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-primary-light p-3 rounded-lg">
                    <FaLaptopCode className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary">
                    India's Only Tech-Infused Business School Model
                  </h2>
                </div>

                <p className="text-base md:text-lg text-primary-700">
                  In tomorrow's leadership landscape, technology = power. SCALE
                  integrates:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  {/* AI */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-primary-800 mb-3 flex items-center gap-2 text-sm md:text-base">
                      <span className="bg-primary-light p-2 rounded text-primary">
                        <FaRobot className="w-4 h-4" />
                      </span>
                      Artificial Intelligence
                    </h4>
                    <p className="text-primary-600 text-xs md:text-sm">
                      AI-powered business solutions and decision making
                    </p>
                  </div>

                  {/* Data Science */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-primary-800 mb-3 flex items-center gap-2 text-sm md:text-base">
                      <span className="bg-primary-light p-2 rounded text-primary">
                        <FaChartBar className="w-4 h-4" />
                      </span>
                      Data Science
                    </h4>
                    <p className="text-primary-600 text-xs md:text-sm">
                      Data-driven insights and analytics
                    </p>
                  </div>

                  {/* Cloud & Cybersecurity */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-primary-800 mb-3 flex items-center gap-2 text-sm md:text-base">
                      <span className="bg-primary-light p-2 rounded text-primary flex items-center gap-1">
                        <FaCloud className="w-4 h-4" />
                        <FaShieldAlt className="w-4 h-4" />
                      </span>
                      Cloud & Cybersecurity
                    </h4>
                    <p className="text-primary-600 text-xs md:text-sm">
                      Secure cloud infrastructure and protection
                    </p>
                  </div>

                  {/* Digital Business Strategy */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-primary-800 mb-3 flex items-center gap-2 text-sm md:text-base">
                      <span className="bg-primary-light p-2 rounded text-primary">
                        <FaBullseye className="w-4 h-4" />
                      </span>
                      Digital Business Strategy
                    </h4>
                    <p className="text-primary-600 text-xs md:text-sm">
                      Digital transformation and online business models
                    </p>
                  </div>

                  {/* Automation Tools */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-primary-800 mb-3 flex items-center gap-2 text-sm md:text-base">
                      <span className="bg-primary-light p-2 rounded text-primary">
                        <FaCogs className="w-4 h-4" />
                      </span>
                      Automation Tools
                    </h4>
                    <p className="text-primary-600 text-xs md:text-sm">
                      Process automation and efficiency tools
                    </p>
                  </div>

                  {/* FinTech */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-primary-800 mb-3 flex items-center gap-2 text-sm md:text-base">
                      <span className="bg-primary-light p-2 rounded text-primary">
                        <FaCoins className="w-4 h-4" />
                      </span>
                      FinTech & Industry 4.0
                    </h4>
                    <p className="text-primary-600 text-xs md:text-sm">
                      Modern financial technology and smart manufacturing
                    </p>
                  </div>
                </div>

                <div className="bg-primary-50 p-4 rounded-lg border-l-4 border-primary mt-6">
                  <p className="font-semibold text-primary-800 text-sm md:text-base">
                    👉 Every graduate leaves SCALE-SSBM with dual strength:
                    business + technology.
                  </p>
                </div>
              </motion.div>
            )}

            {/* ---------------- GLOBAL EXPOSURE ---------------- */}
            {activeTab === "global-exposure" && (
              <motion.div
                key="global-exposure"
                variants={tabVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="bg-white p-6 md:p-8 rounded-xl shadow-lg space-y-6"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-primary-light p-3 rounded-lg">
                    <FaGlobe className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary">
                    Global Exposure From Day One
                  </h2>
                </div>

                <p className="text-base md:text-lg text-primary-700">
                  Sona Business School is built on global academic and industry
                  partnerships, offering:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    {/* International Faculty */}
                    <div className="flex items-start gap-3">
                      <div className="bg-primary-light p-2 rounded-full">
                        <FaGlobe className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary-800 text-sm md:text-base">
                          International faculty
                        </h4>
                        <p className="text-primary-600 text-xs md:text-sm">
                          Learn from global experts and professors
                        </p>
                      </div>
                    </div>

                    {/* Global Immersion */}
                    <div className="flex items-start gap-3">
                      <div className="bg-primary-light p-2 rounded-full">
                        <FaPlane className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary-800 text-sm md:text-base">
                          Global immersion programs
                        </h4>
                        <p className="text-primary-600 text-xs md:text-sm">
                          Study abroad opportunities and exchanges
                        </p>
                      </div>
                    </div>

                    {/* Cross-border Business Labs */}
                    <div className="flex items-start gap-3">
                      <div className="bg-primary-light p-2 rounded-full">
                        <FaBuilding className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary-800 text-sm md:text-base">
                          Cross-border business labs
                        </h4>
                        <p className="text-primary-600 text-xs md:text-sm">
                          International business simulations
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* Universities & Innovation Hubs */}
                    <div className="flex items-start gap-3">
                      <div className="bg-primary-light p-2 rounded-full">
                        <FaGraduationCap className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary-800 text-sm md:text-base">
                          Access to foreign universities and innovation hubs
                        </h4>
                        <p className="text-primary-600 text-xs md:text-sm">
                          Connect with global educational institutions
                        </p>
                      </div>
                    </div>

                    {/* Multinational Internship */}
                    <div className="flex items-start gap-3">
                      <div className="bg-primary-light p-2 rounded-full">
                        <FaBriefcase className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary-800 text-sm md:text-base">
                          Multinational internship pathways
                        </h4>
                        <p className="text-primary-600 text-xs md:text-sm">
                          Intern with global companies
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-primary-50 p-4 rounded-lg border-l-4 border-primary mt-6">
                  <p className="font-semibold text-primary-800 text-sm md:text-base">
                    👉 Students graduate with a global mindset and global
                    opportunities.
                  </p>
                </div>
              </motion.div>
            )}

            {/* ---------------- STARTUP INCUBATION ---------------- */}
            {activeTab === "startup-incubation" && (
              <motion.div
                key="startup-incubation"
                variants={tabVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="bg-white p-6 md:p-8 rounded-xl shadow-lg space-y-6"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-primary-light p-3 rounded-lg">
                    <FaRocket className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-primary">
                      A Startup Incubation Centre Inside the Campus
                    </h2>
                    <p className="text-primary-600 mt-2 text-sm md:text-base">
                      SCALE doesn't just prepare students for jobs—it prepares
                      them to create jobs.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {/* Dedicated Incubator */}
                  <div className="bg-primary-50 p-5 rounded-lg">
                    <h4 className="font-bold text-primary-800 mb-3 flex items-center gap-2 text-sm md:text-base">
                      <span className="bg-primary-light p-2 rounded text-primary">
                        <FaBuilding className="w-4 h-4" />
                      </span>
                      A dedicated Startup Incubator
                    </h4>
                    <p className="text-primary-600 text-xs md:text-sm">
                      State-of-the-art facilities for budding entrepreneurs
                    </p>
                  </div>

                  {/* Mentorship */}
                  <div className="bg-primary-50 p-5 rounded-lg">
                    <h4 className="font-bold text-primary-800 mb-3 flex items-center gap-2 text-sm md:text-base">
                      <span className="bg-primary-light p-2 rounded text-primary">
                        <FaUsers className="w-4 h-4" />
                      </span>
                      Mentorship from entrepreneurs & venture capitalists
                    </h4>
                    <p className="text-primary-600 text-xs md:text-sm">
                      Guidance from successful founders and investors
                    </p>
                  </div>

                  {/* Funding Opportunities */}
                  <div className="bg-primary-50 p-5 rounded-lg">
                    <h4 className="font-bold text-primary-800 mb-3 flex items-center gap-2 text-sm md:text-base">
                      <span className="bg-primary-light p-2 rounded text-primary">
                        <FaCoins className="w-4 h-4" />
                      </span>
                      Startup funding opportunities
                    </h4>
                    <p className="text-primary-600 text-xs md:text-sm">
                      Access to seed funding and investment networks
                    </p>
                  </div>

                  {/* Innovation Hackathons */}
                  <div className="bg-primary-50 p-5 rounded-lg">
                    <h4 className="font-bold text-primary-800 mb-3 flex items-center gap-2 text-sm md:text-base">
                      <span className="bg-primary-light p-2 rounded text-primary">
                        <FaLightbulb className="w-4 h-4" />
                      </span>
                      Innovation hackathons
                    </h4>
                    <p className="text-primary-600 text-xs md:text-sm">
                      Regular competitions to solve real-world problems
                    </p>
                  </div>

                  {/* Product Bootcamps */}
                  <div className="bg-primary-50 p-5 rounded-lg md:col-span-2">
                    <h4 className="font-bold text-primary-800 mb-3 flex items-center gap-2 text-sm md:text-base">
                      <span className="bg-primary-light p-2 rounded text-primary">
                        <FaTools className="w-4 h-4" />
                      </span>
                      Product-building bootcamps
                    </h4>
                    <p className="text-primary-600 text-xs md:text-sm">
                      Hands-on training to build and launch products
                    </p>
                  </div>
                </div>

                <div className="bg-primary-50 p-4 rounded-lg border-l-4 border-primary mt-6">
                  <p className="font-semibold text-primary-800 text-sm md:text-base">
                    👉 SCALE is the perfect choice for future founders,
                    innovators, and problem-solvers.
                  </p>
                </div>
              </motion.div>
            )}

            {/* ---------------- RESIDENTIAL LEARNING ---------------- */}
            {activeTab === "residential-learning" && (
              <motion.div
                key="residential-learning"
                variants={tabVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="bg-white p-6 md:p-8 rounded-xl shadow-lg space-y-6"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-primary-light p-3 rounded-lg">
                    <FiUsers className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-primary">
                      A Fully Residential, High-Performance Learning Environment
                    </h2>
                    <p className="text-primary-600 mt-2 text-sm md:text-base">
                      Two years at SCALE = A complete leadership immersion
                      experience.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* LEFT SIDE */}
                  <div className="space-y-4">
                    {/* 24/7 Learning */}
                    <div className="flex items-center gap-3">
                      <div className="bg-primary-light p-2 rounded-full">
                        <FaClock className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary-800 text-sm md:text-base">
                          24/7 learning culture
                        </h4>
                        <p className="text-primary-600 text-xs md:text-sm">
                          Continuous learning and development
                        </p>
                      </div>
                    </div>

                    {/* Peer Collaboration */}
                    <div className="flex items-center gap-3">
                      <div className="bg-primary-light p-2 rounded-full">
                        <FaHandshake className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary-800 text-sm md:text-base">
                          Peer collaboration
                        </h4>
                        <p className="text-primary-600 text-xs md:text-sm">
                          Learn from and with fellow students
                        </p>
                      </div>
                    </div>

                    {/* Leadership Labs */}
                    <div className="flex items-center gap-3">
                      <div className="bg-primary-light p-2 rounded-full">
                        <FaBullseye className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary-800 text-sm md:text-base">
                          Leadership labs
                        </h4>
                        <p className="text-primary-600 text-xs md:text-sm">
                          Practical leadership training sessions
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT SIDE */}
                  <div className="space-y-4">
                    {/* Corporate-style Campus */}
                    <div className="flex items-center gap-3">
                      <div className="bg-primary-light p-2 rounded-full">
                        <FaUniversity className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary-800 text-sm md:text-base">
                          Corporate-style campus life
                        </h4>
                        <p className="text-primary-600 text-xs md:text-sm">
                          Professional environment preparation
                        </p>
                      </div>
                    </div>

                    {/* Workshops & Events */}
                    <div className="flex items-center gap-3">
                      <div className="bg-primary-light p-2 rounded-full">
                        <FaFlagCheckered className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary-800 text-sm md:text-base">
                          Workshops, clubs, competitions, simulations
                        </h4>
                        <p className="text-primary-600 text-xs md:text-sm">
                          Holistic development activities
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-primary-50 p-4 rounded-lg border-l-4 border-primary mt-6">
                  <p className="font-semibold text-primary-800 text-sm md:text-base">
                    👉 Students experience the real world of leadership, not
                    just a classroom.
                  </p>
                </div>
              </motion.div>
            )}

            {/* ---------------- SONA LEGACY ---------------- */}
            {activeTab === "sona-legacy" && (
              <motion.div
                key="sona-legacy"
                variants={tabVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="bg-white p-6 md:p-8 rounded-xl shadow-lg space-y-6"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-primary-light p-3 rounded-lg">
                    <FaStar className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary">
                    Powered by Sona Group's 100-Year Legacy
                  </h2>
                </div>

                <p className="text-base md:text-lg text-primary-700">
                  Backed by one of India's most respected names in:
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {/* Technology */}
                  <div className="bg-primary-50 p-4 rounded-lg text-center">
                    <FaMicrochip className="text-3xl mb-2 text-primary mx-auto" />
                    <h4 className="font-bold text-primary-800 text-sm md:text-base">
                      Technology
                    </h4>
                  </div>

                  {/* Innovation */}
                  <div className="bg-primary-50 p-4 rounded-lg text-center">
                    <FaLightbulb className="text-3xl mb-2 text-primary mx-auto" />
                    <h4 className="font-bold text-primary-800 text-sm md:text-base">
                      Innovation
                    </h4>
                  </div>

                  {/* Manufacturing */}
                  <div className="bg-primary-50 p-4 rounded-lg text-center">
                    <FaIndustry className="text-3xl mb-2 text-primary mx-auto" />
                    <h4 className="font-bold text-primary-800 text-sm md:text-base">
                      Manufacturing
                    </h4>
                  </div>

                  {/* Education */}
                  <div className="bg-primary-50 p-4 rounded-lg text-center">
                    <FaGraduationCap className="text-3xl mb-2 text-primary mx-auto" />
                    <h4 className="font-bold text-primary-800 text-sm md:text-base">
                      Education
                    </h4>
                  </div>

                  {/* Research */}
                  <div className="bg-primary-50 p-4 rounded-lg text-center">
                    <FaFlask className="text-3xl mb-2 text-primary mx-auto" />
                    <h4 className="font-bold text-primary-800 text-sm md:text-base">
                      Research
                    </h4>
                  </div>

                  {/* Digital Transformation */}
                  <div className="bg-primary-50 p-4 rounded-lg text-center">
                    <FaRocket className="text-3xl mb-2 text-primary mx-auto" />
                    <h4 className="font-bold text-primary-800 text-sm md:text-base">
                      Digital Transformation
                    </h4>
                  </div>
                </div>

                <div className="bg-primary-50 p-4 rounded-lg border-l-4 border-primary mt-6">
                  <p className="font-semibold text-primary-800 text-sm md:text-base">
                    👉 SCALE stands on a century-old foundation of credibility,
                    quality, and trust.
                  </p>
                </div>
              </motion.div>
            )}

            {/* ---------------- FUTURE CAREERS ---------------- */}
            {activeTab === "future-proof-careers" && (
              <motion.div
                key="future-proof-careers"
                variants={tabVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="bg-white p-6 md:p-8 rounded-xl shadow-lg space-y-6"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-primary-light p-3 rounded-lg">
                    <FaChartLine className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-primary">
                      Future-Proof Career Opportunities
                    </h2>
                    <p className="text-primary-600 mt-2 text-sm md:text-base">
                      Because of the tech-enabled curriculum + global exposure +
                      incubation + industry integration
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    "Consulting",
                    "Management",
                    "Technology roles",
                    "Business analysis",
                    "Digital transformation",
                    "Product roles",
                    "Finance",
                    "Marketing",
                    "HR",
                    "Entrepreneurship",
                  ].map((role, index) => (
                    <div
                      key={index}
                      className="bg-primary-50 p-4 rounded-lg hover:bg-primary-light transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <div className="bg-primary p-1 rounded">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <h4 className="font-bold text-primary-800 text-sm md:text-base">
                          {role}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-primary-50 p-4 rounded-lg border-l-4 border-primary mt-6">
                  <p className="font-semibold text-primary-800 text-sm md:text-base">
                    👉 SCALE-SSBM graduates are multi-skilled, employable,
                    adaptable, and future-ready.
                  </p>
                </div>
              </motion.div>
            )}

            {/* ---------------- LEADERSHIP DEVELOPMENT ---------------- */}
            {activeTab === "leadership-development" && (
              <motion.div
                key="leadership-development"
                variants={tabVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="bg-white p-6 md:p-8 rounded-xl shadow-lg space-y-6"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-primary-light p-3 rounded-lg">
                    <MdOutlineAutoFixHigh className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary">
                    Leadership Development at the Core
                  </h2>
                </div>

                <p className="text-base md:text-lg text-primary-700">
                  SCALE-SSBM focuses deeply on developing essential leadership
                  qualities:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    {[
                      "Critical thinking",
                      "Problem solving",
                      "Communication",
                      "Decision-making",
                      "Emotional intelligence",
                    ].map((skill, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="bg-primary-light p-2 rounded-full">
                          <span className="font-bold text-primary">★</span>
                        </div>
                        <span className="font-medium text-primary-800 text-sm md:text-base">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    {[
                      "Teamwork",
                      "Ethics & values",
                      "Strategic thinking",
                      "Adaptability",
                      "Innovation mindset",
                    ].map((skill, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="bg-primary-light p-2 rounded-full">
                          <span className="font-bold text-primary">★</span>
                        </div>
                        <span className="font-medium text-primary-800 text-sm md:text-base">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-primary-50 p-4 rounded-lg border-l-4 border-primary mt-6">
                  <p className="font-semibold text-primary-800 text-sm md:text-base">
                    👉 Students evolve into purpose-driven, confident, and
                    ethical leaders.
                  </p>
                </div>
              </motion.div>
            )}

            {/* ---------------- FUTURE READY SCHOOL ---------------- */}
            {activeTab === "future-ready-school" && (
              <motion.div
                key="future-ready-school"
                variants={tabVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="bg-white p-6 md:p-8 rounded-xl shadow-lg space-y-6"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-primary-light p-3 rounded-lg">
                    <FaLightbulb className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary">
                    A School Designed for Tomorrow's World
                  </h2>
                </div>

                <p className="text-base md:text-lg text-primary-700">
                  SSBM prepares students for the future with a forward-looking
                  approach:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left Column */}
                  <div className="space-y-4">
                    <div className="bg-primary-50 p-4 rounded-lg">
                      <h4 className="font-bold text-primary-800 mb-2 flex items-center gap-2 text-sm md:text-base">
                        <FaRobot className="text-primary text-lg" /> AI-driven
                        workplaces
                      </h4>
                      <p className="text-primary-600 text-xs md:text-sm">
                        Master AI tools and work alongside intelligent systems
                      </p>
                    </div>

                    <div className="bg-primary-50 p-4 rounded-lg">
                      <h4 className="font-bold text-primary-800 mb-2 flex items-center gap-2 text-sm md:text-base">
                        <FaGlobe className="text-primary text-lg" /> Digital
                        global ecosystems
                      </h4>
                      <p className="text-primary-600 text-xs md:text-sm">
                        Navigate interconnected digital business environments
                      </p>
                    </div>

                    <div className="bg-primary-50 p-4 rounded-lg">
                      <h4 className="font-bold text-primary-800 mb-2 flex items-center gap-2 text-sm md:text-base">
                        <FaRocket className="text-primary text-lg" />{" "}
                        Innovation-led industries
                      </h4>
                      <p className="text-primary-600 text-xs md:text-sm">
                        Lead in sectors driven by continuous innovation
                      </p>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-4">
                    <div className="bg-primary-50 p-4 rounded-lg">
                      <h4 className="font-bold text-primary-800 mb-2 flex items-center gap-2 text-sm md:text-base">
                        <FaBriefcase className="text-primary text-lg" />{" "}
                        Entrepreneurial careers
                      </h4>
                      <p className="text-primary-600 text-xs md:text-sm">
                        Build your own ventures and startups
                      </p>
                    </div>

                    <div className="bg-primary-50 p-4 rounded-lg">
                      <h4 className="font-bold text-primary-800 mb-2 flex items-center gap-2 text-sm md:text-base">
                        <FaSync className="text-primary text-lg" /> New business
                        models
                      </h4>
                      <p className="text-primary-600 text-xs md:text-sm">
                        Create and adapt to emerging business paradigms
                      </p>
                    </div>

                    <div className="bg-primary-50 p-4 rounded-lg">
                      <h4 className="font-bold text-primary-800 mb-2 flex items-center gap-2 text-sm md:text-base">
                        <FaMagic className="text-primary text-lg" /> Roles that
                        don't even exist yet
                      </h4>
                      <p className="text-primary-600 text-xs md:text-sm">
                        Prepare for future job titles and industries
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary-50 p-4 rounded-lg border-l-4 border-primary mt-6">
                  <p className="font-semibold text-primary-800 text-sm md:text-base">
                    👉 Students leave SCALE ready to lead the unknown and shape
                    the new.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}

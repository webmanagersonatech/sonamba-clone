"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { newsData } from "../data/newsdata";
import { eventsData } from "../data/eventdata";

interface BaseItem {
  title: string;
  date: string;
  description: string;
  image: string;
  slug: string;
  showFront?: boolean;
}

type EventItem = BaseItem;
type NewsItem = BaseItem;

const tabTypes = ["News", "Events", "Upcoming"] as const;

export default function NewsEvents() {
  const [activeTab, setActiveTab] = useState<(typeof tabTypes)[number]>("News");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const scrollPositionRef = useRef(0);

  const today = new Date();

  // -----------------------------
  // TAB SWITCH ANIMATION
  // -----------------------------
  const handleTabChange = (tab: (typeof tabTypes)[number]) => {
    if (isTransitioning || tab === activeTab) return;

    setIsTransitioning(true);
    setActiveTab(tab);

    setTimeout(() => setIsTransitioning(false), 300);
  };

  // -----------------------------
  // FILTER ITEMS
  // -----------------------------
  const items = (() => {
    if (activeTab === "News") return newsData.filter((n) => n.showFront);

    if (activeTab === "Upcoming") {
      return eventsData.filter((e) => {
        const d = new Date(e.date);
        return e.showFront && d > today;
      });
    }

    return eventsData.filter((e) => {
      const d = new Date(e.date);
      return e.showFront && d <= today;
    });
  })();

  const uniqueItems = items.filter(
    (item, index, arr) => index === arr.findIndex((t) => t.slug === item.slug)
  );

  // -----------------------------
  // AUTO SCROLL (FINAL WORKING)
  // -----------------------------
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // stop previous animation
    if (animationRef.current) cancelAnimationFrame(animationRef.current);

    scrollPositionRef.current = 0;
    container.scrollTop = 0;

    // if few items → allow manual scroll
    if (uniqueItems.length <= 3) {
      container.style.overflowY = "auto";
      return;
    }

    container.style.overflowY = "hidden";

    const speed = 0.4; // smooth auto scroll

    const loop = () => {
      const maxScroll = container.scrollHeight - container.clientHeight;

      scrollPositionRef.current += speed;

      if (scrollPositionRef.current >= maxScroll) {
        scrollPositionRef.current = 0; // smooth restart
      }

      container.scrollTop = scrollPositionRef.current;

      animationRef.current = requestAnimationFrame(loop);
    };

    animationRef.current = requestAnimationFrame(loop);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [activeTab, uniqueItems.length]);

  // -----------------------------
  // CARD VIEW
  // -----------------------------
  const renderCard = (item: NewsItem | EventItem, i: number) => {
    const d = new Date(item.date);
    const href = newsData.some((n) => n.slug === item.slug)
      ? `/news/${item.slug}`
      : `/events/${item.slug}`;

    return (
      <Link href={href as any} key={i}>
        <div className="glass-card flex gap-3 p-3 w-full min-h-[120px] rounded-xl shadow-lg mb-4">
          <img
            src={item.image}
            alt={item.title}
            className="w-28 h-20 rounded object-cover"
          />
          <div className="flex flex-col flex-1">
            <div className="text-xs text-gray-200 font-semibold">
              {d.getDate()} {d.toLocaleString("en-US", { month: "short" })},{" "}
              {d.getFullYear()}
            </div>

            <h3 className="font-bold text-white text-sm line-clamp-2">
              {item.title}
            </h3>

            <p className="text-gray-300 text-xs line-clamp-2">
              {item.description}
            </p>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <section className="relative py-16 text-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT PANEL */}
          <div className="glass-panel p-8 rounded-t-2xl space-y-6">
            <h2 className="text-3xl font-bold">
              <span style={{ color: "#B98A5A" }}>About </span>
              <span style={{ color: "#ffffff" }}>Scale</span>
            </h2>

            <p className="text-white/90 leading-relaxed text-justify">
              Welcome to SCALE - Sona School of Business & Management (SSBM), a
              bold new leap in business education where technology, industry
              wisdom, and entrepreneurial spirit merge to create leaders who
              aren’t just ready for the future—they are built to define it.
            </p>

            <p className="text-white/90 leading-relaxed text-justify">
              Located in the heart of Bangalore’s Bidadi industrial hub, SCALE
              offers unparalleled access to industry interactions,
              state-of-the-art infrastructure, and cutting-edge digital learning
              tools. With a GCC-driven curriculum and focus on emerging
              technologies, our Post Graduate Diploma in Management is designed
              to make you not just job-ready, but future-ready in an
              ever-evolving global marketplace.
            </p>

            {/* WHY JOIN SECTION */}
            <div className="space-y-2">
              <h3
                className="text-xl font-semibold"
                style={{ color: "#B98A5A" }}
              >
                Why Students Should Join Sona School of Business & Management
                School – SCALE
              </h3>

              <p className="text-white/80 leading-relaxed">
                SCALE empowers students with industry-ready skills, hands-on
                learning, and access to global corporate ecosystems—shaping them
                into confident, future-ready leaders.
              </p>
            </div>

            {/* CTA BUTTON */}
            <div className="pt-2">
              <motion.a
                href="/scale"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-6 py-3 rounded-full text-white font-medium backdrop-blur-md border shadow-lg transition"
                style={{
                  backgroundColor: "rgba(180,180,180,0.25)",
                  borderColor: "rgba(180,180,180,0.5)",
                }}
              >
                Know More →
              </motion.a>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl lg:text-4xl font-bold mb-8"
              style={{ color: "#B98A5A" }}
            >
              News & Events
            </motion.h1>

            {/* TABS */}
            <div className="flex justify-center gap-4 mb-8 flex-wrap">
              {tabTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => handleTabChange(type)}
                  disabled={isTransitioning}
                  className={`relative px-6 py-1 font-semibold text-sm rounded-md glass-btn transition-all ${
                    activeTab === type ? "text-black" : "text-white"
                  }`}
                >
                  {activeTab === type && (
                    <motion.div
                      layoutId="tab"
                      className="absolute inset-0 rounded-md"
                      style={{
                        background:
                          "linear-gradient(135deg, #E5E5E5, #C9C9C9, #A3A3A3)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}

                  <span className="relative z-10">{type}</span>
                </button>
              ))}
            </div>

            {/* AUTO SCROLL LIST */}
            <div
              ref={scrollContainerRef}
              style={{
                height: "430px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <div className="space-y-4">
                {uniqueItems.map((item, i) => renderCard(item, i))}
              </div>
            </div>

            {/* VIEW ALL */}
            <div className="flex justify-center mt-6">
              <motion.a
                href={
                  activeTab === "News"
                    ? "/news"
                    : activeTab === "Events"
                    ? "/events?tab=events"
                    : "/events?tab=upcomingevents"
                }
                whileHover={{ scale: 1.05 }}
                className="px-6 py-2 rounded-full text-white backdrop-blur-md shadow-lg"
                style={{
                  backgroundColor: "rgba(180,180,180,0.25)",
                  border: "1px solid rgba(180,180,180,0.5)",
                }}
              >
                View All
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .glass-btn {
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(10px);
        }
        .glass-card {
          background: rgba(245, 245, 245, 0.25);
          border: 1px solid rgba(230, 230, 230, 0.6);
        }
        .glass-panel {
          background: rgba(255, 255, 255, 0.2); /* Increased opacity */
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(255, 255, 255, 0.35);
          box-shadow: 0 4px 35px rgba(0, 0, 0, 0.45);
          border-radius: 14px;
        }
      `}</style>
    </section>
  );
}

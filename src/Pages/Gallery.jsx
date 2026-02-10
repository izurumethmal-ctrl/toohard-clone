import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// ================= VIDEO IMPORTS =================
import heroVideo from "../assets/video1.mp4";
import fashionVideo from "../assets/video2.mp4";
import runwayVideo from "../assets/video3.mp4";
import high from "../assets/video4.mp4";


// ================= GALLERY DATA =================
const galleryVideos = [
  { src: heroVideo, title: "Toohard T", featured: true },
  { src: fashionVideo, title: "Toohard Hoodies", featured: false },
  { src: runwayVideo, title: "Runway Highlights", featured: false },
   { src: high, title: "Hightlights", featured: false },
  
];

// ================= UPDATES DATA =================
const updates = [
  {
    title: "Spring Collection Launch",
    date: "Feb 1, 2026",
    description:
      "Discover our new luxury spring collection with exclusive pieces.",
  },
  {
    title: "Limited Edition Accessories",
    date: "Jan 25, 2026",
    description:
      "Handcrafted accessories now available for a limited time only.",
  },
  {
    title: "Upcoming Fashion Show",
    date: "Mar 10, 2026",
    description:
      "Join us for our virtual fashion show featuring futuristic designs.",
  },
];

// ================= COMPONENT =================
export default function LuxuryPage() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll({ container: containerRef });

  // Floating orbs animation
  const orb1Y = useTransform(scrollY, [0, 1200], [0, -200]);
  const orb2Y = useTransform(scrollY, [0, 1200], [0, 180]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      {/* ================= BACKGROUND ORBS ================= */}
      <motion.div
        style={{ y: orb1Y }}
        animate={{ rotate: 360 }}
        transition={{ duration: 300, repeat: Infinity, ease: "linear" }}
        className="absolute -top-64 -left-64 w-[600px] h-[600px] bg-white/10 blur-[250px] rounded-full"
      />
      <motion.div
        style={{ y: orb2Y }}
        animate={{ rotate: -360 }}
        transition={{ duration: 360, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/5 blur-[220px] rounded-full"
      />

      {/* ================= VIDEO GALLERY ================= */}
      <section className="relative z-10 py-24 px-4 sm:px-6 md:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center text-4xl sm:text-5xl md:text-6xl font-bold mb-20"
        >
          Our Exclusive Gallery
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {galleryVideos.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.9,
                ease: "easeOut",
              }}
              className={`relative overflow-hidden rounded-3xl
                border border-white/10
                shadow-[0_0_80px_rgba(255,255,255,0.15)]
                transition-all duration-700
                aspect-[4/5] sm:aspect-[16/9]
                ${item.featured ? "md:col-span-2" : ""}`}
            >
              {/* Video */}
              <video
                src={item.src}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover
                transition-transform duration-700 hover:scale-110"
              />

              {/* Overlay with title */}
              <div
                className="absolute inset-0 bg-gradient-to-t
                  from-black/90 via-black/40 to-transparent
                  opacity-0 hover:opacity-100
                  transition-opacity flex items-end p-5 sm:p-6"
              >
                <p className="text-lg sm:text-xl font-semibold tracking-wide text-white">
                  {item.title}
                </p>
              </div>

              {/* Gold glow border */}
              <div className="absolute inset-0 pointer-events-none rounded-3xl border-2 border-gold/40 shadow-[0_0_20px_rgba(255,215,0,0.2)]"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= UPDATES ================= */}
      <section className="relative z-10 py-24 px-4 sm:px-6 md:px-20 bg-black/85">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center text-4xl sm:text-5xl md:text-6xl font-bold mb-20"
        >
          Latest Updates
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {updates.map((update, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.2,
                duration: 0.9,
                ease: "easeOut",
              }}
              className="bg-gray-900/90 rounded-3xl p-6
                border border-white/10 cursor-pointer
                shadow-[0_0_60px_rgba(255,255,255,0.1)]
                hover:scale-105
                hover:shadow-[0_0_90px_rgba(255,255,255,0.2)]
                transition-all duration-500"
            >
              <p className="text-sm text-gray-400 mb-2">{update.date}</p>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                {update.title}
              </h3>
              <p className="text-gray-300">{update.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

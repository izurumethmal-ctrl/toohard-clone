import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

import a1 from "../assets/a1.JPG";
import a2 from "../assets/a2.JPG";
import a3 from "../assets/a3.JPG";
import a4 from "../assets/a4.JPG";

import su from '../assets/su.JPG'
import sha from '../assets/sha.JPG'

const AboutUs = () => {
  const ref = useRef(null);
  const [activeImage, setActiveImage] = useState(null);
  const [counters, setCounters] = useState({
    eco: 0,
    recycled: 0,
    chemicals: 0,
  });

  /* Scroll Parallax */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  /* Animated Counters */
  useEffect(() => {
    let eco = 0;
    let recycled = 0;

    const interval = setInterval(() => {
      eco = Math.min(eco + 2, 100);
      recycled = Math.min(recycled + 1, 75);
      setCounters({ eco, recycled, chemicals: 0 });

      if (eco === 100 && recycled === 75) clearInterval(interval);
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ================= HERO ================= */}
      <section
        ref={ref}
        className="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden"
      >
        <motion.div style={{ y: bgY }} className="absolute inset-0">
          <div
            className="absolute -top-48 left-1/2 -translate-x-1/2
            w-[140%] sm:w-[120%] h-[420px] sm:h-[500px]
            bg-gradient-to-r from-[#2a2a2a] via-[#111] to-[#2a2a2a]
            blur-[120px] opacity-60"
          />
        </motion.div>

        <motion.div
          style={{ y: textY }}
          className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6
          py-28 sm:py-32 md:py-40 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-3xl sm:text-5xl md:text-7xl font-light mb-6"
          >
            Mission <span className="font-semibold">Statement</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="max-w-3xl mx-auto text-gray-400
            text-sm sm:text-base md:text-lg
            leading-relaxed mb-16 sm:mb-20"
          >
            At TOOHARDSTUDIOS, our mission is to create streetwear that stands up
            to real life—not trends, timelines, or hype.
            <br /><br />
            We focus on heavyweight materials, cut-and-sew construction, and
            limited production so every piece carries real weight.
            <br /><br />
            Built for those who move differently. Who value substance over noise.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-14 items-center">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.6 }}
              onClick={() => setActiveImage(a1)}
              className="cursor-pointer max-w-sm sm:max-w-md mx-auto"
            >
              <img
                src={a1}
                alt="Product"
                className="w-full rounded-3xl object-cover
                shadow-[0_40px_120px_rgba(0,0,0,0.6)]"
              />
            </motion.div>

            <div className="text-center md:text-left">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-light mb-6">
                Built Too Hard to Break.
              </h3>

              <p className="text-gray-400 mb-8 sm:mb-10">
                No fast fashion.<br />
                No compromises.<br />
                Just streetwear built to last.
              </p>

              <div className="flex gap-4 justify-center md:justify-start">
                {[a3, a4].map((img, i) => (
                  <motion.img
                    key={i}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                    src={img}
                    onClick={() => setActiveImage(img)}
                    className="w-20 h-20 sm:w-24 sm:h-24
                    object-cover rounded-xl
                    border border-white/10 cursor-pointer"
                    alt="Preview"
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= STATS ================= */}
      <section className="bg-[#0a0a0a] text-white py-20 sm:py-24 px-5">
        <div className="max-w-6xl mx-auto grid gap-8
        sm:grid-cols-2 md:grid-cols-3">
          {[
            { value: counters.eco, label: "Eco Materials" },
            { value: counters.recycled, label: "Recycled Fabrics" },
            { value: counters.chemicals, label: "Harmful Chemicals" },
          ].map((item, i) => (
            <div
              key={i}
              className="border border-white/10 rounded-3xl
              p-8 sm:p-10 text-center bg-white/[0.02]"
            >
              <h3 className="text-4xl sm:text-5xl font-light mb-3">
                {item.value}%
              </h3>
              <p className="text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section className="bg-black text-white py-28 sm:py-36 px-5">
        <div className="max-w-6xl mx-auto text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">
            The Atelier
          </h2>
          <p className="text-gray-400">
            Designers shaping conscious luxury.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-16 mb-20">
          {[ 
            { img: su, name: "Suvidu Fernando (Ferna)", role: "Founder" },
            { img: sha, name: "Shana", role: "Co-Founder" },
          ].map((m, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden rounded-3xl
              w-full max-w-[320px] sm:max-w-[360px] md:w-[380px]
              mx-auto"
            >
              <img
                src={m.img}
                alt={m.name}
                className="w-full h-[360px] sm:h-[420px]
                object-cover grayscale
                hover:grayscale-0 transition duration-700"
              />
              <div className="mt-6 text-center">
                <h3 className="text-lg sm:text-xl font-light">{m.name}</h3>
                <p className="text-gray-500 text-sm">{m.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brand Statement */}
        <p
          className="max-w-4xl mx-auto text-gray-400
          text-sm sm:text-base leading-relaxed text-center"
        >
          TOOHARDSTUDIOS wasn’t built off privilege, trends, or shortcuts.
          It started with pressure—real life, real struggle, and no room for excuses.
          <br /><br />
          The founder created this brand out of necessity, not opportunity.
          A response to weak materials, fake hype, and brands that talk street
          but never lived it.
          <br /><br />
          Every decision—fabric weight, fit, construction, limited runs—comes
          from experience. From knowing what lasts when things get heavy.
          <br /><br />
          This isn’t a face brand. It’s a mindset.
          <br />
          Built for people who don’t quit. Built by someone who didn’t.
        </p>
      </section>

      {/* ================= FULLSCREEN IMAGE ================= */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            onClick={() => setActiveImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95
            flex items-center justify-center px-4"
          >
            <motion.img
              src={activeImage}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="max-h-[80vh] sm:max-h-[85vh]
              max-w-[95vw] rounded-3xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AboutUs;

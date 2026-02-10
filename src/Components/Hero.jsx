// src/components/Hero.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Assets
import bgVideo from "../assets/hero.mp4";
import aboutImg from "../assets/ab.jpg";

// Gallery images
import g1 from "../assets/g1.jpg";
import g2 from "../assets/g2.jpg";
import g3 from "../assets/g3.jpg";
import g4 from "../assets/g7.jpg";



export default function Hero() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen bg-black text-white overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={bgVideo}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/75" />

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center px-6 sm:px-10">
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.6 }}
              className="text-[11px] uppercase tracking-[0.35em] text-white/50"
            >
              Toohardstudios
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8, ease: "easeOut", delay: 0.2 }}
              className="mt-6 text-3xl sm:text-4xl md:text-5xl font-light leading-tight"
            >
              Brand Under Construction
              <br />
              <span className="text-white/70">Designed to endure</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8,
              }}
              className="mt-6 text-[11px] uppercase tracking-[0.4em] text-white/60"
            >
              Move · Endure · Dominate
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.4, delay: 1 }}
              className="mt-10 max-w-md text-sm sm:text-base text-white/45 leading-relaxed"
            >
              A global streetwear label shaped by movement, resistance,
              and controlled aggression.
            </motion.p>

            <div className="mt-14">
              <Link
                to="/gallery"
                className="inline-block text-[11px] uppercase tracking-[0.35em] text-white/70 hover:text-white transition"
              >
                View Collection →
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, delay: 1.4 }}
          className="absolute bottom-6 left-6 z-10 text-[10px] uppercase tracking-[0.35em] text-white/40"
        >
          Too hard. Still moving.
        </motion.div>
      </section>

  {/* ================= MINI GALLERY ================= */}
<div className="bg-black py-24">
  <div className="max-w-6xl mx-auto px-6">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {[g1, g2, g3, g4].map((img, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.1 }}
          className="overflow-hidden rounded-md"
        >
          <motion.img
            src={img}
            alt="Collection"
            initial={{
              boxShadow: "0 0 0 rgba(220,38,38,0)",
              filter: "grayscale(100%)",
            }}
            whileHover={{
              scale: 1.06,
              boxShadow: "0 0 40px rgba(220,38,38,0.45)",
              filter: "grayscale(0%)",
            }}
            whileTap={{
              scale: 1.08,
              boxShadow: "0 0 65px rgba(220,38,38,0.7)",
              filter: "grayscale(0%)",
            }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="w-full h-full object-cover rounded-sm border border-red-900/20"
          />
        </motion.div>
      ))}
    </div>

    <div className="mt-16 text-center">
      <Link
        to="/contact"
        className="inline-block text-[11px] uppercase tracking-[0.35em] text-white/60 hover:text-red-500 transition"
      >
        Contact Us & Whatsapp Order Now →
      </Link>
    </div>
  </div>
</div>

     


      {/* ================= ABOUT ================= */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4 }}
            className="overflow-hidden"
          >
            <img
              src={aboutImg}
              alt="Toohardstudios"
              className="w-full h-full object-cover grayscale"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light">
              About
            </h2>

            <p className="text-white/50 text-sm sm:text-base leading-relaxed">
              Toohardstudios is shaped by pressure, movement, and resilience.
              Designed for individuals who continue forward when conditions
              turn hostile.
            </p>

            <p className="text-white/50 text-sm sm:text-base leading-relaxed">
              Presence over excess. Discipline over comfort.
            </p>

            <span className="inline-block text-[10px] uppercase tracking-[0.35em] text-white/40">
              Too hard · Still move
            </span>
          </motion.div>
        </div>
      </section>

      {/* ================= MANIFESTO ================= */}
      <section className="py-28 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-8 text-[11px] uppercase tracking-[0.35em] text-white/40"
          >
            Manifesto
          </motion.p>

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4 }}
            className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight"
          >
            Designed under pressure.
            <br />
            <span className="text-white/60">Built for motion.</span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="h-px bg-white/30 mx-auto my-12"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-white/45 text-sm sm:text-base leading-relaxed"
          >
            This is not seasonal fashion.
            It is a response to resistance — engineered
            for those who do not stop.
          </motion.p>
        </div>
      </section>
    </>
  );
}

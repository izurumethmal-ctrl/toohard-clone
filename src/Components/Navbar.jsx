import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact" },
  ];

  // Subtle parallax tilt (desktop only)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [0, 1], [2, -2]);
  const rotateY = useTransform(mouseX, [0, 1], [-2, 2]);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <motion.nav
        style={{ rotateX, rotateY }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          mouseX.set((e.clientX - rect.left) / rect.width);
          mouseY.set((e.clientY - rect.top) / rect.height);
        }}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="
          fixed top-4 left-1/2 -translate-x-1/2 z-50
          w-[92%] max-w-6xl
          px-4 py-2 sm:px-6 sm:py-3
          bg-black/40 backdrop-blur-xl
          border border-white/10 rounded-full
          flex items-center justify-between
        "
      >
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <motion.img
            src={logo}
            alt="Toohard Studio"
            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full object-cover border border-white/20"
            whileHover={{ scale: 1.1 }}
          />

          <motion.span
            className="
              font-bold tracking-wide
              text-sm sm:text-lg
              text-transparent bg-clip-text
            "
            style={{
              backgroundImage:
                "linear-gradient(90deg, #ffffff, #c9a24d, #ffffff)",
              backgroundSize: "200% 100%",
            }}
            animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          >
            TOOHARDSTUDIO
          </motion.span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex gap-8">
          {links.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className="relative text-sm uppercase tracking-widest text-gray-300 hover:text-white transition"
              >
                {item.name}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-white transition-all duration-300 ${
                    active ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="
              fixed top-24 left-1/2 -translate-x-1/2 z-40
              w-[90%] max-w-sm
              bg-black/90 backdrop-blur-xl
              rounded-xl border border-white/10
              py-6 flex flex-col gap-5 text-center
            "
          >
            {links.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm uppercase tracking-widest transition ${
                    active
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

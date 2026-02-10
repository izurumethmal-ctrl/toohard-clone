import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

import bgVideo from "../assets/hero.mp4";

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // ❌ REMOVE THIS
  // useEffect(() => {
  //   emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  // }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setStatus("");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // ✅ REQUIRED
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };



  return (
    <section className="relative min-h-screen text-white overflow-hidden">
      {/* ================= BACKGROUND VIDEO ================= */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={bgVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10">
        {/* ================= HERO ================= */}
        <div className="min-h-[50vh] flex flex-col items-center justify-center px-4 md:px-20 py-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
          >
            Get in Touch
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.9 }}
            className="text-gray-300 max-w-2xl text-base sm:text-lg"
          >
            Have questions, collaborations, or inquiries? Reach out and we’ll
            respond promptly.
          </motion.p>
        </div>

        {/* ================= FORM ================= */}
        <div className="px-4 md:px-20 mb-16">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="max-w-3xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-12 shadow-[0_0_60px_rgba(255,255,255,0.1)]"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 placeholder-gray-400 focus:ring-2 focus:ring-white/50 outline-none"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 placeholder-gray-400 focus:ring-2 focus:ring-white/50 outline-none"
              />
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Your Message"
              required
              className="w-full mt-6 px-5 py-4 rounded-xl bg-white/10 border border-white/20 placeholder-gray-400 focus:ring-2 focus:ring-white/50 outline-none resize-none"
            />

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={!loading ? { scale: 1.05 } : {}}
              whileTap={!loading ? { scale: 0.95 } : {}}
              className="mt-6 px-10 py-4 bg-white text-black font-bold rounded-full shadow-[0_0_40px_rgba(255,255,255,0.5)] disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>

            {status === "success" && (
              <p className="mt-4 text-green-400 font-semibold">
                Message sent successfully ✅
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 text-red-500 font-semibold">
                Failed to send message. Please try again.
              </p>
            )}
          </motion.form>
        </div>

        {/* ================= INFO ================= */}
        <div className="max-w-5xl mx-auto px-4 md:px-20 mb-16 grid sm:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-3">Our Base</h3>
            <p className="text-gray-300">salerno, Italy</p>
            <p className="text-gray-300 mt-2">toohardstudios@gmail.com</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3">Follow Us</h3>
            <div className="flex gap-4 text-2xl text-gray-300">
              <a href="https://www.instagram.com/toohardstudios?igsh=NTRiYzh0dDg1OXZx&utm_source=qr" className="hover:text-white">
                <FaInstagram />
              </a>
              <a href="https://web.facebook.com/people/toohardstudios/61586886788384/?mibextid=wwXIfr&rdid=xGtDQOjLb1DvpdSa&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F1FtS2x5Zt7%2F%3Fmibextid%3DwwXIfr%26_rdc%3D1%26_rdr" className="hover:text-white">
                <FaFacebook />
              </a>
              {/* <a href="#" className="hover:text-white">
                <FaLinkedin />
              </a> */}
            </div>
          </div>
        </div>

        {/* ================= GOOGLE MAP ================= */}
        <div className="max-w-5xl mx-auto px-4 md:px-20 mb-16">
          <h3 className="text-2xl font-bold mb-4 text-center">Find Us Here</h3>
          <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden shadow-lg border border-white/20">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96830.91734534573!2d14.710255244749202!3d40.67471441048687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133bc25734bd3089%3A0x15a49713da0374a0!2sSalerno%2C%20SA%2C%20Italy!5e0!3m2!1sen!2slk!4v1770346891582!5m2!1sen!2slk" 
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* ================= FOOTER NOTE ================= */}
        <p className="text-center text-gray-500 text-sm mb-16 px-4">
          We respect your privacy. Your information is safe with us.
        </p>

        {/* ================= WHATSAPP FLOAT ================= */}
        <motion.a
          href="https://wa.me/393202419315"
          target="_blank"
          rel="noopener noreferrer"
          animate={{
            scale: [1, 1.15, 1],
            boxShadow: [
              "0 0 20px rgba(37,211,102,0.5)",
              "0 0 40px rgba(37,211,102,0.7)",
              "0 0 20px rgba(37,211,102,0.5)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="fixed bottom-8 right-8 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center z-50"
        >
          <FaWhatsapp size={28} />
        </motion.a>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
export default function Location({ playfair }) {
    return (
        
            <section id="location" className="py-16 px-4 ">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`${playfair.className} text-2xl font-bold text-center mb-6`}
            >
            Our Location
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`w-full h-100 rounded-2xl overflow-hidden shadow-lg border border-[#034b1d]/20`}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4442.330295806419!2d74.5412948511298!3d20.566009330314166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1776974669970!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </motion.div>
        </section>
        
    );
}
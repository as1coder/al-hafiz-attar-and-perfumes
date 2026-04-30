"use client";
import {motion, scale} from "framer-motion";
import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";
export default function Contact({ playfair }) {
    return (
        <div>
            <section id="contact" className="py-16 px-6 text-center">

                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className={`${playfair.className} text-3xl md:text-4xl font-bold mb-4`}
                >
                    Contact Us
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-6 text-[#034b1d]/70"
                >
                    Reach out to us for orders & inquiries
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex justify-center gap-8 p-4 text-3xl"
                >

                    {/* WhatsApp */}
                    <motion.a
                    whileHover={{scale : 1.2}}
                    initial={{ scale: 1 }}
                        href="https://wa.me/918421405548?text=Hi%20I%20want%20to%20buy%20perfume"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#034b1d] hover:text-[#0a6b2e] transition"
                    >
                        <FaWhatsapp />
                    </motion.a>

                    {/* Email */}
                    <motion.a
                    whileHover={{scale : 1.2}}
                    initial={{ scale: 1 }}
                        href="mailto:eagle32gaming@gmail.com"
                        className="text-[#034b1d] hover:text-[#0a6b2e] transition"
                    >
                        <FaEnvelope />
                    </motion.a>

                    {/* Instagram */}
                    <motion.a
                    whileHover={{scale : 1.2}}
                    initial={{ scale: 1 }}  
                        href="https://www.instagram.com/ig_really_4232/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#034b1d] hover:text-[#0a6b2e] transition"
                    >
                        <FaInstagram />
                    </motion.a>

                </motion.div>
            </section>
        </div>
    );
}
"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar({ playfair }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="flex items-center sticky top-0 bg-amber-50 justify-between border-b-2 border-green-800 py-2 px-3">
        
        {/* Logo + Name */}
        <motion.a 
          href="#" 
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
        <div className='flex gap-4 items-center'>
          <Image src="/profile.jpg" alt="profile" width={50} height={30} />
          <h1 className={`${playfair.className} text-lg md:text-2xl font-bold`}>
            M.T. Attars
          </h1>
        </div>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <motion.a 
            href="#about" 
            className="hover:text-gray-600"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            About
          </motion.a>
          <motion.a 
            href="#products" 
            className="hover:text-gray-600"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Products
          </motion.a>
          <motion.a 
            href="#contact" 
            className="hover:text-gray-600"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Contact
          </motion.a>
          <motion.a 
            href="#location" 
            className="hover:text-gray-600"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Location
          </motion.a>
          <motion.a 
            href="/animator" 
            className="hover:text-gray-600"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Animator
          </motion.a>
        </div>

        {/* Mobile Hamburger */}
        <motion.button 
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(true)}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          ☰
        </motion.button>
      </nav>

      {/* OVERLAY (30% area clickable) */}
      {isOpen && (
        <motion.div 
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        ></motion.div>
      )}

      {/* SIDE MENU (70%) */}
      <div className={`fixed top-0 right-0 h-full w-[70%] bg-white z-50 transform transition-transform duration-300 
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}>

        {/* Close Button */}
        <div className="flex justify-end p-4">
          <motion.button 
            className="text-2xl"
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            ✕
          </motion.button>
        </div>

        {/* Menu Links */}
        <div className="flex flex-col items-start gap-6 px-6 text-lg">
          <motion.a 
            href="#about" 
            className="hover:text-gray-600"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            onClick={() => setIsOpen(false)}
          >
            About
          </motion.a>
          <motion.a 
            href="#products" 
            className="hover:text-gray-600"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onClick={() => setIsOpen(false)}
          >
            Products
          </motion.a>
          <motion.a 
            href="#contact" 
            className="hover:text-gray-600"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </motion.a>
          <motion.a 
            href="#location" 
            className="hover:text-gray-600"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onClick={() => setIsOpen(false)}
          >
            Location
          </motion.a>
        </div>
      </div>
    </>
  );
}
"use client"
import { useState } from "react";
import Image from "next/image";

export default function Navbar({ playfair }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="flex items-center sticky top-0 bg-amber-50 justify-between border-b-2 border-green-800 py-2 px-3">
        
        {/* Logo + Name */}
        <a href="#" className="flex items-center gap-2">
        <div className='flex gap-2 items-center'>
          <Image src="/profile.jpg" alt="profile" width={50} height={30} />
          <h1 className={`${playfair.className} text-lg md:text-2xl font-bold`}>
            Al-Hafiz Attar And Perfumes
          </h1>
        </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-gray-600">About</a>
          <a href="#products" className="hover:text-gray-600">Products</a>
          <a href="#contact" className="hover:text-gray-600">Contact</a>
          <a href="#location" className="hover:text-gray-600">Location</a>
        </div>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(true)}
        >
          ☰
        </button>
      </nav>

      {/* OVERLAY (30% area clickable) */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* SIDE MENU (70%) */}
      <div className={`fixed top-0 right-0 h-full w-[70%] bg-white z-50 transform transition-transform duration-300 
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}>

        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button 
            className="text-2xl"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
        </div>

        {/* Menu Links */}
        <div className="flex flex-col items-start gap-6 px-6 text-lg">
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#products" onClick={() => setIsOpen(false)}>Products</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
          <a href="#location" onClick={() => setIsOpen(false)}>Location</a>
        </div>
      </div>
    </>
  );
}
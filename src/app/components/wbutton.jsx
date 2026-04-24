"use client";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false); // scroll down → hide
      } else {
        setShow(true); // scroll up → show
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <a
      href="https://wa.me/918421405548"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 text-3xl p-4 rounded-full shadow-lg bg-green-500 text-white transition-all duration-300 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <FaWhatsapp />
    </a>
  );
}
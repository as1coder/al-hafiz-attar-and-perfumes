"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollTopButton() {
  const [show, setShow] = useState(false); // ❗ start hidden
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // ❗ only show after 200px scroll
      if (window.scrollY < 200) {
        setShow(false);
        setLastScrollY(window.scrollY);
        return;
      }

      // scroll direction logic
      if (window.scrollY > lastScrollY) {
        setShow(false); // down → hide
      } else {
        setShow(true); // up → show
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-24 right-6 z-50 text-2xl p-4 rounded-full shadow-lg cursor-pointer bg-green-800 text-white transition-all duration-300 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <ArrowUp />
    </button>
  );
}
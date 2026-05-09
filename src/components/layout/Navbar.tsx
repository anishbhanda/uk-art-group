"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-[#111827]/95 border-yellow-600/20"
          : "bg-[#111827]/20 border-transparent"
      } backdrop-blur-xl`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
        <a
          href="#"
          className="text-3xl font-bold text-yellow-500 tracking-wide"
        >
          UK <span className="text-[#E76F51]">Art</span> Group
        </a>

        <ul className="hidden md:flex items-center gap-10 uppercase text-sm tracking-[0.2em]">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#testimonials">Reviews</a></li>
          <li><a href="#contact">Contact</a></li>

          <li>
            <a
              href="#booking"
              className="bg-gradient-to-r from-[#E76F51] to-orange-400 px-5 py-3 rounded-sm"
            >
              Book Now
            </a>
          </li>
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-[2px] bg-yellow-500"></span>
          <span className="w-6 h-[2px] bg-yellow-500"></span>
          <span className="w-6 h-[2px] bg-yellow-500"></span>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#111827]/95 backdrop-blur-xl px-6 pb-6">
          <div className="flex flex-col gap-5 uppercase tracking-widest text-sm">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#testimonials">Reviews</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}
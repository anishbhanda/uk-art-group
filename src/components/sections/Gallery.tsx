"use client";

import { useState } from "react";

const images = [
  {
    title: "Folk Dance",
    category: "Dance",
    image: "/images/image1.jpeg",
  },
  {
    title: "Music Performance",
    category: "Music",
    image: "/images/image2.jpeg",
  },
  {
    title: "Festival Celebration",
    category: "Events",
    image: "/images/image3.jpeg",
  },
  {
    title: "Workshop Training",
    category: "Events",
    image: "/images/image1.jpeg",
  },
  {
    title: "Traditional Attire",
    category: "Dance",
    image: "/images/image3.jpeg",
  },
];

const filters = ["All", "Dance", "Music", "Events"];

export default function Gallery() {
  const [active, setActive] = useState("All");

  return (
    <section id="gallery" className="py-24 px-6 lg:px-16 bg-[#0a0e14]">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-16">
          <div>
            <p className="uppercase tracking-[0.25em] text-[#E76F51] text-xs mb-5">
              Visual Journey
            </p>

            <h2 className="text-5xl font-bold">
              Our <span className="italic text-[#E76F51]">Gallery</span>
            </h2>
          </div>

          {/* FILTER BUTTONS */}
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActive(filter)}
                className={`px-5 py-2 rounded-full uppercase tracking-widest text-xs border transition duration-300 ${
                  active === filter
                    ? "bg-[#E76F51] border-[#E76F51] text-white"
                    : "border-white/20 text-gray-300 hover:border-[#E76F51]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* GALLERY */}
        <div className="masonry">
          {images.map((item, index) => {
            const isActive =
              active === "All" || item.category === active;

            return (
              <div
                key={index}
                className={`masonry-item overflow-hidden rounded-lg group relative transition duration-500 ${
                  isActive
                    ? "opacity-100 scale-100"
                    : "opacity-30 scale-[0.98]"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full rounded-lg group-hover:scale-105 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 opacity-0 group-hover:opacity-100 transition flex items-end p-5">
                  <span className="uppercase tracking-widest text-yellow-500 text-xs">
                    {item.title}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
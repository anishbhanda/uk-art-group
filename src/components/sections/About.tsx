"use client";

import { useEffect, useState } from "react";

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;

    const step = Math.ceil(target / 60);

    const timer = setInterval(() => {
      current += step;

      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 25);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count}+</span>;
}

const features = [
  {
    icon: "🥁",
    title: "Dhol Damau & Folk Music",
    desc: "Authentic Uttarakhand percussive traditions performed by trained masters.",
  },
  {
    icon: "💃",
    title: "Traditional Folk Dance",
    desc: "Chholiya, Langvir Nritya, and Jhumeila performed in authentic attire.",
  },
  {
    icon: "🏔️",
    title: "Himalayan Cultural Identity",
    desc: "Preserving the sacred heritage of Garhwal and Kumaon for future generations.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-16 bg-[#111827] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        
        {/* LEFT IMAGE SIDE */}
        <div className="relative">
          {/* Decorative Border Top */}
          <div className="absolute -top-4 -left-4 md:-top-5 md:-left-5 w-16 h-16 md:w-20 md:h-20 border-t-2 border-l-2 border-yellow-500 z-20"></div>

          {/* Main Image */}
          <div className="relative overflow-hidden rounded-xl">
            <img
              src="/images/image3.jpeg"
              alt="Uttarakhand Culture"
              className="w-full h-[350px] sm:h-[450px] lg:h-[600px] object-cover hover:scale-105 transition duration-700"
            />
          </div>


        </div>

        {/* RIGHT CONTENT */}
        <div>
          {/* Label */}
          <p className="uppercase tracking-[0.25em] text-[#E76F51] text-xs mb-4 md:mb-5">
            Our Story
          </p>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 md:mb-8">
            Born from the
            <br />
            <span className="italic text-[#E76F51]">Himalayas</span>,
            Built for Eternity
          </h2>

          {/* Description */}
          <p className="text-gray-300 leading-7 md:leading-8 text-base md:text-lg">
            UK Art Group is a cultural movement rooted in the sacred mountains
            of Uttarakhand. We bring the vibrant traditions of Garhwali and
            Kumaoni folk arts to life — from the rhythmic beats of Dhol Damau
            to the graceful movements of Langvir Nritya.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5 mt-10 md:mt-12">
            <div className="text-center bg-green-900/20 border border-green-700/30 rounded-xl p-5 md:p-6 hover:-translate-y-1 transition overflow-hidden">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#E76F51] mb-2 break-words">
                <Counter target={500} />
              </div>

              <p className="uppercase tracking-widest text-[10px] sm:text-xs text-gray-400 leading-5">
                Events Performed
              </p>
            </div>

            <div className="text-center bg-green-900/20 border border-green-700/30 rounded-xl p-5 md:p-6 hover:-translate-y-1 transition overflow-hidden">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#E76F51] mb-2 break-words">
                <Counter target={80} />
              </div>

              <p className="uppercase tracking-widest text-[10px] sm:text-xs text-gray-400 leading-5">
                Artists
              </p>
            </div>

            <div className="text-center bg-green-900/20 border border-green-700/30 rounded-xl p-5 md:p-6 hover:-translate-y-1 transition overflow-hidden">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#E76F51] mb-2 break-words">
                <Counter target={12} />
              </div>

              <p className="uppercase tracking-widest text-[10px] sm:text-xs text-gray-400 leading-5">
                Years Experience
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="mt-10 md:mt-12 space-y-4 md:space-y-5">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row gap-4 sm:gap-5 bg-white/5 border border-white/10 rounded-xl p-4 md:p-5 hover:border-[#E76F51]/30 transition"
              >
                <div className="w-14 h-14 rounded-xl bg-[#E76F51]/10 flex items-center justify-center text-2xl shrink-0">
                  {feature.icon}
                </div>

                <div>
                  <h4 className="text-base md:text-lg font-semibold mb-2">
                    {feature.title}
                  </h4>

                  <p className="text-gray-400 leading-6 md:leading-7 text-sm">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
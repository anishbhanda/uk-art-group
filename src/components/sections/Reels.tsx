"use client";

const reels = [
  {
    title: "Chholiya Dance",
    subtitle: "Wedding Celebration",
    video: "/videos/chholiya-dance.mp4",
  },
  {
    title: "Dhol-Damau",
    subtitle: "Festival Night",
    video: "/videos/mountain-folk.mp4",
  },
  {
    title: "Grand Festival",
    subtitle: "Cultural Mela 2024",
    video: "/videos/grand-festival.mp4",
  },
];

export default function Reels() {
  return (
    <section
      id="reels"
      className="py-24 px-6 lg:px-16 bg-[#0a0e14]"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="uppercase tracking-[0.25em] text-[#E76F51] text-xs mb-5">
            Watch & Feel
          </div>

          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            Live the{" "}
            <span className="italic text-[#E76F51]">
              Experience
            </span>
          </h2>

          <p className="mt-6 text-gray-300 max-w-2xl mx-auto leading-8 text-lg">
            Watch our artists bring the Himalayan spirit to life.
          </p>
        </div>

        {/* REELS SCROLL */}
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">

          {reels.map((reel, index) => (
            <div
              key={index}
              className="relative min-w-[280px] md:min-w-[320px] h-[520px] rounded-3xl overflow-hidden group border border-white/10 snap-start shrink-0"
            >

              {/* VIDEO */}
              <video
                src={reel.video}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700 brightness-75 group-hover:brightness-100"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/90" />

              {/* PLAY BUTTON */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-3xl text-white group-hover:scale-110 transition duration-300">
                  ▶
                </div>
              </div>

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 right-0 p-6">

                <h4 className="text-2xl font-bold mb-2">
                  {reel.title}
                </h4>

                <p className="text-gray-300 text-sm tracking-wide">
                  {reel.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 hero-zoom"
        style={{
          backgroundImage: `
            linear-gradient(to bottom,
              rgba(17,24,39,.3),
              rgba(17,24,39,.7)),
            url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&q=80
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-500 uppercase tracking-[0.2em] text-xs mb-8 fade-up">
          ❋ Uttarakhand Folk Heritage
        </div>

        <h1 className="text-5xl md:text-7xl font-black leading-tight fade-up">
          Preserving Uttarakhand
          <br />
          <span className="italic text-[#E76F51]">
            Culture for the Future
          </span>
        </h1>

        <p className="mt-8 uppercase tracking-[0.3em] text-gray-300 text-sm md:text-base fade-up">
          Traditional Folk Dance • Music • Cultural Events
        </p>

        <div className="flex flex-wrap justify-center gap-5 mt-10 fade-up">
          <a
            href="#booking"
            className="px-8 py-4 bg-gradient-to-r from-[#E76F51] to-orange-400 rounded-sm uppercase tracking-widest text-sm font-semibold hover:-translate-y-1 transition"
          >
            🎭 Book Performance
          </a>

          <a
            href="#about"
            className="px-8 py-4 border border-white/30 rounded-sm uppercase tracking-widest text-sm hover:border-yellow-500 hover:text-yellow-500 transition"
          >
            ✦ Join Our Group
          </a>
        </div>
      </div>
    </section>
  );
}
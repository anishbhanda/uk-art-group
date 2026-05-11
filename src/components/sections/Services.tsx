const services = [
  {
    title: "Folk Dance Performances",
    icon: "💃",
    tag: "Live Performance",
    image:"/images/folk-dance.jpeg",
    desc: "Experience traditional Uttarakhand folk dances performed in authentic attire.",
  },
  {
    title: "Traditional Live Music",
    icon: "🥁",
    tag: "Live Music",
    image:"/images/live-music.jpeg",
    desc: "Dhol Damau, Turri, and Ransingha create a timeless Himalayan atmosphere.",
  },
  {
    title: "Cultural Event Management",
    icon: "🎪",
    tag: "Events",
    image:"/images/cultural.jpeg",
    desc: "Complete cultural event planning from weddings to festivals.",
  },
  {
    title: "Workshops & Training",
    icon: "🎓",
    tag: "Training",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
    desc: "Learn folk dance, Dhol playing, and Uttarakhand traditions.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 px-6 lg:px-16 bg-gradient-to-b from-[#111827] to-[#0d1f17]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.25em] text-[#E76F51] text-xs mb-5">
            What We Offer
          </p>

          <h2 className="text-5xl font-bold">
            Our <span className="italic text-[#E76F51]">Cultural</span> Services
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative min-h-[380px] rounded-lg overflow-hidden border border-white/10"
            >
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition duration-700"
                style={{
                  backgroundImage: `url(${service.image})`,
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#111827]/95" />

              <div className="relative z-10 h-full flex flex-col justify-end p-8">
                <div className="mb-4 inline-block w-fit px-4 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/20 text-yellow-500 uppercase text-xs tracking-widest">
                  {service.tag}
                </div>

                <div className="text-5xl mb-5">{service.icon}</div>

                <h3 className="text-3xl font-bold mb-4">{service.title}</h3>

                <p className="text-gray-300 leading-7 mb-6">
                  {service.desc}
                </p>

                <a
                  href="#booking"
                  className="uppercase tracking-widest text-sm text-[#E76F51] hover:translate-x-2 transition"
                >
                  Book Now →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
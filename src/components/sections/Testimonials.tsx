const testimonials = [
  {
    name: "Rahul Bisht",
    role: "Wedding Client",
    text: "UK Art Group transformed our wedding into an unforgettable cultural celebration.",
  },
  {
    name: "Priya Rawat",
    role: "Event Manager",
    text: "Professionalism, energy and authenticity was on another level.",
  },
  {
    name: "Sunita Negi",
    role: "Parent",
    text: "Their workshops gave my children pride in Uttarakhand heritage.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 px-6 lg:px-16 bg-gradient-to-b from-[#0a0e14] to-[#111827]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.25em] text-[#E76F51] text-xs mb-5">
            What People Say
          </p>

          <h2 className="text-5xl font-bold">
            Stories of <span className="italic text-[#E76F51]">Cultural Pride</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-xl p-8 hover:-translate-y-2 transition"
            >
              <div className="text-yellow-500 mb-6">★★★★★</div>

              <p className="text-gray-300 leading-8 italic mb-8">
                "{item.text}"
              </p>

              <div>
                <h4 className="font-semibold text-lg">{item.name}</h4>
                <p className="text-sm text-gray-400">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
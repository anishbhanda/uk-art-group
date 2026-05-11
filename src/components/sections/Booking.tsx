"use client";

import { useState } from "react";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendToWhatsapp = () => {
    const whatsappNumber = "918700944227";

    const text = `
🎭 *New Booking Request*

👤 Name: ${formData.name}

📞 Phone: ${formData.phone}

📍 Location: ${formData.location}

📝 Message:
${formData.message}
  `;

    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
      text
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section
      id="booking"
      className="py-24 px-6 lg:px-16 bg-gradient-to-br from-[#0f2a1e] via-[#111827] to-[#1a0f06]"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE */}
        <div>
          <p className="uppercase tracking-[0.25em] text-[#E76F51] text-xs mb-5">
            Book a Performance
          </p>

          <h2 className="text-5xl font-bold leading-tight">
            Let’s Create Something
            <br />
            <span className="italic text-[#E76F51]">
              Unforgettable
            </span>
          </h2>

          <p className="mt-8 text-gray-300 leading-8">
            Weddings, festivals, corporate events, and cultural programs.
          </p>
        </div>

        {/* FORM */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl p-8">

          <div className="grid md:grid-cols-2 gap-5 mb-5">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="bg-white/5 border border-white/10 p-4 rounded-md outline-none text-white"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="bg-white/5 border border-white/10 p-4 rounded-md outline-none text-white"
            />
          </div>

          <input
            type="text"
            name="location"
            placeholder="Event Location"
            value={formData.location}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 p-4 rounded-md outline-none mb-5 text-white"
          />

          <textarea
            name="message"
            placeholder="Tell us about your event..."
            value={formData.message}
            onChange={handleChange}
            className="w-full h-40 bg-white/5 border border-white/10 p-4 rounded-md outline-none mb-5 text-white"
          />

          <button
            onClick={sendToWhatsapp}
            className="w-full py-4 bg-gradient-to-r from-[#E76F51] to-orange-400 rounded-md uppercase tracking-widest font-semibold hover:scale-[1.02] transition"
          >
            Send Booking Request
          </button>
        </div>
      </div>
    </section>
  );
}
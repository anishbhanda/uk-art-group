export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-16 bg-[#0a0e14]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
        <div>
          <p className="uppercase tracking-[0.25em] text-[#E76F51] text-xs mb-5">
            Contact
          </p>

          <h2 className="text-5xl font-bold mb-10">
            We’d Love to
            <br />
            <span className="italic text-[#E76F51]">Hear From You</span>
          </h2>

          <div className="space-y-8">
            <div>
              <h4 className="uppercase tracking-widest text-sm text-[#E76F51] mb-2">
                Phone
              </h4>

              <p className="text-gray-300">8700944227
</p>
            </div>

            <div>
              <h4 className="uppercase tracking-widest text-sm text-[#E76F51] mb-2">
                Email
              </h4>

              <p className="text-gray-300">bhavyanegi62@gmail.com</p>
            </div>
            <div>
              <h4 className="uppercase tracking-widest text-sm text-[#E76F51] mb-2">
               Availability
              </h4>

              <p className="text-gray-300">Monday to Sunday 9 am to 9 pm</p>
            </div>

            <div>
              <h4 className="uppercase tracking-widest text-sm text-[#E76F51] mb-2">
                Location
              </h4>

              <p className="text-gray-300">E-95 pratap vihar khora colony near purana transfram</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-white/10 min-h-[400px] bg-gradient-to-br from-[#1B4332] to-[#111827] flex items-center justify-center">
          <div className="text-center">

<img
              src="/images/mountain.jpg"
              alt="Uttarakhand Culture"
              className="w-full h-[350px] sm:h-[350px] lg:h-[500px]  object-cover "
            />
            </div>

            {/* <p className="text-gray-300">Rooted in the Himalayas</p> */}
          </div>

      </div>
    </section>
  );
}
export default function Footer() {
  return (
    <footer className="bg-black border-t border-yellow-500/10 py-16 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-12">
        <div>
          <h2 className="text-4xl font-black text-yellow-500 mb-5">
            UK <span className="text-[#E76F51]">Art</span>
          </h2>

          <p className="text-gray-400 leading-7">
            Preserving Uttarakhand folk heritage through music, dance, and culture.
          </p>
        </div>

        <div>
          <h4 className="uppercase tracking-widest text-yellow-500 text-sm mb-5">
            Links
          </h4>

          <ul className="space-y-3 text-gray-400">
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#gallery">Gallery</a></li>
          </ul>
        </div>

        <div>
          <h4 className="uppercase tracking-widest text-yellow-500 text-sm mb-5">
            Services
          </h4>

          <ul className="space-y-3 text-gray-400">
            <li>Folk Dance</li>
            <li>Live Music</li>
            <li>Workshops</li>
          </ul>
        </div>

        <div>
          <h4 className="uppercase tracking-widest text-yellow-500 text-sm mb-5">
            Contact
          </h4>

          <p className="text-gray-400 leading-7">
            hello@ukartgroup.in
            <br />
            +91 98765 43210
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 mt-12 pt-8 text-center text-gray-500 text-sm">
        © 2026 UK Art Group. All rights reserved.
      </div>
    </footer>
  );
}
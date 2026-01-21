import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section className="bg-[#e6e7e9] py-24 px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-2 items-center gap-20">

       {/* ===== LEFT TEXT ===== */}
    <div className=" relative z-20 translate-x-32">
      <h1 className="text-[120px] leading-tight font-extrabold text-white drop-shadow-md">
        WEB<br />DEVELOPER
      </h1>

      {/* 🔹 Button + Icons same line */}
      <div className="flex items-center gap-6 mt-8">
        <button className="bg-black text-white px-18 py-3 rounded-full">
          Portfolio
        </button>

        <FaLinkedinIn className="text-xl cursor-pointer text-black" />
        <FaGithub className="text-xl cursor-pointer text-black" />
      </div>
    </div>


        {/* ===== RIGHT OVALS ===== */}
        <div className="flex gap-14 justify-end items-center mr-18">

          {/* 🔹 PERSON IMAGE OVAL */}
          <div className="relative w-[200px] h-[480px] rounded-full overflow-hidden">
            <img
              src="/about1.png"
              alt="Profile"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* 🔹 TEXT OVAL */}
          <div className="w-[200px] h-[480px] rounded-full border border-gray-500 flex flex-col items-center justify-between py-12 px-6">

            <div className="text-center text-sm text-gray-700 leading-relaxed">
              <p className="font-semibold mb-3">#BuildTheWeb</p>
              <p>
                build bridges<br />
                that connect<br />
                people to<br />
                information
              </p>
            </div>

            <img
              src="/about2.jpg"
              alt="Small avatar"
              className="w-[140px] h-[140] rounded-full object-cover mt-32"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

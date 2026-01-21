export default function NewsSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-8">

        {/* ===== LATEST NEWS HEADER ===== */}
        <div className="flex items-center gap-6 mb-10">
          <h2 className="text-xl font-bold tracking-wider">
            LATEST NEWS
          </h2>
          <div className="w-240 h-[4px] bg-purple-500"></div>
        </div>

        {/* ===== NEWS GRID ===== */}
        <div className="grid grid-cols-3 gap-8 mb-24">

          {/* 🔹 LEFT FEATURED NEWS */}
          <div className="col-span-2">
            <img
              src="/L1.jpg"
              alt="Main news"
              className="w-full h-[450px] object-cover rounded-md mb-4"
            />

            <h3 className="text-purple-600 font-semibold mb-2">
              Heavy rain in New Orleans
            </h3>

            <p className="text-gray-600 leading-relaxed max-w-xl">
              Lorem ipsum dolor sit amet consectetur. Amet tortor tempor feugiat
              elementum.
            </p>
          </div>

          {/* 🔹 RIGHT SMALL NEWS LIST */}
          <div className="space-y-8">

            {[ "/L2.jpg", "/L3.jpg", "/L4.jpg" ].map((img, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="flex-1">
                  <h4 className="text-purple-600 text-sm font-semibold mb-1">
                    Heavy rain in New Orleans
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
                <img
                  src={img}
                  className="w-28 h-28 object-cover rounded-md"
                />
              </div>
            ))}

          </div>
        </div>

        {/* ===== ALL AROUND THE WORLD HEADER ===== */}
        <div className="flex items-center gap-6 mb-10">
          <h2 className="text-xl font-bold tracking-wider ml-50">
            ALL AROUND THE WORLD
          </h2>
          <div className="w-150 h-[4px] bg-purple-500 ml-10"></div>
        </div>

        {/* ===== WORLD NEWS GRID ===== */}
        <div className="grid grid-cols-2 gap-8">

          {[ "/img1.jpg", "/img2.jpg" ].map((img, i) => (
            <div key={i}>
              <img
                src={img}
                className="w-140 h-[340px] object-cover rounded-md mb-4"
              />
              <h3 className="text-purple-600 font-semibold mb-2">
                Heavy rain in New Orleans
              </h3>
              <p className="text-gray-600 max-w-md">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

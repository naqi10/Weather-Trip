import WeatherCard from "./WeatherCard";

export default function Hero() {
  return (
    <section className="relative w-full bg-white">

      {/* 🔹 HERO BACKGROUND */}
      <div
        className="h-[448px] w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.65), rgba(0,0,0,0.15)), url('/hero.jpg')",
        }}
      >
    <div className="h-full flex items-center px-16 ml-18">
      <div className="text-white max-w-xl">
        <h1 className="text-5xl font-bold mb-8">
          WeatherTrip
        </h1>

      <p className="text-lg leading-relaxed">
       Your Weather, Your Journey: Always a
      <br />
      Step Ahead with Our{" "}
      <span className="font-semibold">Weather</span>
      <br />
      <span className="font-semibold">
         Forecasting App!
      </span>
      </p>

      </div>
    </div>

      </div>

      {/* 🔹 FLOATING WEATHER CARD */}
      <div className="absolute left-[60%] top-[135px] z-20">
        <WeatherCard />
      </div>

      {/* 🔹 BELOW HERO CONTENT */}
      <div className="relative bg-[#fffaf7] pt-20 pb-24 px-16">
        <div className="grid grid-cols-2 gap-24 items-start">

          {/* 🔹 LEFT SIDE (MOVE UP FREELY NOW) */}
          <div>
            <p className="text-gray-600 mb-6 ml-35">
              Stay prepared for upcoming weather
              <br />
              <span className="font-semibold text-black">
                  with daily weather news.
              </span>
            </p>

            <button className="w-55 border border-purple-500 text-purple-600 px-8 py-3 rounded-full hover:bg-purple-500 hover:text-white transition mb-10 ml-35">
              Explore
            </button>

            {/* Travel image BELOW explore */}
            <img
              src="/travel.png"
              alt="Travel illustration"
              className="w-[320px] ml-35"
            />
          </div>

          {/* 🔹 RIGHT SIDE (TEXT BELOW CARD ONLY) */}
          <div className="pt-40 mt-30 ml-10">
            <h2 className="text-2xl font-semibold mb-4">
              Don’t guess the Weather.
            </h2>

            <p className="text-gray-600 mb-6 max-w-sm">
              Clime for year-round weather forecasts for your location and
              across the world.
            </p>

            <button className="w-55 bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition">
              Get started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

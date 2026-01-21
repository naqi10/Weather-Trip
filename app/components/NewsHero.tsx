export default function NewsHero() {
  return (
    <section className="relative w-full h-[420px]">

      <img
        src="/news.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        alt="Weather news"
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative h-full flex items-center justify-end px-20">
        <div className="text-white max-w-md">
          <h1 className="text-4xl font-serif font-bold mb-4">
            WeatherTrip<span className="text-sm">.news</span>
          </h1>

          <p className="text-sm text-gray-200">
            Your guide to weather: Accurate forecasts, storm warnings,
            tips for preparing and more.
          </p>
        </div>
      </div>

    </section>
  );
}

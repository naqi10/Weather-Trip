import { FiMenu, FiPlus } from "react-icons/fi";
import { WiMoonAltFirstQuarter } from "react-icons/wi";
import { FaWind } from "react-icons/fa";
import { IoWaterOutline } from "react-icons/io5";
import { WiDaySunny } from "react-icons/wi";
import { WiRain } from "react-icons/wi";

export default function WeatherCard() {
  return (
    <div className="w-[350px] h-[550px] bg-white rounded-2xl shadow-2xl border border-purple-200 p-4 flex flex-col gap-4 mt-10">
      
      {/* 🔹 Top Header */}
      <div className="flex items-center justify-between">
        <FiMenu className="text-xl text-purple-500" />
        <h3 className="text-sm font-semibold text-purple-500">Charleston</h3>
        <FiPlus className="text-xl text-purple-500" />
      </div>

      {/* 🔹 Image Section (UNCHANGED) */}
      <div className="w-full h-[210px] rounded-xl overflow-hidden">
        <img
          src="/camping.jpg"
          alt="Weather preview"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 🔹 Today Info */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-sm font-semibold text-gray-800">Today</h2>
          <p className="text-xs text-gray-500">24 Jun, Friday</p>
        </div>

        <div className="text-right">
          <p className="text-2xl font-semibold text-gray-900">20:00</p>
          <p className="text-xl text-gray-800">24°</p>
        </div>
      </div>

      {/* 🔹 Weather Details */}
      <div className="flex justify-between text-xs text-gray-600">
        <div className="flex items-center gap-1">
          <WiMoonAltFirstQuarter className="text-lg" />
          <span>Clean</span>
        </div>

        <div className="flex items-center gap-1">
          <FaWind className="text-sm" />
          <span>10.6 km/h</span>
        </div>

        <div className="flex items-center gap-1">
          <IoWaterOutline className="text-sm" />
          <span>34%</span>
        </div>
      </div>

      {/* 🔹 Bottom Forecast Boxes */}
      <div className="flex justify-between mt-10">
        
        {/* Now */}
        <div className="w-[60px] h-[88px] bg-purple-500 rounded-xl text-white flex flex-col items-center justify-center gap-1">
          <span className="text-xs">Now</span>
          <WiMoonAltFirstQuarter className="text-xl" />
          <span className="text-sm">24°</span>
        </div>

        {/* 00:00 */}
        <div className="w-[60px] h-[88px] bg-purple-400 rounded-xl text-white flex flex-col items-center justify-center gap-1">
          <span className="text-xs">00:00</span>
          <WiRain className="text-xl" />
          <span className="text-sm">19°</span>
        </div>

        {/* 05:00 */}
        <div className="w-[60px] h-[88px] bg-purple-400 rounded-xl text-white flex flex-col items-center justify-center gap-1">
          <span className="text-xs">05:00</span>
          <WiRain className="text-xl" />
          <span className="text-sm">15°</span>
        </div>

        {/* 10:00 */}
        <div className="w-[60px] h-[88px] bg-purple-400 rounded-xl text-white flex flex-col items-center justify-center gap-1">
          <span className="text-xs">10:00</span>
          <WiDaySunny className="text-xl" />
          <span className="text-sm">25°</span>
        </div>

        {/* 10:00 */}
        <div className="w-[60px] h-[88px] bg-purple-400 rounded-xl text-white flex flex-col items-center justify-center gap-1">
          <span className="text-xs">10:00</span>
          <WiDaySunny className="text-xl" />
          <span className="text-sm">25°</span>
        </div>

      </div>
    </div>
  );
}

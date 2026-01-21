import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="h-[64px] flex items-center justify-between px-10 border-b border-gray-200">
      
      {/* 🔹 LOGO */}
      <Link href="/" className="flex items-center gap-3">
        <div className="h-[40px] w-auto flex items-center">
          <Image
            src="/logo.png"
            alt="WeatherTrip Logo"
            width={120}
            height={40}
            className="h-[40px] w-auto object-contain ml-20"
          />
        </div>

      </Link>

      {/* 🔹 NAV LINKS */}
      <div className="flex items-center gap-6 text-gray-600 mr-14">
        <Link href="/" className="hover:text-purple-600">Home</Link>
        <Link href="/news" className="hover:text-purple-600">News</Link>
        <Link href="/about" className="hover:text-purple-600">About</Link>
      </div>

    </nav>
  );
}

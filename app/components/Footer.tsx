import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-[#E7E4E3] text-white py-10 px-4 flex flex-col items-center space-y-6">
      {/* Logo */}
      <img src="/logo.png" alt="Weather Trip Logo" className="h-16" />

      {/* Links */}
      <div className="flex space-x-6 text-sm">
        <a href="#" className="text-purple-400 hover:underline">Useless link</a>
        <a href="#" className="hover:underline">Useless link</a>
        <a href="#" className="hover:underline">Useless link</a>
        <a href="#" className="hover:underline">Useless link</a>
      </div>

      {/* Social Icons */}
      <div className="flex space-x-4 text-xl">
        <a href="#" className="hover:text-purple-400"><FaLinkedin /></a>
        <a href="#" className="hover:text-purple-400"><FaInstagram /></a>
        <a href="#" className="hover:text-purple-400"><FaGithub /></a>
      </div>


      {/* Footer Text */}
      <p className="text-xs text-center max-w-md text-black">
        Website developed by João Marcos for personal and non-commercial purposes, follow me on social media.
      </p>
    </footer>
  );
}
"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full flex items-center justify-between bg-purple-950 h-16 z-40 px-8">
      {/* Nombre visible en todas las pantallas */}
      <div className="text-white text-xl font-semibold">Jose Miguel</div>

      {/* Icono de hamburguesa */}
      <div className="md:hidden text-white text-3xl cursor-pointer" onClick={toggleMenu}>
        ☰
      </div>

      {/* Menú de enlaces */}
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex md:gap-8 md:text-sm md:text-white md:justify-center absolute md:static top-16 left-0 w-full bg-purple-950 transition-transform duration-300 md:translate-y-0`}
      >
        <li className="p-4 md:p-0">
          <Link href="#home" className="hover:text-gray-300 transition-colors duration-300">
            Home
          </Link>
        </li>
        <li className="p-4 md:p-0">
          <Link href="#about" className="hover:text-gray-300 transition-colors duration-300">
            About
          </Link>
        </li>
        <li className="p-4 md:p-0">
          <Link href="#services" className="hover:text-gray-300 transition-colors duration-300">
            Services
          </Link>
        </li>
        <li className="p-4 md:p-0">
          <Link href="#my-skills" className="hover:text-gray-300 transition-colors duration-300">
            My Skills
          </Link>
        </li>
        <li className="p-4 md:p-0">
          <Link href="#my-work" className="hover:text-gray-300 transition-colors duration-300">
            My Work
          </Link>
        </li>
        <li className="p-4 md:p-0">
          <Link href="#contact" className="hover:text-gray-300 transition-colors duration-300">
            Contact Me
          </Link>
        </li>
      </ul>
    </nav>
  );
}

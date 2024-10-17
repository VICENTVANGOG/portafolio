import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between bg-purple-950 h-16 z-40 px-8">
      <div className="text-white text-xl font-semibold">
        Jose Miguel
      </div>
      
      <ul className="flex justify-center gap-8 text-white text-sm">
        <li>
          <Link href="#home" className="hover:text-gray-300 transition-colors duration-300">
            Home
          </Link>
        </li>
        <li>
          <Link href="#about" className="hover:text-gray-300 transition-colors duration-300">
            About
          </Link>
        </li>
        <li>
          <Link href="#services" className="hover:text-gray-300 transition-colors duration-300">
            Services
          </Link>
        </li>
        <li>
          <Link href="#my-skills" className="hover:text-gray-300 transition-colors duration-300">
            My Skills
          </Link>
        </li>
        <li>
          <Link href="#my-work" className="hover:text-gray-300 transition-colors duration-300">
            My Work
          </Link>
        </li>
        <li>
          <Link href="#contact" className="hover:text-gray-300 transition-colors duration-300">
            Contact Me
          </Link>
        </li>
      </ul>
    </nav>
  );
}

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between bg-purple-900 h-16 z-40 px-8">
      <div className="text-white text-xl font-semibold">
       Jose miguel
      </div>
      
      <ul className="flex justify-center gap-8 text-white text-sm">
        <li>
          <Link href="/" className="hover:text-gray-300 transition-colors duration-300">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-gray-300 transition-colors duration-300">
            About
          </Link>
        </li>
        <li>
          <Link href="/services" className="hover:text-gray-300 transition-colors duration-300">
            Services
          </Link>
        </li>
        <li>
          <Link href="/my-skills" className="hover:text-gray-300 transition-colors duration-300">
            My Skills
          </Link>
        </li>
        <li>
          <Link href="/my-work" className="hover:text-gray-300 transition-colors duration-300">
            My Work
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-gray-300 transition-colors duration-300">
            Contact Me
          </Link>
        </li>
      </ul>

      <div className="flex gap-2">
        <button aria-label="Switch to French">
          <Image src="/col.jpeg" alt="French flag" width={24} height={24} />
        </button>
        <button aria-label="Switch to English">
          <Image src="/usa.png" alt="USA flag" width={24} height={24} />
        </button>
      </div>
    </nav>
  );
}
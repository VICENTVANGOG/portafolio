import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center bg-black h-20 z-40 px-8"> 
      <div className=" ml-64"> 
        <img src="/img.png" alt="10px" width={110} height={100} />
      </div>
      
      <ul className="flex justify-center gap-8 text-white text-xl mx-auto"> 
        <li>
          <Link href="/" className="navbar-item text-white hover:text-red-700 transition-colors duration-300">
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link href="/about" className="navbar-item text-white hover:text-red-700 transition-colors duration-300">
            <span>About</span>
          </Link>
        </li>
        <li>
          <Link href="/service" className="navbar-item text-white hover:text-red-700 transition-colors duration-300">
            <span>Service</span>
          </Link>
        </li>
        <li>
          <Link href="/portafolio" className="navbar-item text-white hover:text-red-700 transition-colors duration-300">
            <span>Portafolio</span>
          </Link>
        </li>
        <li>
          <Link href="/contact" className="navbar-item text-white hover:text-red-700 transition-colors duration-300">
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

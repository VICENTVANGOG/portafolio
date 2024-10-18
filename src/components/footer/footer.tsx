import Link from 'next/link';
import { Instagram, Facebook,Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-purple-900 text-white py-19 mt-auto">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-between items-center">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <Link href="/" className="text-2xl font-bold">
            JoseM.
          </Link>
          <p className="mt-2 text-sm text-purple-300">
            Web Designer & Developer
          </p>
        </div>
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <nav className="flex flex-col space-y-2">
            <Link href="/" className="hover:text-purple-300 transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-purple-300 transition-colors">
              About
            </Link>
            <Link href="/service" className="hover:text-purple-300 transition-colors">
              Service
            </Link>
            <Link href="/portfolio" className="hover:text-purple-300 transition-colors">
              Portfolio
            </Link>
            <Link href="/contact" className="hover:text-purple-300 transition-colors">
              Contact
            </Link>
          </nav>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-lg font-semibold mb-4">Connect</h3>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/jmiguelbarrientos/" className="hover:text-purple-300 transition-colors">
              <Instagram size={24} />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="https://www.facebook.com/josemiguel.barrientos.96/" className="hover:text-purple-300 transition-colors">
              <Facebook size={24} />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="https://www.linkedin.com/in/jose-miguel-barrientos-rivera-245935213/" className="hover:text-purple-300 transition-colors">
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://github.com/VICENTVANGOG" className="hover:text-purple-300 transition-colors">
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-purple-800 text-center text-sm text-purple-300">
        <p>&copy; {new Date().getFullYear()} JoseM. All rights reserved.</p>
      </div>
    </div>
  </footer>
  );
}

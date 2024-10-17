"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";



import en from '@/app/locale/en';
import es from '@/app/locale/es';

const translations = { en, es };

const Navbar: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'es'>('en');

  const changeLanguage = (lang: 'en' | 'es') => {
    setLanguage(lang);
  };

  const t = (key: keyof typeof translations['en']['navbar']) => {
    return translations[language].navbar[key] || key;
  };

  return (
    <nav className="w-full flex items-center justify-between bg-purple-950 h-16 z-40 px-8">
      <div className="text-white text-xl font-semibold">
        Jose Miguel
      </div>

      <ul className="flex justify-center gap-8 text-white text-sm">
        <li>
          <Link href="/" className="hover:text-gray-300 transition-colors duration-300">
            {t('home')}
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-gray-300 transition-colors duration-300">
            {t('about')}
          </Link>
        </li>
        <li>
          <Link href="/services" className="hover:text-gray-300 transition-colors duration-300">
            {t('services')}
          </Link>
        </li>
        <li>
          <Link href="/my-skills" className="hover:text-gray-300 transition-colors duration-300">
            {t('my_skills')}
          </Link>
        </li>
        <li>
          <Link href="/my-work" className="hover:text-gray-300 transition-colors duration-300">
            {t('my_work')}
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-gray-300 transition-colors duration-300">
            {t('contact')}
          </Link>
        </li>
      </ul>

      <div className="flex gap-2">
        <button aria-label="Switch to Spanish" onClick={() => changeLanguage('es')}>
          <Image src="/col.jpeg" alt="Colombian flag" width={24} height={24} />
        </button>
        <button aria-label="Switch to English" onClick={() => changeLanguage('en')}>
          <Image src="/usa.png" alt="USA flag" width={24} height={24} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

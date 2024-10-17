"use client";

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const skills = [
  { name: 'MongoDB', icon: 'https://www.svgrepo.com/show/331488/mongodb.svg', percentage: 20 },
  { name: 'Firebase', icon: 'https://cdn.icon-icons.com/icons2/691/PNG/512/google_firebase_icon-icons.com_61474.png', percentage: 20 },
  { name: 'JavaScript', icon: 'https://static.vecteezy.com/system/resources/previews/027/127/560/non_2x/javascript-logo-javascript-icon-transparent-free-png.png', percentage: 45 },
  { name: 'React', icon: 'https://cdn-icons-png.flaticon.com/512/919/919851.png', percentage: 40 },
  { name: 'HTML', icon: 'https://cdn-icons-png.freepik.com/256/13170/13170709.png?semt=ais_hybrid', percentage: 50 },
  { name: 'Next.js', icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.png', percentage: 35 },
  { name: 'CSS', icon: 'https://cdn-icons-png.flaticon.com/512/919/919826.png', percentage: 65 },
  { name: 'SASS', icon: 'https://pluginicons.craft-cdn.com/scssqTY8srJEesn2VFiUV73mUCyRIZsfXfDj2eOY.svg?1528091210', percentage: 50 },
  { name: 'TypeScript', icon: 'https://techblog.istyle.co.jp/wp-content/uploads/2021/12/typescript.png', percentage: 40 },
];

export default function SkillsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % skills.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + skills.length) % skills.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const displayedSkills = [
    skills[currentIndex],
    skills[(currentIndex + 1) % skills.length],
    skills[(currentIndex + 2) % skills.length],
  ];

  return (
    <div className="bg-purple-800 text-white py-12 w-full">
      <h2 className="text-4xl font-bold text-center mb-6">Skills</h2>
      <p className="text-center text-purple-200 mb-8">
        Below, you will find a summary of my skills as a developer.
      </p>
      <div className="flex justify-center items-center">
        <button
          onClick={prevSlide}
          className="bg-purple-700 text-white p-2 rounded-full transition duration-300 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
          aria-label="Previous skill"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="flex justify-center space-x-8 mx-8 w-full">
          <AnimatePresence mode="popLayout">
            {displayedSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center w-1/4"
              >
                <div className="w-full h-40 relative">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                      className="text-purple-600 stroke-current"
                      strokeWidth="10"
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                    ></circle>
                    <motion.circle
                      className="text-purple-300 progress-ring stroke-current"
                      strokeWidth="10"
                      strokeLinecap="round"
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      strokeDasharray={`${2 * Math.PI * 40}`}
                      initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                      animate={{ strokeDashoffset: 2 * Math.PI * 40 * (1 - skill.percentage / 100) }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                      transform="rotate(-90 50 50)"
                    ></motion.circle>
                    <image
                      href={skill.icon}
                      x="25"
                      y="25"
                      width="50"
                      height="50"
                    />
                  </svg>
                  <div className="absolute top-1 left-0 w-full flex justify-center">
                    <span className="text-lg font-bold">{skill.percentage}%</span>
                  </div>
                </div>
                <p className="mt-4 text-lg font-semibold">{skill.name}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <button
          onClick={nextSlide}
          className="bg-purple-700 text-white p-2 rounded-full transition duration-300 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
          aria-label="Next skill"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
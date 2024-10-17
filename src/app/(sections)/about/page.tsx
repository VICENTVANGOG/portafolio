import React from 'react';
import SkillsCarousel from '@/components/carrucel/carrucel'; 

const Bio: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-bold mb-4">My Biography</h1>
            <p className="text-xl italic mb-2">Web Developer</p>
            <p className="mb-4">
            Frontend developer with a passion for transforming ideas into unique digital experiences. Specialized in React, TypeScript, Next.js and CSS, I create interactive and efficient interfaces with HTML and manage data with MySQL. I excel at solving complex problems and collaborating effectively with diverse teams. My soft skills, such as clear communication, adaptability and critical thinking, complement my technical expertise. Always looking for new challenges and opportunities to learn and grow in Frontend development,
            </p>
            <div className="space-y-2 mb-6">
              <div>
                <p>UI Designer</p>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="bg-white h-2.5 rounded-full" style={{ width: '20%' }}></div>
                </div>
              </div>
              <div>
                <p>Development</p>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="bg-white h-2.5 rounded-full" style={{ width: '30%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="w-80 h-80 bg-gray-700 flex items-center justify-center text-center text-white rounded-lg">
              <img src="https://kevinmejia.com.co/img/gifDeveloper.gif" alt="Developer Gif" />
            </div>
          </div>
        </div>
      </div>

      <SkillsCarousel />
    </div>
  );
};

export default Bio;

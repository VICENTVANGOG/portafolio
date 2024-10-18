import React from 'react';

export default function Bio() {
  return (
    <div className="bg-purple-900 text-white min-h-screen" id="about">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">My Biography</h1>
              <p className="text-xl font-semibold text-purple-300">Web Developer</p>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Frontend developer with a passion for transforming ideas into unique digital experiences. Specialized in React, TypeScript, Next.js and CSS, I create interactive and efficient interfaces with HTML and manage data with MySQL. I excel at solving complex problems and collaborating effectively with diverse teams. My soft skills, such as clear communication, adaptability and critical thinking, complement my technical expertise. Always looking for new challenges and opportunities to learn and grow in Frontend development.
            </p>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold mb-4">Skills Overview</h2>
              <div>
                <p className="mb-1">UI Designer</p>
                <div className="w-full bg-purple-700 rounded-full h-2">
                  <div className="bg-purple-300 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: '20%' }}></div>
                </div>
              </div>
              <div>
                <p className="mb-1">Frontend Development</p>
                <div className="w-full bg-purple-700 rounded-full h-2">
                  <div className="bg-purple-300 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: '30%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
          <svg className="w-full h-auto max-w-md" viewBox="0 0 200 200">
                <defs>
                    <clipPath id="circleClip">
                    <circle cx="100" cy="100" r="40" />
                    </clipPath>
                </defs>

                <circle cx="100" cy="100" r="80" fill="none" stroke="#D8B4FE" strokeWidth="4">
                    <animate attributeName="r" from="0" to="80" dur="2s" begin="0s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="1" to="0" dur="2s" begin="0s" repeatCount="indefinite" />
                </circle>
                <circle cx="100" cy="100" r="60" fill="none" stroke="#A78BFA" strokeWidth="4">
                    <animate attributeName="r" from="0" to="60" dur="2s" begin="0.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="1" to="0" dur="2s" begin="0.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="100" cy="100" r="40" fill="#7C3AED">
                    <animate attributeName="r" from="30" to="40" dur="1s" begin="0s" repeatCount="indefinite" />
                </circle>
                
                <image
                    href="https://stickerly.pstatic.net/sticker_pack/Rvwdb0pKz2zwosljmBZ1w/BS7NHK/4/11551a2a-4599-4fb8-9532-4f67748f6825.png"
                    x="50"
                    y="50"
                    height="100"
                    width="100"
                    clipPath="url(#circleClip)"
                />
                </svg>

          </div>
        </div>
      </div>
         
    </div>
  );
}
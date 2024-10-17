import React, { useState } from 'react';
import { Download, MessageCircle, Instagram, Facebook, Linkedin, Github } from 'lucide-react';

export default function About() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const iconComponents = [
    { name: "instagram", component: Instagram, hoverColor: "text-pink-500", link: "https://www.instagram.com/jmiguelbarrientos/" },
    { name: "facebook", component: Facebook, hoverColor: "text-blue-500", link: "https://www.facebook.com/josemiguel.barrientos.96/" },
    { name: "linkedin", component: Linkedin, hoverColor: "text-blue-700", link: "https://www.linkedin.com/in/jose-miguel-barrientos-rivera-245935213/" },
    { name: "github", component: Github, hoverColor: "text-gray-500", link: "https://github.com/VICENTVANGOG" },
  ];

  const handleIconHover = (iconName: string | null) => {
    setHoveredIcon(iconName);
  };

  return (
    <div className="bg-purple-900 text-white min-h-screen flex items-center justify-center p-8">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h2 className="text-2xl mb-2">Hello, My name is</h2>
            <h1 className="text-5xl font-bold mb-4">Jose Miguel,</h1>
            <p className="text-2xl mb-6">I'm a Frontend Developer.</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <button className="bg-yellow-400 text-purple-900 hover:bg-yellow-500 py-3 px-6 rounded">
                <Download className="mr-2 h-5 w-5" /> Download CV
              </button>
              <button className="border-white text-white hover:bg-white hover:text-purple-900 py-3 px-6 rounded">
                <MessageCircle className="mr-2 h-5 w-5" /> Let's talk
              </button>
            </div>
            <div className="flex space-x-6 mt-4">
              {iconComponents.map(({ name, component: Icon, hoverColor, link }) => (
                <a href={link} target="_blank" rel="noopener noreferrer" key={name}>
                  <Icon
                    className={`w-8 h-8 cursor-pointer transition-colors duration-200 ${
                      hoveredIcon === name ? hoverColor : "text-white"
                    }`}
                    onMouseEnter={() => handleIconHover(name)}
                    onMouseLeave={() => handleIconHover(null)}
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="https://stickerly.pstatic.net/sticker_pack/Rvwdb0pKz2zwosljmBZ1w/BS7NHK/4/11551a2a-4599-4fb8-9532-4f67748f6825.png"
              alt="Jose Miguel"
              className="rounded-full border-4 border-yellow-400"
              style={{
                width: '400px',
                height: '400px',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

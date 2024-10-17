"use client"

import { useState } from "react"
import { Instagram, Facebook, Twitter, Linkedin, Github } from "lucide-react"

export default function Component() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)

  const iconComponents = [
    { name: "instagram", component: Instagram, hoverColor: "text-pink-500", link: "https://www.instagram.com/jmiguelbarrientos/" },
    { name: "facebook", component: Facebook, hoverColor: "text-blue-500", link: "https://www.facebook.com/josemiguel.barrientos.96/" },
    { name: "linkedin", component: Linkedin, hoverColor: "text-blue-700", link: "https://www.linkedin.com/in/jose-miguel-barrientos-rivera-245935213/" },
    { name: "github", component: Github, hoverColor: "text-gray-500", link: "https://github.com/VICENTVANGOG" },
  ]

  const handleIconHover = (iconName: string | null) => {
    setHoveredIcon(iconName)
  }

  return (
    <div className="flex flex-col md:flex-row bg-black text-white min-h-screen">
      <div className="md:w-1/2 relative">
        <img
          className="object-cover w-10/12 ml-40 mt-12 "
          height="100"
          src="/perfil.jpeg"
          style={{
            aspectRatio: "600/600",
            objectFit: "cover",
          }}
        />
      </div>
      <div className="md:w-1/2 p-8 flex flex-col justify-center">
        <h2 className="text-2xl mb-4">Hello,</h2>
        <h1 className="text-5xl font-bold mb-6">I'm Web Development</h1>
        <ul className="mb-8 space-y-2">
          <li>• Web Designer</li>
          <li>• Web Development</li>
        </ul>
        <div className="flex space-x-4">
          {iconComponents.map(({ name, component: Icon, hoverColor, link }) => (
            <a href={link} target="_blank" rel="noopener noreferrer" key={name}>
              <Icon
                className={`w-6 h-6 cursor-pointer transition-colors duration-200 ${
                  hoveredIcon === name ? hoverColor : "text-white"
                }`}
                onMouseEnter={() => handleIconHover(name)}
                onMouseLeave={() => handleIconHover(null)}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

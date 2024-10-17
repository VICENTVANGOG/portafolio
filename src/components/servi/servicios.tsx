import React from 'react';
import { Pen, Code } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

const services: Service[] = [
  {
    icon: <Pen className="w-12 h-12 text-yellow-400" />, 
    title: "Creative Ui/Ux design",
    items: [
      "Visual identity & Logo",
      "Printed materials design",
      "UI-UX interface design",
      "Custom illustrations & infographics (brochures, leaflets, posters)"
    ]
  },
  {
    icon: <Code className="w-12 h-12 text-yellow-400" />,
    title: "Interactive frontend development",
    items: [
      "Creation of responsive websites",
      "HTML, CSS, & JavaScript, TypeScript, React, Next.js",
      "Website performance & accessibility optimization"
    ]
  },
];

const ServiceCard: React.FC<Service> = ({ icon, title, items }) => (
  <div className="bg-purple-900 p-6 rounded-lg shadow-md transform transition-transform hover:scale-105"> 
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="ml-4 text-xl font-semibold text-yellow-400">{title}</h3> 
    </div>
    <ul className="text-md text-white"> 
      {items.map((item, index) => (
        <li key={index} className="mb-2">• {item}</li>
      ))}
    </ul>
  </div>
);

const MyServices: React.FC = () => {
  return (
    <div className="bg-purple-950 flex items-center justify-center py-2"> 
      <div className="max-w-6xl w-full p-8"> 
        <h2 className="text-4xl font-bold text-center mb-8 text-yellow-400">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"> 
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyServices;

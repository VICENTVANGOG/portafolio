import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface WorkItem {
  title: string;
  image: string;
  link: string;
  description: string;
}

const workItems: WorkItem[] = [
  { title: 'RiwiShop', image: '/riwiShop.png', link: 'https://github.com/VICENTVANGOG/prueba-de-desempe-o-.git', description: 'Ecomerce' },
  { title: 'Pawhome', image: '/pawhome.png', link: 'https://pawhome.vercel.app/', description: 'adoption center' },
  { title: 'todo list', image: '/tareas.png', link: 'https://github.com/VICENTVANGOG/crud-post-.git', description: 'gestor de tareas' },
  { title: 'pruductIn', image: '/gestorproductos.png', link: 'https://github.com/jucrojasba/uno.git', description: 'gestor de productos' },
  { title: 'Books', image: '/libro.png', link: 'https://github.com/VICENTVANGOG/use-api-books.git', description: 'Api creacion de libros' },
  { title: 'Flor', image: '/flor.png', link: 'https://flor-amarilla-six.vercel.app/', description: 'flor para regalar' },
];

const PortfolioItem: React.FC<WorkItem> = ({ title, image, link, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={link} passHref>
      <div 
        className="relative rounded-lg overflow-hidden cursor-pointer transition-all duration-300 transform hover:scale-105"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={image}
          alt={title}
          width={300}
          height={200}
          layout="responsive"
          className="object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h2 className="text-white text-xl font-semibold">{title}</h2>
        </div>
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 transition-opacity duration-300">
            <p className="text-white text-center">{description}</p>
          </div>
        )}
      </div>
    </Link>
  );
};

const PortfolioGrid: React.FC = () => {
  return (
    <div className="bg-purple-900 p-8" id="my-work">
      <h1 className="text-4xl font-bold text-center mb-8 text-yellow-400">My WORK</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {workItems.map((item, index) => (
          <PortfolioItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioGrid;
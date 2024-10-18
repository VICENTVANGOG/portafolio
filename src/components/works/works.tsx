import React, { useState } from 'react';
import Link from 'next/link';

interface WorkItem {
  title: string;
  image: string;
  link: string;
  description: string;
  techImages: string[];
}

const workItems: WorkItem[] = [
  {
    title: 'RiwiShop',
    image: '/riwiShop.png',
    link: 'https://riwi-shop-black.vercel.app/',
    description: 'E-commerce',
    techImages: [
      'https://techblog.istyle.co.jp/wp-content/uploads/2021/12/typescript.png',
      'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.png', 
      'https://pluginicons.craft-cdn.com/scssqTY8srJEesn2VFiUV73mUCyRIZsfXfDj2eOY.svg?1528091210' 
    ],
  },
  {
    title: 'Pawhome',
    image: '/pawhome.png',
    link: 'https://pawhome.vercel.app/',
    description: 'Adoption center',
    techImages: [
      'https://techblog.istyle.co.jp/wp-content/uploads/2021/12/typescript.png', 
      'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.png', 
      'https://pluginicons.craft-cdn.com/scssqTY8srJEesn2VFiUV73mUCyRIZsfXfDj2eOY.svg?1528091210' 
    ],
  },
  {
    title: 'Todo List',
    image: '/tareas.png',
    link: 'https://list-gray-xi.vercel.app/',
    description: 'Gestor de tareas',
    techImages: [
      'https://techblog.istyle.co.jp/wp-content/uploads/2021/12/typescript.png', 
      'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.png', 
      'https://cdn-icons-png.flaticon.com/512/919/919826.png' 
    ],
  },
  {
    title: 'ProductIn',
    image: '/gestorproductos.png',
    link: 'https://github.com/jucrojasba/uno.git',
    description: 'Gestor de productos',
    techImages: [
      'https://techblog.istyle.co.jp/wp-content/uploads/2021/12/typescript.png', 
      'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.png', 
      'https://cdn-icons-png.flaticon.com/512/919/919826.png' 
    ],
  },
  {
    title: 'Books',
    image: '/libro.png',
    link: 'https://github.com/VICENTVANGOG/use-api-books.git',
    description: 'API creación de libros',
    techImages: [
      'https://techblog.istyle.co.jp/wp-content/uploads/2021/12/typescript.png', 
      'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.png', 
      'https://cdn-icons-png.flaticon.com/512/919/919826.png' 
    ],
  },
  {
    title: 'Flor',
    image: '/flor.png',
    link: 'https://flor-amarilla-six.vercel.app/',
    description: 'Flor para regalar',
    techImages: [
      'https://techblog.istyle.co.jp/wp-content/uploads/2021/12/typescript.png', 
      'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.png', 
      'https://cdn-icons-png.flaticon.com/512/919/919826.png' 
    ],
  },
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
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-auto"
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
          <div key={index}>
            <PortfolioItem {...item} />
            <div className="flex flex-wrap gap-2 mt-2">
              {item.techImages.map((img, techIndex) => (
                <img key={techIndex} src={img} alt={`Tech logo ${techIndex}`} className="h-6 w-6" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioGrid;

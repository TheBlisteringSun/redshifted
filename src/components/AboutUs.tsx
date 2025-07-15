import React, { useState } from 'react';
import { Users, Award, Target, Heart } from 'lucide-react';

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  stats: string;
  gradient: string;
}

const AboutUsCarousel = () => {
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      id: 1,
      title: "Our Story",
      description: "Founded with a vision to transform the industry, we've been delivering exceptional solutions that make a real difference. Our journey began with a simple idea: to create meaningful connections between innovation and real-world impact.",
      image: "/api/placeholder/400/300",
      icon: <Users className="w-8 h-8 text-blue-600" />,
      stats: "Founded in 2020",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Our Mission",
      description: "We're dedicated to empowering businesses and individuals through cutting-edge technology and personalized service. Every solution we create is designed to exceed expectations and drive sustainable growth.",
      image: "/api/placeholder/400/300",
      icon: <Target className="w-8 h-8 text-green-600" />,
      stats: "500+ Projects Completed",
      gradient: "from-green-500 to-green-600"
    },
    {
      id: 3,
      title: "Our Values",
      description: "Integrity, innovation, and excellence guide everything we do. We believe in building lasting relationships based on trust, transparency, and mutual respect with every client we serve.",
      image: "/api/placeholder/400/300",
      icon: <Heart className="w-8 h-8 text-red-600" />,
      stats: "50+ Team Members",
      gradient: "from-red-500 to-red-600"
    },
    {
      id: 4,
      title: "Our Achievements",
      description: "Recognition for our outstanding work has come from industry leaders and satisfied clients worldwide. These accolades reflect our commitment to excellence and continuous improvement.",
      image: "/api/placeholder/400/300",
      icon: <Award className="w-8 h-8 text-purple-600" />,
      stats: "25+ Awards Won",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      id: 5,
      title: "Our Things",
      description: "We are Redshifted",
      image: "/api/placeholder/400/300",
      icon: <Award className="w-8 h-8 text-purple-600" />,
      stats: "Redshifted",
      gradient: "from-purple-500 to-purple-600"
    }
  ];

  // Duplicate slides for seamless loop
  const duplicatedSlides = [...slides, ...slides];

  const Card = ({ slide }: { slide: Slide }) => (
    <div className="flex-shrink-0 w-72 sm:w-80 md:w-96 mx-3 sm:mx-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {/* Image Section */}
      <div className="relative h-52 sm:h-56 md:h-64 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} opacity-20`}></div>
        <img
          src={slide.image}
          alt={slide.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
          {slide.icon}
        </div>
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
          <span className="text-xs sm:text-sm font-semibold text-gray-800">{slide.stats}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3">
          {slide.title}
        </h3>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed line-clamp-4">
          {slide.description}
        </p>
      </div>
    </div>
  );

  return (
    <section
      id="aboutus"
      className="px-4 py-16 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
          About Us
        </h2>
        
        {/* Scrolling Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays for Smooth Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 md:w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 md:w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling Track */}
          <div 
            className="flex"
            style={{
              animationPlayState: isPaused ? 'paused' : 'running',
              animation: 'scroll 30s linear infinite'
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {duplicatedSlides.map((slide, index) => (
              <Card key={`${slide.id}-${index}`} slide={slide} />
            ))}
          </div>
        </div>

        {/* Control Hint */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Hover over the cards to pause scrolling
          </p>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default AboutUsCarousel;
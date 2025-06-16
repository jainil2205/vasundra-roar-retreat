import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Main background images (1-8 for greenery/nature views)
  const backgroundImages = [
    "/assets/Original photos/1.jpg",
    "/assets/Original photos/2.jpg",
    "/assets/Original photos/3.JPG",
    "/assets/Original photos/4.JPG",
    "/assets/Original photos/5.JPG",
    "/assets/Original photos/6.JPG",
    "/assets/Original photos/7.JPG",
    "/assets/Original photos/8.JPG"
  ];

  // Center showcase image
  const centerImage = "/assets/Original photos/9.JPG";

  // Night view images
  const nightImages = [
    "/assets/Original photos/10.jpg",
    "/assets/Original photos/11.jpg"
  ];

  // Food court images
  const foodImages = [
    "/assets/Original photos/12.jpg",
    "/assets/Original photos/13.JPG",
    "/assets/Original photos/14.JPG"
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, backgroundImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <Navbar />
      
      {/* Main Background Slideshow */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('${image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        ))}
      </div>

      {/* Slideshow Controls */}
      <div className="absolute top-24 right-4 z-20 flex flex-col space-y-2">
        <button
          onClick={prevImage}
          className="bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={toggleAutoPlay}
          className="bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all"
        >
          {isAutoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </button>
        <button
          onClick={nextImage}
          className="bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-white scale-125' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in drop-shadow-lg">
              Vasundra Nature Park
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in drop-shadow-md">
              Where Wildlife Meets Wonder - Experience the Majesty of Lions in Their Natural Habitat
            </p>
          </div>

          {/* Center Showcase Image */}
          <div className="mb-8 animate-fade-in">
            <div className="relative inline-block">
              <img 
                src={centerImage} 
                alt="Vasundra Nature Park Showcase"
                className="w-80 h-48 md:w-96 md:h-56 object-cover rounded-xl shadow-2xl border-4 border-white"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-x-4 mb-12 animate-fade-in">
            <Link
              to="/attractions"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 inline-block shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Explore Attractions
            </Link>
            <Link
              to="/rooms"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-green-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 inline-block shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Book Your Stay
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Gallery Preview */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {/* Night Views */}
            <div className="space-y-2">
              <h3 className="text-white text-sm font-semibold">Night Views</h3>
              <div className="flex space-x-2">
                {nightImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Night view ${index + 1}`}
                    className="w-16 h-12 md:w-20 md:h-14 object-cover rounded-lg border-2 border-white/30 hover:border-white/70 transition-all cursor-pointer hover:scale-105"
                  />
                ))}
              </div>
            </div>

            {/* Food Court */}
            <div className="space-y-2">
              <h3 className="text-white text-sm font-semibold">Food Court</h3>
              <div className="flex space-x-2">
                {foodImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Food court ${index + 1}`}
                    className="w-16 h-12 md:w-20 md:h-14 object-cover rounded-lg border-2 border-white/30 hover:border-white/70 transition-all cursor-pointer hover:scale-105"
                  />
                ))}
              </div>
            </div>

            {/* Quick Links */}
            {/* <div className="col-span-2 md:col-span-3 flex justify-end items-center space-x-4">
              <div className="text-right">
                <p className="text-white/80 text-sm mb-2">Experience More</p>
                <div className="flex space-x-2">
                  <Link 
                    to="/gallery" 
                    className="text-white hover:text-green-300 text-sm border border-white/30 hover:border-green-300 px-3 py-1 rounded transition-all"
                  >
                    Gallery
                  </Link>
                  <Link 
                    to="/dining" 
                    className="text-white hover:text-green-300 text-sm border border-white/30 hover:border-green-300 px-3 py-1 rounded transition-all"
                  >
                    Dining
                  </Link>
                  <Link 
                    to="/night-safari" 
                    className="text-white hover:text-green-300 text-sm border border-white/30 hover:border-green-300 px-3 py-1 rounded transition-all"
                  >
                    Night Safari
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
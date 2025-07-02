import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Play, Pause, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [showGallery, setShowGallery] = useState(true);
  const slideTimerRef = useRef(null);

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

  // Check for mobile viewport
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
      setShowGallery(window.innerWidth >= 640);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // Auto-slide functionality with reset on manual navigation
  useEffect(() => {
    if (isAutoPlaying) {
      clearTimeout(slideTimerRef.current);
      slideTimerRef.current = setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
      }, 5000);
    }
    return () => clearTimeout(slideTimerRef.current);
  }, [isAutoPlaying, currentImageIndex, backgroundImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const handleImagePreviewClick = (imageUrl) => {
    // Find the main background image that matches and switch to it
    const index = backgroundImages.findIndex(img => img === imageUrl);
    if (index !== -1) {
      setCurrentImageIndex(index);
    }
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <Navbar />
      
      {/* Main Background Slideshow */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: index === currentImageIndex ? 1 : 0,
              scale: index === currentImageIndex ? 1 : 1.05,
            }}
            transition={{ 
              opacity: { duration: 1.2, ease: "easeInOut" },
              scale: { duration: 8, ease: "easeOut" }
            }}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url('${image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              zIndex: index === currentImageIndex ? 1 : 0
            }}
          />
        ))}
      </div>

      {/* Slideshow Controls - Positioned differently on mobile vs desktop */}
      <div className={`absolute z-20 ${
        isMobile 
          ? 'bottom-24 right-4 flex flex-col space-y-2' 
          : 'top-1/2 -translate-y-1/2 w-full px-6 flex justify-between'
      }`}>
        {!isMobile && (
          <motion.button
            onClick={prevImage}
            className="bg-black/40 hover:bg-black/60 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </motion.button>
        )}

        {isMobile && (
          <>
            <motion.button
              onClick={prevImage}
              className="bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-all shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={toggleAutoPlay}
              className="bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-all shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isAutoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </motion.button>
            <motion.button
              onClick={nextImage}
              className="bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-all shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </>
        )}
        
        {!isMobile && (
          <motion.button
            onClick={nextImage}
            className="bg-black/40 hover:bg-black/60 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </motion.button>
        )}
      </div>

      {/* Pause/Play Button for Desktop */}
      {!isMobile && (
        <motion.button
          onClick={toggleAutoPlay}
          className="absolute top-24 right-6 z-20 bg-black/40 hover:bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          title={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isAutoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </motion.button>
      )}

      {/* Slide Indicators */}
      <div className="absolute bottom-16 sm:bottom-24 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {backgroundImages.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
        <div className="text-center text-white max-w-6xl mx-auto">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 drop-shadow-lg">
              Vasundra Nature Park
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 drop-shadow-md max-w-3xl mx-auto">
              Where Wildlife Meets Wonder - Experience the Majesty of Lions in Their Natural Habitat
            </p>
          </motion.div>

          {/* Center Showcase Image */}
          <motion.div 
            className="mb-6 md:mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative inline-block">
              <img 
                src={centerImage} 
                alt="Vasundra Nature Park Showcase"
                className="w-64 h-36 sm:w-80 sm:h-48 md:w-96 md:h-56 object-cover rounded-xl shadow-2xl border-4 border-white"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link
              to="/attractions"
              className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center"
            >
              Explore Attractions
            </Link>
            <Link
              to="/rooms"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-green-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center"
            >
              Book Your Stay 
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gallery Preview with Toggle for Mobile */}
      {isMobile && (
        <motion.button
          onClick={() => setShowGallery(!showGallery)}
          className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-30 bg-black/40 text-white px-4 py-1 rounded-t-lg flex items-center space-x-1"
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-xs">{showGallery ? 'Hide Gallery' : 'Show Gallery'}</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${showGallery ? 'rotate-180' : ''}`} />
        </motion.button>
      )}

      {/* Bottom Gallery Preview */}
      <AnimatePresence>
        {showGallery && (
          <motion.div 
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent pt-8 pb-4 px-4 z-20"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 gap-4">
                {/* Night Views */}
                <div className="space-y-2">
                  <h3 className="text-white text-xs sm:text-sm font-semibold">Night Views</h3>
                  <div className="flex flex-wrap gap-2">
                    {nightImages.map((image, index) => (
                      <motion.div 
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <img
                          src={image}
                          alt={`Night view ${index + 1}`}
                          onClick={() => handleImagePreviewClick(image)}
                          className="w-16 h-12 md:w-20 md:h-14 object-cover rounded-lg border-2 border-white/40 hover:border-white/90 transition-all cursor-pointer"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Food Court */}
                <div className="space-y-2">
                  <h3 className="text-white text-xs sm:text-sm font-semibold">Food Court</h3>
                  <div className="flex flex-wrap gap-2">
                    {foodImages.map((image, index) => (
                      <motion.div 
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <img
                          src={image}
                          alt={`Food court ${index + 1}`}
                          onClick={() => handleImagePreviewClick(image)}
                          className="w-16 h-12 md:w-20 md:h-14 object-cover rounded-lg border-2 border-white/40 hover:border-white/90 transition-all cursor-pointer"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Scroll down indicator */}
      <motion.div 
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1, duration: 1 },
          y: { repeat: Infinity, duration: 1.5 } 
        }}
      >
        <div className="flex flex-col items-center">
          <span className="text-xs mb-1">Scroll Down</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </motion.div>
    </div>
  );
};
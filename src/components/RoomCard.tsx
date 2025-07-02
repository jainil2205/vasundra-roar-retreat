import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const RoomCard = ({ room }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === room.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === 0 ? room.images.length - 1 : prev - 1
    );
  };

  const handleViewDetails = () => {
    // First navigate to home
    // Then scroll to bottom after a small delay to ensure page loads
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    }, 100);
  };

  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-lg border border-green-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Carousel */}
      <div className="relative aspect-[16/10] overflow-hidden">
        {room.images.map((image, idx) => (
          <motion.div
            key={idx}
            className="absolute inset-0"
            initial={false}
            animate={{ 
              opacity: idx === currentImageIndex ? 1 : 0,
              scale: idx === currentImageIndex ? 1 : 1.05 
            }}
            transition={{ duration: 0.7 }}
          >
            <img 
              src={image} 
              alt={`${room.name} - Image ${idx + 1}`} 
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
        
        {/* Navigation arrows - only show on hover or mobile */}
        <div className={`absolute inset-0 flex items-center justify-between px-4 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0 sm:opacity-0'}`}>
          <button 
            onClick={prevImage}
            className="bg-black bg-opacity-30 hover:bg-opacity-50 text-white w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
            aria-label="Previous image"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextImage}
            className="bg-black bg-opacity-30 hover:bg-opacity-50 text-white w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
            aria-label="Next image"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Image indicators */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
          {room.images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImageIndex(idx);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50'}`}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
        
        {/* Price tag */}
        <div className="absolute top-4 right-4 bg-green-700 text-white px-3 py-1 rounded-full font-medium text-sm shadow-md">
          ${room.price}/night
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl sm:text-2xl font-bold text-green-900">{room.name}</h3>
          <div className="flex items-center text-sm">
            <svg className="w-5 h-5 text-green-700 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
            <span>{room.capacity} {room.capacity === 1 ? 'Person' : 'People'}</span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-3">{room.description}</p>
        
        {/* Amenities */}
        <div className="mb-5">
          <h4 className="text-sm font-semibold text-green-800 mb-2">Room Amenities</h4>
          <div className="flex flex-wrap gap-2">
            {room.amenities.slice(0, 4).map((amenity, idx) => (
              <span 
                key={idx} 
                className="bg-green-50 text-green-700 text-xs px-2.5 py-1 rounded-full inline-flex items-center"
              >
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {amenity}
              </span>
            ))}
            {room.amenities.length > 4 && (
              <span className="bg-green-50 text-green-700 text-xs px-2.5 py-1 rounded-full">
                +{room.amenities.length - 4} more
              </span>
            )}
          </div>
        </div>
        
     
      </div>
    </div>
  );
};
import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChevronLeft, ChevronRight, Clock, Sun } from "lucide-react";

// --- Asset Imports (ensure these paths are correct) ---
import heroBg from "../../public/assets/Lions in natural habitat/5.jpg";
import lionSafariImg from "../../public/assets/Lions in natural habitat/1.jpg";
import birdWatchingImg from "../../public/assets/Wildlife/2.jpg";
import photographyTourImg from "../../public/assets/Lions in natural habitat/3.jpg";
import natureWalkImg from "../../public/assets/Lions in natural habitat/4.jpg";

import mango1 from "../../public/assets/Mango Orchards/1.jpg";
import wildlife1 from "../../public/assets/Wildlife/1.jpg";
import wildlife2 from "../../public/assets/Wildlife/2.jpg";
import wildlife3 from "../../public/assets/Wildlife/3.jpg";
import gazebo1 from "../../public/assets/Gazebo/3.jpg";
import flowers1 from "../../public/assets/Flowers n Trees/1.jpg";
import flowers2 from "../../public/assets/Flowers n Trees/2.jpg";

// --- Data with High-Quality Lion Images ---
const attractions = [
  {
    id: 1,
    title: "Lion Safari",
    description: "Experience the thrill of seeing majestic lions in their natural habitat during our guided safari tours.",
    image: lionSafariImg,
    duration: "2-3 hours",
    bestTime: "Early morning & Evening"
  },
  {
    id: 2,
    title: "Bird Watching Safari",
    description: "Discover exotic birds and enjoy photography opportunities with our expert ornithologist guides.",
    image: birdWatchingImg,
    duration: "3-4 hours",
    bestTime: "Early morning"
  },
  {
    id: 3,
    title: "Wildlife Photography Tour",
    description: "Capture stunning photographs of lions, birds, and diverse wildlife with professional photography guides.",
    image: photographyTourImg,
    duration: "4-5 hours",
    bestTime: "Golden hour"
  },
  {
    id: 4,
    title: "Nature Walk with Lions",
    description: "Explore the park's diverse ecosystems and observe lions from safe viewing platforms with experienced guides.",
    image: natureWalkImg,
    duration: "2-3 hours",
    bestTime: "Morning & Evening"
  }
];

const nearbyCardDetails = [
  { label: "Mango Orchards", images: [mango1] },
  { label: "Wildlife", images: [wildlife1, wildlife2, wildlife3] },
  { label: "Gazebo", images: [gazebo1] },
  { label: "Flowers & Trees", images: [flowers1, flowers2] },
];

// --- Re-styled Attraction Card Component ---
const AttractionCard = ({ attraction }) => (
  <div className="group bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
    <div className="md:flex">
      <div className="md:flex-shrink-0">
        <img 
          className="h-56 w-full object-cover md:w-56" 
          src={typeof attraction.image === "string" ? attraction.image : attraction.image.src} 
          alt={attraction.title} 
        />
      </div>
      <div className="p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold text-green-800 group-hover:text-amber-600 transition-colors duration-300">{attraction.title}</h3>
          <p className="mt-2 text-gray-600">{attraction.description}</p>
        </div>
        <div className="mt-4 space-y-2 text-sm">
          <div className="flex items-center text-gray-500">
            <Clock size={16} className="mr-2 text-green-600" />
            <span>Duration: {attraction.duration}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <Sun size={16} className="mr-2 text-amber-500" />
            <span>Best Time: {attraction.bestTime}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- Re-styled Nearby Attractions Carousel Component ---
const NearbyAttractionsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? nearbyCardDetails.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === nearbyCardDetails.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="mt-24 text-center">
      <h2 className="text-4xl font-bold text-green-800 mb-4">Explore Nearby</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
        Our park is surrounded by beautiful natural wonders waiting to be discovered.
      </p>
      <div className="relative max-w-4xl mx-auto">
        <div className="overflow-hidden rounded-2xl shadow-2xl">
          {nearbyCardDetails.map((card, index) => (
            <div key={index} className={`transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}>
              <img
                src={typeof card.images[0] === "string" ? card.images[0] : card.images[0].src}
                alt={card.label}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-8">
                <h3 className="text-white text-3xl font-bold">{card.label}</h3>
              </div>
            </div>
          ))}
        </div>
        <button
          aria-label="Previous Attraction"
          className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-md transition-transform hover:scale-110"
          onClick={handlePrev}
        >
          <ChevronLeft className="w-6 h-6 text-green-800" />
        </button>
        <button
          aria-label="Next Attraction"
          className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-md transition-transform hover:scale-110"
          onClick={handleNext}
        >
          <ChevronRight className="w-6 h-6 text-green-800" />
        </button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {nearbyCardDetails.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${currentIndex === index ? 'bg-white' : 'bg-white/50 hover:bg-white/75'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Main Attractions Page Component ---
const Attractions = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <header className="relative h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transform scale-100 group-hover:scale-110 transition-transform duration-10000 ease-linear"
          style={{ backgroundImage: `url(${typeof heroBg === "string" ? heroBg : heroBg.src})`, animation: 'zoom 20s infinite alternate' }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div>
            <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-2xl">Our Attractions</h1>
            <p className="mt-4 text-xl md:text-2xl max-w-3xl mx-auto">
              Embark on an unforgettable journey and discover the wild heart of nature.
            </p>
          </div>
        </div>
      </header>

      <main className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          {/* Main Attractions Grid */}
          <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {attractions.map((attraction) => (
              <AttractionCard key={attraction.id} attraction={attraction} />
            ))}
          </div>
          
          {/* Nearby Attractions Section */}
          <NearbyAttractionsCarousel />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Attractions;

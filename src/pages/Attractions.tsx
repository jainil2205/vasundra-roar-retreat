import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AttractionCard } from "@/components/AttractionCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ---- Asset Imports (update these paths to match your project) ----
import mango1 from "../../public/assets/Mango Orchards/1.jpg";
// import mango2 from "../../public/assets/Mango Orchards/";
// import mango3 from "../../public/assets/Mango Orchards/3.jpg";
// import mango4 from "../../public/assets/Mango Orchards/4.jpg";
import wildlife1 from "../../public/assets/Wildlife/1.jpg";
import wildlife2 from "../../public/assets/Wildlife/2.jpg";
import wildlife3 from "../../public/assets/Wildlife/3.jpg";
import wildlife4 from "../../public/assets/Wildlife/4.jpg";
import gazebo1 from "../../public/assets/Gazebo/3.jpg";
import gazebo2 from "../../public/assets/Gazebo/4.jpg";
import flowers1 from "../../public/assets/Flowers n Trees/1.jpg";
import flowers2 from "../../public/assets/Flowers n Trees/2.jpg";
import flower3 from "../../public/assets/Flowers n Trees/3.jpg";
import flowers4 from "../../public/assets/Flowers n Trees/4.jpg";
import flowers5 from "../../public/assets/Flowers n Trees/5.jpg";

// ---- Data ----
const attractions = [
  {
    id: 1,
    title: "Lion Safari",
    description: "Experience the thrill of seeing majestic lions in their natural habitat during our guided safari tours.",
    image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=600&h=400&fit=crop",
    duration: "2-3 hours",
    bestTime: "Early morning & Evening"
  },
  {
    id: 2,
    title: "Bird Watching Safari",
    description: "Discover exotic birds and enjoy photography opportunities with our expert ornithologist guides.",
    image: "https://images.unsplash.com/photo-1441057206919-63d19fac2369?w=600&h=400&fit=crop",
    duration: "3-4 hours",
    bestTime: "Early morning"
  },
  {
    id: 3,
    title: "Wildlife Photography Tour",
    description: "Capture stunning photographs of lions, birds and diverse wildlife with professional photography guides.",
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=600&h=400&fit=crop",
    duration: "4-5 hours",
    bestTime: "Golden hour"
  },
  {
    id: 4,
    title: "Nature Walk with Lions",
    description: "Explore the park's diverse ecosystems and observe lions from safe viewing platforms with experienced guides.",
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=600&h=400&fit=crop",
    duration: "2-3 hours",
    bestTime: "Morning & Evening"
  }
];

const nearbyCardDetails = [
  {
    label: "Mango Orchards",
    images: [mango1],
  },
  {
    label: "Wildlife",
    images: [wildlife1, wildlife2, wildlife3, wildlife4],
  },
 
  {
    label: "Gazebo",
    images: [gazebo1, gazebo2],
  },
  {
    label: "Flowers",
    images: [flowers1, flowers2, flower3, flowers4, flowers5],
  },

];

// ---- Nearby Attractions Card Component ----
const NearbyAttractionCards = () => {
  const [currentIndices, setCurrentIndices] = useState<number[]>(
    Array(nearbyCardDetails.length).fill(0)
  );

  const handlePrev = (cardIdx: number) => {
    setCurrentIndices((prev) =>
      prev.map((cur, idx) =>
        idx === cardIdx
          ? cur === 0
            ? nearbyCardDetails[cardIdx].images.length - 1
            : cur - 1
          : cur
      )
    );
  };

  const handleNext = (cardIdx: number) => {
    setCurrentIndices((prev) =>
      prev.map((cur, idx) =>
        idx === cardIdx
          ? cur === nearbyCardDetails[cardIdx].images.length - 1
            ? 0
            : cur + 1
          : cur
      )
    );
  };

  return (
    <div className="space-y-6 mt-16">
      <h2 className="text-3xl font-bold text-green-700 text-center">Nearby Attractions</h2>
      <p className="text-gray-600 text-center max-w-2xl mx-auto">
        Explore Mango Orchards, Wildlife, Kids Pool, Gazebo, and more in serene nature.
      </p>
      <div className="flex overflow-x-auto space-x-6 py-4 px-2 scrollbar-hide">
        {nearbyCardDetails.map(({ label, images }, cardIdx) => (
          <div
            key={label}
            className="min-w-[250px] rounded-xl shadow-lg bg-white overflow-hidden flex-shrink-0 relative"
          >
            <div className="relative w-full h-48 flex items-center justify-center bg-gray-100">
              <img
                src={
                  // For imported assets, .src is required in Next.js. For CRA/Vite use the direct import.
                  typeof images[currentIndices[cardIdx]] === "string"
                    ? images[currentIndices[cardIdx]]
                    : (images[currentIndices[cardIdx]] as any).src
                }
                alt={`${label} ${currentIndices[cardIdx] + 1}`}
                className="w-full h-48 object-cover"
              />
              {images.length > 1 && (
                <>
                  <button
                    aria-label="Previous"
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-green-100 rounded-full p-1"
                    onClick={() => handlePrev(cardIdx)}
                  >
                    <ChevronLeft className="w-5 h-5 text-green-800" />
                  </button>
                  <button
                    aria-label="Next"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-green-100 rounded-full p-1"
                    onClick={() => handleNext(cardIdx)}
                  >
                    <ChevronRight className="w-5 h-5 text-green-800" />
                  </button>
                  <span className="absolute bottom-2 right-3 bg-black/50 text-white text-xs rounded px-2 py-0.5">
                    {currentIndices[cardIdx] + 1}/{images.length}
                  </span>
                </>
              )}
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-green-800">{label}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ---- Main Attractions Page ----
const Attractions = () => {
  return (
    <div className="min-h-screen bg-green-50">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 text-green-800">Park Attractions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the wonders of Vasundra Nature Park through our exciting attractions and activities
            </p>
          </div>
          {/* Main Attractions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {attractions.map((attraction) => (
              <AttractionCard key={attraction.id} attraction={attraction} />
            ))}
          </div>
          {/* Nearby Attractions Card Row */}
          <NearbyAttractionCards />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Attractions;
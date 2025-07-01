import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Importing images for each card (adjust the paths as per your project structure)
import mango1 from "/public/assets/Nearby/mango1.jpg";
import mango2 from "/public/assets/Nearby/mango2.jpg";
import wildlife1 from "/public/assets/Nearby/wildlife1.jpg";
import wildlife2 from "/public/assets/Nearby/wildlife2.jpg";
import pool1 from "/public/assets/Nearby/pool1.jpg";
import pool2 from "/public/assets/Nearby/pool2.jpg";
import gazebo1 from "/public/assets/Nearby/gazebo1.jpg";
import gazebo2 from "/public/assets/Nearby/gazebo2.jpg";
import flowers1 from "/public/assets/Nearby/flowers1.jpg";
import flowers2 from "/public/assets/Nearby/flowers2.jpg";
import trees1 from "/public/assets/Nearby/trees1.jpg";
import trees2 from "/public/assets/Nearby/trees2.jpg";
import more1 from "/public/assets/Nearby/extra1.jpg";
import more2 from "/public/assets/Nearby/extra2.jpg";

// You may need to adjust import paths depending on where your images are stored
// For Next.js, use /public/assets/.... For Vite/CRA, use src/assets/...

const cardDetails = [
  {
    label: "Mango Orchards",
    images: [mango1, mango2],
  },
  {
    label: "Wildlife",
    images: [wildlife1, wildlife2],
  },
  {
    label: "Kids Swimming Pool",
    images: [pool1, pool2],
  },
  {
    label: "Gazebo",
    images: [gazebo1, gazebo2],
  },
  {
    label: "Flowers",
    images: [flowers1, flowers2],
  },
  {
    label: "Trees",
    images: [trees1, trees2],
  },
  {
    label: "More Nature",
    images: [more1, more2],
  },
];

export const NearbyAttractionCard = () => {
  // Track the current image for each card
  const [currentIndices, setCurrentIndices] = useState<number[]>(Array(cardDetails.length).fill(0));

  const handlePrev = (cardIdx: number) => {
    setCurrentIndices((prev) =>
      prev.map((cur, idx) =>
        idx === cardIdx
          ? cur === 0
            ? cardDetails[cardIdx].images.length - 1
            : cur - 1
          : cur
      )
    );
  };

  const handleNext = (cardIdx: number) => {
    setCurrentIndices((prev) =>
      prev.map((cur, idx) =>
        idx === cardIdx
          ? cur === cardDetails[cardIdx].images.length - 1
            ? 0
            : cur + 1
          : cur
      )
    );
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-green-700 text-center">Nearby Attractions</h2>
      <p className="text-gray-600 text-center max-w-2xl mx-auto">
        Explore Mango Orchards, Wildlife, Kids Pool, Gazebo, and more in serene nature.
      </p>
      <div className="flex overflow-x-auto space-x-6 py-4 px-2 scrollbar-hide">
        {cardDetails.map(({ label, images }, cardIdx) => (
          <div
            key={label}
            className="min-w-[250px] rounded-xl shadow-lg bg-white overflow-hidden flex-shrink-0 relative"
          >
            <div className="relative w-full h-48 flex items-center justify-center bg-gray-100">
              <img
                src={images[currentIndices[cardIdx]]}
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
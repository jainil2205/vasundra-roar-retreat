  import { useState } from "react";
  import { Navbar } from "@/components/Navbar";
  import { Footer } from "@/components/Footer";
  import { MapPin } from "lucide-react";
  import { ChevronLeft, ChevronRight } from "lucide-react";

  // Image imports
  import sunset1 from "../../public/assets/Sunset/1.1.jpg";
  import hanumangala from "../../public/assets/Nearby Attractions/2.jpg";
  import diu from "../../public/assets/Nearby Attractions/3.jpg";
  import tulsiShyam from "../../public/assets/Nearby Attractions/4.jpeg";
  import khodiyarDam1 from "../../public/assets/Nearby Attractions/5.jpg";
  import khodiyarDam from "../../public/assets/Nearby Attractions/7.jpg";

  const nearbyAttractions = [
    {
      name: "Sunset View Point",
      distance: "2 km",
      description:
        "A breathtaking viewpoint offering panoramic sunset vistas. Ideal for photographers and nature lovers. Features 5 unique sunset angles.",
      images: [sunset1],
    },
    {
      name: "Hike to Hanumangala",
      distance: "5 km",
      description:
        "Scenic hiking trail leading to Hanumangala with lush surroundings and serene atmosphere.",
      images: [hanumangala],
    },
    {
      name: "Diu",
      distance: "60 km",
      description:
        "Coastal paradise with historic forts and beautiful beaches. Perfect for day trips.",
      images: [diu],
    },
    {
      name: "Tulsi Shyam Temple",
      distance: "35 km",
      description:
        "Ancient temple surrounded by natural springs, known for its tranquil setting.",
      images: [tulsiShyam],
    },
    {
      name: "Khodiyar Dam",
      distance: "20 km",
      description:
        "Popular picnic spot with a large reservoir and picturesque views.",
      images: [khodiyarDam, khodiyarDam1],
    },
  ];

  // Carousel component for each card
  const ImageCarousel = ({ images, alt }: { images: string[]; alt: string }) => {
    const [current, setCurrent] = useState(0);

    if (!images || images.length === 0) return null;

    const prevImage = (e: React.MouseEvent) => {
      e.stopPropagation();
      setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextImage = (e: React.MouseEvent) => {
      e.stopPropagation();
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
      <div className="relative w-full h-48 flex items-center justify-center bg-gray-100">
        <img
          src={images[current]}
          alt={`${alt} ${current + 1}`}
          className="object-cover w-full h-48"
        />
        {images.length > 1 && (
          <>
            <button
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 hover:bg-white"
              onClick={prevImage}
              aria-label="Previous image"
              type="button"
            >
              <ChevronLeft className="w-6 h-6 text-green-800" />
            </button>
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 hover:bg-white"
              onClick={nextImage}
              aria-label="Next image"
              type="button"
            >
              <ChevronRight className="w-6 h-6 text-green-800" />
            </button>
            <span className="absolute bottom-2 right-4 bg-black/50 text-white text-xs rounded px-2 py-0.5">
              {current + 1}/{images.length}
            </span>
          </>
        )}
      </div>
    );
  };

  const Nearby = () => {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-20 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-4 text-green-800">
                Nearby Attractions
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Extend your wildlife adventure beyond the park with these exciting
                nearby destinations
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {nearbyAttractions.map((attraction, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <ImageCarousel images={attraction.images} alt={attraction.name} />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-green-800">
                        {attraction.name}
                      </h3>
                      <div className="flex items-center text-green-600">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm font-medium">
                          {attraction.distance}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600">{attraction.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  export default Nearby;
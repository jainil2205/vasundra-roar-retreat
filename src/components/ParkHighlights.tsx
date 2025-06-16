
import { Camera, MapPin, Star } from "lucide-react";

export const ParkHighlights = () => {
  const highlights = [
    {
      icon: <Camera className="w-12 h-12 text-green-600" />,
      title: "Lion Safari",
      description: "Get up close with magnificent lions in their natural habitat during our guided safari tours."
    },
    {
      icon: <MapPin className="w-12 h-12 text-green-600" />,
      title: "2000 Acres",
      description: "Explore vast wilderness areas with diverse ecosystems and wildlife conservation efforts."
    },
    {
      icon: <Star className="w-12 h-12 text-green-600" />,
      title: "Premium Stay",
      description: "Comfortable eco-friendly accommodations with stunning views of the natural landscape."
    }
  ];

  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-green-800">Why Choose Vasundra?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the perfect blend of adventure, comfort, and conservation in one of India's premier nature parks
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {highlights.map((highlight, index) => (
            <div key={index} className="text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                {highlight.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-green-800">{highlight.title}</h3>
              <p className="text-gray-600">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

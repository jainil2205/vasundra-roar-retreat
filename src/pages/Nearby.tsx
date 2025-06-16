
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MapPin } from "lucide-react";

const Nearby = () => {
  const nearbyAttractions = [
    {
      name: "Lion Conservation Center",
      distance: "4 km",
      description: "Educational center dedicated to lion conservation efforts and wildlife protection programs",
      image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=400&h=300&fit=crop"
    },
    {
      name: "Avian Research Station",
      distance: "6 km",
      description: "Bird research facility where you can learn about local bird species and conservation efforts",
      image: "https://images.unsplash.com/photo-1441057206919-63d19fac2369?w=400&h=300&fit=crop"
    },
    {
      name: "Wildlife Sanctuary Trail",
      distance: "3 km",
      description: "Extended walking trail through protected wildlife areas with frequent lion and bird sightings",
      image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=400&h=300&fit=crop"
    },
    {
      name: "Nature Photography Workshop",
      distance: "8 km",
      description: "Professional wildlife photography workshops focusing on capturing lions and exotic birds",
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 text-green-800">Nearby Attractions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Extend your wildlife adventure beyond the park with these exciting nearby destinations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {nearbyAttractions.map((attraction, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={attraction.image} 
                  alt={attraction.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-green-800">{attraction.name}</h3>
                    <div className="flex items-center text-green-600">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm font-medium">{attraction.distance}</span>
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

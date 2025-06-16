
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";

export const Hero = () => {
  return (
    <div className="relative h-screen">
      <Navbar />
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=1920&h=1080&fit=crop')`
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in">
              Vasundra Nature Park
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in">
              Where Wildlife Meets Wonder - Experience the Majesty of Lions in Their Natural Habitat
            </p>
            <div className="space-x-4 animate-fade-in">
              <Link
                to="/attractions"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 inline-block"
              >
                Explore Attractions
              </Link>
              <Link
                to="/rooms"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-green-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 inline-block"
              >
                Book Your Stay
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

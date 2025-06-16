
import { Clock, Sun } from "lucide-react";

interface Attraction {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
  bestTime: string;
}

interface AttractionCardProps {
  attraction: Attraction;
}

export const AttractionCard = ({ attraction }: AttractionCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img 
          src={attraction.image} 
          alt={attraction.title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
          {attraction.title}
        </h3>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4">{attraction.description}</p>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{attraction.duration}</span>
          </div>
          <div className="flex items-center">
            <Sun className="w-4 h-4 mr-1" />
            <span>{attraction.bestTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

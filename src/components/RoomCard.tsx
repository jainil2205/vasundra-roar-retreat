import { Users, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface Room {
  id: number;
  name: string;
  description: string;
  images: string[];
  price: number;
  capacity: number;
  amenities: string[];
}

interface RoomCardProps {
  room: Room;
}

export const RoomCard = ({ room }: RoomCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleBooking = () => {
    console.log(`Booking room: ${room.name}`);
    alert(`Booking request for ${room.name} submitted!`);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === room.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? room.images.length - 1 : prev - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Image Carousel */}
      <div className="relative h-64 overflow-hidden group">
        <img 
          src={room.images[currentImageIndex]} 
          alt={`${room.name} - Image ${currentImageIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Navigation Arrows */}
        {room.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}

        {/* Image Indicators */}
        {room.images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {room.images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentImageIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
              />
            ))}
          </div>
        )}

        {/* Image Counter */}
        {room.images.length > 1 && (
          <div className="absolute top-3 right-3 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full text-xs">
            {currentImageIndex + 1} / {room.images.length}
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-green-800 hover:text-green-600 transition-colors">
            {room.name}
          </h3>
          <div className="text-right">
            <div className="text-2xl font-bold text-green-600">${room.price}</div>
            <div className="text-sm text-gray-500">per night</div>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 leading-relaxed">{room.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Users className="w-4 h-4 text-green-600 mr-2" />
            <span className="text-sm text-gray-600">Up to {room.capacity} guests</span>
          </div>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-500 mr-1" />
            <span className="text-sm text-gray-600">4.8</span>
          </div>
        </div>
        
        <div className="mb-6">
          <h4 className="font-semibold text-gray-800 mb-3">Amenities</h4>
          <div className="flex flex-wrap gap-2">
            {room.amenities.map((amenity, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-gradient-to-r from-green-100 to-green-50 text-green-700 text-sm rounded-full border border-green-200 hover:from-green-200 hover:to-green-100 transition-all duration-200"
              >
                {amenity}
              </span>
            ))}
          </div>
        </div>
        
        <button 
          onClick={handleBooking}
          className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

import { Users, Star } from "lucide-react";

interface Room {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  capacity: number;
  amenities: string[];
}

interface RoomCardProps {
  room: Room;
}

export const RoomCard = ({ room }: RoomCardProps) => {
  const handleBooking = () => {
    console.log(`Booking room: ${room.name}`);
    alert(`Booking request for ${room.name} submitted!`);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img 
        src={room.image} 
        alt={room.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-green-800">{room.name}</h3>
          <div className="text-right">
            <div className="text-2xl font-bold text-green-600">${room.price}</div>
            <div className="text-sm text-gray-500">per night</div>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4">{room.description}</p>
        
        <div className="flex items-center mb-4">
          <Users className="w-4 h-4 text-green-600 mr-2" />
          <span className="text-sm text-gray-600">Up to {room.capacity} guests</span>
        </div>
        
        <div className="mb-6">
          <h4 className="font-semibold text-gray-800 mb-2">Amenities:</h4>
          <div className="flex flex-wrap gap-2">
            {room.amenities.map((amenity, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full"
              >
                {amenity}
              </span>
            ))}
          </div>
        </div>
        
        <button 
          onClick={handleBooking}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

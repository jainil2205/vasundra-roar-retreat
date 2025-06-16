
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RoomCard } from "@/components/RoomCard";

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      name: "Lion View Safari Lodge",
      description: "Luxurious accommodation with panoramic views of the lion sanctuary and wildlife area",
      image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=600&h=400&fit=crop",
      price: 180,
      capacity: 4,
      amenities: ["Lion View Balcony", "Private Bathroom", "Safari Telescope", "Mini Bar"]
    },
    {
      id: 2,
      name: "Bird Watcher's Tree House",
      description: "Unique elevated accommodation perfect for bird watching and nature photography",
      image: "https://images.unsplash.com/photo-1441057206919-63d19fac2369?w=600&h=400&fit=crop",
      price: 220,
      capacity: 2,
      amenities: ["Bird Watching Deck", "Telescope", "Forest Canopy View", "Breakfast Included"]
    },
    {
      id: 3,
      name: "Wildlife Family Cottage",
      description: "Spacious cottage with views of grazing wildlife, perfect for families with children",
      image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=600&h=400&fit=crop",
      price: 150,
      capacity: 6,
      amenities: ["Wildlife Viewing Area", "Kitchen", "Garden Access", "Children's Nature Activities"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 text-green-800">Accommodation</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay in comfort while being close to nature. Choose from our range of eco-friendly accommodations with stunning wildlife views
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Rooms;

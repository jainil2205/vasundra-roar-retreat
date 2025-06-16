
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RoomCard } from "@/components/RoomCard";

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      name: "Safari Lodge",
      description: "Luxurious accommodation with panoramic views of the wildlife sanctuary",
      image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=600&h=400&fit=crop",
      price: 150,
      capacity: 4,
      amenities: ["Air Conditioning", "Private Bathroom", "Balcony", "Mini Bar"]
    },
    {
      id: 2,
      name: "Tree House Suite",
      description: "Unique elevated accommodation surrounded by nature",
      image: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?w=600&h=400&fit=crop",
      price: 200,
      capacity: 2,
      amenities: ["Eco-friendly", "Private Deck", "Forest View", "Breakfast Included"]
    },
    {
      id: 3,
      name: "Family Cottage",
      description: "Spacious cottage perfect for families with children",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop",
      price: 120,
      capacity: 6,
      amenities: ["Kitchen", "Living Area", "Garden Access", "Playground Nearby"]
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
              Stay in comfort while being close to nature. Choose from our range of eco-friendly accommodations
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

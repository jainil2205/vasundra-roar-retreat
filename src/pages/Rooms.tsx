import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RoomCard } from "@/components/RoomCard";

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      name: "Red Blossom Cottage",
      description: "Bright and modern unit with garden-facing entrance, private seating area, and contemporary bathroom facilities. Perfect for couples seeking comfort and style.",
      images: [
        "/assets/Rooms/1.1.jpg",
        "/assets/Rooms/1.2.jpg", 
        "/assets/Rooms/1.3.jpg"
      ],
      price: 140,
      capacity: 2,
      amenities: ["Private Porch", "Garden View", "Air Conditioning", "Free Wi-Fi", "Private Bathroom", "Modern Furnishing"]
    },
    {
      id: 2,
      name: "Palm View Retreat",
      description: "Peaceful tropical haven surrounded by lush palms and greenery. Features comfortable accommodations with natural ambiance and serene outdoor spaces.",
      images: [
        "/assets/Rooms/2.1.jpg",
        "/assets/Rooms/2.2.jpg",
        "/assets/Rooms/2.3.jpg"
      ],
      price: 160,
      capacity: 2,
      amenities: ["Palm Garden", "Outdoor Seating", "Twin Beds", "Ceiling Fan", "Natural Lighting", "Tropical Views"]
    },
    {
      id: 3,
      name: "Sunset Villa",
      description: "Charming villa with scenic outdoor views, spacious interiors, and access to lush lawns. Ideal for small families or groups seeking a peaceful retreat.",
      images: [
        "/assets/Rooms/3.1.jpg",
        "/assets/Rooms/3.2.JPG"
      ],
      price: 170,
      capacity: 3,
      amenities: ["Lawn Access", "Scenic Views", "Spacious Room", "Private Bathroom", "Family Friendly", "Outdoor Space"]
    },
    {
      id: 4,
      name: "Heritage Deluxe Suite",
      description: "Elegant suite combining traditional charm with modern comfort. Features multiple spaces including bedroom, sitting area, and premium bathroom facilities.",
      images: [
        "/assets/Rooms/4.1.JPG",
        "/assets/Rooms/4.2.JPG",
        "/assets/Rooms/4.3.JPG"
      ],
      price: 190,
      capacity: 4,
      amenities: ["Multiple Rooms", "Heritage Design", "Premium Bathroom", "Sitting Area", "Group Accommodation", "Traditional Decor"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block">
              <h1 className="text-6xl font-bold mb-6 text-green-800 relative">
                Our Accommodations
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-green-600 rounded-full"></div>
              </h1>
            </div>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mt-8">
              Experience the perfect blend of comfort and nature. Our thoughtfully designed accommodations 
              offer you a peaceful retreat while keeping you connected to the beauty of the wilderness.
            </p>
          </div>
        </div>
      </div>

      {/* Rooms Grid */}
      <div className="pb-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {rooms.map((room, index) => (
              <div 
                key={room.id} 
                className={`transform transition-all duration-500 hover:scale-[1.02] ${
                  index % 2 === 0 ? 'lg:translate-y-0' : 'lg:translate-y-8'
                }`}
              >
                <RoomCard room={room} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="bg-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Why Choose Our Accommodations?</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Wildlife Views</h3>
                <p className="text-green-100">Wake up to stunning natural landscapes and wildlife right outside your window.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
                <p className="text-green-100">Sustainable accommodations designed to minimize environmental impact.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Modern Comfort</h3>
                <p className="text-green-100">All the amenities you need for a comfortable and memorable stay.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Rooms;
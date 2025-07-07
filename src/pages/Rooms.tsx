import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RoomCard } from "@/components/RoomCard";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Search, Sliders, Calendar, Users, X, ChevronDown, Filter, Check } from "lucide-react";
import Image from "next/image";
import patternBg from "../../public/assets/pattern-bg.png";

const Rooms = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [guestCount, setGuestCount] = useState(1);
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [searchTerm, setSearchTerm] = useState("");
  const filtersRef = useRef(null);
  
  useEffect(() => {
    setIsLoaded(true);
    
    // Close filters when clicking outside
    const handleClickOutside = (event) => {
      if (filtersRef.current && !filtersRef.current.contains(event.target)) {
        setShowFilters(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
      amenities: ["Private Porch", "Garden View", "Air Conditioning", "Free Wi-Fi", "Private Bathroom", "Modern Furnishing"],
      type: "cottage",
      popular: true
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
      amenities: ["Palm Garden", "Outdoor Seating", "Twin Beds", "Ceiling Fan", "Natural Lighting", "Tropical Views"],
      type: "retreat"
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
      amenities: ["Lawn Access", "Scenic Views", "Spacious Room", "Private Bathroom", "Family Friendly", "Outdoor Space"],
      type: "villa",
      popular: true
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
      amenities: ["Multiple Rooms", "Heritage Design", "Premium Bathroom", "Sitting Area", "Group Accommodation", "Traditional Decor"],
      type: "suite"
    }
  ];
  
  // Get all unique amenities from rooms
  const allAmenities = [...new Set(rooms.flatMap(room => room.amenities))];
  
  // Filter rooms based on active filter, amenities, capacity, price, and search
  const filteredRooms = rooms.filter(room => {
    // Type filter
    const typeMatch = activeFilter === "all" || room.type === activeFilter;
    
    // Amenity filter
    const amenitiesMatch = selectedAmenities.length === 0 || 
      selectedAmenities.every(amenity => room.amenities.includes(amenity));
    
    // Guest capacity filter
    const capacityMatch = room.capacity >= guestCount;
    
    // Price range filter
    const priceMatch = room.price >= priceRange[0] && room.price <= priceRange[1];
    
    // Search term filter
    const searchMatch = searchTerm === "" || 
      room.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      room.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return typeMatch && amenitiesMatch && capacityMatch && priceMatch && searchMatch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const toggleAmenity = (amenity) => {
    setSelectedAmenities(prev => 
      prev.includes(amenity) 
        ? prev.filter(a => a !== amenity)
        : [...prev, amenity]
    );
  };
  
  const resetFilters = () => {
    setActiveFilter("all");
    setSelectedAmenities([]);
    setGuestCount(1);
    setPriceRange([0, 200]);
    setSearchTerm("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Navbar />

      
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 md:pt-20 lg:pt-24 pb-8 md:pb-12">
        <div className="absolute inset-0 z-0 bg-[url('/assets/pattern-bg.png')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10 md:mb-16">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="inline-block"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 text-green-800 relative">
                Our Accommodations
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 sm:w-24 h-1 bg-green-600 rounded-full"></div>
              </h1>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mt-6 md:mt-8 px-2"
            >
              Experience the perfect blend of comfort and nature. Our thoughtfully designed accommodations 
              offer you a peaceful retreat while keeping you connected to the beauty of the wilderness.
            </motion.p>
          </div>
          
        
        </div>
      </section>
       {/* Call to Action */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-xl p-6 md:p-10"
            >
              <div className="mb-6 relative inline-block">
                <div className="absolute inset-0 bg-green-100 rounded-full transform scale-150 opacity-30 blur-3xl"></div>
                <Calendar className="w-14 h-14 text-green-600 relative" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">Ready to Experience Nature's Embrace?</h2>
             <p className="text-gray-700 mb-6 md:mb-8">Book your stay now and immerse yourself in the tranquility of our natural retreats. Special rates available for extended stays!</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
  <a 
    href="mailto:jainildoshi22@gmail.com?subject=Booking%20Inquiry%20for%20Vasundra%20Nature%20Park&body=Hello,%0A%0AI'd%20like%20to%20inquire%20about%20booking%20availability%20for%20your%20accommodation.%0A%0APreferred%20dates:%20%0ANumber%20of%20guests:%20%0AAccommodation%20type:%20%0A%0AThank%20you!"
    className="bg-green-700 hover:bg-green-800 text-white font-medium rounded-full px-8 py-3 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center"
  >
    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
    Book Your Stay
  </a>
</div>

              
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="pb-12 md:pb-16 lg:pb-20">
        <div className="container mx-auto px-4">
          {filteredRooms.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No accommodations found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your filters for more results.</p>
              <button 
                onClick={resetFilters}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-600">{filteredRooms.length} accommodations found</p>
                <div className="flex items-center gap-2">
                  <label htmlFor="sort" className="text-sm text-gray-600 hidden sm:inline">Sort by:</label>
                  <select 
                    id="sort"
                    className="text-sm border border-gray-300 rounded-md p-1.5"
                    defaultValue="price-low"
                  >
                    <option value="price-low">Price (Low to High)</option>
                    <option value="price-high">Price (High to Low)</option>
                    <option value="capacity">Capacity</option>
                    <option value="popular">Most Popular</option>
                  </select>
                </div>
              </div>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 max-w-7xl mx-auto"
              >
                {filteredRooms.map((room, index) => (
                  <motion.div 
                    key={room.id}
                    variants={itemVariants}
                    className={`${index % 2 === 0 ? '' : 'md:translate-y-8'}`}
                  >
                    <div className="transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl rounded-xl">
                      <RoomCard room={room} />
                      
                      {/* Popular Tag */}
                      {room.popular && (
                        <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-2.5 py-1.5 rounded-full shadow-md">
                          Popular
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </>
          )}
        </div>
      </section>

      

      {/* Additional Info Section */}
      <section className="bg-green-800 text-white py-12 md:py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <svg className="absolute -bottom-24 -right-24 text-green-700 opacity-20 w-64 h-64" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
          </svg>
          <svg className="absolute -top-16 -left-16 text-green-700 opacity-20 w-48 h-48" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-10">Why Choose Our Accommodations?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mt-8">
              {[
                {
                  icon: (
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                    </svg>
                  ),
                  title: "Wildlife Views",
                  description: "Wake up to stunning natural landscapes and wildlife right outside your window."
                },
                {
                  icon: (
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                    </svg>
                  ),
                  title: "Eco-Friendly",
                  description: "Sustainable accommodations designed to minimize environmental impact."
                },
                {
                  icon: (
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                    </svg>
                  ),
                  title: "Modern Comfort",
                  description: "All the amenities you need for a comfortable and memorable stay."
                }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-green-700 bg-opacity-30 backdrop-blur-sm rounded-xl p-6 hover:bg-green-600 hover:bg-opacity-40 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-900/30">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-green-50">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Room Details Table - For easy comparison */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">Accommodation Comparison</h2>
              <p className="text-gray-600">Compare our accommodations side by side to find your perfect match</p>
            </div>
            
            <div className="max-w-6xl mx-auto overflow-x-auto">
              <table className="min-w-full bg-white rounded-xl shadow-md">
                <thead className="bg-green-50 text-green-700">
                  <tr>
                    <th className="py-3 px-4 text-left font-semibold border-b">Accommodation</th>
                    <th className="py-3 px-4 text-center font-semibold border-b">Price / Night</th>
                    <th className="py-3 px-4 text-center font-semibold border-b">Capacity</th>
                    <th className="py-3 px-4 text-center font-semibold border-b hidden md:table-cell">Room Type</th>
                    <th className="py-3 px-4 text-center font-semibold border-b hidden lg:table-cell">Top Amenities</th>
                    <th className="py-3 px-4 text-center font-semibold border-b"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {rooms.map((room) => (
                    <tr key={room.id} className="hover:bg-green-50 transition-colors">
                      <td className="py-4 px-4">
                        <div className="flex items-center">
                          <div className="h-12 w-12 bg-gray-100 rounded-md overflow-hidden mr-3 hidden sm:block">
                            <div className="h-full w-full relative">
                              <img 
                                src={room.images[0]} 
                                alt={room.name}
                                className="object-cover h-full w-full"
                              />
                            </div>
                          </div>
                          <span className="font-medium text-gray-800">{room.name}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center font-medium">${room.price}</td>
                      <td className="py-4 px-4 text-center">{room.capacity} {room.capacity === 1 ? 'person' : 'people'}</td>
                      <td className="py-4 px-4 text-center hidden md:table-cell capitalize">{room.type}</td>
                      <td className="py-4 px-4 hidden lg:table-cell">
                        <div className="flex flex-wrap gap-1 justify-center">
                          {room.amenities.slice(0, 3).map((amenity, idx) => (
                            <span key={idx} className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">
                              {amenity}
                            </span>
                          ))}
                          {room.amenities.length > 3 && (
                            <span className="text-xs bg-gray-50 text-gray-500 px-2 py-0.5 rounded-full">
                              +{room.amenities.length - 3}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                      
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

     

      <Footer />
    </div>
  );
};

export default Rooms;
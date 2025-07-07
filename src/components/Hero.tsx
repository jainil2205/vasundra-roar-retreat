import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import { useState, useEffect, useRef } from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  ChevronDown, 
  ShieldAlert, 
  Bed, 
  ArrowDown, 
  ExternalLink, 
  Compass,
  Clock,
  Sun,
  Info,
  MapPin,
  Star,
  MessageCircle,
  Phone,
  Mail
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { RoomCard } from "./RoomCard";

// Importing attraction images
import lionSafariImg from "../../public/assets/Lions in natural habitat/1.jpg";
import birdWatchingImg from "../../public/assets/Wildlife/2.jpg";

// Importing nearby attraction images
import sunset1 from "../../public/assets/Sunset/1.1.jpg";
import hanumangala from "../../public/assets/Nearby Attractions/2.jpg";

// Importing about page images
import lion5 from "../../public/assets/Lions in natural habitat/5.jpg";

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const slideTimerRef = useRef(null);
  
  const roomsRef = useRef(null);
  const attractionsRef = useRef(null);
  const aboutRef = useRef(null);
  const nearbyRef = useRef(null);
  const reviewsRef = useRef(null);
  const contactRef = useRef(null);
  const securityRef = useRef(null);
  
  // Sample room data
  const rooms = [
    {
      id: 1,
      name: "Luxury Safari Suite",
      description: "Experience the ultimate safari getaway with panoramic views of the wildlife sanctuary. This spacious suite features premium amenities and a private balcony.",
      price: 299,
      capacity: 2,
      images: [
         "/assets/Rooms/1.1.jpg",
        "/assets/Rooms/1.2.jpg", 
        "/assets/Rooms/1.3.jpg"
      ],
      amenities: ["King Bed", "Air Conditioning", "Private Balcony", "Mini Bar", "Wi-Fi", "Room Service"]
    },
    {
      id: 2,
      name: "Family Wilderness Room",
      description: "Perfect for families wanting to experience nature together. Features connecting rooms and child-friendly amenities with views of the park's greenery.",
      price: 249,
      capacity: 4,
      images: [
       "/assets/Rooms/2.1.jpg",
        "/assets/Rooms/2.2.jpg",
        "/assets/Rooms/2.3.jpg"
      ],
      amenities: ["Two Queen Beds", "Air Conditioning", "Play Area", "Refrigerator", "Wi-Fi", "Child Safety Features"]
    },
    {
      id: 3,
      name: "Deluxe Wildlife View",
      description: "Wake up to breathtaking views of the wildlife sanctuary. This comfortable room offers a perfect balance of luxury and authentic nature experience.",
      price: 199,
      capacity: 2,
      images: [
      "/assets/Rooms/3.1.jpg",
        "/assets/Rooms/3.2.JPG"
      ],
      amenities: ["Queen Bed", "Air Conditioning", "Work Desk", "Coffee Maker", "Wi-Fi", "Daily Housekeeping"]
    }
  ];

  // Featured attractions for the home page
  const featuredAttractions = [
    {
      id: 1,
      title: "Lion Safari",
      description: "Experience the thrill of seeing majestic lions in their natural habitat during our guided safari tours.",
      image: lionSafariImg,
      duration: "2-3 hours",
      bestTime: "Early morning & Evening"
    },
    {
      id: 2,
      title: "Bird Watching Safari",
      description: "Discover exotic birds and enjoy photography opportunities with our expert ornithologist guides.",
      image: birdWatchingImg,
      duration: "3-4 hours",
      bestTime: "Early morning"
    }
  ];
  
  // Featured nearby attractions for the home page
  const featuredNearbyAttractions = [
    {
      name: "Sunset View Point",
      distance: "2 km",
      description: "A breathtaking viewpoint offering panoramic sunset vistas. Ideal for photographers and nature lovers.",
      image: sunset1
    },
    {
      name: "Hike to Hanumangala",
      distance: "5 km",
      description: "Scenic hiking trail leading to Hanumangala with lush surroundings and serene atmosphere.",
      image: hanumangala
    }
  ];
  
  // Featured reviews for the home page
  const featuredReviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      text: "The lion safari exceeded all expectations! The guides were knowledgeable and we got incredibly close to the lions. A memory our family will cherish forever.",
      date: "May 15, 2025"
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 5,
      text: "Stayed in the Luxury Safari Suite and was blown away. The accommodations were spectacular, and waking up to lions roaring in the distance was truly magical.",
      date: "June 3, 2025"
    },
    {
      id: 3,
      name: "Priya Sharma",
      rating: 4,
      text: "The bird watching tour was incredible - we spotted over 40 species! Would highly recommend to all nature enthusiasts.",
      date: "April 22, 2025"
    }
  ];

  // Background images to include night views and food court images
  const backgroundImages = [
    // Night view images
    "/assets/Original photos/10.jpg",
    "/assets/Original photos/11.jpg",
    // Food court images
    "/assets/Original photos/12.jpg",
    "/assets/Original photos/13.JPG",
    "/assets/Original photos/14.JPG",
    // Selected greenery/nature views
    "/assets/Original photos/1.jpg",
    "/assets/Original photos/5.JPG",
    "/assets/Original photos/8.JPG"
  ];

  // Check for mobile viewport
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // Auto-slide functionality with reset on manual navigation
  useEffect(() => {
    if (isAutoPlaying) {
      clearTimeout(slideTimerRef.current);
      slideTimerRef.current = setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
      }, 5000);
    }
    return () => clearTimeout(slideTimerRef.current);
  }, [isAutoPlaying, currentImageIndex, backgroundImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const scrollToRooms = () => {
    roomsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
    setIsModalOpen(true);
  };

  // Attraction Card Component for the home page
  const AttractionPreviewCard = ({ attraction }) => (
    <motion.div 
      className="group bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img 
            className="h-56 w-full object-cover md:w-56" 
            src={typeof attraction.image === "string" ? attraction.image : attraction.image.src} 
            alt={attraction.title} 
          />
        </div>
        <div className="p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-green-800 group-hover:text-amber-600 transition-colors duration-300">{attraction.title}</h3>
            <p className="mt-2 text-gray-600">{attraction.description}</p>
          </div>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex items-center text-gray-500">
              <Clock size={16} className="mr-2 text-green-600" />
              <span>Duration: {attraction.duration}</span>
            </div>
            <div className="flex items-center text-gray-500">
              <Sun size={16} className="mr-2 text-amber-500" />
              <span>Best Time: {attraction.bestTime}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
  
  // Nearby Attraction Card Component for the home page
  const NearbyPreviewCard = ({ attraction }) => (
    <motion.div 
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative h-48">
        <img
          src={typeof attraction.image === "string" ? attraction.image : attraction.image.src}
          alt={attraction.name}
          className="object-cover w-full h-48"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-green-800">{attraction.name}</h3>
          <div className="flex items-center text-green-600">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm font-medium">{attraction.distance}</span>
          </div>
        </div>
        <p className="text-gray-600 line-clamp-2">{attraction.description}</p>
      </div>
    </motion.div>
  );
  
  // Review Card Component for the home page
  const ReviewCard = ({ review }) => (
    <motion.div
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center mb-4">
        <div className="flex mr-2">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              className={i < review.rating ? "text-amber-500 fill-amber-500" : "text-gray-300"} 
            />
          ))}
        </div>
        <span className="text-sm text-gray-500">{review.date}</span>
      </div>
      <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
      <p className="text-green-800 font-semibold">- {review.name}</p>
    </motion.div>
  );

  return (
    <div className="relative">
      <Navbar />
      
      {/* Hero Section with Background Slideshow */}
      <section className="relative h-screen overflow-hidden">
        {/* Main Background Slideshow */}
        <div className="absolute inset-0">
          {backgroundImages.map((image, index) => (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: index === currentImageIndex ? 1 : 0,
                scale: index === currentImageIndex ? 1 : 1.05,
              }}
              transition={{ 
                opacity: { duration: 1.2, ease: "easeInOut" },
                scale: { duration: 8, ease: "easeOut" }
              }}
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url('${image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                zIndex: index === currentImageIndex ? 1 : 0
              }}
            />
          ))}
        </div>

        {/* Slideshow Controls */}
        <div className={`absolute z-20 ${
          isMobile 
            ? 'bottom-24 right-4 flex flex-col space-y-2' 
            : 'top-1/2 -translate-y-1/2 w-full px-6 flex justify-between'
        }`}>
          {!isMobile && (
            <motion.button
              onClick={prevImage}
              className="bg-black/40 hover:bg-black/60 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </motion.button>
          )}

          {isMobile && (
            <>
              <motion.button
                onClick={prevImage}
                className="bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-all shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={toggleAutoPlay}
                className="bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-all shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {isAutoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </motion.button>
              <motion.button
                onClick={nextImage}
                className="bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-all shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </>
          )}
          
          {!isMobile && (
            <motion.button
              onClick={nextImage}
              className="bg-black/40 hover:bg-black/60 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </motion.button>
          )}
        </div>

        {/* Pause/Play Button for Desktop */}
        {!isMobile && (
          <motion.button
            onClick={toggleAutoPlay}
            className="absolute top-24 right-6 z-20 bg-black/40 hover:bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isAutoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </motion.button>
        )}

        {/* Slide Indicators */}
        <div className="absolute bottom-16 sm:bottom-24 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {backgroundImages.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
          <div className="text-center text-white max-w-6xl mx-auto">
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 drop-shadow-lg">
                Vasundra Nature Park
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 drop-shadow-md max-w-3xl mx-auto">
                Where Wildlife Meets Wonder - Experience the Majesty of Lions in Their Natural Habitat
              </p>
              <motion.button
                onClick={scrollToRooms}
                className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full text-lg font-medium transition-all flex items-center mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Our Accommodations
                <ArrowDown className="ml-2 w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section 
        ref={roomsRef} 
        className="py-20 px-4 bg-gradient-to-b from-green-900 to-green-800"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-white">
              <Bed className="inline-block mr-2 mb-1" />
              Our Accommodations
            </h2>
            <p className="text-lg text-center mb-12 max-w-3xl mx-auto text-white/90">
              Experience luxury and comfort surrounded by the breathtaking beauty of nature. 
              Our accommodations offer the perfect blend of modern amenities and wilderness charm.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rooms.map(room => (
                <motion.div 
                  key={room.id}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleRoomSelect(room)}
                  className="cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: room.id * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <RoomCard room={room} />
                </motion.div>
              ))}
            </div>

            {/* View All Rooms button */}
            <div className="flex justify-center mt-12">
              <Link to="/rooms">
                <motion.button
                  className="bg-white text-green-800 hover:bg-green-100 px-6 py-3 rounded-full text-lg font-medium transition-all flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View All Accommodations
                  <ExternalLink className="ml-2 w-5 h-5" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Attractions Section */}
      <section 
        ref={attractionsRef} 
        className="py-20 px-4 bg-gradient-to-b from-amber-50 to-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-green-800">
              <Compass className="inline-block mr-2 mb-1" />
              Our Exciting Attractions
            </h2>
            <p className="text-lg text-center mb-12 max-w-3xl mx-auto text-gray-600">
              Embark on an unforgettable journey and discover the wild heart of nature with our guided safari experiences.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
              {featuredAttractions.map(attraction => (
                <AttractionPreviewCard key={attraction.id} attraction={attraction} />
              ))}
            </div>

            {/* Know More About Attractions button */}
            <div className="flex justify-center mt-12">
              <Link to="/attractions">
                <motion.button
                  className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full text-lg font-medium transition-all flex items-center shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Know More About Our Attractions
                  <ExternalLink className="ml-2 w-5 h-5" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* About Us Section */}
      <section 
        ref={aboutRef} 
        className="py-20 px-4 bg-gradient-to-b from-green-50 to-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-green-800">
              <Info className="inline-block mr-2 mb-1" />
              About Vasundra Nature Park
            </h2>
            <p className="text-lg text-center mb-10 max-w-3xl mx-auto text-gray-600">
              A premier wildlife sanctuary dedicated to lion conservation and providing unforgettable nature experiences
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-10">
              <motion.div
                className="rounded-xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <img 
                  src={lion5} 
                  alt="Lions at Vasundra Nature Park" 
                  className="w-full h-80 object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-4 text-green-700">Our Story</h3>
                <p className="text-gray-700 mb-6">
                  Established in 1985, Vasundra Nature Park spans over 2,000 acres of pristine wilderness and is 
                  home to majestic lions, exotic birds, and diverse wildlife.
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center py-4 bg-green-100 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">25+</div>
                    <div className="text-sm text-gray-600">Lion Pride Members</div>
                  </div>
                  <div className="text-center py-4 bg-green-100 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">150+</div>
                    <div className="text-sm text-gray-600">Bird Species</div>
                  </div>
                  <div className="text-center py-4 bg-green-100 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">2000</div>
                    <div className="text-sm text-gray-600">Acres</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Learn More button */}
            <div className="flex justify-center mt-8">
              <Link to="/about">
                <motion.button
                  className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full text-lg font-medium transition-all flex items-center shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More About Us
                  <ExternalLink className="ml-2 w-5 h-5" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Nearby Attractions Section */}
      <section 
        ref={nearbyRef} 
        className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-green-800">
              <MapPin className="inline-block mr-2 mb-1" />
              Nearby Attractions
            </h2>
            <p className="text-lg text-center mb-12 max-w-3xl mx-auto text-gray-600">
              Extend your wildlife adventure beyond the park with these exciting nearby destinations
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {featuredNearbyAttractions.map((attraction, index) => (
                <NearbyPreviewCard key={index} attraction={attraction} />
              ))}
            </div>

            {/* Explore More button */}
            <div className="flex justify-center mt-12">
              <Link to="/nearby">
                <motion.button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-medium transition-all flex items-center shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore More Nearby Places
                  <ExternalLink className="ml-2 w-5 h-5" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Reviews Section - NEW */}
      <section 
        ref={reviewsRef} 
        className="py-20 px-4 bg-gradient-to-b from-amber-50 to-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-green-800">
              <Star className="inline-block mr-2 mb-1 fill-amber-500" />
              Guest Reviews
            </h2>
            <p className="text-lg text-center mb-12 max-w-3xl mx-auto text-gray-600">
              See what our visitors have to say about their unforgettable experiences at Vasundra Nature Park
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {featuredReviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>

            {/* See All Reviews button */}
            <div className="flex justify-center mt-12">
              <Link to="/reviews">
                <motion.button
                  className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full text-lg font-medium transition-all flex items-center shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read More Guest Reviews
                  <ExternalLink className="ml-2 w-5 h-5" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Section - NEW */}
      <section 
        ref={contactRef} 
        className="py-20 px-4 bg-gradient-to-b from-green-800 to-green-900 text-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-white">
              <MessageCircle className="inline-block mr-2 mb-1" />
              Contact Us
            </h2>
            <p className="text-lg text-center mb-12 max-w-3xl mx-auto text-white/80">
              Have questions or ready to book your adventure? We're here to help make your wildlife experience extraordinary.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              <motion.div 
                className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Phone size={36} className="mb-4 text-amber-400" />
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-white/80">+91 9876543210</p>
                <p className="text-white/80">Daily: 8:00 AM - 8:00 PM</p>
              </motion.div>
              
              <motion.div 
                className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Mail size={36} className="mb-4 text-amber-400" />
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-white/80">info@vasundranaturepark.com</p>
                <p className="text-white/80">bookings@vasundranaturepark.com</p>
              </motion.div>
              
              <motion.div 
                className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <MapPin size={36} className="mb-4 text-amber-400" />
                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                <p className="text-white/80">Vasundra Nature Park</p>
                <p className="text-white/80">Girnar Road, Junagadh, Gujarat</p>
              </motion.div>
            </div>

            {/* Contact Us button */}
            <div className="flex justify-center">
              <Link to="/contact">
                <motion.button
                  className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full text-lg font-medium transition-all flex items-center shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                  <ExternalLink className="ml-2 w-5 h-5" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Room Details Modal */}
      <AnimatePresence>
        {isModalOpen && selectedRoom && (
          <motion.div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
            >
              {/* Close button */}
              <button 
                className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 text-white w-8 h-8 rounded-full flex items-center justify-center z-50"
                onClick={() => setIsModalOpen(false)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Room image carousel */}
              <div className="relative aspect-[16/9] overflow-hidden">
                {selectedRoom.images.map((image, idx) => (
                  <motion.div
                    key={idx}
                    className="absolute inset-0"
                    initial={false}
                    animate={{ 
                      opacity: idx === currentImageIndex % selectedRoom.images.length ? 1 : 0 
                    }}
                    transition={{ duration: 0.7 }}
                  >
                    <img 
                      src={image} 
                      alt={`${selectedRoom.name} - Image ${idx + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
                
                {/* Navigation arrows */}
                <div className="absolute inset-0 flex items-center justify-between px-4">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(prev => 
                        (prev - 1 + selectedRoom.images.length) % selectedRoom.images.length
                      );
                    }}
                    className="bg-black/40 hover:bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(prev => 
                        (prev + 1) % selectedRoom.images.length
                      );
                    }}
                    className="bg-black/40 hover:bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
                
                {/* Price tag */}
                <div className="absolute top-4 right-4 bg-green-700 text-white px-3 py-1 rounded-full font-medium text-sm shadow-md">
                  ${selectedRoom.price}/night
                </div>
              </div>
              
              {/* Room details */}
              <div className="p-6 dark:bg-gray-800 dark:text-white">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl sm:text-3xl font-bold text-green-900 dark:text-green-400">{selectedRoom.name}</h3>
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                    <span>{selectedRoom.capacity} {selectedRoom.capacity === 1 ? 'Person' : 'People'}</span>
                  </div>
                </div>
                
                <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">{selectedRoom.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-3 text-green-800 dark:text-green-400">Room Amenities</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {selectedRoom.amenities.map((amenity, idx) => (
                      <div key={idx} className="flex items-center text-gray-700 dark:text-gray-300">
                        <svg className="w-5 h-5 text-green-600 dark:text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                  <motion.button
                    className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full font-medium text-lg transition-all flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Book Now
                  </motion.button>
                  
                  <Link 
                    to={`/rooms/${selectedRoom.id}`}
                    className="inline-flex items-center justify-center"
                  >
                    <motion.button
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium text-lg transition-all flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Room Details
                      <ExternalLink className="ml-2 w-5 h-5" />
                    </motion.button>
                  </Link>
                  
                  <motion.button
                    onClick={() => setIsModalOpen(false)}
                    className="bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white px-6 py-3 rounded-full font-medium text-lg transition-all flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
import { useState, useEffect } from "react";
import { Calendar, Users, MapPin, ChevronDown, Check, Loader } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const QuickBooking = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const [roomType, setRoomType] = useState("any");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // Set minimum dates to today
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('check-in').min = today;
    document.getElementById('check-out').min = today;
  }, []);

  // Update check-out min date when check-in changes
  useEffect(() => {
    if (checkIn) {
      document.getElementById('check-out').min = checkIn;
    }
  }, [checkIn]);

  const handleBooking = () => {
    if (!checkIn || !checkOut) {
      alert("Please select both check-in and check-out dates");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Booking request:", { checkIn, checkOut, guests, roomType });
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
      
      // Send booking details directly to jainildoshi22@gmail.com
      const formattedRoomType = roomType === 'any' ? 'Any Room Type' : roomType.charAt(0).toUpperCase() + roomType.slice(1);
      const mailtoLink = `mailto:jainildoshi22@gmail.com?subject=Booking%20Request%20for%20${encodeURIComponent(formattedRoomType)}&body=Hello,%0A%0AI'd%20like%20to%20book%20a%20stay%20at%20Vasundra%20Nature%20Park:%0A%0ACheck-in:%20${checkIn}%0ACheck-out:%20${checkOut}%0AGuests:%20${guests}%0ARoom%20Type:%20${formattedRoomType}%0A%0APlease%20let%20me%20know%20availability%20and%20next%20steps.%0A%0AThank%20you!`;
      
      window.location.href = mailtoLink;
    }, 1500);
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-white"></div>
      <div className="absolute inset-0 bg-[url('/assets/pattern-bg.png')] opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-green-800 relative inline-block">
              Book Your Adventure
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 md:w-24 h-1 bg-green-600 rounded-full"></div>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
              Start planning your unforgettable wildlife experience today
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 lg:p-10 relative overflow-hidden border border-green-100">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-green-50 rounded-full transform translate-x-20 -translate-y-20 opacity-70"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-50 rounded-full transform -translate-x-16 translate-y-16 opacity-60"></div>
            
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-green-800 mb-6 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-green-600" /> Find Your Perfect Stay
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    <Calendar className="w-4 h-4 inline mr-2 text-green-600" />
                    Check In
                  </label>
                  <div className="relative">
                    <input
                      id="check-in"
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400">
                      {!checkIn && <Calendar className="w-4 h-4" />}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    <Calendar className="w-4 h-4 inline mr-2 text-green-600" />
                    Check Out
                  </label>
                  <div className="relative">
                    <input
                      id="check-out"
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400">
                      {!checkOut && <Calendar className="w-4 h-4" />}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    <Users className="w-4 h-4 inline mr-2 text-green-600" />
                    Guests
                  </label>
                  <div className="relative">
                    <select
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full p-3 appearance-none border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    <MapPin className="w-4 h-4 inline mr-2 text-green-600" />
                    Room Type
                  </label>
                  <div className="relative">
                    <div className="relative">
                      <button
                        type="button"
                        className="w-full p-3 flex justify-between items-center border border-gray-300 rounded-lg focus:ring-2 focus:outline-none focus:ring-green-500 focus:border-transparent transition-all duration-300"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      >
                        <span>{roomType === 'any' ? 'Any Room Type' : 
                              roomType === 'cottage' ? 'Cottage' : 
                              roomType === 'villa' ? 'Villa' : 
                              roomType === 'suite' ? 'Suite' : 'Retreat'}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {isDropdownOpen && (
                        <div className="absolute z-20 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
                          {['any', 'cottage', 'villa', 'suite', 'retreat'].map(type => (
                            <div 
                              key={type}
                              className={`p-3 cursor-pointer hover:bg-green-50 transition-colors flex items-center justify-between ${roomType === type ? 'bg-green-50 text-green-700' : ''}`}
                              onClick={() => {
                                setRoomType(type);
                                setIsDropdownOpen(false);
                              }}
                            >
                              <span className="capitalize">{type === 'any' ? 'Any Room Type' : type}</span>
                              {roomType === type && <Check className="w-4 h-4 text-green-600" />}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-between">
                <div className="text-sm text-gray-500 flex items-center">
                  <svg className="w-4 h-4 mr-1 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Best rates guaranteed
                </div>
                
                <div className="w-full sm:w-auto">
                  <button
                    onClick={handleBooking}
                    disabled={isSubmitting}
                    className={`w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-80' : 'hover:shadow-md'}`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader className="w-4 h-4 animate-spin" />
                        Processing...
                      </>
                    ) : isSuccess ? (
                      <>
                        <Check className="w-4 h-4" />
                        Success!
                      </>
                    ) : (
                      'Check Availability'
                    )}
                  </button>
                </div>
              </div>
              
          
            </div>
          </div>
          
    
        </motion.div>
      </div>
    </section>
  );
};
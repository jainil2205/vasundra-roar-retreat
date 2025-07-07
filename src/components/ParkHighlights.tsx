import { useState, useEffect } from "react";
import { Camera, MapPin, Star, Users, Leaf, Shield } from "lucide-react";
import { motion } from "framer-motion";

export const ParkHighlights = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  const highlights = [
    {
      icon: <Camera className="w-10 h-10 md:w-12 md:h-12 text-green-600" />,
      title: "Lion Safari",
      description: "Get up close with magnificent lions in their natural habitat during our guided safari tours.",
      stats: "20+ Lions",
      color: "from-amber-50 to-amber-100"
    },
  
    {
      icon: <Star className="w-10 h-10 md:w-12 md:h-12 text-green-600" />,
      title: "Premium Stay",
      description: "Comfortable eco-friendly accommodations with stunning views of the natural landscape.",
      stats: "4.9 Rating",
      color: "from-sky-50 to-sky-100"
    },

    {
      icon: <Shield className="w-10 h-10 md:w-12 md:h-12 text-green-600" />,
      title: "Conservation",
      description: "Supporting wildlife protection and habitat restoration through education and funding.",
      stats: "3 Protection Programs",
      color: "from-blue-50 to-blue-100"
    }
  ];

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

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-green-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/assets/pattern-bg.png')] opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
            Experience Vasundra
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-green-800">Why Choose Vasundra?</h2>
          <div className="h-1 w-24 bg-green-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the perfect blend of adventure, comfort, and conservation in one of India's premier nature parks
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"
        >
          {highlights.map((highlight, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden group`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-60 group-hover:opacity-80 transition-opacity duration-300`}></div>
              
              <div className="relative z-10 p-6 md:p-8 flex flex-col h-full">
                <div className="bg-white p-3 rounded-lg shadow-sm w-fit mb-5">
                  {highlight.icon}
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-green-800 group-hover:text-green-700 transition-colors">
                  {highlight.title}
                </h3>
                
                <p className="text-gray-600 mb-6 flex-grow">{highlight.description}</p>
                
                <div className="mt-auto">
                  <div className="inline-flex items-center px-3 py-1 bg-white/70 backdrop-blur-sm rounded-full text-sm font-medium text-green-700">
                    {highlight.stats}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 md:mt-20 max-w-4xl mx-auto text-center"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-green-100">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-green-800">Ready to Experience Nature's Wonders?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Book your adventure today and create unforgettable memories in the heart of nature. Special packages available for families and photographers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:jainildoshi22@gmail.com?subject=Booking%20Inquiry%20for%20Vasundra%20Nature%20Park&body=Hello,%0A%0AI'm%20interested%20in%20visiting%20Vasundra%20Nature%20Park.%20Please%20send%20me%20information%20about%20availability%20and%20packages.%0A%0AThank%20you!"
                className="bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-full transition-colors duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                Book Your Visit
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
           
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-green-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-green-50 rounded-full opacity-40 blur-3xl"></div>
    </section>
  );
};
import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock, Copy, Check, ExternalLink, Facebook, Instagram, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [copied, setCopied] = useState(false);
  // Store phone number but don't display it directly
  const phoneNumber = "+91 98765 43210";

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handlePhoneCopy = () => {
    navigator.clipboard.writeText(phoneNumber.replace(/\s/g, ''));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-8 md:pt-28 md:pb-12 overflow-hidden">
          <div className="absolute inset-0 z-0 bg-[url('/assets/pattern-light.svg')] opacity-5"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 md:mb-16"
            >
              <div className="inline-block mb-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-800 relative">
                  Contact Us
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 sm:w-24 h-1 bg-green-600 rounded-full"></div>
                </h1>
              </div>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
              >
                Get in touch with us to plan your perfect nature adventure
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="pb-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h2 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-green-700">Get In Touch</h2>
                
                <div className="space-y-6 mb-8 md:mb-10">
                  <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="bg-green-100 p-2 rounded-full">
                      <MapPin className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                      <p className="text-gray-600">Wildlife Sanctuary Road, Nature Reserve District, State 123456</p>
                    </div>
                  </div>
                  
                  {/* Phone section - Modified to hide the actual number */}
                  <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 group">
                    <div className="bg-green-100 p-2 rounded-full">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                      <div className="flex items-center justify-between">
                        <button 
                          onClick={handlePhoneCopy}
                          className="text-green-600 font-medium hover:text-green-700 transition-colors flex items-center cursor-pointer"
                          aria-label="Copy phone number"
                        >
                          <span>Click to copy our phone number</span>
                        </button>
                        <button 
                          onClick={handlePhoneCopy}
                          className="text-gray-400 hover:text-green-600 focus:outline-none transition-colors p-1"
                          title="Copy phone number"
                        >
                          {copied ? (
                            <Check className="w-5 h-5 text-green-600" />
                          ) : (
                            <Copy className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                      {copied && (
                        <span className="text-xs text-green-600 mt-1 inline-block">
                          Phone number copied!
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="bg-green-100 p-2 rounded-full">
                      <Mail className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                      <a href="mailto:info@vasundranaturepark.com" className="text-green-600 hover:text-green-700 transition-colors">
                        info@vasundranaturepark.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="bg-green-100 p-2 rounded-full">
                      <Clock className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Operating Hours</h3>
                      <p className="text-gray-600">6:00 AM - 6:00 PM (Daily)</p>
                      <p className="text-gray-500 text-sm mt-1">Office Hours: 9:00 AM - 5:00 PM (Mon-Sat)</p>
                    </div>
                  </div>
                </div>

                {/* Quick Booking Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="bg-gradient-to-br from-green-600 to-green-700 p-6 md:p-8 rounded-xl shadow-lg text-white relative overflow-hidden"
                >
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                  
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 relative z-10">Quick Booking</h3>
                  <p className="text-green-50 mb-6 relative z-10">
                    For immediate assistance with bookings, call us directly or use our online booking system.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {/* Call Now button - Modified to use handlePhoneCopy instead of direct link */}
                    <button
                      onClick={handlePhoneCopy}
                      className="bg-white text-green-700 px-5 py-2.5 rounded-lg hover:bg-green-50 transition-colors font-medium flex items-center shadow-md"
                      aria-label="Copy phone number to clipboard"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </button>
                    <a 
                      href="mailto:info@vasundranaturepark.com?subject=Booking%20Inquiry%20for%20Vasundra%20Nature%20Park"
                      className="bg-green-500 hover:bg-green-400 text-white px-5 py-2.5 rounded-lg transition-colors font-medium flex items-center shadow-md"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Book Via Email
                    </a>  
                  </div>
                </motion.div>

                {/* Social Media Links */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={isLoaded ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="mt-8 md:mt-10"
                >
                  <h3 className="text-lg font-medium text-gray-800 mb-3">Connect With Us</h3>
                  <div className="flex items-center gap-4">
                    <a href="#" className="bg-blue-600 text-white p-2.5 rounded-full hover:bg-blue-700 transition-colors shadow-sm">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href="#" className="bg-pink-600 text-white p-2.5 rounded-full hover:bg-pink-700 transition-colors shadow-sm">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="bg-sky-500 text-white p-2.5 rounded-full hover:bg-sky-600 transition-colors shadow-sm">
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="bg-white rounded-xl shadow-lg p-6 md:p-8"
              >
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto"
            >
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">Find Us</h2>
                <p className="text-gray-600">
                  Nestled in the heart of nature, we're located just a short drive from major cities
                </p>
              </div>
              
              <div className="relative">
                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 border-t-4 border-l-4 border-green-600"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-4 border-r-4 border-green-600"></div>
                
                {/* Map */}
                <div className="relative w-full overflow-hidden rounded-xl shadow-xl aspect-[16/9]">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.7055905296797!2d71.0407129752669!3d21.401493980342774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be285306501efe3%3A0xbebdc717188c78e2!2sVasundhara%20Nature%20Park!5e0!3m2!1sen!2sin!4v1751302880614!5m2!1sen!2sin"
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Vasundra Nature Park location"
                  ></iframe>
                </div>
              </div>
              
              {/* Directions */}
              <div className="mt-8 bg-green-50 rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Getting Here</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="bg-green-100 p-3 rounded-full mb-3">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="font-medium mb-1">By Car</h4>
                    <p className="text-sm text-gray-600">2 hours from Ahmedabad via Highway 47</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="bg-green-100 p-3 rounded-full mb-3">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </div>
                    <h4 className="font-medium mb-1">By Bus</h4>
                    <p className="text-sm text-gray-600">Regular services from Rajkot and Jamnagar</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="bg-green-100 p-3 rounded-full mb-3">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="font-medium mb-1">Opening Times</h4>
                    <p className="text-sm text-gray-600">Open 6AM to 6PM all year round</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* FAQs Section */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-white to-green-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">Frequently Asked Questions</h2>
                <p className="text-gray-600">Quick answers to common questions about visiting us</p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden divide-y divide-gray-100">
                {[
                  {
                    question: "Do I need to make a reservation before visiting?",
                    answer: "While walk-ins are welcome, we recommend making reservations, especially during weekends and holidays to ensure availability."
                  },
                  {
                    question: "Is there accommodation available at the park?",
                    answer: "Yes, we offer various accommodation options from cottages to luxury tents. All need to be booked in advance."
                  },
                  {
                    question: "Are pets allowed in the park?",
                    answer: "For the safety of our wildlife, pets are not allowed within the park premises."
                  },
                  {
                    question: "What should I bring for my visit?",
                    answer: "We recommend comfortable walking shoes, weather-appropriate clothing, sunscreen, insect repellent, water bottle, and camera."
                  }
                ].map((faq, index) => (
                  <details key={index} className="group p-6">
                    <summary className="list-none flex justify-between items-center cursor-pointer">
                      <span className="text-lg font-medium text-gray-800">{faq.question}</span>
                      <span className="ml-6 flex-shrink-0 text-gray-500 group-open:rotate-180 transition-transform duration-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-gray-600">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* Floating Call Button (Mobile Only) - Modified to use copy functionality */}
      <button
        onClick={handlePhoneCopy}
        className="fixed bottom-6 right-6 bg-green-600 text-white p-3 rounded-full shadow-lg md:hidden z-50 hover:bg-green-700 transition-colors"
        aria-label="Copy phone number"
      >
        <Phone className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Contact;
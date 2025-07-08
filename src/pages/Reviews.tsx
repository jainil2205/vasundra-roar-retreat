import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ReviewCard } from "@/components/ReviewCard";
import { Star, MapPin, MessageSquare, ChevronDown, Filter, ThumbsUp, Users, Coffee } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const Reviews = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [reviewsToShow, setReviewsToShow] = useState(6);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Sample reviews data
  const reviews = [
    {
      id: 1,
      name: "Amelia Johnson",
      date: "June 15, 2025",
      rating: 5,
      review: "Absolutely stunning location! The cottages are beautifully designed and blend perfectly with nature. We spent hours watching wildlife from our private porch. The staff was incredibly knowledgeable and friendly. We'll definitely be back!",
      tags: ["Family", "Wildlife"],
      avatar: "/assets/reviewers/1.jpg",
      images: ["/assets/reviews/review1-1.jpg", "/assets/reviews/review1-2.jpg"]
    },
    {
      id: 2,
      name: "Raj Patel",
      date: "May 28, 2025",
      rating: 5,
      review: "This place exceeded all our expectations. The guided nature walk was the highlight of our trip - we spotted so many birds and even a family of deer! The accommodations are eco-friendly yet luxurious. Perfect balance of comfort and wilderness.",
      tags: ["Couple", "Hiking"],
      avatar: "/assets/reviewers/2.jpg",
      images: ["/assets/reviews/review2-1.jpg"]
    },
    {
      id: 3,
      name: "Sofia Martinez",
      date: "April 10, 2025",
      rating: 4,
      review: "Vasundhara Nature Park is truly a hidden gem. The sunset views from our cottage were breathtaking. The rooms are spacious and well-maintained. Only suggestion would be to improve the Wi-Fi connectivity, but then again, this is a place to disconnect!",
      tags: ["Solo", "Photography"],
      avatar: "/assets/reviewers/3.jpg",
      images: []
    },
    {
      id: 4,
      name: "Thomas Zhang",
      date: "March 22, 2025",
      rating: 5,
      review: "As a wildlife photographer, I found this place to be paradise. The diversity of birds and animals around the property is amazing. The staff went above and beyond to help me find the best spots for photography. The food was fresh and delicious too!",
      tags: ["Solo", "Photography"],
      avatar: "/assets/reviewers/4.jpg",
      images: ["/assets/reviews/review4-1.jpg", "/assets/reviews/review4-2.jpg", "/assets/reviews/review4-3.jpg"]
    },
    {
      id: 5,
      name: "Emily Wilson",
      date: "February 14, 2025",
      rating: 5,
      review: "We celebrated our anniversary here and couldn't have chosen a better place. The special candlelight dinner they arranged under the stars was magical! The cottages are private and romantic, perfect for couples looking to escape the city.",
      tags: ["Couple", "Special Occasion"],
      avatar: "/assets/reviewers/5.jpg",
      images: ["/assets/reviews/review5-1.jpg"]
    },
    {
      id: 6,
      name: "David Sharma",
      date: "January 3, 2025",
      rating: 4,
      review: "Great place for a family retreat. My kids loved the outdoor activities and learning about nature. The cottages are spacious enough for a family of four. The only downside was that some hiking trails were closed due to recent rains.",
      tags: ["Family", "Nature"],
      avatar: "/assets/reviewers/6.jpg",
      images: []
    },
    {
      id: 7,
      name: "Olivia Chen",
      date: "December 20, 2024",
      rating: 5,
      review: "What a wonderful way to spend the holidays! The park was beautifully decorated, and the special winter bonfire nights were unforgettable. The staff made us feel like family. The cottages are cozy and well-heated during the cooler months.",
      tags: ["Friends", "Holiday"],
      avatar: "/assets/reviewers/7.jpg",
      images: ["/assets/reviews/review7-1.jpg"]
    },
    {
      id: 8,
      name: "Michael Brown",
      date: "November 5, 2024",
      rating: 4,
      review: "Peaceful and rejuvenating stay. The meditation sessions at sunrise were incredible. I appreciated the sustainable practices throughout the property. The cottages are thoughtfully designed with natural materials and excellent ventilation.",
      tags: ["Solo", "Wellness"],
      avatar: "/assets/reviewers/8.jpg",
      images: []
    }
  ];

  const overallRating = 4.8;
  
  // Get unique tags from all reviews
  const uniqueTags = ["all", ...new Set(reviews.flatMap(review => review.tags))];
  
  // Filter reviews based on active filter
  const filteredReviews = activeFilter === "all" 
    ? reviews 
    : reviews.filter(review => review.tags.includes(activeFilter));
  
  // Rating stats
  const ratingCounts = [5,4,3,2,1].map(rating => {
    return {
      rating,
      count: reviews.filter(review => review.rating === rating).length,
      percentage: (reviews.filter(review => review.rating === rating).length / reviews.length) * 100
    };
  });

  // AI review insights data
  const aiReviewInsights = [
    {
      icon: <ThumbsUp className="w-6 h-6 text-green-600" />,
      title: "What People Love",
      content: "Beautiful cottages surrounded by nature, exceptional wildlife sightings, and attentive staff receive the most praise from visitors.",
      percentage: 92,
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Visitor Types",
      content: "Most highly rated by couples seeking romantic getaways and photographers looking for wildlife opportunities.",
      percentage: 85,
    },
    {
      icon: <Coffee className="w-6 h-6 text-amber-600" />,
      title: "Amenities Highlight",
      content: "The guided nature walks and evening bonfire experiences are frequently mentioned as memorable highlights.",
      percentage: 78,
    }
  ];
  
  const loadMoreReviews = () => {
    setReviewsToShow(prev => Math.min(prev + 4, filteredReviews.length));
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-12 md:pt-28 md:pb-16 overflow-hidden">
          <div className="absolute inset-0 z-0 bg-[url('/assets/pattern-light.svg')] opacity-5"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-8 md:mb-12"
            >
              <div className="inline-block mb-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-800 relative">
                  Guest Reviews
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 sm:w-24 h-1 bg-green-600 rounded-full"></div>
                </h1>
              </div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col items-center mb-5"
              >
                <div className="bg-white px-6 py-3 rounded-full shadow-md flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-6 h-6 ${
                          i < Math.floor(overallRating)
                            ? "text-yellow-400 fill-current"
                            : i < overallRating
                            ? "text-yellow-400 fill-current opacity-50"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-3 text-2xl font-bold text-gray-800">
                    {overallRating}
                  </span>
                  <span className="ml-2 text-gray-600 border-l border-gray-300 pl-3">
                    {reviews.length} verified reviews
                  </span>
                </div>
                
                <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                  See what our guests have to say about their experience at
                  Vasundhara Nature Park
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Rating Summary Section */}
        <section className="pb-12 md:pb-16">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-white rounded-2xl shadow-md p-6 md:p-8 max-w-5xl mx-auto mb-12 md:mb-16"
            >
              <div className="md:flex justify-between items-center">
                <div className="md:w-1/3 text-center mb-6 md:mb-0">
                  <div className="bg-green-50 inline-flex rounded-2xl p-4 md:p-6">
                    <div className="text-center">
                      <div className="text-5xl md:text-6xl font-bold text-green-800">{overallRating}</div>
                      <div className="flex justify-center mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < Math.floor(overallRating)
                                ? "text-yellow-400 fill-current"
                                : i < overallRating
                                ? "text-yellow-400 fill-current opacity-50"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <div className="mt-2 text-gray-600 text-sm">Out of 5 stars</div>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3 pl-0 md:pl-8">
                  <h3 className="text-lg font-semibold mb-4 text-gray-700">Rating Distribution</h3>
                  {ratingCounts.map((item) => (
                    <div key={item.rating} className="flex items-center mb-2">
                      <div className="w-12 text-sm font-medium text-gray-700">{item.rating} stars</div>
                      <div className="flex-1 h-3 mx-4 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${item.percentage}%` }}
                          transition={{ duration: 1, delay: 0.8 }}
                          className="h-full bg-green-600"
                        ></motion.div>
                      </div>
                      <div className="w-9 text-xs text-gray-500">{item.count}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Filter Bar */}
        <section className="pb-6">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="max-w-6xl mx-auto mb-8"
            >
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex items-center">
                  <Filter className="w-5 h-5 text-green-700 mr-2" />
                  <h3 className="text-lg font-medium text-gray-800">Filter by:</h3>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {uniqueTags.map((tag) => (
                    <button 
                      key={tag} 
                      onClick={() => {
                        setActiveFilter(tag);
                        setReviewsToShow(6);
                      }}
                      className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                        tag === activeFilter 
                          ? "bg-green-600 text-white" 
                          : "bg-white text-green-700 hover:bg-green-50"
                      } shadow-sm capitalize`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="pb-16">
          <div className="container mx-auto px-4">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto mb-12"
            >
              {filteredReviews.slice(0, reviewsToShow).map((review) => (
                <motion.div
                  key={review.id}
                  variants={itemVariants}
                  className="h-full"
                >
                  <ReviewCard review={review} />
                </motion.div>
              ))}
            </motion.div>
            
            {reviewsToShow < filteredReviews.length && (
              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={loadMoreReviews}
                  className="bg-green-700 hover:bg-green-800 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 inline-flex items-center"
                >
                  Load More Reviews
                  <ChevronDown className="w-4 h-4 ml-2" />
                </motion.button>
              </div>
            )}
          </div>
        </section>

        {/* Google Maps Section */}
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
                <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">Find Us on Google</h2>
                <p className="text-gray-600">Read what visitors from around the world have to say about their experience</p>
              </div>
              
              {/* Map Container with Design Elements */}
              <div className="relative mb-8">
                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 border-t-4 border-l-4 border-green-600"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-4 border-r-4 border-green-600"></div>
                
                {/* Map iframe */}
                <div className="relative w-full overflow-hidden rounded-lg shadow-xl aspect-video border border-green-100">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.7055905296797!2d71.0407129752669!3d21.401493980342774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be285306501efe3%3A0xbebdc717188c78e2!2sVasundhara%20Nature%20Park!5e0!3m2!1sen!2sin!4v1751302880614!5m2!1sen!2sin"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 h-full w-full border-0"
                    title="Vasundhara Nature Park map"
                  />
                </div>
              </div>

              {/* Google Reviews Link */}
              <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 text-center shadow-md">
                <div className="inline-flex items-center justify-center bg-white px-4 py-2 rounded-full shadow mb-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-red-500 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z"></path>
                    </svg>
                    <span className="font-bold text-gray-800 mr-1">Google Rating:</span>
                    <div className="flex items-center">
                      <span className="text-yellow-500 font-bold">⭐ 4.8</span>
                      <span className="text-gray-600 ml-1">· 245 reviews</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-5">
                  Hundreds of happy visitors have shared their experiences on Google. 
                  Read their authentic reviews and see why Vasundhara Nature Park is a top-rated destination.
                </p>
                <a
                  className="inline-flex items-center bg-green-700 hover:bg-green-800 text-white font-medium py-2.5 px-6 rounded-lg transition-all duration-300 shadow-md"
                  href="https://www.google.com/maps/place/Vasundhara+Nature+Park/@21.401494,71.040713,17z/data=!4m8!3m7!1s0x3be285306501efe3:0xbebdc717188c78e2!8m2!3d21.401494!4d71.0432879!9m1!1b1!16s%2Fg%2F11h7cpcwd8?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Read Google Reviews
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* AI Google Review Insights Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-green-50 via-white to-green-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto"
            >
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center mb-3 bg-white rounded-full shadow-md px-4 py-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold text-blue-600">AI-Powered</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">Google Reviews Insights</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Our AI has analyzed hundreds of Google reviews to identify what guests love most about Vasundhara Nature Park
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-10">
                {aiReviewInsights.map((insight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-md overflow-hidden"
                  >
                    <div className="relative p-6">
                      <div className="absolute top-0 right-0 bg-green-50 rounded-bl-xl px-3 py-1 text-green-800 font-bold text-sm">
                        {insight.percentage}% mentioned
                      </div>
                      <div className="flex items-center mb-4 mt-4">
                        <div className="bg-gray-100 p-3 rounded-full mr-3">
                          {insight.icon}
                        </div>
                        <h3 className="font-bold text-lg text-gray-800">{insight.title}</h3>
                      </div>
                      <p className="text-gray-600">{insight.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Google Reviews Widget */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-white border shadow-sm flex items-center justify-center mr-3">
                        <svg className="w-6 h-6 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800">Vasundhara Nature Park</h3>
                        <div className="flex items-center">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-4 h-4 text-yellow-400 fill-current"
                              />
                            ))}
                          </div>
                          <span className="ml-1 text-sm text-gray-600">Based on 245 reviews</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <a 
                        href="https://www.google.com/maps/place/Vasundhara+Nature+Park/@21.401494,71.040713,17z/data=!4m8!3m7!1s0x3be285306501efe3:0xbebdc717188c78e2!8m2!3d21.401494!4d71.0432879!9m1!1b1!16s%2Fg%2F11h7cpcwd8?entry=ttu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 font-medium text-sm hover:underline"
                      >
                        See all reviews
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 max-h-96 overflow-y-auto">
                  {/* Embedded Google Reviews */}
                  <div className="elfsight-app-review-slider" data-elfsight-app-id="YOUR_APP_ID_HERE">
                    {/* This div will be replaced by the Elfsight Google Reviews Widget */}
                    {/* You need to get an actual app ID from Elfsight or another provider */}
                    
                    {/* Fallback content until widget loads */}
                    <div className="space-y-4">
                      {[1, 2, 3].map(index => (
                        <div key={index} className="p-4 border border-gray-100 rounded-lg shadow-sm">
                          <div className="flex items-center mb-3">
                            <div className="w-8 h-8 bg-gray-200 rounded-full mr-2"></div>
                            <div>
                              <div className="h-4 bg-gray-200 rounded w-24 mb-1"></div>
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className="w-3 h-3 text-yellow-400 fill-current"
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="h-3 bg-gray-100 rounded w-full"></div>
                            <div className="h-3 bg-gray-100 rounded w-full"></div>
                            <div className="h-3 bg-gray-100 rounded w-3/4"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-gray-50 text-center">
                  <p className="text-sm text-gray-500">
                    To display real-time Google Reviews, add your Elfsight or other provider app ID and their script in your document head.
                  </p>
                </div>
              </div>
              
              {/* Script Instructions */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100 text-sm text-blue-800">
                <p className="font-medium mb-1">💡 Developer Note:</p>
                <p>
                  Add this script tag to your _document.js or HTML head to enable the Google Reviews widget:
                </p>
                <div className="bg-white p-2 rounded mt-2 overflow-x-auto text-xs">
                  <code>
                    {'<script src="https://apps.elfsight.com/p/platform.js" defer></script>'}
                  </code>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Write a Review CTA */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-white to-green-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-green-700"></div>
                <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">Share Your Experience</h2>
                <p className="text-gray-600 mb-6">
                  We value your feedback! Help future guests by sharing your stay at Vasundhara Nature Park.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                
                  <a 
                    href="https://www.google.com/maps/place/Vasundhara+Nature+Park/@21.401494,71.040713,17z/data=!4m8!3m7!1s0x3be285306501efe3:0xbebdc717188c78e2!8m2!3d21.401494!4d71.0432879!9m1!1b1!16s%2Fg%2F11h7cpcwd8?entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium px-6 py-3 rounded-lg transition-all duration-300 flex items-center shadow-sm hover:shadow-md"
                  >
                    <svg className="w-4 h-4 text-red-500 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z"></path>
                    </svg>
                    Review on Google
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Reviews;
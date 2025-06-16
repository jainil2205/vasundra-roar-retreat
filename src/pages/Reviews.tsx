
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ReviewCard } from "@/components/ReviewCard";
import { Star } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      comment: "Amazing experience! The lion safari was breathtaking. Staff was very knowledgeable and accommodating.",
      date: "2024-01-15",
      location: "New York, USA"
    },
    {
      id: 2,
      name: "Rajesh Patel",
      rating: 5,
      comment: "Perfect family vacation spot. Kids loved the wildlife and the rooms were comfortable. Highly recommend!",
      date: "2024-01-10",
      location: "Mumbai, India"
    },
    {
      id: 3,
      name: "Emma Williams",
      rating: 4,
      comment: "Beautiful park with incredible wildlife. The photography tour was a highlight of our trip.",
      date: "2024-01-08",
      location: "London, UK"
    },
    {
      id: 4,
      name: "Michael Chen",
      rating: 5,
      comment: "Outstanding conservation efforts and eco-friendly practices. A must-visit for nature lovers!",
      date: "2024-01-05",
      location: "Singapore"
    }
  ];

  const overallRating = 4.8;

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 text-green-800">Guest Reviews</h1>
            <div className="flex items-center justify-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${i < Math.floor(overallRating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="ml-2 text-2xl font-semibold text-gray-800">{overallRating}</span>
              <span className="ml-2 text-gray-600">({reviews.length} reviews)</span>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our guests have to say about their experience at Vasundra Nature Park
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          <div className="bg-green-50 p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-green-800 text-center">Find Us on Google</h3>
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-600 mb-4">Interactive Google Map & Reviews</p>
                <div className="bg-white p-4 rounded-lg shadow-sm inline-block">
                  <p className="text-sm text-gray-500">Vasundra Nature Park</p>
                  <p className="font-semibold">📍 Wildlife Sanctuary Road, Nature Reserve</p>
                  <p className="text-green-600">⭐ 4.8 (245 Google reviews)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Reviews;

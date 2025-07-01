import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ReviewCard } from "@/components/ReviewCard";
import { Star } from "lucide-react";

const Reviews = () => {
  const reviews = [
    // … (unchanged hard-coded guest reviews)
  ];

  const overallRating = 4.8;

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 text-green-800">
              Guest Reviews
            </h1>

            <div className="flex items-center justify-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < Math.floor(overallRating)
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-2xl font-semibold text-gray-800">
                {overallRating}
              </span>
              <span className="ml-2 text-gray-600">
                ({reviews.length} reviews)
              </span>
            </div>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our guests have to say about their experience at
              Vasundra Nature Park
            </p>
          </div>

          {/* guest review cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          {/* Google Maps + link out to reviews */}
          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-green-800 text-center">
              Find&nbsp;Us&nbsp;on&nbsp;Google
            </h3>

            {/* responsive map container */}
            <div className="relative w-full overflow-hidden rounded-lg shadow-lg aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.7055905296797!2d71.0407129752669!3d21.401493980342774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be285306501efe3%3A0xbebdc717188c78e2!2sVasundhara%20Nature%20Park!5e0!3m2!1sen!2sin!4v1751302880614!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0"
                title="Vasundra Nature Park map"
              />
            </div>

            {/* badge / link to full Google reviews */}
            <div className="flex flex-col items-center mt-6">
              <span className="text-gray-700">
                ⭐ 4.8 · 245&nbsp;Google&nbsp;reviews
              </span>
              <a
                className="text-blue-600 underline mt-1 hover:text-blue-800"
                href="https://www.google.com/maps/place/Vasundhara+Nature+Park/@21.401494,71.040713,17z/data=!4m8!3m7!1s0x3be285306501efe3:0xbebdc717188c78e2!8m2!3d21.401494!4d71.0432879!9m1!1b1!16s%2Fg%2F11h7cpcwd8?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read them on Google
              </a>
            </div>

            {/* 👉 If you later integrate the Google Places JS API,
                mount your <GoogleReviews /> component here. */}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Reviews;

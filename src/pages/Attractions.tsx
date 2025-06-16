
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AttractionCard } from "@/components/AttractionCard";

const Attractions = () => {
  const attractions = [
    {
      id: 1,
      title: "Lion Safari",
      description: "Experience the thrill of seeing majestic lions in their natural habitat during our guided safari tours.",
      image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=600&h=400&fit=crop",
      duration: "2-3 hours",
      bestTime: "Early morning & Evening"
    },
    {
      id: 2,
      title: "Bird Watching Safari",
      description: "Discover exotic birds and enjoy photography opportunities with our expert ornithologist guides.",
      image: "https://images.unsplash.com/photo-1441057206919-63d19fac2369?w=600&h=400&fit=crop",
      duration: "3-4 hours",
      bestTime: "Early morning"
    },
    {
      id: 3,
      title: "Wildlife Photography Tour",
      description: "Capture stunning photographs of lions, birds and diverse wildlife with professional photography guides.",
      image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=600&h=400&fit=crop",
      duration: "4-5 hours",
      bestTime: "Golden hour"
    },
    {
      id: 4,
      title: "Nature Walk with Lions",
      description: "Explore the park's diverse ecosystems and observe lions from safe viewing platforms with experienced guides.",
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=600&h=400&fit=crop",
      duration: "2-3 hours",
      bestTime: "Morning & Evening"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 text-green-800">Park Attractions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the wonders of Vasundra Nature Park through our exciting attractions and activities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {attractions.map((attraction) => (
              <AttractionCard key={attraction.id} attraction={attraction} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Attractions;

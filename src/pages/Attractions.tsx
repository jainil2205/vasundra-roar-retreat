
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
      title: "Wildlife Photography Tour",
      description: "Capture stunning photographs of diverse wildlife with professional photography guides.",
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=600&h=400&fit=crop",
      duration: "4-5 hours",
      bestTime: "Golden hour"
    },
    {
      id: 3,
      title: "Nature Walk",
      description: "Explore the park's diverse ecosystems on foot with experienced naturalist guides.",
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=600&h=400&fit=crop",
      duration: "1-2 hours",
      bestTime: "Morning"
    },
    {
      id: 4,
      title: "Bird Watching",
      description: "Discover over 200 species of birds in our pristine natural environment.",
      image: "https://images.unsplash.com/photo-1438565434616-3ef039228b15?w=600&h=400&fit=crop",
      duration: "2-3 hours",
      bestTime: "Early morning"
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

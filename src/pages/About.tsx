
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-center mb-8 text-green-800">About Vasundra Nature Park</h1>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop" 
                  alt="Nature Park" 
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-semibold mb-6 text-green-700">Our Story</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Vasundra Nature Park is a premier wildlife sanctuary spanning over 2,000 acres of pristine wilderness. 
                  Established in 1985, our park has been dedicated to wildlife conservation and providing visitors with 
                  unforgettable experiences in nature.
                </p>
                <p className="text-lg text-gray-700">
                  Home to majestic lions, diverse wildlife, and breathtaking landscapes, we offer a perfect blend of 
                  adventure and tranquility for nature enthusiasts and families alike.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
                <div className="text-gray-600">Wildlife Species</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">2000</div>
                <div className="text-gray-600">Acres of Wilderness</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">25</div>
                <div className="text-gray-600">Years of Conservation</div>
              </div>
            </div>

            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-green-800">Our Mission</h3>
              <p className="text-lg text-gray-700">
                To protect and preserve wildlife while providing educational and recreational opportunities 
                that inspire visitors to appreciate and conserve nature for future generations.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;

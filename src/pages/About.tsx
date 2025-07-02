import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import lion1 from "../../public/assets/Lions in natural habitat/1.jpg";
import lion2 from "../../public/assets/Lions in natural habitat/2.jpg";
import lion3 from "../../public/assets/Lions in natural habitat/3.jpg";
import lion4 from "../../public/assets/Lions in natural habitat/4.jpg";
import lion5 from "../../public/assets/Lions in natural habitat/5.jpg";

const lionImages = [
  lion1,
  lion2,
  lion3,
  lion4,
  lion5
];

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
                  src="../../public/assets/Main/2.JPG"
                  alt="Lion in Vasundra Nature Park"
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-semibold mb-6 text-green-700">Our Story</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Vasundra Nature Park is a premier wildlife sanctuary spanning over 2,000 acres of pristine wilderness.
                  Established in 1985, our park has been dedicated to lion conservation and providing visitors with
                  unforgettable experiences in their natural habitat.
                </p>
                <p className="text-lg text-gray-700">
                  Home to majestic lions, exotic birds, and diverse wildlife, we offer a perfect blend of
                  adventure and tranquility for nature enthusiasts and families alike.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">25+</div>
                <div className="text-gray-600">Lion Pride Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">150+</div>
                <div className="text-gray-600">Bird Species</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">2000</div>
                <div className="text-gray-600">Acres of Wilderness</div>
              </div>
            </div>

            <div className="bg-green-50 p-8 rounded-lg mb-16">
              <h3 className="text-2xl font-semibold mb-4 text-green-800">Our Mission</h3>
              <p className="text-lg text-gray-700">
                To protect and preserve lions and other wildlife while providing educational and recreational opportunities
                that inspire visitors to appreciate and conserve nature for future generations.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-3xl font-semibold text-green-700 mb-6 text-center">Lion Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {lionImages.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Lion ${index + 1}`}
                    className="rounded-lg shadow-md w-full h-64 object-cover"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;

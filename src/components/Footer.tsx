
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-green-900 text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Main footer content grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center sm:text-left">
          
          {/* About Section */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-2xl font-bold mb-4">Vasundra Nature Park</h3>
            <p className="text-green-200 mb-4 max-w-xs">
              Experience the wild beauty of nature and create unforgettable memories in our pristine wilderness sanctuary.
            </p>
          </div>
          
          {/* Quick Links Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link to="/about" className="block text-green-200 hover:text-white transition-colors duration-300">About Us</Link>
              <Link to="/attractions" className="block text-green-200 hover:text-white transition-colors duration-300">Attractions</Link>
              <Link to="/rooms" className="block text-green-200 hover:text-white transition-colors duration-300">Accommodation</Link>
              <Link to="/contact" className="block text-green-200 hover:text-white transition-colors duration-300">Contact</Link>
            </nav>
          </div>
          
          {/* Contact Info Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center sm:justify-start">
                <MapPin className="w-5 h-5 mr-3 text-green-400 flex-shrink-0" />
                <span className="text-green-200">Wildlife Sanctuary Road</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <Phone className="w-5 h-5 mr-3 text-green-400 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-green-200 hover:text-white transition-colors">+91 98765 43210</a>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <Mail className="w-5 h-5 mr-3 text-green-400 flex-shrink-0" />
                <a href="mailto:info@vasundranaturepark.com" className="text-green-200 hover:text-white transition-colors">info@vasundranaturepark.com</a>
              </div>
            </div>
          </div>
          
          {/* Operating Hours Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Operating Hours</h4>
            <div className="text-green-200">
              <p className="mb-2"><strong>Park:</strong> 6:00 AM - 6:00 PM</p>
              <p className="mb-2"><strong>Reception:</strong> 24/7</p>
              <p><strong>Safari Tours:</strong> 6:30 AM - 5:30 PM</p>
            </div>
          </div>

        </div>
        
        {/* Bottom Bar with Social Links and Copyright */}
        <div className="border-t border-green-700 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-green-300 text-center md:text-left mb-4 md:mb-0">
            © {new Date().getFullYear()} Vasundra Nature Park. All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="text-green-300 hover:text-white transition-transform duration-300 hover:scale-110">
              <Facebook size={24} />
            </a>
            <a href="#" aria-label="Twitter" className="text-green-300 hover:text-white transition-transform duration-300 hover:scale-110">
              <Twitter size={24} />
            </a>
            <a href="#" aria-label="Instagram" className="text-green-300 hover:text-white transition-transform duration-300 hover:scale-110">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

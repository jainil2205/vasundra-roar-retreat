
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Vasundra Nature Park</h3>
            <p className="text-green-100 mb-4">
              Experience the wild beauty of nature and create unforgettable memories in our pristine wilderness sanctuary.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/about" className="block text-green-100 hover:text-white transition-colors">About Us</Link>
              <Link to="/attractions" className="block text-green-100 hover:text-white transition-colors">Attractions</Link>
              <Link to="/rooms" className="block text-green-100 hover:text-white transition-colors">Accommodation</Link>
              <Link to="/contact" className="block text-green-100 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-green-300" />
                <span className="text-green-100">Wildlife Sanctuary Road</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-green-300" />
                <span className="text-green-100">+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-green-300" />
                <span className="text-green-100">info@vasundranaturepark.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Operating Hours</h4>
            <div className="text-green-100">
              <p className="mb-2">Park: 6:00 AM - 6:00 PM</p>
              <p className="mb-2">Reception: 24/7</p>
              <p>Safari Tours: 6:30 AM - 5:30 PM</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-green-700 mt-12 pt-8 text-center">
          <p className="text-green-100">
            © 2024 Vasundra Nature Park. All rights reserved. | Committed to Wildlife Conservation
          </p>
        </div>
      </div>
    </footer>
  );
};

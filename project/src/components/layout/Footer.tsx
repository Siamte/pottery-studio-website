import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-studio-blue-800 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-serif text-xl mb-4">Clay Collective</h3>
            <p className="text-gray-300 mb-4">
              Handcrafted pottery studio and workshop space dedicated to the art of ceramics.
              We offer unique pieces and lessons for all skill levels.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-terracotta-300 transition">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-terracotta-300 transition">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-terracotta-300 transition">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-gray-300 hover:text-terracotta-300 transition">Shop</Link>
              </li>
              <li>
                <Link to="/classes" className="text-gray-300 hover:text-terracotta-300 transition">Classes & Workshops</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-terracotta-300 transition">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-terracotta-300 transition">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-xl mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 text-terracotta-400" />
                <span className="text-gray-300">123 Pottery Lane, Clay District, CA 90210</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-terracotta-400" />
                <span className="text-gray-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-terracotta-400" />
                <span className="text-gray-300">hello@claycollective.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-serif text-xl mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for updates on new products, workshops, and special events.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 bg-studio-blue-700 text-white border border-studio-blue-600 rounded focus:outline-none focus:ring-2 focus:ring-terracotta-400"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-terracotta-500 hover:bg-terracotta-600 transition rounded text-white font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-studio-blue-700 mt-12 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Clay Collective. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy" className="hover:text-terracotta-300 transition">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-terracotta-300 transition">Terms of Service</Link>
            <Link to="/shipping" className="hover:text-terracotta-300 transition">Shipping Info</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
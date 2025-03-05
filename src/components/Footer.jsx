import React from 'react';
import { Activity, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Activity className="h-6 w-6" />
              <span className="text-xl font-bold">LiveScore Hub</span>
            </div>
            <p className="text-gray-400">Real-time sports scores and updates at your fingertips.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-indigo-400"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-indigo-400"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-indigo-400"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Sports</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Football</a></li>
              <li><a href="#" className="hover:text-white">Basketball</a></li>
              <li><a href="#" className="hover:text-white">Cricket</a></li>
              <li><a href="#" className="hover:text-white">Tennis</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>support@livescorehub.com</li>
              <li>000000000</li>
              <li>javeed sports</li>
              <li>india</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 LiveScore Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Activity, Menu, X, User } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-indigo-600 text-white">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Activity className="h-8 w-8" />
            <span className="text-xl font-bold">LiveScore Hub</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-indigo-200">Home</Link>
            <a href="#features" className="hover:text-indigo-200">Features</a>
            <a href="#sports" className="hover:text-indigo-200">Sports</a>
            <a href="#contact" className="hover:text-indigo-200">Contact</a>
            
            {currentUser ? (
              <div className="flex items-center space-x-4">
                <Link to="/dashboard" className="flex items-center space-x-2 hover:text-indigo-200">
                  <User className="h-5 w-5" />
                  <span>{currentUser.name}</span>
                </Link>
                <button 
                  onClick={handleLogout}
                  className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-indigo-100 transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login" className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-indigo-100 transition-colors">
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link to="/" className="block hover:text-indigo-200">Home</Link>
            <a href="#features" className="block hover:text-indigo-200">Features</a>
            <a href="#sports" className="block hover:text-indigo-200">Sports</a>
            <a href="#contact" className="block hover:text-indigo-200">Contact</a>
            
            {currentUser ? (
              <>
                <Link to="/dashboard" className="flex items-center space-x-2 hover:text-indigo-200">
                  <User className="h-5 w-5" />
                  <span>{currentUser.name}</span>
                </Link>
                <button 
                  onClick={handleLogout}
                  className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-indigo-100 transition-colors w-full"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-indigo-100 transition-colors block text-center">
                Sign In
              </Link>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

const RegisterEmail = () => {
  const [formData, setFormData] = useState({
    email: '',
    personalData: null
  });
  const [formError, setFormError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { register } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Get data from previous step
    const storedData = sessionStorage.getItem('registerData');
    if (!storedData) {
      // If no data, redirect to first step
      navigate('/register/personal');
      return;
    }
    
    setFormData(prev => ({
      ...prev,
      personalData: JSON.parse(storedData)
    }));
  }, [navigate]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');
    
    // Basic validation
    if (!formData.email) {
      setFormError('Email is required');
      return;
    }
    
    if (!formData.personalData) {
      setFormError('Personal information is missing. Please go back to step 1.');
      return;
    }
    
    try {
      setIsLoading(true);
      
      // Combine data from both steps
      const userData = {
        name: formData.personalData.name,
        email: formData.email,
        password: formData.personalData.password
      };
      
      // Register user
      await register(userData);
      
      // Clear session storage
      sessionStorage.removeItem('registerData');
      
      // Redirect to dashboard
      navigate('/dashboard');
    } catch (error) {
      setFormError(error.message || 'Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="flex-grow flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-md">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Contact Information</h2>
          <p className="mt-2 text-sm text-gray-600">
            Step 2 of 2
          </p>
        </div>
        
        {formError && (
          <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
            <div className="flex items-center">
              <AlertCircle className="h-5 w-5 text-red-400 mr-2" />
              <p className="text-sm text-red-700">{formError}</p>
            </div>
          </div>
        )}
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <Link to="/register/personal" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
              Back
            </Link>
            
            <button
              type="submit"
              disabled={isLoading}
              className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-70"
            >
              {isLoading ? 'Creating Account...' : 'Complete Registration'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterEmail;
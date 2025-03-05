import React from 'react';
import { Link } from 'react-router-dom';
import { UserPlus } from 'lucide-react';

const Register = () => {
  return (
    <div className="flex-grow flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-md">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Create your account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign in
            </Link>
          </p>
        </div>
        
        <div className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Registration Process</h3>
                <p className="text-gray-600 mb-6">
                  Complete the following steps to create your LiveScore Hub account:
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold">1</div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-md font-medium text-gray-900">Personal Information</h4>
                      <p className="text-sm text-gray-500">Provide your name and create a password</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold">2</div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-md font-medium text-gray-900">Contact Information</h4>
                      <p className="text-sm text-gray-500">Add your email address to complete registration</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Link
              to="/register/personal"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <UserPlus className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" />
              </span>
              Start Registration
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
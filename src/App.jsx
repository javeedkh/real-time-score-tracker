import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import RegisterPersonal from './pages/RegisterPersonal';
import RegisterEmail from './pages/RegisterEmail';
import Dashboard from './pages/Dashboard';
import { useAuth } from './hooks/useAuth';

function App() {
  const { currentUser } = useAuth();

  // Protected route component
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/personal" element={<RegisterPersonal />} />
        <Route path="/register/email" element={<RegisterEmail />} />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
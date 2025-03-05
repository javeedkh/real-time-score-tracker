import React from 'react';
import { Clock, Globe, Bell, Zap, Shield, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Real-Time Updates',
      description: 'Get instant score updates with minimal latency across all sports.'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Global Coverage',
      description: 'Follow sports events from around the world, all in one place.'
    },
    {
      icon: <Bell className="h-8 w-8" />,
      title: 'Custom Alerts',
      description: 'Set notifications for your favorite teams and matches.'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Lightning Fast',
      description: 'Experience blazing fast performance with our optimized platform.'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Reliable Data',
      description: 'Trust in our accurate and verified sports information.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Community',
      description: 'Join discussions with other sports enthusiasts.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose LiveScore Hub?</h2>
          <p className="text-xl text-gray-600">Stay connected to every moment in sports with our cutting-edge features.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-indigo-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
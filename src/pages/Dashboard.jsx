import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { User, Calendar, LogOut, Settings, Bell, Star } from 'lucide-react';

const Dashboard = () => {
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('profile');
  
  const { currentUser, logout, getProfile } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userData = await getProfile();
        setProfile(userData);
      } catch (error) {
        console.error('Error fetching profile:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchProfile();
  }, [getProfile]);
  
  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };
  
  // Mock data for favorites
  const favoriteTeams = [
    { id: 1, name: 'Manchester United', league: 'Premier League', sport: 'Football' },
    { id: 2, name: 'LA Lakers', league: 'NBA', sport: 'Basketball' },
    { id: 3, name: 'Mumbai Indians', league: 'IPL', sport: 'Cricket' }
  ];
  
  // Mock data for recent matches
  const recentMatches = [
    { id: 1, teams: 'Manchester United vs Liverpool', score: '2-1', date: '2024-05-15', sport: 'Football' },
    { id: 2, teams: 'LA Lakers vs Chicago Bulls', score: '105-98', date: '2024-05-14', sport: 'Basketball' },
    { id: 3, teams: 'Mumbai Indians vs Chennai Super Kings', score: '189/5 - 187/8', date: '2024-05-12', sport: 'Cricket' }
  ];
  
  if (isLoading) {
    return (
      <div className="flex-grow flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }
  
  return (
    <div className="flex-grow bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-indigo-600 text-white rounded-lg p-6 mb-8">
          <h1 className="text-3xl font-bold">Welcome, {currentUser?.name || 'User'}!</h1>
          <p className="mt-2">Manage your account and view your favorite sports updates.</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="md:w-1/4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 bg-indigo-50 border-b border-gray-200">
                <div className="flex items-center space-x-4">
                  <div className="bg-indigo-100 p-3 rounded-full">
                    <User className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">{currentUser?.name}</h2>
                    <p className="text-gray-600 text-sm">{currentUser?.email}</p>
                  </div>
                </div>
              </div>
              
              <nav className="p-4">
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => setActiveTab('profile')}
                      className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                        activeTab === 'profile' ? 'bg-indigo-50 text-indigo-700' : 'hover:bg-gray-50'
                      }`}
                    >
                      <User className="h-5 w-5" />
                      <span>Profile</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab('favorites')}
                      className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                        activeTab === 'favorites' ? 'bg-indigo-50 text-indigo-700' : 'hover:bg-gray-50'
                      }`}
                    >
                      <Star className="h-5 w-5" />
                      <span>Favorites</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab('recent')}
                      className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                        activeTab === 'recent' ? 'bg-indigo-50 text-indigo-700' : 'hover:bg-gray-50'
                      }`}
                    >
                      <Calendar className="h-5 w-5" />
                      <span>Recent Matches</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab('notifications')}
                      className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                        activeTab === 'notifications' ? 'bg-indigo-50 text-indigo-700' : 'hover:bg-gray-50'
                      }`}
                    >
                      <Bell className="h-5 w-5" />
                      <span>Notifications</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab('settings')}
                      className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                        activeTab === 'settings' ? 'bg-indigo-50 text-indigo-700' : 'hover:bg-gray-50'
                      }`}
                    >
                      <Settings className="h-5 w-5" />
                      <span>Settings</span>
                    </button>
                  </li>
                  <li className="pt-4 border-t border-gray-200 mt-4">
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center space-x-3 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <LogOut className="h-5 w-5" />
                      <span>Logout</span>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="md:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              {activeTab === 'profile' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Profile Information</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <div className="bg-gray-50 px-4 py-2 rounded-md">{profile?.name}</div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <div className="bg-gray-50 px-4 py-2 rounded-md">{profile?.email}</div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Member Since</label>
                      <div className="bg-gray-50 px-4 py-2 rounded-md">
                        {profile?.createdAt ? new Date(profile.createdAt).toLocaleDateString() : 'N/A'}
                      </div>
                    </div>
                    <div className="pt-4">
                      <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
                        Edit Profile
                      </button>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'favorites' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Favorite Teams</h2>
                  {favoriteTeams.length > 0 ? (
                    <div className="space-y-4">
                      {favoriteTeams.map(team => (
                        <div key={team.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="flex justify-between items-center">
                            <div>
                              <h3 className="font-semibold text-lg">{team.name}</h3>
                              <p className="text-gray-600 text-sm">{team.league} • {team.sport}</p>
                            </div>
                            <button className="text-gray-400 hover:text-red-500">
                              <Star className="h-5 w-5 fill-current text-yellow-400" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <p>You haven't added any favorite teams yet.</p>
                      <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
                        Browse Teams
                      </button>
                    </div>
                  )}
                </div>
              )}
              
              {activeTab === 'recent' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Recent Matches</h2>
                  {recentMatches.length > 0 ? (
                    <div className="space-y-4">
                      {recentMatches.map(match => (
                        <div key={match.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="flex justify-between items-center">
                            <div>
                              <h3 className="font-semibold text-lg">{match.teams}</h3>
                              <p className="text-gray-600 text-sm">{match.sport} • {new Date(match.date).toLocaleDateString()}</p>
                            </div>
                            <div className="text-lg font-semibold">{match.score}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <p>No recent matches to display.</p>
                    </div>
                  )}
                </div>
              )}
              
              {activeTab === 'notifications' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Notifications</h2>
                  <div className="text-center py-8 text-gray-500">
                    <p>You have no new notifications.</p>
                  </div>
                </div>
              )}
              
              {activeTab === 'settings' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-3">Notification Preferences</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <label htmlFor="email-notifications" className="text-gray-700">Email Notifications</label>
                          <input type="checkbox" id="email-notifications" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                        </div>
                        <div className="flex items-center justify-between">
                          <label htmlFor="match-alerts" className="text-gray-700">Match Alerts</label>
                          <input type="checkbox" id="match-alerts" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                        </div>
                        <div className="flex items-center justify-between">
                          <label htmlFor="news-updates" className="text-gray-700">News Updates</label>
                          <input type="checkbox" id="news-updates" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-3">Security</h3>
                      <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors">
                        Change Password
                      </button>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-3">Danger Zone</h3>
                      <button className="px-4 py-2 bg-red-100 text-red-600 rounded-md hover:bg-red-200 transition-colors">
                        Delete Account
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
// src/components/Layout/Header.tsx
import React from 'react';
import { Bell, Search } from 'lucide-react';
import { mockUserProfile } from '../../services/mockData';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex-1 max-w-2xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search problems, contests..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="relative p-2 text-gray-600 hover:text-primary-600 rounded-lg hover:bg-gray-50">
            <Bell className="w-6 h-6" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <div className="flex items-center space-x-3">
            <img
              src={mockUserProfile.avatar}
              alt={mockUserProfile.username}
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm font-medium text-gray-700">
              {mockUserProfile.username}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
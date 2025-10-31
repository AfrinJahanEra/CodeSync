// src/components/Layout/Sidebar.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Code2, 
  Trophy, 
  BarChart3, 
  Lightbulb,
  Settings
} from 'lucide-react';

const Sidebar: React.FC = () => {
  const location = useLocation();

  const menuItems = [
    { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/problems', icon: Code2, label: 'Problems' },
    { path: '/contests', icon: Trophy, label: 'Contests' },
    { path: '/analytics', icon: BarChart3, label: 'Analytics' },
    { path: '/recommendations', icon: Lightbulb, label: 'Recommendations' },
  ];

  return (
    <div className="w-64 bg-white shadow-lg">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-primary-600">CodeSync</h1>
        <p className="text-sm text-gray-600">CP Companion</p>
      </div>
      
      <nav className="mt-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-6 py-3 text-sm font-medium transition-colors ${
                isActive
                  ? 'text-primary-600 bg-primary-50 border-r-2 border-primary-600'
                  : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="absolute bottom-0 w-64 p-6 border-t">
        <button className="flex items-center text-sm font-medium text-gray-600 hover:text-primary-600">
          <Settings className="w-5 h-5 mr-3" />
          Settings
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
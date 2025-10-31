// src/pages/Dashboard.tsx
import React from 'react';
import StatsGrid from '../components/Dashboard/StatsGrid';
import RecentActivity from '../components/Dashboard/RecentActivity';
import PlatformCards from '../components/Dashboard/PlatformCards';
import QuickActions from '../components/Dashboard/QuickActions';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's your CP progress overview.</p>
      </div>

      <StatsGrid />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <PlatformCards />
        </div>
        <div className="space-y-6">
          <QuickActions />
          <RecentActivity />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
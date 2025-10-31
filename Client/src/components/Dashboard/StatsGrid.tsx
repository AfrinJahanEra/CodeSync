// src/components/Dashboard/StatsGrid.tsx
import React from 'react';
import { Code2, Trophy, Target, TrendingUp } from 'lucide-react';
import { mockAnalytics, mockOJAccounts } from '../../services/mockData';

const StatsGrid: React.FC = () => {
  const totalProblems = mockAnalytics.totalSolved;
  const totalPlatforms = mockOJAccounts.length;
  const averageRating = Math.round(
    mockOJAccounts.reduce((sum, acc) => sum + (acc.rating || 0), 0) / mockOJAccounts.length
  );

  const stats = [
    {
      title: 'Total Problems Solved',
      value: totalProblems.toLocaleString(),
      icon: Code2,
      color: 'text-blue-600 bg-blue-50',
      change: '+12 this week',
    },
    {
      title: 'Active Platforms',
      value: totalPlatforms.toString(),
      icon: Trophy,
      color: 'text-green-600 bg-green-50',
      change: 'All connected',
    },
    {
      title: 'Average Rating',
      value: averageRating.toString(),
      icon: TrendingUp,
      color: 'text-purple-600 bg-purple-50',
      change: '+45 this month',
    },
    {
      title: 'Current Streak',
      value: '7 days',
      icon: Target,
      color: 'text-orange-600 bg-orange-50',
      change: 'Keep going!',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                <p className="text-xs text-green-600 mt-1">{stat.change}</p>
              </div>
              <div className={`p-3 rounded-lg ${stat.color}`}>
                <Icon className="w-6 h-6" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsGrid;
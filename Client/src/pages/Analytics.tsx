import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend
} from 'recharts';
import { mockAnalytics } from '../services/mockData';

const Analytics: React.FC = () => {
  const platformData = Object.entries(mockAnalytics.byPlatform).map(([platform, count]) => ({
    platform: platform.charAt(0).toUpperCase() + platform.slice(1),
    count,
  }));

  // Calculate total for percentage calculations
  const totalProblems = mockAnalytics.totalSolved;

  const difficultyData = [
    { 
      name: 'Easy', 
      count: mockAnalytics.byDifficulty.easy, 
      percent: (mockAnalytics.byDifficulty.easy / totalProblems * 100).toFixed(1),
      color: '#10b981' 
    },
    { 
      name: 'Medium', 
      count: mockAnalytics.byDifficulty.medium, 
      percent: (mockAnalytics.byDifficulty.medium / totalProblems * 100).toFixed(1),
      color: '#f59e0b' 
    },
    { 
      name: 'Hard', 
      count: mockAnalytics.byDifficulty.hard, 
      percent: (mockAnalytics.byDifficulty.hard / totalProblems * 100).toFixed(1),
      color: '#ef4444' 
    },
  ];

  // Custom label for pie chart
  const renderCustomizedLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, percent
  }:any) => {
    if (!percent) return null;
    
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text 
        x={x} 
        y={y} 
        fill="white" 
        textAnchor={x > cx ? 'start' : 'end'} 
        dominantBaseline="central"
        fontSize={12}
        fontWeight="bold"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  // Custom tooltip for pie chart
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-3 border border-gray-300 rounded-lg shadow-sm">
          <p className="font-medium text-gray-900">{data.name}</p>
          <p className="text-sm text-gray-600">
            {data.count} problems ({data.percent}%)
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
        <p className="text-gray-600">Detailed insights into your competitive programming journey</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Total Solved</h3>
          <div className="text-3xl font-bold text-primary-600">
            {mockAnalytics.totalSolved}
          </div>
          <p className="text-sm text-gray-600 mt-2">Problems across all platforms</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Best Platform</h3>
          <div className="text-3xl font-bold text-green-600">
            Codeforces
          </div>
          <p className="text-sm text-gray-600 mt-2">456 problems solved</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Strongest Topic</h3>
          <div className="text-3xl font-bold text-purple-600">
            Data Structures
          </div>
          <p className="text-sm text-gray-600 mt-2">88% strength score</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Problems by Platform</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={platformData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="platform" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Problems by Difficulty</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={difficultyData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="count"
              >
                {difficultyData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 lg:col-span-2">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Rating Progress</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={mockAnalytics.ratingProgress}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="rating" 
                stroke="#3b82f6" 
                strokeWidth={2}
                name="Rating"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 lg:col-span-2">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Topic Distribution</h3>
          <div className="space-y-4">
            {mockAnalytics.topicDistribution.map((topic) => (
              <div key={topic.topic} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-gray-900">{topic.topic}</span>
                  <span className="text-gray-600">{topic.count} problems • {topic.strength}% strength</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${topic.strength}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
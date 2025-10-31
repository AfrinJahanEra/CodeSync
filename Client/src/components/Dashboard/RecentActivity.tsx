// src/components/Dashboard/RecentActivity.tsx
import React from 'react';
import { CheckCircle, Clock } from 'lucide-react';
import { mockProblems } from '../../services/mockData';
import { formatDate, getPlatformColor, getDifficultyColor } from '../../utils/formatters';

const RecentActivity: React.FC = () => {
  const recentProblems = mockProblems.slice(0, 5);

  const getStatusIcon = (solved: boolean) => {
    if (solved) {
      return <CheckCircle className="w-4 h-4 text-green-500" />;
    }
    return <Clock className="w-4 h-4 text-yellow-500" />;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
      <div className="space-y-3">
        {recentProblems.map((problem) => (
          <div
            key={problem.id}
            className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-primary-300 transition-colors"
          >
            <div className="flex items-center space-x-3">
              {getStatusIcon(problem.solved)}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {problem.title}
                </p>
                <div className="flex items-center space-x-2 mt-1">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${getPlatformColor(
                      problem.platform
                    )}`}
                  >
                    {problem.platform}
                  </span>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${getDifficultyColor(
                      problem.difficulty
                    )}`}
                  >
                    {problem.difficulty}
                  </span>
                </div>
              </div>
            </div>
            {problem.submissionDate && (
              <span className="text-xs text-gray-500 whitespace-nowrap">
                {formatDate(problem.submissionDate)}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
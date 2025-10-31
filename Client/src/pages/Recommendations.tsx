// src/pages/Recommendations.tsx
import React from 'react';
import { Target, Clock, TrendingUp } from 'lucide-react';
import { mockRecommendations } from '../services/mockData';
import { getPlatformColor, getDifficultyColor } from '../utils/formatters';

const Recommendations: React.FC = () => {
  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high':
        return <Target className="w-4 h-4 text-red-500" />;
      case 'medium':
        return <TrendingUp className="w-4 h-4 text-yellow-500" />;
      case 'low':
        return <Clock className="w-4 h-4 text-green-500" />;
      default:
        return <Target className="w-4 h-4 text-gray-500" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'text-red-600 bg-red-50';
      case 'medium':
        return 'text-yellow-600 bg-yellow-50';
      case 'low':
        return 'text-green-600 bg-green-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Recommendations</h1>
        <p className="text-gray-600">Personalized problem suggestions based on your performance</p>
      </div>

      <div className="grid gap-6">
        {mockRecommendations.map((recommendation) => (
          <div
            key={recommendation.id}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:border-primary-300 transition-colors"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                {getPriorityIcon(recommendation.priority)}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {recommendation.problem.title}
                  </h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className={`px-2 py-1 text-xs rounded-full ${getPlatformColor(recommendation.problem.platform)}`}>
                      {recommendation.problem.platform}
                    </span>
                    <span className={`px-2 py-1 text-xs rounded-full ${getDifficultyColor(recommendation.problem.difficulty)}`}>
                      {recommendation.problem.difficulty}
                    </span>
                    <span className={`px-2 py-1 text-xs rounded-full ${getPriorityColor(recommendation.priority)}`}>
                      {recommendation.priority} priority
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-gray-600 mb-4">{recommendation.reason}</p>

            <div className="flex items-center justify-between">
              <div className="flex space-x-1">
                {recommendation.problem.tags.map((tag) => (
                  <span key={tag} className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center space-x-3">
                <button className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors">
                  Skip
                </button>
                <a
                  href={recommendation.problem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Solve Problem
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">
          How recommendations work
        </h3>
        <p className="text-blue-800">
          Our AI analyzes your submission history, problem ratings, and topic performance 
          to suggest problems that will help you improve efficiently. Recommendations are 
          updated daily based on your recent activity.
        </p>
      </div>
    </div>
  );
};

export default Recommendations;
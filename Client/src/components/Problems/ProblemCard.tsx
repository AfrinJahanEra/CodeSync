// src/components/Problems/ProblemCard.tsx
import React from 'react';
import { ExternalLink, CheckCircle, Clock } from 'lucide-react';
import type { Problem } from '../../types';
import { getPlatformColor, getDifficultyColor } from '../../utils/formatters';

interface ProblemCardProps {
  problem: Problem;
  viewMode: 'grid' | 'list';
}

const ProblemCard: React.FC<ProblemCardProps> = ({ problem, viewMode }) => {
  if (viewMode === 'list') {
    return (
      <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-primary-300 transition-colors">
        <div className="flex items-center space-x-4 flex-1">
          {problem.solved ? (
            <CheckCircle className="w-5 h-5 text-green-500" />
          ) : (
            <Clock className="w-5 h-5 text-yellow-500" />
          )}
          
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-gray-900 truncate">{problem.title}</h3>
            <div className="flex items-center space-x-2 mt-1">
              <span className={`px-2 py-1 text-xs rounded-full ${getPlatformColor(problem.platform)}`}>
                {problem.platform}
              </span>
              <span className={`px-2 py-1 text-xs rounded-full ${getDifficultyColor(problem.difficulty)}`}>
                {problem.difficulty}
              </span>
              <div className="flex space-x-1">
                {problem.tags.slice(0, 2).map((tag) => (
                  <span key={tag} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
                {problem.tags.length > 2 && (
                  <span className="text-xs text-gray-500">+{problem.tags.length - 2}</span>
                )}
              </div>
            </div>
          </div>
        </div>

        <a
          href={problem.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-gray-400 hover:text-primary-600 rounded-lg hover:bg-gray-50 ml-4"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-2">
          {problem.solved ? (
            <CheckCircle className="w-4 h-4 text-green-500" />
          ) : (
            <Clock className="w-4 h-4 text-yellow-500" />
          )}
          <span className={`px-2 py-1 text-xs rounded-full ${getPlatformColor(problem.platform)}`}>
            {problem.platform}
          </span>
        </div>
        <a
          href={problem.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1 text-gray-400 hover:text-primary-600 rounded"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">{problem.title}</h3>
      
      <div className="flex items-center space-x-2 mb-3">
        <span className={`px-2 py-1 text-xs rounded-full ${getDifficultyColor(problem.difficulty)}`}>
          {problem.difficulty}
        </span>
      </div>

      <div className="flex flex-wrap gap-1 mb-4">
        {problem.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
            {tag}
          </span>
        ))}
        {problem.tags.length > 3 && (
          <span className="text-xs text-gray-500">+{problem.tags.length - 3}</span>
        )}
      </div>

      <button className="w-full py-2 text-sm font-medium text-primary-600 border border-primary-600 rounded-lg hover:bg-primary-50 transition-colors">
        {problem.solved ? 'Solved' : 'Solve Problem'}
      </button>
    </div>
  );
};

export default ProblemCard;
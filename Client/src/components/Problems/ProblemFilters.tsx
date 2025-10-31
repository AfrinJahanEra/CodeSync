// src/components/Problems/ProblemFilters.tsx
import React from 'react';
import { Filter } from 'lucide-react';

interface ProblemFiltersProps {
  selectedPlatforms: string[];
  setSelectedPlatforms: (platforms: string[]) => void;
  selectedDifficulties: string[];
  setSelectedDifficulties: (difficulties: string[]) => void;
}

const ProblemFilters: React.FC<ProblemFiltersProps> = ({
  selectedPlatforms,
  setSelectedPlatforms,
  selectedDifficulties,
  setSelectedDifficulties,
}) => {
  const platforms = ['codeforces', 'leetcode', 'codechef', 'atcoder', 'cses', 'hackerrank'];
  const difficulties = ['easy', 'medium', 'hard'];

  const togglePlatform = (platform: string) => {
    if (selectedPlatforms.includes(platform)) {
      setSelectedPlatforms(selectedPlatforms.filter(p => p !== platform));
    } else {
      setSelectedPlatforms([...selectedPlatforms, platform]);
    }
  };

  const toggleDifficulty = (difficulty: string) => {
    if (selectedDifficulties.includes(difficulty)) {
      setSelectedDifficulties(selectedDifficulties.filter(d => d !== difficulty));
    } else {
      setSelectedDifficulties([...selectedDifficulties, difficulty]);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Filter className="w-5 h-5 text-gray-600" />
        <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="font-medium text-gray-900 mb-3">Platform</h4>
          <div className="space-y-2">
            {platforms.map((platform) => (
              <label key={platform} className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedPlatforms.includes(platform)}
                  onChange={() => togglePlatform(platform)}
                  className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                />
                <span className="ml-2 text-sm text-gray-700 capitalize">
                  {platform}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium text-gray-900 mb-3">Difficulty</h4>
          <div className="space-y-2">
            {difficulties.map((difficulty) => (
              <label key={difficulty} className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedDifficulties.includes(difficulty)}
                  onChange={() => toggleDifficulty(difficulty)}
                  className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                />
                <span className="ml-2 text-sm text-gray-700 capitalize">
                  {difficulty}
                </span>
              </label>
            ))}
          </div>
        </div>

        <button
          onClick={() => {
            setSelectedPlatforms([]);
            setSelectedDifficulties([]);
          }}
          className="w-full py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
        >
          Clear All Filters
        </button>
      </div>
    </div>
  );
};

export default ProblemFilters;
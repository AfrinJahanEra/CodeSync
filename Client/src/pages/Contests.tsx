// src/pages/Contests.tsx
import React, { useState } from 'react';
import { Calendar, Clock, ExternalLink, Bell, BellOff } from 'lucide-react';
import { mockContests } from '../services/mockData';
import { formatDateTime, getTimeUntilContest, getPlatformColor } from '../utils/formatters';

const Contests: React.FC = () => {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);

  const filteredContests = selectedPlatforms.length === 0 
    ? mockContests 
    : mockContests.filter(contest => selectedPlatforms.includes(contest.platform));

  const platforms = ['codeforces', 'leetcode', 'codechef', 'atcoder'];

  const togglePlatform = (platform: string) => {
    if (selectedPlatforms.includes(platform)) {
      setSelectedPlatforms(selectedPlatforms.filter(p => p !== platform));
    } else {
      setSelectedPlatforms([...selectedPlatforms, platform]);
    }
  };

  const toggleRegistration = (contestId: string) => {
    // In real app, this would make an API call
    console.log('Toggling registration for contest:', contestId);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Contests</h1>
        <p className="text-gray-600">Upcoming programming contests and competitions</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {platforms.map((platform) => (
          <button
            key={platform}
            onClick={() => togglePlatform(platform)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              selectedPlatforms.includes(platform)
                ? getPlatformColor(platform)
                : 'text-gray-600 bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {platform.charAt(0).toUpperCase() + platform.slice(1)}
          </button>
        ))}
        {selectedPlatforms.length > 0 && (
          <button
            onClick={() => setSelectedPlatforms([])}
            className="px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200"
          >
            Clear
          </button>
        )}
      </div>

      <div className="grid gap-4">
        {filteredContests.map((contest) => (
          <div
            key={contest.id}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:border-primary-300 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-lg ${getPlatformColor(contest.platform)}`}>
                  <Calendar className="w-6 h-6" />
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{contest.name}</h3>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{formatDateTime(contest.startTime)}</span>
                    </div>
                    <span>•</span>
                    <span>{contest.duration} minutes</span>
                    <span>•</span>
                    <span className={`px-2 py-1 rounded-full text-xs ${getPlatformColor(contest.platform)}`}>
                      {contest.platform}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="text-right mr-4">
                  <div className="text-sm font-medium text-gray-900">
                    {getTimeUntilContest(contest.startTime)}
                  </div>
                  <div className="text-xs text-gray-500">Starts in</div>
                </div>

                <button
                  onClick={() => toggleRegistration(contest.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                    contest.registered
                      ? 'bg-green-100 text-green-700 hover:bg-green-200'
                      : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
                  }`}
                >
                  {contest.registered ? (
                    <>
                      <BellOff className="w-4 h-4" />
                      <span>Unregister</span>
                    </>
                  ) : (
                    <>
                      <Bell className="w-4 h-4" />
                      <span>Register</span>
                    </>
                  )}
                </button>

                <a
                  href={contest.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-primary-600 rounded-lg hover:bg-gray-50"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contests;
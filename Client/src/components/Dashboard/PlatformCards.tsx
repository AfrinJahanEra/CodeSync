// src/components/Dashboard/PlatformCards.tsx
import React from 'react';
import { ExternalLink, TrendingUp } from 'lucide-react';
import { mockOJAccounts } from '../../services/mockData';
import { getPlatformColor } from '../../utils/formatters';

const PlatformCards: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Platform Accounts</h2>
        <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
          Manage Accounts
        </button>
      </div>

      <div className="space-y-4">
        {mockOJAccounts.map((account) => (
          <div
            key={account.platform}
            className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-primary-300 transition-colors"
          >
            <div className="flex items-center space-x-4">
              <div
                className={`px-3 py-1 rounded-full text-sm font-medium ${getPlatformColor(
                  account.platform
                )}`}
              >
                {account.platform.charAt(0).toUpperCase() + account.platform.slice(1)}
              </div>
              <div>
                <p className="font-medium text-gray-900">@{account.handle}</p>
                <p className="text-sm text-gray-600">
                  {account.solved} solved • {account.submissions} submissions
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="font-semibold text-gray-900">{account.rating}</p>
                <p className="text-sm text-gray-600">{account.rank}</p>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <a
                  href={`https://${account.platform}.com/profile/${account.handle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-primary-600 rounded-lg hover:bg-gray-50"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlatformCards;
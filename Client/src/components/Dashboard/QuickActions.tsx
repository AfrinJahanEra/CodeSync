// src/components/Dashboard/QuickActions.tsx
import React from 'react';
import { Plus, Clock, Target, BookOpen } from 'lucide-react';

const QuickActions: React.FC = () => {
  const actions = [
    {
      icon: Plus,
      label: 'Add Platform',
      description: 'Connect new OJ account',
      color: 'text-blue-600 bg-blue-50',
    },
    {
      icon: Target,
      label: 'Set Goal',
      description: 'Create practice target',
      color: 'text-green-600 bg-green-50',
    },
    {
      icon: Clock,
      label: 'Schedule',
      description: 'Plan practice time',
      color: 'text-purple-600 bg-purple-50',
    },
    {
      icon: BookOpen,
      label: 'Study Plan',
      description: 'Follow learning path',
      color: 'text-orange-600 bg-orange-50',
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
      <div className="grid grid-cols-2 gap-4">
        {actions.map((action, index) => {
          const Icon = action.icon;
          return (
            <button
              key={index}
              className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors text-center"
            >
              <div className={`p-2 rounded-lg ${action.color} mb-2`}>
                <Icon className="w-5 h-5" />
              </div>
              <span className="font-medium text-gray-900 text-sm">{action.label}</span>
              <span className="text-xs text-gray-600 mt-1">{action.description}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;
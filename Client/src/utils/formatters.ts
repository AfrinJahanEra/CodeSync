// src/utils/formatters.ts
export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

export const formatDateTime = (dateString: string): string => {
  return new Date(dateString).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const getTimeUntilContest = (startTime: string): string => {
  const now = new Date().getTime();
  const contestTime = new Date(startTime).getTime();
  const diff = contestTime - now;

  if (diff <= 0) return 'Started';

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  if (days > 0) return `${days}d ${hours}h`;
  return `${hours}h`;
};

// utils/formatters.ts
export const getPlatformColor = (platform: string) => {
  const colors: Record<string, string> = {
    codeforces: 'bg-orange-100 text-orange-700',
    leetcode: 'bg-yellow-100 text-yellow-700',
    codechef: 'bg-amber-100 text-amber-700',
    atcoder: 'bg-gray-100 text-gray-700',
    cses: 'bg-blue-100 text-blue-700',
    hackerrank: 'bg-green-100 text-green-700',
  };
  return colors[platform] || 'bg-gray-100 text-gray-700';
};

export const getDifficultyColor = (difficulty: string): string => {
  const colors: Record<string, string> = {
    easy: 'text-green-600 bg-green-50',
    medium: 'text-yellow-600 bg-yellow-50',
    hard: 'text-red-600 bg-red-50',
  };
  return colors[difficulty] || 'text-gray-600 bg-gray-50';
};
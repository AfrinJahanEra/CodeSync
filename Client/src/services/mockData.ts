// src/services/mockData.ts
import type { UserProfile, OJAccount, Problem, Contest, AnalyticsData, Recommendation } from '../types';

export const mockUserProfile: UserProfile = {
  id: '1',
  username: 'cp_master',
  email: 'cp.master@example.com',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  joinedAt: '2023-01-15',
};

export const mockOJAccounts: OJAccount[] = [
  {
    platform: 'codeforces',
    handle: 'cp_master',
    rating: 1850,
    rank: 'Expert',
    solved: 456,
    submissions: 892,
  },
  {
    platform: 'leetcode',
    handle: 'cp_master',
    rating: 2150,
    rank: 'Knight',
    solved: 234,
    submissions: 567,
  },
  {
    platform: 'codechef',
    handle: 'cp_master_cc',
    rating: 1950,
    rank: '4★',
    solved: 189,
    submissions: 345,
  },
  {
    platform: 'atcoder',
    handle: 'cp_master_at',
    rating: 1750,
    rank: 'Green',
    solved: 156,
    submissions: 278,
  },
];

export const mockProblems: Problem[] = [
  {
    id: '1',
    title: 'Beautiful Array',
    platform: 'codeforces',
    difficulty: 'medium',
    tags: ['greedy', 'constructive algorithms'],
    url: 'https://codeforces.com/problemset/problem/1155/D',
    solved: true,
    submissionDate: '2024-01-15',
  },
  {
    id: '2',
    title: 'Two Sum',
    platform: 'leetcode',
    difficulty: 'easy',
    tags: ['array', 'hash table'],
    url: 'https://leetcode.com/problems/two-sum/',
    solved: true,
    submissionDate: '2024-01-14',
  },
  {
    id: '3',
    title: 'Longest Increasing Subsequence',
    platform: 'leetcode',
    difficulty: 'medium',
    tags: ['dynamic programming', 'binary search'],
    url: 'https://leetcode.com/problems/longest-increasing-subsequence/',
    solved: false,
  },
  {
    id: '4',
    title: 'Weird Algorithm',
    platform: 'cses',
    difficulty: 'easy',
    tags: ['implementation'],
    url: 'https://cses.fi/problemset/task/1068',
    solved: true,
    submissionDate: '2024-01-13',
  },
];

export const mockContests: Contest[] = [
  {
    id: '1',
    name: 'Codeforces Round #789 (Div. 2)',
    platform: 'codeforces',
    startTime: '2024-01-20T14:35:00Z',
    duration: 120,
    url: 'https://codeforces.com/contest/1678',
    registered: true,
  },
  {
    id: '2',
    name: 'Weekly Contest 328',
    platform: 'leetcode',
    startTime: '2024-01-21T14:30:00Z',
    duration: 90,
    url: 'https://leetcode.com/contest/weekly-contest-328',
    registered: false,
  },
  {
    id: '3',
    name: 'Starters 79',
    platform: 'codechef',
    startTime: '2024-01-22T19:30:00Z',
    duration: 180,
    url: 'https://www.codechef.com/START79',
    registered: true,
  },
];

export const mockAnalytics: AnalyticsData = {
  totalSolved: 1035,
  byDifficulty: {
    easy: 456,
    medium: 412,
    hard: 167,
  },
  byPlatform: {
    codeforces: 456,
    leetcode: 234,
    codechef: 189,
    atcoder: 156,
  },
  ratingProgress: [
    { date: '2023-01', rating: 1200, platform: 'codeforces' },
    { date: '2023-03', rating: 1450, platform: 'codeforces' },
    { date: '2023-06', rating: 1620, platform: 'codeforces' },
    { date: '2023-09', rating: 1780, platform: 'codeforces' },
    { date: '2023-12', rating: 1850, platform: 'codeforces' },
  ],
  topicDistribution: [
    { topic: 'Dynamic Programming', count: 156, strength: 75 },
    { topic: 'Graph Theory', count: 134, strength: 68 },
    { topic: 'Greedy', count: 178, strength: 82 },
    { topic: 'Math', count: 145, strength: 70 },
    { topic: 'Data Structures', count: 198, strength: 88 },
    { topic: 'Strings', count: 112, strength: 65 },
    { topic: 'Geometry', count: 67, strength: 45 },
  ],
};

export const mockRecommendations: Recommendation[] = [
  {
    id: '1',
    problem: {
      id: '5',
      title: 'Maximum Product Subarray',
      platform: 'leetcode',
      difficulty: 'medium',
      tags: ['array', 'dynamic programming'],
      url: 'https://leetcode.com/problems/maximum-product-subarray/',
      solved: false,
    },
    reason: 'Based on your performance in DP problems',
    priority: 'high',
  },
  {
    id: '2',
    problem: {
      id: '6',
      title: 'Network Delay Time',
      platform: 'leetcode',
      difficulty: 'medium',
      tags: ['graph', 'shortest path'],
      url: 'https://leetcode.com/problems/network-delay-time/',
      solved: false,
    },
    reason: 'Improve your graph algorithm skills',
    priority: 'medium',
  },
];
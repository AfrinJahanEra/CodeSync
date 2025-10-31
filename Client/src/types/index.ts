// src/types/index.ts
export interface UserProfile {
  id: string;
  username: string;
  email: string;
  avatar?: string;
  joinedAt: string;
}

export interface OJAccount {
  platform: 'codeforces' | 'leetcode' | 'codechef' | 'atcoder' | 'cses' | 'hackerrank';
  handle: string;
  rating?: number;
  rank?: string;
  solved: number;
  submissions: number;
}

export interface Problem {
  id: string;
  title: string;
  platform: OJAccount['platform'];
  difficulty: 'easy' | 'medium' | 'hard';
  tags: string[];
  url: string;
  solved: boolean;
  submissionDate?: string;
}

export interface Contest {
  id: string;
  name: string;
  platform: OJAccount['platform'];
  startTime: string;
  duration: number;
  url: string;
  registered: boolean;
}

export interface AnalyticsData {
  totalSolved: number;
  byDifficulty: {
    easy: number;
    medium: number;
    hard: number;
  };
  byPlatform: Record<string, number>;
  ratingProgress: Array<{
    date: string;
    rating: number;
    platform: string;
  }>;
  topicDistribution: Array<{
    topic: string;
    count: number;
    strength: number; // 0-100
  }>;
}

export interface Recommendation {
  id: string;
  problem: Problem;
  reason: string;
  priority: 'high' | 'medium' | 'low';
}
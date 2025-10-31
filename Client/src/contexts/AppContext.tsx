import React, { createContext, useContext, useReducer } from 'react';
import type { ReactNode } from 'react';
import type { UserProfile, OJAccount } from '../types';

interface AppState {
  user: UserProfile | null;
  accounts: OJAccount[];
  isLoading: boolean;
  theme: 'light' | 'dark';
}

type AppAction = 
  | { type: 'SET_USER'; payload: UserProfile }
  | { type: 'SET_ACCOUNTS'; payload: OJAccount[] }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_THEME'; payload: 'light' | 'dark' };

const initialState: AppState = {
  user: null,
  accounts: [],
  isLoading: false,
  theme: 'light',
};

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | null>(null);

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_ACCOUNTS':
      return { ...state, accounts: action.payload };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    default:
      return state;
  }
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
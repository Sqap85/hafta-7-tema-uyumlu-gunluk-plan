import { useColorScheme } from 'react-native';

export const colors = {
  light: {
    background: '#F6F8FC',
    surface: '#FFFFFF',
    text: '#172033',
    muted: '#64748B',
    primary: '#4F46E5',
    primarySoft: '#EEF2FF',
    border: '#E2E8F0',
    success: '#0F9D72',
  },
  dark: {
    background: '#101525',
    surface: '#1A2237',
    text: '#F4F7FF',
    muted: '#AAB5CB',
    primary: '#A5B4FC',
    primarySoft: '#2A3158',
    border: '#303B56',
    success: '#6EE7B7',
  },
};

export function useTheme() {
  const scheme = useColorScheme() ?? 'light';
  return {
    isDark: scheme === 'dark',
    colors: colors[scheme],
  };
}

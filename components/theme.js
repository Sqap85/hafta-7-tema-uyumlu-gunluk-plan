import { useColorScheme } from 'react-native';

export const colors = {
  light: {
    background: '#FFF8F0',
    surface: '#FFFFFF',
    text: '#171717',
    muted: '#6B625B',
    primary: '#F7931A',
    primarySoft: '#FFF0DC',
    border: '#F0D8B8',
    success: '#D97706',
  },
  dark: {
    background: '#111111',
    surface: '#1D1D1D',
    text: '#FFFFFF',
    muted: '#B8B0A8',
    primary: '#F7931A',
    primarySoft: '#3A2614',
    border: '#4A3825',
    success: '#F7931A',
  },
};

export function useTheme() {
  const scheme = useColorScheme() ?? 'light';
  return {
    isDark: scheme === 'dark',
    colors: colors[scheme],
  };
}

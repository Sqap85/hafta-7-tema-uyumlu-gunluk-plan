import { StyleSheet, Text } from 'react-native';
import { useTheme } from './theme';

export default function ThemedText({ title = false, style, ...props }) {
  const { colors } = useTheme();
  return (
    <Text
      style={[styles.base, { color: colors.text }, title && styles.title, style]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  base: { fontSize: 16, lineHeight: 24 },
  title: { fontWeight: '800' },
});

import { StyleSheet, View } from 'react-native';
import { useTheme } from './theme';

export default function ThemedView({ style, ...props }) {
  const { colors } = useTheme();
  return <View style={[styles.base, { backgroundColor: colors.background }, style]} {...props} />;
}

const styles = StyleSheet.create({
  base: { flex: 1 },
});

import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from './theme';

export default function ThemedLogo() {
  const { colors } = useTheme();
  return (
    <View style={styles.row} accessibilityLabel="Günlük Planım logosu">
      <View style={[styles.mark, { backgroundColor: colors.primary }]}>
        <Text style={styles.markText}>✓</Text>
      </View>
      <ThemedLogoLabel color={colors.text} />
    </View>
  );
}

function ThemedLogoLabel({ color }) {
  return <Text style={[styles.label, { color }]}>planım</Text>;
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center' },
  mark: { width: 42, height: 42, borderRadius: 14, alignItems: 'center', justifyContent: 'center' },
  markText: { color: '#FFFFFF', fontSize: 24, fontWeight: '900' },
  label: { fontSize: 22, fontWeight: '800', marginLeft: 10, letterSpacing: -0.5 },
});

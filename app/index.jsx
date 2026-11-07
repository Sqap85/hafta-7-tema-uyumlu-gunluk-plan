import { useMemo, useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ThemedCard from '../components/ThemedCard';
import ThemedLogo from '../components/ThemedLogo';
import ThemedText from '../components/ThemedText';
import ThemedView from '../components/ThemedView';
import Spacer from '../components/Spacer';
import { useTheme } from '../components/theme';

const initialTasks = [
  { id: 'breakfast', time: '08:30', label: 'Kahvaltı yap', icon: 'sunny-outline', done: true },
  { id: 'class', time: '10:00', label: 'Mobil programlama dersine katıl', icon: 'school-outline', done: false },
  { id: 'project', time: '14:00', label: 'Proje üzerinde çalış', icon: 'laptop-outline', done: false },
  { id: 'sport', time: '18:00', label: 'Spor yap', icon: 'barbell-outline', done: false },
];

export default function Index() {
  const { colors, isDark } = useTheme();
  const [tasks, setTasks] = useState(initialTasks);
  const completed = tasks.filter((task) => task.done).length;
  const progress = useMemo(() => Math.round((completed / tasks.length) * 100), [completed, tasks.length]);

  function toggleTask(id) {
    setTasks((current) => current.map((task) => (task.id === id ? { ...task, done: !task.done } : task)));
  }

  return (
    <ThemedView>
      <SafeAreaView style={styles.safe}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.topRow}>
            <ThemedLogo />
            <View style={[styles.themeBadge, { backgroundColor: colors.primarySoft }]}>
              <Ionicons name={isDark ? 'moon' : 'sunny'} size={15} color={colors.primary} />
              <ThemedText style={[styles.themeText, { color: colors.primary }]}>
                {isDark ? 'Koyu tema' : 'Açık tema'}
              </ThemedText>
            </View>
          </View>
          <Spacer height={26} />
          <ThemedText title style={styles.title}>Günlük Planım</ThemedText>
          <Spacer height={8} />
          <ThemedText style={[styles.subtitle, { color: colors.muted }]}>
            Bugün yapmam gereken işler ve hedeflerim.
          </ThemedText>
          <Spacer height={22} />
          <ThemedCard style={styles.priority}>
            <View style={styles.priorityIcon}>
              <Ionicons name="sparkles" size={20} color="#FFFFFF" />
            </View>
            <View style={styles.priorityCopy}>
              <ThemedText style={[styles.priorityLabel, { color: colors.primary }]}>BUGÜNÜN ÖNCELİĞİ</ThemedText>
              <ThemedText title style={styles.priorityText}>React Native labını tamamla</ThemedText>
            </View>
          </ThemedCard>
          <Spacer height={24} />
          <View style={styles.sectionHeader}>
            <ThemedText title style={styles.sectionTitle}>Programım</ThemedText>
            <ThemedText style={[styles.progress, { color: colors.success }]}>{completed}/{tasks.length} tamamlandı</ThemedText>
          </View>
          <Spacer height={12} />
          {tasks.map((task) => (
            <View key={task.id}>
              <ThemedCard style={[styles.taskCard, task.done && { borderColor: colors.success }]}>
                <View style={[styles.taskIcon, { backgroundColor: task.done ? colors.success : colors.primarySoft }]}>
                  <Ionicons name={task.icon} size={21} color={task.done ? '#FFFFFF' : colors.primary} />
                </View>
                <View style={styles.taskCopy}>
                  <ThemedText title style={[styles.time, task.done && { color: colors.success }]}>{task.time}</ThemedText>
                  <ThemedText style={[styles.taskLabel, task.done && styles.doneLabel]}>{task.label}</ThemedText>
                </View>
                <Pressable
                  accessibilityRole="checkbox"
                  accessibilityState={{ checked: task.done }}
                  accessibilityLabel={`${task.label} görevini ${task.done ? 'tamamlanmadı olarak işaretle' : 'tamamlandı olarak işaretle'}`}
                  onPress={() => toggleTask(task.id)}
                  style={[styles.check, { borderColor: task.done ? colors.success : colors.border, backgroundColor: task.done ? colors.success : 'transparent' }]}
                >
                  {task.done && <Ionicons name="checkmark" size={16} color="#FFFFFF" />}
                </Pressable>
              </ThemedCard>
              <Spacer height={10} />
            </View>
          ))}
          <ThemedText style={[styles.footer, { color: colors.muted }]}>Küçük adımlar, düzenli bir gün.</ThemedText>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  content: { padding: 22, paddingBottom: 34 },
  topRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  themeBadge: { flexDirection: 'row', alignItems: 'center', borderRadius: 20, paddingHorizontal: 10, paddingVertical: 7 },
  themeText: { fontSize: 12, fontWeight: '700', marginLeft: 5 },
  title: { fontSize: 32, lineHeight: 38, letterSpacing: -0.8 },
  subtitle: { fontSize: 16 },
  priority: { flexDirection: 'row', alignItems: 'center', padding: 14 },
  priorityIcon: { width: 42, height: 42, borderRadius: 14, backgroundColor: '#F59E0B', alignItems: 'center', justifyContent: 'center' },
  priorityCopy: { flex: 1, marginLeft: 12 },
  priorityLabel: { fontSize: 11, fontWeight: '900', letterSpacing: 0.8 },
  priorityText: { fontSize: 15, marginTop: 3 },
  sectionHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  sectionTitle: { fontSize: 20 },
  progress: { fontSize: 13, fontWeight: '700' },
  taskCard: { flexDirection: 'row', alignItems: 'center', padding: 14 },
  taskIcon: { width: 42, height: 42, borderRadius: 13, alignItems: 'center', justifyContent: 'center' },
  taskCopy: { flex: 1, marginLeft: 12 },
  time: { fontSize: 14 },
  taskLabel: { fontSize: 15, marginTop: 2 },
  doneLabel: { textDecorationLine: 'line-through', opacity: 0.7 },
  check: { width: 26, height: 26, borderRadius: 13, borderWidth: 2, alignItems: 'center', justifyContent: 'center', marginLeft: 8 },
  footer: { fontSize: 13, textAlign: 'center', marginTop: 12 },
});

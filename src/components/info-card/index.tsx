import { View, Text, StyleSheet } from 'react-native';

interface InfoCardProps {
  title: string;
  content: string;
}

export function InfoCard({ title, content }: InfoCardProps) {
  return (
    <View style={styles.container}>
      <Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 8,
  },
  title: {
    color: '#276672',
    fontSize: 16,
    fontWeight: '700',
  },
  content: {
    color: '#64748B',
    fontSize: 16,
  }
});
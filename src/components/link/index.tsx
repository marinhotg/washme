import { Text, TouchableOpacity, StyleSheet } from 'react-native';

interface LinkProps {
  title: string;
  onPress: () => void;
}

export function Link({ title, onPress }: LinkProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 343,
    height: 56,
    paddingHorizontal: 24,
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#276672',
    fontSize: 16,
    fontWeight: '700',
    textDecorationLine: 'underline',
    lineHeight: 24,
  }
});
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

interface LinkProps {
  title: string;
  onPress: () => void;
}

export function Link({ title, onPress }: LinkProps) {
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 8
  },
  text: {
    color: '#276672',
    fontSize: 16,
    fontWeight: '700',
    textDecorationLine: 'underline',
  }
});
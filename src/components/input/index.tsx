import { TextInput, View, Text, StyleSheet } from 'react-native';

interface InputProps {
	label?: string;
	placeholder?: string;
	secureTextEntry?: boolean;
	topLabel?: string;
 }
 
 export function Input({ label, placeholder, secureTextEntry, topLabel }: InputProps) {
  return (
    <View style={styles.container}>
      {topLabel && (
        <View style={styles.topLabelContainer}>
          <Text style={styles.topLabel}>{topLabel}</Text>
        </View>
      )}
      <TextInput 
        style={styles.input}
        placeholder={placeholder || label}
        placeholderTextColor="#64748B"
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}
 
 const styles = StyleSheet.create({
	container: {
		width: 343,
		gap: 8,
	},
	topLabelContainer: {
		height: 40,
		paddingHorizontal: 24,
		paddingVertical: 8,
		justifyContent: 'center',
	},
	topLabel: {
		color: '#276672',
		fontSize: 16,
		fontWeight: '700',
		lineHeight: 24,
	},
	input: {
		height: 56,
		padding: 16,
		backgroundColor: '#FFFFFF',
		borderWidth: 1,
		borderColor: '#E2E8F0',
		borderRadius: 8,
		fontSize: 16,
		color: '#64748B',
		lineHeight: 24,
	}
 });
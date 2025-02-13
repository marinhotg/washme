import { TextInput, View, Text, StyleSheet } from "react-native";

interface InputProps {
  label?: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  topLabel?: string;
  editable?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
}

export function Input({
  label,
  placeholder,
  secureTextEntry,
  topLabel,
  editable = true,
  value,
  onChangeText,
}: InputProps) {
  return (
    <View style={styles.container}>
      {topLabel && (
        <View style={styles.topLabelContainer}>
          <Text style={styles.topLabel}>{topLabel}</Text>
        </View>
      )}
      <TextInput
        style={[styles.input, !editable && styles.inputDisabled]}
        placeholder={placeholder}
        placeholderTextColor="#64748B"
        secureTextEntry={secureTextEntry}
        editable={editable}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 8,
  },
  topLabelContainer: {
    height: 40,
    paddingHorizontal: 24,
    paddingVertical: 8,
    justifyContent: "center",
  },
  topLabel: {
    color: "#276672",
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 24,
  },
  input: {
    height: 56,
    padding: 16,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 8,
    fontSize: 16,
    color: "#64748B",
    lineHeight: 24,
  },
  inputDisabled: {
    backgroundColor: "#F1F5F9",
  },
});

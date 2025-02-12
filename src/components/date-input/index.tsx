import { useState } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

interface DateInputProps {
  value: Date;
  onChange: (date: Date) => void;
}

export function DateInput({ value, onChange }: DateInputProps) {
  const [show, setShow] = useState(false);

  return (
    <>
      <TouchableOpacity style={styles.container} onPress={() => setShow(true)}>
        <Text style={styles.text}>{value.toLocaleDateString()}</Text>
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          value={value}
          mode="date"
          onChange={(_, date) => {
            setShow(false);
            date && onChange(date);
          }}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 40,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#64748B",
    fontSize: 16,
  },
});

import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface InfoLostItemProps {
  date: string;
  description: string;
}

export function InfoLostItem({ date, description }: InfoLostItemProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Data: {date}
        {"\n"}
        Descrição: {description}
      </Text>
      <Ionicons name="checkmark-circle" size={24} color="#276672" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 16,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 16,
  },
  text: {
    flex: 1,
    color: "#64748B",
    fontSize: 16,
    lineHeight: 24,
  },
});

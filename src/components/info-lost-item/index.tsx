import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface InfoLostItemProps {
  date: string;
  description: string;
  onFound: () => void;
}

export function InfoLostItem({
  date,
  description,
  onFound,
}: InfoLostItemProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Data: {date}
        {"\n"}
        Descrição: {description}
      </Text>
      <TouchableOpacity onPress={onFound}>
        <Ionicons name="checkmark-circle" size={24} color="#276672" />
      </TouchableOpacity>
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

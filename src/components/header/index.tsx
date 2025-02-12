import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface HeaderProps {
  title: string;
  onBack?: () => void;
  rightIcon?: React.ReactNode;
}

export function Header({ title, onBack, rightIcon }: HeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        {onBack && (
          <TouchableOpacity style={styles.backButton} onPress={onBack}>
            <Ionicons name="chevron-back" size={24} color="black" />
          </TouchableOpacity>
        )}
      </View>

      <Text style={styles.title}>{title}</Text>

      <View style={styles.rightContainer}>{rightIcon}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 56,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
  },
  leftContainer: {
    width: 56,
    height: 56,
  },
  rightContainer: {
    width: 56,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
    width: 56,
    height: 56,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    flex: 1,
    textAlign: "center",
    color: "#020617",
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 24,
  },
});

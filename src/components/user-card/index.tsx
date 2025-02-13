import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface UserCardProps {
  id: string;
  name: string;
  unit?: string;
  email?: string;
  phone?: string;
  isExpanded: boolean;
  onPress: () => void;
  onDelete: () => void;
}

export function UserCard({
  id,
  name,
  unit,
  email,
  phone,
  isExpanded,
  onPress,
  onDelete,
}: UserCardProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.header}>
        <Text style={styles.title}>
          {unit} - {name}
        </Text>
      </View>

      {isExpanded && (
        <View style={styles.details}>
          <Text style={styles.info}>Unidade: {unit}</Text>
          <Text style={styles.info}>Email: {email}</Text>
          <Text style={styles.info}>Telefone: {phone}</Text>
          <TouchableOpacity
            style={styles.editButton}
            onPress={onDelete} // Alterado para usar onDelete
          >
            <Ionicons name="close" size={25} color="#276672" />
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 8,
    overflow: "hidden",
  },
  header: {
    padding: 16,
  },
  title: {
    color: "#276672",
    fontSize: 16,
    fontWeight: "700",
  },
  details: {
    padding: 16,
    paddingTop: 0,
  },
  info: {
    color: "#64748B",
    fontSize: 16,
    marginBottom: 4,
  },
  editButton: {
    position: "absolute",
    right: 16,
    top: -20,
  },
});

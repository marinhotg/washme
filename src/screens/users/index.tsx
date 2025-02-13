import { useState } from "react";
import { View, ScrollView, StyleSheet, TextInput } from "react-native";
import { Header } from "../../components/header";
import { UserCard } from "../../components/user-card";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { CustomModal } from "../../components/custom-modal";

interface User {
  id: string;
  name: string;
  unit: string;
  email: string;
  phone: string;
}

export function Users() {
  const [expandedUserId, setExpandedUserId] = useState<string | null>(null);
  const [users, setUsers] = useState<User[]>([
    {
      id: "415",
      name: "Gabriela",
      unit: "415",
      email: "gabriela@email.com",
      phone: "(11) 99999-9999",
    },
    {
      id: "111",
      name: "Tiago",
      unit: "111",
      email: "tiago@email.com",
      phone: "(11) 99999-9999",
    },
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleDeletePress = (user: User) => {
    setSelectedUser(user);
    setModalVisible(true);
  };

  const handleDeleteConfirm = () => {
    if (selectedUser) {
      setUsers((prev) => prev.filter((user) => user.id !== selectedUser.id));
      setModalVisible(false);
      setSelectedUser(null);
      setExpandedUserId(null);
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Usuários" onBack={() => router.push("/(app)/settings")} />

      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#64748B" />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar usuário"
          placeholderTextColor="#64748B"
        />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.userList}>
          {users.map((user) => (
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              unit={user.unit}
              email={user.email}
              phone={user.phone}
              isExpanded={expandedUserId === user.id}
              onPress={() =>
                setExpandedUserId(expandedUserId === user.id ? null : user.id)
              }
              onDelete={() => handleDeletePress(user)}
            />
          ))}
        </View>
      </ScrollView>

      <CustomModal
        visible={modalVisible}
        onClose={() => {
          setModalVisible(false);
          setSelectedUser(null);
        }}
        title="Remover usuário"
        description={
          selectedUser
            ? `${selectedUser.name}\nUnidade: ${selectedUser.unit}\nEmail: ${selectedUser.email}\nTelefone: ${selectedUser.phone}`
            : ""
        }
        onConfirm={handleDeleteConfirm}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 16,
    padding: 8,
    backgroundColor: "#F8FAFC",
    borderRadius: 8,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: "#64748B",
  },
  content: {
    flex: 1,
  },
  userList: {
    padding: 16,
    gap: 16,
  },
});

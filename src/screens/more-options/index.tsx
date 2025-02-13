import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Header } from "../../components/header";
import { router } from "expo-router";

interface MenuOption {
  id: number;
  title: string;
  onPress: () => void;
}

export function MoreOptions() {
  const menuOptions: MenuOption[] = [
    {
      id: 1,
      title: "Minhas reservas",
      onPress: () => router.push("/(app)/reservations"),
    },
    {
      id: 2,
      title: "Máquinas disponíveis",
      onPress: () => router.push("/(app)"),
    },
    {
      id: 3,
      title: "Perfil",
      onPress: () => router.push("/(app)/profile"),
    },
    {
      id: 4,
      title: "Configurações da lavanderia",
      onPress: () => router.push("/(app)/settings"),
    },

    {
      id: 5,
      title: "Itens perdidos",
      onPress: () => router.push("/(extras)/lost-items"),
    },
    {
      id: 6,
      title: "Guia de lavagem",
      onPress: () => router.push("/(extras)/washing-guide"),
    },
    {
      id: 7,
      title: "Ajuda",
      onPress: () => router.push("/(extras)/help"),
    },
    {
      id: 8,
      title: "Sair da lavanderia",
      onPress: () => console.log("Saindo da lavanderia"),
    },
  ];

  return (
    <View style={styles.container}>
      <Header title="Mais opções" />

      <ScrollView style={styles.content}>
        <View style={styles.menuOptions}>
          {menuOptions.map((option) => (
            <TouchableOpacity
              key={option.id}
              style={styles.menuItem}
              onPress={option.onPress}
            >
              <Text style={styles.menuText}>{option.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  content: {
    flex: 1,
  },
  menuOptions: {
    padding: 16,
    gap: 16,
  },
  menuItem: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  menuText: {
    color: "#276672",
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 24,
  },
});

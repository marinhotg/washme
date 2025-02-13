import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { Header } from "../../components/header";
import { Ionicons } from "@expo/vector-icons";
import { ImageSourcePropType } from "react-native";
import { router } from "expo-router";

interface LostItem {
  id: number;
  description: string;
  date: string;
}

export function LostItems() {
  const lostItems: LostItem[] = [
    {
      id: 1,
      image: require("../../../assets/images/lost-items/image1.png"),
      date: "06/02/2025",
      description:
        "Esquecido na lavadora 2 eu achei quando fui lavar minha roupa.",
    },
    {
      id: 2,
      image: require("../../../assets/images/lost-items/image2.png"),
      date: "06/02/2025",
      description:
        "Esquecido na lavadora 2 eu achei quando fui lavar minha roupa.",
    },
    // ... outros itens
  ];

  return (
    <View style={styles.container}>
      <Header
        title="Itens Perdidos"
        showBackButton
        onBack={() => router.push("/(app)/more")}
      />

      <ScrollView style={styles.content}>
        <View style={styles.grid}>
          {lostItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.imageContainer}
              onPress={() =>
                navigation.navigate("LostItemDetails", {
                  image: item.image,
                  date: item.date,
                  description: item.description,
                })
              }
            >
              {item.image ? (
                <Image
                  source={item.image}
                  style={styles.image}
                  resizeMode="cover"
                />
              ) : (
                <View style={[styles.image, styles.placeholder]} />
              )}
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
  grid: {
    padding: 16,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  imageContainer: {
    width: "31%",
    aspectRatio: 1,
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  placeholder: {
    backgroundColor: "#E2E8F0",
  },
});

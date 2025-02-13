import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { Header } from "../../components/header";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { useLostItems } from '../../contexts/lost-items';

export function LostItems() {
  const { items } = useLostItems();

  return (
    <View style={styles.container}>
      <Header
        title="Itens Perdidos"
        showBackButton
        onBack={() => router.push("/(app)/more")}
        rightIcon={
          <TouchableOpacity onPress={() => router.push("/(extras)/report-lost")}>
            <Ionicons name="add" size={24} color="black" />
          </TouchableOpacity>
        }
      />

      <ScrollView style={styles.content}>
        <View style={styles.grid}>
          {items.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.imageContainer}
              onPress={() =>
                router.push({
                  pathname: "/(extras)/lost-items/[id]",
                  params: item
                })
              }
            >
              <Image
                source={typeof item.image === 'string' ? { uri: item.image } : item.image}
                style={styles.image}
                resizeMode="cover"
              />
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

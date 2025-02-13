import { View, StyleSheet, Image, TextInput } from "react-native";
import { Header } from "../../components/header";
import { Button } from "../../components/button";
import { router } from "expo-router";

export function ReportLostItem() {
  return (
    <View style={styles.container}>
      <Header title="Reportar item perdido" onBack={() => router.push("/(extras)/lost-items")} />

      <View style={styles.content}>
        <Image
          source={require("../../../assets/images/lost-items/image1.png")}
          style={styles.image}
          resizeMode="cover"
        />

        <View style={styles.descriptionContainer}>
          <TextInput
            style={styles.input}
            placeholder="Esquecido na lavadora 2 eu achei quando fui lavar minha roupa."
            multiline
            numberOfLines={4}
          />
        </View>

        <Button title="Enviar" onPress={() => {}} />
      </View>
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
    padding: 16,
    gap: 16,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 8,
  },
  descriptionContainer: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 8,
    padding: 16,
    textAlignVertical: "top",
  },
});

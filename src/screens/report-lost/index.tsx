import {
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Header } from "../../components/header";
import { Button } from "../../components/button";
import { router } from "expo-router";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import { useLostItems } from "../../contexts/lost-items";

export function ReportLostItem() {
  const [image, setImage] = useState<string | null>(null);
  const [description, setDescription] = useState("");
  const { addItem } = useLostItems();

  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Você precisa permitir o acesso à câmera para tirar fotos!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSubmit = async () => {
    if (image) {
      const today = new Date();
      const formattedDate = today.toLocaleDateString("pt-BR");

      await addItem({
        image: image,
        date: formattedDate,
        description: description,
      });

      router.push("/(extras)/lost-items");
    }
  };

  return (
    <View style={styles.container}>
      <Header
        title="Reportar item perdido"
        onBack={() => router.push("/(extras)/lost-items")}
      />

      <View style={styles.content}>
        <TouchableOpacity onPress={openCamera} style={styles.imageContainer}>
          {image ? (
            <Image
              source={{ uri: image }}
              style={styles.image}
              resizeMode="cover"
            />
          ) : (
            <View style={styles.placeholder}>
              <Ionicons name="camera" size={40} color="#276672" />
            </View>
          )}
        </TouchableOpacity>

        <View style={styles.descriptionContainer}>
          <TextInput
            style={styles.input}
            placeholder="Descreva onde e quando você encontrou o item..."
            multiline
            numberOfLines={4}
            value={description}
            onChangeText={setDescription}
          />
        </View>

        <Button
          title="Enviar"
          onPress={handleSubmit}
          disabled={!image || !description}
        />
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
  imageContainer: {
    width: "100%",
    height: 300,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#F8FAFC",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  placeholder: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#E2E8F0",
    borderStyle: "dashed",
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
    minHeight: 120,
  },
});

import { View, StyleSheet, Image, ScrollView } from "react-native";
import { Header } from "../../components/header";
import { InfoLostItem } from "../../components/info-lost-item";
import { CustomModal } from "../../components/custom-modal";
import { useState } from "react";
import { useLostItems } from "../../contexts/lost-items";

interface LostItemDetailsProps {
  id: number;
  image: any;
  date: string;
  description: string;
  onBack: () => void;
}

export function LostItemDetails({
  id,
  image,
  date,
  description,
  onBack,
}: LostItemDetailsProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const { removeItem } = useLostItems();

  const handleFound = () => {
    setModalVisible(true);
  };

  const handleConfirm = async () => {
    await removeItem(id);
    setModalVisible(false);
    onBack();
  };

  return (
    <View style={styles.container}>
      <Header title="Itens perdidos" onBack={onBack} />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image
          source={
            image || require("../../../assets/images/lost-items/image1.png")
          }
          style={styles.image}
          resizeMode="cover"
        />

        <InfoLostItem
          date={date}
          description={description}
          onFound={handleFound}
        />
      </ScrollView>

      <CustomModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        title="Confirmar que o item foi encontrado e devolvido ao dono"
        description={`${description}\n${date}`}
        onConfirm={handleConfirm}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollContent: {
    alignItems: "center",
    padding: 16,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 8,
    marginBottom: 16,
  },
});

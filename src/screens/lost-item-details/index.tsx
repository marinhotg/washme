import { View, StyleSheet, Image, ScrollView } from "react-native";
import { Header } from "../../components/header";
import { InfoLostItem } from "../../components/info-lost-item";

interface LostItemDetailsProps {
  image: any;
  date: string;
  description: string;
}

export function LostItemDetails({
  image,
  date,
  description,
}: LostItemDetailsProps) {
  return (
    <View style={styles.container}>
      <Header title="Itens perdidos" onBack={() => {}} />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image
          source={
            image || require("../../../assets/images/lost-items/image1.png")
          }
          style={styles.image}
          resizeMode="cover"
        />

        <InfoLostItem date={date} description={description} />
      </ScrollView>

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
});

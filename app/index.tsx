import { View } from "react-native";
import { Button } from "../src/components/button";
import { Header } from "../src/components/header";
import { PageLogoComponent } from "../src/components/page-logo";

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <Header title="Título" onBack={() => {}} />
      <View style={{ alignItems: 'center' }}>
        <PageLogoComponent />
      </View>
    </View>
  );
}
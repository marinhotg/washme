import { View } from "react-native";
import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { Link } from "../../components/link";
import { TermsText } from "../../components/terms-text";
import { PageLogoComponent } from "../../components/page-logo";
import { router } from "expo-router";

export function CreateAccount() {
  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <Header title="Criar conta" onBack={() => router.push("/(auth)/login")} />

      <View style={{ alignItems: "center", marginTop: 24 }}>
        <PageLogoComponent />
      </View>

      <View style={{ padding: 16, gap: 16, alignItems: "center" }}>
        <Input label="Nome" placeholder="Nome" />
        <Input label="Email" placeholder="Email" />
        <Input label="Telefone" placeholder="Telefone" />
        <Input label="Senha" placeholder="Senha" secureTextEntry />

        <Link title="Já possuo uma conta" onPress={() => router.push("/(auth)/login")} />

        <TermsText
          onPressTerms={() => console.log("Abrir termos de serviço")}
        />

        <Button
          title="Concordar e continuar"
          onPress={() => console.log("Criar conta")}
        />
      </View>
    </View>
  );
}

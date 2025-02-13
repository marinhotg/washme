import { useState } from "react";
import { View, Alert, StyleSheet } from "react-native";
import { router } from "expo-router";
import { useAuth } from "../../contexts/auth";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { Link } from "../../components/link";
import { PageLogoComponent } from "../../components/page-logo";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();

  async function handleSignIn() {
    try {
      await signIn(email, password);
    } catch (error) {
      Alert.alert("Erro", "Email ou senha inválidos");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <PageLogoComponent />
      </View>

      <Input topLabel="Email" value={email} onChangeText={setEmail} />

      <Input
        topLabel="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button title="Login" onPress={handleSignIn} />

      <Link
        title="Criar conta"
        onPress={() => router.push("/(auth)/register")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 16,
    gap: 16,
  },
  logoContainer: {
    alignItems: "center",
    marginVertical: 24,
  },
});

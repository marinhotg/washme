import { View } from "react-native";
import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { Link } from "../../components/link";
import { PageLogoComponent } from "../../components/page-logo";

export function Login() {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <Header 
        title="Já possuo uma conta" 
        onBack={() => {}}
      />
      
      <View style={{ alignItems: 'center', marginTop: 24 }}>
        <PageLogoComponent />
      </View>
      
      <View style={{ padding: 16, gap: 16, alignItems: 'center' }}>
        <Input 
          label="Email" 
          placeholder="Email"
        />
        <Input 
          label="Senha"
          placeholder="Senha"
          secureTextEntry
        />
        
        <Link 
          title="Esqueci minha senha" 
          onPress={() => {}} 
        />
        
        <Button 
          title="Login" 
          onPress={() => console.log('Login')} 
        />

        <Link 
          title="Criar conta" 
          onPress={() => {}} 
        />
      </View>
    </View>
  );
}
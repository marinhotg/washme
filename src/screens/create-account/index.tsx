import { View } from "react-native";
import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { Link } from "../../components/link";
import { PageLogoComponent } from "../../components/page-logo";

export function CreateAccount() {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <Header title="Criar conta" onBack={() => {}} />
      
      <View style={{ alignItems: 'center', marginTop: 24 }}>
        <PageLogoComponent />
      </View>
      
      <View style={{ padding: 16, gap: 16, alignItems: 'center' }}>
        <Input label="Nome" />
        <Input label="Email" />
        <Input label="Telefone" />
        <Input label="Senha" secureTextEntry />
        
        <Link title="Já possuo uma conta" onPress={() => {}} />
        
        <Button 
          title="Concordar e continuar" 
          onPress={() => console.log('Criar conta')} 
        />
      </View>
    </View>
  );
}
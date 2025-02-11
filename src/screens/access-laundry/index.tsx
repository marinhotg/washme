import { View } from "react-native";
import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { Link } from "../../components/link";
import { PageLogoComponent } from "../../components/page-logo";

export function AccessLaundry() {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <Header 
        title="Acessar lavanderia" 
        onBack={() => {}}
      />
      
      <View style={{ alignItems: 'center', marginTop: 24 }}>
        <PageLogoComponent />
      </View>
      
      <View style={{ padding: 16, gap: 16, alignItems: 'center' }}>
        <Input 
          topLabel="Código" 
          placeholder="ABC123"
        />
        <Input 
          topLabel="Unidade"
          placeholder="226"
        />
        
        <Link 
          title="Entrar pelo QRCode" 
          onPress={() => {}} 
        />
        
        <Button 
          title="Acessar" 
          onPress={() => console.log('Acessar')} 
        />
      </View>
    </View>
  );
}
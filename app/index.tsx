import { Text, View } from "react-native";
import { Button } from "../src/components/button";
import { Header } from "../src/components/header";
import { Input } from "../src/components/input";
import { Link } from "../src/components/link";

export default function Index() {
 return (
   <View style={{ flex: 1 }}>
     <Header title="Criar conta" onBack={() => {}} />
     
     <View style={{ padding: 16, gap: 16, alignItems: 'center' }}>
       <Input label="Nome" />
       <Input label="Email" />
       <Input label="Telefone" />
       <Input label="Senha" secureTextEntry />
       <Input topLabel="Código" placeholder="ABC123" />
       
       <Link title="Já possuo uma conta" onPress={() => {}} />
       
       <Button title="Concordar e continuar" onPress={() => {}} />
     </View>
   </View>
 );
}
import { View, ScrollView, StyleSheet } from 'react-native';
import { Header } from '../../components/header';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { Link } from '../../components/link';

export function Profile() {
 return (
   <View style={styles.container}>
     <Header title="Perfil" />
     
     <ScrollView style={styles.content}>
       <View style={styles.fields}>
         <Input 
           topLabel="Nome"
           placeholder="João Silva"
           value="João Silva"
           editable={false}
         />
         
         <Input 
           topLabel="Email"
           placeholder="joao@email.com"
           value="joao@email.com"
           editable={false}
         />
         
         <Input 
           topLabel="Telefone"
           placeholder="(11)99999-9999"
           value="(11)99999-9999"
           editable={false}
         />
         
         <Input 
           topLabel="Unidade"
           placeholder="123"
           value="123"
           editable={false}
         />
         
         <Input 
           topLabel="Senha"
           placeholder="********"
           value="********"
           secureTextEntry
           editable={false}
         />
         
         <Button 
           title="Confirmar"
           onPress={() => {}}
         />
         
         <Link 
           title="Sair da conta" 
           onPress={() => {}}
         />
       </View>
     </ScrollView>

   </View>
 );
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#FFFFFF',
 },
 content: {
   flex: 1,
 },
 fields: {
   padding: 16,
   gap: 16,
 }
});
import { View, ScrollView, StyleSheet } from 'react-native';
import { Header } from '../../components/header';
import { Input } from '../../components/input';
import { Link } from '../../components/link';
import { Button } from '../../components/button';
import { Select } from '../../components/select';
import { router } from 'expo-router';

export function Settings() {
  const unavailableMachines = [
    { label: 'Lavadora 1, Secadora 2', value: 'lav1-sec2' }
  ];

  return (
    <View style={styles.container}>
      <Header 
        title="Configurações da lavanderia" 
      />

      <ScrollView style={styles.content}>
        <View style={styles.fields}>
          <Link 
            title="Usuários"
            onPress={() => router.push('/(extras)/users')}
          />

          <Link 
            title="Baixar relatório"
            onPress={() => {}}
          />

          <Input 
            topLabel="Código"
            value="ABC124"
            editable={false}
          />

          <Input 
            topLabel="Endereço"
            value="Av Rebouças, 1000, São Paulo - SP"
            editable={false}
          />

          <Input 
            topLabel="Quantidade de lavadoras"
            value="3"
            editable={false}
          />

          <Input 
            topLabel="Quantidade de secadoras"
            value="2"
            editable={false}
          />

          <Input 
            topLabel="Limite de reservas simultâneas"
            value="4"
            editable={false}
          />

          <Input 
            topLabel="Duração da reserva da lavadora"
            value="00:30"
            editable={false}
          />

          <Input 
            topLabel="Duração da reserva da secadora"
            value="01:00"
            editable={false}
          />

          <Select
            topLabel="Máquinas indisponíveis"
            options={unavailableMachines}
            value="lav1-sec2"
            onChange={() => {}}
          />

          <Button 
            title="Confirmar"
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
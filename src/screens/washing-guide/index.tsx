import { View, ScrollView, StyleSheet } from 'react-native';
import { Header } from '../../components/header';
import { InfoCard } from '../../components/info-card';

export function WashingGuide() {
  const guides = [
    {
      title: '🛒✨ Produtos recomendados',
      content: ''
    },
    {
      title: '🧼👕 Guia Rápido de Lavagem\n',
      content: '1. Separe as roupas por cor e tecido.\n2. Confira as etiquetas para seguir as recomendações.\n3. Use sabão e amaciante na medida certa para evitar resíduos.\n4. Escolha a temperatura correta – fria para delicadas, morna para sujas.\n5. Retire as roupas logo após a lavagem para evitar mau cheiro.\n6. Prefira secagem natural para preservar os tecidos.'
    },
    {
      title: '📖 Como Ler as Etiquetas?\n',
      content: '✔ Balde → Orienta para lavagem à mão ou na máquina.\n✔ Triângulo → Indica se pode usar alvejante.\n✔ Quadrado com círculo → Indica se a secagem na máquina é permitida.\n✔ Ferro de passar → Atente-se à temperatura do ferro.\n✔ Círculo → Orientações para lavagem a seco.'
    },
    {
      title: '🧴 Remoção de Manchas\n',
      content: '🔸 Óleo/Gordura → Use talco antes da lavagem.\n🔸 Vinho → Passe vinagre branco ou água com gás.\n🔸 Caneta → Aplique álcool 70%.\n🔸 Sangue → Lave com água fria e sabão neutro.'
    },
    {
      title: '🌱♻️ Lavagem Sustentável',
      content: 'Prefira produtos ecológicos e lave com carga cheia para economizar água e energia.'
    }
  ];

  return (
    <View style={styles.container}>
      <Header 
        title="Guia de lavagem" 
        onBack={() => {}}
      />

      <ScrollView style={styles.content}>
        <View style={styles.guides}>
          {guides.map((guide, index) => (
            <InfoCard 
              key={index}
              title={guide.title}
              content={guide.content}
            />
          ))}
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
  guides: {
    padding: 16,
    gap: 16,
  }
});
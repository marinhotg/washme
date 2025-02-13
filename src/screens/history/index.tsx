import { View, ScrollView, StyleSheet } from 'react-native';
import { Header } from '../../components/header';
import { HistoryCard } from '../../components/history-card';

export function History() {
  const historyItems = [
    {
      id: 1,
      type: 'Lavadora',
      number: 1,
      date: '25/10/2025',
      time: '10:30'
    },
    {
      id: 2,
      type: 'Secadora',
      number: 2,
      date: '25/10/2025',
      time: '11:30'
    }
  ];

  return (
    <View style={styles.container}>
      <Header 
        title="Histórico" 
        onBack={() => {}}
      />
      
      <ScrollView style={styles.content}>
        <View style={styles.history}>
          {historyItems.map((item) => (
            <HistoryCard
              key={item.id}
              type={item.type as 'Lavadora' | 'Secadora'}
              number={item.number}
              date={item.date}
              time={item.time}
              onAlert={() => console.log(`Reportar problema na reserva ${item.id}`)}
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
  history: {
    padding: 16,
    gap: 16,
  }
});
import { View, ScrollView, StyleSheet } from 'react-native';
import { Header } from '../../components/header';
import { MachineSelector } from '../../components/machine-selector';
import { BottomMenu } from '../../components/bottom-menu';

export function AvailableMachines() {
  const selectedWashers = [0, 2, 4];
  const selectedDryers = [1, 3];

  return (
    <View style={styles.container}>
      <Header 
        title="Máquinas disponíveis" 
        onBack={() => {}}
      />

      <ScrollView style={styles.content}>
        <View style={styles.selectors}>
          <MachineSelector
            title="Lavadoras"
            type="washer"
            count={6}
            selectedMachines={selectedWashers}
          />
          
          <MachineSelector
            title="Secadoras"
            type="dryer"
            count={6}
            selectedMachines={selectedDryers}
          />
        </View>
      </ScrollView>

      <BottomMenu 
        currentRoute="calendar"
        onPress={() => {}}
      />
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
  selectors: {
    padding: 16,
    gap: 24,
  }
});
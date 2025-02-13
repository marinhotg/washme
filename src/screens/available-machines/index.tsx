import { View, ScrollView, StyleSheet } from "react-native";
import { Header } from "../../components/header";
import { MachineSelector } from "../../components/machine-selector";
import { useState, useEffect } from "react";

export function AvailableMachines() {
  const [selectedWashers, setSelectedWashers] = useState<number[]>([]);
  const [selectedDryers, setSelectedDryers] = useState<number[]>([]);

  const generateRandomSelection = (count: number) => {
    const selection: number[] = [];
    for (let i = 0; i < count; i++) {
      if (Math.random() > 0.5) {
        selection.push(i);
      }
    }
    return selection;
  };

  useEffect(() => {
    setSelectedWashers(generateRandomSelection(6));
    setSelectedDryers(generateRandomSelection(6));
  }, []);

  const handleWasherSearch = () => {
    setSelectedWashers(generateRandomSelection(6));
  };

  const handleDryerSearch = () => {
    setSelectedDryers(generateRandomSelection(6));
  };

  const handleWasherDateTimeChange = () => {
    setSelectedWashers([]);
  };

  const handleDryerDateTimeChange = () => {
    setSelectedDryers([]);
  };

  return (
    <View style={styles.container}>
      <Header title="Máquinas disponíveis" />

      <ScrollView style={styles.content}>
        <View style={styles.selectors}>
          <MachineSelector
            title="Lavadoras"
            type="washer"
            count={6}
            selectedMachines={selectedWashers}
            onSearch={handleWasherSearch}
            onDateTimeChange={handleWasherDateTimeChange}
          />

          <MachineSelector
            title="Secadoras"
            type="dryer"
            count={6}
            selectedMachines={selectedDryers}
            onSearch={handleDryerSearch}
            onDateTimeChange={handleDryerDateTimeChange}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  content: {
    flex: 1,
  },
  selectors: {
    padding: 16,
    gap: 24,
  },
});

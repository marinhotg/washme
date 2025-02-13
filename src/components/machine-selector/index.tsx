import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { DateInput } from "../date-input";
import { TimeInput } from "../time-input";
import { useState } from "react";
import { CustomModal } from "../custom-modal";

interface MachineSelectorProps {
  title: string;
  type: "washer" | "dryer";
  count: number;
  selectedMachines: number[];
  onSearch: () => void;
  onDateTimeChange: () => void;
  onReservation: (type: "washer" | "dryer", machineIndex: number) => void;
}

export function MachineSelector({
  title,
  type,
  count,
  selectedMachines,
  onSearch,
  onDateTimeChange,
  onReservation,
}: MachineSelectorProps) {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMachine, setSelectedMachine] = useState<number | null>(null);

  const getImage = (index: number) => {
    const isSelected = selectedMachines.includes(index);
    if (type === "washer") {
      return isSelected
        ? require("../../../assets/images/laundry-on.png")
        : require("../../../assets/images/laundry-off.png");
    }
    return isSelected
      ? require("../../../assets/images/dryer-on.png")
      : require("../../../assets/images/dryer-off.png");
  };

  const handleDateChange = (newDate: Date) => {
    setDate(newDate);
    onDateTimeChange();
  };

  const handleTimeChange = (newTime: Date) => {
    setTime(newTime);
    onDateTimeChange();
  };

  const handleMachinePress = (index: number) => {
    if (!selectedMachines.includes(index)) {
      return;
    }
    setSelectedMachine(index);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.inputContainer}>
        <DateInput value={date} onChange={handleDateChange} />
        <TimeInput value={time} onChange={handleTimeChange} />
        <TouchableOpacity style={styles.searchButton} onPress={onSearch}>
          <Ionicons name="search" size={24} color="#276672" />
        </TouchableOpacity>
      </View>

      <View style={styles.machinesContainer}>
        {Array.from({ length: count }).map((_, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleMachinePress(index)}
            activeOpacity={0.7}
            style={styles.machineButton}
          >
            <Image
              source={getImage(index)}
              style={styles.machineIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ))}
      </View>

      <CustomModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        title="Reservar máquina?"
        description={
          selectedMachine !== null
            ? `${type === "washer" ? "Lavadora" : "Secadora"} ${
                selectedMachine + 1
              }
          ${date.toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })} ${time.toLocaleTimeString("pt-BR", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              })}`
            : ""
        }
        onConfirm={() => {
          if (selectedMachine !== null) {
            onReservation(type, selectedMachine);
          }
          setModalVisible(false);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  title: {
    color: "#276672",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  searchButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  machinesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 12,
  },
  machineButton: {
    width: "30%",
    maxWidth: 100,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  machineIcon: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

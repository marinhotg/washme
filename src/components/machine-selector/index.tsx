import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { DateInput } from "../date-input";
import { TimeInput } from "../time-input";
import { useState } from "react";

interface MachineSelectorProps {
  title: string;
  type: "washer" | "dryer";
  count: number;
  selectedMachines: number[];
}

export function MachineSelector({
  title,
  type,
  count,
  selectedMachines,
}: MachineSelectorProps) {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.inputContainer}>
        <DateInput value={date} onChange={setDate} />
        <TimeInput value={time} onChange={setTime} />
        <TouchableOpacity style={styles.searchButton}>
          <Ionicons name="search" size={24} color="#276672" />
        </TouchableOpacity>
      </View>

      <View style={styles.machinesContainer}>
        {Array.from({ length: count }).map((_, index) => (
          <Image
            key={index}
            source={getImage(index)}
            style={styles.machineIcon}
            resizeMode="contain"
          />
        ))}
      </View>
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
	
	machineIcon: {
		width: "30%",
		maxWidth: 100,
		aspectRatio: 1,
	},
});

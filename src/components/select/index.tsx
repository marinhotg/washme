import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

interface Option {
  label: string;
  value: string | number;
}

interface SelectProps {
  topLabel: string;
  options: Option[];
  value: string | number;
  onChange: (value: string | number) => void;
}

export function Select({ topLabel, options, value, onChange }: SelectProps) {
  const [isVisible, setIsVisible] = useState(false);
  const selectedOption = options.find((opt) => opt.value === value);

	return (
		<View style={styles.container}>
			<Text style={styles.topLabel}>{topLabel}</Text>
			
			<TouchableOpacity 
				style={styles.selectButton}
				onPress={() => setIsVisible(true)}
			>
				<Text style={styles.selectedText}>
					{selectedOption?.label || 'Selecione'}
				</Text>
				<Ionicons name="chevron-down" size={24} color="#64748B" />
			</TouchableOpacity>
	 
			<Modal
				visible={isVisible}
				transparent
				animationType="fade"
			>
				<TouchableOpacity 
					style={styles.modalContainer}
					activeOpacity={1}
					onPress={() => setIsVisible(false)}
				>
					<View style={styles.modalContent}>
						<View style={styles.modalHeader}>
							<Text style={styles.modalTitle}>{topLabel}</Text>
							<TouchableOpacity onPress={() => setIsVisible(false)}>
								<Ionicons name="close" size={24} color="#000" />
							</TouchableOpacity>
						</View>
						
						{options.map((option) => (
							<TouchableOpacity
								key={option.value}
								style={styles.optionButton}
								onPress={() => {
									onChange(option.value);
									setIsVisible(false);
								}}
							>
								<Text style={styles.optionText}>{option.label}</Text>
							</TouchableOpacity>
						))}
					</View>
				</TouchableOpacity>
			</Modal>
		</View>
	);
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 8,
  },
  topLabel: {
    color: "#276672",
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 24,
    paddingHorizontal: 24,
  },
  selectButton: {
    height: 56,
    padding: 16,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  selectedText: {
    color: "#64748B",
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  optionButton: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
  },
  optionText: {
    fontSize: 16,
    color: "#000",
  },
});

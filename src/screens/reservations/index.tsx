import { View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Header } from "../../components/header";
import { ReservationCard } from "../../components/reservation-card";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { CustomModal } from "../../components/custom-modal";
import { useState } from "react";

interface Reservation {
  id: number;
  type: "Lavadora" | "Secadora";
  number: number;
  date: string;
  time: string;
}

export function Reservations() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedReservation, setSelectedReservation] = useState<number | null>(null);
  const [reservations, setReservations] = useState<Reservation[]>([
    {
      id: 1,
      type: "Lavadora",
      number: 2,
      date: "13/02/2025",
      time: "16:30",
    },
    {
      id: 2,
      type: "Secadora",
      number: 3,
      date: "13/02/2025",
      time: "17:30",
    },
  ]);

  const handleDeletePress = (reservation: Reservation) => {
    setSelectedReservation(reservation.id);
    setModalVisible(true);
  };

  const handleDeleteConfirm = () => {
    if (selectedReservation) {
      setReservations(prev => prev.filter(reservation => reservation.id !== selectedReservation));
      setModalVisible(false);
      setSelectedReservation(null);
    }
  };

  return (
    <View style={styles.container}>
      <Header
        title="Minhas reservas"
        rightIcon={
          <TouchableOpacity onPress={() => router.push("/(extras)/history")}>
            <Ionicons name="time-outline" size={24} color="black" />
          </TouchableOpacity>
        }
      />

      <ScrollView style={styles.content}>
        <View style={styles.reservations}>
          {reservations.map((reservation) => (
            <ReservationCard
              key={reservation.id}
              type={reservation.type}
              number={reservation.number}
              date={reservation.date}
              time={reservation.time}
              onDelete={() => handleDeletePress(reservation)}
            />
          ))}
        </View>
      </ScrollView>

      <CustomModal
        visible={modalVisible}
        onClose={() => {
          setModalVisible(false);
          setSelectedReservation(null);
        }}
        title="Cancelar reserva?"
        description={
          selectedReservation !== null
            ? `${
                reservations.find(r => r.id === selectedReservation)?.type
              } ${
                reservations.find(r => r.id === selectedReservation)?.number
              }\n${
                reservations.find(r => r.id === selectedReservation)?.date
              } ${
                reservations.find(r => r.id === selectedReservation)?.time
              }`
            : ""
        }
        onConfirm={handleDeleteConfirm}
      />
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
  reservations: {
    padding: 16,
    gap: 16,
  },
});
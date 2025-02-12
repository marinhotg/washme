import { View, ScrollView, StyleSheet } from "react-native";
import { Header } from "../../components/header";
import { ReservationCard } from "../../components/reservation-card";
import { BottomMenu } from "../../components/bottom-menu";

export function Reservations() {
  const reservations = [
    {
      id: 1,
      type: "Lavadora",
      number: 1,
      date: "25/10/2025",
      time: "10:30",
    },
    {
      id: 2,
      type: "Secadora",
      number: 2,
      date: "25/10/2025",
      time: "10:30",
    },
  ];

  return (
    <View style={styles.container}>
      <Header
        title="Minhas reservas"
        onBack={() => {}}
        showHistory
        onHistory={() => console.log("Acessar histórico")}
      />

      <ScrollView style={styles.content}>
        <View style={styles.reservations}>
          {reservations.map((reservation) => (
            <ReservationCard
              key={reservation.id}
              type={reservation.type as "Lavadora" | "Secadora"}
              number={reservation.number}
              date={reservation.date}
              time={reservation.time}
              onDelete={() => console.log(`Deletar reserva ${reservation.id}`)}
            />
          ))}
        </View>
      </ScrollView>

      <BottomMenu currentRoute="calendar" onPress={() => {}} />
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

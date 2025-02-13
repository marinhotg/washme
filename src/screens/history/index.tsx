import { View, ScrollView, StyleSheet } from "react-native";
import { Header } from "../../components/header";
import { HistoryCard } from "../../components/history-card";
import { router } from "expo-router";
import { CustomModal } from "../../components/custom-modal";
import { useState } from "react";

interface HistoryItem {
 id: number;
 type: "Lavadora" | "Secadora";
 number: number;
 date: string;
 time: string;
}

export function History() {
 const [modalVisible, setModalVisible] = useState(false);
 const [selectedItem, setSelectedItem] = useState<HistoryItem | null>(null);

 const historyItems = [
   {
     id: 1,
     type: "Lavadora",
     number: 2,
     date: "13/02/2025",
     time: "16:30",
   },
 ];

 const handleAlertPress = (item: HistoryItem) => {
   setSelectedItem(item);
   setModalVisible(true);
 };

 const handleAlertConfirm = () => {
   if (selectedItem) {
     console.log(`Reportar problema na reserva ${selectedItem.id}`);
     setModalVisible(false);
     setSelectedItem(null);
   }
 };

 return (
   <View style={styles.container}>
     <Header
       title="Histórico"
       onBack={() => router.push("/(app)/reservations")}
     />

     <ScrollView style={styles.content}>
       <View style={styles.history}>
         {historyItems.map((item) => (
           <HistoryCard
             key={item.id}
             type={item.type as "Lavadora" | "Secadora"}
             number={item.number}
             date={item.date}
             time={item.time}
             onAlert={() => handleAlertPress(item)}
           />
         ))}
       </View>
     </ScrollView>

     <CustomModal
       visible={modalVisible}
       onClose={() => {
         setModalVisible(false);
         setSelectedItem(null);
       }}
       title="A máquina está indisponível?"
       description={
         selectedItem
           ? `Atenção: Ao confirmar, a ${selectedItem.type.toLowerCase()} ${
               selectedItem.number
             } ficará indisponível para todos os usuários\n${selectedItem.date} ${
               selectedItem.time
             }`
           : ""
       }
       onConfirm={handleAlertConfirm}
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
  history: {
    padding: 16,
    gap: 16,
  },
});

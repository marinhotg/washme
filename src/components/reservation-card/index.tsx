import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ReservationCardProps {
 type: 'Lavadora' | 'Secadora';
 number: number;
 date: string;
 time: string;
 onDelete: () => void;
}

export function ReservationCard({ type, number, date, time, onDelete }: ReservationCardProps) {
 return (
   <View style={styles.container}>
     <View>
       <Text style={styles.title}>
         {type} {number}
       </Text>
       <Text style={styles.info}>
         Data: {date}
       </Text>
       <Text style={styles.info}>
         Horário: {time}
       </Text>
     </View>

     <TouchableOpacity onPress={onDelete}>
       <Ionicons name="close" size={24} color="#276672" />
     </TouchableOpacity>
   </View>
 );
}

const styles = StyleSheet.create({
 container: {
   width: '100%',
   padding: 16,
   backgroundColor: '#FFFFFF',
   borderWidth: 1,
   borderColor: '#E2E8F0',
   borderRadius: 8,
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'center',
 },
 title: {
   color: '#276672',
   fontSize: 16,
   fontWeight: '700',
   lineHeight: 24,
 },
 info: {
   color: '#64748B',
   fontSize: 16,
   fontWeight: '400',
   lineHeight: 24,
 }
});
import { LostItems } from '../../../src/screens/lost-items';
import { useLocalSearchParams } from 'expo-router';

export default function LostItemsPage() {
  const { newItem } = useLocalSearchParams<{ newItem?: string }>();
  
  // Se houver um novo item, adiciona à lista
  if (newItem) {
    const parsedItem = JSON.parse(newItem);
    // Aqui você pode implementar a lógica para adicionar à lista
  }

  return <LostItems />;
}
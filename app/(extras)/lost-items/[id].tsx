import { LostItemDetails } from '../../../src/screens/lost-item-details';
import { useLocalSearchParams, router } from 'expo-router';

export default function LostItemDetailsPage() {
  const params = useLocalSearchParams<{
    id: string;
    image: string;
    date: string;
    description: string;
  }>();

  return (
    <LostItemDetails
      image={params.image}
      date={params.date}
      description={params.description}
      onBack={() => router.back()}
    />
  );
}
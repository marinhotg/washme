import { Stack } from 'expo-router/stack';
import { AuthProvider } from '../src/contexts/auth';

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </AuthProvider>
  );
}
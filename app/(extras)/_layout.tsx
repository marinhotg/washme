import { Stack } from 'expo-router/stack';
import { useAuth } from '../../src/contexts/auth';
import { Redirect } from 'expo-router';

export default function ExtrasLayout() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Redirect href="/(auth)/login" />;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
import { LostItemsProvider } from '../src/contexts/lost-items';
import { Stack } from "expo-router/stack";
import { AuthProvider } from "../src/contexts/auth";

export default function RootLayout() {
  return (
    <AuthProvider>
      <LostItemsProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </LostItemsProvider>
    </AuthProvider>
  );
}
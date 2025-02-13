import { Tabs } from "expo-router/tabs";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function AppLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          backgroundColor: "#FFFFFF",
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          paddingBottom: 12,
          paddingTop: 12,
        },
        tabBarItemStyle: {
          height: 70,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarButton: (props) => <TouchableOpacity {...props} activeOpacity={1} />,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={focused ? 30 : 26}
              color={focused ? "#276672" : "#000000"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="reservations"
        options={{
          tabBarButton: (props) => <TouchableOpacity {...props} activeOpacity={1} />,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "calendar" : "calendar-outline"}
              size={focused ? 30 : 26}
              color={focused ? "#276672" : "#000000"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarButton: (props) => <TouchableOpacity {...props} activeOpacity={1} />,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={focused ? 30 : 26}
              color={focused ? "#276672" : "#000000"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarButton: (props) => <TouchableOpacity {...props} activeOpacity={1} />,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "settings" : "settings-outline"}
              size={focused ? 30 : 26}
              color={focused ? "#276672" : "#000000"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          tabBarButton: (props) => <TouchableOpacity {...props} activeOpacity={1} />,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "ellipsis-horizontal" : "ellipsis-horizontal-outline"}
              size={focused ? 30 : 26}
              color={focused ? "#276672" : "#000000"}
            />
          ),
        }}
      />
    </Tabs>
  );
}

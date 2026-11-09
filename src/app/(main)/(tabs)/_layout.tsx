import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function MainTabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: '#007AFF',
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          title: 'Dashboard',
          tabBarAccessibilityLabel: 'Dashboard',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color as string} />
          ),
        }}
      />
      <Tabs.Screen
        name="vehicle"
        options={{
          title: 'Vehicle',
          tabBarAccessibilityLabel: 'Choose vehicle',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="car-outline" size={size} color={color as string} />
          ),
        }}
      />
      <Tabs.Screen
        name="trips"
        options={{
          title: 'Trips',
          headerShown: false,
          tabBarAccessibilityLabel: 'Estimate trip costs',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="map-outline" size={size} color={color as string} />
          ),
        }}
      />
    </Tabs>
  );
}

import { MetricCard } from '@/components/dashboard/MetricCard';
import { Card } from '@/components/global/Card';
import { DEFAULT_VEHICLE_ID, VEHICLES } from '@/components/vehicles/vehicles';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';

import {
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const WEEK_DATA = [
  { day: 'Mon', km: 38 },
  { day: 'Tue', km: 52 },
  { day: 'Wed', km: 24 },
  { day: 'Thu', km: 65 },
  { day: 'Fri', km: 45 },
  { day: 'Sat', km: 78 },
  { day: 'Sun', km: 18 },
];

const METRICS = [
  { icon: 'gas-station-outline', label: 'Fuel & Price', value: 'RON 92', caption: '$1.28 / L' },
  { icon: 'speedometer', label: 'Total Driven', value: '14,820 km', caption: '+320 km this week' },
  { icon: 'fuel', label: 'Gas Consumed', value: '24.6 L', caption: 'This week' },
  { icon: 'leaf', label: 'Efficiency', value: '7.7 L / 100km', caption: 'Avg. consumption' },
] as const;

const MAX_KM = Math.max(...WEEK_DATA.map((d) => d.km));

export default function DashboardScreen() {
  const router = useRouter();
  const { vehicleId } = useLocalSearchParams<{ vehicleId?: string }>();
  const vehicle =
    VEHICLES.find((item) => item.id === vehicleId) ??
    VEHICLES.find((item) => item.id === DEFAULT_VEHICLE_ID)!;

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        className="px-4 py-4"
      >
        <View className="max-w-[420px] w-full mx-auto pb-6">
          {/* Header */}
          <View className="flex-row items-center justify-between mb-5">
            <View>
              <Text className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">
                Vehicle Overview
              </Text>
              <Text className="text-xl font-bold text-on-surface">Hello, Driver</Text>
            </View>
            <Pressable
              onPress={() => router.replace('/')}
              accessibilityLabel="Log out"
              className="w-10 h-10 rounded-full items-center justify-center bg-surface-container active:bg-outline-variant/30"
            >
              <Ionicons name="log-out-outline" size={20} color="#404940" />
            </Pressable>
          </View>

          {/* Current Car Card */}
          <Pressable
            onPress={() =>
              router.navigate({
                pathname: '/(main)/(tabs)/vehicle',
                params: { vehicleId: vehicle.id },
              })
            }
            accessibilityRole="button"
            accessibilityLabel={`Change vehicle. Current vehicle: ${vehicle.make} ${vehicle.model}`}
            className="bg-primary-container rounded-2xl p-5 mb-4 shadow-sm active:opacity-90"
          >
            <View className="flex-row items-center justify-between mb-3">
              <View className="w-10 h-10 rounded-xl bg-primary items-center justify-center">
                <MaterialCommunityIcons name="car-side" size={24} color="#a6f4b5" />
              </View>
              <View className="px-2.5 py-1 rounded-full bg-primary/60">
                <Text className="text-[11px] font-semibold text-primary-fixed">Active Vehicle</Text>
              </View>
            </View>
            <Text className="text-xl font-bold text-on-primary">
              {vehicle.make} {vehicle.model} ({vehicle.year})
            </Text>
            <Text className="text-xs text-primary-fixed mt-0.5">
              License: {vehicle.licensePlate} • Tank: {vehicle.tankCapacity} L
            </Text>
            <View className="mt-3 flex-row items-center">
              <Text className="text-xs font-semibold text-primary-fixed">
                Change vehicle
              </Text>
              <Ionicons name="chevron-forward" size={14} color="#d3f8d4" />
            </View>
          </Pressable>
          
          {/* Fuel & Mileage Grid */}
          <View className="flex-row gap-3 mb-3">
            <MetricCard {...METRICS[0]} />
            <MetricCard {...METRICS[1]} />
          </View>

          {/* Consumption & Efficiency Grid */}
          <View className="flex-row gap-3 mb-4">
            <MetricCard {...METRICS[2]} />
            <MetricCard {...METRICS[3]} />
          </View>

          {/* Weekly Distance Chart */}
          <Card>
            <View className="flex-row items-center justify-between mb-4">
              <View>
                <Text className="text-sm font-bold text-on-surface">Kilometers Per Day</Text>
                <Text className="text-xs text-outline">Activity this week</Text>
              </View>
              <Text className="text-xs font-semibold text-primary-container">
                {WEEK_DATA.reduce((sum, d) => sum + d.km, 0)} km total
              </Text>
            </View>



            {/* Native CSS flex bar chart */}
            <View className="h-36 flex-row items-end justify-between pt-4 px-1 border-b border-outline-variant/30">
              {WEEK_DATA.map((item) => {
                const heightPercent = Math.round((item.km / MAX_KM) * 100);
                return (
                  <View key={item.day} className="items-center flex-1">
                    <Text className="text-[10px] text-outline mb-1">{item.km}</Text>
                    <View className="w-5 bg-surface-container-low rounded-t-md h-24 justify-end overflow-hidden">
                      <View
                        style={{ height: `${heightPercent}%` }}
                        className="w-full bg-primary-container rounded-t-md"
                      />
                    </View>
                  </View>
                );
              })}
            </View>

            <View className="flex-row justify-between pt-2 px-1">
              {WEEK_DATA.map((item) => (
                <Text key={item.day} className="flex-1 text-center text-[11px] font-medium text-on-surface-variant">
                  {item.day}
                </Text>
              ))}
            </View>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

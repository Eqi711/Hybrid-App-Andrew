import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';

const WEEK_DATA = [
  { day: 'Mon', km: 38 },
  { day: 'Tue', km: 52 },
  { day: 'Wed', km: 24 },
  { day: 'Thu', km: 65 },
  { day: 'Fri', km: 45 },
  { day: 'Sat', km: 78 },
  { day: 'Sun', km: 18 },
];

const MAX_KM = Math.max(...WEEK_DATA.map((d) => d.km));

export default function DashboardScreen() {
  const router = useRouter();

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
          <View className="bg-primary-container rounded-2xl p-5 mb-4 shadow-sm">
            <View className="flex-row items-center justify-between mb-3">
              <View className="w-10 h-10 rounded-xl bg-primary items-center justify-center">
                <MaterialCommunityIcons name="car-side" size={24} color="#a6f4b5" />
              </View>
              <View className="px-2.5 py-1 rounded-full bg-primary/60">
                <Text className="text-[11px] font-semibold text-primary-fixed">Active Vehicle</Text>
              </View>
            </View>
            <Text className="text-xl font-bold text-on-primary">Honda Civic RS (2023)</Text>
            <Text className="text-xs text-primary-fixed mt-0.5">License: B 1234 GAS • Tank: 47 L</Text>
          </View>

          {/* Fuel & Mileage Grid */}
          <View className="flex-row gap-3 mb-3">
            <View className="flex-1 bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-4 shadow-sm">
              <View className="flex-row items-center gap-1.5 mb-1.5">
                <MaterialCommunityIcons name="gas-station-outline" size={18} color="#166534" />
                <Text className="text-xs font-semibold text-on-surface-variant">Fuel & Price</Text>
              </View>
              <Text className="text-base font-bold text-on-surface">RON 92</Text>
              <Text className="text-xs text-outline">$1.28 / L</Text>
            </View>

            <View className="flex-1 bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-4 shadow-sm">
              <View className="flex-row items-center gap-1.5 mb-1.5">
                <MaterialCommunityIcons name="speedometer" size={18} color="#166534" />
                <Text className="text-xs font-semibold text-on-surface-variant">Total Driven</Text>
              </View>
              <Text className="text-base font-bold text-on-surface">14,820 km</Text>
              <Text className="text-xs text-outline">+320 km this week</Text>
            </View>
          </View>

          <View className="flex-row gap-3 mb-4">
            <View className="flex-1 bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-4 shadow-sm">
              <View className="flex-row items-center gap-1.5 mb-1.5">
                <MaterialCommunityIcons name="fuel" size={18} color="#166534" />
                <Text className="text-xs font-semibold text-on-surface-variant">Gas Consumed</Text>
              </View>
              <Text className="text-base font-bold text-on-surface">24.6 L</Text>
              <Text className="text-xs text-outline">This week</Text>
            </View>

            <View className="flex-1 bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-4 shadow-sm">
              <View className="flex-row items-center gap-1.5 mb-1.5">
                <MaterialCommunityIcons name="leaf" size={18} color="#166534" />
                <Text className="text-xs font-semibold text-on-surface-variant">Efficiency</Text>
              </View>
              <Text className="text-base font-bold text-on-surface">7.7 L / 100km</Text>
              <Text className="text-xs text-outline">Avg. consumption</Text>
            </View>
          </View>

          {/* Weekly Distance Chart */}
          <View className="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-4 shadow-sm">
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
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

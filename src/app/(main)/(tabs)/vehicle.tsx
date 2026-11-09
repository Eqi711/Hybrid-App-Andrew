import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { Button } from '@/components/global/Button';
import { CarCard } from '@/components/vehicles/CarCard';
import {
  DEFAULT_VEHICLE_ID,
  VEHICLES,
} from '@/components/vehicles/vehicles';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CarSelectorTabScreen() {
  const router = useRouter();
  const { vehicleId } = useLocalSearchParams<{ vehicleId?: string }>();
  const initialVehicleId = VEHICLES.some((vehicle) => vehicle.id === vehicleId)
    ? vehicleId!
    : DEFAULT_VEHICLE_ID;
  const [selectedVehicleId, setSelectedVehicleId] = useState(initialVehicleId);

  const handleContinue = () => {
    router.replace({
      pathname: '/(main)/(tabs)/dashboard',
      params: { vehicleId: selectedVehicleId },
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        className="px-4 py-4"
      >
        <View className="mx-auto w-full max-w-[420px] flex-1">
          <View className="mb-6">
            <Text className="text-xl font-bold text-on-surface">
              Choose your vehicle
            </Text>
            <Text className="mt-0.5 text-sm text-on-surface-variant">
              Select a car to view its fuel activity.
            </Text>
          </View>

          <View className="gap-3">
            {VEHICLES.map((vehicle) => (
              <CarCard
                key={vehicle.id}
                vehicle={vehicle}
                selected={vehicle.id === selectedVehicleId}
                onPress={() => setSelectedVehicleId(vehicle.id)}
              />
            ))}
          </View>

          <View className="mt-auto pt-6">
            <Button title="Use this vehicle" onPress={handleContinue} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

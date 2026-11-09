import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Card } from '@/components/global/Card';
import { Pressable, Text, View } from 'react-native';
import type { Vehicle } from './vehicles';

type CarCardProps = {
  vehicle: Vehicle;
  selected: boolean;
  onPress: () => void;
};

export function CarCard({ vehicle, selected, onPress }: CarCardProps) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="radio"
      accessibilityState={{ checked: selected }}
      accessibilityLabel={`${vehicle.year} ${vehicle.make} ${vehicle.model}, license plate ${vehicle.licensePlate}`}
    >
      <Card
        className={`flex-row items-center gap-4 ${
          selected ? 'border-primary-container' : ''
        }`}
      >
        <View className="h-12 w-12 items-center justify-center rounded-xl bg-primary-container/15">
          <MaterialCommunityIcons name="car-side" size={26} color="#166534" />
        </View>

        <View className="flex-1">
          <Text className="text-base font-bold text-on-surface">
            {vehicle.make} {vehicle.model}
          </Text>
          <Text className="mt-0.5 text-xs text-on-surface-variant">
            {vehicle.year} · {vehicle.licensePlate}
          </Text>
          <Text className="mt-1 text-xs text-outline">
            Tank capacity: {vehicle.tankCapacity} L
          </Text>
        </View>

        <MaterialCommunityIcons
          name={selected ? 'check-circle' : 'circle-outline'}
          size={22}
          color={selected ? '#166534' : '#707a6f'}
        />
      </Card>
    </Pressable>
  );
}

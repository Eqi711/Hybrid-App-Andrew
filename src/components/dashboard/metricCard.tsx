import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

type IconName = React.ComponentProps<typeof MaterialCommunityIcons>['name'];

type MetricCardProps = {
  icon: IconName;
  label: string;
  value: string;
  caption: string;
};

export function MetricCard({ icon, label, value, caption }: MetricCardProps) {
  return (
    <View className="flex-1 bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-4 shadow-sm">
      <View className="flex-row items-center gap-1.5 mb-1.5">
        <MaterialCommunityIcons name={icon} size={18} color="#166534" />
        <Text className="text-xs font-semibold text-on-surface-variant">{label}</Text>
      </View>
      <Text className="text-base font-bold text-on-surface">{value}</Text>
      <Text className="text-xs text-outline">{caption}</Text>
    </View>
  );
}
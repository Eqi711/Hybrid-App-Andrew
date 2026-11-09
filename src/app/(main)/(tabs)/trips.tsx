import { Ionicons } from '@expo/vector-icons';
import { Button } from '@/components/global/Button';
import { Card } from '@/components/global/Card';
import { TextField } from '@/components/global/TextField';
import { useState } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ESTIMATE_EXAMPLE = {
  distance: '150 km',
  fuel: 120000,
  toll: 65000,
  total: 185000,
};

const formatRupiah = (amount: number) =>
  `Rp ${new Intl.NumberFormat('id-ID').format(amount)}`;

export default function TripsScreen() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [showEstimate, setShowEstimate] = useState(false);
  const canCalculate = origin.trim().length > 0 && destination.trim().length > 0;

  const swapLocations = () => {
    setOrigin(destination);
    setDestination(origin);
    setShowEstimate(false);
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        className="px-4 py-4"
      >
        <View className="mx-auto w-full max-w-[420px] pb-6">
          <View className="mb-5">
            <Text className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
              Trips
            </Text>
            <Text className="text-xl font-bold text-on-surface">
              Plan a trip
            </Text>
          </View>

          <Card className="mb-4">
            <Image
              source={require('../../../../assets/images/trips-map-placeholder.png')}
              resizeMode="cover"
              accessibilityLabel="Sample map showing a route from point A to point B"
              style={{ width: '100%', aspectRatio: 4 / 3 }}
              className="rounded-xl"
            />
            <View className="mt-3 flex-row items-center">
              <Ionicons name="map-outline" size={15} color="#707a6f" />
              <Text className="ml-1.5 text-xs text-on-surface-variant">
                Map preview
              </Text>
            </View>
          </Card>

          <Card>
            <View className="mb-4 flex-row items-center justify-between">
              <Text className="text-sm font-bold text-on-surface">Your route</Text>
              <Pressable
                onPress={swapLocations}
                accessibilityRole="button"
                accessibilityLabel="Swap current location and destination"
              >
                <Text className="text-xs font-semibold text-primary-container">
                  Swap
                </Text>
              </Pressable>
            </View>

            <View className="mb-4">
              <TextField
                label="Current location"
                icon="map-marker-radius-outline"
                accessibilityLabel="Current location"
                autoCapitalize="words"
                onChangeText={(value) => {
                  setOrigin(value);
                  setShowEstimate(false);
                }}
                placeholder="e.g. Central Jakarta"
                returnKeyType="next"
                value={origin}
              />
            </View>

            <View className="mb-4">
              <TextField
                label="Destination"
                icon="map-marker-outline"
                accessibilityLabel="Destination"
                autoCapitalize="words"
                onChangeText={(value) => {
                  setDestination(value);
                  setShowEstimate(false);
                }}
                onSubmitEditing={() => {
                  if (canCalculate) setShowEstimate(true);
                }}
                placeholder="e.g. Bandung"
                returnKeyType="done"
                value={destination}
              />
            </View>

            <Button
              title="Estimate trip cost"
              accessibilityLabel="Estimate trip cost"
              disabled={!canCalculate}
              onPress={() => setShowEstimate(true)}
            />
          </Card>

          {showEstimate && (
            <Card className="mt-4">
              <View className="mb-4 flex-row items-start justify-between">
                <View className="flex-1 pr-3">
                  <Text className="text-sm font-bold text-on-surface">
                    Estimated trip cost
                  </Text>
                  <Text className="mt-1 text-xs text-on-surface-variant">
                    {origin.trim()} to {destination.trim()}
                  </Text>
                </View>
                <Text className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary-container">
                  Sample
                </Text>
              </View>

              <View className="mb-3 flex-row items-center rounded-xl bg-surface-container-low px-3 py-2.5">
                <Ionicons name="map-outline" size={17} color="#166534" />
                <Text className="ml-2 text-sm font-semibold text-on-surface-variant">
                  Sample distance
                </Text>
                <Text className="ml-auto text-sm font-bold text-on-surface">
                  {ESTIMATE_EXAMPLE.distance}
                </Text>
              </View>

              <View className="gap-3 px-1">
                <View className="flex-row items-center justify-between">
                  <Text className="text-sm text-on-surface-variant">Fuel</Text>
                  <Text className="text-sm font-semibold text-on-surface">
                    {formatRupiah(ESTIMATE_EXAMPLE.fuel)}
                  </Text>
                </View>
                <View className="flex-row items-center justify-between">
                  <Text className="text-sm text-on-surface-variant">Toll</Text>
                  <Text className="text-sm font-semibold text-on-surface">
                    {formatRupiah(ESTIMATE_EXAMPLE.toll)}
                  </Text>
                </View>
              </View>

              <View className="my-4 h-px bg-outline-variant/40" />

              <View className="flex-row items-center justify-between">
                <Text className="text-sm font-bold text-on-surface">
                  Estimated total
                </Text>
                <Text className="text-xl font-extrabold text-primary-container">
                  {formatRupiah(ESTIMATE_EXAMPLE.total)}
                </Text>
              </View>
            </Card>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Button } from '@/components/global/Button';
import { Card } from '@/components/global/Card';
import { PasswordField } from '@/components/global/PasswordField';
import { TextField } from '@/components/global/TextField';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RegisterScreen() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    router.push('/dashboard');
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          className="px-4 py-4"
        >
          <View className="mx-auto flex-1 w-full max-w-[420px] justify-between">
            <View className="mb-2 h-12 w-full flex-row items-center justify-between">
              <Pressable
                onPress={() => router.replace('/(auth)/login')}
                accessibilityLabel="Back to login"
                className="h-10 w-10 items-center justify-center rounded-full active:bg-surface-container"
              >
                <Ionicons name="arrow-back" size={22} color="#404940" />
              </Pressable>
              <Pressable
                onPress={() => router.replace('/(auth)/login')}
                className="rounded-full px-3 py-1.5 active:bg-surface-container"
              >
                <Text className="text-xs font-medium text-on-surface-variant">
                  Log in
                </Text>
              </Pressable>
            </View>

            <View className="mb-6 mt-2 items-center text-center">
              <View className="mb-3 h-14 w-14 items-center justify-center rounded-2xl bg-primary-container shadow-sm">
                <MaterialCommunityIcons name="gas-station" size={30} color="#FFFFFF" />
              </View>
              <Text className="text-2xl font-bold tracking-tight text-primary">
                Gaspas
              </Text>
              <Text className="mt-2 text-center text-sm text-on-surface-variant">
                Create an account to manage your vehicle and fuel activity.
              </Text>
            </View>

            <Card padding="large" className="mb-5">
              <View className="mb-4">
                <TextField
                  label="Full Name"
                  icon="account-outline"
                  value={name}
                  onChangeText={setName}
                  placeholder="Your name"
                  autoCapitalize="words"
                  autoComplete="name"
                />
              </View>

              <View className="mb-4">
                <TextField
                  label="Email Address"
                  icon="email-outline"
                  value={email}
                  onChangeText={setEmail}
                  placeholder="you@example.com"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoComplete="email"
                />
              </View>

              <View className="mb-5">
                <PasswordField
                  label="Password"
                  value={password}
                  onChangeText={setPassword}
                  placeholder="Create a password"
                  autoComplete="new-password"
                />
              </View>

              <Button title="Create Account" onPress={handleRegister} />
            </Card>

            <View className="mt-auto items-center pb-2 pt-4">
              <View className="flex-row items-center">
                <Text className="text-sm text-on-surface-variant">
                  Already have an account?
                </Text>
                <Pressable
                  onPress={() => router.replace('/(auth)/login')}
                  className="ml-1"
                >
                  <Text className="text-sm font-semibold text-primary-container">
                    Log in
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
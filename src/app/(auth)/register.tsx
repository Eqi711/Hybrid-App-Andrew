import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function RegisterScreen() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

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

            <View className="mb-5 rounded-2xl border border-outline-variant/40 bg-surface-container-lowest p-5 shadow-sm">
              <View className="mb-4">
                <Text className="mb-1.5 text-xs font-semibold text-on-surface-variant">
                  Full Name
                </Text>
                <View className="relative justify-center">
                  <View className="pointer-events-none absolute left-3.5 z-10">
                    <MaterialCommunityIcons name="account-outline" size={20} color="#707a6f" />
                  </View>
                  <TextInput
                    value={name}
                    onChangeText={setName}
                    placeholder="Your name"
                    placeholderTextColor="#707a6f"
                    autoCapitalize="words"
                    autoComplete="name"
                    className="h-[52px] w-full rounded-xl border border-outline-variant/60 bg-background pl-11 pr-4 text-sm text-on-surface focus:border-primary-container"
                  />
                </View>
              </View>

              <View className="mb-4">
                <Text className="mb-1.5 text-xs font-semibold text-on-surface-variant">
                  Email Address
                </Text>
                <View className="relative justify-center">
                  <View className="pointer-events-none absolute left-3.5 z-10">
                    <MaterialCommunityIcons name="email-outline" size={20} color="#707a6f" />
                  </View>
                  <TextInput
                    value={email}
                    onChangeText={setEmail}
                    placeholder="you@example.com"
                    placeholderTextColor="#707a6f"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoComplete="email"
                    className="h-[52px] w-full rounded-xl border border-outline-variant/60 bg-background pl-11 pr-4 text-sm text-on-surface focus:border-primary-container"
                  />
                </View>
              </View>

              <View className="mb-5">
                <Text className="mb-1.5 text-xs font-semibold text-on-surface-variant">
                  Password
                </Text>
                <View className="relative justify-center">
                  <View className="pointer-events-none absolute left-3.5 z-10">
                    <MaterialCommunityIcons name="lock-outline" size={20} color="#707a6f" />
                  </View>
                  <TextInput
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Create a password"
                    placeholderTextColor="#707a6f"
                    secureTextEntry={!showPassword}
                    autoComplete="new-password"
                    className="h-[52px] w-full rounded-xl border border-outline-variant/60 bg-background pl-11 pr-12 text-sm text-on-surface focus:border-primary-container"
                  />
                  <Pressable
                    onPress={() => setShowPassword(!showPassword)}
                    accessibilityLabel={showPassword ? 'Hide password' : 'Show password'}
                    className="absolute right-3.5 p-1"
                  >
                    <Ionicons
                      name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                      size={20}
                      color="#707a6f"
                    />
                  </Pressable>
                </View>
              </View>

              <Pressable
                onPress={handleRegister}
                className="h-[50px] w-full flex-row items-center justify-center gap-2 rounded-xl bg-primary-container shadow-sm active:bg-primary"
              >
                <Text className="text-sm font-semibold text-on-primary">
                  Create Account
                </Text>
              </Pressable>
            </View>

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
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
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
import Svg, { Path } from 'react-native-svg';

export default function LoginScreen() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const handleLogin = () => {
    // Front-end UI stage: Handle login interaction or navigation here
    console.log({ identifier, password, rememberMe });
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
          <View className="max-w-[420px] w-full mx-auto flex-1 justify-between">
            {/* Top Navigation Bar */}
            <View className="flex-row items-center justify-between h-12 w-full mb-2">
              <Pressable
                accessibilityLabel="Go back"
                className="w-10 h-10 items-center justify-center rounded-full active:bg-surface-container"
              >
                <Ionicons name="arrow-back" size={22} color="#404940" />
              </Pressable>
              <Pressable className="px-3 py-1.5 rounded-full active:bg-surface-container">
                <Text className="text-on-surface-variant font-medium text-xs">
                  Skip to App
                </Text>
              </Pressable>
            </View>

            {/* Branding Anchor */}
            <View className="items-center text-center mt-2 mb-6">
              <View className="items-center justify-center w-14 h-14 rounded-2xl bg-primary-container shadow-sm mb-3">
                <MaterialCommunityIcons name="gas-station" size={30} color="#FFFFFF" />
              </View>
              <Text className="text-2xl font-bold text-primary tracking-tight">
                Gaspas
              </Text>
            </View>

            {/* Login Form Card */}
            <View className="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-5 shadow-sm mb-5">
              {/* Identifier Field */}
              <View className="mb-4">
                <Text className="text-xs font-semibold text-on-surface-variant mb-1.5">
                  Email or Phone Number
                </Text>
                <View className="relative justify-center">
                  <View className="absolute left-3.5 z-10 pointer-events-none">
                    <MaterialCommunityIcons name="email-outline" size={20} color="#707a6f" />
                  </View>
                  <TextInput
                    value={identifier}
                    onChangeText={setIdentifier}
                    placeholder="farhan@example.com or +62 812..."
                    placeholderTextColor="#707a6f"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    className="w-full h-[52px] pl-11 pr-4 bg-background border border-outline-variant/60 rounded-xl text-sm text-on-surface focus:border-primary-container"
                  />
                </View>
              </View>

              {/* Password Field */}
              <View className="mb-4">
                <Text className="text-xs font-semibold text-on-surface-variant mb-1.5">
                  Password
                </Text>
                <View className="relative justify-center">
                  <View className="absolute left-3.5 z-10 pointer-events-none">
                    <MaterialCommunityIcons name="lock-outline" size={20} color="#707a6f" />
                  </View>
                  <TextInput
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Enter your password"
                    placeholderTextColor="#707a6f"
                    secureTextEntry={!showPassword}
                    className="w-full h-[52px] pl-11 pr-12 bg-background border border-outline-variant/60 rounded-xl text-sm text-on-surface focus:border-primary-container"
                  />
                  <Pressable
                    onPress={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 p-1"
                    accessibilityLabel="Toggle password visibility"
                  >
                    <Ionicons
                      name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                      size={20}
                      color="#707a6f"
                    />
                  </Pressable>
                </View>
              </View>

              {/* Utility Row: Remember Me & Forgot Password */}
              <View className="flex-row items-center justify-between pt-1 mb-4">
                <Pressable
                  onPress={() => setRememberMe(!rememberMe)}
                  className="flex-row items-center gap-2"
                >
                  <View
                    className={`w-4 h-4 rounded items-center justify-center border ${
                      rememberMe
                        ? 'bg-primary-container border-primary-container'
                        : 'border-outline-variant'
                    }`}
                  >
                    {rememberMe && <Ionicons name="checkmark" size={12} color="#FFFFFF" />}
                  </View>
                  <Text className="text-xs text-on-surface-variant">Remember me</Text>
                </Pressable>
                <Pressable>
                  <Text className="text-xs font-semibold text-primary-container">
                    Forgot password?
                  </Text>
                </Pressable>
              </View>

              {/* Primary Action Button */}
              <Pressable
                onPress={handleLogin}
                className="w-full h-[50px] bg-primary-container active:bg-primary rounded-xl flex-row items-center justify-center gap-2 shadow-sm"
              >
                <Text className="text-on-primary font-semibold text-sm">Log In</Text>
              </Pressable>
            </View>

            {/* Social Authentication Splitter */}
            <View className="mb-6">
              <View className="relative flex-row items-center justify-center my-2">
                <Text className="text-[11px] font-medium text-outline uppercase tracking-wider">
                    Or continue with
                </Text>
              </View>

              {/* Social Buttons Grid */}
              <View className="flex-row gap-3 pt-3">
                {/* Google SSO */}
                <Pressable className="flex-1 h-12 border border-outline-variant/50 bg-surface-container-lowest active:bg-surface-container-low rounded-xl flex-row items-center justify-center gap-2.5">
                  <GoogleIcon />
                  <Text className="text-sm font-medium text-on-surface">Google</Text>
                </Pressable>

                {/* WhatsApp */}
                <Pressable className="flex-1 h-12 border border-outline-variant/50 bg-surface-container-lowest active:bg-surface-container-low rounded-xl flex-row items-center justify-center gap-2">
                  <Ionicons name="logo-whatsapp" size={20} color="#25D366" />
                  <Text className="text-sm font-medium text-on-surface">WhatsApp</Text>
                </Pressable>
              </View>
            </View>

            {/* Footer */}
            <View className="mt-auto pt-4 pb-2 items-center">
              <View className="flex-row items-center">
                <Text className="text-sm text-on-surface-variant">
                  Don't have an account?
                </Text>
                <Pressable className="ml-1">
                  <Text className="text-sm font-semibold text-primary-container">
                    Sign up
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

// Google SVG Icon Component
function GoogleIcon() {
  return (
    <Svg width={16} height={16} viewBox="0 0 24 24">
      <Path
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.03h3.88c2.27-2.09 3.665-5.17 3.665-9.12z"
        fill="#4285F4"
      />
      <Path
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.03c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.13C3.27 21.43 7.35 24 12 24z"
        fill="#34A853"
      />
      <Path
        d="M5.28 14.29c-.25-.72-.38-1.49-.38-2.29s.13-1.57.38-2.29V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.13z"
        fill="#FBBC05"
      />
      <Path
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.94 1.19 15.24 0 12 0 7.35 0 3.27 2.57 1.25 6.58l4.03 3.13c.95-2.83 3.6-4.96 6.72-4.96z"
        fill="#EA4335"
      />
    </Svg>
  );
}
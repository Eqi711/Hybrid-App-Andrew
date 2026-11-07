import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Pressable } from 'react-native';
import type { TextFieldProps } from './TextField';
import { TextField } from './TextField';

type PasswordFieldProps = Omit<TextFieldProps, 'secureTextEntry' | 'trailing'>;

export function PasswordField(props: PasswordFieldProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <TextField
      {...props}
      secureTextEntry={!isVisible}
      icon={props.icon ?? 'lock-outline'}
      trailing={
        <Pressable
          onPress={() => setIsVisible((visible) => !visible)}
          accessibilityRole="button"
          accessibilityLabel={isVisible ? 'Hide password' : 'Show password'}
          className="absolute right-3.5 p-1"
        >
          <Ionicons
            name={isVisible ? 'eye-off-outline' : 'eye-outline'}
            size={20}
            color="#707a6f"
          />
        </Pressable>
      }
    />
  );
}

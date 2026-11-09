import { MaterialCommunityIcons } from '@expo/vector-icons';
import type { ReactNode } from 'react';
import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import type { TextInputProps } from 'react-native';

type IconName = React.ComponentProps<typeof MaterialCommunityIcons>['name'];

export type TextFieldProps = Omit<TextInputProps, 'placeholderTextColor'> & {
  label: string;
  icon?: IconName;
  trailing?: ReactNode;
};

export function TextField({
  label,
  icon,
  trailing,
  onFocus,
  onBlur,
  ...inputProps
}: TextFieldProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View>
      <Text className="mb-1.5 text-xs font-semibold text-on-surface-variant">
        {label}
      </Text>
      <View
        className={`relative h-[52px] w-full justify-center rounded-xl border bg-background ${
          isFocused ? 'border-2 border-primary-container' : 'border-outline-variant/60'
        }`}
      >
        {icon && (
          <View className="pointer-events-none absolute left-3.5 z-10">
            <MaterialCommunityIcons name={icon} size={20} color="#707a6f" />
          </View>
        )}
        <TextInput
          {...inputProps}
          onFocus={(event) => {
            setIsFocused(true);
            onFocus?.(event);
          }}
          onBlur={(event) => {
            setIsFocused(false);
            onBlur?.(event);
          }}
          placeholderTextColor="#707a6f"
          className={`h-full w-full bg-transparent text-sm text-on-surface ${icon ? 'pl-11' : 'pl-4'} ${trailing ? 'pr-12' : 'pr-4'}`}
        />
        {trailing}
      </View>
    </View>
  );
}

import { MaterialCommunityIcons } from '@expo/vector-icons';
import type { ReactNode } from 'react';
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
  ...inputProps
}: TextFieldProps) {
  return (
    <View>
      <Text className="mb-1.5 text-xs font-semibold text-on-surface-variant">
        {label}
      </Text>
      <View className="relative justify-center">
        {icon && (
          <View className="pointer-events-none absolute left-3.5 z-10">
            <MaterialCommunityIcons name={icon} size={20} color="#707a6f" />
          </View>
        )}
        <TextInput
          {...inputProps}
          placeholderTextColor="#707a6f"
          className={`h-[52px] w-full rounded-xl border border-outline-variant/60 bg-background text-sm text-on-surface focus:border-primary-container ${icon ? 'pl-11' : 'pl-4'} ${trailing ? 'pr-12' : 'pr-4'}`}
        />
        {trailing}
      </View>
    </View>
  );
}

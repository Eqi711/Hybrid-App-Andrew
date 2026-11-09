import { Text, Pressable } from 'react-native';
import type { PressableProps } from 'react-native';

type ButtonProps = {
  title: string;
  onPress: NonNullable<PressableProps['onPress']>;
  disabled?: boolean;
  accessibilityLabel?: string;
};

export function Button({
  title,
  onPress,
  disabled,
  accessibilityLabel,
}: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? title}
      className={`h-[50px] w-full flex-row items-center justify-center gap-2 rounded-xl bg-primary-container shadow-sm ${
        disabled ? 'opacity-50' : 'active:bg-primary'
      }`}
    >
      <Text className="text-sm font-semibold text-on-primary">{title}</Text>
    </Pressable>
  );
}

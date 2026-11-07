import type { ReactNode } from 'react';
import { View } from 'react-native';

type CardProps = {
  children: ReactNode;
  className?: string;
  padding?: 'medium' | 'large';
};

const paddingClasses = {
  medium: 'p-4',
  large: 'p-5',
};

export function Card({
  children,
  className = '',
  padding = 'medium',
}: CardProps) {
  return (
    <View
      className={`rounded-2xl border border-outline-variant/40 bg-surface-container-lowest shadow-sm ${paddingClasses[padding]} ${className}`}
    >
      {children}
    </View>
  );
}

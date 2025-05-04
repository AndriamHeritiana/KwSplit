import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    ActivityIndicator,
    ViewStyle,
    TextStyle,
    TouchableOpacityProps
} from 'react-native';
import { useTheme } from '@/presentation/context/ThemeContext';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    onPress: () => void;
    variant?: 'primary' | 'secondary' | 'outline' | 'text';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    loading?: boolean;
    style?: ViewStyle;
    textStyle?: TextStyle;
    icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
                                                  title,
                                                  onPress,
                                                  variant = 'primary',
                                                  size = 'medium',
                                                  disabled = false,
                                                  loading = false,
                                                  style,
                                                  textStyle,
                                                  icon,
                                                  ...props
                                              }) => {
    const { colors } = useTheme();

    const buttonStyles = [
        styles.button,
        styles[size],
        variant === 'primary' && { backgroundColor: colors.primary },
        variant === 'secondary' && { backgroundColor: colors.secondary },
        variant === 'outline' && {
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: colors.primary
        },
        variant === 'text' && {
            backgroundColor: 'transparent',
            elevation: 0,
            shadowOpacity: 0,
        },
        disabled && { opacity: 0.6 },
        style
    ];

    const textStyles = [
        styles.text,
        styles[`${size}Text`],
        variant === 'primary' && { color: '#FFFFFF' },
        variant === 'secondary' && { color: '#FFFFFF' },
        variant === 'outline' && { color: colors.primary },
        variant === 'text' && { color: colors.primary },
        textStyle
    ];

    return (
        <TouchableOpacity
            style={buttonStyles}
            onPress={onPress}
            disabled={disabled || loading}
            activeOpacity={0.7}
            {...props}
        >
            {loading ? (
                <ActivityIndicator
                    size="small"
                    color={variant === 'outline' || variant === 'text' ? colors.primary : '#FFFFFF'}
                />
            ) : (
                <>
                    {icon && icon}
                    <Text style={textStyles}>{title}</Text>
                </>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        elevation: 2,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    small: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    medium: {
        paddingVertical: 12,
        paddingHorizontal: 24,
    },
    large: {
        paddingVertical: 16,
        paddingHorizontal: 32,
    },
    text: {
        fontFamily: 'Poppins-Medium',
        textAlign: 'center',
    },
    smallText: {
        fontSize: 12,
    },
    mediumText: {
        fontSize: 14,
    },
    largeText: {
        fontSize: 16,
    },
});
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ViewStyle,
    TouchableOpacity,
    TouchableOpacityProps
} from 'react-native';
import { useTheme } from '@/presentation/context/ThemeContext';

interface CardProps extends TouchableOpacityProps {
    title?: string;
    children: React.ReactNode;
    style?: ViewStyle;
    onPress?: () => void;
    rightAction?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
                                              title,
                                              children,
                                              style,
                                              onPress,
                                              rightAction,
                                              ...props
                                          }) => {
    const { colors } = useTheme();

    const CardContainer = onPress ? TouchableOpacity : View;

    return (
        <CardContainer
            style={[
                styles.card,
                {
                    backgroundColor: colors.card,
                    borderColor: colors.border
                },
                style
            ]}
            onPress={onPress}
            activeOpacity={0.8}
            {...props}
        >
            {title && (
                <View style={styles.titleContainer}>
                    <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
                    {rightAction && rightAction}
                </View>
            )}
            {children}
        </CardContainer>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 12,
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 0,
        borderWidth: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    title: {
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
    }
});
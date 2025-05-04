import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';
import { Smartphone, History, ChartBar as BarChart2, Settings } from 'lucide-react-native';
import { useTheme } from '@/presentation/context/ThemeContext';

export default function TabLayout() {
    const { colors } = useTheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.textSecondary,
                tabBarStyle: {
                    backgroundColor: colors.background,
                    borderTopColor: colors.border,
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 60,
                    paddingBottom: 10,
                },
                tabBarLabelStyle: {
                    fontFamily: 'Poppins-Medium',
                    fontSize: 12,
                },
                headerShown: false,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Smartphone size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="readings"
                options={{
                    title: 'Readings',
                    tabBarIcon: ({ color, size }) => (
                        <Smartphone size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="history"
                options={{
                    title: 'History',
                    tabBarIcon: ({ color, size }) => (
                        <History size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="stats"
                options={{
                    title: 'Statistics',
                    tabBarIcon: ({ color, size }) => (
                        <BarChart2 size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: 'Settings',
                    tabBarIcon: ({ color, size }) => (
                        <Settings size={size} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
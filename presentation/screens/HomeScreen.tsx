import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import {Button} from "@/presentation/components/ui/Button";
import {BarChart2, Bell, CirclePlus as PlusCircle, History, MessageSquare, Settings} from "lucide-react-native";
import {Card} from "@/presentation/components/ui/Card";
import {useTheme} from "@/presentation/context/ThemeContext";
import {useRouter} from "expo-router";
import {styles} from "@/presentation/context/Styles/styles";

export default function HomeScreen() {
    const { colors } = useTheme();
    const router = useRouter();
    const handleAddReading = () => {
        router.push('/readings');
    };
    const handleViewHistory = () => {
        router.push('/history');
    }
    const handleViewStats = () => {
        router.push('/stats');
    }
    return (
        <ScrollView
            style={[styles.container, { backgroundColor: colors.background }]}
            contentContainerStyle={styles.contentContainer}
        >
            <View style={styles.headerTop}>
                <Text style={[styles.title, { color: colors.text }]}>
                    Electricity Tracker
                </Text>
                <TouchableOpacity
                    // onPress={handleAddReading}
                    style={styles.iconOnly}
                >
                    <Bell size={24} color={colors.primary} />
                </TouchableOpacity>
            </View>
            <Card style={styles.noReadingCard}>
                <Text style={[styles.noReadingText, { color: colors.text }]}>
                    No readings recorded yet
                </Text>
                <Text style={[styles.noReadingSubtext, { color: colors.textSecondary }]}>
                    Start by adding your first electricity meter reading
                </Text>
                <Button
                    title="Add First Reading"
                    onPress={handleAddReading}
                    style={styles.addFirstButton}
                    icon={<PlusCircle size={18} color="#FFFFFF" style={{ marginRight: 8 }} />}
                />
            </Card>
            <View style={styles.quickLinksContainer}>
                <Text style={[styles.sectionTitle, { color: colors.text }]}>Quick Actions</Text>
                <View style={styles.quickLinksGrid}>
                    <TouchableOpacity
                        style={[styles.quickLinkCard, { backgroundColor: colors.card, borderColor: colors.border }]}
                        onPress={handleAddReading}
                    >
                        <PlusCircle size={24} color={colors.primary} />
                        <Text style={[styles.quickLinkText, { color: colors.text }]}>
                            New Reading
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.quickLinkCard, { backgroundColor: colors.card, borderColor: colors.border }]}
                        onPress={handleViewHistory}
                    >
                        <History size={24} color={colors.primary} />
                        <Text style={[styles.quickLinkText, { color: colors.text }]}>
                            History
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.quickLinkCard, { backgroundColor: colors.card, borderColor: colors.border }]}
                        onPress={handleViewStats}
                    >
                        <BarChart2 size={24} color={colors.primary} />
                        <Text style={[styles.quickLinkText, { color: colors.text }]}>
                            Statistics
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.quickLinkCard, { backgroundColor: colors.card, borderColor: colors.border }]}
                        onPress={() => router.push('/settings')}
                    >
                        <Settings size={24} color={colors.primary} />
                        <Text style={[styles.quickLinkText, { color: colors.text }]}>
                            Settings
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};
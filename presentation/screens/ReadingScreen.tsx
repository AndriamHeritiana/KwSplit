import React from "react";
import {useTheme} from "@/presentation/context/ThemeContext";
import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import {styles} from "@/presentation/context/Styles/styles";
import {Bell} from "lucide-react-native";
export default function ReadingScreen() {
    const {colors} = useTheme();
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
                    style={styles.iconOnly}
                >
                    <Bell size={24} color={colors.primary} />
                </TouchableOpacity>
            </View>
            <View style={styles.headerTitle}>
                <Text style={[styles.title, { color: colors.text }]}>Readings</Text>
            </View>
        </ScrollView>
    );
}
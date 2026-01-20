import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { COLORS, SPACING, FONT_SIZE } from '../constants/theme';

export const BloodBanksScreen = () => {
    const bloodBanks = [
        { id: 1, name: 'St Nicholas Hospital, Ajah', distance: '30 km away', rating: 4 },
        { id: 2, name: 'General Hospital Odan, Lagos', distance: '30 km away', rating: 4 },
        { id: 3, name: 'The Eko  Hospital, Ajah', distance: '30 km away', rating: 5 },
        { id: 4, name: 'The Eko  Hospital, Ajah', distance: '30 km away', rating: 4 },
        { id: 5, name: 'General Hospital Odan, Lagos', distance: '30 km away', rating: 5 },
        { id: 6, name: 'St Nicholas Hospital, Ajah', distance: '30 km away', rating: 4 },
    ];

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton}>
                    <Text style={styles.backIcon}>←</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Verified Blood Banks Near You</Text>
                <View style={styles.placeholder} />
            </View>

            {/* Search Bar */}
            <View style={styles.searchContainer}>
                <Text style={styles.searchIcon}>🔍</Text>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Find Donation Centers"
                    placeholderTextColor={COLORS.textLight}
                />
            </View>

            {/* Blood Banks List */}
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                {bloodBanks.map((bank) => (
                    <View key={bank.id} style={styles.bankCard}>
                        <View style={styles.bankIcon}>
                            <Text style={styles.bankIconText}>🏥</Text>
                        </View>
                        <View style={styles.bankInfo}>
                            <Text style={styles.bankName}>{bank.name}</Text>
                            <Text style={styles.bankDistance}>{bank.distance}</Text>
                            <View style={styles.rating}>
                                {[...Array(bank.rating)].map((_, i) => (
                                    <Text key={i} style={styles.star}>⭐</Text>
                                ))}
                                {[...Array(5 - bank.rating)].map((_, i) => (
                                    <Text key={`empty-${i}`} style={styles.starEmpty}>⭐</Text>
                                ))}
                            </View>
                        </View>
                    </View>
                ))}
                <View style={{ height: 20 }} />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: SPACING.m,
        paddingTop: SPACING.l,
        paddingBottom: SPACING.m,
    },
    backButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
    },
    backIcon: {
        fontSize: 24,
        color: COLORS.text,
    },
    title: {
        fontSize: FONT_SIZE.l,
        fontWeight: '600',
        color: COLORS.text,
        flex: 1,
        textAlign: 'center',
    },
    placeholder: {
        width: 40,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: SPACING.m,
        marginBottom: SPACING.m,
        paddingHorizontal: SPACING.m,
        paddingVertical: SPACING.s,
        backgroundColor: COLORS.background,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E5E5EA',
    },
    searchIcon: {
        fontSize: 20,
        marginRight: SPACING.s,
    },
    searchInput: {
        flex: 1,
        fontSize: FONT_SIZE.m,
        color: COLORS.text,
    },
    scrollView: {
        flex: 1,
    },
    bankCard: {
        flexDirection: 'row',
        marginHorizontal: SPACING.m,
        marginBottom: SPACING.m,
        padding: SPACING.m,
        backgroundColor: COLORS.background,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E5E5EA',
    },
    bankIcon: {
        width: 48,
        height: 48,
        borderRadius: 8,
        backgroundColor: '#E8F4FD',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: SPACING.m,
    },
    bankIconText: {
        fontSize: 24,
    },
    bankInfo: {
        flex: 1,
    },
    bankName: {
        fontSize: FONT_SIZE.m,
        fontWeight: '600',
        color: COLORS.text,
        marginBottom: 4,
    },
    bankDistance: {
        fontSize: FONT_SIZE.s,
        color: COLORS.textLight,
        marginBottom: 4,
    },
    rating: {
        flexDirection: 'row',
    },
    star: {
        fontSize: 16,
        color: '#FFD700',
    },
    starEmpty: {
        fontSize: 16,
        opacity: 0.3,
    },
});
